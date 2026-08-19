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
  KeyTakeaways,
  SpokeCard,
  GuideFAQ,
  GuideCTA,
  RelatedGuides,
} from '@/components/GuideLayout';

const faqItems: Array<[string, string]> = [
  [
    'What is mindfulness at work?',
    'Mindfulness at work means paying attention to what you are doing while you are doing it, on purpose and without judging yourself for how well it is going. In practice it looks very ordinary: one task at a time, a few conscious breaths between meetings, noticing when your attention has wandered and bringing it back. No cushion, no incense, no special beliefs required.',
  ],
  [
    'Does meditation at work actually do anything?',
    'Yes, and the evidence is stronger than most people expect. A review covering 28 studies found that even a single session of meditation, breathing or yoga reduced physiological markers of stress in 71 percent of measures. Regular short practice is linked to better focus, better emotional regulation and lower perceived stress. The catch is consistency: one workshop a year does very little, a short weekly habit does a lot.',
  ],
  [
    'How long does a workplace meditation session need to be?',
    'Shorter than you think. Five focused minutes at your desk is enough to reset attention between meetings. For live team sessions, 15 to 30 minutes fits a lunch break or a meeting slot and leaves people calmer without eating the day.',
  ],
  [
    'Do people need any experience to join a team mindfulness session?',
    'None at all. A good workplace session assumes everyone is a beginner, uses plain language and never asks anyone to perform. Cameras can stay off, nobody speaks unless they want to, and there is nothing to get right.',
  ],
  [
    'What is the difference between mindfulness and meditation?',
    'Mindfulness is the skill: noticing where your attention is. Meditation is the practice session where you train that skill, usually by sitting and following the breath for a set time. You can be mindful while writing an email; you meditate to get better at it.',
  ],
  [
    'Can mindfulness sessions work over Teams or Zoom?',
    'Very well, and in some ways better than in person. Nobody has to travel or book a room, remote and hybrid colleagues join as equals, cameras can stay off, and the recording reaches anyone in another time zone. The format was made for distributed teams.',
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
          <div className="max-w-[820px] mx-auto px-5">
            <GuideEyebrow>Guide</GuideEyebrow>
            <h1 className="font-fraunces font-semibold text-heading text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Mindfulness at work: the complete guide for remote and hybrid teams
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed">
              Mindfulness has a marketing problem. The word conjures beanbags, retreats and people who seem to have
              far more spare time than your team does. Underneath the branding sits something a people leader can
              actually use: a trainable skill, backed by real evidence, that lowers stress and sharpens focus across a
              team, if it is run as a habit rather than handed out as an app nobody opens. This guide covers what it
              is, whether it genuinely works, and how to build it into a distributed team.
            </p>
            <KeyTakeaways items={[
              'Mindfulness at work is a trainable attention-and-breathing skill, not a belief system; even a single guided session measurably lowers stress.',
              'It only helps a team as a habit: short and weekly beats rare and long.',
              'Live guided sessions drive the participation that apps (3 to 5% sustained use) do not.',
              'Measure it with attendance and pre and post wellbeing, not app downloads.',
            ]} />
            <GuideTOC items={tocItems} />
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="what-it-is" eyebrow="The basics">What mindfulness at work actually means</GuideHeading>
            <GuideProse>
              <p>
                Strip away the packaging and mindfulness is simply this: noticing where your attention is, and
                choosing where to put it. At work, that means doing one thing while you are doing it. Reading the
                report while you read the report. Listening to a colleague without drafting your reply. Noticing the
                spike of irritation at a message before it decides what you type back.
              </p>
              <p>
                The opposite state is one every knowledge worker knows intimately: eight tabs open, a meeting you are
                half in, a notification you are half out to, and by five o'clock the strange feeling of having been
                busy all day without being anywhere at all. Nobody chose that mode. It is what happens by default
                when attention is pulled in twelve directions and never trained to come back.
              </p>
              <p>
                Mindfulness is the training. And like any training, it works through small repetitions, not grand
                gestures. You do not need to become a different kind of person. You are allowed to stay busy,
                ambitious and fond of your calendar. The practice just gives you back the choice of where your
                attention goes.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* EVIDENCE */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="evidence" eyebrow="The research">What the evidence says</GuideHeading>
            <GuideProse>
              <p>
                Workplace mindfulness is one of the better-studied corners of corporate wellbeing, and the findings
                are consistent enough to be boring, which is exactly what you want from evidence.
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'Stress drops after a single session',
                  'A review of 28 studies found one session of yoga, meditation or breathing practice reduced stress reactivity in 71 percent of physiological measures and 65 percent of psychological ones. You do not need months of practice before anything happens.',
                ],
                [
                  'Breathing practices hold up in meta-analysis',
                  'Breathwork meta-analyses show significant reductions in stress, anxiety and low mood compared with control groups. Slow, deliberate breathing directly activates the parasympathetic nervous system, the body’s built-in brake.',
                ],
                [
                  'Attention is trainable',
                  'Regular short mindfulness practice is associated with measurable improvements in sustained attention and working memory, the exact faculties that constant context-switching erodes.',
                ],
                [
                  'The habit matters more than the dose',
                  'Studies of workplace programmes point the same way: short, regular practice beats occasional long sessions. A weekly rhythm the team actually keeps outperforms an ambitious programme that fizzles by week three.',
                ],
              ]}
            />
            <GuideProse>
              <p>
                One honest caveat: mindfulness is not a cure for a broken workload, a toxic manager or chronic
                understaffing. It helps people recover, focus and respond rather than react. If the underlying
                problem is structural, it needs a structural fix too. My guide to{' '}
                <Link to="/guides/remote-work-burnout" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  remote work burnout
                </Link>{' '}
                covers that side of the equation.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* MEDITATION AT WORK */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="meditation-at-work" eyebrow="Practice">Meditation at work: five ways to start</GuideHeading>
            <GuideProse>
              <p>
                You do not need a quiet room, a lunch hour or anyone's permission. These five practices fit inside a
                normal workday, in the gaps that already exist. Pick one and use it for a week before adding another.
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'The one-minute arrival',
                  'Before your next meeting, sit back, close your eyes or soften your gaze, and take six slow breaths. That is the whole practice. It marks the boundary between what you were doing and what you are about to do, so the last meeting stops leaking into this one.',
                ],
                [
                  'Box breathing before anything hard',
                  'Breathe in for four counts, hold for four, out for four, hold for four. Four rounds takes just over a minute and steadies the nervous system before a difficult conversation, a presentation or an inbox you have been avoiding.',
                ],
                [
                  'The five-minute desk meditation',
                  'Sit comfortably, set a timer for five minutes, rest your attention on the breath, and every time the mind wanders, bring it back without commentary. Camera off, door closed or not. Wandering is not failing; noticing the wandering is the repetition that builds the muscle.',
                ],
                [
                  'One mindful transition per day',
                  'Choose a recurring moment, the kettle boiling, the laptop waking up, the walk back from the door, and use it as a cue to take three conscious breaths. Anchoring practice to something that already happens is how it survives a busy week.',
                ],
                [
                  'The shutdown ritual',
                  'At the end of the working day, write tomorrow’s first task on a note, close the laptop, and take five slow breaths before you stand up. Remote workers lost the commute that used to separate work-brain from home-brain. This is a ninety-second replacement.',
                ],
              ]}
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <SpokeCard
                to="/blog/5-minute-desk-meditation"
                label="A 5-minute meditation you can do at your desk"
                description="The full desk meditation, step by step, camera off. No experience needed."
              />
              <SpokeCard
                to="/blog/breathing-exercises-for-work-stress"
                label="Breathing exercises for work stress"
                description="Four techniques you can use in the middle of a working day, including before your next call."
              />
            </div>
          </div>
        </section>

        {/* FOCUS */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="focus" eyebrow="Attention">Mindfulness for focus at work</GuideHeading>
            <GuideProse>
              <p>
                Most advice about focus at work is really advice about blocking things: websites, notifications,
                meeting-free mornings. Useful, but it only manages the outside. Mindfulness trains the inside, the
                attention itself, which is why it keeps working when the blockers fail and the open-plan noise or the
                Slack pings get through anyway.
              </p>
              <p>
                The mechanism is simple. Every time you notice your mind has wandered and bring it back to the
                breath, you are doing one repetition of exactly the movement that focused work requires: noticing
                the drift, returning to the task. Do that for five minutes a day and the workday versions get
                easier. People who practise regularly report fewer of those lost half-hours that begin with one quick
                look at the phone.
              </p>
              <p>
                Three focus-specific habits worth stealing: start deep work with one minute of breathing so you
                begin settled rather than scattered; single-task the first 25 minutes after lunch, when attention is
                weakest; and when you catch yourself re-reading the same paragraph, treat it as a signal to stand,
                breathe and reset rather than push through with less and less to show for it.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* TEAM EXERCISES */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="team-exercises" eyebrow="Together">Mindfulness exercises for teams</GuideHeading>
            <GuideProse>
              <p>
                Practising alone is powerful. Practising together changes the culture, because it makes rest and
                attention visibly normal instead of something people do in secret between meetings. These exercises
                work in the office and on a video call, and none of them require anyone to share feelings or sit on
                the floor.
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'Three breaths to open a meeting',
                  'The chair invites everyone to take three slow breaths before the agenda starts. Twenty seconds. It sounds almost too small to matter, and it reliably changes the tone of the entire meeting, because everyone actually arrives.',
                ],
                [
                  'The mid-meeting reset',
                  'In any meeting over an hour, schedule a two-minute pause at the halfway mark: stand, stretch, breathe, no talking. Long meetings do not fail for lack of content, they fail for lack of attention.',
                ],
                [
                  'A weekly live session',
                  'Fifteen to thirty minutes of guided breathing, gentle movement and a short meditation, at the same time every week, led by the same person. The recurring slot is what turns a nice idea into a habit, and a habit into something the team plans around.',
                ],
                [
                  'One-line check-ins',
                  'Open the weekly stand-up with a single word or line from each person about how they are arriving. Not therapy, just information. Teams that know how their colleagues are arriving misread each other less.',
                ],
                [
                  'Walking one-to-ones',
                  'Take the recurring one-to-one on foot, phones in pockets, no video. Movement plus fewer screens produces more honest conversations, and it quietly gives both people permission to leave their desks.',
                ],
              ]}
            />
          </div>
        </section>

        {/* WHY APPS FAIL */}
        <section className="bg-charcoal text-white py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-clay mb-4">The honest bit</span>
            <h2 id="why-apps-fail" className="scroll-mt-28 font-fraunces font-semibold text-3xl md:text-4xl leading-tight">
              Why the app alone never sticks
            </h2>
            <div className="mt-6 space-y-5 text-white/80 text-lg leading-relaxed">
              <p>
                Most companies have already tried mindfulness once: they bought app licences. Then usage followed the
                curve everyone who has run one of these programmes recognises. A spike of downloads in week one, a
                fast slide, and within a couple of months a small single-digit percentage of the team still opening
                it. The same pattern shows up across passive benefits: gym memberships settle around 12 percent
                uptake, employee assistance programmes at 3 to 5 percent.
              </p>
              <p>
                The problem is not the apps, which are often excellent libraries. The problem is that a library asks
                the busiest, most tired people to initiate practice alone, unprompted, in the exact moments when
                their willpower is lowest. A scheduled live session in the calendar removes that hardest step.
                People click a link and someone else takes it from there. The app can then do what it does well:
                support between sessions.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/blog/do-workplace-wellness-apps-work"
                className="inline-flex items-center gap-2 text-clay font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors"
              >
                Read: do workplace wellness apps actually work? →
              </Link>
            </div>
          </div>
        </section>

        {/* REMOTE TEAMS */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="remote-teams" eyebrow="For HR and team leads">Bringing mindfulness to a remote team</GuideHeading>
            <GuideProse>
              <p>
                If you are the person responsible for making this happen for a distributed team, the good news is
                that remote is not the obstacle. It is the format where live mindfulness works best: no room to
                book, no travel, every location joins as an equal, and the recording covers anyone asleep in another
                time zone.
              </p>
              <p>What separates programmes that stick from programmes that fizzle comes down to four choices:</p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'Recurring beats one-off',
                  'A single wellbeing day is a nice memory by Friday. A weekly session at a protected time builds the habit, and the habit is where the results live.',
                ],
                [
                  'Live beats passive',
                  'A named human who shows up every week creates gentle accountability an app cannot. Same face, same time, growing trust.',
                ],
                [
                  'Low threshold beats impressive',
                  'Camera optional, chair-based, no changing clothes, nothing to get right. The moment a session demands performance, the people who need it most stop coming.',
                ],
                [
                  'Measured beats hoped-for',
                  'Track attendance and return rate. If it works, you will be able to show your budget-holder. If it does not, you deserve to know.',
                ],
              ]}
            />
            <GuideProse>
              <p>
                This is exactly how my{' '}
                <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  Weekly Reset programme
                </Link>{' '}
                is built: live 30-minute sessions of breathing, meditation and chair yoga on Teams or Zoom, the same
                coach every week, with honest reporting at the end of every month. Pricing is public on the{' '}
                <Link to="/pricing" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  pricing page
                </Link>
                , and every engagement starts with a single pilot session.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="faq" eyebrow="FAQ">Frequently asked questions</GuideHeading>
            <GuideFAQ items={faqItems} />
          </div>
        </section>

        <RelatedGuides
          guides={[
            {
              to: '/guides/remote-work-burnout',
              label: 'Remote work burnout: the guide for distributed teams',
              description: 'Why remote teams burn out quietly, the signs managers can spot from a distance, and prevention that works.',
            },
            {
              to: '/guides/desk-yoga',
              label: 'Desk yoga and chair yoga at work',
              description: 'The movement side of workplace wellbeing: stretches and short routines for bodies that sit all day.',
            },
          ]}
        />

        <GuideCTA
          heading="Give your team a weekly mindfulness habit"
          text="A single pilot session of The Weekly Reset: live breathing, meditation and chair yoga on Teams, camera optional. Once it is a weekly habit, the ongoing subscription gives you attendance and wellbeing reporting you can take to your budget-holder."
        />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MindfulnessAtWork;
