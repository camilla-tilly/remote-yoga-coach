# Weekly Visibility & Growth Review — 2026-08-28

## (a) Site health

**Live checks could not be performed.** This session's network egress to
`remoteyogacoach.com` is blocked at the sandbox's gateway (403 policy denial
on every request, confirmed via both `WebFetch` and direct `curl` — this is
a network policy restriction on the agent's environment, not a site issue).
No conclusion about live page status, titles, or redirects can be drawn this
week. **Action:** run this check manually, or from an environment with open
egress, before trusting the "site health" section of future reports.

What the repo itself shows for the target pages (titles as authored, not
verified live):

| Route | Title source | Notes |
|---|---|---|
| `/` | `index.html` / `SEO` default | present |
| `/pricing` | page-level SEO | present |
| `/compare` | page-level SEO | present |
| `/faq` | page-level SEO | present |
| `/services/team-wellness` | page-level SEO | present |
| `/services/chair-yoga-for-teams` | page-level SEO | present |
| `/services/corporate-wellbeing-for-remote-teams` | page-level SEO | present |
| `/sitemap.xml` | `public/sitemap.xml` | well-formed, 35 `<loc>` entries |

`public/robots.txt` explicitly allows all major crawlers, including
AI-answer-engine bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended,
etc.) and points to the sitemap — good hygiene, no changes needed.

## (b) Content shipped this week (2026-08-21 → 2026-08-28)

No new blog posts. The 20 posts in `src/data/posts/` are unchanged since
2026-08-05 (last post: *"Corporate wellness ideas that actually work for
remote and hybrid teams"*).

Site edits this week (from git log):
- **2026-08-25** — Pricing page restructured to clearly separate the 3
  class types (pick/mix) from the 3 subscription plans (frequency) —
  reduces buyer confusion on the highest-intent page.
- **2026-08-25** / **2026-08-24** — About page updated (ultra-runner
  credential, bio line) — personal-brand/trust signal.
- **(2026-08-19, just outside window)** — OG image cache-busted
  (`?v=2`) across `index.html`, `SEO.tsx`, Compare/Guides/CostOfBurnout/
  CorporateWellbeingRemoteTeams — fixes stale LinkedIn/Slack link previews.

Total indexable routes in `public/sitemap.xml`: **35** (home, 3 service
pages, compare, guides hub + 4 guide pillars, pricing, demo, about, faq,
blog index + 20 blog posts).

## (c) Top recommended actions

Domain is young — prioritize **authority and distribution** over more blog
volume, which has already slowed to zero this week anyway.

1. **Get 3–5 backlinks from real, relevant sources this month.** Pitch
   Camilla as a source to 2–3 UK/EU corporate-wellbeing or HR newsletters
   (e.g. guest comment or "how I built X" piece), submit the business to
   1–2 corporate wellness / employee benefits directories, and ask any past
   client to link to remoteyogacoach.com from their careers/wellbeing page
   in exchange for a case-study mention. Young domains get outsized ranking
   benefit from a handful of relevant links.
2. **Turn the ultra-runner angle into a LinkedIn post now** — it's fresh
   (shipped this week on the About page) and is a strong human-interest
   hook for HR/People-ops audiences who scroll past generic wellness
   content. Link back to `/about` or `/pricing`.
3. **Publish 1–2 case studies or a testimonial page**, not more how-to
   posts. A named/logo'd client outcome ("we ran an 8-week chair yoga pilot
   with [company], here's what changed") is far more link- and
   share-worthy than another desk-stretch article, and gives LinkedIn
   posts something concrete to point at.
4. **Verify the OG fix actually resolved the LinkedIn preview issue** —
   post the `/pricing` or `/compare` link on LinkedIn (or use LinkedIn's
   Post Inspector) to confirm the new card image shows, since the cache-bust
   shipped last week and hasn't been visibly confirmed.
5. **Resume a light cadence on the guide pillars, not the blog.** The 4
   `/guides/*` pillar pages are high-priority (0.8–0.9) in the sitemap but
   haven't shipped new content — refreshing or expanding one pillar page
   (e.g. `remote-work-burnout` or `cost-of-employee-burnout`) does more for
   rankings than a 21st blog post, since pillar pages consolidate authority
   the individual posts otherwise fragment.

## (d) Check these yourself in Search Console & GA4

- [ ] **Impressions & top queries** (Search Console → Performance, last 28
      days) — are impressions trending up week-over-week? Any new queries
      appearing for "corporate yoga," "chair yoga for teams," "remote team
      wellbeing," etc.?
- [ ] **Indexed pages** (Search Console → Pages / Indexing) — do indexed
      pages roughly match the 35 sitemap URLs? Any "Discovered, not
      indexed" or "Crawled, not indexed" pages worth investigating?
- [ ] **`generate_lead` key event firing** (GA4 → Admin → Events, or
      Realtime) — confirm it's still registering as a key event and firing
      on actual demo/contact form submissions (the code reference is in
      `src/pages/Demo.tsx` — worth a live test submission to confirm the
      event reaches GA4).
- [ ] **Traffic sources** (GA4 → Acquisition) — how much is organic search
      vs. direct vs. LinkedIn/social vs. referral? This tells you whether
      action #1–#3 above are worth prioritizing over further SEO tweaks.
