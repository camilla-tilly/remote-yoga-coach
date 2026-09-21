import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import {
  GuideProse,
  GuideList,
  GuideTOC,
  DefinitionList,
  PullQuote,
  NumberedSteps,
  SpokeCard,
  GuideFAQ,
} from '@/components/GuideLayout';
import { PageHero, PageSection, ClosingCTA, PillLink } from '@/components/PageKit';

const faqItems: Array<[string, string]> = [
  [
    'What is desk yoga?',
    'Desk yoga is gentle stretching, mobility and breathing you can do at or beside your desk, in normal clothes, in a few minutes. You do not need a mat or a change of clothes, and nobody has to watch.',
  ],
  [
    'What is the difference between desk yoga and chair yoga?',
    'They overlap heavily. Chair yoga uses a chair as the main support, seated or holding it for balance. Desk yoga is chair yoga plus a few standing moves, aimed at the aches of screen work.',
  ],
  [
    'Does desk yoga actually help with neck and back pain?',
    'For everyday stiffness from sitting, yes: regular movement breaks are what physiotherapists recommend. For sharp, radiating or persistent pain, see a professional first. Desk yoga helps keep everyday stiffness down, but it is not a treatment for pain.',
  ],
  [
    'How often should I do desk yoga?',
    'Short, frequent breaks work best. Try two to three breaks a day of two to five minutes, and stand or move briefly every 30 to 45 minutes. Attach them to things that already happen, like the end of a call.',
  ],
  [
    'Can you do desk yoga in office clothes without looking odd?',
    'Yes. Every movement here was chosen to work in a shirt, at a desk, on camera or off, and most of it looks like normal stretching.',
  ],
  [
    'How do chair yoga sessions work for a whole team?',
    'A live guided session on Teams, usually 15 to 30 minutes: breathing, seated and standing mobility, and a short settle. Cameras are optional, and it can be recorded if you want. Holding it in the same weekly slot helps it become a habit.',
  ],
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Desk yoga and chair yoga at work: the complete guide',
      description:
        'Why office bodies ache, the desk yoga movements that help, a five-minute routine between calls, and how to make movement a regular team habit.',
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
  { href: '#breathing', label: 'Adding slow breathing to desk yoga' },
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
        <PageHero
          eyebrow="Guide"
          title="Office yoga, desk yoga and chair yoga at work: the complete guide"
          aside={
            <div className="[&>nav]:mt-0 [&>nav]:bg-transparent">
              <GuideTOC items={tocItems} />
            </div>
          }
        >
          <p>
            Around 80 percent of office workers report neck or back discomfort, and the remote workday has made it
            worse. Desk yoga and chair yoga are gentle movements you can do between meetings, without a mat, without
            changing clothes and without needing to be flexible.
          </p>
        </PageHero>

        <PageSection id="what-it-is" heading="What desk yoga and chair yoga are">
          <GuideProse>
            <p>
              Desk yoga uses the useful parts of yoga: moving the joints through their range, together with slow
              breathing. You do not need a mat or special clothes.
            </p>
            <p>
              Chair yoga comes from adaptive yoga, designed for people who cannot or should not get down on the floor.
              If you can sit in a chair and breathe, you can do it.
            </p>
            <p>There are no advanced poses in this guide. I leave them out on purpose.</p>
            <PullQuote>The aim is to feel better by late afternoon, and nobody needs to be good at yoga for that.</PullQuote>
          </GuideProse>
        </PageSection>

        <PageSection id="office-yoga" heading="Office yoga and workplace yoga, defined">
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
              When it is taught live online, workplace yoga works wherever the team is based. My{' '}
              <Link to="/services/chair-yoga-for-teams" className="text-clay underline underline-offset-4 hover:text-clayDark">
                virtual chair yoga for teams
              </Link>{' '}
              is set up for exactly that.
            </p>
          </GuideProse>
        </PageSection>

        <PageSection id="why-bodies-ache" heading="Why office bodies ache">
          <GuideProse>
            <p>
              Sitting still in one position for hours causes predictable problems. The head drifts toward the screen,
              which loads the neck. The shoulders rise toward the ears during tense calls. The hips get used to
              sitting, the wrists repeat the same small movements, and the body stiffens in the position you hold
              longest.
            </p>
            <p>A perfect chair or a very upright posture does not solve this.</p>
            <PullQuote>What helps is changing position often and moving a little, many times a day.</PullQuote>
            <p>
              Short movement breaks every 30 to 45 minutes do more for this than a single gym session on a day when you
              otherwise sit still. It helps to take them at the desk, where the stiffness builds up.
            </p>
          </GuideProse>
        </PageSection>

        <PageSection id="movements" heading="The movements, area by area">
          <GuideProse>
            <p>
              Move slowly, to a comfortable stretch and never into pain. It is normal for your range to be different
              from one day to the next.
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
              description="More on the neck and shoulders, which screen work strains most: seven seated stretches and how to set up your desk."
            />
          </div>
        </PageSection>

        <PageSection id="five-minutes" heading="The five-minute routine between calls">
          <GuideProse>
            <p>A five-minute gap between meetings is enough time. Spend about a minute on each step:</p>
          </GuideProse>
          <NumberedSteps
            items={[
              ['Minute one', 'Take six slow breaths, rolling the shoulders back and down on every exhale.'],
              ['Minute two', 'Do neck half-circles and blind-spot rotations in both directions.'],
              ['Minute three', 'Do seated cat-cow, then a twist to each side, moving on the exhale.'],
              ['Minute four', 'Stand up, hold the chair for a gentle backbend, then do a soft forward fold.'],
              ['Minute five', 'Stretch the wrists, do one figure-four hip stretch per side, and take three slow breaths before you click join.'],
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
        </PageSection>

        <PageSection id="breathing" heading="Adding slow breathing to desk yoga">
          <GuideProse>
            <p>
              Stretching eases stiff muscles, and slow breathing also calms the nervous system: a long exhale activates
              the parasympathetic system, the part that slows the body down. Move on the exhale, soften on the inhale,
              and make the exhale a little longer.
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
              covers meditation and mindfulness in more detail.
            </p>
          </GuideProse>
        </PageSection>

        <PageSection id="team-habit" heading="Making it a team habit">
          <GuideProse>
            <p>
              The problem is that most people do not do it on their own. A stretch break means remembering to start one
              a dozen times a day, and busy people get pulled back into their inbox. It helps to have something that
              prompts them.
            </p>
            <p>
              Live guided sessions work better than handouts. There is a recurring 15 to 30 minute slot in the
              calendar, a link to click and the same coach every week, so nobody has to remember or decide to do it,
              and nobody has to perform.
            </p>
            <p>
              My{' '}
              <Link to="/services/chair-yoga-for-teams" className="text-clay underline underline-offset-4 hover:text-clayDark">
                virtual chair yoga for teams
              </Link>{' '}
              is set up this way, and so are my{' '}
              <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                weekly classes
              </Link>
              , which add breathing and a short meditation.
            </p>
          </GuideProse>
          <div className="mt-8">
            <Link
              to="/blog/how-much-does-corporate-yoga-cost"
              className="inline-flex items-center gap-2 text-clay font-semibold text-sm uppercase tracking-wider hover:text-clayDark transition-colors"
            >
              Read: how much does corporate yoga cost? →
            </Link>
          </div>
        </PageSection>

        <PageSection id="faq" heading="Frequently asked questions">
          <GuideFAQ items={faqItems} />
        </PageSection>

        <PageSection heading="Other guides">
          <div className="grid gap-4">
            <SpokeCard
              to="/guides/mindfulness-at-work"
              label="Mindfulness at work: the complete guide"
              description="Meditation at work, focus practices and mindfulness exercises for teams."
            />
            <SpokeCard
              to="/guides/remote-work-burnout"
              label="Remote work burnout: the guide for distributed teams"
              description="Why remote teams burn out without anyone noticing, the signs managers can spot, and prevention that works."
            />
          </div>
        </PageSection>

        <ClosingCTA
          heading="Give your team a weekly movement habit"
          actions={
            <>
              <PillLink to="/demo" variant="light">Book a pilot</PillLink>
              <PillLink to="/pricing" variant="lightOutline">See pricing</PillLink>
            </>
          }
        >
          <p>Start with one pilot session of live chair yoga, breathing and meditation on Teams.</p>
        </ClosingCTA>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default DeskYoga;
