# Search Console weekly — 2026-09-08

Property: `https://remoteyogacoach.com/` (URL-prefix). GA4 property 547565118.
Signed in as camilla.tilly@gmail.com. All data sources were available this week.

---

## (a) Deploy and prerender health

**Deploy is current.** Local `public/sitemap.xml` has 47 `<loc>` entries; the live
`https://remoteyogacoach.com/sitemap.xml` also has 47. Nothing is sitting unshipped.

**Prerendering is running.** Each page returns its own title, not the homepage title:

| URL | Title served to crawlers |
|---|---|
| `/pricing/` | Pricing \| Team Wellbeing Subscriptions \| Remote Yoga Coach |
| `/blog/office-yoga-for-remote-teams/` | Office yoga for remote and hybrid teams: what it actually is \| Remote Yoga Coach |
| `/blog/` | Blog, practical wellbeing for distributed teams \| Remote Yoga Coach |

### NEW AND BROKEN: sitemap and canonicals point at URLs that redirect

Every URL on the site 301-redirects to a trailing-slash version:

```
GET /pricing  ->  301  ->  /pricing/   (200)
```

But the sitemap lists the **slashless** form (46 of 47 entries), and every canonical tag
on the site also declares the **slashless** form:

```
/pricing/  ->  <link rel="canonical" href="https://remoteyogacoach.com/pricing">
```

So Google is told: "the canonical version of this page is a URL that redirects somewhere
else." The sitemap sends it to a redirect, and the destination sends it back to the
redirecting URL.

**This is now causing real indexing failures.** Search Console reports **Redirect error on
4 pages, first detected 5 September**:

| URL | Last crawled |
|---|---|
| `/blog/office-yoga-for-remote-teams` | Sep 4, 2026 |
| `/blog/chair-yoga-at-your-desk` | Sep 4, 2026 |
| `/guides/desk-yoga` | Sep 4, 2026 |
| `/foretagsyoga-distans` | Sep 3, 2026 |

Three of those four are among the six URLs submitted for priority indexing on 4 September.
Google crawled them on request, hit the redirect conflict, and refused to index them. The
error first appeared the day after that submission.

**Why it happens.** Nothing in `netlify.toml` or `public/_redirects` sets this. It is
Netlify's default Pretty URLs post-processing: the prerenderer writes
`dist/<route>/index.html`, and Netlify then 301s `/route` to `/route/`.

**The fix (one commit, entirely in the repo).** Add to `netlify.toml`:

```toml
[build.processing.html]
  pretty_urls = false
```

That makes `/pricing` serve 200 directly, matching both the sitemap and the canonicals.
The alternative — rewriting all 47 sitemap entries and ~20 `canonical=` props to the
trailing-slash form — reaches the same place with a much larger diff.

Not applied this run: the build budget for this routine is one reports-only commit, and a
`netlify.toml` change triggers a full production build. This should be the first thing that
ships next.

Note the 31 already-indexed pages were indexed under this same pattern, so it is not fatal
site-wide — but every newly crawled URL is now hitting it, which is exactly the set we care
about.

---

## (a2) Repo audit

**Indexing integrity — clean.** 31 posts registered in `src/data/blogPosts.ts`, 31 blog
URLs in `public/sitemap.xml`, every slug matched in both directions. Every one of the 47
sitemap paths maps to a real route in `src/App.tsx`.

**Categories — clean.** All 31 posts use exactly one of the five permitted values:

| Category | Posts |
|---|---|
| Remote teams and burnout | 12 |
| Cost and proof | 6 |
| Meditation and breathing | 5 |
| Desk and posture | 5 |
| På svenska | 3 |

**Orphans.** No post is without an inbound link from another post. But three carry no link
to any of the four pillar guides:

- `halsa-hybridarbete-distansteam`
- `kontorsyoga-pa-distans-forklaring`
- `naturaforman-yoga-for-hela-teamet`

