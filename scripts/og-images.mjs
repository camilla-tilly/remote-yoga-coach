// Branded Open Graph image generator.
//
// Renders on-brand 1200x630 share cards to public/og/*.png using headless
// Chrome, so LinkedIn / Slack / X previews look designed instead of blank.
// Run: node scripts/og-images.mjs   (re-run any time the set changes)

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'og');

// name -> card content. `default` is the site-wide fallback (also the home card).
const cards = [
  {
    name: 'default',
    variant: 'light',
    // No eyebrow. The buyer is HR, but the sessions are for everyone in the
    // team, and this card gets shared internally.
    eyebrow: null,
    title: 'A stronger team,',
    accent: 'half an hour',
    tail: 'at a time.',
  },
  {
    name: 'guides',
    variant: 'dark',
    eyebrow: 'Guides',
    title: 'Make the case for',
    accent: 'team wellbeing',
  },
  {
    name: 'compare',
    variant: 'light',
    eyebrow: 'The honest comparison',
    title: 'Live sessions vs apps vs',
    accent: 'EAPs',
  },
  {
    name: 'cost-of-employee-burnout',
    variant: 'dark',
    eyebrow: 'The business case',
    title: 'What employee burnout',
    accent: 'really costs',
  },
  {
    name: 'corporate-wellbeing-remote-teams',
    variant: 'light',
    eyebrow: 'Distributed teams',
    title: 'Wellbeing that actually',
    accent: 'reaches everyone',
  },
];

const html = ({ variant, eyebrow, title, accent, tail }) => {
  // Palette is the site's own tailwind tokens, so the cards cannot drift from
  // the pages they represent: offwhite #f9f2e9, cream #efe4d6, heading #261d16,
  // charcoal #50453d, clay #8f5033, sage-light #dfd6c9.
  const dark = variant === 'dark';
  const bg = dark ? '#261d16' : '#f9f2e9';
  const ink = dark ? '#f9f2e9' : '#261d16';
  const body = dark ? 'rgba(249,242,233,0.70)' : '#50453d';
  const eyebrowCol = dark ? '#ad6e52' : '#8f5033';
  const accentCol = dark ? '#ad6e52' : '#8f5033';
  const rule = dark ? 'rgba(249,242,233,0.20)' : '#dfd6c9';
  const stoneTop = dark ? '#261d16' : '#f9f2e9';
  return `<!DOCTYPE html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Inter:wght@500;600;700&display=swap">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  html,body { width:1200px; height:630px; }
  .card { position:relative; width:1200px; height:630px; background:${bg}; overflow:hidden;
    padding:80px; display:flex; flex-direction:column; justify-content:space-between; }
  .row { position:relative; display:flex; align-items:center; gap:14px; }
  .mark { width:22px; height:22px; border-radius:50%; background:#8f5033; display:inline-block; }
  .brand { font-family:'Fraunces',serif; font-weight:600; font-size:30px; color:${ink}; letter-spacing:-0.01em; }
  .mid { position:relative; }
  .eyebrow { font-family:'Inter',sans-serif; font-weight:700; font-size:20px; letter-spacing:0.22em; text-transform:uppercase; color:${eyebrowCol}; margin-bottom:26px; }
  .title { font-family:'Fraunces',serif; font-weight:400; font-size:56px; line-height:1.14; letter-spacing:-0.014em; color:${ink}; max-width:960px; }
  .title .accent { color:${accentCol}; }
  .foot { position:relative; display:flex; align-items:center; justify-content:space-between; border-top:2px solid ${rule}; padding-top:26px; }
  .url { font-family:'Inter',sans-serif; font-weight:600; font-size:24px; color:${ink}; }
  .tag { font-family:'Inter',sans-serif; font-weight:500; font-size:20px; color:${body}; }
</style></head>
<body><div class="card">
  <div class="row"><span class="mark"></span><div class="brand">Remote Yoga Coach</div></div>
  <div class="mid">
    ${eyebrow ? `<div class="eyebrow">${eyebrow}</div>` : ''}
    <div class="title">${title} <span class="accent">${accent}</span>${tail ? ' ' + tail : ''}</div>
  </div>
  <div class="foot"><div class="url">remoteyogacoach.com</div><div class="tag">Live on Teams or Zoom. Camera optional.</div></div>
</div></body></html>`;
};

async function run() {
  mkdirSync(outDir, { recursive: true });
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  for (const card of cards) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
    await page.setContent(html(card), { waitUntil: 'load', timeout: 20000 });
    // Wait for web fonts, but never hang on them.
    await page.evaluate(async () => {
      const ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
      await Promise.race([ready, new Promise((r) => setTimeout(r, 6000))]);
    });
    await new Promise((r) => setTimeout(r, 350));
    const buf = await page.screenshot({ type: 'png' });
    writeFileSync(join(outDir, `${card.name}.png`), buf);
    console.log(`[og] wrote ${card.name}.png`);
    await page.close();
  }

  await browser.close();
  console.log(`[og] done: ${cards.length} cards`);
}

run().catch((err) => {
  console.error('[og] failed:', err);
  process.exit(1);
});
