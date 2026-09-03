// Copy-safety verifier for the readability revamp.
//
// The site ranks on the words it has. This revamp is allowed to change how
// those words are ARRANGED (a sentence lifted into a pull quote, a paragraph
// re-split into bullets) but not the words themselves. Eyeballing a 900-line
// diff across 47 routes cannot prove that. This can.
//
//   node scripts/verify-copy.mjs snapshot <outDir>
//   node scripts/verify-copy.mjs snapshot-live <origin> <outDir>
//   node scripts/verify-copy.mjs compare <beforeDir> <afterDir>
//
// Uses a real DOM (puppeteer, already a dependency for prerendering) rather
// than regex. A regex HTML parser that quietly mis-parses one page produces a
// false PASS, which is the one outcome this script exists to prevent.
//
// The two text fingerprints are the heart of it:
//
//   words     A sorted multiset of every word in <main>. Catches any added,
//             deleted or reworded word. Immune to reordering and re-splitting,
//             so moving a sentence into a pull quote or turning a paragraph
//             into three bullets passes cleanly.
//
//   sentences An UNORDERED set of sentences. Catches rewording *inside* a
//             sentence, which the word multiset alone would miss if a
//             transposition happened to preserve the word counts. Unordered so
//             that lifting a sentence out of a paragraph still passes.
//
// Together they encode the constraint exactly: moves and re-splits pass, edits
// fail.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

// ── route discovery ────────────────────────────────────────────────────────
// Same source of truth as scripts/prerender.mjs, so the two can never drift.
function routesFromSitemap() {
  const xml = readFileSync(join(root, 'public', 'sitemap.xml'), 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const paths = locs.map((url) => {
    try {
      return new URL(url).pathname.replace(/\/$/, '') || '/';
    } catch {
      return null;
    }
  });
  return [...new Set(['/', ...paths.filter(Boolean)])];
}

const fileFor = (route) => route.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'root';

// ── the fingerprint, evaluated inside the page ─────────────────────────────
// Everything here runs in the browser against a real parsed document.
const FINGERPRINT = () => {
  const txt = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : null);
  const attr = (sel, a) => {
    const el = document.querySelector(sel);
    return el ? el.getAttribute(a) : null;
  };

  // Sort object keys recursively so a reordered object literal in the source
  // doesn't read as a schema change.
  const sortKeys = (v) => {
    if (Array.isArray(v)) return v.map(sortKeys);
    if (v && typeof v === 'object') {
      return Object.keys(v)
        .sort()
        .reduce((o, k) => ((o[k] = sortKeys(v[k])), o), {});
    }
    return v;
  };

  const main = document.querySelector('main');
  const scope = main || document.body;

  // textContent concatenates adjacent block elements with no separator, so
  // "...a full guided session." + "Desk yoga is..." arrives glued into one
  // pseudo-sentence. That would make sentence boundaries depend on DOM
  // structure -- the exact thing this revamp changes -- and every pull quote
  // would read as a false failure. Marking block boundaries first makes the
  // sentence set structure-independent, which is what we actually want to
  // hold constant.
  const BLOCK =
    'P,LI,H1,H2,H3,H4,H5,H6,DT,DD,BLOCKQUOTE,TD,TH,SUMMARY,FIGCAPTION,' +
    'DIV,SECTION,ARTICLE,UL,OL,DL,TABLE,TR,HEADER,FOOTER,NAV,ASIDE,MAIN,FIGURE,BR';
  const clone = scope.cloneNode(true);
  for (const el of clone.querySelectorAll(BLOCK)) el.appendChild(document.createTextNode('\u0001'));
  const blocks = clone.textContent
    .split('\u0001')
    .map((s) => s.replace(/\s+/g, ' ').trim())
    .filter(Boolean);

  const text = blocks.join(' ');

  const meta = {};
  for (const m of document.querySelectorAll('meta[property], meta[name]')) {
    const k = m.getAttribute('property') || m.getAttribute('name');
    if (/^(og:|twitter:|description$|robots$)/.test(k)) meta[k] = m.getAttribute('content');
  }

  const jsonld = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => {
    try {
      return JSON.stringify(sortKeys(JSON.parse(s.textContent)));
    } catch {
      return 'UNPARSEABLE:' + s.textContent.slice(0, 200);
    }
  });

  const ids = [...scope.querySelectorAll('[id]')].map((e) => e.id);
  const hashHrefs = [...scope.querySelectorAll('a[href^="#"]')].map((a) => a.getAttribute('href').slice(1));

  return {
    hasMain: !!main,
    title: txt(document.querySelector('title')),
    lang: document.documentElement.getAttribute('lang'),
    canonical: attr('link[rel="canonical"]', 'href'),
    meta,
    jsonld,
    // Ordered heading outline. Order matters: it is the document structure.
    headings: [...scope.querySelectorAll('h1,h2,h3,h4')].map((h) => [h.tagName.toLowerCase(), txt(h)]),
    // Ordered anchor inventory: href + anchor text, both ranking signals.
    anchors: [...scope.querySelectorAll('a[href]')].map((a) => [a.getAttribute('href'), txt(a)]),
    ids,
    // Every in-page link must resolve, and no id may be duplicated.
    danglingAnchors: hashHrefs.filter((h) => h && !ids.includes(h)),
    duplicateIds: ids.filter((v, i) => ids.indexOf(v) !== i),
    words: text
      .toLowerCase()
      .replace(/[^a-z0-9åäöéèü\s]/g, ' ')
      .split(/\s+/)
      .filter(Boolean)
      .sort(),
    // Derived from the JOINED text, not per-block, and this matters.
    //
    // Every transformation this revamp performs moves a sentence across a block
    // boundary: a DefinitionList splits "Chair yoga is seated and gentle" into
    // <dt>Chair yoga</dt><dd>is seated and gentle</dd>; a ProseList splits one
    // paragraph into a bullet per sentence; a PullQuote lifts one sentence out.
    // Split per-block, all three would read as failures. Joined with a single
    // space first, all three reconstruct the identical sentence, while a genuine
    // rewording still fails. The join is also what stops adjacent blocks gluing
    // into "...guided session.Desk yoga is..." the way raw textContent does.
    sentences: text
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean),
    textLength: text.length,
  };
};

