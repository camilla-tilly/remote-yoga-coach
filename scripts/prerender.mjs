// Post-build prerender step.
//
// The site is a client-rendered Vite SPA: per-page <title>, meta tags and
// JSON-LD are injected by src/components/SEO.tsx in a useEffect. Search engines
// and (especially) social scrapers like Facebook/LinkedIn/WhatsApp don't run
// that JS, so without this step every URL would ship the generic index.html.
//
// This script serves the freshly built dist/ with `vite preview`, visits every
// route listed in public/sitemap.xml in headless Chrome, lets the app render +
// mutate <head>, then writes the resulting HTML back into dist/<route>/index.html.
// Netlify serves those static files before the SPA fallback, so crawlers get
// real HTML with the right meta. Real users still get the normal SPA afterwards.

import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');
const PORT = 4178;

// Derive the route list from the sitemap so prerender + sitemap never drift.
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
  // Unique, root first.
  return [...new Set(['/', ...paths.filter(Boolean)])];
}

async function run() {
  const routes = routesFromSitemap();
  console.log(`[prerender] ${routes.length} routes from sitemap`);

  const server = await preview({
    root,
    preview: { port: PORT, strictPort: true },
    logLevel: 'warn',
  });

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  // One attempt at a route. Separated out so it can be retried.
  async function render(route, timeout) {
    const page = await browser.newPage();
    try {
      // Cache off, or a retry re-requests a page the browser already has and
      // vite preview answers 304 Not Modified -- which res.ok() reports as a
      // failure, so the retry defeats itself on its second attempt.
      await page.setCacheEnabled(false);
      const res = await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout,
      });
      // 304 is a successful load from cache, not an error, so check for a real
      // failure status rather than for the narrower res.ok() (200-299 only).
      if (!res) throw new Error('no response');
      if (res.status() >= 400) throw new Error(`HTTP ${res.status()}`);
      // Give SEO.tsx's useEffect a beat to mutate <head>, and wait for the H1.
      await page.waitForSelector('h1', { timeout: 10000 }).catch(() => {});
      const html = await page.evaluate(
        () => '<!DOCTYPE html>\n' + document.documentElement.outerHTML
      );
      const outPath =
        route === '/'
          ? join(distDir, 'index.html')
          : join(distDir, route, 'index.html');
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html, 'utf8');
    } finally {
      await page.close();
    }
  }

  let ok = 0;
  const stubborn = [];
  for (const route of routes) {
    try {
      await render(route, 30000);
      ok++;
      console.log(`[prerender] ✓ ${route}`);
    } catch (err) {
      stubborn.push(route);
      console.error(`[prerender] … ${route} — ${err.message}, will retry`);
    }
  }

  // Retry pass. A 30s navigation timeout is generous for these pages, but under
  // load a route occasionally exceeds it, and which route it is changes from run
  // to run -- so it is machine contention, not a bad page. Without a retry that
  // route silently ships the generic app shell: right title-less HTML, green
  // build, and nobody finds out until the page stops ranking. Two more attempts
  // with a longer budget has cleared every occurrence seen so far.
  const failedRoutes = [];
  for (const route of stubborn) {
    let done = false;
    for (const timeout of [60000, 90000]) {
      try {
        await render(route, timeout);
        ok++;
        done = true;
        console.log(`[prerender] ✓ ${route} (on retry)`);
        break;
      } catch (err) {
        console.error(`[prerender] … ${route} retry failed — ${err.message}`);
      }
    }
    if (!done) failedRoutes.push(route);
  }
  const failed = failedRoutes.length;

  await browser.close();
  await server.httpServer.close();

  console.log(`[prerender] done: ${ok} ok, ${failed} failed`);
  if (failed > 0) {
    console.error(
      `\n[prerender] ####################################################\n` +
        `[prerender] #  ${String(failed).padStart(2)} ROUTE(S) FELL BACK TO THE APP SHELL.        #\n` +
        `[prerender] #  They ship with the generic title and meta, so   #\n` +
        `[prerender] #  crawlers and link previews will see the wrong   #\n` +
        `[prerender] #  page. The deploy still goes out; these URLs     #\n` +
        `[prerender] #  need a rebuild before they will rank.           #\n` +
        `[prerender] ####################################################\n` +
        failedRoutes.map((r) => `[prerender] #  ${r}`).join('\n') +
        '\n'
    );
  }
  if (ok === 0) {
    console.error(
      '\n[prerender] ####################################################\n' +
        '[prerender] #  WARNING: NOT ONE ROUTE WAS PRERENDERED.         #\n' +
        '[prerender] #  Every URL will ship the generic app shell, so   #\n' +
        '[prerender] #  crawlers and link previews see the same title   #\n' +
        '[prerender] #  and description on every page. The deploy is    #\n' +
        '[prerender] #  still going out, but the SEO on it is inert.    #\n' +
        '[prerender] ####################################################\n'
    );
  }
  // Don't fail the deploy over prerendering: the SPA still works client-side.
  // A failed route just falls back to the generic index.html via Netlify's SPA rule.
  process.exit(0);
}

run().catch((err) => {
  console.error('[prerender] fatal:', err);
  console.error(
    '\n[prerender] ####################################################\n' +
      '[prerender] #  PRERENDERING DID NOT RUN AT ALL.                #\n' +
      '[prerender] #  The deploy will still succeed, but every page   #\n' +
      '[prerender] #  ships identical title/meta/JSON-LD to crawlers. #\n' +
      '[prerender] #  Fix this before trusting any SEO reporting.     #\n' +
      '[prerender] ####################################################\n'
  );
  // Non-fatal: keep the build/deploy green even if prerendering can't run.
  process.exit(0);
});
