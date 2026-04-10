# SEO Strategy — Yoga with Camilla

> **This is the master working document.** Everything below reflects what is live in the code and config today. Edit this file freely — mark what should change, add new keywords, update meta tags. In a follow-up pass we push your edits back into the actual source files.
>
> Last extracted: 2026-04-10
> Source of truth for code: `src/pages/services/*.tsx`, `src/data/blogPosts.ts`, `public/sitemap.xml`, `.claude/daily-growth/context/seo-targets.json`

---

## 1. Strategy Overview

| Field | Value |
|---|---|
| Primary language | Swedish |
| Secondary language | English (sections on 5 service pages for tourists, expats, bachelorette groups) |
| Target markets | Stockholm, Dalarna, Sweden + worldwide for online |
| Business type | Not a studio — private/mobile yoga teacher, events, corporate, retreats |
| Brand voice | Warm, calm, not performative. No "improvement" framing. |
| Meta title format | `[Primary keyword] \| Yoga med Camilla` — max ~60 chars |
| Meta description format | Natural Swedish with 2–3 keywords + soft CTA, max 155 chars |
| H1 rule | 1 primary keyword per page |
| Structured data | Service + LocalBusiness on every service page. WebSite on home. |
| Canonical URLs | Yes, hardcoded per page |

**Core filter for all content:** *What is this giving someone permission to do, feel, or stop doing?*

**Commercial priority pages (where all blog CTAs should lead):**
- `/` (homepage)
- `/tjanster/privatlektioner`
- `/tjanster/foretagsyoga`
- `/tjanster/mohippa-yoga`
- `/tjanster/brollopsyoga`
- `/tjanster/sup-yoga`
- `/tjanster/mini-retreat`

---

## 2. Keyword Tiers

> Source: `.claude/daily-growth/context/seo-targets.json`
> Edit the `status` column to mark keywords for removal, expansion, or de-prioritization.

### Tier 1 — Core (homepage, hero, primary pages)

| # | Keyword | Intent | Mapped page | Status |
|---|---|---|---|---|
| 1 | privat yoga stockholm | Commercial | `/`, `/tjanster/privatlektioner` | current |
| 2 | yoga dalarna | Local | `/`, `/tjanster/mini-retreat` | current |
| 3 | yoga möhippa | Commercial/event | `/tjanster/mohippa-yoga` | current |
| 4 | privat yogaklass | Commercial | `/tjanster/privatlektioner` | current |
| 5 | yoga event | Commercial | Multiple | current |

### Tier 2 — Services & offerings (medium priority)

| #   | Keyword                   | Intent           | Mapped page                 | Status  |
| --- | ------------------------- | ---------------- | --------------------------- | ------- |
| 1   | företagsyoga stockholm    | B2B              | `/tjanster/foretagsyoga`    | current |
| 2   | yoga bröllop              | Commercial/event | `/tjanster/brollopsyoga`    | current |
| 3   | SUP yoga stockholm        | Local/commercial | `/tjanster/sup-yoga`        | current |
| 4   | mini retreat yoga dalarna | Commercial       | `/tjanster/mini-retreat`    | current |
| 5   | privat yogalektion        | Commercial       | `/tjanster/privatlektioner` | current |
| 6   | online yoga english       | International    | `/tjanster/online-yoga`     | current |
| 7   | yoga teambuilding         | B2B              | `/tjanster/foretagsyoga`    | current |
| 8   | konferensyoga             | B2B              | `/tjanster/foretagsyoga`    | current |
| 9   | yoga för företag          | B2B              | `/tjanster/foretagsyoga`    | current |
| 10  | bröllopsyoga dalarna      | Local/event      | `/tjanster/brollopsyoga`    | current |

### Tier 3 — Specialized / longtail (blog + niche pages)

| # | Keyword | Intent | Mapped page | Status |
|---|---|---|---|---|
| 1 | hönsyoga dalarna | Breakout | `/tjanster/honsyoga` | current |
| 2 | utomhusyoga dalarna | Local/niche | `/blogg/outdoor-yoga-dalarna` | current |
| 3 | chicken yoga sweden | English breakout | `/tjanster/honsyoga` | current |
| 4 | bachelorette yoga sweden | English/event | `/tjanster/mohippa-yoga` | current |
| 5 | yoga stuga dalarna | Local/niche | `/tjanster/mini-retreat` | current |
| 6 | trail run yoga | Niche | `/tjanster/trail-run-yoga` | current |
| 7 | privat yoga pris | High intent | `/blogg/vad-kostar-privat-yoga-stockholm` | current |
| 8 | möhippa aktiviteter dalarna | High intent | `/blogg/mohippa-dalarna-aktiviteter` | current |
| 9 | yoga retreat dalarna | Commercial | `/blogg/yoga-retreat-dalarna-vs-stockholm` | current |
| 10 | företagsyoga pris | High intent B2B | `/blogg/foretagsyoga-vad-ingar-och-kostar` | current |

