import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import {
  GuideEyebrow,
  GuideHeading,
  GuideProse,
  GuideList,
  GuideTOC,
  DefinitionList,
  PullQuote,
  NumberedSteps,
  SpokeCard,
  GuideFAQ,
  GuideCTA,
  RelatedGuides,
} from '@/components/GuideLayout';

const faqItems: Array<[string, string]> = [
  [
    'What is desk yoga?',
    'Desk yoga is gentle stretching, mobility and breathing you can do at or beside your desk, in normal clothes, in a few minutes. No mat, no change of clothes, no audience.',
  ],
  [
    'What is the difference between desk yoga and chair yoga?',
    'They overlap heavily. Chair yoga uses a chair as the main support, seated or holding it for balance. Desk yoga is chair yoga plus a few standing moves, aimed at the aches of screen work.',
  ],
  [
    'Does desk yoga actually help with neck and back pain?',
    'For everyday stiffness from sitting, yes: regular movement breaks are what physiotherapists recommend. For sharp, radiating or persistent pain, see a professional first. Desk yoga is maintenance, not treatment.',
  ],
  [
    'How often should I do desk yoga?',
    'Little and often. Try two to three breaks a day of two to five minutes, and stand or move briefly every 30 to 45 minutes. Attach them to things that already happen, like the end of a call.',
  ],
  [
    'Can you do desk yoga in office clothes without looking odd?',
    'That constraint is the whole design brief. Every movement here works in a shirt, at a desk, on camera or off, and most of it reads as normal stretching.',
  ],
  [
    'How do chair yoga sessions work for a whole team?',
    'A live guided session on Teams, usually 15 to 30 minutes: breathing, seated and standing mobility, and a short settle. Cameras optional, and it can be recorded if you want. A recurring weekly slot makes it a habit.',
  ],
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Desk yoga and chair yoga at work: the complete guide',
      description:
        'Why office bodies ache, the desk yoga movements that help, a five-minute routine between calls, and how to make movement a team habit rather than a forgotten intention.',
      author: { '@type': 'Person', name: 'Camilla', jobTitle: 'Corporate Wellness Coach' },
      publisher: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
      mainEntityOfPage: 'https://remoteyogacoach.com/guides/desk-yoga',
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
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://remoteyogacoach.com/guides/desk-yoga' },
        { '@type': 'ListItem', position: 3, name: 'Desk yoga and chair yoga at work' },
      ],
    },
  ],
};

const tocItems = [
  { href: '#what-it-is', label: 'What desk yoga and chair yoga are' },
  { href: '#office-yoga', label: 'Office yoga and workplace yoga, defined' },
  { href: '#why-bodies-ache', label: 'Why office bodies ache' },
  { href: '#movements', label: 'The movements, area by area' },
  { href: '#five-minutes', label: 'The five-minute routine between calls' },
  { href: '#breathing', label: 'Add the breath and it becomes yoga' },
  { href: '#team-habit', label: 'Making it a team habit' },
  { href: '#faq', label: 'Frequently asked questions' },
];

