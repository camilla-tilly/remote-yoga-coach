import { Link } from 'react-router-dom';
import { CalendarCheck, Video, LineChart, ArrowRight, Leaf, Repeat, Sun } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Reveal, GlowField, ComparisonTable, CoachPhoto, Testimonials } from '@/components/SiteBlocks';

/**
 * SoftLabel — a calmer replacement for the shared uppercase Eyebrow on the
 * landing page. Sentence case, gentle tracking, lighter weight: it whispers a
 * section label instead of shouting it. Kept local to the home page so the
 * quieter treatment doesn't ripple into the shared component.
 */
const SoftLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-[13px] font-medium tracking-[0.02em] text-sage mb-4">
    {children}
  </span>
);

/**
 * BreatheMark — a faint, hand-drawn "breathing rings" motif: concentric arcs
 * rising like a slow dawn. A soft place for the eye to rest above the hero
 * headline. Purely decorative; uses currentColor so it follows the palette.
 */
const BreatheMark = ({ className = '' }: { className?: string }) => (
  <svg
    width="76"
    height="42"
    viewBox="0 0 76 42"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    {[34, 26, 18, 10].map((r, i) => (
      <path
        key={r}
        d={`M ${38 - r} 40 A ${r} ${r} 0 0 1 ${38 + r} 40`}
        stroke="currentColor"
        strokeOpacity={0.2 + i * 0.14}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    ))}
    <circle cx="38" cy="40" r="3.5" fill="currentColor" fillOpacity="0.9" />
  </svg>
);

const faqs: Array<[string, string]> = [
  ['Who is this actually for?', 'People and culture leaders, team leads and founders at remote-first and hybrid companies, roughly 10 to 100 people, who want a wellbeing habit the whole team keeps rather than another perk that lands flat.'],
  ['We already have a wellbeing app. Why add this?', 'Apps are libraries: useful, but passive, and usage drops within weeks. A live weekly session with a real coach is the layer that drives participation. It complements the app rather than replacing it.'],
  ['Will people actually show up?', 'That is exactly what the pilot proves. A scheduled live session out-attends passive tools because the hardest part, starting on your own, is already done. You see your real numbers in the report.'],
  ['How do you prove it is working?', 'Every programme reports attendance, repeat attendance and a short wellbeing check before and after. At the end of the pilot you get a one-page summary you can take to your budget-holder.'],
  ['What does it cost?', 'A flat monthly fee by team size, not a per-person app charge, and every engagement starts with a four-week paid pilot credited to your first month. Full pricing is public.'],
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Corporate wellbeing sessions for distributed teams',
      name: 'The Weekly Reset',
      provider: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
      areaServed: ['GB', 'EU', 'AU'],
      description: 'Live 30-minute breathing, meditation and chair-yoga sessions for remote and hybrid teams, delivered on Teams, with attendance and wellbeing reporting.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ],
};

// Real client quotes go here once the first pilots wrap. Until then this
// array stays empty and the testimonials section renders nothing (no
// placeholder quotes ever ship). Shape:
//   { quote: 'A specific result and how it felt.', name: 'Jane Doe', role: 'Head of People, Acme', photo: '/testimonials/jane.jpg' }
const testimonials: Array<{ quote: string; name: string; role?: string; photo?: string }> = [];

const benefits = [
  { icon: Leaf, title: 'Calmer, clearer heads', text: 'A short weekly reset clears the mental clutter, so people come back present and focused, not frazzled.' },
  { icon: Repeat, title: 'A habit that sticks', text: 'Live and scheduled, with the same coach each week, it becomes the thirty minutes the team looks forward to.' },
  { icon: Sun, title: 'Energy through the week', text: 'Less screen fatigue and afternoon slump, and a little more left in the tank by Friday.' },
];

const steps = [
  { icon: CalendarCheck, title: 'Start with a pilot', text: 'A four-week trial, credited to your first month if you continue.' },
  { icon: Video, title: 'I set a weekly slot', text: 'Same time, same coach, one link. I run it, your team just shows up.' },
  { icon: LineChart, title: 'You see it working', text: 'Simple reporting on attendance and how people feel, before and after.' },
];

