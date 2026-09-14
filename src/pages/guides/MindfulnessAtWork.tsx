import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  GuideEyebrow,
  GuideHeading,
  GuideProse,
  GuideList,
  GuideTOC,
  PullQuote,
  SpokeCard,
  GuideFAQ,
  GuideCTA,
  RelatedGuides,
} from '@/components/GuideLayout';

const faqItems: Array<[string, string]> = [
  [
    'What is mindfulness at work?',
    'Mindfulness at work means paying attention to what you are doing while you are doing it, on purpose and without judging yourself. In practice: one task at a time, and a few conscious breaths between meetings.',
  ],
  [
    'Does meditation at work actually do anything?',
    'Yes. A review of 28 studies found a single session of meditation, breathing or yoga reduced physiological markers of stress in 71 percent of measures. One workshop a year does very little; a short weekly habit does a lot.',
  ],
  [
    'How long does a workplace meditation session need to be?',
    'Shorter than you think. Five focused minutes resets attention between meetings. A live team session of 15 to 30 minutes fits a lunch break or a meeting slot.',
  ],
  [
    'Do people need any experience to join a team mindfulness session?',
    'None at all. A good session assumes everyone is a beginner. Cameras can stay off, nobody speaks unless they want to, and there is nothing to get right.',
  ],
  [
    'What is the difference between mindfulness and meditation?',
    'Mindfulness is the skill: noticing where your attention is. Meditation is the practice session where you train it. You can be mindful while writing an email; you meditate to get better at it.',
  ],
  [
    'Can mindfulness sessions work over Teams or Zoom?',
    'Very well. Nobody travels or books a room, remote and hybrid colleagues join as equals, cameras can stay off, and recordings reach other time zones.',
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
  { href: '#why-apps-fail', label: 'Why the app alone never sticks' },
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
        {/* HERO */}
        <section className="bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="max-w-[820px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideEyebrow>Guide</GuideEyebrow>
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Mindfulness at work: the complete guide for remote and hybrid teams
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed">
              Mindfulness has a marketing problem: beanbags, retreats and spare time your team does not have. Underneath
              is a trainable, evidence-backed skill that lowers stress and sharpens focus, if it runs as a habit
              rather than an app nobody opens.
            </p>
            <GuideTOC items={tocItems} />
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="what-it-is" eyebrow="The basics">What mindfulness at work actually means</GuideHeading>
            <GuideProse>
              <p>
                Mindfulness is noticing where your attention is, and choosing where to put it. At work, that means
                reading the report while you read the report, or listening to a colleague without drafting your reply.
              </p>
              <p>
                The opposite is eight tabs open, a meeting you are half in, and the feeling of being busy all day
                without being anywhere at all.
              </p>
              <p>
                You are allowed to stay busy and ambitious. Mindfulness, trained in small repetitions, just gives you
                back the choice of where your attention goes.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* EVIDENCE */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="evidence" eyebrow="The research">What the evidence says</GuideHeading>
            <GuideProse>
              <p>
                The findings are consistent enough to be boring, which is exactly what you want from evidence.
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'Stress drops after a single session',
                  'A review of 28 studies found one session of yoga, meditation or breathing practice reduced stress reactivity in 71 percent of physiological measures and 65 percent of psychological ones.',
                ],
                [
                  'Breathing practices hold up in meta-analysis',
                  'Breathwork meta-analyses show significant drops in stress, anxiety and low mood. Slow breathing activates the parasympathetic nervous system, the body’s built-in brake.',
                ],
                [
                  'Attention is trainable',
                  'Regular short practice is associated with measurable improvements in sustained attention and working memory, the faculties constant context-switching erodes.',
                ],
                [
                  'The habit matters more than the dose',
                  'Short, regular practice beats occasional long sessions. A weekly rhythm the team keeps outperforms an ambitious programme that fizzles by week three.',
                ],
              ]}
            />
            <GuideProse>
              <p>
                One honest caveat: mindfulness does not fix a broken workload, a toxic manager or chronic
                understaffing. A structural problem needs a structural fix. My guide to{' '}
                <Link to="/guides/remote-work-burnout" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  remote work burnout
                </Link>{' '}
                covers that side.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* MEDITATION AT WORK */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="meditation-at-work" eyebrow="Practice">Meditation at work: five ways to start</GuideHeading>
            <GuideProse>
              <p>
                Pick one and use it for a week before adding another.
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'The one-minute arrival',
                  'Before your next meeting, sit back, soften your gaze and take six slow breaths. It marks a boundary, so the last meeting stops leaking into this one.',
                ],
                [
                  'Box breathing before anything hard',
                  'Breathe in for four counts, hold for four, out for four, hold for four. Four rounds takes just over a minute and steadies you before a difficult conversation.',
                ],
                [
                  'The five-minute desk meditation',
                  'Set a timer for five minutes and rest your attention on the breath. When the mind wanders, bring it back without commentary. That return is the repetition that builds the muscle.',
                ],
                [
                  'One mindful transition per day',
                  'Use a recurring moment, like the kettle boiling, as a cue for three conscious breaths. Anchoring practice to something that already happens helps it survive a busy week.',
                ],
                [
                  'The shutdown ritual',
                  'At the end of the day, write tomorrow’s first task on a note, close the laptop and take five slow breaths. It replaces the lost commute.',
                ],
              ]}
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <SpokeCard
                to="/blog/how-to-meditate-at-work"
                label="How to meditate at work: a 5-minute desk meditation"
                description="The full desk meditation, step by step, camera off. No experience needed."
              />
              <SpokeCard
                to="/blog/breathing-exercises-for-work-stress"
                label="Breathing exercises for work stress"
                description="Four techniques for the middle of a working day, including before your next call."
              />
            </div>
          </div>
        </section>

        {/* FOCUS */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="focus" eyebrow="Attention">Mindfulness for focus at work</GuideHeading>
            <GuideProse>
              <p>
                Most focus advice is about blocking things: websites, notifications, meeting-free mornings. Mindfulness
                trains the attention itself, so it keeps working when the pings get through anyway.
              </p>
              <p>
                Each time you bring a wandering mind back to the breath, you practise what focused work needs: noticing
                the drift and returning to the task. Five minutes a day makes the workday version easier.
              </p>
              <p>
                Three habits worth stealing: start deep work with a minute of breathing; single-task the first 25
                minutes after lunch; and when you re-read the same paragraph, stand, breathe and reset.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* TEAM EXERCISES */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="team-exercises" eyebrow="Together">Mindfulness exercises for teams</GuideHeading>
            <GuideProse>
              <p>
                Practising together makes rest and attention visibly normal. These work on a video call, and nobody has
                to share feelings or sit on the floor.
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'Three breaths to open a meeting',
                  'The chair invites everyone to take three slow breaths before the agenda starts. Twenty seconds, and everyone actually arrives.',
                ],
                [
                  'The mid-meeting reset',
                  'In any meeting over an hour, schedule a two-minute pause at the halfway mark: stand, stretch, breathe, no talking.',
                ],
                [
                  'A weekly live session',
                  'Fifteen to thirty minutes of guided breathing, gentle movement and a short meditation, same time and same person every week.',
                ],
                [
                  'One-line check-ins',
                  'Open the weekly stand-up with one word from each person about how they are arriving. Not therapy, just information.',
                ],
                [
                  'Walking one-to-ones',
                  'Take the recurring one-to-one on foot, phones in pockets, no video. Fewer screens make for more honest conversations.',
                ],
              ]}
            />
          </div>
        </section>

        {/* WHY APPS FAIL */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="why-apps-fail" eyebrow="The honest bit" size="md">Why the app alone never sticks</GuideHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                Most companies have tried mindfulness once: they bought app licences. Within a couple of months, a
                small single-digit percentage of the team still opens the app. Gym memberships
                settle around 12 percent uptake, employee assistance programmes at 3 to 5 percent.
              </p>
              <p>
                The apps are often excellent libraries. But a library asks the busiest, most tired people to start
                practice alone, when their willpower is lowest.
              </p>
              <PullQuote>A scheduled live session in the calendar removes that hardest step.</PullQuote>
              <p>
                People click a link and someone else takes it from there.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/blog/do-workplace-wellness-apps-work"
                className="inline-flex items-center gap-2 text-clay font-semibold text-sm uppercase tracking-wider hover:text-clayDark transition-colors"
              >
                Read: do workplace wellness apps actually work? →
              </Link>
            </div>
          </div>
        </section>

        {/* REMOTE TEAMS */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="remote-teams" eyebrow="For HR and team leads">Bringing mindfulness to a remote team</GuideHeading>
            <GuideProse>
              <p>
                Remote is where live mindfulness works best: no room to book, every location joins as an equal, and
                recordings cover other time zones.
              </p>
              <p>Programmes that stick come down to four choices:</p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'Recurring beats one-off',
                  'A single wellbeing day is a nice memory by Friday. A weekly session at a protected time builds the habit.',
                ],
                [
                  'Live beats passive',
                  'A named human who shows up every week creates gentle accountability an app cannot.',
                ],
                [
                  'Low threshold beats impressive',
                  'Camera optional, chair-based, nothing to get right. The moment a session demands performance, the people who need it most stop coming.',
                ],
                [
                  'Measured beats hoped-for',
                  'Track attendance and return rate. If it works, you can show your budget-holder. If it does not, you deserve to know.',
                ],
              ]}
            />
            <GuideProse>
              <p>
                That is how my{' '}
                <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  Weekly Reset programme
                </Link>{' '}
                is built: live 15 to 30 minute sessions of breathing, meditation and chair yoga on Teams, the same
                coach every week. Pricing is public on the{' '}
                <Link to="/pricing" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  pricing page
                </Link>
                , and every engagement starts with a single pilot session.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="faq" eyebrow="FAQ">Frequently asked questions</GuideHeading>
            <GuideFAQ items={faqItems} />
          </div>
        </section>

        <RelatedGuides
          guides={[
            {
              to: '/guides/remote-work-burnout',
              label: 'Remote work burnout: the guide for distributed teams',
              description: 'Why remote teams burn out quietly, and prevention that works.',
            },
            {
              to: '/guides/desk-yoga',
              label: 'Desk yoga and chair yoga at work',
              description: 'The movement side: stretches and short routines for bodies that sit all day.',
            },
          ]}
        />

        <GuideCTA
          heading="Give your team a weekly mindfulness habit"
          text="A single pilot session of The Weekly Reset: live breathing, meditation and chair yoga on Teams, camera optional."
        />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MindfulnessAtWork;