### Breakout / rising keywords (watch closely)

| Keyword | Status | Competition | Priority |
|---|---|---|---|
| hönsyoga | breakout | none | A |
| yoga möhippa dalarna | rising | low | A |
| privat yoga pris | rising | low | A |
| chicken yoga sweden | breakout | none | B |

---

## 3. Keyword Clusters

> Source: `.claude/daily-growth/context/seo-targets.json` (clusters array)

### Cluster: event-yoga
| Keyword | Mapped page |
|---|---|
| yoga möhippa | `/tjanster/mohippa-yoga` |
| möhippa yoga dalarna | `/tjanster/mohippa-yoga` + blog |
| bröllopsyoga | `/tjanster/brollopsyoga` |
| yoga bröllop stockholm | `/tjanster/brollopsyoga` |
| möhippa aktiviteter | `/blogg/mohippa-dalarna-aktiviteter` |

### Cluster: nature-yoga
| Keyword | Mapped page |
|---|---|
| utomhusyoga dalarna | `/blogg/outdoor-yoga-dalarna` |
| hönsyoga | `/tjanster/honsyoga` |
| yoga retreat dalarna | `/tjanster/mini-retreat` |
| yoga stuga dalarna | `/tjanster/mini-retreat` |
| outdoor yoga sweden | `/tjanster/honsyoga` + `/tjanster/mini-retreat` |

### Cluster: water-yoga
| Keyword | Mapped page |
|---|---|
| SUP yoga stockholm | `/tjanster/sup-yoga` |
| SUP yoga sickla | `/tjanster/sup-yoga` |
| yoga på vatten | `/tjanster/sup-yoga` |
| paddleboard yoga | `/tjanster/sup-yoga` |

### Cluster: private-yoga
| Keyword | Mapped page |
|---|---|
| privat yoga stockholm | `/tjanster/privatlektioner` |
| privat yogalektion | `/tjanster/privatlektioner` |
| privat yoga pris | `/blogg/vad-kostar-privat-yoga-stockholm` |
| online yoga english | `/tjanster/online-yoga` |

### Cluster: corporate-yoga
| Keyword | Mapped page |
|---|---|
| företagsyoga stockholm | `/tjanster/foretagsyoga` |
| konferensyoga | `/tjanster/foretagsyoga` |
| yoga teambuilding | `/tjanster/foretagsyoga` |
| företagsyoga pris | `/blogg/foretagsyoga-vad-ingar-och-kostar` |
| yoga för företag | `/tjanster/foretagsyoga` |

---

## 4. Service Pages — Full Inventory

> Source: `src/pages/services/*.tsx`
> All 10 currently-implemented service pages. Edit any meta tag, H1, or keyword column below.

### 4.1 Möhippa Yoga
- **File:** `src/pages/services/MohenNatt.tsx`
- **URL:** `/tjanster/mohippa-yoga`
- **Sitemap priority:** 0.9
- **Has English section:** Yes (Bachelorette Yoga in Sweden)

| Field | Value |
|---|---|
| Meta title | Möhippa Yoga Dalarna & Stockholm – Bachelorette Yoga Sweden \| Yoga med Camilla |
| Meta description | Boka möhippa-yoga i Dalarna eller Stockholm. Privat yogaklass för hela gruppen – ingen erfarenhet krävs. Book bachelorette yoga in Sweden with a certified teacher. |
| H1 (hero heading) | Möhippa med Yoga |
| Primary keywords | möhippa yoga, bachelorette yoga sweden, möhippa dalarna |
| Secondary keywords | privat yogaklass, yoga stockholm, yoga dalarna |

### 4.2 Bröllopsyoga
- **File:** `src/pages/services/BrollopYoga.tsx`
- **URL:** `/tjanster/brollopsyoga`
- **Sitemap priority:** 0.9
- **Has English section:** No

