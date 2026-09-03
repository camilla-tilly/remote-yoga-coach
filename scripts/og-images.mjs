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
    eyebrow: 'For HR and people leaders',
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
  const dark = variant === 'dark';
  const bg = dark ? '#3E362E' : '#F5EFE7';
  const ink = dark ? '#FFFFFF' : '#64513E';
  const body = dark ? 'rgba(255,255,255,0.72)' : 'rgba(74,66,58,0.72)';
  const eyebrowCol = dark ? '#CE9A82' : '#8B9D7D';
  const accentCol = dark ? '#CE9A82' : '#B67A5E';
  const rule = dark ? 'rgba(255,255,255,0.18)' : 'rgba(182,122,94,0.35)';
  return `<!DOCTYPE html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Inter:wght@500;600;700&display=swap">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  html,body { width:1200px; height:630px; }
  .card { position:relative; width:1200px; height:630px; background:${bg}; overflow:hidden;
    padding:80px; display:flex; flex-direction:column; justify-content:space-between; }
  .glow { position:absolute; border-radius:50%; filter:blur(60px); }
  .g1 { width:520px; height:520px; top:-160px; right:-120px; background:${accentCol}; opacity:0.16; }
  .g2 { width:480px; height:480px; bottom:-180px; left:-140px; background:${dark ? '#8B9D7D' : '#8B9D7D'}; opacity:0.13; }
  .row { position:relative; display:flex; align-items:center; gap:16px; }
  .mark { width:52px; height:52px; border-radius:14px; background:#B67A5E; display:flex; align-items:center; justify-content:center; box-shadow:inset 0 0 0 2px rgba(255,255,255,0.28); }
  .mark span { width:20px; height:20px; border-radius:50%; border:3px solid #FFFFFF; }
  .brand { font-family:'Fraunces',serif; font-weight:600; font-size:30px; color:${ink}; letter-spacing:-0.01em; }
  .mid { position:relative; }
  .eyebrow { font-family:'Inter',sans-serif; font-weight:700; font-size:20px; letter-spacing:0.22em; text-transform:uppercase; color:${eyebrowCol}; margin-bottom:26px; }
  .title { font-family:'Fraunces',serif; font-weight:600; font-size:76px; line-height:1.05; letter-spacing:-0.02em; color:${ink}; max-width:960px; }
  .title .accent { color:${accentCol}; }
  .foot { position:relative; display:flex; align-items:center; justify-content:space-between; border-top:2px solid ${rule}; padding-top:26px; }
  .url { font-family:'Inter',sans-serif; font-weight:600; font-size:24px; color:${ink}; }
  .tag { font-family:'Inter',sans-serif; font-weight:500; font-size:20px; color:${body}; }
</style></head>
<body><div class="card">
  <div class="glow g1"></div><div class="glow g2"></div>
  <div class="row"><div class="mark"><span></span></div><div class="brand">Remote Yoga Coach</div></div>
  <div class="mid">
    <div class="eyebrow">${eyebrow}</div>
    <div class="title">${title} <span class="accent">${accent}</span>${tail ? ' ' + tail : ''}</div>
  </div>
  <div class="foot"><div class="url">remoteyogacoach.com</div><div class="tag">Live, on Teams. Camera optional.</div></div>
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
