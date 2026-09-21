import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { PageHero, PageSection, ClosingCTA, PillLink, WRAP } from '@/components/PageKit';
import { GuideFAQ, ProseList } from '@/components/GuideLayout';

const faqs: Array<[string, string]> = [
  ['Do people need their cameras on?', 'No. Camera-off is welcome, and I say so at the start of every session.'],
  ['Do we have to choose one type of class?', 'No. Every plan includes all three, meditation, breathing and chair yoga. Your team can settle on one, alternate between them, or mix them week to week, depending on what people need. The plan you choose only sets how often we meet, it does not lock you to a single class.'],
  ['Will people actually attend?', 'That is what a pilot session is for. More people join a live class at a set time than use an app or an EAP, because nobody has to remember to start on their own.'],
  ['What if people join late or miss one?', 'Sessions are built to drop into, and they can be recorded on request, so anyone who misses one can catch up later.'],
  ['We already have an app or an EAP. Why add this?', 'Apps and EAPs are useful, but people have to go to them on their own, and most do not. A live weekly class has a real teacher at a set time, which is why more people take part. It works alongside what you already have.'],
  ['Can you work across time zones?', 'Yes. Sessions run across UK and European hours. Sessions can be recorded on request for everyone else.'],
];

const pilotPrice = '1,490 kr';

const tiers = [
  {
    name: 'Starter', best: 'Two live sessions a month', sessions: '2 per month',
    price: '2,990 kr', priceValue: '2990', per: 'per month', highlight: false,
  },
  {
    name: 'Weekly', best: 'One live session every week', sessions: '4 per month (weekly)',
    price: '4,990 kr', priceValue: '4990', per: 'per month', highlight: true,
  },
  {
    name: 'Enterprise', best: 'Two or more a week, or across time zones', sessions: '8+ per month',
    extra: 'Monthly check-in call with your HR contact',
    price: 'from 8,900 kr', priceValue: '8900', per: 'per month', highlight: false,
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
    {
      '@type': 'Service',
      name: 'Weekly team classes, live wellbeing subscription',
      serviceType: 'Corporate wellbeing sessions for remote and hybrid teams',
      provider: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
      areaServed: 'Worldwide',
      url: 'https://remoteyogacoach.com/pricing',
      offers: [
        {
          '@type': 'Offer',
          name: 'Pilot session',
          price: '1490',
          priceCurrency: 'SEK',
          description: 'A single live session, credited to your first month if you continue.',
          url: 'https://remoteyogacoach.com/pricing',
        },
        ...tiers.map((t) => ({
          '@type': 'Offer',
          name: t.name,
          priceCurrency: 'SEK',
          price: t.priceValue,
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: t.priceValue,
            priceCurrency: 'SEK',
            unitText: 'MONTH',
          },
          description: `${t.best}. Flat monthly fee, on Teams.`,
          url: 'https://remoteyogacoach.com/pricing',
        })),
      ],
    },
  ],
};