All three are the Swedish posts, and all four pillar guides are English-only, so this may
be deliberate. It does leave the Swedish cluster with no route into the guides. Worth a
decision either way.

**Duplication — three clusters answering the same question twice.**

1. `tech-neck-exercises-desk` and `neck-and-shoulder-stretches-desk-workers`. Near-identical
   intent: gentle exercises for desk-and-screen neck/shoulder pain. They are splitting the
   same query set (see the tech-neck queries in section c).
2. `build-a-strong-remote-team`, `improve-team-morale-remote-team`, `keep-hybrid-team-focused`.
   Three posts on remote-team cohesion.
3. `corporate-wellness-ideas-remote-teams`, `employee-wellbeing-ideas-small-budget`,
   `wellbeing-lunch-and-learn-ideas`. Overlapping "wellbeing ideas" cluster.

Cluster 1 is the one worth consolidating first, because it has live impressions.

**Consistency — clean, with one thing to watch.**

- No em-dashes in visible copy. All 18 occurrences are in code comments and CSS.
- No bare `&` in visible copy.
- No claims implying she has corporate clients.
- Foreign currency appears only as clearly-labelled third-party market rates (UK, Europe,
  Australia benchmarks; the Deloitte £4.70-per-£1 figure). That is within the rule.
  One borderline line: `how-much-does-corporate-yoga-cost.ts:97` recommends
  "£330–£550 per month (€380–€640)" as a realistic budget. It is a market recommendation,
  not her price, but it is the one place a reader could mistake a GBP figure for hers.
  A SEK anchor beside it would remove the ambiguity.

---

## (b) The 28-day numbers

9 August – 5 September 2026:

| Metric | Value |
|---|---|
| Clicks | 3 |
| Impressions | 183 |
| Average CTR | 1.6% |
| Average position | 61.8 |

3-month context (7 June – 5 September): 5 clicks, 396 impressions, 1.3% CTR, position 57.
Impressions are accumulating; position is drifting slightly worse as more low-ranking pages
enter the index.

---

## (c) Top queries

28-day, all with 0 clicks. Positions are from the wider 3-month window — the 28-day view's
per-query position column would not stay toggled on, and the 3-month figure is the more
stable number anyway.

| Query | Impressions (28d) | Position (3mo) |
|---|---|---|
| distributed team burnout | 8 | 62.0 |
| how much does burnout cost companies | 8 | 80.0 |
| virtual corporate yoga | 6 | 82.0 |
| cost of employee burnout | 6 | 91.9 |
| cost of burnout | 5 | 84.3 |
| office yoga prices | 4 | 22.2 |
| online corporate yoga | 4 | 91.7 |
| "team still" app meditation teams | 3 | 4.1 |
| mobile workplace yoga | 3 | 63.7 |
| virtual yoga class for employees | 3 | 91.3 |

20 queries in total for the 28 days; ranks 11–20 all sit at 1–2 impressions.

Other queries worth noting from the 3-month set, which is wider and shows the clusters more
clearly:

| Query | Impressions | Position |
|---|---|---|
| office meditation | 17 | 52.8 |
| tech neck exercises | 13 | 46.7 |
| corporate mindfulness | 9 | 70.2 |
| wellness ideas for remote employees | 7 | 88.4 |
| meditation at work | 5 | 43.2 |
| corporate meditation rates | 5 | 63.2 |
| how much to charge for corporate yoga classes | 2 | 37.5 |

`office yoga prices` at 22.2 is the single best-ranking commercial query on the site.

### Top pages (28-day)

| Page | Clicks | Impressions |
|---|---|---|
| `/` | 2 | 7 |
| `/blog/how-much-does-corporate-yoga-cost` | 1 | 18 |
| `/guides/cost-of-employee-burnout` | 0 | **67** |
| `/guides/mindfulness-at-work` | 0 | 23 |
| `/services/chair-yoga-for-teams` | 0 | 22 |
| `/blog/how-to-meditate-at-work` | 0 | 10 |
| `/blog/breathing-exercises-for-work-stress` | 0 | 9 |
| `/about` | 0 | 7 |
| `/blog/prevent-burnout-distributed-team` | 0 | 7 |
| `/compare` | 0 | 5 |

