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

  let ok = 0;
  let failed = 0;
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      const res = await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });
      if (!res || !res.ok()) throw new Error(`HTTP ${res ? res.status() : 'no response'}`);
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
      ok++;
      console.log(`[prerender] ✓ ${route}`);
    } catch (err) {
      failed++;
      console.error(`[prerender] ✗ ${route} — ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  await server.httpServer.close();

  console.log(`[prerender] done: ${ok} ok, ${failed} failed`);
  // Don't fail the deploy over prerendering: the SPA still works client-side.
  // A failed route just falls back to the generic index.html via Netlify's SPA rule.
  process.exit(0);
}

run().catch((err) => {
  console.error('[prerender] fatal:', err);
  // Non-fatal: keep the build/deploy green even if prerendering can't run.
  process.exit(0);
});
