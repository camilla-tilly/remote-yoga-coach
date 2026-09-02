# Search Console & GA4 — 2026-09-02

**Data sources:** Search Console (URL-prefix property `https://remoteyogacoach.com/`)
and GA4 (`Remote Yoga Coach`, G-5GXTN6CGLT, property 547565118). Both read
successfully.

**Access note:** the `sc-domain:remoteyogacoach.com` property does not exist.
The live property is the **URL-prefix** one, and it lives on
`camilla.tilly@gmail.com` — not on `hello.yogawithcamilla@gmail.com`, which was
the account the browser opened with and which has no Search Console properties
and no Analytics properties at all. Future runs should go straight to
`camilla.tilly@gmail.com` (`authuser=1`).

**Companion report:** `reports/visibility-2026-09-02.md` was **not found**. The
cloud routine that writes it did not produce a file today (last one on disk is
`visibility-2026-08-28.md`). Its sitemap / duplicate / orphan checks are
therefore missing from this brief, except where I re-derived them myself below.

---

## (a) The 28-day numbers

Search Console, 2026-08-03 → 2026-08-30:

| Metric | Value |
|---|---|
| Total clicks | **4** |
| Total impressions | **261** |
| Average CTR | **1.5%** |
| Average position | **57.8** |

Last 3 months for context: 5 clicks, 351 impressions, 1.4% CTR, position 57.3.
So roughly three quarters of all impressions this site has ever earned came in
the last 28 days — impressions are growing, clicks are flat at approximately zero.

GA4, 2026-08-05 → 2026-09-01:

| Metric | Value |
|---|---|
| Total users | **46** (45 new, 5 returning) |
| Sessions | **72** |
| Engaged sessions | 29 (40.28% engagement rate) |
| Avg engagement time / session | 20s |
| Event count | 358 |
| **Key events** | **0** |

Average engagement time of 20 seconds across 72 sessions is the number to sit
with. Nobody is reading anything.

---

## (b) Top queries (28 days)

All 43 queries returned zero clicks. The 4 recorded clicks are attributed to
queries Google anonymises, so they do not appear in this table.

| # | Query | Impr. | Clicks | CTR | Position |
|---|---|---|---|---|---|
| 1 | office meditation | 17 | 0 | 0% | 52.8 |
| 2 | tech neck exercises | 11 | 0 | 0% | 46.6 |
| 3 | distributed team burnout | 9 | 0 | 0% | 59.1 |
| 4 | office yoga prices | 8 | 0 | 0% | **23.2** |
| 5 | how much does burnout cost companies | 7 | 0 | 0% | 75.7 |
| 6 | virtual corporate yoga | 6 | 0 | 0% | 83.7 |
| 7 | cost of employee burnout | 6 | 0 | 0% | 93.0 |
| 8 | meditation working | 5 | 0 | 0% | 57.8 |
| 9 | cost of burnout | 5 | 0 | 0% | 89.6 |
| 10 | "team still" app meditation teams | 4 | 0 | 0% | 4.8 |
| 11 | corporate mindfulness | 4 | 0 | 0% | 74.8 |
| 12 | online corporate yoga | 4 | 0 | 0% | 87.5 |
| 13 | wellness ideas for remote employees | 4 | 0 | 0% | 88.5 |
| 14 | meditation at work | 3 | 0 | 0% | 45.7 |
| 15 | mobile workplace yoga | 3 | 0 | 0% | 63.7 |
| 16 | meditation while working | 2 | 0 | 0% | 54.0 |
| 17 | teams zoom mindfulness classes for companies | 2 | 0 | 0% | 61.0 |
| 18 | how to meditate at work | 2 | 0 | 0% | 65.5 |
| 19 | corporate meditation rates | 2 | 0 | 0% | 68.0 |
| 20 | tech neck stretches | 2 | 0 | 0% | 78.5 |
| 21 | hybrid employees wellbeing platform | 2 | 0 | 0% | 92.0 |
| 22 | coaching for hybrid working | 2 | 0 | 0% | 96.5 |
| 23 | virtual yoga class for employees | 2 | 0 | 0% | 97.0 |
| 24 | "team still" meditation | 1 | 0 | 0% | 9.0 |
| 25 | how much to charge for corporate yoga classes | 1 | 0 | 0% | 37.0 |
| 26 | meditation for work | 1 | 0 | 0% | 47.0 |
| 27 | meditation session at work | 1 | 0 | 0% | 48.0 |
| 28 | tech neck | 1 | 0 | 0% | 57.0 |
| 29 | meditation break at work | 1 | 0 | 0% | 59.0 |
| 30 | working meditation | 1 | 0 | 0% | 60.0 |