// ── snapshot ───────────────────────────────────────────────────────────────
async function snapshot(outDir, { origin } = {}) {
  const routes = routesFromSitemap();
  mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  let ok = 0;
  const missing = [];

  for (const route of routes) {
    let url;
    if (origin) {
      url = origin.replace(/\/$/, '') + route;
    } else {
      const f = route === '/' ? join(distDir, 'index.html') : join(distDir, route, 'index.html');
      if (!existsSync(f)) {
        missing.push(route);
        continue;
      }
      url = pathToFileURL(f).href;
    }
    try {
      await page.goto(url, { waitUntil: origin ? 'networkidle0' : 'domcontentloaded', timeout: 45000 });
      const fp = await page.evaluate(FINGERPRINT);
      fp.route = route;
      writeFileSync(join(outDir, fileFor(route) + '.json'), JSON.stringify(fp, null, 1));
      ok++;
    } catch (e) {
      missing.push(`${route} (${e.message.split('\n')[0]})`);
    }
  }
  await browser.close();

  console.log(`[verify] snapshot -> ${outDir}: ${ok}/${routes.length} routes`);
  if (missing.length) {
    console.log(`[verify] MISSING (${missing.length}):`);
    missing.forEach((m) => console.log(`           ${m}`));
  }
  // A snapshot that silently covers fewer routes than the sitemap would make a
  // later comparison meaningless, so this is an error, not a warning.
  if (ok !== routes.length) {
    console.error(`[verify] FAIL: expected ${routes.length} routes, captured ${ok}`);
    process.exit(1);
  }
}

// ── compare ────────────────────────────────────────────────────────────────
// Multiset difference, reported as readable counts rather than raw arrays.
function multisetDiff(a, b) {
  const count = (arr) => arr.reduce((m, w) => m.set(w, (m.get(w) || 0) + 1), new Map());
  const A = count(a);
  const B = count(b);
  const removed = [];
  const added = [];
  for (const [w, n] of A) {
    const d = n - (B.get(w) || 0);
    if (d > 0) removed.push(d > 1 ? `${w} ×${d}` : w);
  }
  for (const [w, n] of B) {
    const d = n - (A.get(w) || 0);
    if (d > 0) added.push(d > 1 ? `${w} ×${d}` : w);
  }
  return { removed, added };
}

function setDiff(a, b) {
  const A = new Set(a);
  const B = new Set(b);
  return {
    removed: a.filter((s) => !B.has(s)),
    added: b.filter((s) => !A.has(s)),
  };
}

