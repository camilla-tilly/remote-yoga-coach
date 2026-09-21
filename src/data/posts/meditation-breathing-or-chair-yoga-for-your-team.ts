import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  slug: 'meditation-breathing-or-chair-yoga-for-your-team',
  title: 'Meditation, breathing or chair yoga: which class should your team book?',
  metaDescription:
    'Meditation, breathing and chair yoga are three separate class types, not one blended session. Here is how I help HR and people leaders pick the right one, or mix all three.',
  publishDate: '2026-08-19',
  readingTime: '6 min',
  category: 'Meditation and breathing',
  excerpt:
    'I run three separate class types: meditation, breathing and chair yoga. Which one to book first is a fair question. Here is how to decide, and why alternating between all three works well.',
  language: 'en',
  relatedServiceHref: '/services/team-wellness',
  relatedServiceLabel: 'See how a team session works',
  tableOfContents: true,
  faqSchema: true,
  relatedPosts: [
    { slug: 'corporate-mindfulness-sessions-what-to-expect', label: 'Corporate mindfulness sessions' },
    { slug: 'run-wellbeing-session-over-teams', label: 'How to run a wellbeing session over Teams' },
    { slug: 'office-yoga-for-remote-teams', label: 'Office yoga for remote and hybrid teams' },
  ],
  content: [
    { type: 'paragraph', text: 'Short answer: there is no single right choice. Meditation, breathing and chair yoga are three separate class types, not one blended session. Start with whichever feels closest to what your team already struggles with, then either stick with it or alternate between the three from month to month.' },
    { type: 'heading', text: 'The three class types, in plain terms' },
    { type: 'paragraph', text: 'Treat these as separate options rather than three names for the same thing. Each session is built around one of them.' },
    { type: 'list', items: [
      '**Meditation.** A guided, seated session for settling the mind, working with attention, a body scan, or a simple point of focus. No movement involved.',
      '**Breathing.** A guided session built entirely around breath technique, useful for teams dealing with pressure, deadlines, or back-to-back calls.',
      '**Chair yoga.** Gentle, seated movement from an ordinary chair, working through the neck, shoulders, back and hips that stiffen after hours at a screen.',
    ] },
    { type: 'callout', text: 'None of the three requires a mat or a change of clothes. All three run live on Teams, with me coaching every week.' },
    { type: 'heading', text: 'How I help a team choose' },
    { type: 'paragraph', text: 'On a first call, I ask two or three questions before recommending anything, because the right starting point depends on what is going on in the team, not on what sounds appealing on paper.' },
    { type: 'subheading', text: 'If the team is physically stiff and desk-bound' },
    { type: 'paragraph', text: 'Chair yoga tends to be the better opener. Teams that sit most of the day, especially in back-to-back calls, notice the physical difference fastest, and that early win makes people more likely to keep showing up.' },
    { type: 'subheading', text: 'If the team is under a lot of pressure or deadline stress' },
    { type: 'paragraph', text: 'Breathing is usually the more direct fit. It is quick to learn, easy to use outside the session, and gives people something concrete to reach for the next time a deadline or a difficult call spikes their stress.' },
    { type: 'subheading', text: 'If the team is scattered, distracted, or struggling to switch off' },
    { type: 'paragraph', text: 'Meditation suits teams that are mentally overloaded rather than physically tense, particularly distributed teams juggling time zones and a constant stream of notifications. Its effects are the slowest of the three to become noticeable. My [mindfulness at work guide](/guides/mindfulness-at-work) covers what makes a practice like this stick past the first fortnight.' },
    { type: 'heading', text: 'Why mixing all three often works' },
    { type: 'paragraph', text: 'Few teams need to stay with only one class type. You might run chair yoga most weeks, add a breathing session in a stretched month, or bring in meditation once the habit has settled. Because the format stays the same across all three (live, seated, recorded on request), switching does not disrupt the routine.' },
    { type: 'paragraph', text: 'There is no need to lock in one from the start. A first month trying all three is a perfectly good approach, and lets a team settle on the one people actually look forward to.' },
    { type: 'heading', text: 'What stays the same across all three' },
    { type: 'paragraph', text: 'Whichever class type a team chooses, the surrounding structure does not change:' },
    { type: 'list', items: [
      '**Same coach, every week.** You get me, live, whichever class type is on the calendar.',
      '**Nothing to prepare.** You do not need a mat or a change of clothes, and nobody has to perform.',
      '**Recorded on request.** If you want it, anyone who misses the live slot can catch up later.',
      '**Flat monthly subscription, priced per team.** It is not charged per person or by class type.',
    ] },
    { type: 'paragraph', text: 'For the exact pricing, see the [pricing page](/pricing), since it depends on team size.' },
    { type: 'heading', text: 'How to decide for your own team' },
    { type: 'paragraph', text: 'If you are still unsure, think about which problem is loudest right now (physical stiffness, mental overload, or acute stress) and start there. It is easy to change from one month to the next.' },
    { type: 'cta', text: 'Not sure which class type fits your team? Book a pilot session and I will run a short live session so you can see how it feels before deciding.', ctaHref: '/demo', ctaLabel: 'Book a pilot session' },
    { type: 'faq', faqItems: [
      { q: 'Are meditation, breathing and chair yoga the same session?', a: 'No. They are three separate class types: guided meditation focused on attention and calm, breathing built around breath technique, and chair yoga, which is gentle seated movement from an ordinary chair. A team can pick one, alternate, or combine all three.' },
      { q: 'Which class type should we start with?', a: 'It depends on what the team needs most right now. Physically stiff, desk-bound teams often start with chair yoga. Teams under heavy deadline pressure tend to get more from breathing. Distributed teams struggling to switch off often prefer meditation. None of these are permanent choices.' },
      { q: 'Can we switch between class types later?', a: 'Yes. Because the format (live, seated, recorded on request) is the same for all three, switching does not disrupt the routine. It just changes the focus of that week’s session.' },
      { q: 'Do we need any equipment for any of the three?', a: 'No. All three run seated over Teams, with no mat or floor space needed. Chair yoga uses an ordinary desk chair for support, and meditation and breathing need nothing more than a quiet-ish spot to sit.' },
    ] },
  ],
};

export default post;