Remaining 13 queries all had 1 impression at position 62–87.

Two structural observations. First, the query set clusters hard around
**meditation** (11 of the top 30) — that is where Google currently thinks this
site belongs, and it is one of the three offerings, so it is a usable wedge.
Second, `"team still"` at positions 4.8 and 9.0 is a competitor or app name;
those are the only genuinely high positions on the site and they are not
commercially useful.

Top pages:

| Page | Impr. | Clicks | CTR | Position |
|---|---|---|---|---|
| `/guides/cost-of-employee-burnout` | 60 | 0 | 0% | 74.0 |
| `/blog/how-to-meditate-at-work` | 51 | 0 | 0% | 54.2 |
| `/blog/how-much-does-corporate-yoga-cost` | 31 | 1 | 3.2% | **26.2** |
| `/guides/mindfulness-at-work` | 26 | 0 | 0% | 41.8 |
| `/services/chair-yoga-for-teams` | 19 | 1 | 5.3% | 62.6 |
| `/blog/tech-neck-exercises-desk` | 15 | 0 | 0% | 52.8 |
| `/blog/prevent-burnout-distributed-team` | 9 | 0 | 0% | 59.1 |
| `/` | 3 | 2 | 66.7% | 3.0 |
| `/compare` | 5 | 0 | 0% | 56.8 |
| `/about` | 3 | 0 | 0% | 4.7 |
| `/services/team-wellness` | 2 | 0 | 0% | 48.0 |
| `/services/corporate-wellbeing-for-remote-teams` | 3 | 0 | 0% | 93.3 |

`/pricing`, `/demo` and `/faq` recorded **zero impressions** in 28 days.

---

## (c) Indexing — and a deployment problem that outranks everything else

### The headline: 8 blog posts exist in the repo but are not on the live site

`public/sitemap.xml` in the repo lists **43** URLs. The sitemap actually being
served at `https://remoteyogacoach.com/sitemap.xml` lists **35**. The eight
missing:

- `/blog/calm-headspace-vs-live-sessions`
- `/blog/employee-wellbeing-ideas-small-budget`
- `/blog/how-to-measure-wellbeing-programme-roi`
- `/blog/improve-wellbeing-programme-attendance`
- `/blog/manager-burnout-signs`
- `/blog/meditation-breathing-or-chair-yoga-for-your-team`
- `/blog/wellbeing-in-remote-onboarding`
- `/blog/wellbeing-lunch-and-learn-ideas`

This is not just a stale sitemap. The deployed JS bundle
(`/assets/index-Dgjwk5uz.js`) contains **20** post slugs; the repo has **28**.
The same eight are absent from the bundle. They render nothing.

The URLs return HTTP 200, but that is the SPA fallback — every route on the site
returns the identical 7,652-byte shell with the title
`Corporate Wellbeing for Remote and Hybrid Teams | Remote Yoga Coach`, so a 200
proves nothing here.

`main` is at `0bdd971` and matches `origin/main`, so the commits are pushed.
**The Netlify build has not shipped since roughly 2026-08-19.** Eight posts —
about six weeks of the Wednesday blog routine — are producing zero SEO value,
and will keep doing so until the deploy is fixed. Worth checking the Netlify
dashboard for failed builds.

### Search Console indexing status

| | Count |
|---|---|
| Indexed | **29** |
| Not indexed | **6** |
| Reason (all 6) | Discovered – currently not indexed |

Sitemap `/sitemap.xml`: submitted 2026-07-29, **last read 2026-08-31, status
Success, 35 URLs discovered** — consistent with the stale deploy above.

The 6 not indexed, derived by diffing the indexed list against the live sitemap:

