import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  slug: 'team-wellbeing-subscription-vs-workshops',
  title: 'Team wellbeing subscription vs one-off workshops: which actually works?',
  metaDescription:
    'One-off wellbeing workshops feel efficient but fade fast. Here is how a team wellbeing subscription compares on results and cost, and when a one-off still makes sense.',
  publishDate: '2026-07-04',
  readingTime: '6 min',
  category: 'Programmes',
  excerpt:
    'A one-off wellbeing workshop is a nice afternoon. A subscription is a habit. Here is the honest comparison on results and cost, and when each is the right call.',
  language: 'en',
  relatedServiceHref: '/services/corporate-wellbeing-for-remote-teams',
  relatedServiceLabel: 'See the team wellbeing subscription',
  tableOfContents: true,
  faqSchema: true,
  relatedPosts: [
    { slug: 'corporate-wellness-ideas-remote-teams', label: 'Corporate wellness ideas that actually work' },
    { slug: 'how-much-does-corporate-yoga-cost', label: 'How much does corporate yoga cost?' },
    { slug: 'do-workplace-wellness-apps-work', label: 'Do workplace wellness apps actually work?' },
  ],
  content: [
    { type: 'paragraph', text: 'When a budget opens up for team wellbeing, the instinct is usually to book a workshop. It is a clean line item, a nice afternoon, and it is done. But a growing number of people leaders have watched that afternoon fade by the following week, and started asking whether a subscription would actually change how the team feels. Here is the honest comparison.' },
    { type: 'heading', text: 'The appeal of the one-off workshop' },
    { type: 'paragraph', text: 'One-off workshops are genuinely appealing. They are easy to approve, easy to schedule, and they create a visible moment, a wellbeing day, a lunch-and-learn, a treat. For a specific occasion, a team offsite, a stressful launch just gone, a mental health awareness week, they can be exactly right.' },
    { type: 'heading', text: 'Why one-offs fade' },
    { type: 'paragraph', text: 'The problem is that wellbeing behaves like fitness. Nobody expects one great gym session to change their health. Yet we quietly expect one great wellbeing workshop to change a team, and it never does. The good feeling is real and it is gone within days, because nothing reinforces it. The stress the team was under on Monday is waiting for them the following Monday.' },
    { type: 'callout', text: 'A one-off workshop changes how a team feels for an afternoon. A weekly habit changes how a team feels in week six. Those are different products, even when the session itself looks identical.' },
    { type: 'heading', text: 'What a subscription changes' },
    { type: 'paragraph', text: 'A subscription is not just more workshops. It changes the mechanism:' },
    { type: 'list', items: [
      '**A protected slot.** Same time each week, in the calendar, so it becomes a habit rather than a thing someone has to organise each time.',
      '**The same coach.** Familiarity builds the gentle accountability and trust that a rotating cast of one-off facilitators cannot.',
      '**A programme, not a sampler.** Sessions build on each other instead of being disconnected tasters.',
      '**Measurement over time.** You can actually see attendance and wellbeing move across weeks, not guess from a single feedback form.',
    ] },
    { type: 'paragraph', text: 'That is the model behind our [wellbeing subscription for remote teams](/services/corporate-wellbeing-for-remote-teams): a recurring weekly session, the same coach, with reporting you can take to leadership.' },
    { type: 'heading', text: 'The cost comparison' },
    { type: 'paragraph', text: 'On a per-session sticker price, a one-off can look cheaper. Per unit of actual change, it rarely is, because most of what you pay for evaporates. A rough shape of the trade-off:' },
    { type: 'table', tableHead: ['', 'One-off workshop', 'Weekly subscription'], tableRows: [
      ['Cost shape', 'Higher per session', 'Lower per session, priced per team'],
      ['Effect', 'A good afternoon', 'A habit that compounds'],
      ['Measurable over time', 'No', 'Yes'],
      ['Best for', 'A specific occasion', 'Ongoing team wellbeing'],
    ] },
    { type: 'paragraph', text: 'Because a subscription is priced per team rather than per person, the cost per employee also falls as the team grows, the opposite of per-seat app licensing. For the wider pricing picture, see [how much corporate wellbeing costs](/blog/how-much-does-corporate-yoga-cost).' },
    { type: 'heading', text: 'When a one-off still makes sense' },
    { type: 'paragraph', text: 'This is not an argument that workshops are bad. If you have a one-time occasion, a team day, a specific event, an awareness week, a single well-run session is a lovely thing to do. Just do not expect it to move the needle on ongoing stress. For that, you need the rhythm. A sensible path is to run a one-off, see how the team responds, and convert it into a subscription if it lands, which is exactly what a [four-week pilot](/demo) is for.' },
    { type: 'cta', text: 'Want to test the habit before committing to it? A four-week pilot runs a full mini-programme and ends in a one-page report of attendance and wellbeing.', ctaHref: '/demo', ctaLabel: 'Book a pilot' },
    { type: 'faq', faqItems: [
      { q: 'Is a wellbeing subscription better than a one-off workshop?', a: 'For ongoing team wellbeing, yes, because results come from the weekly rhythm, not any single session. For a specific one-time occasion, a one-off workshop can be the right call. Many teams start with a pilot and convert if it lands.' },
      { q: 'How much does a team wellbeing subscription cost?', a: 'It is priced as a flat monthly fee by team size rather than per person, so the cost per employee stays low as you grow. Every engagement starts with a four-week paid pilot credited to your first month.' },
      { q: 'How long before a subscription shows results?', a: 'Attendance patterns are visible within the first few weeks; the wellbeing effect builds over a couple of months as the habit forms. That is why we report attendance and pre and post wellbeing from the start.' },
      { q: 'Can we try it before subscribing?', a: 'Yes. A four-week pilot runs a complete mini-programme so you can see attendance and results with your own team before committing to an ongoing subscription.' },
    ] },
  ],
};

export default post;
