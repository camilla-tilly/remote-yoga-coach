import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Reveal, GlowField, StatBand, Eyebrow } from '@/components/SiteBlocks';
import { GuideFAQ } from '@/components/GuideLayout';

const faqItems: Array<[string, string]> = [
  [
    'What is corporate wellbeing for a remote team?',
    'A structured wellbeing programme delivered live and online to a distributed workforce, rather than in an office. It is a recurring weekly session of breathing, meditation and chair yoga on Teams or Zoom, led by the same coach, with attendance and wellbeing reporting. No room to book, no travel, every location joins as an equal.',
  ],
  [
    'How is a team wellbeing subscription different from a one-off workshop?',
    'A one-off workshop is a nice afternoon that fades by Friday. A subscription is a recurring habit at a protected time each week, which is where the results actually come from. Wellbeing works like fitness: the weekly rhythm matters far more than any single impressive session.',
  ],
  [
    'Does it work for teams spread across time zones?',
    'Yes, this is what the live online format is built for. Sessions run across UK and European hours, with Australian hours for part of the year, and every session is recorded so colleagues in other time zones are never left out of the habit.',
  ],
  [
    'We are a hybrid team, some in the office and some at home. Does this still work?',
    'Yes, this is built for exactly that. Because every session is live on Teams or Zoom, it does not matter who is in the office and who is at home that day. Everyone joins the same session from wherever they already are, which gives a hybrid team one shared weekly moment and an easy way to stay connected and focused without coordinating a room or any travel.',
  ],
  [
    'How many people can join?',
    'Everyone on the team joins the same live session, and camera-off is welcome throughout. For teams spread across several regions I can run more than one weekly slot, so nobody has to join at an antisocial hour.',
  ],
  [
    'How do we know it is working?',
    'Every programme reports attendance and repeat attendance. Once it is a weekly habit you get a quarterly summary you can take straight to leadership.',
  ],
  [
    'What does corporate wellbeing for a remote team cost?',
    'A flat monthly subscription by session frequency, not a per-person app charge. Pricing is public, and every engagement starts with a single pilot session credited to your first month if you continue.',
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
        'Live weekly wellbeing sessions for distributed and hybrid teams on Teams or Zoom: breathing, meditation and chair yoga, camera optional, with attendance and wellbeing reporting.',
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
    <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-4xl leading-tight">{children}</h2>
  </>
);

const included = [
  ['One recurring weekly slot', 'The same time each week in the team calendar, so it becomes a habit, not a task anyone has to remember.'],
  ['The same coach every week', 'A real, familiar human builds the trust and gentle accountability an app cannot.'],
  ['Breathing, meditation, chair yoga', 'A simple, repeatable arc people can reuse at their desks between sessions.'],
  ['Camera optional, no equipment', 'Designed for a normal workday. Nobody changes clothes or performs.'],
  ['Recorded for every time zone', 'Included so shift workers and other regions never miss the habit.'],
  ['Reporting you can show leadership', 'Attendance and pre and post wellbeing in a one-page summary.'],
];

const CorporateWellbeingRemoteTeams = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Weekly Wellbeing Sessions for Remote and Hybrid Teams | Remote Yoga Coach"
        description="A live weekly wellbeing subscription for remote, hybrid and in-office teams. Breathing, meditation and chair yoga on Teams or Zoom, camera optional, with reporting. Book a pilot session."
        canonical="https://remoteyogacoach.com/services/corporate-wellbeing-for-remote-teams"
        ogImage="https://remoteyogacoach.com/og/corporate-wellbeing-remote-teams.png"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-cream-soft pt-36 pb-20 md:pt-44 md:pb-24">
          <GlowField tone="warm" />
          <div className="relative max-w-[820px] mx-auto px-5 text-center">
            <Eyebrow>Corporate wellbeing, distributed teams</Eyebrow>
            <h1 className="font-fraunces font-semibold text-heading text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Wellbeing for remote and hybrid teams that reaches everyone on screen.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[660px] mx-auto">
              A live weekly wellbeing class for your whole team, remote, hybrid or in the office, on Teams or Zoom.
              A meditation class, a breathing class, or a chair yoga class, choose one, alternate, or combine them,
              led by the same coach, camera optional, recorded for every time zone. A recurring habit people keep,
              with the reporting to prove it, not another app licence nobody opens.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-semibold uppercase text-sm tracking-wider rounded-md px-8 py-6">
                  Book a pilot
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-sage text-charcoal hover:bg-sage-light/40 font-semibold uppercase text-sm tracking-wider rounded-md px-8 py-6">
                  See pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <SectionHeading eyebrow="The problem">Distributed teams are the hardest to reach, and the most at risk</SectionHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                Wellbeing is harder to deliver when the team is spread across cities and time zones, and it matters
                more. Remote and hybrid workers{' '}
                <Link to="/guides/remote-work-burnout" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  report burnout at higher rates
                </Link>{' '}
                than office-based colleagues, driven by
                isolation, blurred boundaries and always-on messaging. Meanwhile the usual fixes assume an office: a
                room, a fixed hour, a local instructor.
              </p>
              <p className="text-charcoal font-medium">
                So most distributed teams fall back on passive tools, and passive tools do not get used.
              </p>
            </div>
          </div>
        </section>

        {/* STAT BAND */}
        <StatBand
          variant="cream"
          eyebrow="The stakes"
          heading="Why remote wellbeing is worth getting right"
          items={[
            { value: '~2x', label: 'the loneliness rate of office-based staff, reported by remote workers' },
            { value: '3 to 5%', label: 'of staff ever use their EAP, the passive fallback most teams rely on' },
            { value: '£4.70', label: 'returned for every £1 invested in workplace mental health (Deloitte)' },
          ]}
        />

        {/* WHAT'S INCLUDED */}
        <section className="py-20 md:py-24">
          <div className="max-w-[900px] mx-auto px-5">
            <SectionHeading eyebrow="What you get">A wellbeing subscription built for distributed teams</SectionHeading>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {included.map(([title, text], i) => (
                <Reveal key={title} delay={i * 60}>
                  <div className="flex gap-4 bg-white rounded-lg border border-sage-light p-5 h-full">
                    <span className="shrink-0 mt-1 w-6 h-6 rounded-full bg-clay/10 flex items-center justify-center">
                      <Check className="text-clay" size={15} strokeWidth={2.5} />
                    </span>
                    <p className="text-charcoal/80 text-[15px] leading-relaxed">
                      <span className="font-fraunces font-semibold text-heading text-lg block mb-0.5">{title}</span>
                      {text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SUBSCRIPTION VS ONE-OFF */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <SectionHeading eyebrow="Why a subscription">A habit, not a one-off event</SectionHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                A single wellbeing day is a nice memory by the weekend. It does not change how a stressed team
                actually feels in week six. Wellbeing behaves like fitness: the weekly rhythm matters far more than
                any one impressive session, and the results live in the habit.
              </p>
              <p>
                That is why this is a subscription, not a booking. A protected weekly slot, the same coach, a
                programme that builds over time, priced as a flat monthly fee. See{' '}
                <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  how a session runs
                </Link>{' '}
                and the public{' '}
                <Link to="/pricing" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  pricing
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* HYBRID TEAMS */}
        <section className="py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <SectionHeading eyebrow="Hybrid teams">One shared moment to keep a hybrid team connected</SectionHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                Hybrid is the hardest shape to hold together. Some of the team is in the office, some is at home, and
                the days rarely line up, so the little moments that used to build belonging quietly disappear. A live
                weekly session gives everyone one fixed point in the week they share, wherever they happen to be that
                day. It is a simple way to keep a hybrid team connected and to{' '}
                <Link to="/blog/keep-hybrid-team-focused" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  keep a hybrid team focused
                </Link>
                , without
                asking anyone to travel or coordinate a room.
              </p>
              <p>
                Because it is the same time, the same coach and the same small ritual each week, it becomes a moment of
                connection people recognise across a distributed or hybrid team, not another meeting. Sessions are live
                on Teams or Zoom, so they work for any team that spends its day on a screen, whether fully remote,
                hybrid, or together in an office. The session comes to wherever each person already is.
              </p>
              <p>
                Every session suits every body and every level. Cameras can stay off, there is nothing to download, no
                equipment and no changing of clothes, and there is always a seated option.
              </p>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <SectionHeading eyebrow="Who it's for">People leaders at remote-first companies</SectionHeading>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              HR and people leaders, team leads and founders at remote-first and hybrid companies, tech, consulting,
              sustainability and distributed teams that want a wellbeing habit the whole team
              actually keeps. Delivered in English, online, across UK and European time zones, with Australian hours
              for part of the year.
            </p>
            <p className="mt-5 text-charcoal/60 text-base leading-relaxed">
              Deciding whether it is worth it? Read{' '}
              <Link to="/guides/cost-of-employee-burnout" className="text-clay underline underline-offset-4 hover:text-clayDark">
                what employee burnout costs
              </Link>{' '}
              for the business case, or{' '}
              <Link to="/compare" className="text-clay underline underline-offset-4 hover:text-clayDark">
                how live sessions compare to apps and EAPs
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <SectionHeading eyebrow="FAQ">Common questions</SectionHeading>
            <GuideFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-cream-soft-b py-24 md:py-28">
          <GlowField tone="sage" />
          <div className="relative max-w-[680px] mx-auto px-5 text-center">
            <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-4xl leading-tight">
              Give your distributed team a habit that sticks
            </h2>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              Start with a single pilot session, then once it is a weekly habit the attendance and wellbeing
              reporting gives you something concrete to take to leadership. Credited to your first month if you continue.
            </p>
            <div className="mt-9">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-semibold uppercase text-sm tracking-wider rounded-md px-8 py-6">
                  Book a pilot
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

export default CorporateWellbeingRemoteTeams;
