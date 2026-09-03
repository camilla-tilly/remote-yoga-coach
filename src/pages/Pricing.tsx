import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Reveal, GlowField, Eyebrow } from '@/components/SiteBlocks';
import { GuideFAQ, ProseList } from '@/components/GuideLayout';

const faqs: Array<[string, string]> = [
  ['Do people need their cameras on?', 'No. Camera-off is welcome, and I say so at the start of every session.'],
  ['Do we have to choose one type of class?', 'No. Every plan includes all three, meditation, breathing and chair yoga. Your team can settle on one, alternate between them, or mix them week to week, depending on what people need. The plan you choose only sets how often we meet, it does not lock you to a single class.'],
  ['Will people actually attend?', 'That is what a pilot session is for. Live, scheduled sessions out-attend apps and EAPs, because the hardest part, starting, is already done, and once it is a weekly habit you see the numbers in your reporting.'],
  ['What if people join late or miss one?', 'Sessions are built to drop into, and every one is recorded, so anyone can catch up or join from another time zone.'],
  ['We already have an app or an EAP. Why add this?', 'Those are libraries and crisis lines: useful, but passive. The Weekly Reset is the live, weekly layer with a real person, which is what actually drives participation. It complements what you have.'],
  ['How do you measure it?', 'Attendance and repeat attendance, tracked automatically. You get a simple summary.'],
  ['Can you work across time zones?', 'Yes. Sessions run across UK and European hours, with Australian hours for part of the year, plus recordings for everyone else.'],
];

const pilotPrice = '1,490 kr';