| Field | Value |
|---|---|
| Meta title | Bröllopsyoga i Dalarna & Stockholm \| Yoga med Camilla |
| Meta description | Yoga som bröllopaktivitet för er och era gäster i Dalarna eller Stockholm. En lugn, inkluderande och minnesvärd aktivitet för bröllopsveckan. |
| H1 (hero heading) | Yoga för Bröllop |
| Primary keywords | bröllopsyoga, yoga bröllop |
| Secondary keywords | bröllopaktivitet, yoga stockholm, yoga dalarna |

### 4.3 Företagsyoga
- **File:** `src/pages/services/ForetagsYoga.tsx`
- **URL:** `/tjanster/foretagsyoga`
- **Sitemap priority:** 0.9
- **Has English section:** No

| Field | Value |
|---|---|
| Meta title | Företagsyoga & Konferensyoga Stockholm & Dalarna \| Yoga med Camilla |
| Meta description | Yoga för konferenser och företagsevent i Stockholm och Dalarna. Öka teamets energi och välmående med en professionell yogaklass – ingen förkunskap krävs. |
| H1 (hero heading) | Företagsyoga & Konferensyoga |
| Primary keywords | företagsyoga, konferensyoga, yoga för företag |
| Secondary keywords | yoga stockholm, yoga teambuilding, yoga dalarna |

### 4.4 Online Yoga (English-first)
- **File:** `src/pages/services/OnlineYoga.tsx`
- **URL:** `/tjanster/online-yoga`
- **Sitemap priority:** 0.8
- **Has English section:** Yes (entire page targets English speakers)

| Field | Value |
|---|---|
| Meta title | Online Yoga Classes in English – Private Sessions Worldwide \| Yoga med Camilla |
| Meta description | Private online yoga classes in English with a 500hr certified teacher. One-on-one sessions via Zoom for all levels — beginners, runners, and anyone wanting personalised yoga. |
| H1 (hero heading) | Online Yoga – Privata klasser var du än är |
| Primary keywords | online yoga english, private yoga zoom, online yoga worldwide |
| Secondary keywords | private yoga, english yoga teacher, one-on-one yoga |

### 4.5 Privatlektioner
- **File:** `src/pages/services/Privatlektioner.tsx`
- **URL:** `/tjanster/privatlektioner`
- **Sitemap priority:** 0.8
- **Has English section:** No

| Field | Value |
|---|---|
| Meta title | Privata Yogalektioner Stockholm & Dalarna \| Yoga med Camilla |
| Meta description | En-till-en privata yogalektioner med 500-timmars certifierad lärare i Stockholm och Dalarna. Anpassad klass för dina mål och din nivå. |
| H1 (hero heading) | Privata Yogalektioner |
| Primary keywords | privata yogalektioner, privat yoga stockholm |
| Secondary keywords | yoga dalarna, en-till-en yoga, personlig yogalektion |

### 4.6 SUP Yoga
- **File:** `src/pages/services/SUPYoga.tsx`
- **URL:** `/tjanster/sup-yoga`
- **Sitemap priority:** 0.9
- **Has English section:** No (but structured data includes OfferCatalog for vinyasa/yin classes)

| Field | Value |
|---|---|
| Meta title | SUP Yoga Stockholm – Paddleboard Yoga Sickla Strand \| Yoga with Camilla |
| Meta description | SUP yoga i Stockholm vid Sickla Strand — vinyasa och yin yoga på paddleboard. Öppna klasser maj–september och privata event. I samarbete med Smashing Balance. |
| H1 (hero heading) | SUP Yoga Stockholm |
| Primary keywords | SUP yoga stockholm, paddleboard yoga |
| Secondary keywords | yoga på vatten, sickla strand, SUP yoga |

### 4.7 Mini Retreat
- **File:** `src/pages/services/MiniRetreat.tsx`
- **URL:** `/tjanster/mini-retreat`
- **Sitemap priority:** 0.8
- **Has English section:** Yes (Mini Yoga Retreat in Dalarna, Sweden)

| Field | Value |
|---|---|
| Meta title | Mini Yoga Retreat i Dalarna – Dag & Weekend Retreat \| Yoga med Camilla |
| Meta description | Mini yoga retreat i Dalarna – en dag eller helg av yoga, meditation, naturvandring och stillhet i en stuga i skogen. För enskilda och grupper upp till 6 personer. |
| H1 (hero heading) | Mini Yoga Retreat i Dalarna |
| Primary keywords | yoga retreat dalarna, mini retreat |
| Secondary keywords | yoga dalarna, weekend retreat, yoga retreat sverige |

