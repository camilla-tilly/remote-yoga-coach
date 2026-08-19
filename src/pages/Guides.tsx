import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Reveal, GlowField, Eyebrow } from '@/components/SiteBlocks';

const guides = [
  {
    to: '/guides/cost-of-employee-burnout',
    kicker: 'The business case',
    title: 'What employee burnout costs, and the ROI of fixing it',
    description:
      'The real cost of burnout to an employer, why most of it is invisible, the documented return on wellbeing spend, and how to build the case for your budget-holder.',
    read: '8 min',
  },
  {
    to: '/guides/remote-work-burnout',
    kicker: 'For managers and HR',
    title: 'Remote work burnout: signs, causes and prevention',
    description:
      'Why distributed teams burn out quietly, the warning signs you can spot from a distance, what it costs, and the prevention that actually holds up.',
    read: '9 min',
  },
  {
    to: '/guides/mindfulness-at-work',
    kicker: 'Does it work',
    title: 'Mindfulness at work: does it work for teams?',
    description:
      'What workplace mindfulness really is, what the evidence shows, and how to run meditation and breathing as a team habit rather than an app nobody opens.',
    read: '9 min',
  },
  {
    to: '/guides/desk-yoga',
    kicker: 'The practice',
    title: 'Desk yoga and chair yoga at work',
    description:
      'Why office bodies ache, the seated movements that help, a five-minute routine between calls, and how to make it a habit a whole team keeps.',
    read: '7 min',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Guides for HR and people leaders',
      description:
        'Plain-English guides on distributed-team wellbeing: the cost of burnout and its ROI, remote burnout prevention, workplace mindfulness, and desk yoga.',
      url: 'https://remoteyogacoach.com/guides',
      hasPart: guides.map((g) => ({ '@type': 'Article', headline: g.title, url: `https://remoteyogacoach.com${g.to}` })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://remoteyogacoach.com/' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://remoteyogacoach.com/guides' },
      ],
    },
  ],
};

const Guides = () => {
  const [lead, ...rest] = guides;

  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Wellbeing Guides for HR and People Leaders | Remote Yoga Coach"
        description="Plain-English guides on distributed-team wellbeing: the cost of burnout and its ROI, remote burnout prevention, workplace mindfulness, and desk yoga for office workers."
        canonical="https://remoteyogacoach.com/guides"
        ogImage="https://remoteyogacoach.com/og/guides.png"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
          <GlowField tone="warm" />
          <div className="relative max-w-[820px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <Eyebrow>Guides</Eyebrow>
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Everything you need to make the case for team wellbeing
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[640px] mx-auto">
              Plain-English guides for the person who has to sell this internally, from the hard cost of burnout to
              whether workplace mindfulness actually works. Written for HR, people leaders and anyone building the
              business case.
            </p>
          </div>
        </section>

        {/* LEAD GUIDE */}
        <section className="px-5 pt-14">
          <div className="max-w-[900px] mx-auto">
            <Link
              to={lead.to}
              className="group block rounded-[24px] bg-cream border border-sage-light hover:border-clay p-9 md:p-12 relative overflow-hidden"
            >
              <GlowField tone="warm" />
              <div className="relative">
                <span className="inline-block font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay mb-4">{lead.kicker}</span>
                <h2 className="font-fraunces font-normal text-2xl md:text-4xl leading-tight max-w-[600px] group-hover:text-clay transition-colors">
                  {lead.title}
                </h2>
                <p className="mt-5 text-charcoal/70 text-lg leading-relaxed max-w-[560px]">{lead.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-clay font-medium text-[15px]">
                  Read the guide <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* REST */}
        <section className="px-5 py-14 md:py-16">
          <div className="max-w-[900px] mx-auto grid gap-6 md:grid-cols-3">
            {rest.map((g, i) => (
              <Reveal key={g.to} delay={i * 80}>
                <Link
                  to={g.to}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-sage-light hover:border-clay/60 p-7 transition-colors"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-sage mb-3">{g.kicker}</span>
                  <h3 className="font-fraunces font-normal text-heading text-xl leading-snug group-hover:text-clay transition-colors">
                    {g.title}
                  </h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed mt-3 flex-1">{g.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-clay text-xs font-semibold uppercase tracking-wider">
                    Read <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl tracking-[-0.015em] leading-tight">
              Ready to see it with your own team?
            </h2>
            <p className="mt-5 text-charcoal/75 text-lg leading-relaxed">
              Every guide points the same way: a live weekly habit, measured honestly. Start with a single pilot session.
            </p>
            <div className="mt-8">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-clay hover:bg-clayDark text-white font-medium text-[15px] rounded-full px-8 py-4 transition-colors"
              >
                Book a pilot <ArrowRight size={16} />
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

export default Guides;
