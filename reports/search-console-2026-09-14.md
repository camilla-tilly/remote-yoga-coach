# Search Console report, week of 2026-09-14

Data pulled 2026-09-14. Search Console 28-day window 2026-08-15 to 2026-09-11.
GA4 property 547565118, same window.

---

## (a) Deploy and prerender health

**Prerendering is running correctly.** `/pricing`, `/demo`, `/compare`, `/faq`,
`/foretagsyoga-distans`, `/blog/office-yoga-for-remote-teams` and
`/guides/desk-yoga` each return their own distinct `<title>`. No page is
falling back to the homepage title. On-page SEO is live and working.

**Sitemap is in sync.** Local `public/sitemap.xml` has 47 `<loc>` entries, the
live file has 47, and Search Console reports the sitemap read successfully on
2026-09-09 with 47 discovered URLs. Nothing is behind.

### BROKEN: last week's canonical fix was never pushed

`git status` on `main` showed the branch **diverged: 2 local commits never
pushed, 2 remote commits never pulled.**

The two unpushed local commits were:

| Commit | What it is |
|---|---|
| `afe3426` | FIX: stop 301-ing every URL away from its own canonical |
| `240e76d` | REPORT: Search Console week of 2026-09-08 |

So last week's routine diagnosed the redirect problem, wrote the fix, committed
it, and then the push never happened. The fix has been sitting on the local
machine for six days and **the bug is still live in production.**

Confirmed live, every money page still 301s away from its own canonical:

| URL | Status |
|---|---|
| `/pricing` | 301 -> `/pricing/` |
| `/demo` | 301 -> `/demo/` |
| `/compare` | 301 -> `/compare/` |
| `/faq` | 301 -> `/faq/` |
| `/foretagsyoga-distans` | 301 -> `/foretagsyoga-distans/` |
| `/blog/office-yoga-for-remote-teams` | 301 -> `.../` |
| `/guides/desk-yoga` | 301 -> `.../` |

Only `/` returns 200 directly.

Search Console still reports **Redirect error on 4 pages**, unchanged from last
week, which is exactly what `afe3426` was written to fix.

### ROOT CAUSE: this machine cannot push to GitHub

The push failed again this week, the same way it must have failed last week:

    fatal: could not read Username for 'https://github.com': Device not configured

`origin` is the HTTPS remote
`https://github.com/camilla-tilly/remote-yoga-coach.git`, the configured
credential helper is `osxkeychain`, and **the keychain holds no credential for
github.com**. Probing it returns nothing. There is no `gh` CLI installed
either. So every push from this routine fails at authentication, and because
the commit itself succeeds, the failure looks like success unless someone
checks `git status`.

That is why `afe3426` has been sitting unpushed since 2026-09-08. It is not a
one-off. **Until credentials exist, no routine can ship anything**, including
this report.

**State left on the machine:** the branch was rebased cleanly onto
`origin/main` and both commits are ready to go. Nothing is lost, nothing
conflicts. Local `main` is 3 commits ahead of `origin/main`:

| Commit | What it is |
|---|---|
| `482bdf9` | FIX: stop 301-ing every URL away from its own canonical |
| `4eac629` | REPORT: Search Console week of 2026-09-08 |
| `9d0a510` | REPORT: Search Console week of 2026-09-14 (this file) |

**Needs Camilla, in this order:**

1. **Give this machine push access.** Either install the GitHub CLI and run
   `gh auth login`, or create a personal access token and store it once with
   `git push` at an interactive terminal so osxkeychain saves it. Without this
   the routine cannot ship, and next Friday will report the same thing.
2. Then run `git push origin main` from the repo. That ships the canonical
   fix and both reports in one go. It will trigger a production build, because
   `netlify.toml` is a build-affecting file — that is expected and necessary
   this once.
3. After the deploy, re-check `curl -I https://remoteyogacoach.com/pricing`.
   If it still returns 301, Netlify has ignored the `pretty_urls = false` key
   in `netlify.toml` in favour of the dashboard setting. Turn it off at **Site
   configuration -> Build & deploy -> Post processing -> Pretty URLs**.

---

## (a2) Repo audit

### Indexing integrity — clean

All 31 posts registered in `src/data/blogPosts.ts` have a matching entry in
`public/sitemap.xml`, and all 31 sitemap blog URLs resolve to a real route via
`/blog/:slug` (`src/App.tsx:87`). All 16 non-blog sitemap URLs map to real
routes. Zero mismatches in either direction.