const DeskYoga = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Office Yoga, Desk Yoga and Chair Yoga at Work: The Guide | Remote Yoga Coach"
        description="What office yoga is, why workplace bodies ache, the desk yoga and chair yoga movements that help, a 5-minute routine between calls, and how to make movement a real team habit."
        canonical="https://remoteyogacoach.com/guides/desk-yoga"
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
              Office yoga, desk yoga and chair yoga at work: the complete guide
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed">
              Around 80 percent of office workers report neck or back discomfort, and the remote workday has made it
              worse. Desk yoga and chair yoga are gentle movement that fits between meetings. No mat, no changing, no
              flexibility needed.
            </p>
            <GuideTOC items={tocItems} />
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="what-it-is" eyebrow="The basics">What desk yoga and chair yoga are</GuideHeading>
            <GuideProse>
              <p>
                Desk yoga keeps the useful parts of yoga, moving joints through their range and pairing movement with
                slow breath. It drops the mat, the outfit and the poses with impressive names.
              </p>
              <p>
                Chair yoga comes from adaptive yoga, designed for bodies that cannot or should not get down on a floor.
                If you can sit in a chair and breathe, you are qualified.
              </p>
              <p>There are no advanced poses here, and that is deliberate, not a limitation.</p>
              <PullQuote>The point of movement at work is to feel better at 4pm, not to perform.</PullQuote>
            </GuideProse>
          </div>
        </section>

        {/* OFFICE YOGA DEFINED */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="office-yoga" eyebrow="The terms">Office yoga and workplace yoga, defined</GuideHeading>
            <DefinitionList
              items={[
                [
                  'Office yoga, sometimes called workplace yoga,',
                  'is yoga adapted to the working day: short, low-effort movement and breathing in the clothes you turned up in. It is the umbrella term.',
                ],
                [
                  'Desk yoga',
                  'is office yoga done at your workstation, seated and standing, aimed at the aches screen work creates.',
                ],
                [
                  'Chair yoga',
                  'is the seated core of it, using the chair as support, and the easiest to run for a whole team at once.',
                ],
              ]}
            />
            <GuideProse>
              <p>
                Done live and remotely, workplace yoga travels wherever the team does. My{' '}
                <Link to="/services/chair-yoga-for-teams" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  virtual chair yoga for teams
                </Link>{' '}
                is built exactly for that.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* WHY BODIES ACHE */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="why-bodies-ache" eyebrow="The problem">Why office bodies ache</GuideHeading>
            <GuideProse>
              <p>
                Sustained stillness in one shape has predictable costs. The head drifts toward the screen, loading the
                neck. Shoulders creep toward the ears on tense calls. Hips adapt to sitting, wrists repeat the same
                small movements, and the body stiffens around the shape you hold longest.
              </p>
              <p>The fix is not a perfect chair or heroic posture. It is variety and frequency.</p>
              <PullQuote>The best posture is the next posture.</PullQuote>
              <p>
                Short movement breaks every 30 to 45 minutes outperform a single gym session bolted onto a motionless
                day. Many small doses, where the stiffness happens.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* MOVEMENTS */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="movements" eyebrow="The toolkit">The movements, area by area</GuideHeading>
            <GuideProse>
              <p>
                Move slowly, to a comfortable stretch and never into pain. Your range today is allowed to differ from
                yesterday.
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'Neck',
                  'Drop the chin and roll one ear toward a shoulder, then across to the other. Then look over each shoulder as if checking a blind spot. Five slow repetitions each.',
                ],
                [
                  'Shoulders and upper back',
                  'Roll the shoulders up, back and down five times. Interlace the fingers, press the palms forward and round the upper back. Then open the arms wide and squeeze the shoulder blades together.',
                ],
                [
                  'Spine',
                  'Seated cat-cow: hands on knees, arch forward on an inhale, round back on an exhale, five rounds. Then a gentle seated twist to each side on an exhale.',
                ],
                [
                  'Hips',
                  'Seated figure-four: one ankle on the opposite knee, hinge slightly forward, then swap sides. If that is too much today, stand up and take four steps.',
                ],
                [
                  'Wrists and hands',
                  'Extend one arm and gently draw the fingers back with the other hand, palm up, then palm down. Then spread the fingers wide and make slow fists.',
                ],
                [
                  'Lower back and legs',
                  'Hold the back of the chair and lift the chest into a gentle backbend, then a soft forward fold with bent knees. Calf raises while the kettle boils count too.',
                ],
              ]}
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <SpokeCard
                to="/blog/chair-yoga-at-your-desk"
                label="Chair yoga at your desk: 8 poses for office workers"
                description="The full chair yoga sequence with step-by-step instructions for each pose."
              />
              <SpokeCard
                to="/blog/tech-neck-exercises-desk"
                label="Tech neck exercises: neck and shoulder stretches"
                description="A deeper dive on the area screen work punishes hardest: seven seated stretches and the desk setup fix."
              />
            </div>
          </div>
        </section>

        {/* FIVE MINUTES */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="five-minutes" eyebrow="Between calls">The five-minute routine between calls</GuideHeading>
            <GuideProse>
              <p>A five-minute gap between meetings is enough. Roughly one minute per station:</p>
            </GuideProse>
            <NumberedSteps
              items={[
                ['Minute one', 'Six slow breaths, shoulders rolling back and down on every exhale.'],
                ['Minute two', 'Neck half-circles and blind-spot rotations, both directions.'],
                ['Minute three', 'Seated cat-cow, then a twist to each side, moving on the exhale.'],
                ['Minute four', 'Stand. Gentle backbend, hands on the chair, then a soft forward fold.'],
                ['Minute five', 'Wrist stretches, one figure-four hip stretch per side, and three slow breaths before you click join.'],
              ]}
            />
            <GuideProse>
              <p>
                The poses with detailed cues are in{' '}
                <Link to="/blog/chair-yoga-at-your-desk" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  chair yoga at your desk in 5 minutes
                </Link>
                .
              </p>
            </GuideProse>
          </div>
        </section>

        {/* BREATHING */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="breathing" eyebrow="The multiplier">Add the breath and it becomes yoga</GuideHeading>
            <GuideProse>
              <p>
                Stretching relieves the body. Slow breathing reaches the nervous system: a long exhale activates the
                parasympathetic system, the physiological brake. Move on the exhale, soften on the inhale, and make the
                exhale a little longer.
              </p>
              <p>
                For the breathing on its own, start with{' '}
                <Link to="/blog/breathing-exercises-for-work-stress" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  breathing exercises for work stress
                </Link>{' '}
                or the{' '}
                <Link to="/blog/how-to-meditate-at-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  five-minute desk meditation
                </Link>
                . My{' '}
                <Link to="/guides/mindfulness-at-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  mindfulness at work guide
                </Link>{' '}
                covers the stillness side properly.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* TEAM HABIT */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="team-habit" eyebrow="For teams" size="md">Making it a team habit</GuideHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                The honest problem: individually, people do not do it. A stretch break needs self-initiation a dozen
                times a day, and busy people lose that to the inbox. What is missing is a trigger.
              </p>
              <p>
                Live guided sessions work where handouts fail. A recurring 15 to 30 minute slot, a link to click, the
                same coach every week. Nobody has to remember, decide or perform.
              </p>
              <p>
                That is the design of my{' '}
                <Link to="/services/chair-yoga-for-teams" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  virtual chair yoga for teams
                </Link>
                , and of{' '}
                <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  weekly classes
                </Link>
                , which add breathing and a short meditation.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/blog/how-much-does-corporate-yoga-cost"
                className="inline-flex items-center gap-2 text-clay font-semibold text-sm uppercase tracking-wider hover:text-clayDark transition-colors"
              >
                Read: how much does corporate yoga cost? →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="faq" eyebrow="FAQ">Frequently asked questions</GuideHeading>
            <GuideFAQ items={faqItems} />
          </div>
        </section>

        <RelatedGuides
          guides={[
            {
              to: '/guides/mindfulness-at-work',
              label: 'Mindfulness at work: the complete guide',
              description: 'The stillness side: meditation at work, focus practices and mindfulness exercises for teams.',
            },
            {
              to: '/guides/remote-work-burnout',
              label: 'Remote work burnout: the guide for distributed teams',
              description: 'Why remote teams burn out quietly, the signs managers can spot, and prevention that works.',
            },
          ]}
        />

        <GuideCTA
          heading="Give your team a weekly movement habit"
          text="A single pilot session: live chair yoga, breathing and meditation on Teams."
        />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default DeskYoga;
