// Regenerates the raster favicons from public/favicon.svg, so every icon format
// shows the same cairn mark. Run with: node scripts/icons.mjs
//
// This exists because the PNGs had drifted to a completely different logo (a
// mandala from the old Yoga with Camilla branding), which meant Safari and iOS
// showed a different icon from Chrome and Firefox.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(join(root, 'public/favicon.svg'), 'utf8');
const sizes = [
  ['favicon-32x32.png', 32],
  ['favicon-192x192.png', 192],
  ['apple-touch-icon.png', 180],
];

const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage();

for (const [name, size] of sizes) {
  await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
  await page.setContent(
    `<html><body style="margin:0"><div style="width:${size}px;height:${size}px">${svg}</div></body></html>`,
    { waitUntil: 'load' }
  );
  const buf = await page.screenshot({ omitBackground: true, type: 'png' });
  writeFileSync(join(root, 'public', name), buf);
  console.log(`[icons] wrote ${name} at ${size}x${size}`);
}

// favicon.ico as a PNG-payload ICO, which every browser since Vista accepts.
const png32 = readFileSync(join(root, 'public/favicon-32x32.png'));
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);           // reserved
header.writeUInt16LE(1, 2);           // type 1 = icon
header.writeUInt16LE(1, 4);           // one image
header.writeUInt8(32, 6);             // width
header.writeUInt8(32, 7);             // height
header.writeUInt8(0, 8);              // palette
header.writeUInt8(0, 9);              // reserved
header.writeUInt16LE(1, 10);          // colour planes
header.writeUInt16LE(32, 12);         // bits per pixel
header.writeUInt32LE(png32.length, 14);
header.writeUInt32LE(22, 18);         // offset to payload
writeFileSync(join(root, 'public/favicon.ico'), Buffer.concat([header, png32]));
console.log('[icons] wrote favicon.ico');

await browser.close();