const tiers = [
  {
    name: 'Starter', best: 'Two live sessions a month', sessions: '2 per month',
    reporting: 'Quarterly',
    price: '2,990 kr', priceValue: '2990', per: 'per month', highlight: false,
  },
  {
    name: 'Weekly', best: 'One live session every week', sessions: '4 per month (weekly)',
    reporting: 'Quarterly',
    price: '4,990 kr', priceValue: '4990', per: 'per month', highlight: true,
  },
  {
    name: 'Enterprise', best: 'Two or more a week, or across time zones', sessions: '8+ per month',
    reporting: 'Quarterly',
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
      name: 'The Weekly Reset, live team wellbeing subscription',
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
          description: 'A single 30-minute live session, credited to your first month if you continue.',
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
          description: `${t.best}. Flat monthly fee, on Teams or Zoom.`,
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
        description="Simple, transparent pricing for corporate wellbeing: a flat monthly fee for your whole team, not a per-person app charge. Three tiers plus a single pilot session."
        canonical="https://remoteyogacoach.com/pricing"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
          <GlowField tone="warm" />
          <div className="relative max-w-[680px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Simple, transparent pricing.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[560px] mx-auto">
              Here is exactly what The Weekly Reset costs. A corporate wellbeing subscription billed as a flat monthly fee for your whole team, not a per-person app charge.
            </p>
          </div>
        </section>

        {/* THE PILOT */}
        <section className="pt-14 pb-8">
          <div className="max-w-[720px] mx-auto px-5 sm:px-6 md:px-8">
            <Reveal>
              <div className="relative overflow-hidden bg-cream border border-sage-light rounded-2xl p-8 md:p-10">
                <GlowField tone="warm" />
                <div className="relative">
                  <span className="inline-block font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay mb-4">Start here</span>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h2 className="font-fraunces font-normal text-2xl md:text-3xl">A pilot session</h2>
                    <span className="font-fraunces font-normal text-2xl md:text-3xl text-clay">{pilotPrice}</span>
                  </div>
                  <p className="mt-4 text-charcoal/75 leading-relaxed">One 30-minute live session, so your team can try it before you commit to anything:</p>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      'A live 30-minute session, breathing, chair yoga or meditation, your pick',
                      'Runs on Teams or Zoom, camera optional',
                      'The recording afterwards, to share with anyone who missed it',
                      'No setup, no contract, nothing to sign',
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-charcoal/85 text-[15px]">
                        <Check className="text-clay shrink-0 mt-0.5" size={17} strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-charcoal/65 text-sm leading-relaxed">
                    If you go ahead, the {pilotPrice} is credited to your first month.
                  </p>
                  <div className="mt-7">
                    <Link to="/demo">
                      <Button className="bg-clay hover:bg-clayDark text-white font-medium text-[15px] rounded-full px-8 py-6">
                        Book a pilot session
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SUBSCRIPTIONS */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1040px] mx-auto px-5 sm:px-6 md:px-8">
            <div className="text-center max-w-[620px] mx-auto">
              <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl tracking-[-0.015em] leading-tight">Monthly subscriptions</h2>
              <p className="mt-4 text-charcoal/70 leading-relaxed">
                Every plan includes all three classes, meditation, breathing and chair yoga, to pick from or mix week
                to week. The plans differ only by how often we meet, not by which class you choose. A flat monthly fee,
                excl. VAT.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
              {tiers.map((t, i) => (
                <Reveal key={t.name} delay={i * 80} className="h-full">
                  <div
                    className={`rounded-2xl border p-7 flex flex-col h-full ${
                      t.highlight ? 'border-clay bg-cream relative' : 'border-sage-light bg-white'
                    }`}
                  >
                    {t.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-clay text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                        Most popular
                      </span>
                    )}
                    <h3 className="font-fraunces font-normal text-heading text-2xl">{t.name}</h3>
                    <p className="text-charcoal/60 text-sm mt-1">{t.best}</p>
                    <div className="mt-5 mb-6">
                      <p className="font-fraunces font-normal text-heading text-2xl leading-tight">{t.price}</p>
                      <p className="text-charcoal/60 text-sm">{t.per}</p>
                    </div>
                    <ul className="space-y-3 text-[15px] text-charcoal/80 flex-1">
                      <li className="flex gap-2.5"><Check className="text-clay shrink-0 mt-0.5" size={16} strokeWidth={2.5} /><span>The same coach every week</span></li>
                      <li className="flex gap-2.5"><Check className="text-clay shrink-0 mt-0.5" size={16} strokeWidth={2.5} /><span>All sessions recorded</span></li>
                      <li className="flex gap-2.5"><Check className="text-clay shrink-0 mt-0.5" size={16} strokeWidth={2.5} /><span>{t.reporting} attendance reporting</span></li>
                    </ul>
                    <div className="mt-7">
                      <Link to="/demo">
                        <Button className={`w-full font-medium text-[15px] rounded-full py-6 ${
                          t.highlight ? 'bg-clay hover:bg-clayDark text-white' : 'bg-white border border-sage text-charcoal hover:bg-sage-light/40'
                        }`}>
                          {t.name === 'Enterprise' ? 'Talk it through' : 'Book a pilot'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-8 text-center text-charcoal/70">
              <span className="font-medium text-charcoal">Save with annual billing</span>, pay for the year and get roughly two months free.
            </p>
          </div>
        </section>

        {/* ROI CONTEXT */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <Eyebrow>Put it in context</Eyebrow>
            <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl tracking-[-0.015em] leading-tight">
              Cheaper than the problem it prevents
            </h2>
            <ProseList
              items={[
                'Poor mental health costs UK employers around 2,646 pounds per affected employee a year, and workplace mental health spend returns about 4.70 pounds for every 1 pound (Deloitte).',
                'A year of these sessions costs a fraction of a single burnout resignation.',
              ]}
            />
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              If you need to make that case internally, I wrote it up for you.
            </p>
            <p className="mt-6">
              <Link to="/guides/cost-of-employee-burnout" className="inline-flex items-center gap-1.5 text-clay hover:text-clayDark font-medium text-[15px]">
                What employee burnout costs <ArrowRight size={15} />
              </Link>
            </p>
          </div>
        </section>

        {/* INCLUDED EVERYWHERE */}
        <section className="py-16 md:py-20">
          <div className="max-w-[720px] mx-auto px-5 sm:px-6 md:px-8">
            <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl tracking-[-0.015em] leading-tight">What's included in every tier</h2>
            <ul className="mt-6 space-y-3">
              {[
                'The same named coach every week, continuity is the whole point',
                'A structured programme that moves through themes, not random one-off classes',
                'Camera-off permission, no equipment, no activewear',
                'Honest reporting you can show your leadership',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-charcoal/80 text-[16px] leading-relaxed">
                  <Check className="text-clay shrink-0 mt-1" size={17} strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-16 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl tracking-[-0.015em] leading-tight text-center">Questions HR asks</h2>
            <GuideFAQ items={faqs as Array<[string, string]>} />
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-cream-soft-b py-24 md:py-28">
          <GlowField tone="sage" />
          <div className="relative max-w-[680px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <h2 className="font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight">See it before you commit</h2>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              Start with a single pilot session: one live class, credited to your first month if you continue.
            </p>
            <div className="mt-9">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-medium text-[15px] rounded-full px-8 py-6">
                  Book a pilot
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-charcoal/50 text-sm">Pricing is v1 and may be refined after our first buyer conversations.</p>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Pricing;
