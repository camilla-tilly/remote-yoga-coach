# Weekly Visibility & Growth Review — 2026-08-14

## (a) Site health

**Could not be checked live this run.** This environment's network egress proxy blocked all outbound requests to `remoteyogacoach.com` (CONNECT → 403, policy denial), so none of the target URLs could be fetched:
`/`, `/pricing`, `/compare`, `/faq`, `/services/team-wellness`, `/services/chair-yoga-for-teams`, `/services/corporate-wellbeing-for-remote-teams`, `/sitemap.xml`.

As a fallback, verified the `<title>` values are present and non-empty in source for each of those routes:

| Route | Title in source |
|---|---|
| `/` | Corporate Wellbeing for Remote and Hybrid Teams \| Remote Yoga Coach |
| `/pricing` | Pricing \| Team Wellbeing Subscriptions \| Remote Yoga Coach |
| `/compare` | Live Wellbeing Sessions vs Apps and EAPs \| Remote Yoga Coach |
| `/faq` | Frequently Asked Questions \| Remote Yoga Coach |
| `/services/team-wellness` | Corporate Wellbeing Sessions for Remote and Hybrid Teams \| Remote Yoga Coach |
| `/services/chair-yoga-for-teams` | Virtual Office Yoga and Chair Yoga for Teams \| Remote Yoga Coach |
| `/services/corporate-wellbeing-for-remote-teams` | Weekly Wellbeing Sessions for Remote and Hybrid Teams \| Remote Yoga Coach |

**Action for Camilla:** load these 7 URLs plus `/sitemap.xml` yourself (or re-run this routine once the environment's network policy allows the `remoteyogacoach.com` domain) to confirm they actually render these titles and return 200s, with no unexpected redirects.

## (b) Content shipped this week (Aug 7–14)

- **No new blog posts** in this window — all 20 posts in `src/data/posts/` have `publishDate` between 2026-06-10 and 2026-08-05; the most recent (`corporate-wellness-ideas-remote-teams`, Aug 5) falls just outside the 7-day window.
- **3 commits to the About page** landed this week:
  - Aug 10 — added Certificate III in Fitness credential, sharpened accessibility framing
  - Aug 14 (×2) — added traditional yogic meditation/pranayama training, then reframed it as Hindu yogic tradition
- Last blog batch was Aug 3 (3 posts: tech teams, starting a programme, remote morale), alongside a round of on-page SEO fixes (broken `/compare` link, duplicate homepage title, over-long meta, internal linking, EAP terminology).

## (c) Top recommended actions

1. **Get 3–5 backlinks from real, findable sources this month.** Domain is young — links outrank more blog volume right now. Concrete targets: guest post or podcast mention on a corporate wellness / HR blog, a listing on 2–3 employee-benefits or wellness-vendor directories, and a partner/reciprocal link from any coach, HR consultant, or SUP/yoga-adjacent business Camilla already works with.
2. **Post 2–3x/week on LinkedIn under Camilla's own name**, linking back to a service or guide page each time (not just the homepage), and engage in comments on HR/People-Ops posts — LinkedIn is where the buyer (HR/People leads) actually is, and it drives referral traffic + signals relevance faster than organic search will at this domain age.
3. **Verify Google Business Profile and LinkedIn Company Page are both live, filled out, and linking to remoteyogacoach.com** — cheap, fast trust signals for a young domain that also help local/brand-name search.
4. **Update About page's freshly-added credentials (Certificate III, yogic/pranayama training) into the homepage trust section and one relevant service page** — the wording just landed on About only; reuse it where buyers actually convert.
5. **Hold new blog posts for now**; instead spend the freed time each week on outreach (item 1) and 1 solid case-study/testimonial post from an actual client — a named client story is stronger link-bait and social-proof than another generic guide.

## (d) Check yourself in Search Console & GA4

- [ ] **Search Console → Performance**: total impressions/clicks trend, top queries (any branded vs. non-branded split?), top pages
- [ ] **Search Console → Pages**: how many of the 35 sitemap URLs are indexed vs. "Discovered/Crawled – not indexed"
- [ ] **Search Console → Sitemaps**: confirm `sitemap.xml` was fetched successfully and shows ~35 submitted/indexed
- [ ] **GA4 → Admin → Events**: confirm `generate_lead` is firing (test a real form submission) and is marked as a key event
- [ ] **GA4 → Acquisition → Traffic acquisition**: split by channel (organic search vs. direct vs. referral vs. social) — is LinkedIn showing up at all yet?
- [ ] **GA4 → Engagement → Pages and screens**: which of the 3 service pages and pricing/compare get the most views, and what's the drop-off before `generate_lead`

---
*Site metadata (a) verified from source only — live fetch blocked by network policy this run. Sitemap route count (35) and blog post inventory (20) verified directly from the repo.*
