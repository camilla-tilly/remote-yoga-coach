# SEO Strategy - Yoga with Camilla

## Oversikt
Detta dokument definierar SEO-strategin for yogawithcamilla.se, inklusive godkanda keywords, placeringsriktlinjer och basta praxis.

## Prioriterade Sidor (Affarmal)

Dessa ar sidans kommersiella karnsidor. ALL bloggproduktion och SEO-arbete ska i slutandan driva trafik hit.

| Sida | Syfte | Mal |
|------|-------|-----|
| `/` (startsida) | Varumarkesbygge + konvertering | Brand awareness, CTA till tjanster |
| `/tjanster/mohippa-yoga` | Event-konvertering (hogst volym) | Boka mohippa-yoga |
| `/tjanster/foretagsyoga` | B2B-konvertering | Boka foretagsyoga/konferensyoga |
| `/tjanster/sup-yoga` | Event-konvertering (Stockholm) | Boka SUP yoga |
| `/tjanster/mini-retreat` | Retreat-konvertering (Dalarna) | Boka mini retreat |
| `/tjanster/privatlektioner` | Private lessons | Boka en-till-en |
| `/tjanster/brollopsyoga` | Event-konvertering | Boka brollopsyoga |
| `/om-mig` | Om Camilla | Bygga fortroende |

**Regel for allt innehallsarbete:**
- Varje blogartikel ska ha minst 1 in-text CTA som leder till en av dessa sidor
- Vid GSC-analys: kolla alltid klick/impressions for dessa specifikt
- Vid titel-rewrites och SEO-optimering: bloggar ar medlet, inte malet

## SEO-filosofi
- **Anvandare forst**: Innehall ska alltid vara naturligt och vardefullt for lasaren
- **Ingen keyword stuffing**: Keywords integreras organiskt i meningsfull kontext
- **Kvalitet over kvantitet**: Battre med fa valplacerade termer an manga daligt placerade
- **Langsiktig strategi**: Fokus pa hallbar SEO-tillvaxt, inte quick wins

## Prioriterade Keywords

> **Single source of truth:** `.claude/daily-growth/context/seo-targets.json` is authoritative. This doc mirrors it. If they disagree, trust the JSON.
>
> Yoga med Camilla is **not a studio** — it's a private/mobile teacher doing events, corporate, retreats and private lessons. Keywords reflect that commercial reality, not generic studio SEO.

### Tier 1: Core Keywords (Hogsta prioritet)
Fokusera pa dessa i homepage, hero sections, och primara sidor:
1. `privat yoga stockholm`
2. `yoga dalarna`
3. `yoga mohippa`
4. `privat yogaklass`
5. `yoga event`

### Tier 2: Services & Typer (Medel prioritet)
Anvand i tjanstebeskrivningar och klassrelaterat innehall:
6. `foretagsyoga stockholm`
7. `yoga brollop`
8. `SUP yoga stockholm`
9. `mini retreat yoga dalarna`
10. `privat yogalektion`
11. `online yoga english`
12. `yoga teambuilding`
13. `konferensyoga`
14. `yoga for foretag`
15. `brollopsyoga dalarna`

### Tier 3: Specialized (Nisch/blogg)
Anvand i specifika sektioner och blogginnehall:
16. `honsyoga dalarna`
17. `utomhusyoga dalarna`
18. `chicken yoga sweden`
19. `bachelorette yoga sweden`
20. `yoga stuga dalarna`
21. `trail run yoga`
22. `privat yoga pris`
23. `mohippa aktiviteter dalarna`
24. `yoga retreat dalarna`
25. `foretagsyoga pris`

## Temavarlj-strategi per sidtyp

### Homepage (/)
- **Core keywords**: privat yoga stockholm, yoga dalarna, privat yogaklass
- **Extra**: yoga event, mohippa yoga
- **Max**: 5-6 keywords naturligt integrerade

### Service pages (/tjanster/*)
- Varje tjanstesida far en primar Tier 1 eller Tier 2 keyword
- 2-3 sekundara keywords (cluster-medlemmar)
- **Max**: 5-6 keywords per sida
- Se `SEO_STRATEGY.md` i root for den exakta mappningen per sida

### Online Yoga (/tjanster/online-yoga)
- **Core**: online yoga english, privat yoga online
- **Extra**: zoom yoga, private yoga english
- **Max**: 5 keywords
- Notera: engelsksprakig sida, `<html lang="en">` dynamiskt

### Foretagsyoga (/tjanster/foretagsyoga)
- **Core**: foretagsyoga stockholm, konferensyoga, yoga for foretag
- **Extra**: yoga teambuilding, foretagsyoga pris
- **Max**: 6 keywords

