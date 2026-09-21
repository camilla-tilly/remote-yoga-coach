import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { GuideFAQ, DefinitionList, PullQuote } from '@/components/GuideLayout';
import { PageHero, PageSection, FeatureRows, ClosingCTA, PillLink } from '@/components/PageKit';

const faqItems: Array<[string, string]> = [
  [
    'Is this office yoga, workplace yoga or chair yoga?',
    'The same thing here. Office and workplace yoga are the umbrella terms. What I run is chair yoga: seated, gentle, no mat and no changing, live on Teams from any desk.',
  ],
  [
    'What is a virtual chair yoga session for a company?',
    'A live session on Teams where I lead your team through gentle seated movement, breathing and a short reset, usually 15 to 30 minutes. Everyone joins from their own desk.',
  ],
  [
    'How long should a corporate chair yoga session be?',
    '15 to 30 minutes. Long enough to reset the neck, shoulders and back, short enough to fit between meetings.',
  ],
  [
    'Does chair yoga help with the aches of desk work?',
    'It targets them directly. Around 80 percent of office workers report neck or back discomfort, mostly from sitting, and gentle, frequent seated movement is what eases it.',
  ],
  [
    'How much does chair yoga for a team cost?',
    'A monthly subscription priced by how often you meet, not per class. Prices are on the pricing page, and you start with a single pilot session.',
  ],
  [
    'Can remote and hybrid teams do chair yoga together?',
    'Yes, that is where the live online format works best. No room to book, every location joins as an equal, and cameras can stay off.',
  ],
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Virtual office yoga and chair yoga classes for companies and remote teams',
      name: 'Office yoga and chair yoga for teams',
      provider: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
      areaServed: ['GB', 'EU'],
      description:
        'Live virtual office yoga and chair yoga sessions for companies and distributed teams on Teams: gentle seated movement, breathing and a short reset, no experience needed.',
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
        { '@type': 'ListItem', position: 2, name: 'Chair yoga for teams', item: 'https://remoteyogacoach.com/services/chair-yoga-for-teams' },
      ],
    },
  ],
};

const included = [
  ['Live and guided', 'A real person leads every session, the same face each week.'],
  ['Seated, in work clothes', 'Neck, shoulders, wrists, hips and lower back.'],
  ['Breathing built in', 'Techniques people reuse before a meeting or a deadline.'],
  ['One link, zero admin', 'You set the slot once. I take it from there.'],
];

const ChairYogaForTeams = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Virtual Office Yoga and Chair Yoga for Teams | Remote Yoga Coach"
        description="Live virtual office yoga and chair yoga for companies and remote teams on Teams. Workplace yoga that is gentle and desk-friendly, no experience needed. Book a pilot session."
        canonical="https://remoteyogacoach.com/services/chair-yoga-for-teams"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        <PageHero
          eyebrow="For companies and remote teams"
          title="Virtual office yoga and chair yoga your whole team can actually do."
          actions={
            <>
              <PillLink to="/demo">Book a pilot</PillLink>
              <PillLink to="/pricing" variant="outline">See pricing</PillLink>
            </>
          }
        >
          <p>
            Live, guided{' '}
            <Link to="/blog/office-yoga-for-remote-teams" className="text-clay underline underline-offset-4 hover:text-clayDark">
              workplace yoga for distributed and hybrid teams
            </Link>{' '}
            on Teams. Gentle, seated, in normal work clothes.
          </p>
        </PageHero>

        {/* DEFINITIONS -- the three terms people search for, one line each. */}
        <PageSection heading="Office yoga, desk yoga and chair yoga: what's the difference?">
          <DefinitionList
            items={[
              ['Office yoga and workplace yoga', 'are umbrella terms for yoga done during the workday.'],
              ['Desk yoga', 'is gentle movement at, or right beside, your desk.'],
              ['Chair yoga', 'is seated and gentle, with no mat and no changing. It is the version I run for teams.'],
            ]}
          />
        </PageSection>

        <PageSection heading="One weekly slot, run for you">
          <FeatureRows items={included as Array<[string, string]>} />
        </PageSection>

        <PageSection heading="Movement a whole workforce will keep">
          <div className="space-y-5">
            <p>
              A gym benefit rewards the already-active, and a PDF of stretches waits for busy people to start on
              their own. Most never do.
            </p>
            <PullQuote>Chair yoga is the opposite. It was designed for every body in the room.</PullQuote>
            <p>
              Around 80 percent of office workers report{' '}
              <Link to="/blog/tech-neck-exercises-desk" className="text-clay underline underline-offset-4 hover:text-clayDark">
                neck or back discomfort
              </Link>
              . A live session in the calendar reaches them, because someone else leads. For the movements
              themselves, see the{' '}
              <Link to="/guides/desk-yoga" className="text-clay underline underline-offset-4 hover:text-clayDark">
                desk yoga guide
              </Link>{' '}
              or the{' '}
              <Link to="/blog/chair-yoga-at-your-desk" className="text-clay underline underline-offset-4 hover:text-clayDark">
                8-pose chair yoga routine
              </Link>
              .
            </p>
          </div>
        </PageSection>

        <PageSection heading="Common questions">
          <GuideFAQ items={faqItems} />
        </PageSection>

        <ClosingCTA
          heading="Try chair yoga with your team"
          actions={
            <>
              <PillLink to="/demo" variant="light">Book a pilot</PillLink>
              <PillLink to="/pricing" variant="lightOutline">See pricing</PillLink>
            </>
          }
        >
          <p>
            Start with one pilot session, credited to your first month if you continue. Want breathing and
            meditation too? See{' '}
            <Link to="/services/team-wellness">how a session runs</Link>.
          </p>
        </ClosingCTA>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ChairYogaForTeams;
