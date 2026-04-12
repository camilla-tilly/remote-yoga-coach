# Bygg- och Deploy-guide: yogawithcamilla.se

## Mal: Lat att indexera

Google indexerar snabbast och bast nar:
1. **Ren HTML serveras direkt** (inte bara SPA med JavaScript-rendering)
2. **Varje sida har sin egen URL med unik `<title>` och `<meta description>`**
3. **sitemap.xml** finns och ar korrekt
4. **Snabb laddningstid** (Core Web Vitals)

---

## Rekommenderad Stack

### Alt 1: Astro (REKOMMENDERAS for yoga-sajt)
Astro genererar ren statisk HTML som standard. Perfekt for SEO.

```bash
npm create astro@latest yogawithcamilla
cd yogawithcamilla
npm install
```

**Fordelar:**
- Genererar ren `.html` per sida (ingen JS behovs for att rendera)
- Inbyggt stod for Markdown-blogginlagg
- Snabb (nara 0 JS till klienten)
- Content Collections for bloggen
- Inbyggt sitemap-stod (`@astrojs/sitemap`)

**Mappstruktur:**
```
yogawithcamilla/
  src/
    pages/           # Varje .astro-fil = en URL
      index.astro    # /
      klasser.astro  # /klasser
      online.astro   # /online
      foretag.astro  # /foretag
      om-camilla.astro
      blog/
        [...slug].astro  # Dynamisk blogg-route
    content/
      blog/          # Markdown-filer for blogginlagg
        yoga-for-nyborjare.md
        vinyasa-vs-yin.md
    layouts/
      BaseLayout.astro  # Gemensam layout med head/nav/footer
    components/
      Header.astro
      Footer.astro
      SEOHead.astro    # Meta tags, OG tags, canonical
  public/
    images/
    sitemap.xml      # Genereras automatiskt
    robots.txt
  astro.config.mjs
```

**astro.config.mjs:**
```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.yogawithcamilla.se',
  integrations: [sitemap()],
  output: 'static',  // Ren HTML-output
});
```

### Alt 2: Next.js med Static Export
Om du vill ha React-komponenter men anda statisk HTML.

```bash
npx create-next-app@latest yogawithcamilla
```

**next.config.js:**
```js
module.exports = {
  output: 'export',  // Genererar statisk HTML
  trailingSlash: false,
};
```

### Alt 3: Vite + React (som Satori) med Prerendering
Mer komplext, kraver Puppeteer i CI for prerendering. Inte rekommenderat for enklare sajter.

---

## SEO-kritisk HTML-struktur

Varje sida MASTE ha detta i `<head>`:

```html
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- UNIK per sida -->
  <title>Yoga for nyborjare i Stockholm | Yoga with Camilla</title>
  <meta name="description" content="Borja med yoga i Stockholm. Camilla guidar dig genom ditt forsta pass. Boka idag!" />

  <!-- Canonical (forhindrar duplikat-content) -->
  <link rel="canonical" href="https://www.yogawithcamilla.se/yoga-for-nyborjare" />

  <!-- Open Graph (for delning pa sociala medier) -->
  <meta property="og:title" content="Yoga for nyborjare i Stockholm" />
  <meta property="og:description" content="Borja med yoga. Camilla guidar dig." />
  <meta property="og:image" content="https://www.yogawithcamilla.se/images/og-yoga-nyborjare.jpg" />
  <meta property="og:url" content="https://www.yogawithcamilla.se/yoga-for-nyborjare" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="sv_SE" />

  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "YogaStudio",
    "name": "Yoga with Camilla",
    "url": "https://www.yogawithcamilla.se"
  }
  </script>
</head>
```

---

## Deploy-alternativ

### Alt 1: Vercel (REKOMMENDERAS)

```bash
# Installera Vercel CLI
npm i -g vercel

# Fran projektmappen
vercel
```

**vercel.json:**
```json
{
  "cleanUrls": true,
  "headers": [
    {
      "source": "/sitemap.xml",
      "headers": [{"key": "Content-Type", "value": "application/xml"}]
    },
    {
      "source": "/(.*)",
      "headers": [
        {"key": "X-Content-Type-Options", "value": "nosniff"},
        {"key": "X-Frame-Options", "value": "DENY"}
      ]
    }
  ],
  "redirects": [
    {
      "source": "/(.*)",
      "has": [{"type": "host", "value": "yogawithcamilla.se"}],
      "destination": "https://www.yogawithcamilla.se/$1",
      "permanent": true
    }
  ]
}
```

**GitHub Actions (automatisk deploy vid push till main):**
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### Alt 2: Netlify
Liknande Vercel men med `netlify.toml`:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Alt 3: Cloudflare Pages
Gratis, snabb CDN, bra for statiska sajter.

---

## Checklista: Forsta Deploy

### Innan deploy:
- [ ] Varje sida har unik `<title>` (max 60 tecken, inkludera keyword)
- [ ] Varje sida har unik `<meta description>` (max 155 tecken)
- [ ] Varje sida har `<link rel="canonical">`
- [ ] `<html lang="sv">` pa alla sidor
- [ ] sitemap.xml genereras och inkluderar alla sidor
- [ ] robots.txt finns med Sitemap-referens
- [ ] Bilder ar komprimerade (WebP, max 500KB per bild)
- [ ] Structured Data (JSON-LD) for LocalBusiness pa startsidan

### Efter forsta deploy:
- [ ] Verifiera domain i Google Search Console
- [ ] Submit sitemap.xml i GSC
- [ ] Request Indexing for startsida + kommersiella sidor
- [ ] Verifiera med `curl -s -o /dev/null -w "%{http_code}" https://www.yogawithcamilla.se/` (ska vara 200)
- [ ] Kor PageSpeed Insights (pagespeed.web.dev) for Core Web Vitals
- [ ] Satt upp Google Analytics (eller Plausible/Umami for privacy)

### Lopande (daily-growth agenten gor detta):
- [ ] GSC Performance-check (klick, impressions, CTR, position)
- [ ] URL Inspection for nya sidor
- [ ] Indexerings-requests for nya blogginlagg
- [ ] Uppdatera winning-patterns.json efter varje analys
- [ ] Ny artikel var 3-5 dagar baserat pa content-calendar.json

---

## Bildoptimering (KRITISKT for hastighet)

```bash
# Konvertera till WebP (bast for webben)
cwebp -q 80 input.jpg -o output.webp

# Resize stora bilder
sips -Z 1200 input.jpg --out resized.jpg

# Max 500KB per bild, helst under 200KB
# Hero-bilder max 1MB
```

## DNS-setup

1. Kop domain (yogawithcamilla.se) via ex. Loopia, Binero, eller Cloudflare
2. Peka DNS till Vercel/Netlify (CNAME/A-records)
3. Satt upp www -> non-www redirect (eller tvartom, valj ETT)
4. Aktivera HTTPS (automatiskt pa Vercel/Netlify)

---

**TLDR:** Astro + Vercel = enklaste vagen till ren HTML som Google alskar att indexera. Varje sida blir en .html-fil med ratt meta tags. Inga JavaScript-tricks behövs for att Google ska forsta innehallet.
