# Daily Growth System: yogawithcamilla

Export av Satoris daily-growth SEO-system, anpassat for en yoga-sajt.

## Vad ar detta?

Ett komplett system for att:
1. **Tracka SEO-performance** via Google Search Console
2. **Skriva SEO-optimerade blogginlagg** med AI-agenter
3. **Overvaka indexering, CTR, rankings** och agera pa data
4. **Bygga och deploya** en sajt som Google alskar

---

## Filstruktur

```
export-yogawithcamilla/
  README.md                          # Denna fil
  BUILD-AND-DEPLOY-GUIDE.md          # Hur sajten byggs och deployas for SEO
  seo-strategy.md                    # SEO-strategi med keywords, riktlinjer, structured data
  daily-growth-context/
    site-config.json                 # Sajtens grundinfo (domain, team, sidor, URLar)
    seo-targets.json                 # Keywords i 3 tiers + clusters
    content-calendar.json            # Content-kalender (planerade/publicerade artiklar)
    winning-patterns.json            # Vad som fungerar (titlar, CTR, insikter)
    known-issues.json                # Kanda problem (indexering, CTR-drops, etc)
    today-plan.json                  # Dagens plan (fylls i av agenten)
    run-log.json                     # Logg over varje korning
    data-gathering.md                # Protokoll for datainsamling fran GSC
    .schema.json                     # JSON-schema for performance/indexing-loggar
  agents/
    seo-blog-manager.md              # Orchestrator-agent (koordinerar skrivning)
    seo-writer.md                    # Writer-agent (researchar + skriver artiklar)
```

---

## Hur man anvander systemet

### 1. Setup
1. Skapa projektet (se BUILD-AND-DEPLOY-GUIDE.md)
2. Kopiera `daily-growth-context/` till `.claude/daily-growth/context/`
3. Kopiera `seo-strategy.md` till `.claude/context/seo-strategy.md`
4. Kopiera `agents/` till `.claude/agents/`

### 2. Anpassa keywords
Oppna `seo-strategy.md` och `seo-targets.json`. Byt ut platshallar-keywords med riktiga keywords fran keyword research:
- Google Keyword Planner (gratis med Google Ads-konto)
- Ahrefs/SEMrush (betalverktyg)
- Google Suggest (skriv i Google, se forslag)

### 3. Skriv forsta artikeln
Kor seo-blog-manager agenten:
```
/blog-cycle
```
Eller manuellt: "Skriv en artikel om yoga for nyborjare"

### 4. Daglig growth-loop
Agenten gor detta automatiskt vid varje korning:
1. Kollar sitemap, content-kalender (synk-check)
2. Samlar performance-data fran GSC (om Chrome MCP kopplat)
3. Analyserar: vilka artiklar rankar? Vilka behover hjalp?
4. Foreslaar: title-rewrites, nya artiklar, intern lankning
5. Uppdaterar context-filer (winning-patterns, known-issues)

---

## VIKTIGT: Vad du maste gora sjalv

- [ ] **Keyword research** - Byt ut alla platshallar i seo-targets.json
- [ ] **Site-config** - Fyll i domain, team, tjanster i site-config.json
- [ ] **Google Search Console** - Verifiera domain, submit sitemap
- [ ] **Bygga sajten** - Folj BUILD-AND-DEPLOY-GUIDE.md
- [ ] **Forsta content** - Minst 5 sidor + 3 blogginlagg innan GSC-analys ger nyttiga resultat

---

## Fran Satoris erfarenhet (vad vi lart oss)

### Vad som fungerar bast:
- **Pris-content rankar snabbast**: "Vad kostar X?" far hog CTR
- **Jamforelser konverterar**: "X vs Y" hjalper beslutsfattande
- **Intern lankning ger snabb effekt**: +3.7 positioner pa 6 dagar i vart fall
- **Titlar med konkret resultat**: "Sa blir du smarkfri" > "Komplett guide"
- **Arstal i rubrik**: Signalerar aktuellt innehall

### Vad som INTE fungerar:
- "Komplett guide"-titlar (generiskt, ingen nyfikenhet)
- For breda topics (svart att ranka)
- Title rewrites nar problemet ar position, inte titel
- Artiklar utan intern lankning till kommersiella sidor
