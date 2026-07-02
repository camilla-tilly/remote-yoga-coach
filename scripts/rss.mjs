// Blog RSS feed generator.
//
// Parses the blog post source files and writes public/rss.xml so the blog is
// syndicatable and easier for aggregators and AI crawlers to ingest.
// Runs first in the build chain, before vite copies public/ into dist/.

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const postsDir = join(root, 'src', 'data', 'posts');
const SITE = 'https://remoteyogacoach.com';

const xmlEscape = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

// Pull a top-level string field from a post source file, delimiter-aware.
const field = (txt, name) => {
  const m = txt.match(new RegExp(`${name}\\s*:\\s*(['"\`])([\\s\\S]*?)\\1`));
  return m ? m[2].trim() : '';
};

function run() {
  const files = readdirSync(postsDir).filter((f) => f.endsWith('.ts'));
  const posts = files
    .map((f) => {
      const t = readFileSync(join(postsDir, f), 'utf8');
      return {
        slug: field(t, 'slug'),
        title: field(t, 'title'),
        desc: field(t, 'metaDescription') || field(t, 'excerpt'),
        date: field(t, 'publishDate'),
        category: field(t, 'category'),
      };
    })
    .filter((p) => p.slug && p.date)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const items = posts
    .map((p) => {
      const url = `${SITE}/blog/${p.slug}`;
      const pub = new Date(`${p.date}T09:00:00Z`).toUTCString();
      return `    <item>
      <title>${xmlEscape(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pub}</pubDate>
      ${p.category ? `<category>${xmlEscape(p.category)}</category>` : ''}
      <description>${xmlEscape(p.desc)}</description>
    </item>`;
    })
    .join('\n');

  const lastBuild = posts.length ? new Date(`${posts[0].date}T09:00:00Z`).toUTCString() : new Date(0).toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Remote Yoga Coach, Blog</title>
    <link>${SITE}/blog</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Practical wellbeing for distributed teams: burnout prevention, workplace mindfulness, chair yoga and honest advice on corporate wellbeing that gets used.</description>
    <language>en-GB</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  writeFileSync(join(root, 'public', 'rss.xml'), rss, 'utf8');
  console.log(`[rss] wrote public/rss.xml with ${posts.length} items`);
}

run();
