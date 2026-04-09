# SEO Strategy - Yoga with Camilla

## Oversikt
Detta dokument definierar SEO-strategin for yogawithcamilla.se, inklusive godkanda keywords, placeringsriktlinjer och basta praxis.

## Prioriterade Sidor (Affarmal)

Dessa ar sidans kommersiella karnsidor. ALL bloggproduktion och SEO-arbete ska i slutandan driva trafik hit.

| Sida | Syfte | Mal |
|------|-------|-----|
| `/` (startsida) | Varumarkesbygge + konvertering | Brand awareness, CTA till schema/bokning |
| `/klasser` | Klassschema | Konvertering: boka yogapass |
| `/online` | Online-yoga | Konvertering: prenumeration/drop-in online |
| `/foretag` | Foretagsyoga | Fanga B2B-sokningar |
| `/om-camilla` | Om Camilla | Bygga fortroende |

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

### Tier 1: Core Keywords (Hogsta prioritet)
Fokusera pa dessa i homepage, hero sections, och primara sidor:
1. `yoga stockholm`
2. `yogaklass`
3. `yoga for nyborjare`
4. `yoga online`
5. `yogastudio`

### Tier 2: Services & Typer (Medel prioritet)
Anvand i tjanstebeskrivningar och klassrelaterat innehall:
6. `foretagsyoga`
7. `foretagsyoga stockholm`
8. `yoga retreat sverige`
9. `privat yogalektion`
10. `vinyasa yoga`
11. `yin yoga`
12. `hatha yoga`
13. `yoga gravid`
14. `prenatalyoga`
15. `yoga privatlektioner stockholm`
16. `yoga for foretag`
17. `yoga teambuilding`

### Tier 3: Specialized (Nisch/blogg)
Anvand i specifika sektioner och blogginnehall:
18. `yogaovningar hemma`
19. `yoga for ryggont`
20. `yoga stresshantering`
21. `yoga andning`
22. `meditation stockholm`
23. `mindfulness yoga`
24. `yoga for idrottare`
25. `yoga stretching`

## Temavarlj-strategi per sidtyp

### Homepage (/)
- **Core keywords**: Alla Tier 1 (1-5)
- **Extra**: yoga stockholm, yogaklass
- **Max**: 5-6 keywords naturligt integrerade

### Klasser (/klasser)
- **Core**: yogaklass, yoga for nyborjare
- **Typer**: vinyasa yoga, yin yoga, hatha yoga, yoga gravid
- **Max**: 8 keywords

### Online (/online)
- **Core**: yoga online, yogaovningar hemma
- **Extra**: yoga hemma, yoga video
- **Max**: 5 keywords

### Foretagsyoga (/foretag)
- **Core**: foretagsyoga, foretagsyoga stockholm
- **Extra**: yoga teambuilding, yoga for foretag
- **Max**: 6 keywords

### Blogg (/blog)
- **Longtail**: yoga for ryggont, yoga stresshantering, etc.
- **Informational**: yogaovningar hemma, yoga andning
- **Max per artikel**: 3-4 keywords

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