`/guides/cost-of-employee-burnout` alone is 37% of all site impressions and has never been
clicked. 25 pages received impressions in total.

---

## (d) Indexing status and what was requested

Last updated 4 September: **31 indexed, 16 not indexed** (47 total, matching the sitemap).

| Reason | Source | Pages | First detected |
|---|---|---|---|
| Redirect error | Website | 4 | 5 Sep 2026 |
| Discovered - currently not indexed | Google systems | 12 | 5 Aug 2026 |

The 4 redirect errors are listed in section (a).

The 12 "Discovered" URLs have **never been crawled** (last crawl: N/A on every one). 10 of
the 12 were listed:

`/blog`, `/blog/calm-headspace-vs-live-sessions`,
`/blog/employee-wellbeing-ideas-small-budget`, `/blog/halsa-hybridarbete-distansteam`,
`/blog/how-to-measure-wellbeing-programme-roi`,
`/blog/improve-wellbeing-programme-attendance`,
`/blog/kontorsyoga-pa-distans-forklaring`, `/blog/manager-burnout-signs`,
`/blog/meditation-breathing-or-chair-yoga-for-your-team`,
`/blog/naturaforman-yoga-for-hela-teamet`

These are mostly the August posts. Google has discovered them via the sitemap and simply
not allocated crawl budget yet.

**Sitemap:** `/sitemap.xml`, submitted and last read 3 September 2026, status **Success**,
47 discovered URLs. Matches local and live exactly.

**Indexing requested this week: `https://remoteyogacoach.com/blog`** (the carry-over from
4 September). Confirmed accepted into the priority crawl queue. URL inspection beforehand
showed "Discovered - currently not indexed", never crawled, discovered via the sitemap and
via `/blog/tech-neck-exercises-desk`.

No other URLs were submitted, deliberately. The four redirect-error pages will fail again
until the canonical fix ships, and spending quota on the remaining "Discovered" posts while
every fresh crawl risks the same redirect conflict wastes it. Resume submissions once
`pretty_urls = false` is live.

---

## (e) GA4

11 August – 7 September 2026, property 547565118:

| Metric | Value |
|---|---|
| Users | 47 |
| Sessions | 85 |
| Events | 439 |
| Engagement rate | 43.5% |
| Avg engagement time per session | 19s |
| **Key events** | **0** |

Traffic sources:

| Channel | Sessions |
|---|---|
| Direct | 75 (88.2%) |
| Organic Search | 6 (7.1%) |
| Referral | 3 (3.5%) |
| Organic Social | 1 (1.2%) |

**`generate_lead` has never fired.** It does not appear in the 28-day event list at all —
the only events recorded are `page_view` (179), `session_start` (86), `scroll` (83),
`first_visit` (46) and `user_engagement` (45). No demo form has been submitted.

Two things worth noting. Direct traffic at 88% on a site with no clients and 3 search clicks
is almost certainly her own visits plus bots; the `dataindex.pro` referral looks like
referral spam rather than a real visitor. And Search Console is not yet linked to GA4 —
GA4 is prompting for it, and linking would give the organic-queries report in one place.

---

## (f) Blog topics for Wednesday

An honest note first: the brief asks for queries in position 8–30, and this week there is
effectively one (`office yoga prices`, 22.2) and it is already covered by an existing post.
At an average position of 61.8, almost everything is too deep to have a meaningful CTR.
So these are picked on **cluster size and buyer intent** instead, which is the more useful
signal right now.

**1. Wellbeing providers for hybrid teams: how to choose one** — *the pick for Wednesday*