1. **`/pricing`** ← money page
2. `/blog`
3. `/blog/chair-yoga-at-your-desk`
4. `/blog/office-yoga-for-remote-teams`
5. `/guides/desk-yoga`
6. `/guides/remote-work-burnout`

`/pricing` is the serious one. URL Inspection reports it as
**"URL is unknown to Google"** — not merely uncrawled, but undiscovered:
"No referring sitemaps detected", "Referring page: None detected". It is in the
live sitemap and it is linked internally from the deployed bundle, and
robots.txt allows everything, so nothing is technically blocking it. Google has
simply never fetched the site's highest-intent page.

### Indexing requested

| URL | Result |
|---|---|
| `/pricing` | **Requested — confirmed** ("Indexing requested") |
| `/guides/remote-work-burnout` | Attempted, did not register |
| `/blog/office-yoga-for-remote-teams` | Attempted, did not register |
| `/guides/desk-yoga` | Not attempted |
| `/blog/chair-yoga-at-your-desk` | Not attempted |

After the first successful request, further submissions silently failed —
repeated clicks on Request Indexing produced no confirmation and no error, on
two different URLs, including after a full page reload. This is Google's
per-day throttle on the feature, not a site problem. **Only `/pricing` was
actually submitted.** The other five are worth submitting by hand over the next
few days, one or two per day.

I deliberately did **not** request indexing for the eight recent blog posts.
They are not deployed; asking Google to crawl them now would only get an empty
SPA shell registered against those URLs, which is worse than leaving them alone.
Fix the deploy first, then request them.

---

## (d) GA4, including `generate_lead`

Traffic sources, last 28 days (by session):

| Channel | Sessions | Share |
|---|---|---|
| Direct | 61 | 84.7% |
| Organic Search | 7 | 9.7% |
| Referral | 2 | 2.8% |
| Organic Social | 1 | 1.4% |
| Unassigned | 1 | 1.4% |

**Is LinkedIn sending anyone? Effectively no.** Across the last 7 days the only
referral sources recorded are `linkedin.com / referral` — **1 session** — and
`dataindex.pro / referral` — 1 session, which is a bot/scraper, not a buyer.
Organic Social contributed 1 session with 0s engagement time over the full 28
days. The 84.7% Direct share on a site with no offline presence is mostly bots
and Camilla's own visits.

### `generate_lead`: has never fired — and is not configured

Key events in the 28-day window: **0**.

The complete list of events GA4 has received in the last 28 days is:
`first_visit`, `page_view`, `scroll`, `session_start`, `user_engagement`.
`generate_lead` is not among them.

Separately, the property's **Key events** list contains only GA4's three
defaults — `close_convert_lead`, `purchase`, `qualify_lead`, all showing "No
stream data detected". **`generate_lead` is not registered as a key event at
all.**

The tracking code itself is correct: `src/pages/Demo.tsx:40` fires
`gtag('event', 'generate_lead', { form_name: 'pilot-enquiry' })` on successful
submission, and `index.html:16` loads gtag for G-5GXTN6CGLT. So the honest read
is **zero demo-form submissions in 28 days** — not a broken tag.

Two follow-ups: once the event fires for the first time it needs to be starred
as a key event in Admin → Events, or it will never show up as a conversion. And
it is worth doing one test submission to confirm the Netlify Forms POST →
`.then()` → gtag chain works end to end, because that path has never once
executed in production.

---

## (e) Blog topics for Wednesday

A caveat first, because it changes what these are worth. The brief asks for
queries at position 8–30. **Exactly one non-branded query qualifies**
("office yoga prices", 23.2). Everything else sits at position 45–97, where the
problem is not click-through, it is that the site does not rank. At an average
position of 57.8, no amount of new blog posts moves the needle as much as
fixing the deploy and getting some links. Treat these as directional, not as
the week's highest-value work.

**1. Office meditation sessions for teams** — *the strongest signal in the data*
- Query: `office meditation` — 17 impressions (highest non-branded), position 52.8
- Related cluster: `meditation working` (5), `meditation at work` (3),
  `meditation while working` (2), `meditation for work` (1),
  `meditation session at work` (1), `meditation break at work` (1),
  `working meditation` (1) — **31 impressions across the cluster**