### Blogg (/blogg/*)
- **Longtail/high-intent**: privat yoga pris, foretagsyoga pris, mohippa aktiviteter dalarna
- **Comparison/informational**: yoga retreat dalarna vs stockholm, honsyoga vs goat yoga
- **Max per artikel**: 3-4 keywords
- Varje artikel ska lanka till minst en prioriterad kommersiell sida (se Prioriterade Sidor ovan)

## Placeringsriktlinjer

### 1. HTML Meta Tags
```html
<meta name="keywords" content="yoga stockholm, yogaklass, yoga online, ..." />
<meta name="description" content="Natural text med 3-4 Tier 1 keywords" />
```

### 2. Page Titles
- Inkludera 1-2 Tier 1 keywords
- Max 60 tecken
- Format: `[Huvudsakligt keyword] | Yoga with Camilla`
- Exempel: `Yoga for nyborjare i Stockholm | Yoga with Camilla`

### 3. Meta Descriptions
- Inkludera 2-3 relevanta keywords naturligt
- Max 155 tecken
- Call-to-action inkluderad
- Exempel: "Yogaklasser i Stockholm for alla nivaer. Vinyasa, yin och hatha yoga. Boka ditt forsta pass hos Yoga with Camilla."

### 4. Headings (H1, H2, H3)
- **H1**: 1 primart keyword
- **H2**: 2-3 keywords totalt
- **H3**: Keywords nar naturligt
- Prioritera lasbarhet over keyword-density

### 5. Body Content
- Keywords sprids naturligt genom texten
- Anvand synonymer och variationer
- 1-2% keyword density max
- Fokus pa mening och varde

### 6. Alt Text (Bilder)
- Beskriv bilden naturligt
- Inkludera keyword om relevant
- Exempel: "Yogaklass i Stockholm med Camilla"

### 7. URL Slugs
- Anvand 1-2 keywords om mojligt
- Exempel: `/yoga-for-nyborjare`, `/foretagsyoga-stockholm`

## Technical SEO

### Sitemap (sitemap.xml)
**Uppdateringsrutin:**
1. Nar nya sidor laggs till, uppdatera sitemap.xml
2. Lagg alltid till `<lastmod>YYYY-MM-DD</lastmod>` tag
3. Satt ratt priority baserat pa sidtyp:
   - Homepage: 1.0
   - Kommersiella sidor: 0.8-0.9
   - Blogginlagg: 0.6-0.7
   - Legal: 0.3
4. Submit till Google Search Console

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://www.yogawithcamilla.se/sitemap.xml
```

### Canonical URLs
Alla sidor maste ha canonical URL.

### Language
HTML lang attribute: `<html lang="sv">`

## Structured Data Strategy

### Prioriterad implementation:
1. **LocalBusiness schema** (alla sidor) - FORST
2. **Organization schema** (startsida)
3. **Event schema** (klasser/schema) - for Google Events
4. **FAQPage schema** (FAQ-sidor)
5. **BreadcrumbList schema** (alla sidor)

### LocalBusiness Schema (viktigast for yoga):
```json
{
  "@context": "https://schema.org",
  "@type": "YogaStudio",
  "name": "Yoga with Camilla",
  "url": "https://www.yogawithcamilla.se",
  "description": "[Kort beskrivning]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Adress]",
    "addressLocality": "Stockholm",
    "postalCode": "[Postnummer]",
    "addressCountry": "SE"
  },
  "telephone": "[Telefonnummer]",
  "email": "[E-post]",
  "openingHours": "Mo-Fr 07:00-21:00, Sa-Su 09:00-17:00",
  "priceRange": "$$"
}
```

## Dos and Don'ts

### DO:
- Integrera keywords naturligt i befintligt innehall
- Prioritera anvandarupplevelse och lasbarhet
- Uppdatera lastmod i sitemap nar innehall andras
- Anvand variationer och synonymer
- Lagg till canonical URLs pa alla sidor
- Optimera bilder (alt-text, komprimering, WebP)
- Bygg interna lankar mellan blogginlagg och kommersiella sidor

### DON'T:
- Keyword stuffing
- Dolj text bara for sokmotorer
- Skriv onaturliga meningar bara for SEO
- Ignorera anvandbarhet for SEO
- Glom att uppdatera sitemap
- Kopiera content mellan sidor

## Monitoring och Underhall

### Veckovis:
- Kolla Google Search Console for errors
- Granska nya queries och impressions
- Uppdatera winning-patterns.json

### Manadsvis:
- Analysera top-performing keywords
- Kontrollera sitemap indexeringsstatus
- Uppdatera content-calendar.json

### Kvartalsvis:
- Full SEO-audit
- Keyword-strategi review
- Konkurrentanalys

---

**Senast uppdaterad**: 2026-04-09
**Version**: 1.0
