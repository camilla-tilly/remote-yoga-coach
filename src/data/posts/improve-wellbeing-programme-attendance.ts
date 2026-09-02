import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  slug: 'improve-wellbeing-programme-attendance',
  title: 'Why wellbeing programme attendance drops, and how to fix it',
  metaDescription:
    'Wellbeing programme attendance rarely falls because people stop caring. It usually comes down to friction: an inconsistent slot, a format that does not suit everyone, or no visible sign that joining is genuinely fine. Here is how to fix it.',
  publishDate: '2026-08-28',
  readingTime: '6 min',
  category: 'Wellbeing programmes',
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
    { type: 'paragraph', text: 'When attendance at a wellbeing programme starts sliding, the instinct is to assume people have lost interest. In my experience that is rarely the real reason. It is almost always friction: the slot keeps moving so it never becomes a habit, the format only suits some of the team, or nobody can tell whether joining is actually fine or something to be quietly missed for real work. Fix the friction and attendance usually recovers on its own, without a relaunch or a new incentive.' },
    { type: 'heading', text: 'Why attendance quietly drops off' },
    { type: 'paragraph', text: 'A programme rarely collapses in one obvious moment. It fades a little each week, and by the time someone notices, it can feel like a bigger problem than it is. A few patterns I see again and again with HR and people leads:' },
    { type: 'list', items: [
      '**The slot keeps moving.** A session at 10am one week and 3pm the next never becomes a habit, because people have to actively remember it instead of it simply being there in the calendar.',
      '**One format is asked to suit everyone.** Some people want quiet and still. Others want something more physical. A single fixed format quietly excludes whoever it does not suit, and they stop coming rather than say so.',
      '**Nobody can tell if it is really optional.** If a manager never joins and the slot sits next to back-to-back meetings, people read the room correctly: real work comes first, and the session is the thing that slips.',
      '**Missing once feels like missing out for good.** Without a recording, one clash with a client call can be the last session someone ever joins.',
    ] },
    { type: 'callout', text: 'Falling attendance is data, not a verdict. It is usually telling you exactly where the friction sits, if you look at the pattern rather than the headline number.' },
    { type: 'heading', text: 'Fix the format before you fix the marketing' },
    { type: 'paragraph', text: 'The natural reaction to low attendance is to promote the programme harder: another reminder email, a poster in the team channel, a nudge from HR. That rarely works on its own, because it pushes people towards a session that still has the friction baked in. It is worth fixing the format first.' },
    { type: 'paragraph', text: 'A few changes make the biggest difference in practice. Camera optional removes the single most common reason people hesitate to join a live call. A recording of every session means a missed live slot is a delay, not a missed week. And offering a genuine choice of class type, rather than one format for the whole team, lets people opt into what actually suits them instead of quietly opting out of what does not. In [The Weekly Reset](/services/team-wellness), that choice sits across three separate class types: a meditation class for a quiet, guided reset, a breathing class for something practical people can reuse in their own day, and a chair yoga class for gentle movement done entirely from a desk chair. A team can pick one, alternate between them, or combine them over a month, rather than being handed a single format and hoping it lands.' },
    { type: 'heading', text: 'Make the habit easier to keep than to skip' },
    { type: 'paragraph', text: 'Consistency does more for attendance than almost anything else. A session at the same time, on the same day, with the same coach each week, becomes a fixture people plan around rather than a thing they have to remember. Move it around to dodge every clash and it never earns that trust, because people learn not to bother checking whether it is on.' },
    { type: 'list', items: [
      'Fix the day and time and keep it fixed for at least a few weeks before touching it, even if the first few sessions feel quiet.',
      'Have someone senior visibly join now and then. It does more to signal that the session is genuinely fine to attend than any amount of written encouragement.',
      'Keep the invite standing rather than re-sending a fresh one each week. A recurring calendar hold is easier to say yes to than a new decision every time.',
    ] },
    { type: 'heading', text: 'What to actually track' },
    { type: 'paragraph', text: 'Resist the urge to build a dashboard for this. Attendance over several weeks is the signal that matters, because people only keep choosing to show up to something that is doing them some good. Look at the trend rather than any single week. A dip during a busy sprint is normal and tells you little on its own. A slow climb as the new slot and format settle in is what you are hoping to see.' },
    { type: 'paragraph', text: 'A short, optional pulse check every few weeks adds useful context without turning the programme into another thing people have to complete. I report attendance and a short wellbeing check alongside every session I run, so a team lead can see the trend without having to chase it themselves.' },
    { type: 'cta', text: 'If attendance has been sliding, seeing the format in action is often the fastest way to tell what needs to change. Book a demo session and I will run a live class with your team so you can watch how people actually respond.', ctaHref: '/demo', ctaLabel: 'Book a demo session' },
    { type: 'callout', text: 'My [remote work burnout guide](/guides/remote-work-burnout) sets out the underlying pattern, if you want the cause rather than the symptom.' },
    { type: 'faq', faqItems: [
      { q: 'Why does attendance at a wellbeing programme drop over time?', a: 'Usually friction rather than lost interest: an inconsistent time slot, a single format that does not suit the whole team, or no visible sign that joining is genuinely fine rather than something to skip for real work. Fixing that friction tends to matter more than promoting the programme harder.' },
      { q: 'Does making a session optional or camera-off hurt attendance?', a: 'No, the opposite in my experience. Camera optional removes one of the biggest reasons people hesitate to join a live call, and it does not stop anyone from taking part fully.' },
      { q: 'How often should a team wellbeing session run to build a habit?', a: 'Weekly, at a fixed time, tends to work best. A session that moves around never becomes a habit because people have to actively remember it rather than it simply being there in the calendar.' },
      { q: 'What should I actually measure if attendance is falling?', a: 'Attendance over several weeks, watched as a trend rather than a single number, plus a short optional pulse check every few weeks. Heavier measurement rarely adds much and can become another chore for the team.' },
    ] },
  ],
};

export default post;