Cluster of ~11 impressions across `hybrid employees wellbeing companies` (3, pos 86.3),
`hybrid employees wellbeing platform` (2, pos 92), `hybrid workplace wellness companies`
(1, pos 74), `hybrid workplace wellbeing platform` (1, pos 84), plus four more near-identical
variants at pos 93–96. Maps to `/compare` and `/pricing`.

Why: this is vendor-selection intent — someone actively looking for who to hire. It is the
closest thing in the data to a buyer. And nothing on the site answers it: `/compare`
compares *formats* (live vs apps vs EAP), not *providers*. Genuine gap, commercially the
most valuable one.

**2. Breathwork at work: what it is and when to use it**

`breathwork for office workers` (3, pos 78), `breathwork for remote workers` (3, pos 131),
`breathwork for work` (1, pos 68). Maps directly to the breathing class type.

Why: she has `breathing-exercises-for-work-stress`, but "breathwork" is the word people are
actually typing and it appears nowhere. A terminology gap, cheap to close.

**3. What a corporate meditation session costs**

`corporate meditation rates` (5, pos 63.2) sitting alongside `office meditation` (17, pos
52.8) — the largest single query on the site. Maps to `/pricing` and the meditation service.

Why: joins the biggest impression cluster to the money page. The cost guide covers yoga
pricing but not meditation specifically.

**4. Consolidate, don't write: the tech-neck pair**

`tech neck exercises` (13, pos 46.7), `tech neck` (1, 57), `tech neck exercise` (1, 65),
`tech neck stretches` (2, 78.5), `stretches for tech neck` (1, 81), `desk neck stretches`
(1, 70), `desk exercises for neck and shoulder pain` (2, 66.5) — ~24 impressions split
across two posts that answer the same question.

Why: `tech-neck-exercises-desk` and `neck-and-shoulder-stretches-desk-workers` are competing
with each other. Merging into one and redirecting the weaker slug would concentrate the
signal on the site's second-best-ranking topic. This is a better use of Wednesday than a
fourth new post, if there is appetite for it.

---

## (g) Title and CTR quick wins

Caveat: at position 60+, no title change produces clicks. These are worth doing because the
titles genuinely mismatch the queries, which affects ranking as much as CTR — not because
they will move CTR next week.

**1. `/guides/mindfulness-at-work` — the clearest mismatch**

- Now: `Mindfulness at Work: Guide for Remote and Hybrid Teams` (23 impressions)
- The queries are all *meditation*, not *mindfulness*: `office meditation` (17, pos 52.8),
  `meditation at work` (5, 43.2), `how to meditate at work` (4, 71), `meditation working`
  (5, 57.8), `meditate at work` (2, 69.5), plus eight more variants.
- Suggested: **`Meditation at Work: A Guide for Remote and Hybrid Teams`** (54 chars)

**2. `/services/chair-yoga-for-teams`**

- Now: `Virtual Office Yoga and Chair Yoga for Teams` (22 impressions)
- Queries: `virtual corporate yoga` (6, pos 82), `online corporate yoga` (4, 91.7),
  `virtual yoga class for employees` (3, 91.3), `mobile workplace yoga` (3, 63.7). The
  phrase "corporate yoga" is what people type and it is absent from the title.
- Suggested: **`Virtual Corporate Yoga and Chair Yoga for Teams`** (46 chars)

**3. `/guides/cost-of-employee-burnout` — the biggest page on the site**

- Now: `What Employee Burnout Costs, and the ROI of Fixing It` (67 impressions, 0 clicks)
- Queries: `cost of employee burnout` (6, pos 91.9), `cost of burnout` (5, 84.3),
  `how much does burnout cost companies` (8, 80), `distributed team burnout` (8, 62).
- The title inverts the query phrasing. Leading with the exact noun phrase matches better.
- Suggested: **`The Cost of Employee Burnout to Employers (2026)`** (47 chars)

Leaving alone: `/blog/how-much-does-corporate-yoga-cost` already leads with "Office yoga
prices", which is the site's best-ranking query (22.2) and its only page with a real CTR
(1 click / 18 impressions). Don't touch it.
