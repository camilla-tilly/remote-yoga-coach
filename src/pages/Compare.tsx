import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { ComparisonTable } from '@/components/SiteBlocks';
import { PageHero, PageSection, ClosingCTA, PillLink, WRAP } from '@/components/PageKit';
import { GuideFAQ, PullQuote } from '@/components/GuideLayout';

const faqItems: Array<[string, string]> = [
  [
    'We already pay for Headspace or Calm. Why add live sessions?',
    'Apps have good content, but they rely on busy people starting on their own, and usage drops within weeks. With a live session, nobody has to start alone. You can keep the app for use between sessions.',
  ],
  [
    'Is this a Calm for Business alternative?',
    'Not exactly. It adds what those apps do not have: a real teacher at a set time each week, on Teams, which more people take part in.',
  ],
  [
    'We have an EAP. Is this not the same thing?',
    'No. An EAP is mainly used by people who already have a problem, and only 3 to 5 percent of staff use it. A weekly class is for everyone, before problems start, and nobody has to explain why they are joining.',
  ],
  [
    'Is this a replacement for our current wellbeing spend?',
    'It does not have to be. You can keep the app and the EAP and add the weekly class alongside them.',
  ],
  [
    'What about cost? Apps look cheaper per head.',
    'Per licence, yes. But most app licences go unused, so the cost per person who actually uses it is often higher.',
  ],
  [
    'App vs live sessions, which do teams actually use?',
    'More people take part in live sessions. Apps have more content and cost less per licence. The two work well together.',
  ],
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Live wellbeing sessions vs wellbeing apps vs EAPs: what actually gets used',
      description:
        'A comparison of live team wellbeing sessions, wellbeing apps and EAPs, looking mainly at how many people actually use each one. For HR and people leaders.',
      author: { '@type': 'Person', name: 'Camilla', jobTitle: 'Corporate Wellness Coach' },
      publisher: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
      mainEntityOfPage: 'https://remoteyogacoach.com/compare',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://remoteyogacoach.com/' },
        { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://remoteyogacoach.com/compare' },
      ],
    },
  ],
};

const rows = [
  { label: 'A real, familiar human', values: [true, false, 'On request'] },
  { label: 'Builds a shared team habit', values: [true, false, false] },
  { label: 'Preventive, not only crisis', values: [true, 'partial', false] },
  { label: 'Stigma-free for everyone', values: [true, true, 'partial'] },
  { label: 'Reaches the whole team', values: [true, 'partial', 'partial'] },
  { label: 'Live accountability to show up', values: [true, false, false] },
  { label: 'Works across time zones', values: [true, true, 'partial'] },
  { label: 'Typical take-up', values: ['High, live', 'Drops fast', '3 to 5%'] },
];

const Compare = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Live Wellbeing Sessions vs Apps and EAPs | Remote Yoga Coach"
        description="A comparison of live team wellbeing sessions, wellbeing apps and EAPs, looking mainly at how many people actually use each one. For HR and people leaders."
        canonical="https://remoteyogacoach.com/compare"
        ogType="article"
        ogImage="https://remoteyogacoach.com/og/compare.png?v=4"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        <PageHero title="Live sessions, wellbeing apps and EAPs compared">
          <p>The biggest difference between them is how many people actually use them.</p>
        </PageHero>

        <section data-section className="pb-6 md:pb-10">
          <div className={WRAP}>
            <div className="max-w-[1000px]">
              <ComparisonTable
                columns={['Live weekly sessions', 'Wellbeing app', 'EAP']}
                rows={rows as Array<{ label: string; values: Array<boolean | 'partial' | string> }>}
                highlightIndex={0}
              />
              <p className="mt-5 text-charcoal/55 text-sm">
                Take-up figures: EAP 3 to 5% (Personnel Today); app engagement declines within weeks of download.
              </p>
            </div>
          </div>
        </section>

        <PageSection heading="Live sessions work alongside apps and EAPs">
          <ul className="border-t border-sage-light">
            <li className="border-b border-sage-light py-5 md:py-6">
              <h3 className="font-fraunces font-normal text-heading text-[1.4rem] leading-snug">Wellbeing apps</h3>
              <p className="mt-1">The content is often good, but each person has to start on their own, and most stop after a few weeks. An app works well as something to use between live sessions.</p>
            </li>
            <li className="border-b border-sage-light py-5 md:py-6">
              <h3 className="font-fraunces font-normal text-heading text-[1.4rem] leading-snug">Employee assistance programmes (EAPs)</h3>
              <p className="mt-1">An EAP is important and worth keeping, but people usually only use it once a problem has already started.</p>
            </li>
            <li className="border-b border-sage-light py-5 md:py-6">
              <h3 className="font-fraunces font-normal text-heading text-[1.4rem] leading-snug">Live sessions</h3>
              <p className="mt-1">
                A real teacher at a fixed time each week, which makes people much more likely to join. See{' '}
                <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  how a session runs
                </Link>
                .
              </p>
            </li>
          </ul>
        </PageSection>

        <PageSection heading="An alternative to Calm for Business, Headspace for Work and EAPs">
          <div className="space-y-5">
            <p>
              If you are looking for a{' '}
              <Link to="/blog/do-workplace-wellness-apps-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                Calm for Business alternative or a Headspace for Work alternative
              </Link>
              , a different app is unlikely to change much. What most apps are missing is a live class that people
              join together.
            </p>
            <PullQuote>An app needs each person to open it. A live session has a teacher leading it at a set time.</PullQuote>
          </div>
        </PageSection>

        <PageSection heading="Common questions">
          <GuideFAQ items={faqItems} />
        </PageSection>

        <ClosingCTA
          heading="Start with one pilot session"
          actions={
            <>
              <PillLink to="/demo" variant="light">Book a pilot</PillLink>
              <PillLink to="/pricing" variant="lightOutline">See pricing</PillLink>
            </>
          }
        >
          <p>Book a single pilot session and see how many of your team join.</p>
        </ClosingCTA>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Compare;