const Pricing = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Pricing | Team Wellbeing Subscriptions | Remote Yoga Coach"
        description="Pricing for live team wellbeing classes: a flat monthly fee for your whole team, not a per-person app charge. Three plans and a single pilot session."
        canonical="https://remoteyogacoach.com/pricing"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        <PageHero
          title="Pricing"
          aside={
            <div className="rounded-[20px] border border-sage-light bg-white p-7 md:p-9">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="font-fraunces font-normal text-heading text-[1.7rem] md:text-[2rem] leading-tight">A pilot session</h2>
                <span className="font-fraunces font-normal text-clay text-[1.7rem] md:text-[2rem] leading-tight">{pilotPrice}</span>
              </div>
              <p className="mt-3 text-charcoal/75 leading-relaxed">One live session, so your team can try it before you commit to anything:</p>
              <ProseList
                items={[
                  'A live session, breathing, chair yoga or meditation, your pick',
                  'Runs on Teams',
                  'Recorded on request, to share with anyone who missed it',
                  'No setup, no contract, nothing to sign',
                ]}
              />
              <p className="mt-5 text-charcoal/65 text-[15px] leading-relaxed">
                If you go ahead, the {pilotPrice} is credited to your first month.
              </p>
              <div className="mt-7">
                <PillLink to="/demo">Book a pilot session</PillLink>
              </div>
            </div>
          }
        >
          <p>
            Here is exactly what weekly classes cost: a subscription billed as a flat monthly fee for your whole team, not a per-person app charge.
          </p>
        </PageHero>

        {/* SUBSCRIPTIONS: full width, the three plans side by side */}
        <section data-section className="py-10 md:py-16">
          <div className={WRAP}>
            <div className="border-t border-sage-light pt-10 md:pt-14 md:grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 lg:gap-24">
              <h2 className="font-fraunces font-normal text-heading text-[1.9rem] md:text-[2.3rem] lg:text-[2.6rem] leading-[1.1] tracking-[-0.018em]">Monthly subscriptions</h2>
              <p className="mt-5 md:mt-1 max-w-[620px] text-charcoal/80 text-[17px] md:text-[18px] leading-relaxed">
                Every plan includes all three classes, meditation, breathing and chair yoga, to pick from or mix week
                to week. The plans differ only by how often we meet, not by which class you choose. A flat monthly fee,
                excl. VAT.
              </p>
            </div>

            <div className="mt-10 md:mt-14 grid gap-5 md:grid-cols-3 items-stretch">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={`rounded-[20px] border p-7 md:p-8 flex flex-col h-full ${
                    t.highlight ? 'border-clay border-[1.5px] bg-white' : 'border-sage-light'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-fraunces font-normal text-heading text-[1.6rem]">{t.name}</h3>
                    {t.highlight && <span className="text-clay text-[13px] font-semibold">Most popular</span>}
                  </div>
                  <p className="text-charcoal/65 text-[15px] mt-1">{t.best}</p>
                  <div className="mt-6 mb-6">
                    <p className="font-fraunces font-normal text-heading text-[2.2rem] leading-tight">{t.price}</p>
                    <p className="text-charcoal/60 text-[14px]">{t.per}</p>
                  </div>
                  <ul className="flex-1 border-t border-sage-light text-[15px] text-charcoal/80">
                    <li className="border-b border-sage-light py-3">The same coach every week</li>
                    <li className="border-b border-sage-light py-3">Sessions recorded on request</li>
                    {t.extra && <li className="border-b border-sage-light py-3">{t.extra}</li>}
                  </ul>
                  <div className="mt-7">
                    <PillLink to="/demo" variant={t.highlight ? 'primary' : 'outline'}>
                      {t.name === 'Enterprise' ? 'Talk it through' : 'Book a pilot'}
                    </PillLink>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-charcoal/70 text-[16px]">
              <span className="font-medium text-charcoal">Save with annual billing</span>, pay for the year and get roughly two months free.
            </p>
          </div>
        </section>

        <PageSection heading="How the cost compares with burnout">
          <ProseList
            items={[
              'Poor mental health costs UK employers around 2,646 pounds per affected employee a year, and workplace mental health spend returns about 4.70 pounds for every 1 pound (Deloitte).',
              'A year of weekly classes costs much less than replacing one person who leaves because of burnout.',
            ]}
          />
          <p className="mt-6">
            If you need to explain this internally, I have written a guide:{' '}
            <Link to="/guides/cost-of-employee-burnout" className="text-clay underline underline-offset-4 hover:text-clayDark">
              What employee burnout costs
            </Link>
          </p>
        </PageSection>

        <PageSection heading="What's included in every plan">
          <ProseList
            items={[
              'The same teacher every week',
              'A planned programme that follows a theme from week to week',
              'No equipment or sports clothes needed',
            ]}
          />
        </PageSection>

        <PageSection heading="Common questions">
          <GuideFAQ items={faqs as Array<[string, string]>} />
        </PageSection>

        <ClosingCTA
          heading="Start with one pilot session"
          actions={<PillLink to="/demo" variant="light">Book a pilot</PillLink>}
        >
          <p>One live class, credited to your first month if you continue.</p>
        </ClosingCTA>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Pricing;
