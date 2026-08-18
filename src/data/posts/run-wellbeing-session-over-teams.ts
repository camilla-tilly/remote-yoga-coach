import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  slug: 'run-wellbeing-session-over-teams',
  title: 'How to run a wellbeing session over Teams (or Zoom)',
  metaDescription:
    'A practical guide to running a virtual wellbeing session for a remote team over Teams or Zoom: setup, the session arc, getting people to show up, and the norms that make it work.',
  publishDate: '2026-07-05',
  readingTime: '6 min',
  category: 'How-to',
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
    { slug: '5-minute-desk-meditation', label: 'A 5-minute meditation you can do at your desk' },
  ],
  content: [
    { type: 'paragraph', text: 'Running a wellbeing session for a distributed team over Teams or Zoom sounds harder than it is, and in some ways it works better than gathering everyone in a room. There is no space to book, no travel, and every location joins as an equal. Whether you want to lead one yourself or just understand what good looks like before you hire someone, here is how to run one well.' },
    { type: 'heading', text: 'Why virtual wellbeing actually works' },
    { type: 'paragraph', text: 'The instinct is that wellbeing needs a shared physical space. In practice, the live online format removes the exact frictions that keep people away: nobody has to change clothes, nobody has to be seen, and colleagues in other time zones can join or catch the recording. For a remote team it is not a compromise, it is the natural home.' },
    { type: 'heading', text: 'Before the session: the setup' },
    { type: 'paragraph', text: 'Most of the work is in the calendar, not the session. Get these right and the rest is easy:' },
    { type: 'list', items: [
      '**Put it on a recurring invite.** A protected weekly slot beats an ad-hoc one every time. The habit is the point.',
      '**Say camera-off is welcome, in the invite.** This single line does more for attendance than anything else.',
      '**Keep it to 15 to 30 minutes.** Long enough to reset, short enough to fit a lunch break or a gap between meetings.',
      '**Pick a calm time.** Just after lunch or late afternoon, when energy dips, tends to land better than 9am.',
    ] },
    { type: 'heading', text: 'Running it: a simple arc' },
    { type: 'paragraph', text: 'You do not need to be a guru. You need a predictable structure so nobody is caught off guard. A reliable arc:' },
    { type: 'list', items: [
      '**Arrive (1 to 2 min).** Welcome people, remind them cameras are optional, let them settle.',
      '**Breathe (3 to 5 min).** One simple technique, slowly, explained plainly. Slow exhales do the work.',
      '**Move (5 to 10 min).** Gentle seated mobility for the neck, shoulders and back. Nothing anyone has to be fit to do.',
      '**Settle (5 min).** A short guided meditation or simple body scan to close.',
      '**Close (1 min).** One small thing to carry into the rest of the day.',
    ] },
    { type: 'callout', text: 'The golden rule for virtual sessions: never make it a performance. No pop-quizzes, no "unmute and share how you feel", no forcing cameras on. The lower the threshold, the more of the team you keep.' },
    { type: 'heading', text: 'Getting people to actually show up' },
    { type: 'paragraph', text: 'Attendance is the whole game, and it is mostly about removing effort. A recurring slot removes the decision. Camera-off removes the self-consciousness. A recording removes the fear of missing out. And a visible sponsor helps: when a manager joins and logs off on time afterwards, it signals the session is genuinely allowed, not a test of commitment. If you are worried people will not come, that is usually a format problem, not an interest problem, and the fixes above are the answer.' },
    { type: 'heading', text: 'The norms that make it work' },
    { type: 'list', items: [
      'Cameras optional, always, and say so out loud each time.',
      'No obligation to speak. Silence is fine.',
      'Record every session for other time zones and anyone who misses it.',
      'Keep it the same time, same place, same host, so it becomes a fixture.',
    ] },
    { type: 'heading', text: 'Or, have someone run it for you' },
    { type: 'paragraph', text: 'Leading it yourself is a great way to start, and for some teams it is enough. But the reason a dedicated coach works is continuity: the same familiar person every week builds the trust and gentle accountability that a rotating internal volunteer struggles to. If leading it yourself becomes one more thing on your plate, that is usually the point to hand it over. See [how a run-for-you session works](/services/team-wellness), or read about [corporate wellness ideas that actually work](/blog/corporate-wellness-ideas-remote-teams) for the wider menu.' },
    { type: 'cta', text: 'Would rather not run it yourself? Start with a single taster session, hosted for you, then once it is a weekly habit you get attendance and wellbeing reporting.', ctaHref: '/demo', ctaLabel: 'Book a taster' },
    { type: 'faq', faqItems: [
      { q: 'Does a wellbeing session work over Teams or Zoom?', a: 'Yes, and often better than in person for a distributed team. There is no room to book or travel involved, every location joins equally, cameras can stay off, and the session is recorded for other time zones.' },
      { q: 'How long should a virtual wellbeing session be?', a: '15 to 30 minutes works best: long enough to reset the body and steady the nervous system, short enough to fit a lunch break or a gap between meetings without eating the day.' },
      { q: 'How do you get remote employees to attend?', a: 'Remove the effort. Use a recurring calendar slot, say camera-off is welcome, record it, and have a manager visibly take part. Low attendance is nearly always a format problem, not a lack of interest.' },
      { q: 'Should we run it ourselves or hire a coach?', a: 'Running it yourself is a fine way to start. A dedicated coach adds continuity, the same familiar person each week, which builds the trust and accountability that drive lasting attendance. Many teams start internal and hand over once it becomes a fixture.' },
    ] },
  ],
};

export default post;