### 4.8 Trail Run + Yoga
- **File:** `src/pages/services/TrailRunYoga.tsx`
- **URL:** `/tjanster/trail-run-yoga`
- **Sitemap priority:** 0.8
- **Has English section:** Yes (Trail Running + Yoga, Stockholm)

| Field | Value |
|---|---|
| Meta title | Trail Run + Yoga Stockholm — Nacka Naturreservat \| Yoga med Camilla |
| Meta description | Guidat trail run eller vandring i Nacka Naturreservat + SUP yoga på Sicklasjön. Halvdag för grupper och företag i Stockholm. |
| H1 (hero heading) | Trail Run + Yoga |
| Primary keywords | trail run yoga, trail run stockholm |
| Secondary keywords | yoga stockholm, nacka naturreservat, löpning yoga |

### 4.9 Hönsyoga
- **File:** `src/pages/services/HonsYoga.tsx`
- **URL:** `/tjanster/honsyoga`
- **Sitemap priority:** 0.8
- **Has English section:** Yes (Chicken Yoga in Dalarna — Swedish alternative to goat yoga)

| Field | Value |
|---|---|
| Meta title | Hönsyoga i Dalarna — Yoga med Höns \| Yoga med Camilla |
| Meta description | Yoga på altanen med höns fritt strövande runt — en unik och jordnära yogaupplevelse i Dalarna. Boka hönsyoga för dig, din grupp eller som ett alternativ till goat yoga i Sverige. |
| H1 (hero heading) | Hönsyoga i Dalarna |
| Primary keywords | hönsyoga, hönsyoga dalarna, chicken yoga sweden |
| Secondary keywords | goat yoga sverige, yoga dalarna, outdoor yoga |

### 4.10 SUP Yoga Villkor (terms page)
- **File:** `src/pages/services/SUPYogaVillkor.tsx`
- **URL:** `/tjanster/sup-yoga/villkor`
- **Sitemap:** Not listed (support page, intentionally excluded)
- **Meta title:** Deltagarvillkor SUP Yoga – Yoga med Camilla \| Participant T&Cs SUP Yoga
- **Note:** Not an SEO target page. Do not optimize for keywords.

---

## 5. Blog Posts — Full Inventory

> Source: `src/data/blogPosts.ts` + `public/sitemap.xml`
> All 9 published posts. Sitemap priority 0.7 for all.

| # | Title | Slug | Published | Target keyword | Cluster | Links to |
|---|---|---|---|---|---|---|
| 1 | Yoga möhippa i Dalarna. Det roligaste brudpartyt ingen pratat om. | `yoga-mohippa-dalarna` | 2026-03-01 | yoga möhippa dalarna | event-yoga | `/tjanster/mohippa-yoga` |
| 2 | Konferensyoga. Varför 60 minuter yoga slår ännu en teambuilding. | `konferensyoga-teambuilding` | 2026-03-08 | konferensyoga | corporate-yoga | `/tjanster/foretagsyoga` |
| 3 | SUP yoga Stockholm. Vad är det och varför ska du prova det? | `sup-yoga-stockholm` | 2026-03-15 | SUP yoga stockholm | water-yoga | `/tjanster/sup-yoga` |
| 4 | Yoga som bröllopsaktivitet. Fler svenska par gör det. | `yoga-brollopsaktivitet` | 2026-03-20 | yoga bröllop | event-yoga | `/tjanster/brollopsyoga` |
| 5 | Hönsyoga i Dalarna. Yoga utomhus med höns. | `honsyoga-dalarna-goat-yoga-sverige` | 2026-03-24 | hönsyoga, goat yoga sverige | nature-yoga | `/tjanster/honsyoga` |
| 6 | Utomhusyoga i Dalarna. Varför naturen gör praktiken bättre. | `outdoor-yoga-dalarna` | 2026-03-25 | utomhusyoga dalarna | nature-yoga | `/tjanster/honsyoga`, `/tjanster/mini-retreat` |
| 7 | Vad kostar privat yoga i Stockholm 2026? ⭐ | `vad-kostar-privat-yoga-stockholm` | 2026-04-09 | privat yoga pris | private-yoga | `/tjanster/privatlektioner` |
| 8 | Möhippa i Dalarna. 7 aktiviteter utöver det vanliga. ⭐ | `mohippa-dalarna-aktiviteter` | 2026-04-09 | möhippa dalarna aktiviteter | event-yoga | `/tjanster/mohippa-yoga` |
| 9 | Yoga retreat i Dalarna vs Stockholm. Var ska du boka? ⭐ | `yoga-retreat-dalarna-vs-stockholm` | 2026-04-09 | yoga retreat dalarna | nature-yoga | `/tjanster/mini-retreat` |
| 10 | Företagsyoga. Vad ingår och vad kostar det? ⭐ | `foretagsyoga-vad-ingar-och-kostar` | 2026-04-09 | företagsyoga pris | corporate-yoga | `/tjanster/foretagsyoga` |

