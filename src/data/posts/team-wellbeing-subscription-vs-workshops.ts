import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  slug: 'team-wellbeing-subscription-vs-workshops',
  title: 'Team wellbeing subscription vs one-off workshops: which actually works?',
  metaDescription:
    'One-off wellbeing workshops feel efficient but fade fast. Here is how a team wellbeing subscription compares on results and cost, and when a one-off still makes sense.',
  publishDate: '2026-07-04',
  readingTime: '6 min',
  category: 'Cost and proof',
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
    { type: 'paragraph', text: 'When a budget opens up for team wellbeing, the instinct is to book a workshop: a clean line item, a nice afternoon, done. But that afternoon often fades within a week. Would a subscription actually change how the team feels?' },
    { type: 'heading', text: 'The appeal of the one-off workshop' },
    { type: 'paragraph', text: 'One-off workshops are easy to approve, easy to schedule, and they create a visible moment: a wellbeing day, a lunch-and-learn, a treat. For a specific occasion, a team offsite, a stressful launch just gone, a mental health awareness week, they can be exactly right.' },
    { type: 'heading', text: 'Why one-offs fade' },
    { type: 'paragraph', text: 'Wellbeing behaves like fitness. Nobody expects one great gym session to change their health, yet we expect one great workshop to change a team. The good feeling is real, and it is gone within days because nothing reinforces it. The stress the team was under on Monday is waiting for them the following Monday.' },
    { type: 'callout', text: 'A one-off workshop changes how a team feels for an afternoon. A weekly habit changes how a team feels in week six. Those are different products, even when the session looks identical.' },
    { type: 'heading', text: 'What a subscription changes' },
    { type: 'paragraph', text: 'A subscription is not just more workshops. It changes the mechanism:' },
    { type: 'list', items: [
      '**A protected slot.** Same time each week, so it becomes a habit rather than something to organise.',
      '**The same coach.** Familiarity builds the gentle accountability and trust that a rotating cast of facilitators cannot.',
      '**A programme, not a sampler.** Sessions build on each other instead of being disconnected pilots.',
      '**Measurement over time.** You can track attendance and wellbeing across weeks, not guess from a single feedback form.',
    ] },
    { type: 'paragraph', text: 'That is the model behind my [wellbeing subscription for remote teams](/services/corporate-wellbeing-for-remote-teams): a recurring weekly session with the same coach.' },
    { type: 'heading', text: 'The cost comparison' },
    { type: 'paragraph', text: 'On a per-session sticker price, a one-off can look cheaper. Per unit of actual change, it rarely is, because most of what you pay for evaporates. The rough trade-off:' },
    { type: 'table', tableHead: ['', 'One-off workshop', 'Weekly subscription'], tableRows: [
      ['Cost shape', 'Higher per session', 'Lower per session, priced per team'],
      ['Effect', 'A good afternoon', 'A habit that compounds'],
      ['Measurable over time', 'No', 'Yes'],
      ['Best for', 'A specific occasion', 'Ongoing team wellbeing'],
    ] },
    { type: 'paragraph', text: 'Because a subscription is priced per team rather than per person, the cost per employee falls as the team grows, the opposite of per-seat app licensing. For the wider picture, see [how much corporate wellbeing costs](/blog/how-much-does-corporate-yoga-cost). The [cost of employee burnout guide](/guides/cost-of-employee-burnout) helps if you need to justify the spend.' },
    { type: 'heading', text: 'When a one-off still makes sense' },
    { type: 'paragraph', text: 'Workshops are not bad. For a one-time occasion, like a team day or an awareness week, a single well-run session is lovely. Just do not expect it to shift ongoing stress. That needs rhythm. A sensible path is to run a [pilot session](/demo) and convert it into a subscription if it lands.' },
    { type: 'cta', text: 'Want to test the habit before committing? A single pilot session lets your team try it.', ctaHref: '/demo', ctaLabel: 'Book a pilot' },
    { type: 'faq', faqItems: [
      { q: 'Is a wellbeing subscription better than a one-off workshop?', a: 'For ongoing team wellbeing, yes, because results come from the weekly rhythm, not any single session. For a specific one-time occasion, a one-off workshop can be the right call.' },
      { q: 'How much does a team wellbeing subscription cost?', a: 'It is priced as a flat monthly fee by session frequency rather than per person, so the cost per employee stays low as you grow. Every engagement starts with a single pilot session credited to your first month.' },
      { q: 'How long before a subscription shows results?', a: 'Attendance patterns are visible within the first few weeks; the wellbeing effect builds over a couple of months as the habit forms.' },
      { q: 'Can we try it before subscribing?', a: 'Yes. A single paid pilot session lets your team try it first, and it is credited to your first month if you continue.' },
    ] },
  ],
};

export default post;
