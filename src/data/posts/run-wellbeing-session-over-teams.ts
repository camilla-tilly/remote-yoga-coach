import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  slug: 'run-wellbeing-session-over-teams',
  title: 'How to run a wellbeing session over Teams (or Zoom)',
  metaDescription:
    'A practical guide to running a virtual wellbeing session for a remote team over Teams or Zoom: setup, the session arc, getting people to show up, and the norms that make it work.',
  publishDate: '2026-07-05',
  readingTime: '6 min',
  category: 'Remote teams and burnout',
  excerpt:
    'Running a wellbeing session for a distributed team over Teams or Zoom is easier than it looks, and works better than in person. Here is exactly how to do it well.',
  language: 'en',
  relatedServiceHref: '/services/team-wellness',
  relatedServiceLabel: 'Or have someone run it for you',
  tableOfContents: true,
  faqSchema: true,
  relatedPosts: [
    { slug: 'corporate-wellness-ideas-remote-teams', label: 'Corporate wellness ideas that actually work' },
    { slug: 'prevent-burnout-distributed-team', label: 'How to prevent burnout in a distributed team' },
    { slug: 'how-to-meditate-at-work', label: 'How to meditate at work: a 5-minute desk meditation' },
  ],
  content: [
    { type: 'paragraph', text: 'Running a wellbeing session for a distributed team over Teams or Zoom sounds harder than it is, and in some ways it works better than in person. There is no space to book, no travel, and every location joins as an equal.' },
    { type: 'heading', text: 'Why virtual wellbeing actually works' },
    { type: 'paragraph', text: 'The instinct is that wellbeing needs a shared physical space. In practice, the live online format removes the frictions that keep people away: nobody has to change clothes or be seen, and colleagues in other time zones can catch the recording. For a remote team, running it online is the obvious choice rather than a second-best option.' },
    { type: 'heading', text: 'Before the session: the setup' },
    { type: 'paragraph', text: 'Most of the work happens when you set up the calendar invite, before the session itself:' },
    { type: 'list', items: [
      '**Put it on a recurring invite.** A protected weekly slot works better than an ad-hoc one, because the aim is to build a habit.',
      '**Say camera-off is welcome, in the invite.** This one line does more for attendance than anything else.',
      '**Keep it to 15 to 30 minutes.** Long enough to reset, short enough to fit a lunch break or a gap between meetings.',
      '**Pick a calm time.** Just after lunch or late afternoon, when energy dips, tends to land better than 9am.',
    ] },
    { type: 'heading', text: 'Running it: a simple arc' },
    { type: 'paragraph', text: 'You do not need to be a guru. You need a predictable structure so nobody is caught off guard:' },
    { type: 'list', items: [
      '**Arrive (1 to 2 min).** Welcome people, remind them cameras are optional, let them settle.',
      '**Breathe (3 to 5 min).** One simple technique, slowly, explained plainly. The slow out-breaths are what calm people down.',
      '**Move (5 to 10 min).** Gentle seated mobility for the neck, shoulders and back. Nobody needs to be fit to do it.',
      '**Settle (5 min).** A short guided meditation or simple body scan to close.',
      '**Close (1 min).** One small thing to carry into the rest of the day.',
    ] },
    { type: 'callout', text: 'The most important rule is never to make it a performance. Do not quiz people, do not ask them to "unmute and share how you feel", and do not make anyone turn their camera on. The less you ask of people, the more of the team keep coming.' },
    { type: 'heading', text: 'Getting people to actually show up' },
    { type: 'paragraph', text: 'Attendance is mostly about removing effort. A recurring slot means nobody has to decide each week whether to go, camera-off means nobody has to feel self-conscious, and a recording means nobody worries about missing out.' },
    { type: 'paragraph', text: 'A visible sponsor helps too: when a manager joins and logs off on time afterwards, it signals the session is genuinely allowed. Low attendance usually comes from how the session is set up rather than a lack of interest. My [remote work burnout guide](/guides/remote-work-burnout) sets out the underlying pattern.' },
    { type: 'heading', text: 'The norms that make it work' },
    { type: 'list', items: [
      'Cameras optional, always, and say so out loud each time.',
      'No obligation to speak. Silence is fine.',
      'Record every session for other time zones and anyone who misses it.',
      'Keep it the same time, same place, same host, so it becomes a fixture.',
    ] },
    { type: 'heading', text: 'Or, have someone run it for you' },
    { type: 'paragraph', text: 'Leading it yourself is a fine way to start, and for some teams it is enough. A dedicated coach adds continuity: the same familiar person every week builds trust that a rotating internal volunteer struggles to. See [how a run-for-you session works](/services/team-wellness), or [corporate wellness ideas that actually work](/blog/corporate-wellness-ideas-remote-teams) for the wider menu.' },
    { type: 'cta', text: 'Would rather not run it yourself? Start with a single pilot session, hosted for you.', ctaHref: '/demo', ctaLabel: 'Book a pilot' },
    { type: 'faq', faqItems: [
      { q: 'Does a wellbeing session work over Teams or Zoom?', a: 'Yes, and often better than in person for a distributed team. There is no room to book, every location joins equally, cameras can stay off, and the session is recorded for other time zones.' },
      { q: 'How long should a virtual wellbeing session be?', a: '15 to 30 minutes works best: long enough to reset, short enough to fit a lunch break or a gap between meetings.' },
      { q: 'How do you get remote employees to attend?', a: 'Remove the effort. Use a recurring calendar slot, say camera-off is welcome, record it, and have a manager visibly take part.' },
      { q: 'Should we run it ourselves or hire a coach?', a: 'Running it yourself is a fine way to start. A dedicated coach adds continuity, the same familiar person each week, which builds the trust that keeps people coming. You can start internally and hand over once it becomes a fixture.' },
    ] },
  ],
};

export default post;