⭐ = Priority A, high-intent (price + comparison queries)

### Blog meta descriptions

| Slug | Meta description |
|---|---|
| `yoga-mohippa-dalarna` | Letar du efter en unik möhippa-idé? Yoga möhippa i Dalarna funkar för alla i gruppen. Ingen erfarenhet krävs. Från 3 000 kr. |
| `konferensyoga-teambuilding` | Konferensyoga i Stockholm och Dalarna. 60 minuter som ger mer energi än ytterligare en fika. Från 3 000 kr. Jag kommer till er med allt. |
| `sup-yoga-stockholm` | SUP yoga i Stockholm: yoga på bräda vid Sickla sjö. Perfekt för möhippa, grupper och dig som vill prova något nytt. Ingen erfarenhet krävs. |
| `yoga-brollopsaktivitet` | Yoga som bröllopsaktivitet i Dalarna och Stockholm. Inkluderande, lugnt, minnesvärt. Jag kommer till er med allt. Från 3 000 kr. |
| `honsyoga-dalarna-goat-yoga-sverige` | Hönsyoga i Dalarna: yoga på altanen med höns runt mattorna. Privat bokning för 2-6 personer. Maj till september. |
| `outdoor-yoga-dalarna` | Utomhusyoga i Dalarna på altanen i skogen. Yoga i naturen ger något inomhusstudios inte kan. Privat bokning för grupper och events. |
| `vad-kostar-privat-yoga-stockholm` | Privat yoga i Stockholm: från 3 000 kr för en grupp-event med yogalärare, mattor och resa. En-till-en online från lägre pris. Här är vad du betalar för. |
| `mohippa-dalarna-aktiviteter` | Planerar du möhippa i Dalarna? 7 aktiviteter som funkar. Yoga i skogen, hönsyoga, SUP, vandring. Stuga + natur = minnesvärd helg. |
| `yoga-retreat-dalarna-vs-stockholm` | Yoga retreat i Dalarna vs Stockholm. Natur vs stad, pris, upplevelse. Tips från en yogalärare som erbjuder båda. |
| `foretagsyoga-vad-ingar-och-kostar` | Vad kostar företagsyoga i Stockholm? Priser från 1 000 kr/pass. Läs vad som ingår, hur det funkar och varför fler företag väljer yoga på kontoret. |

---

## 6. Missing / Unimplemented Pages

> These URLs are listed in `public/sitemap.xml` but there is no corresponding `.tsx` file in `src/pages/services/`. They will 404 if crawled.

| URL in sitemap | Priority | Status | Recommended action |
|---|---|---|---|
| `/tjanster/fodelsedag-yoga` | 0.8 | Missing | Build or remove from sitemap |
| `/tjanster/yoga-workshop` | 0.8 | Missing | Build or remove from sitemap |
| `/tjanster/adventure-paket` | 0.8 | Missing | Build or remove from sitemap |
| `/tjanster/yoga-for-lopare` | 0.8 | Missing | Build or remove from sitemap |
| `/tjanster/yoga-dalarna-turister` | 0.9 | Missing | Build (English-first tourist page) or remove |

**Action required:** Either build these 5 pages or remove them from `public/sitemap.xml` to prevent 404s during Google crawling.

---

## 7. Technical SEO Checklist

