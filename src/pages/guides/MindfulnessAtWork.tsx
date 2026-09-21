import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { GuideProse, GuideList, GuideTOC, PullQuote, SpokeCard, GuideFAQ } from '@/components/GuideLayout';
import { PageHero, PageSection, ClosingCTA, PillLink } from '@/components/PageKit';

const faqItems: Array<[string, string]> = [
  [
    'What is mindfulness at work?',
    'Mindfulness at work means paying attention to what you are doing while you are doing it, on purpose and without judging yourself. In practice, that means doing one task at a time and taking a few conscious breaths between meetings.',
  ],
  [
    'Does meditation at work actually do anything?',
    'Yes. A review of 28 studies found a single session of meditation, breathing or yoga reduced physiological markers of stress in 71 percent of measures. A short weekly habit does much more than one workshop a year.',
  ],
  [
    'How long does a workplace meditation session need to be?',
    'It can be short. Five focused minutes resets attention between meetings. A live team session of 15 to 30 minutes fits a lunch break or a meeting slot.',
  ],
  [
    'Do people need any experience to join a team mindfulness session?',
    'No. A good session assumes everyone is a beginner. Cameras can stay off, nobody speaks unless they want to, and there is nothing to get right.',
  ],
  [
    'What is the difference between mindfulness and meditation?',
    'Mindfulness is the skill of noticing where your attention is. Meditation is the practice you use to train that skill. You can be mindful while writing an email, and meditating regularly makes that easier.',
  ],
  [
    'Can mindfulness sessions work over Teams or Zoom?',
    'Yes, very well. Nobody travels or books a room, remote and hybrid colleagues join as equals, cameras can stay off, and recordings reach other time zones.',
  ],
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Mindfulness at work: the complete guide for remote and hybrid teams',
      description:
        'What mindfulness at work actually means, the evidence behind meditation at work, exercises for individuals and teams, and how to build a habit that survives a busy calendar.',
      author: { '@type': 'Person', name: 'Camilla', jobTitle: 'Corporate Wellness Coach' },
      publisher: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
      mainEntityOfPage: 'https://remoteyogacoach.com/guides/mindfulness-at-work',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://remoteyogacoach.com/' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://remoteyogacoach.com/guides/mindfulness-at-work' },
        { '@type': 'ListItem', position: 3, name: 'Mindfulness at work' },
      ],
    },
  ],
};

const tocItems = [
  { href: '#what-it-is', label: 'What mindfulness at work actually means' },
  { href: '#evidence', label: 'What the evidence says' },
  { href: '#meditation-at-work', label: 'Meditation at work: five ways to start' },
  { href: '#focus', label: 'Mindfulness for focus at work' },
  { href: '#team-exercises', label: 'Mindfulness exercises for teams' },
  { href: '#why-apps-fail', label: 'Why a mindfulness app on its own rarely becomes a habit' },
  { href: '#remote-teams', label: 'Bringing mindfulness to a remote team' },
  { href: '#faq', label: 'Frequently asked questions' },
];