function compare(beforeDir, afterDir) {
  const files = readdirSync(beforeDir).filter((f) => f.endsWith('.json'));
  let failed = 0;
  let checked = 0;
  const notes = [];

  for (const f of files) {
    const A = JSON.parse(readFileSync(join(beforeDir, f), 'utf8'));
    const afterPath = join(afterDir, f);
    if (!existsSync(afterPath)) {
      console.log(`\n✗ ${A.route}\n    ROUTE MISSING from the "after" snapshot`);
      failed++;
      continue;
    }
    const B = JSON.parse(readFileSync(afterPath, 'utf8'));
    checked++;
    const problems = [];

    // 1-5: exact-match scalar and structural SEO fields.
    for (const k of ['title', 'lang', 'canonical']) {
      if (A[k] !== B[k]) problems.push(`${k}\n      - ${A[k]}\n      + ${B[k]}`);
    }
    for (const k of new Set([...Object.keys(A.meta), ...Object.keys(B.meta)])) {
      if (A.meta[k] !== B.meta[k]) problems.push(`meta[${k}]\n      - ${A.meta[k]}\n      + ${B.meta[k]}`);
    }
    if (JSON.stringify(A.jsonld) !== JSON.stringify(B.jsonld)) {
      problems.push(`JSON-LD changed (${A.jsonld.length} -> ${B.jsonld.length} block(s))`);
      const d = setDiff(A.jsonld, B.jsonld);
      d.removed.forEach((s) => problems.push(`      - ${s.slice(0, 300)}`));
      d.added.forEach((s) => problems.push(`      + ${s.slice(0, 300)}`));
    }

    // 6-7: ordered structure.
    const hA = A.headings.map((h) => h.join(': '));
    const hB = B.headings.map((h) => h.join(': '));
    if (JSON.stringify(hA) !== JSON.stringify(hB)) {
      const d = setDiff(hA, hB);
      problems.push(`heading outline (${hA.length} -> ${hB.length})`);
      d.removed.forEach((s) => problems.push(`      - ${s}`));
      d.added.forEach((s) => problems.push(`      + ${s}`));
      if (!d.removed.length && !d.added.length) problems.push(`      (same headings, different order)`);
    }
    const aA = A.anchors.map((x) => `${x[0]} :: ${x[1]}`);
    const aB = B.anchors.map((x) => `${x[0]} :: ${x[1]}`);
    if (JSON.stringify(aA) !== JSON.stringify(aB)) {
      const d = setDiff(aA, aB);
      problems.push(`anchors (${aA.length} -> ${aB.length})`);
      d.removed.forEach((s) => problems.push(`      - ${s}`));
      d.added.forEach((s) => problems.push(`      + ${s}`));
      if (!d.removed.length && !d.added.length) problems.push(`      (same anchors, different order)`);
    }

    // 8: anchor integrity is an absolute assertion, not a comparison.
    if (B.danglingAnchors.length) problems.push(`dangling in-page links: ${B.danglingAnchors.join(', ')}`);
    if (B.duplicateIds.length) problems.push(`duplicate ids: ${[...new Set(B.duplicateIds)].join(', ')}`);
    if (A.hasMain && !B.hasMain) problems.push(`lost its <main> element`);

    // 9-10: the text fingerprints.
    const w = multisetDiff(A.words, B.words);
    if (w.removed.length || w.added.length) {
      problems.push(`WORDS (${A.words.length} -> ${B.words.length})`);
      if (w.removed.length) problems.push(`      - ${w.removed.join(', ')}`);
      if (w.added.length) problems.push(`      + ${w.added.join(', ')}`);
    }
    const s = setDiff(A.sentences, B.sentences);
    if (s.removed.length || s.added.length) {
      problems.push(`SENTENCES (${A.sentences.length} -> ${B.sentences.length})`);
      s.removed.forEach((x) => problems.push(`      - ${x.slice(0, 220)}`));
      s.added.forEach((x) => problems.push(`      + ${x.slice(0, 220)}`));
    }

    if (problems.length) {
      failed++;
      console.log(`\n✗ ${A.route}`);
      problems.forEach((p) => console.log(`    ${p}`));
    } else if (A.textLength !== B.textLength) {
      // Same words, same sentences, different whitespace. Expected whenever a
      // component changes how text is joined; worth seeing, not worth failing.
      notes.push(`  ${A.route}: whitespace only (${A.textLength} -> ${B.textLength} chars)`);
    }
  }

  console.log('');
  if (notes.length) {
    console.log(`[verify] ${notes.length} route(s) differ in whitespace only:`);
    notes.forEach((n) => console.log(n));
    console.log('');
  }
  if (failed) {
    console.error(`[verify] FAIL: ${failed} of ${checked} routes changed.`);
    process.exit(1);
  }
  console.log(`[verify] PASS: ${checked} routes, every word and every sentence identical.`);
}

// ── cli ────────────────────────────────────────────────────────────────────
const [cmd, ...args] = process.argv.slice(2);
if (cmd === 'snapshot') {
  await snapshot(args[0]);
} else if (cmd === 'snapshot-live') {
  await snapshot(args[1], { origin: args[0] });
} else if (cmd === 'compare') {
  compare(args[0], args[1]);
} else {
  console.log(`usage:
  node scripts/verify-copy.mjs snapshot <outDir>
  node scripts/verify-copy.mjs snapshot-live <origin> <outDir>
  node scripts/verify-copy.mjs compare <beforeDir> <afterDir>`);
  process.exit(1);
}
