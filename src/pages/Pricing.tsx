import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Minus, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Reveal, GlowField, Eyebrow } from '@/components/SiteBlocks';

const faqs: Array<[string, string]> = [
  ['Do people need their cameras on?', 'No. Camera-off is welcome, and we say so at the start of every session.'],
  ['Will people actually attend?', 'That is what the pilot is for. Live, scheduled sessions out-attend apps and EAPs, because the hardest part, starting, is already done. You see the real numbers in your report.'],
  ['What if people join late or miss one?', 'Sessions are built to drop into, and every one is recorded, so anyone can catch up or join from another time zone.'],
  ['We already have an app or an EAP. Why add this?', 'Those are libraries and crisis lines: useful, but passive. The Weekly Reset is the live, weekly layer with a real person, which is what actually drives participation. It complements what you have.'],
  ['How do you measure it?', 'Attendance and repeat attendance, tracked automatically, plus a short wellbeing check at the start and end. You get a one-page summary.'],
  ['Can you work across time zones?', 'Yes. Sessions run across UK and European hours, with Australian hours for part of the year, plus recordings for everyone else.'],
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const pilotPrice = { GBP: '£249', EUR: '€289' };

const tiers = [
  {
    name: 'Starter', best: 'Small teams up to 25', sessions: '2 per month',
    workshop: false, reporting: 'Quarterly', tz: 'Single slot',
    price: { GBP: '£329', EUR: '€379' }, per: 'per month', highlight: false,
  },
  {
    name: 'Growth', best: 'Teams up to 50', sessions: '4 per month (weekly)',
    workshop: true, reporting: 'Quarterly', tz: 'Flexible',
    price: { GBP: '£549', EUR: '€639' }, per: 'per month', highlight: true,
  },
  {
    name: 'Enterprise', best: '50+ / multi-timezone', sessions: '4+ per month',
    workshop: true, reporting: 'Monthly + multi-team', tz: 'Multiple slots',
    price: { GBP: 'from £899', EUR: 'from €1,049' }, per: 'per month', highlight: false,
  },
];

const Pricing = () => {
  const [currency, setCurrency] = useState<'GBP' | 'EUR'>('GBP');

  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Pricing | Team Wellbeing Subscriptions | Remote Yoga Coach"
        description="Simple, transparent pricing for corporate wellbeing. A flat monthly fee for your whole team, not a per-person app charge. Starter, Growth and Enterprise tiers, plus a 4-week paid pilot."
        canonical="https://remoteyogacoach.com/pricing"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
          <GlowField tone="warm" />
          <div className="relative max-w-[760px] mx-auto px-5 text-center">
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="font-fraunces font-semibold text-heading text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Simple, transparent pricing. No "request a quote" runaround.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[560px] mx-auto">
              Here is exactly what The Weekly Reset costs. A flat monthly fee for your whole team, not a per-person app charge.
            </p>
            <div className="mt-8 inline-flex items-center rounded-full border border-sage-light bg-white p-1">
              {(['GBP', 'EUR'] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCurrency(c)}
                  aria-pressed={currency === c}
                  className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition ${
                    currency === c ? 'bg-clay text-white' : 'text-charcoal/60 hover:text-charcoal'
                  }`}
                >
                  {c === 'GBP' ? '£ GBP' : '€ EUR'}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* THE PILOT */}
        <section className="pt-14 pb-8">
          <div className="max-w-[720px] mx-auto px-5">
            <Reveal>
              <div className="relative overflow-hidden bg-charcoal text-white rounded-2xl p-8 md:p-10">
                <GlowField tone="warm" />
                <div className="relative">
                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-clayLight mb-4">Start here</span>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h2 className="font-fraunces font-semibold text-2xl md:text-3xl">The 4-Week Pilot</h2>
                    <span className="font-fraunces font-semibold text-2xl md:text-3xl text-clayLight">{pilotPrice[currency]}</span>
                  </div>
                  <p className="mt-4 text-white/80 leading-relaxed">One complete four-week programme, so you can see it work before you commit:</p>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      '4 weekly live sessions (30 minutes, breathing + chair yoga + meditation)',
                      'Every session recorded',
                      'A one-page report at the end: attendance, engagement, and before/after wellbeing',
                      'A ready-to-send kickoff message for your team',
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-white/90 text-[15px]">
                        <Check className="text-clayLight shrink-0 mt-0.5" size={17} strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-white/70 text-sm leading-relaxed">
                    If you continue within 14 days, the {pilotPrice[currency]} is credited to your first month. Up to 50 participants.
                  </p>
                  <div className="mt-7">
                    <Link to="/demo">
                      <Button className="bg-clay hover:bg-clayDark text-white font-semibold uppercase text-sm tracking-wider rounded-md px-8 py-6">
                        Book your pilot
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
          <div className="max-w-[1040px] mx-auto px-5">
            <div className="text-center max-w-[620px] mx-auto">
              <h2 className="font-fraunces font-semibold text-heading text-2xl md:text-3xl leading-tight">Monthly subscriptions</h2>
              <p className="mt-4 text-charcoal/70 leading-relaxed">
                A flat monthly fee, priced per team not per person. Cancel or change tier any time.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
              {tiers.map((t, i) => (
                <Reveal key={t.name} delay={i * 80} className="h-full">
                  <div
                    className={`rounded-2xl border p-7 flex flex-col h-full ${
                      t.highlight ? 'border-clay bg-cream shadow-card relative' : 'border-sage-light bg-white'
                    }`}
                  >
                    {t.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-clay text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                        Most popular
                      </span>
                    )}
                    <h3 className="font-fraunces font-semibold text-heading text-2xl">{t.name}</h3>
                    <p className="text-charcoal/60 text-sm mt-1">{t.best}</p>
                    <div className="mt-5 mb-6">
                      <p className="font-fraunces font-semibold text-heading text-2xl leading-tight">{t.price[currency]}</p>
                      <p className="text-charcoal/60 text-sm">{t.per}</p>
                    </div>
                    <ul className="space-y-3 text-[15px] text-charcoal/80 flex-1">
                      <li className="flex gap-2.5"><Check className="text-clay shrink-0 mt-0.5" size={16} strokeWidth={2.5} /><span>{t.sessions} live sessions</span></li>
                      <li className="flex gap-2.5"><Check className="text-clay shrink-0 mt-0.5" size={16} strokeWidth={2.5} /><span>All sessions recorded</span></li>
                      <li className="flex gap-2.5">
                        {t.workshop
                          ? <Check className="text-clay shrink-0 mt-0.5" size={16} strokeWidth={2.5} />
                          : <Minus className="text-charcoal/30 shrink-0 mt-0.5" size={16} strokeWidth={2.5} />}
                        <span>Quarterly themed workshop</span>
                      </li>
                      <li className="flex gap-2.5"><Check className="text-clay shrink-0 mt-0.5" size={16} strokeWidth={2.5} /><span>{t.reporting} wellbeing reporting</span></li>
                      <li className="flex gap-2.5"><Check className="text-clay shrink-0 mt-0.5" size={16} strokeWidth={2.5} /><span>{t.tz} time-zone scheduling</span></li>
                    </ul>
                    <div className="mt-7">
                      <Link to="/demo">
                        <Button className={`w-full font-semibold uppercase text-sm tracking-wider rounded-md py-6 ${
                          t.highlight ? 'bg-clay hover:bg-clayDark text-white' : 'bg-white border border-sage text-charcoal hover:bg-sage-light/40'
                        }`}>
                          {t.name === 'Enterprise' ? 'Talk about Enterprise' : 'Book a pilot'}
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
          <div className="max-w-[760px] mx-auto px-5">
            <Eyebrow>Put it in context</Eyebrow>
            <h2 className="font-fraunces font-semibold text-heading text-2xl md:text-3xl leading-tight">
              Cheaper than the problem it prevents
            </h2>
            <p className="mt-5 text-charcoal/75 text-lg leading-relaxed">
              Poor mental health costs UK employers around 2,646 pounds per affected employee a year, and workplace
              mental health spend returns about 4.70 pounds for every 1 pound (Deloitte). A year of these sessions
              costs a fraction of a single burnout resignation. If you need to make that case internally, we wrote it
              up for you.
            </p>
            <p className="mt-6">
              <Link to="/guides/cost-of-employee-burnout" className="inline-flex items-center gap-1.5 text-clay hover:text-clayDark font-semibold uppercase text-sm tracking-wider">
                What employee burnout costs <ArrowRight size={15} />
              </Link>
            </p>
          </div>
        </section>

        {/* INCLUDED EVERYWHERE */}
        <section className="py-16 md:py-20">
          <div className="max-w-[720px] mx-auto px-5">
            <h2 className="font-fraunces font-semibold text-heading text-2xl md:text-3xl leading-tight">What's included in every tier</h2>
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
          <div className="max-w-[760px] mx-auto px-5">
            <h2 className="font-fraunces font-semibold text-heading text-2xl md:text-3xl leading-tight text-center">Questions HR asks</h2>
            <dl className="mt-10 space-y-8">
              {faqs.map(([q, a]) => (
                <div key={q} className="border-b border-sage-light pb-7">
                  <dt className="font-fraunces font-semibold text-heading text-lg">{q}</dt>
                  <dd className="mt-2 text-charcoal/75 leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-cream-soft-b py-24 md:py-28">
          <GlowField tone="sage" />
          <div className="relative max-w-[680px] mx-auto px-5 text-center">
            <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-4xl leading-tight">See it before you commit</h2>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              Start with the four-week pilot: one full programme ending in a one-page report, credited to your first
              month if you continue.
            </p>
            <div className="mt-9">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-semibold uppercase text-sm tracking-wider rounded-md px-8 py-6">
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
