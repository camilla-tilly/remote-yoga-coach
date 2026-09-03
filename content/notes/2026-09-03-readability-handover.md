# Readability revamp — where it got to, and what I need from you

Pushed as `03f51aa` on 3 September. Netlify is building it now.

---

## What is live

Same words on every page. A script (`scripts/verify-copy.mjs`) compared all 47
routes before and after, from the built HTML:

| Check | Result |
|---|---|
| Pages whose text changed | **0 of 47** |
| Titles, meta descriptions, canonicals | 0 changes |
| JSON-LD (including every FAQ schema) | 0 changes |
| Links and anchor text | 0 changes |
| Headings | 101 added, **0 removed or altered** |

The 101 added headings are FAQ questions, which are now real `<h3>`s instead of
anonymous spans. Four separate FAQ implementations became one.

**The changes you will actually notice:**

- **Every FAQ collapses.** `/faq` was 21 permanently-open answers; it is 34%
  shorter now, and every answer is still in the HTML for Google.
- **Nine pull quotes**, each one a sentence lifted out of the paragraph it was
  already the punchline of. Never repeated, only moved.
- **Two definition lists** where there were three paragraphs each starting with
  a bolded term (chair yoga service page, desk yoga guide).
- **Two numbered sequences** that were unnumbered cards ("Minute one"…"Minute
  five"; the four moves for the business case).
- **Narrower reading column**, 760px → 680px (blog 680 → 620).
- **Blog links are clay now.** They were `#50453d` — the exact colour of body
  text, with underline as the only hint they were links.

---

## What I need from you

**1. Look at it and tell me what feels wrong.** Start with these five:

- `/faq` — the biggest change
- `/services/chair-yoga-for-teams` — definition list, pull quote
- `/guides/desk-yoga` — definition list, numbered routine, pull quotes
- `/foretagsyoga-distans` — the Swedish page, naturaförmån section
- any blog post — narrower column, clay links, collapsed FAQ

I verified the structure and the computed CSS, but the browser pane kept
freezing on me, so I could not do a proper eyes-on pass at phone width. **Check
it on your phone.** That is the one thing I could not do.

**2. Photos.** You said you would see what you can find. In priority order, and
remember this site is Stockholm B2B — no cabin, no chickens, no Dalarna, no
studio interiors, no lotus poses:

| Where | Shot | Why first |
|---|---|---|
| `/guides/desk-yoga` | **6 square frames**: neck / shoulders + upper back / spine / hips / wrists + hands / lower back + legs. Office chair, work clothes, desk, natural light. | The page is about physical movement and has no images at all. Biggest single gain on the site. |
| `/guides/desk-yoga` | 5 frames, one per minute of the five-minute routine | Same page, second priority |
| `/blog/chair-yoga-at-your-desk` | 8 pose frames | It is an 8-pose routine written as prose |
| `/services/team-wellness` | You teaching to a laptop — the session as a client sees it | This is the product, and nowhere on the site shows it |
| `/services/chair-yoga-for-teams` | One seated shoulder roll at a desk, work clothes | |
| `/about` | One of you at a Stockholm desk | `/coach-camilla.jpg` is already there |

The slots are built and render nothing until a file exists, so there is no rush
and nothing is broken while they are empty. Drop files in `public/images/` and
tell me the filenames.

**3. One decision.** `/services/team-wellness` is the only service page with no
FAQ at all. Adding one means writing questions and answers, which is new copy,
so I left it. Say the word and I will draft six questions in your voice.

---

## Things I found but did not act on

- **`prerender.mjs` was losing a route to a timeout on roughly every build** — a
  different route each time. That route ships with the generic homepage title and
  the build still goes green. This is the same failure mode that cost you a week
  of deploys in August. I added a retry and a loud warning, but it is worth
  Friday's brief checking the *count* (47) rather than just "did it deploy".
- **Two dead components**, `src/components/Hero.tsx` and `Contact.tsx`, imported
  by nothing. Along with `ui/accordion.tsx`, which must stay unimported — Radix
  accordions unmount closed content, which would strip your FAQ answers out of
  the static HTML while the schema still promised them.
- **Fraunces and Inter are still downloaded** in `index.html` but no longer used
  by any class — they resolve to Newsreader and Karla. Two render-blocking
  stylesheets for nothing. Easy win, but it is a visual risk I did not want to
  take blind.
- **`Blog.tsx` is the most divergent page on the site** — its own H1 scale, its
  own widths, its own spacing system. It scans fine, so I left it, but it is the
  obvious next consolidation.

---

## Not done, deliberately

- **No stat callouts.** You were right that they try too hard. They would also
  have needed new label copy, and the same figures would have appeared as big
  numbers on five different URLs.
- **The blog got renderer-level fixes only** — one file, all 31 posts. The four
  posts that are step-by-step routines written as prose (`chair-yoga-at-your-desk`,
  `tech-neck-exercises-desk`, `neck-and-shoulder-stretches-desk-workers`,
  `build-a-strong-remote-team`) still need restructuring into actual steps.
- **The homepage is untouched**, as you asked.