Minor: three sitemap `lastmod` values predate their post's own `publishDate`,
so those entries were never refreshed after editing — `5-minute-desk-meditation`
(2026-07-15 vs 2026-07-22), `breathing-exercises-for-work-stress` (2026-06-10
vs 2026-07-08), `corporate-wellness-ideas-remote-teams` (2026-07-22 vs
2026-08-05).

### Categories — clean

Every post uses exactly one of the five whitelisted strings. No drift.
Distribution: Remote teams and burnout 12, Cost and proof 6, Meditation and
breathing 5, Desk and posture 5, På svenska 3.

### Orphans

No true orphans. Every post has at least one editorial inbound link.

**Three Swedish posts are a closed loop with no path into the English pillar
structure** — they link only to each other and to `/foretagsyoga-distans`, and
carry no link to any of the four pillar guides:

- `src/data/posts/halsa-hybridarbete-distansteam.ts`
- `src/data/posts/kontorsyoga-pa-distans-forklaring.ts`
- `src/data/posts/naturaforman-yoga-for-hela-teamet.ts`

### Duplication — 4 strong pairs

Each pair answers the same search question twice, which splits authority
between two pages instead of concentrating it on one. With the whole site
ranking at position 45-90, this matters more than it would on a stronger
domain.

| Question a searcher types | Post A | Post B |
|---|---|---|
| How do I meditate at my desk at work? | `5-minute-desk-meditation` | `how-to-meditate-at-work` |
| What yoga can I do sitting at my desk? | `chair-yoga-at-your-desk` | `desk-yoga-5-minute-routine` |
| What stretches fix neck and shoulders from desk work? | `neck-and-shoulder-stretches-desk-workers` | `tech-neck-exercises-desk` |
| How do I build morale on a remote team? | `improve-team-morale-remote-team` | `build-a-strong-remote-team` |

`keep-hybrid-team-focused` is a weaker third member of the morale cluster.
`do-workplace-wellness-apps-work` vs `calm-headspace-vs-live-sessions` overlap
too, but the second is defensible because it targets branded queries.

`office-yoga-for-remote-teams` vs `kontorsyoga-pa-distans-forklaring` are NOT a
duplicate — that is the deliberate Swedish split.

### Consistency

**Her own pricing stated in euros — 2 places.** The whole site prices in SEK
(`src/pages/Pricing.tsx`: 1,490 / 2,990 / 4,990 kr, `priceCurrency: 'SEK'`):

- `src/data/posts/office-yoga-for-remote-teams.ts:54` — "flat monthly
  subscription in euros"
- `src/data/posts/build-a-strong-remote-team.ts:89` — "flat monthly
  subscription in euros"

`tech-neck-exercises-desk.ts:44` already says "in SEK", which confirms the
other two are stale.

Borderline: `how-much-does-corporate-yoga-cost.ts:97` gives a budget of
"£330–£550 per month (€380–€640)" as market guidance, 18 lines after correctly
quoting her own "flat 4,990 kr per month" and just before a link to `/pricing`.
Labelled as market rate so not strictly a violation, but a buyer reads GBP then
lands on kr.

Third-party Deloitte/PwC/Gallup/EU-OSHA figures in £/€/A$ are all attributed —
fine as-is.

**Claims implying she already has corporate clients — 5 places.** She has no
clients yet, so these are not true:

- `improve-team-morale-remote-team.ts:28` — "I spend a lot of my week on other
  people's calls watching how distributed teams actually feel"
- `office-yoga-for-remote-teams.ts:29` — "Most teams I work with"
- `meditation-breathing-or-chair-yoga-for-your-team.ts:24` — "Most HR leads I
  work with"
- `meditation-breathing-or-chair-yoga-for-your-team.ts:43` — "Plenty of the
  teams I work with"
- `meditation-breathing-or-chair-yoga-for-your-team.ts:61` — "Most teams I work
  with" — this one is inside `faqItems`, so it also ships as FAQ structured data

Softer: `improve-wellbeing-programme-attendance.ts:24` — "In my experience"
about attendance decay.

Correctly handled, no action: the homepage PROOF section is honestly hedged
("not all of them from corporate sessions"), `ReviewsBanner` uses first names
only, and `Testimonials` returns null on an empty array.

**Em-dashes and bare ampersands — clean.** Zero in visible copy.

---

## (b) The 28-day numbers

