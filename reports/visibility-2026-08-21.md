# Weekly visibility & growth review — 2026-08-21

## a) Site health

**Could not check.** This run's network egress policy blocks outbound requests to `remoteyogacoach.com` (proxy returns 403 on every attempt, confirmed via the agent-proxy status log — a fixed policy denial, not a transient failure). None of the required pages (`/`, `/pricing`, `/compare`, `/faq`, the three `/services/*` pages, `/sitemap.xml`) could be fetched live this week.

Code-level check (not a substitute for live verification, but useful context):
- Titles are defined per-page via a shared `SEO.tsx` component and look correct in source: home, `/pricing` → "Pricing | Team Wellbeing Subscriptions | Remote Yoga Coach", `/compare` → "Live Wellbeing Sessions vs Apps and EAPs | Remote Yoga Coach", `/faq` → "Frequently Asked Questions | Remote Yoga Coach", and each `/services/*` page has its own title.
- Titles are set client-side (`document.title` in a `useEffect`), which normally hides real page titles from crawlers — but the build pipeline runs a Puppeteer prerender step (`scripts/prerender.mjs`) that visits every URL in `sitemap.xml` after build and writes the fully-rendered HTML (title, meta, JSON-LD included) to `dist/<route>/index.html`. So *as long as `npm run build` is what's deployed* (not `build:spa`), crawlers should see correct titles. Worth confirming the deploy config actually runs the full `build` script.
- `robots.txt` is present, permissive, and explicitly welcomes Googlebot, Bingbot, GPTBot, PerplexityBot, ClaudeBot, etc. Points to the sitemap. No issues found.

**Action for Camilla:** load the 7 URLs above in a browser (or view-source) this week to confirm they return 200s with the right titles, since this run couldn't verify it.

## b) Content shipped this week

**Nothing shipped in the last 7 days (2026-08-14 → 2026-08-21).** The most recent blog post, "Corporate wellness ideas for remote teams," published 2026-08-05 — 16 days ago. It capped a burst of 4 posts in late July/early August; before that, cadence was roughly one post per week since June.

- Total posts: 20 (`src/data/posts/`)
- Total indexed routes in `public/sitemap.xml`: **35** (home, 3 service pages, compare, 4 guides + guides index, pricing, demo, about, faq, blog index, 20 blog posts)

## c) Top recommended actions

1. **Get 3–5 real backlinks before writing more posts.** Domain is young — content volume won't move rankings without authority behind it. Concrete targets: HR/wellness directories (e.g. Corporate Wellness Magazine, EAP/benefits comparison sites), a guest post or contributor pitch to a remote-work publication (Remote.co, We Work Remotely blog, Running Remote), and a listing on 2-3 Swedish or Nordic corporate wellness / HR-tech directories if targeting that market. Track each with a simple spreadsheet: site, contact, status.
2. **Publish 2-3 LinkedIn posts this week to close the content gap**, not another blog post. LinkedIn is where the buyer (HR/People leads) actually is, and it's free distribution the young domain doesn't have yet. Repurpose the two newest posts ("Corporate wellness ideas for remote teams," "How to start a corporate wellbeing programme") into native LinkedIn posts with a hook + link in comments (links in the post body get deprioritized by LinkedIn's algorithm).
3. **Get 2-3 client/partner testimonials or case-study quotes and add them to `/compare` and the homepage**, with a LinkedIn recommendation from the same person if possible — social proof compounds with backlinks for a young domain in a way more blog content doesn't.
4. **Confirm the prerendered build is what's actually deployed** (see site health note above) — if the SPA fallback (`build:spa`) is what's live instead of `build`, every page's title/meta/OG tags are invisible to crawlers and social scrapers regardless of how much content ships.
5. **Resume the blog cadence at ~1/week, but treat it as LinkedIn fuel, not the primary lever** — write the post, then spend equal effort turning it into 2 LinkedIn posts and one direct outreach message to a relevant HR contact.

## d) Check yourself in Search Console & GA4

- [ ] Impressions and top queries (Search Console → Performance) — any query clusters emerging beyond brand name?
- [ ] Indexed pages count (Search Console → Pages) vs. the 35 in `sitemap.xml` — anything excluded or flagged?
- [ ] Is the `generate_lead` key event actually firing in GA4 (Admin → Events) — check for any drop-off in the last 7 days
- [ ] Traffic sources (GA4 → Acquisition) — how much is organic vs. direct vs. referral/social, and is LinkedIn showing up at all yet?