- Offering: the meditation class
- Why: this is the single largest theme Google associates with the site.
  Existing coverage (`how-to-meditate-at-work`, `5-minute-desk-meditation`) is
  written for an individual doing it alone at their desk. Nothing addresses a
  *team* meditation session that an HR lead would book. That is the buyer, and
  the gap is a framing gap, not a topic gap.

**2. Virtual and online corporate yoga: how it actually runs**
- Queries: `virtual corporate yoga` (6, pos 83.7), `online corporate yoga`
  (4, pos 87.5), `virtual yoga class for employees` (2, pos 97.0),
  `mobile workplace yoga` (3, pos 63.7) — **15 impressions combined**
- Offering: chair yoga / team wellness
- Why: "virtual" and "online" are the words buyers use for exactly what this
  business is, and no existing post targets that phrasing. Positions in the 80s
  mean Google has no page it considers relevant.

**3. What corporate yoga and meditation cost per team**
- Queries: `office yoga prices` (8, **pos 23.2** — the only real 8–30 query),
  `corporate meditation rates` (2, pos 68)
- Offering: the subscription itself
- Why: highest commercial intent in the entire dataset, and the only page
  already near the first three pages of results. `how-much-does-corporate-yoga-cost`
  ranks 26.2 and covers cost generally; neither "prices" nor the meditation
  variant is targeted. Pair this with getting `/pricing` indexed.

**4. Running wellbeing sessions over Microsoft Teams and Zoom**
- Query: `teams zoom mindfulness classes for companies` (2, pos 61.0)
- Offering: all three class types — this is the delivery model
- Why: low volume, but it is a near-exact description of the product from
  someone clearly shopping. `run-wellbeing-session-over-teams` exists but is not
  deployed (see section c) and does not target Zoom or the "for companies"
  framing.

---

## (f) Title and CTR quick wins

The honest caveat again: at position 41–74 these pages are not on page one, so a
better title will not produce clicks on its own. The exception is item 1, which
is genuinely close enough for a title to matter.

**1. `/blog/how-much-does-corporate-yoga-cost` — the only real CTR opportunity**
- 31 impressions, 1 click, 3.2% CTR, **position 26.2**
- Current: `How much does corporate yoga actually cost? A 2026 guide for UK and European teams` (83 chars — truncated in results)
- Suggested: **`Corporate Yoga Prices: What Teams Pay Per Month`** (47 chars)
- Why: gets "prices" in, which is the query actually earning impressions
  (`office yoga prices`, pos 23.2), and drops the UK/Europe qualifier that eats
  the visible characters without adding intent.

**2. `/guides/cost-of-employee-burnout` — highest-impression page, zero clicks**
- 60 impressions, 0 clicks, position 74.0
- Current: `What Employee Burnout Costs, and the ROI of Fixing It | Remote Yoga Coach`
- Suggested: **`What Employee Burnout Costs Companies in 2026`** (44 chars)
- Why: the queries hitting it are `how much does burnout cost companies` (7),
  `cost of employee burnout` (6), `cost of burnout` (5). "Costs Companies"
  matches the phrasing directly. Position 74 is the real problem, though.

**3. `/blog/how-to-meditate-at-work` — 51 impressions, zero clicks**
- 51 impressions, 0 clicks, position 54.2
- Current: `How to meditate at work: a simple practice you can do at your desk`
- Suggested: **`Office Meditation: A 5-Minute Practice at Your Desk`** (50 chars)
- Why: leads with "Office Meditation", the site's single biggest query at 17
  impressions, which this page is not currently phrased for.

**4. `/services/chair-yoga-for-teams` — best CTR on site, buried**
- 19 impressions, 1 click, 5.3% CTR, position 62.6
- Already converts at 5.3% from position 62, which is a strong signal. This one
  needs ranking help — internal links from the meditation posts, which are the
  pages actually getting impressions — not a new title.

**5. `/guides/mindfulness-at-work`**
- 26 impressions, 0 clicks, position 41.8
- Current: `Mindfulness at Work: Guide for Remote and Hybrid Teams | Remote Yoga Coach`
- Suggested: **`Corporate Mindfulness for Remote Teams: The Guide`** (48 chars)
- Why: `corporate mindfulness` earns 4 impressions at position 74.8 with no
  page targeting the phrase; this guide is the natural home for it.