const comparisonRows = [
  { label: 'A real human, every week', values: [true, false, false] as const },
  { label: 'Builds a shared team habit', values: [true, false, false] as const },
  { label: 'Preventive, not only crisis', values: [true, 'partial', false] as const },
  { label: 'Reaches the whole team', values: [true, 'partial', 'partial'] as const },
  { label: 'Measurable attendance + wellbeing', values: [true, false, false] as const },
  { label: 'Typical take-up', values: ['High, live', 'Drops fast', '3 to 5%'] as const },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Corporate Wellbeing for Remote Teams | Remote Yoga Coach"
        description="Live wellbeing sessions your distributed team actually attends, and you can measure. Breathing, meditation and chair yoga on Teams for HR and people leaders. Get in touch."
        canonical="https://remoteyogacoach.com"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-cream-soft pt-40 pb-28 md:pt-48 md:pb-36">
          <GlowField tone="warm" />
          <div className="relative max-w-[820px] mx-auto px-5 text-center">
            <Logo size={58} className="mx-auto mb-7" aria-hidden={true} />
            <span className="inline-block text-[13px] font-medium tracking-[0.06em] text-sage mb-6">
              The Weekly Reset
            </span>
            <h1
              className="font-fraunces font-normal text-heading text-[2.4rem] md:text-[3.4rem] leading-[1.12] tracking-[-0.01em]"
              style={{ fontVariationSettings: '"SOFT" 40, "opsz" 144' }}
            >
              The wellbeing habit your team actually keeps.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-[560px] mx-auto">
              Live breathing, meditation and chair-yoga sessions your whole team actually turns up for. On Teams,
              camera optional, with the reporting to prove it works, not another app nobody opens.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-medium text-[15px] tracking-normal rounded-full px-8 py-6">
                  Get in touch
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-sage text-charcoal hover:bg-sage-light/40 font-medium text-[15px] tracking-normal rounded-full px-8 py-6">
                  See pricing
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-charcoal/50 text-sm">
              Live across UK, European and Australian time zones. Every session recorded.
            </p>
          </div>
        </section>

        {/* WHY IT HELPS — soft, benefit-led */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1000px] mx-auto px-5">
            <div className="text-center max-w-[560px] mx-auto">
              <SoftLabel>Why it helps</SoftLabel>
              <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl leading-[1.15]" style={{ fontVariationSettings: '"SOFT" 40' }}>
                A calmer team, a sharper week
              </h2>
              <p className="mt-5 text-charcoal/70 text-lg leading-relaxed">
                Thirty minutes together, once a week. Camera optional, one link to join. Small enough to keep, big
                enough to feel by Friday.
              </p>
            </div>

            <div className="mt-16 grid gap-10 sm:grid-cols-3">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 90} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mx-auto">
                    <b.icon className="text-clay" size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-fraunces font-medium text-heading text-xl mt-5">{b.title}</h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed mt-2">{b.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON — the 'we already have an app / EAP' objection */}
        <section className="bg-cream py-24 md:py-32">
          <div className="max-w-[900px] mx-auto px-5">
            <div className="text-center max-w-[620px] mx-auto mb-12">
              <SoftLabel>Where it fits</SoftLabel>
              <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl leading-[1.15]" style={{ fontVariationSettings: '"SOFT" 40' }}>
                Not another app. The layer they were missing.
              </h2>
              <p className="mt-5 text-charcoal/70 text-lg leading-relaxed">
                Apps and EAPs are libraries and crisis lines. Useful, but passive. A live weekly session is the human,
                habit-forming layer that makes the rest get used.
              </p>
            </div>
            <Reveal>
              <ComparisonTable
                columns={['Live weekly sessions', 'Wellbeing app', 'EAP']}
                rows={comparisonRows as unknown as Array<{ label: string; values: Array<boolean | 'partial' | string> }>}
                highlightIndex={0}
              />
            </Reveal>
            <p className="mt-8 text-center">
              <Link to="/compare" className="inline-flex items-center gap-1.5 text-clay hover:text-clayDark font-medium text-[15px]">
                See the full comparison <ArrowRight size={15} />
              </Link>
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1000px] mx-auto px-5">
            <div className="text-center">
              <SoftLabel>Getting started</SoftLabel>
              <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl leading-[1.15]" style={{ fontVariationSettings: '"SOFT" 40' }}>
                One link to run. Zero admin for you.
              </h2>
            </div>
            <div className="mt-16 grid gap-10 sm:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 90} className="text-center">
                  <span className="text-sm font-medium text-clay/80 tracking-[0.05em]">0{i + 1}</span>
                  <s.icon className="text-sage mt-4 mx-auto" size={28} strokeWidth={1.5} />
                  <h3 className="font-fraunces font-medium text-heading text-xl mt-4">{s.title}</h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed mt-2">{s.text}</p>
                </Reveal>
              ))}
            </div>
            <p className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3">
              <Link to="/services/team-wellness" className="text-clay hover:text-clayDark font-medium text-[15px]">
                See how a session runs →
              </Link>
              <Link to="/services/chair-yoga-for-teams" className="text-clay hover:text-clayDark font-medium text-[15px]">
                Chair yoga for teams →
              </Link>
            </p>
          </div>
        </section>

        {/* MEET YOUR COACH */}
        <section className="bg-cream py-20 md:py-28">
          <div className="max-w-[1000px] mx-auto px-5 grid gap-10 md:gap-14 md:grid-cols-[minmax(0,300px)_1fr] items-center">
            <CoachPhoto
              src="/coach-camilla.jpg"
              alt="Camilla, a certified yoga teacher for remote teams"
              className="w-full max-w-[300px] mx-auto md:mx-0"
            />
            <div>
              <SoftLabel>Meet your coach</SoftLabel>
              <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl leading-[1.15]" style={{ fontVariationSettings: '"SOFT" 40' }}>
                One familiar face, every week
              </h2>
              <div className="mt-5 space-y-4 text-charcoal/75 text-lg leading-relaxed">
                <p>
                  I'm Camilla, a certified yoga teacher with 500 hours of training, in physical movement, breathing
                  techniques and meditation. I run every session myself, the same familiar face each week, because
                  the relationship is what makes people actually show up.
                </p>
                <p>
                  Before teaching full time I worked across a 10,000-person multinational company, a startup, a
                  consultancy and in government, so the sessions are built around real office life.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {[
                  '500 hours of yoga training',
                  'Movement, breathing and meditation',
                  'Live on Teams and Zoom',
                  'UK, EU and AU hours',
                ].map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-2 rounded-full border border-sage-light bg-white px-3.5 py-1.5 text-[13px] font-medium text-charcoal/75"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-clay" aria-hidden="true" />
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-7">
                <Link to="/about" className="inline-flex items-center gap-1.5 text-clay hover:text-clayDark font-medium text-[15px]">
                  More about how I work <ArrowRight size={15} />
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* BUILD THE CASE — resources teaser */}
        <section className="py-20 md:py-24">
          <div className="max-w-[900px] mx-auto px-5">
            <div className="max-w-[620px]">
              <SoftLabel>Build the case</SoftLabel>
              <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl leading-[1.15]" style={{ fontVariationSettings: '"SOFT" 40' }}>
                Everything you need to take it to leadership
              </h2>
              <p className="mt-5 text-charcoal/70 text-lg leading-relaxed">
                Plain-English guides for the person who has to make the internal case, from the cost of burnout to
                whether workplace mindfulness actually works.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { to: '/guides/cost-of-employee-burnout', label: 'What burnout costs', text: 'The numbers and the ROI, for your budget-holder.' },
                { to: '/guides/remote-work-burnout', label: 'Remote work burnout', text: 'Spot it across a distributed team before it costs you someone.' },
                { to: '/guides/mindfulness-at-work', label: 'Mindfulness at work', text: 'Does it work for a team, and how to run it as a habit.' },
              ].map((g, i) => (
                <Reveal key={g.to} delay={i * 80}>
                  <Link
                    to={g.to}
                    className="group block h-full bg-white rounded-2xl border border-sage-light hover:border-clay/60 p-6 transition-colors"
                  >
                    <p className="font-inter text-[11px] tracking-[0.1em] text-sage font-semibold mb-3">Guide</p>
                    <h3 className="font-fraunces font-medium text-heading text-xl leading-snug group-hover:text-clay transition-colors">{g.label}</h3>
                    <p className="text-charcoal/70 text-[15px] leading-relaxed mt-2">{g.text}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-clay text-[13px] font-medium">
                      Read <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <p className="mt-8">
              <Link to="/guides" className="inline-flex items-center gap-1.5 text-clay hover:text-clayDark font-medium text-[15px]">
                All guides <ArrowRight size={15} />
              </Link>
            </p>
          </div>
        </section>

        {/* TESTIMONIALS — hidden until real quotes exist */}
        <Testimonials items={testimonials} />

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="max-w-[760px] mx-auto px-5">
            <div className="text-center mb-12">
              <SoftLabel>Questions HR asks</SoftLabel>
              <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl leading-[1.15]" style={{ fontVariationSettings: '"SOFT" 40' }}>Before you book</h2>
            </div>
            <dl className="divide-y divide-sage-light/60">
              {faqs.map(([q, a]) => (
                <div key={q} className="py-7">
                  <dt className="font-fraunces font-medium text-heading text-lg leading-snug">{q}</dt>
                  <dd className="mt-2.5 text-charcoal/75 text-[16px] leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-cream-soft-b py-28 md:py-36">
          <GlowField tone="sage" />
          <div className="relative max-w-[680px] mx-auto px-5 text-center">
            <BreatheMark className="mx-auto mb-6 text-clay" />
            <h2 className="font-fraunces font-normal text-heading text-3xl md:text-5xl leading-[1.12]" style={{ fontVariationSettings: '"SOFT" 40, "opsz" 144' }}>
              Give your team a reset
            </h2>
            <p className="mt-6 text-charcoal/70 text-lg leading-relaxed max-w-[480px] mx-auto">
              Tell me about your team and I'll help you work out what fits, whether that's a conversation first or a
              four-week pilot when you're ready.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-medium text-[15px] tracking-normal rounded-full px-8 py-6">
                  Get in touch
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-sage text-charcoal hover:bg-sage-light/40 font-medium text-[15px] tracking-normal rounded-full px-8 py-6">
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

export default Index;
