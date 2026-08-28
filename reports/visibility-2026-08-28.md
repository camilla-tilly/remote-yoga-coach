# Weekly Visibility Report — 2026-08-28

## ⚠️ Live-site check could not run
This session's network egress is restricted to a small allowlist (git/npm hosts) and blocks `remoteyogacoach.com` (403 from the egress proxy) — this is an environment/network policy issue, not a site problem. **This week's report substitutes a source-code check** of the seven target routes below; it does not confirm what's actually deployed and rendering live. If this routine should verify the live site each week, the environment's network policy needs to allow outbound access to `remoteyogacoach.com` (and ideally general web access) — worth fixing before next run.

## (a) Site health

Titles found in source for the requested routes (all non-empty, all end in "| Remote Yoga Coach", no duplicates seen among these seven):

| Route | Title in source |
|---|---|
| `/` | Corporate Wellbeing for Remote and Hybrid Teams \| Remote Yoga Coach |
| `/pricing` | Pricing \| Team Wellbeing Subscriptions \| Remote Yoga Coach |
| `/compare` | Live Wellbeing Sessions vs Apps and EAPs \| Remote Yoga Coach |
| `/faq` | Frequently Asked Questions \| Remote Yoga Coach |
| `/services/team-wellness` | Corporate Wellbeing Sessions for Remote and Hybrid Teams \| Remote Yoga Coach |
| `/services/chair-yoga-for-teams` | Virtual Office Yoga and Chair Yoga for Teams \| Remote Yoga Coach |
| `/services/corporate-wellbeing-for-remote-teams` | Weekly Wellbeing Sessions for Remote and Hybrid Teams \| Remote Yoga Coach |

`public/sitemap.xml` is present in the repo, well-formed, and lists **35 URLs** (home, 3 service pages, `/compare`, `/guides` + 4 guide pages, `/pricing`, `/demo`, `/about`, `/faq`, `/blog` + 20 blog posts). Could not confirm the deployed `/sitemap.xml` matches this file or that it 200s live — recommend a manual check (see checklist below).

No broken links, redirects, or duplicate titles found in source. **Action needed:** confirm live parity manually this week since automated verification was blocked.

## (b) Content shipped this week (2026-08-21 → 2026-08-28)

**Nothing shipped in the last 7 days.** The most recent blog post (`corporate-wellness-ideas-remote-teams`, 2026-08-05) is now 23 days old. Three posts landed 2026-08-03 in a batch (`how-to-start-a-corporate-wellbeing-programme`, `corporate-wellbeing-for-tech-teams`, `improve-team-morale-remote-team`), then publishing stopped. 20 posts total in `src/data/posts/`, all already in the sitemap.

## (c) Top recommended actions

1. **Get 3–5 backlinks this week, not another blog post.** The domain is young and content velocity has already outpaced authority — 20 posts and zero links do less for rankings than a handful of real referring domains. Concretely: submit the business to 2–3 relevant directories (e.g. corporate wellness / HR-tech listings, local business directories), pitch a guest post or quote to an HR/remote-work newsletter or blog, and ask 1–2 existing pilot clients for a testimonial link back from their site or a case-study co-post.
2. **Publish 2–3 LinkedIn posts this week from Camilla's personal profile**, not a company page — personal accounts get far more organic reach at this stage. Repurpose the two most useful existing posts (e.g. `how-much-does-corporate-yoga-cost`, `team-wellbeing-subscription-vs-workshops`) into native LinkedIn posts (not just links out) that end with a soft CTA to `/demo` or `/pricing`. Tag 2-3 relevant connections or comment thoughtfully on 5-10 HR/People-Ops posts this week to build visibility before posting.
3. **Get a case study or logo up.** If any pilot/paying client exists, add a short named or anonymized case study/testimonial to the homepage and `/compare` — social proof matters more than volume of content for conversion and for earning links from others.
4. **Resume a slower, deliberate posting cadence** (e.g. one post every 2 weeks) once backlink/LinkedIn work is underway, and prioritize topics likely to attract links (original data, a cost calculator, a "state of X" survey) over more how-to listicles — link-worthy content compounds, generic how-tos don't.
5. **Verify the `generate_lead` conversion event is actually recording in GA4** (see checklist) — it's wired in code on `/demo` (`src/pages/Demo.tsx:40`, `gtag('event', 'generate_lead', ...)`), but only useful if GA4 is confirmed to be receiving it before more traffic is driven to that page.

## (d) Check yourself in Search Console & GA4

- **Search Console:** total impressions/clicks trend (7d and 28d), top 10 queries by impressions, and whether any new queries appeared this week.
- **Search Console → Pages:** how many of the 35 sitemap URLs are indexed vs "Discovered/Crawled – not indexed" — flag any service or guide page stuck un-indexed.
- **Search Console → Sitemaps:** confirm `sitemap.xml` was fetched successfully and the submitted vs indexed count.
- **GA4 → Realtime or DebugView:** trigger a test submission on `/demo` and confirm `generate_lead` fires and appears as a key event.
- **GA4 → Acquisition:** traffic by channel (organic search vs direct vs referral vs social) — check whether any LinkedIn referral traffic is showing up yet.
