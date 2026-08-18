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
  KeyTakeaways,
  SpokeCard,
  GuideFAQ,
  GuideCTA,
  RelatedGuides,
} from '@/components/GuideLayout';

const faqItems: Array<[string, string]> = [
  [
    'What is desk yoga?',
    'Desk yoga is gentle stretching, mobility and breathing you can do at or beside your desk, in normal clothes, in a few minutes. It borrows the useful parts of yoga, moving joints through their range, pairing movement with breath, and leaves out anything that needs a mat, a change of clothes or an audience.',
  ],
  [
    'What is the difference between desk yoga and chair yoga?',
    'They overlap heavily. Chair yoga uses a chair as the main support, either seated or holding the back of it for balance, and originally comes from adaptive yoga. Desk yoga is chair yoga plus a few standing moves, aimed at office workers and the specific aches of screen work: neck, shoulders, wrists, hips and lower back.',
  ],
  [
    'Does desk yoga actually help with neck and back pain?',
    'For the everyday stiffness that comes from sustained sitting, yes: regular movement breaks and gentle range-of-motion work are exactly what physiotherapists recommend, and around 80 percent of office workers report neck or back discomfort. For sharp, radiating or persistent pain, see a professional first; desk yoga is maintenance, not treatment.',
  ],
  [
    'How often should I do desk yoga?',
    'Little and often beats one long session. A useful rhythm is two to three short breaks a day of two to five minutes each, plus one slightly longer routine, and standing or moving briefly every 30 to 45 minutes. Attach the breaks to things that already happen, like the end of a call or the kettle boiling.',
  ],
  [
    'Can you do desk yoga in office clothes without looking odd?',
    'That constraint is the whole design brief. Every movement in this guide works in a shirt, at a desk, on camera or off. Nothing goes on the floor, nothing goes over your head, and most of it reads as normal stretching to anyone walking past.',
  ],
  [
    'How do chair yoga sessions work for a whole team?',
    'A live guided session over Teams or Zoom, usually 15 to 30 minutes: breathing to arrive, seated and standing mobility for the areas screen work punishes, and a short settle to close. Cameras optional, no equipment, recordings for other time zones. A recurring weekly slot is what turns it from a nice one-off into a habit.',
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
          <div className="max-w-[820px] mx-auto px-5">
            <GuideEyebrow>Guide</GuideEyebrow>
            <h1 className="font-fraunces font-semibold text-heading text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Office yoga, desk yoga and chair yoga at work: the complete guide
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed">
              Your body was not consulted when work moved onto screens. Around 80 percent of office workers report
              neck or back discomfort, and the remote workday, with its back-to-back calls and three-metre commute,
              has quietly made it worse. Office yoga is the practical answer, and desk yoga and chair yoga are the
              two forms it usually takes: gentle, effective movement that fits between meetings, needs no mat, no
              changing, and no flexibility whatsoever. This guide covers what workplace yoga actually means, the
              movements, a five-minute routine, and how to make it stick for a whole team.
            </p>
            <KeyTakeaways items={[
              'Desk yoga and chair yoga are gentle seated movements you do in work clothes in a few minutes; no mat, no flexibility, no experience.',
              'Around 80% of office workers report neck or back discomfort from sitting; frequent short movement beats one gym session.',
              'Pair the movement with slow breathing to reach the nervous system, not just the muscles.',
              'Individually people rarely keep it up; a live weekly session is what makes it stick for a whole team.',
            ]} />
            <GuideTOC items={tocItems} />
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="what-it-is" eyebrow="The basics">What desk yoga and chair yoga are</GuideHeading>
            <GuideProse>
              <p>
                Desk yoga takes the genuinely useful parts of a yoga practice, moving joints through their full
                range, pairing movement with slow breath, paying attention to the body, and strips away everything
                that does not survive contact with an office: the mat, the outfit, the poses with impressive names.
                What remains is a set of seated and standing movements you can do in work clothes, in the space
                beside your chair, in two to five minutes.
              </p>
              <p>
                Chair yoga is its close relative, using the chair as support for seated stretches and standing
                balance. It earned its reputation in adaptive yoga, which is exactly why it works at work: it was
                designed from the start for bodies that cannot or should not get down on a floor. Nobody needs to be
                bendy, sporty or brave. If you can sit in a chair and breathe, you are qualified.
              </p>
              <p>
                One position worth stating plainly, because it shapes everything we teach: there are no advanced
                poses here, and that is deliberate, not a limitation. The point of movement at work is to feel
                better at 4pm, not to perform.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* OFFICE YOGA DEFINED */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="office-yoga" eyebrow="The terms">Office yoga and workplace yoga, defined</GuideHeading>
            <GuideProse>
              <p>
                Office yoga, sometimes called workplace yoga, is simply yoga adapted to the working day: short,
                low-effort movement and breathing you can do in the clothes you turned up in, without a mat or a
                studio. It is the umbrella term. Desk yoga and chair yoga are the two forms it usually takes.
              </p>
              <p>
                Desk yoga is office yoga done in and around your workstation, a mix of seated movements and a few
                standing ones aimed at the aches screen work creates. Chair yoga is the seated core of it, using the
                chair itself as support, which makes it the most accessible entry point and the easiest thing to run
                for a whole team at once. When people search for office yoga or workplace yoga, this is what they are
                after: something that fits the day rather than competing with it.
              </p>
              <p>
                Done live and remotely, workplace yoga travels wherever the team does. If you want office yoga your
                distributed team can join from anywhere, my{' '}
                <Link to="/services/chair-yoga-for-teams" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  virtual chair yoga for teams
                </Link>{' '}
                is built exactly for that.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* WHY BODIES ACHE */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="why-bodies-ache" eyebrow="The problem">Why office bodies ache</GuideHeading>
            <GuideProse>
              <p>
                Sitting is not dangerous the way tabloids claim, but sustained stillness in one shape has
                predictable costs. The head drifts forward toward the screen, and every centimetre forward adds
                load the neck and upper back must carry. Shoulders round and creep toward the ears, especially
                during tense calls. Hip flexors adapt to their shortened, seated length. Wrists repeat the same
                small movements thousands of times a day. And the deep postural muscles, given no variety, simply
                stiffen around the shape you hold longest.
              </p>
              <p>
                The fix is not a perfect chair or heroic posture. Research on sedentary work points somewhere much
                less glamorous: variety and frequency. The best posture is the next posture. Short, regular movement
                breaks, every 30 to 45 minutes, outperform a single gym session bolted onto a motionless day. That
                is the entire logic of desk yoga: many small doses, built into the day where the stiffness actually
                happens.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* MOVEMENTS */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="movements" eyebrow="The toolkit">The movements, area by area</GuideHeading>
            <GuideProse>
              <p>
                Everything below is done slowly, with ordinary breathing, to the point of a comfortable stretch and
                never into pain. Move within the range that feels reasonable today, which is allowed to be different
                from yesterday.
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'Neck',
                  'Slow half-circles: drop the chin toward the chest and roll one ear toward a shoulder, then across and to the other side. Then gentle rotations, looking over each shoulder as if checking a blind spot. Five slow repetitions each. This is first aid for screen-neck.',
                ],
                [
                  'Shoulders and upper back',
                  'Roll the shoulders up, back and down five times. Then interlace the fingers, press the palms forward at chest height and round the upper back, letting the space between the shoulder blades stretch. Finish by opening the arms wide and squeezing the shoulder blades together.',
                ],
                [
                  'Spine',
                  'Seated cat-cow: hands on knees, arch the chest forward on an inhale, round the spine back on an exhale, five slow rounds. Then a seated twist, one hand on the opposite knee, turning gently on an exhale. Twists feel remarkable after three consecutive video calls.',
                ],
                [
                  'Hips',
                  'Seated figure-four: place one ankle on the opposite knee and hinge slightly forward until the outer hip stretches, then swap sides. If that is too much today, simply stand up and take four steps; standing is itself a hip stretch after two seated hours.',
                ],
                [
                  'Wrists and hands',
                  'Extend one arm, palm up, and gently draw the fingers back with the other hand. Then palm down. Then spread the fingers wide and make slow fists. Typing is a repetitive-strain sport; wrists deserve maintenance like any working joint.',
                ],
                [
                  'Lower back and legs',
                  'Stand, hold the back of the chair, and take a gentle standing backbend by lifting the chest. Then a soft forward fold with bent knees, letting the arms hang. Calf raises while the kettle boils count as desk yoga. Nobody is checking.',
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
                to="/blog/neck-and-shoulder-stretches-desk-workers"
                label="Neck and shoulder stretches for desk workers"
                description="A deeper dive on the area screen work punishes hardest, with a daily maintenance routine."
              />
            </div>
          </div>
        </section>

        {/* FIVE MINUTES */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="five-minutes" eyebrow="Between calls">The five-minute routine between calls</GuideHeading>
            <GuideProse>
              <p>
                When a meeting ends five minutes before the next one, that gap is exactly enough. This sequence
                covers the whole body without leaving the desk area, roughly one minute per station:
              </p>
            </GuideProse>
            <GuideList
              items={[
                ['Minute one', 'Six slow breaths, shoulders rolling back and down on every exhale. Arrive in the gap instead of refreshing the inbox.'],
                ['Minute two', 'Neck half-circles and blind-spot rotations, slow, both directions.'],
                ['Minute three', 'Seated cat-cow, then a twist to each side, moving on the exhale.'],
                ['Minute four', 'Stand. Gentle backbend with hands on the chair, then a soft forward fold, knees bent.'],
                ['Minute five', 'Wrist stretches both directions, one figure-four hip stretch per side, and three final slow breaths before you click join.'],
              ]}
            />
            <GuideProse>
              <p>
                Done twice a day, this adds up to more useful movement than most gym intentions survive to deliver.
                The full version with detailed cues is in{' '}
                <Link to="/blog/desk-yoga-5-minute-routine" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  desk yoga: a 5-minute routine between calls
                </Link>
                .
              </p>
            </GuideProse>
          </div>
        </section>

        {/* BREATHING */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="breathing" eyebrow="The multiplier">Add the breath and it becomes yoga</GuideHeading>
            <GuideProse>
              <p>
                Stretching relieves the body. Pairing the movement with slow breathing is what reaches the nervous
                system, and it is the difference between a stretch break and a reset. Slow exhalation activates the
                parasympathetic system, the physiological brake, which is why five breaths can visibly change how
                the next meeting goes. The rule of thumb: move on the exhale, soften on the inhale, and make the
                exhale a little longer than the inhale.
              </p>
              <p>
                If you want the breathing side on its own, for the days when even standing up feels ambitious,
                start with{' '}
                <Link to="/blog/breathing-exercises-for-work-stress" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  breathing exercises for work stress
                </Link>{' '}
                or the{' '}
                <Link to="/blog/5-minute-desk-meditation" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  five-minute desk meditation
                </Link>
                . The movement and the stillness are two doors into the same room; my{' '}
                <Link to="/guides/mindfulness-at-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  mindfulness at work guide
                </Link>{' '}
                covers the second door properly.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* TEAM HABIT */}
        <section className="bg-charcoal text-white py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-clay mb-4">For teams</span>
            <h2 id="team-habit" className="scroll-mt-28 font-fraunces font-semibold text-3xl md:text-4xl leading-tight">
              Making it a team habit
            </h2>
            <div className="mt-6 space-y-5 text-white/80 text-lg leading-relaxed">
              <p>
                Here is the honest problem with everything above: individually, people do not do it. Not because
                they disagree, but because a stretch break requires self-initiation a dozen times a day, and busy
                people lose that negotiation to the inbox almost every time. Knowledge was never the missing
                ingredient. A trigger was.
              </p>
              <p>
                This is why live guided sessions work where handouts fail. A recurring 15 to 30 minute slot in the
                team calendar, a link to click, and a coach who leads the movement, the same face every week. Nobody
                has to remember, decide or perform. Cameras stay off for anyone who prefers it, recordings cover the
                other time zones, and within a few weeks it becomes the meeting people quietly protect. That is the
                design of my{' '}
                <Link to="/services/chair-yoga-for-teams" className="text-clay underline underline-offset-4 hover:text-white">
                  virtual chair yoga for teams
                </Link>
                , and of{' '}
                <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-white">
                  The Weekly Reset
                </Link>
                , which combines chair yoga with breathing and a short meditation, and reports attendance and
                pre-post stress honestly so you can see whether it earns its slot.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/blog/how-much-does-corporate-yoga-cost"
                className="inline-flex items-center gap-2 text-clay font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors"
              >
                Read: how much does corporate yoga cost? →
              </Link>
            </div>
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
          text="A single taster session of The Weekly Reset: live chair yoga, breathing and meditation on Teams, camera optional, in normal work clothes. Once it is a weekly habit, the ongoing subscription gives you the attendance and wellbeing reporting."
        />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default DeskYoga;
