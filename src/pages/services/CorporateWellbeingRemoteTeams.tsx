import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { PageHero, PageSection, FeatureRows, ClosingCTA, PillLink } from '@/components/PageKit';
import { GuideFAQ, PullQuote } from '@/components/GuideLayout';

const faqItems: Array<[string, string]> = [
  [
    'What is corporate wellbeing for a remote team?',
    'A wellbeing programme delivered live and online instead of in an office: a weekly session of breathing, meditation or chair yoga on Teams.',
  ],
  [
    'How is a team wellbeing subscription different from a one-off workshop?',
    'A workshop is a nice afternoon that fades by Friday. A subscription is a protected slot every week, and the weekly rhythm is where the results come from.',
  ],
  [
    'We are a hybrid team, some in the office and some at home. Does this still work?',
    'Yes. Everyone joins the same live session from wherever they are that day, so a hybrid team gets one shared moment a week without booking a room.',
  ],
  [
    'Does it work for teams spread across time zones?',
    'Yes. Sessions run in UK and European hours, and teams across several regions can have more than one weekly slot.',
  ],
  [
    'What does corporate wellbeing for a remote team cost?',
    'A flat monthly subscription by how often you meet, not a per-person charge. Pricing is public, and you start with a single pilot session.',
  ],
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Corporate wellbeing subscription for remote and distributed teams',
      name: 'Corporate wellbeing for remote teams',
      provider: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
      areaServed: ['GB', 'EU'],
      description:
        'Live weekly wellbeing sessions for distributed and hybrid teams on Teams: breathing, meditation and chair yoga.',
      offers: { '@type': 'Offer', priceCurrency: 'SEK', description: 'Monthly subscription by session frequency, from a single pilot session.' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://remoteyogacoach.com/' },
        { '@type': 'ListItem', position: 2, name: 'Corporate wellbeing for remote teams', item: 'https://remoteyogacoach.com/services/corporate-wellbeing-for-remote-teams' },
      ],
    },
  ],
};


const included = [
  ['One weekly slot', 'The same time every week, so it becomes a habit rather than a task.'],
  ['The same coach', 'A familiar person, which an app can never be.'],
  ['Breathing, meditation, chair yoga', 'Pick one, or rotate through them.'],
  ['Nothing to prepare', 'No equipment, no changing, nothing to perform.'],
];

const CorporateWellbeingRemoteTeams = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Weekly Wellbeing Sessions for Remote and Hybrid Teams | Remote Yoga Coach"
        description="A live weekly wellbeing subscription for remote, hybrid and in-office teams. Breathing, meditation and chair yoga on Teams. Book a pilot session."
        canonical="https://remoteyogacoach.com/services/corporate-wellbeing-for-remote-teams"
        ogImage="https://remoteyogacoach.com/og/corporate-wellbeing-remote-teams.png?v=4"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        <PageHero
          eyebrow="Corporate wellbeing, distributed teams"
          title="Wellbeing for remote and hybrid teams that reaches everyone on screen."
          actions={
            <>
              <PillLink to="/demo">Book a pilot</PillLink>
              <PillLink to="/pricing" variant="outline">See pricing</PillLink>
            </>
          }
        >
          <p>
            A live weekly class on Teams for your whole team, wherever they work. Meditation, breathing or
            chair yoga.
          </p>
        </PageHero>

        <PageSection heading="Distributed teams are the hardest to reach, and the most at risk">
          <div className="space-y-5">
            <p>
              Remote and hybrid workers{' '}
              <Link to="/guides/remote-work-burnout" className="text-clay underline underline-offset-4 hover:text-clayDark">
                report burnout at higher rates
              </Link>
              , yet most wellbeing still assumes an office: a room, a fixed hour, someone in person.
            </p>
            <PullQuote>
              So most distributed teams fall back on passive tools, and passive tools do not get used.
            </PullQuote>
          </div>
        </PageSection>

        <PageSection heading="A wellbeing subscription built for distributed teams">
          <FeatureRows items={included as Array<[string, string]>} />
        </PageSection>

        <PageSection heading="A habit, not a one-off event">
          <div className="space-y-5">
            <p>
              A wellbeing day is a nice memory by the weekend. A protected weekly slot is what changes how a team
              feels in week six. See{' '}
              <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                how a session runs
              </Link>
              .
            </p>
            <p>
              For a hybrid team it is also one fixed point in the week everyone shares, wherever they are that
              day. A simple way to{' '}
              <Link to="/blog/keep-hybrid-team-focused" className="text-clay underline underline-offset-4 hover:text-clayDark">
                keep a hybrid team focused
              </Link>
              .
            </p>
          </div>
        </PageSection>

        <PageSection heading="Common questions">
          <GuideFAQ items={faqItems} />
        </PageSection>

        <ClosingCTA
          heading="Give your distributed team a habit that sticks"
          actions={<PillLink to="/demo" variant="light">Book a pilot</PillLink>}
        >
          <p>Start with a single pilot session, credited to your first month if you continue.</p>
          <p className="text-[15px] text-offwhite/60">
            Making the case internally? Read{' '}
            <Link to="/guides/cost-of-employee-burnout">what employee burnout costs</Link> or{' '}
            <Link to="/compare">how live sessions compare to apps</Link>.
          </p>
        </ClosingCTA>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CorporateWellbeingRemoteTeams;
