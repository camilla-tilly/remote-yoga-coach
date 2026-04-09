# Datainsamlingsprotokoll

Exakt steg-for-steg for att samla data via Chrome MCP och Google Search Console.

## 1. Search Console Performance (ALLTID forst vid analys)

**Navigera:** Google Search Console -> Performance -> tidsfilter "Last 28 days"

**Samla in per artikel (URL):**
```json
{
  "url": "/blog/slug",
  "title": "Artikelrubrik",
  "clicks_28d": 0,
  "impressions_28d": 0,
  "ctr": "0.00%",
  "avg_position": 0.0,
  "top_queries": [
    {"query": "keyword", "clicks": 0, "impressions": 0, "position": 0.0}
  ]
}
```

**Spara till:** `.claude/daily-growth/logs/performance-YYYY-MM-DD.json`

## 2. Indexeringsstatus

**Navigera:** Google Search Console -> URL Inspection (per artikel)

**Samla in:**
```json
{
  "url": "/blog/slug",
  "indexed": true,
  "last_crawl": "YYYY-MM-DD",
  "coverage_status": "Submitted and indexed|Discovered - currently not indexed|...",
  "indexing_requested": false,
  "indexing_requested_date": null
}
```

**Spara till:** `.claude/daily-growth/logs/indexing-YYYY-MM-DD.json`

## 3. Keyword-mojligheter

**Navigera:** Search Console -> Performance -> Queries (sortera pa impressions)

**Samla in:**
```json
{
  "query": "keyword",
  "clicks_28d": 0,
  "impressions_28d": 0,
  "ctr": "0.00%",
  "avg_position": 0.0,
  "has_dedicated_article": false,
  "opportunity_type": "content_gap|title_rewrite|position_boost|new_cluster"
}
```

**Spara som del av:** `.claude/daily-growth/logs/performance-YYYY-MM-DD.json`

## 4. Winning Patterns (uppdatera vid varje analys)

Nar du samlar data, identifiera och uppdatera `.claude/daily-growth/context/winning-patterns.json`:

1. **Kluster-trender:** Vilka keyword-kluster vaxer? (jamfor med forra veckans data)
2. **Rubrikformat:** Vilka titeltyper ger bast CTR?
3. **Optimeringsresultat:** Har tidigare title-rewrites forbattrat CTR?
4. **Anomalier:** Plotsliga drops eller spikes?

## 5. Chrome MCP Navigation

Steg for att oppna Search Console:
1. `navigate` till `https://search.google.com/search-console`
2. Valj ratt property (yogawithcamilla.se)
3. For Performance: klicka "Performance" -> "Search results"
4. For URL Inspection: klicka "URL Inspection" -> klistra in URL
5. For indexeringsbegar: "Request Indexing" (max 5 URL:er per korning)

**Viktigt:** Ta screenshots som verifiering vid indexeringsbegaranden.
