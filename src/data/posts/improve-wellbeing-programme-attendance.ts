import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  slug: 'improve-wellbeing-programme-attendance',
  title: 'Why wellbeing programme attendance drops, and how to fix it',
  metaDescription:
    'Wellbeing programme attendance rarely falls because people stop caring. It usually comes down to friction: an inconsistent slot, a format that does not suit everyone, or no visible sign that joining is genuinely fine. Here is how to fix it.',
  publishDate: '2026-08-28',
  readingTime: '6 min',
  category: 'Remote teams and burnout',
  excerpt:
    'A wellbeing programme with falling attendance is not usually a sign that people stopped caring. It is almost always friction: the slot moves, the format does not suit the whole team, or nobody can tell whether joining is genuinely fine. Here is what to fix, in order.',
  language: 'en',
  relatedServiceHref: '/services/team-wellness',
  relatedServiceLabel: 'The Weekly Reset',
  tableOfContents: true,
  faqSchema: true,
  relatedPosts: [
    { slug: 'improve-team-morale-remote-team', label: 'How to improve team morale on a remote team' },
    { slug: 'how-to-start-a-corporate-wellbeing-programme', label: 'How to start a corporate wellbeing programme' },
    { slug: 'team-wellbeing-subscription-vs-workshops', label: 'Team wellbeing subscription vs one-off workshops' },
  ],
  content: [
    { type: 'paragraph', text: 'When attendance at a wellbeing programme slides, it is tempting to assume people have lost interest. It is almost always friction instead: a slot that keeps moving, a format that only suits some of the team, or no clear sign that joining is actually fine. Fix the friction and attendance usually recovers without a relaunch.' },
    { type: 'heading', text: 'Why attendance quietly drops off' },
    { type: 'paragraph', text: 'A programme rarely collapses in one obvious moment. It fades a little each week, and by the time someone notices, it can feel bigger than it is. A few common patterns:' },
    { type: 'list', items: [
      '**The slot keeps moving.** A session at 10am one week and 3pm the next never becomes a habit, because people have to remember it instead of it simply being in the calendar.',
      '**One format is asked to suit everyone.** Some people want quiet and still. Others want something more physical. Whoever the format does not suit stops coming rather than say so.',
      '**Nobody can tell if it is really optional.** If a manager never joins and the slot sits between back-to-back meetings, people read the room: real work comes first.',
      '**Missing once feels like missing out for good.** Without a recording, one clash with a client call can be the last session someone ever joins.',
    ] },
    { type: 'callout', text: 'Falling attendance is data, not a verdict. Look at the pattern rather than the headline number and it usually shows where the friction sits. For the underlying cause, see my [remote work burnout guide](/guides/remote-work-burnout).' },
    { type: 'heading', text: 'Fix the format before you fix the marketing' },
    { type: 'paragraph', text: 'The natural reaction to low attendance is to promote the programme harder: another reminder email, a nudge from HR. That rarely works on its own, because it pushes people towards a session that still has the friction baked in. Fix the format first.' },
    { type: 'paragraph', text: 'A few changes make the biggest difference. Camera optional removes the most common reason people hesitate to join a live call. A recording of every session means a missed slot is a delay, not a missed week. And a genuine choice of class type lets people opt into what suits them instead of quietly opting out.' },
    { type: 'paragraph', text: 'In [The Weekly Reset](/services/team-wellness), that choice is three class types: meditation for a quiet, guided reset, breathing for something practical people can reuse in their own day, and chair yoga for gentle movement from a desk chair. A team can pick one, alternate, or combine them over a month.' },
    { type: 'heading', text: 'Make the habit easier to keep than to skip' },
    { type: 'paragraph', text: 'Consistency does more for attendance than almost anything else. A session at the same time, on the same day, with the same coach, becomes a fixture people plan around. Move it around to dodge every clash and people learn not to bother checking whether it is on.' },
    { type: 'list', items: [
      'Fix the day and time and keep it for at least a few weeks, even if the first sessions feel quiet.',
      'Have someone senior visibly join now and then. It signals that the session is fine to attend better than any written encouragement.',
      'Keep the invite standing rather than re-sending one each week. A recurring hold is easier to say yes to than a new decision every time.',
    ] },
    { type: 'heading', text: 'What to actually track' },
    { type: 'paragraph', text: 'Resist the urge to build a dashboard. Attendance over several weeks is the signal that matters, because people only keep showing up to something that does them some good. Watch the trend, not any single week. A dip during a busy sprint is normal. A slow climb as the new slot and format settle in is what you want.' },
    { type: 'paragraph', text: 'A short, optional pulse check every few weeks adds context without becoming another thing to complete.' },
    { type: 'cta', text: 'If attendance has been sliding, seeing the format in action is the fastest way to tell what needs to change. Book a pilot session and I will run a live class with your team so you can watch how people respond.', ctaHref: '/demo', ctaLabel: 'Book a pilot session' },
    { type: 'faq', faqItems: [
      { q: 'Why does attendance at a wellbeing programme drop over time?', a: 'Usually friction rather than lost interest: an inconsistent time slot, a single format that does not suit the whole team, or no visible sign that joining is genuinely fine. Fixing that friction matters more than promoting the programme harder.' },
      { q: 'Does making a session optional or camera-off hurt attendance?', a: 'No, usually the opposite. Camera optional removes one of the biggest reasons people hesitate to join a live call, and it does not stop anyone from taking part fully.' },
      { q: 'How often should a team wellbeing session run to build a habit?', a: 'Weekly, at a fixed time, tends to work best. A session that moves around never becomes a habit, because people have to remember it rather than it simply being in the calendar.' },
      { q: 'What should I actually measure if attendance is falling?', a: 'Attendance over several weeks, watched as a trend rather than a single number, plus a short optional pulse check every few weeks. Heavier measurement rarely adds much and can become another chore.' },
    ] },
  ],
};

export default post;