| Metric | Value | Last week |
|---|---|---|
| Clicks | 4 | 6 (over the then-current window) |
| Impressions | 188 | — |
| Average CTR | 2.1% | — |
| Average position | 61 | — |

Position 61 is the headline problem. The site is being shown, but on page 6 and
beyond, where essentially nobody scrolls.

---

## (c) Top queries

All 18 queries with impressions in the window. Every one recorded 0 clicks —
the 4 recorded clicks are on anonymised queries Google does not report.

| Query | Impr | CTR | Position |
|---|---|---|---|
| distributed team burnout | 18 | 0% | 75.2 |
| virtual corporate yoga | 9 | 0% | 80.2 |
| how much does burnout cost companies | 8 | 0% | 88.9 |
| cost of burnout | 6 | 0% | 86.8 |
| cost of employee burnout | 6 | 0% | 92.2 |
| mobile workplace yoga | 5 | 0% | 59.4 |
| virtual yoga class for employees | 4 | 0% | 86.2 |
| breathwork for office workers | 3 | 0% | 81.0 |
| breathwork for remote workers | 2 | 0% | 59.0 |
| coaching for hybrid working | 2 | 0% | 96.5 |
| online corporate yoga | 2 | 0% | 100.0 |
| remote yoga | 1 | 0% | 9.0 |
| meditation for remote workers | 1 | 0% | 36.0 |
| yoga meditation at workplace | 1 | 0% | 37.0 |
| office yoga prices | 1 | 0% | 38.0 |
| cost consciousness in the workplace | 1 | 0% | 61.0 |
| which corporate wellness platforms are most effective for remote and hybrid teams? | 1 | 0% | 77.0 |
| how to human resources for yoga practitioners | 1 | 0% | 254.0 |

### Top pages

| Page | Clicks | Impr | CTR | Position |
|---|---|---|---|---|
| `/` | 3 | 9 | 33.3% | 9.6 |
| `/blog/how-much-does-corporate-yoga-cost` | 1 | 16 | 6.3% | 23.5 |
| `/guides/cost-of-employee-burnout` | 0 | 63 | 0% | 73.2 |
| `/services/chair-yoga-for-teams` | 0 | 25 | 0% | 68.7 |
| `/guides/mindfulness-at-work` | 0 | 21 | 0% | 45.0 |
| `/blog/prevent-burnout-distributed-team` | 0 | 11 | 0% | 80.0 |
| `/blog/how-to-meditate-at-work` | 0 | 10 | 0% | 56.6 |
| `/guides/remote-work-burnout` | 0 | 10 | 0% | 64.7 |
| `/about` | 0 | 9 | 0% | 4.3 |
| `/blog/breathing-exercises-for-work-stress` | 0 | 9 | 0% | 64.9 |

23 pages had impressions in total.

Two things stand out. `/guides/cost-of-employee-burnout` collects 63
impressions, a third of the site's total, and converts none of them because it
sits at position 73. And `/about` sits at position 4.3, by far the best
non-homepage position on the site, with a title that says nothing.

---

## (d) Indexing status

| | Count |
|---|---|
| Indexed | 31 |
| Not indexed | 16 |

Reasons for the 16:

| Reason | Source | Pages |
|---|---|---|
| Redirect error | Website | 4 |
| Discovered, currently not indexed | Google systems | 12 |

The 4 Redirect errors are the trailing-slash 301 problem in section (a),
unchanged from last week because the fix was never pushed.

**Indexing requests this week: none, deliberately.**

Every URL on the site currently 301s away from its own canonical. Last week 3
of the 4 URLs submitted for indexing came straight back as Redirect errors.
Submitting more URLs into the same broken state would repeat that. Once the
deploy from this run is confirmed live and `/pricing` returns 200, the 4
Redirect error URLs are the right ones to resubmit — that is next week's job,
or Camilla's as soon as she has checked the deploy.

---

## (e) GA4

Property 547565118, 2026-08-15 to 2026-09-11.

| Metric | Value |
|---|---|
| Sessions | 85 |
| Engaged sessions | 38 |
| Engagement rate | 44.71% |
| Avg engagement time per session | 21s |
| Event count | 444 |
| **Key events (`generate_lead`)** | **0** |

Traffic sources:

| Channel | Sessions | Share |
|---|---|---|
| Direct | 74 | 87.06% |
| Organic Search | 7 | 8.24% |
| Referral | 3 | 3.53% |
| Organic Social | 1 | 1.18% |

