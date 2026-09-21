import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ComparisonTable, Eyebrow } from '@/components/SiteBlocks';
import { GuideFAQ, PullQuote } from '@/components/GuideLayout';

const faqItems: Array<[string, string]> = [
  [
    'We already pay for Headspace or Calm. Why add live sessions?',
    'Apps are good libraries, but they wait for a busy person to start on their own, and usage drops within weeks. A live session removes that first step. Keep the app for between sessions.',
  ],
  [
    'Is this a Calm for Business alternative?',
    'It is the live layer those apps are missing rather than a like-for-like swap: a real person at a set time each week, on Teams, which people actually attend.',
  ],
  [
    'We have an EAP. Is this not the same thing?',
    'No. An EAP is a crisis line, used by 3 to 5 percent of staff after a problem has formed. A live session is preventive, and nobody has to admit anything to join.',
  ],
  [
    'Is this a replacement for our current wellbeing spend?',
    'It does not have to be. You can keep the app and the EAP and add the weekly session as the part that drives participation.',
  ],
  [
    'What about cost? Apps look cheaper per head.',
    'Per licence, yes. Per person who actually benefits, rarely, because most licences go unused.',
  ],
  [
    'App vs live sessions, which do teams actually use?',
    'Live sessions, by a wide margin on real participation. Apps win on library depth and price per licence. The two work best together.',
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
        {/* HERO */}
        <section className="bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="max-w-[820px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <Eyebrow>The honest comparison</Eyebrow>
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Live sessions, wellbeing apps and EAPs compared
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[600px] mx-auto">
              The biggest difference between them is how many people actually use them.
            </p>
          </div>
        </section>

        {/* THE TABLE */}
        <section className="py-16 md:py-20">
          <div className="max-w-[820px] mx-auto px-5 sm:px-6 md:px-8">
            <ComparisonTable
              columns={['Live weekly sessions', 'Wellbeing app', 'EAP']}
              rows={rows as Array<{ label: string; values: Array<boolean | 'partial' | string> }>}
              highlightIndex={0}
            />
            <p className="mt-6 text-center text-charcoal/50 text-sm">
              Take-up figures: EAP 3 to 5% (Personnel Today); app engagement declines within weeks of download.
            </p>
          </div>
        </section>

        {/* WHERE EACH FITS */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <Eyebrow>The point</Eyebrow>
            <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl tracking-[-0.015em] leading-tight">
              Live sessions work alongside apps and EAPs
            </h2>
            <div className="mt-8 space-y-7 text-charcoal/75 text-lg leading-relaxed">
              <div>
                <h3 className="font-fraunces font-normal text-heading text-xl">Wellbeing apps</h3>
                <p className="mt-1.5">The content is often good, but each person has to start on their own, and most stop after a few weeks. An app works well as something to use between live sessions.</p>
              </div>
              <div>
                <h3 className="font-fraunces font-normal text-heading text-xl">Employee assistance programmes (EAPs)</h3>
                <p className="mt-1.5">An EAP is important and worth keeping, but people usually only use it once a problem has already started.</p>
              </div>
              <div>
                <h3 className="font-fraunces font-normal text-heading text-xl">Live sessions</h3>
                <p className="mt-1.5">
                  A real teacher at a fixed time each week, which makes people much more likely to join. See{' '}
                  <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                    how a session runs
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE ALTERNATIVE */}
        <section className="py-16 md:py-20">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <Eyebrow>The alternative you are searching for</Eyebrow>
            <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl tracking-[-0.015em] leading-tight">
              An alternative to Calm for Business, Headspace for Work and EAPs
            </h2>
            <p className="mt-5 text-charcoal/75 text-lg leading-relaxed">
              If you are looking for a{' '}
              <Link to="/blog/do-workplace-wellness-apps-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                Calm for Business alternative or a Headspace for Work alternative
              </Link>
              , you probably don't need a better library. You need the piece those apps leave out.
            </p>
            <PullQuote>An app needs each person to open it. A live session has a teacher leading it at a set time.</PullQuote>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl tracking-[-0.015em] leading-tight">Common questions</h2>
            <GuideFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream-soft-b py-24 md:py-28">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <h2 className="font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight">
              Start with one pilot session
            </h2>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              Book a single pilot session and see how many of your team join.
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
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Compare;
