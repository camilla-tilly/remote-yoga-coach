import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  slug: 'how-to-measure-wellbeing-programme-roi',
  title: 'How to measure the ROI of a team wellbeing programme',
  metaDescription:
    'A practical way to measure whether a team wellbeing programme is working, using attendance and a wellbeing check you can actually trust, without inventing a return figure.',
  publishDate: '2026-08-12',
  readingTime: '6 min',
  category: 'Wellbeing programmes',
  excerpt:
    'You can honestly track two things about a wellbeing programme: attendance and a simple wellbeing check. Here is how to use those two numbers to build a business case, instead of reaching for a return figure you cannot actually stand behind.',
  language: 'en',
  relatedServiceHref: '/services/team-wellness',
  relatedServiceLabel: 'The Weekly Reset',
  tableOfContents: true,
  faqSchema: true,
  relatedPosts: [
    { slug: 'calm-headspace-vs-live-sessions', label: 'Calm and Headspace for Business vs live sessions' },
    { slug: 'how-to-start-a-corporate-wellbeing-programme', label: 'How to start a corporate wellbeing programme' },
    { slug: 'team-wellbeing-subscription-vs-workshops', label: 'Team wellbeing subscription vs one-off workshops' },
  ],
  content: [
    { type: 'paragraph', text: 'If you are the person who has to justify a wellbeing budget at renewal time, here is the honest version. You can measure two things well: attendance over time, and a short wellbeing check people fill in before and after a run of sessions. What you cannot honestly do, unless you have run a proper controlled study inside your own organisation, is hand finance a precise return figure and expect it to survive a follow-up question. Below is how to track what you can actually stand behind, and turn that into a business case leadership will believe.' },
    { type: 'heading', text: 'Why "ROI" is the wrong word to start with' },
    { type: 'paragraph', text: 'A lot of wellbeing content leans on a big multiplier statistic, a return of so many pounds for every pound spent, borrowed from a report nobody in the room has read. It sounds persuasive for about a minute, then someone asks where the number came from, and it cannot be traced back to your team, your budget, or your people. That is the moment the whole case gets weaker, not stronger.' },
    { type: 'paragraph', text: 'A more durable approach is to stop chasing a single external number and instead track two internal proxies you fully control: participation and self-reported wellbeing. Neither one claims to be a financial return. Both are honest, both are yours, and both hold up when someone asks a follow-up question.' },
    { type: 'heading', text: 'The two numbers you can actually track' },
    { type: 'subheading', text: 'Attendance, your leading indicator' },
    { type: 'paragraph', text: 'Attendance tells you whether the programme is landing before anything else does. Nobody keeps showing up to something that does nothing for them, so a steady or growing attendance trend is itself evidence, not a proxy for one. Watch the trend over several weeks rather than any single session. A dip during a heavy sprint is normal. A slow climb as the habit settles is the pattern worth reporting.' },
    { type: 'subheading', text: 'The wellbeing check, your lagging indicator' },
    { type: 'paragraph', text: 'The second number is a short, optional pulse question people answer before the programme starts and again after a few weeks of it running. It does not need to be elaborate. A single question people can answer in seconds, asked consistently, tells you far more than an occasional long survey people abandon halfway through. This is what I report to teams on the subscription: attendance alongside a short wellbeing check, so the trend is visible rather than assumed.' },
    { type: 'heading', text: 'Turning attendance and the wellbeing check into a business case' },
    { type: 'paragraph', text: 'Once you have a few weeks of both numbers, building the case for leadership is mostly a matter of presenting them plainly.' },
    { type: 'list', items: [
      'Start with a baseline. Take the wellbeing check reading before the first session, so you have a genuine before and after rather than a single snapshot.',
      'Report the attendance trend, not one week in isolation. A single low-attendance week during a product launch means nothing on its own.',
      'Pair the two numbers together. Rising attendance alongside a steady or improving wellbeing check is a much stronger story than either number alone.',
      'Use internal context you already hold, such as how sick days or turnover in the pilot team compare to the rest of the organisation, rather than an external multiplier you cannot verify.',
      'Keep the reporting cadence light. A short update every few weeks is more credible, and more sustainable for you, than a single heavy report at the end of the year.',
    ] },
    { type: 'paragraph', text: 'This is exactly the shape of reporting built into [The Weekly Reset](/services/team-wellness): attendance and a short wellbeing check, delivered alongside the sessions rather than chased down separately, so you always have current numbers ready for a budget conversation.' },
    { type: 'heading', text: 'What to avoid when you present the numbers' },
    { type: 'paragraph', text: 'A few habits quietly undermine an otherwise solid case.' },
    { type: 'list', items: [
      'Judging the programme from one session. A single class, good or bad, tells you almost nothing. The trend across several weeks is the actual signal.',
      'Switching the format every week. If you are piloting to build a case, keep the format steady long enough to read a trend. Whether the team chooses the meditation class, the breathing class or the chair yoga class, or alternates between the three, changing it constantly makes the attendance and wellbeing numbers harder to compare week to week. Pick one to start with, or fix a simple pattern, and hold it for the length of the pilot.',
      'Quoting a headline cost figure out of context. Costs and structure vary by team size and commitment, so point leadership to a real, current source rather than a number that might already be out of date. My [pricing](/pricing) page is the place I keep that current.',
      'Treating the wellbeing check as a test people can fail. Frame it as a pulse, not an evaluation, and keep it anonymous where you can, or people will simply tell you what they think you want to hear.',
    ] },
    { type: 'paragraph', text: 'None of this requires expensive tooling. A simple spreadsheet with attendance per week and the wellbeing check readings is enough to tell an honest story, and an honest story is what actually survives scrutiny at renewal time.' },
    { type: 'cta', text: 'Want real numbers before your next budget conversation? A four-week pilot comes with attendance and wellbeing check reporting built in, so you have evidence, not a guess, before you commit.', ctaHref: '/demo', ctaLabel: 'Book a pilot' },
    { type: 'callout', text: 'If you are building the business case, my [guide to the cost of employee burnout](/guides/cost-of-employee-burnout) sets out what the problem costs before you spend anything fixing it.' },
    { type: 'faq', faqItems: [
      { q: 'What is the ROI of a workplace wellbeing programme?', a: 'There is no single trustworthy figure that applies to every organisation, and any number that cannot be traced back to your own team should be treated with caution. A more honest approach is to track attendance and a short wellbeing check over several weeks and let those internal numbers make the case.' },
      { q: 'How do you measure wellbeing programme success without hard financial data?', a: 'Use two proxies you fully control: the attendance trend, which shows whether people keep choosing to show up, and a short before and after wellbeing check. Together they give a credible picture without requiring a financial study.' },
      { q: 'What should I show leadership to justify a wellbeing budget?', a: 'A baseline wellbeing check reading, the attendance trend over several weeks, and any relevant internal context such as sick days or turnover in the pilot team. Keep the reporting light and consistent rather than a single large report.' },
      { q: 'How long before I have enough data to report a trend?', a: 'A pilot of four to six weeks is usually enough to see whether attendance is holding or growing and whether the wellbeing check is moving in the right direction. Shorter than that, and a single quiet week can distort the picture.' },
    ] },
  ],
};

export default post;