**`generate_lead` has never fired.** The wiring is correct, so this is a real
zero and not a tracking fault: `index.html:16-21` loads gtag for
G-5GXTN6CGLT globally, and `src/pages/Demo.tsx:40` fires
`gtag('event', 'generate_lead', { form_name: 'pilot-enquiry' })` on submission.
Nobody has submitted the demo form.

Treat the 87% Direct share with suspicion. Last-7-day city data shows Amsterdam,
Moscow, New York, Dallas and Antwerp, and the only named referrer is
`dataindex.pro`, which is a known crawler domain. Average engagement time of
21 seconds across 85 sessions is consistent with bots plus Camilla's own
visits. Real human traffic is closer to the 7 organic search sessions than to
the 85 total.

---

## (f) Blog topics for Wednesday

**The usual selection rule found almost nothing this week, and that is itself
the finding.** The brief looks for queries at position 8-30 with weak CTR. Only
one query in the entire dataset sits in that band — "remote yoga" at position
9.0 — and it has a single impression, which is too thin to build a post on.
Everything else is at position 36 or worse. The site does not have a
click-through problem yet; it has a ranking problem.

So the highest-value Wednesday work is consolidation, not another post. Three
recommendations, strongest first:

**1. Merge the desk-meditation duplicate, redirect one to the other.**
`5-minute-desk-meditation` and `how-to-meditate-at-work` answer the same
question. `how-to-meditate-at-work` already has 10 impressions at position 56.6
and "meditation for remote workers" is showing at position 36, so it is the
stronger keeper. Fold the other in and 301 it. Same play afterwards for the
chair-yoga pair and the neck-and-shoulder pair. Maps to the meditation class
type. Why: two half-strength pages competing for one query is the cheapest
ranking problem on the site to fix, and there are four such pairs.

**2. Rework `/guides/cost-of-employee-burnout` rather than writing near it.**
It takes 63 impressions, a third of the site total, against "how much does
burnout cost companies" (8), "cost of burnout" (6) and "cost of employee
burnout" (6), and converts nothing at position 73.2. It is already the right
page for the right queries. It needs to answer the literal question "how much
does burnout cost companies" high on the page, in a figure, rather than being
outranked while ranking for all three. Maps to the cost-and-proof case for the
subscription. Why: this is the single biggest concentration of demand pointing
at the site, and it is one page, not a content gap.

**3. Add "breathwork" to `breathing-exercises-for-work-stress`.**
"breathwork for office workers" (3 impressions, position 81) and "breathwork
for remote workers" (2, position 59) are showing, but the existing post is
written entirely around "breathing exercises" and sits at position 64.9. This
is a vocabulary gap in an existing post, not a missing post. Maps to the
breathing class type. Why: ten minutes of editing against a term her buyers
actually type.

**Not recommended:** "mobile workplace yoga" (5 impressions, position 59.4) is
uncovered, but the query means a teacher who travels to your office. That is
not what she sells, and a post chasing it would pull in traffic that cannot
convert.

---

## (g) Title and CTR quick wins

Be honest about the ceiling here: a title rewrite only earns clicks on a page
that is already visible. At position 60-90 nobody sees the title at all. That
leaves exactly one page worth rewriting this week.

**`/about` — position 4.3, 9 impressions, 0 clicks.**
Current title: `About | Remote Yoga Coach` (25 characters, tells a searcher
nothing).

This is the best-ranked page on the site after the homepage and it is wasting
the position. Her 500-hour certification is the credential that distinguishes
her from app-based competitors, and it appears nowhere in the title.

Suggested replacement, 55 characters:

    About Camilla: 500-hour certified yoga teacher

**Secondary, with a caveat — `/blog/how-much-does-corporate-yoga-cost`.**
Position 23.5, 16 impressions, 6.3% CTR, 1 click. Best-performing blog post and
the only content page near the first two pages of results. Current title:
`Office yoga prices: what corporate yoga costs in 2026 | Remote Yoga Coach`.

The title is already good and already carries the exact query "office yoga
prices" (showing at position 38). Its problem is position 23, not wording. Tighten
only if touching the page anyway:

    Office yoga prices 2026: what corporate yoga costs

No change recommended for `/services/chair-yoga-for-teams` (position 68.7),
`/guides/mindfulness-at-work` (position 45.0) or
`/guides/cost-of-employee-burnout` (position 73.2). All three need rankings
before titles matter.