const MindfulnessAtWork = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Mindfulness at Work: Guide for Remote and Hybrid Teams | Remote Yoga Coach"
        description="What mindfulness at work really means, the evidence behind meditation at work, exercises for individuals and teams, and how to build a habit your team keeps."
        canonical="https://remoteyogacoach.com/guides/mindfulness-at-work"
        ogType="article"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        <PageHero
          eyebrow="Guide"
          title="Mindfulness at work: the complete guide for remote and hybrid teams"
          aside={
            <div className="[&>nav]:mt-0 [&>nav]:bg-transparent">
              <GuideTOC items={tocItems} />
            </div>
          }
        >
          <p>
            Mindfulness is often associated with retreats, beanbags and spare time your team does not have. It is
            actually a skill that can be trained, and the evidence shows it lowers stress and improves focus when it is
            practised as a regular habit, much more than through an app nobody opens.
          </p>
        </PageHero>

        <PageSection id="what-it-is" heading="What mindfulness at work actually means">
          <GuideProse>
            <p>
              Mindfulness is noticing where your attention is, and choosing where to put it. At work, that means
              reading the report while you read the report, or listening to a colleague without drafting your reply.
            </p>
            <p>
              The opposite is having eight tabs open, half-listening in a meeting, and feeling busy all day without
              really concentrating on anything.
            </p>
            <p>
              You can stay busy and ambitious. Practising mindfulness in short, regular sessions helps you choose where
              your attention goes.
            </p>
          </GuideProse>
        </PageSection>

        <PageSection id="evidence" heading="What the evidence says">
          <GuideProse>
            <p>The research findings are consistent across studies.</p>
          </GuideProse>
          <GuideList
            items={[
              [
                'Stress drops after a single session',
                'A review of 28 studies found one session of yoga, meditation or breathing practice reduced stress reactivity in 71 percent of physiological measures and 65 percent of psychological ones.',
              ],
              [
                'Breathing practices hold up in meta-analysis',
                'Breathwork meta-analyses show significant drops in stress, anxiety and low mood. Slow breathing activates the parasympathetic nervous system, the part that slows the body down.',
              ],
              [
                'Attention is trainable',
                'Regular short practice is associated with measurable improvements in sustained attention and working memory, which constant switching between tasks wears down.',
              ],
              [
                'Regular practice matters more than session length',
                'Short, regular practice works better than occasional long sessions. A weekly session the team keeps going to does more than an ambitious programme that people stop attending by week three.',
              ],
            ]}
          />
          <GuideProse>
            <p>
              Mindfulness will not fix an unmanageable workload, a toxic manager or chronic understaffing. Those
              problems need changes to how the work is organised. My guide to{' '}
              <Link to="/guides/remote-work-burnout" className="text-clay underline underline-offset-4 hover:text-clayDark">
                remote work burnout
              </Link>{' '}
              covers that side.
            </p>
          </GuideProse>
        </PageSection>

        <PageSection id="meditation-at-work" heading="Meditation at work: five ways to start">
          <GuideProse>
            <p>Pick one and use it for a week before adding another.</p>
          </GuideProse>
          <GuideList
            items={[
              [
                'The one-minute arrival',
                'Before your next meeting, sit back, soften your gaze and take six slow breaths. It helps you leave the last meeting behind before the next one starts.',
              ],
              [
                'Box breathing before anything hard',
                'Breathe in for four counts, hold for four, out for four, hold for four. Four rounds takes just over a minute and steadies you before a difficult conversation.',
              ],
              [
                'The five-minute desk meditation',
                'Set a timer for five minutes and rest your attention on the breath. When the mind wanders, bring it back without commentary. Bringing it back is the part that trains your attention.',
              ],
              [
                'One mindful transition per day',
                'Use a recurring moment, like the kettle boiling, as a cue for three conscious breaths. Linking the practice to something that already happens makes it easier to keep up in a busy week.',
              ],
              [
                'The shutdown ritual',
                'At the end of the day, write tomorrow’s first task on a note, close the laptop and take five slow breaths. It marks the end of the working day, the way the commute used to.',
              ],
            ]}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <SpokeCard
              to="/blog/how-to-meditate-at-work"
              label="How to meditate at work: a 5-minute desk meditation"
              description="The full desk meditation, step by step, with your camera off. You do not need any experience."
            />
            <SpokeCard
              to="/blog/breathing-exercises-for-work-stress"
              label="Breathing exercises for work stress"
              description="Four techniques for the middle of a working day, including before your next call."
            />
          </div>
        </PageSection>

        <PageSection id="focus" heading="Mindfulness for focus at work">
          <GuideProse>
            <p>
              Most focus advice is about blocking things: websites, notifications, meeting-free mornings. Mindfulness
              trains your attention directly, so it still helps when notifications get through.
            </p>
            <p>
              Each time you bring a wandering mind back to the breath, you practise what focused work needs: noticing
              the drift and returning to the task. Five minutes a day makes the workday version easier.
            </p>
            <p>
              Three habits that help: start deep work with a minute of breathing; single-task the first 25 minutes
              after lunch; and when you re-read the same paragraph, stand, breathe and reset.
            </p>
          </GuideProse>
        </PageSection>

        <PageSection id="team-exercises" heading="Mindfulness exercises for teams">
          <GuideProse>
            <p>
              When a team practises together, taking a pause becomes a normal part of the day. These exercises work on
              a video call, and nobody has to share their feelings or sit on the floor.
            </p>
          </GuideProse>
          <GuideList
            items={[
              [
                'Three breaths to open a meeting',
                'The chair invites everyone to take three slow breaths before the agenda starts. It takes about twenty seconds and helps people settle into the meeting.',
              ],
              [
                'The mid-meeting reset',
                'In any meeting over an hour, schedule a two-minute pause at the halfway mark to stand, stretch and breathe without talking.',
              ],
              [
                'A weekly live session',
                'Fifteen to thirty minutes of guided breathing, gentle movement and a short meditation, same time and same person every week.',
              ],
              [
                'One-line check-ins',
                'Open the weekly stand-up with one word from each person about how they are arriving. It is not meant as therapy, it simply tells the team how people are doing.',
              ],
              [
                'Walking one-to-ones',
                'Take the recurring one-to-one on foot, phones in pockets, no video. Without screens, the conversation is often more honest.',
              ],
            ]}
          />
        </PageSection>

        <PageSection id="why-apps-fail" heading="Why a mindfulness app on its own rarely becomes a habit">
          <GuideProse>
            <p>
              Most companies have already tried mindfulness once, by buying app licences. Within a couple of months, a
              small single-digit percentage of the team still opens the app. Gym memberships settle around 12 percent
              uptake, employee assistance programmes at 3 to 5 percent.
            </p>
            <p>
              The apps are often good libraries of recordings, but they rely on the busiest and most tired people
              starting a practice on their own, when their willpower is lowest.
            </p>
            <PullQuote>A live session that is already in the calendar takes away that hardest step.</PullQuote>
            <p>People click a link and someone else leads the session.</p>
          </GuideProse>
          <div className="mt-8">
            <Link
              to="/blog/do-workplace-wellness-apps-work"
              className="inline-flex items-center gap-2 text-clay font-semibold text-sm uppercase tracking-wider hover:text-clayDark transition-colors"
            >
              Read: do workplace wellness apps actually work? →
            </Link>
          </div>
        </PageSection>

        <PageSection id="remote-teams" heading="Bringing mindfulness to a remote team">
          <GuideProse>
            <p>
              Live mindfulness works especially well for remote teams: there is no room to book, every location joins
              as an equal, and recordings cover other time zones.
            </p>
            <p>Four choices decide whether a programme lasts:</p>
          </GuideProse>
          <GuideList
            items={[
              [
                'Make it recurring',
                'A single wellbeing day is soon forgotten. A weekly session at a protected time builds the habit.',
              ],
              [
                'Make it live',
                'When the same person leads it every week, people feel a gentle sense of commitment that an app does not create.',
              ],
              [
                'Keep it easy to join',
                'Sessions are done sitting in a chair and there is nothing to get right. If a session starts to feel demanding, the people who need it most stop coming.',
              ],
              [
                'Measure it',
                'Track attendance and how many people come back. If it works, you can show the person who holds the budget, and if it does not, you will know.',
              ],
            ]}
          />
          <GuideProse>
            <p>
              That is how my{' '}
              <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                weekly classes
              </Link>{' '}
              are built: live 15 to 30 minute sessions of breathing, meditation and chair yoga on Teams, the same
              coach every week. Pricing is public on the{' '}
              <Link to="/pricing" className="text-clay underline underline-offset-4 hover:text-clayDark">
                pricing page
              </Link>
              , and every engagement starts with a single pilot session.
            </p>
          </GuideProse>
        </PageSection>

        <PageSection id="faq" heading="Frequently asked questions">
          <GuideFAQ items={faqItems} />
        </PageSection>

        <PageSection heading="Other guides">
          <div className="grid gap-4">
            <SpokeCard
              to="/guides/remote-work-burnout"
              label="Remote work burnout: the guide for distributed teams"
              description="Why remote teams burn out without anyone noticing, and how to prevent it."
            />
            <SpokeCard
              to="/guides/desk-yoga"
              label="Desk yoga and chair yoga at work"
              description="Stretches and short routines for people who sit all day."
            />
          </div>
        </PageSection>

        <ClosingCTA
          heading="Give your team a weekly mindfulness habit"
          actions={
            <>
              <PillLink to="/demo" variant="light">Book a pilot</PillLink>
              <PillLink to="/pricing" variant="lightOutline">See pricing</PillLink>
            </>
          }
        >
          <p>Start with one pilot session of live breathing, meditation and chair yoga on Teams.</p>
        </ClosingCTA>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MindfulnessAtWork;