| Item | Status | File | Notes |
|---|---|---|---|
| Sitemap | ✅ Exists | `public/sitemap.xml` | 28 URLs, but 5 point to missing pages |
| Robots.txt | ✅ Exists | `public/robots.txt` | Allow all + sitemap reference |
| Canonical URLs | ✅ Per page | Each service page props | Hardcoded to `yogawithcamilla.se` |
| Meta title + description | ✅ Per page | Each `.tsx` via `ServicePageLayout` | |
| Open Graph + Twitter Cards | ✅ | `src/components/SEO.tsx` | |
| JSON-LD Service schema | ✅ | `src/components/ServicePageLayout.tsx` | All service pages |
| JSON-LD LocalBusiness | ✅ | `src/components/ServicePageLayout.tsx` | All service pages |
| JSON-LD WebSite + SearchAction | ✅ | `src/pages/Index.tsx` | Homepage |
| JSON-LD BlogPosting | ⚠️ Verify | `src/pages/BlogPostPage.tsx` | Confirm present on all posts |
| BreadcrumbList schema | ⚠️ Check | Unknown | Mentioned in strategy doc, confirm in code |
| HTML `lang="sv"` | ⚠️ Check | `index.html` | Confirm |
| Google Search Console | ❌ Pending | — | Sitemap not yet submitted |
| Image alt text | ⚠️ Audit | Service pages | Confirm all images have descriptive alt |
| Internal linking blog → services | ✅ | `src/data/blogPosts.ts` `relatedPosts` | |

---

## 8. Winning Patterns (what converts)

> Source: `.claude/daily-growth/context/winning-patterns.json`

### Title formats that work

| Format | CTR tier | Example |
|---|---|---|
| Price/cost questions + year ("Vad kostar X?") | High | Vad kostar yoga i Stockholm 2026? |
| Concrete result in title | High | Yoga för ryggont: Så blir du smärtfri på 4 veckor |
| Beginner guide with promise | Medium | Börja med yoga: Din första klass steg för steg |
| Listicle / comparison | Medium | Vinyasa vs Yin Yoga: Vilken passar dig? |

### Title formats to avoid

| Format | CTR tier | Why |
|---|---|---|
| "Komplett guide" i rubrik | Low | Generic, no curiosity hook |
| Too broad titles ("Allt om yoga") | Low | Doesn't answer a specific question |

### Key insights
1. **Price content ranks fastest.** "Vad kostar…" gets high CTR and ranks quickly.
2. **Local first.** Stockholm/Dalarna keywords convert faster than generic yoga keywords.
3. **Comparisons drive bookings.** "X vs Y" helps readers decide and book.
4. **Beginners are the biggest audience** — "yoga för nyborjare" longtails have volume + low competition.

---

## 9. Action Items

### Urgent
- [ ] **Remove or build the 5 missing service pages** in sitemap (fodelsedag-yoga, yoga-workshop, adventure-paket, yoga-for-lopare, yoga-dalarna-turister)
- [ ] **Submit sitemap to Google Search Console:** `https://yogawithcamilla.se/sitemap.xml`
- [ ] **Resolve pricing placeholders:** audit all service pages for `[PRIS]` or "kontakta för pris" and decide which get fixed prices

### Medium
- [ ] Add English keyword sections to `BrollopYoga.tsx`, `ForetagsYoga.tsx`, `Privatlektioner.tsx`, `SUPYoga.tsx`
- [ ] Verify BlogPosting JSON-LD is injected on every blog post
- [ ] Audit `index.html` for `<html lang="sv">`
- [ ] Image alt text audit across all service pages

### Strategic (next iteration)
- [ ] Review Tier 1 keywords — currently very commercial/event-heavy; consider whether any generic "yoga stockholm" type terms should be added back
- [ ] Build out Tier 3 blog content for remaining breakout keywords
- [ ] Add breadcrumb schema across all pages

---

## 10. Where Each Value Lives (edit map)

When you want to change a value from this document in the actual code:

| To change… | Edit file |
|---|---|
| Tier 1/2/3 keywords | `.claude/daily-growth/context/seo-targets.json` |
| Keyword clusters | `.claude/daily-growth/context/seo-targets.json` |
| Service page meta title/description | `src/pages/services/<PageName>.tsx` (`seoTitle`, `seoDescription` props) |
| Service page H1 | Same file (`heroHeading` prop) |
| English keyword section | Same file (`englishKeywords` prop) |
| Service page URL | `src/App.tsx` route + `canonical` prop in the page file |
| Blog post title / meta / keyword | `src/data/blogPosts.ts` |
| Sitemap URLs and priorities | `public/sitemap.xml` |
| Robots rules | `public/robots.txt` |
| Global strategy doc (agent-facing) | `.claude/context/seo-strategy.md` |
| Winning title patterns | `.claude/daily-growth/context/winning-patterns.json` |
| Content calendar | `.claude/daily-growth/context/content-calendar.json` |

---

**End of SEO strategy snapshot.** Edit freely. Nothing in code changes until we run the "push edits back" pass.
