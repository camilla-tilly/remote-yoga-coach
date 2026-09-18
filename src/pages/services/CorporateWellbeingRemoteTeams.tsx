import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Eyebrow } from '@/components/SiteBlocks';
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
      areaServed: ['GB', 'EU', 'AU'],
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

const SectionHeading = ({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) => (
  <>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight">{children}</h2>
  </>
);

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
        ogImage="https://remoteyogacoach.com/og/corporate-wellbeing-remote-teams.png?v=3"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-cream-soft pt-36 pb-20 md:pt-44 md:pb-24">
          <div className="max-w-[820px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <Eyebrow>Corporate wellbeing, distributed teams</Eyebrow>
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Wellbeing for remote and hybrid teams that reaches everyone on screen.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[600px] mx-auto">
              A live weekly class on Teams for your whole team, wherever they work. Meditation, breathing or
              chair yoga.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-medium text-[15px] rounded-full px-8 py-6">
                  Book a pilot
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-sage text-charcoal hover:bg-sage-light/40 font-medium text-[15px] rounded-full px-8 py-6">
                  See pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="The problem">Distributed teams are the hardest to reach, and the most at risk</SectionHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
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
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[900px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="What you get">A wellbeing subscription built for distributed teams</SectionHeading>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {included.map(([title, text]) => (
                <div key={title} className="flex gap-4 bg-white rounded-lg border border-sage-light p-5 h-full">
                  <span className="shrink-0 mt-1 w-6 h-6 rounded-full bg-clay/10 flex items-center justify-center">
                    <Check className="text-clay" size={15} strokeWidth={2.5} />
                  </span>
                  <p className="text-charcoal/80 text-[15px] leading-relaxed">
                    <span className="font-fraunces font-normal text-heading text-lg block mb-0.5">{title}</span>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A HABIT, INCLUDING FOR HYBRID TEAMS */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="Why a subscription">A habit, not a one-off event</SectionHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
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
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="FAQ">Common questions</SectionHeading>
            <GuideFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream-soft-b py-24 md:py-28">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <h2 className="font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight">
              Give your distributed team a habit that sticks
            </h2>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              Start with a single pilot session, credited to your first month if you continue.
            </p>
            <div className="mt-9">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-medium text-[15px] rounded-full px-8 py-6">
                  Book a pilot
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-charcoal/60 text-[15px] leading-relaxed">
              Making the case internally? Read{' '}
              <Link to="/guides/cost-of-employee-burnout" className="text-clay underline underline-offset-4 hover:text-clayDark">
                what employee burnout costs
              </Link>{' '}
              or{' '}
              <Link to="/compare" className="text-clay underline underline-offset-4 hover:text-clayDark">
                how live sessions compare to apps
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CorporateWellbeingRemoteTeams;
