import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Reveal, GlowField, ComparisonTable, Eyebrow } from '@/components/SiteBlocks';
import { GuideFAQ } from '@/components/GuideLayout';

const faqItems: Array<[string, string]> = [
  [
    'We already pay for Headspace or Calm. Why add live sessions?',
    'Apps are excellent libraries, but they are passive: they ask a busy, tired person to start on their own, and usage drops sharply within weeks. A live weekly session removes that first step, a real coach leads it, so participation holds. Position the app as the between-sessions library and the live session as the weekly class.',
  ],
  [
    'We have an EAP. Is this not the same thing?',
    'No. An employee assistance programme is a reactive crisis line, used by only 3 to 5 percent of staff, and a quarter of employees do not know theirs exists. It helps after a problem forms. Live wellbeing sessions are preventive and stigma-free: nobody has to admit anything, everyone just joins. They fill the gap the EAP leaves before crisis.',
  ],
  [
    'Is this a replacement for our current wellbeing spend?',
    'It does not have to be. The live session is the layer most wellbeing stacks are missing, the human, habit-forming one. Many teams keep the app and the EAP and add the weekly session as the thing that finally drives engagement across the other two.',
  ],
  [
    'How do you prove the live session gets more engagement?',
    'Attendance and repeat attendance are tracked automatically, alongside a short wellbeing check before and after. Unlike an app dashboard that shows a few opens, you get real participation numbers for your own team in a one-page report.',
  ],
  [
    'What about cost? Apps look cheaper per head.',
    'Per licence, yes. Per person who actually benefits, rarely, because most app licences go unused. A live session priced per team, with high real attendance, often costs less per engaged employee than an app almost nobody opens.',
  ],
  [
    'Is this a Calm for Business alternative?',
    'It is the live layer those apps are missing, not a like-for-like swap. Calm for Business and Headspace for Work are strong on-demand libraries, but they are passive: staff have to start on their own, and usage drops fast. I run a live weekly session on Teams or Zoom, led by me, a 500-hour certified yoga teacher, with camera optional and every session recorded. If you want a Calm for Business alternative that people actually attend, keep the app as the between-sessions library and add the live session as the weekly class.',
  ],
  [
    'Is this a Headspace for Work alternative?',
    'In the same way, yes. As a Headspace for Work alternative, the difference is a real, familiar human leading the practice at a set time each week, which removes the hardest part, starting. Attendance and repeat attendance are tracked, with a short wellbeing check reported in a one-page summary, so you can see the engagement an app dashboard cannot show.',
  ],
  [
    'Is this an EAP alternative?',
    'Not for crisis support, and I would never position it that way. An EAP is a reactive safety net and should stay. But if you are looking for an EAP alternative to actually build everyday wellbeing, rather than wait for a problem to form, that is what a live weekly session does. It is preventive and stigma-free: nobody has to admit anything, everyone just joins.',
  ],
  [
    'App vs live sessions, which do teams actually use?',
    'On the wellbeing app vs live sessions question, the honest answer is live sessions, by a wide margin on real participation. Apps win on library depth and per-licence price, but most licences go unused. A live session led by a real person, at a fixed weekly time, holds attendance because the starting step is handled for people. The two work best together: the app on demand, the live session as the habit.',
  ],
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Live wellbeing sessions vs wellbeing apps vs EAPs: what actually gets used',
      description:
        'An honest comparison of live team wellbeing sessions, wellbeing apps and EAPs on the metric that matters: whether your team actually uses it. For HR and people leaders.',
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
  { label: 'Measurable participation', values: [true, 'partial', false] },
  { label: 'Works across time zones', values: [true, true, 'partial'] },
  { label: 'Typical take-up', values: ['High, live', 'Drops fast', '3 to 5%'] },
];

const Compare = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Live Wellbeing Sessions vs Apps and EAPs | Remote Yoga Coach"
        description="An honest comparison of live team wellbeing sessions, wellbeing apps and EAPs on the metric that matters: whether your team actually uses it."
        canonical="https://remoteyogacoach.com/compare"
        ogType="article"
        ogImage="https://remoteyogacoach.com/og/compare.png"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
          <GlowField tone="warm" />
          <div className="relative max-w-[820px] mx-auto px-5 text-center">
            <Eyebrow>The honest comparison</Eyebrow>
            <h1 className="font-fraunces font-semibold text-heading text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Live sessions, apps and EAPs, on the metric that matters
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[640px] mx-auto">
              Every wellbeing tool looks good in a pitch deck. The only question that matters is whether your team
              actually uses it. Here is how a live weekly session compares to the app and the EAP you may already
              have, and why it is usually the layer that makes the rest work.
            </p>
          </div>
        </section>

        {/* THE TABLE */}
        <section className="py-16 md:py-20">
          <div className="max-w-[820px] mx-auto px-5">
            <Reveal>
              <ComparisonTable
                columns={['Live weekly sessions', 'Wellbeing app', 'EAP']}
                rows={rows as Array<{ label: string; values: Array<boolean | 'partial' | string> }>}
                highlightIndex={0}
              />
            </Reveal>
            <p className="mt-6 text-center text-charcoal/50 text-sm">
              Take-up figures: EAP 3 to 5% (Personnel Today); app engagement declines within weeks of download.
            </p>
          </div>
        </section>

        {/* THE APP */}
        <section className="py-14 md:py-18">
          <div className="max-w-[760px] mx-auto px-5">
            <Eyebrow>The app</Eyebrow>
            <h2 className="font-fraunces font-semibold text-heading text-2xl md:text-3xl leading-tight">
              A great library nobody visits
            </h2>
            <p className="mt-5 text-charcoal/75 text-lg leading-relaxed">
              Wellbeing apps are genuinely good content. The problem is the invoice buys licences, not outcomes.
              Downloads spike in week one and engagement slides fast, because the app asks the busiest, most tired
              people to initiate practice alone, in the exact moments their willpower is lowest. As a company benefit
              it quietly becomes a line item almost nobody uses. It works best as the between-sessions library, not
              the main event.
            </p>
          </div>
        </section>

        {/* THE EAP */}
        <section className="bg-cream py-14 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <Eyebrow>The EAP</Eyebrow>
            <h2 className="font-fraunces font-semibold text-heading text-2xl md:text-3xl leading-tight">
              A crisis line, not a habit
            </h2>
            <p className="mt-5 text-charcoal/75 text-lg leading-relaxed">
              Employee assistance programmes matter, and they should stay. But they are reactive by design: help once
              a problem has formed, used by only 3 to 5 percent of staff, with a quarter of employees unaware theirs
              exists. An EAP does nothing to build the everyday habit that prevents the crisis in the first place.
              That prevention gap is exactly where a live weekly session sits.
            </p>
          </div>
        </section>

        {/* NOT EITHER/OR */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <Eyebrow>The point</Eyebrow>
            <h2 className="font-fraunces font-semibold text-heading text-2xl md:text-3xl leading-tight">
              This is the missing layer, not a replacement
            </h2>
            <p className="mt-5 text-charcoal/75 text-lg leading-relaxed">
              The strongest wellbeing stack is all three doing what each does well: the app as the on-demand library,
              the EAP as the safety net, and a live weekly session as the human, habit-forming layer that finally
              drives participation across the lot. If you only have passive tools, this is the piece that makes them
              get used. See{' '}
              <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                how a session runs
              </Link>{' '}
              or the deeper dive in{' '}
              <Link to="/blog/do-workplace-wellness-apps-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                do workplace wellness apps actually work?
              </Link>
            </p>
          </div>
        </section>

        {/* THE ALTERNATIVE */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <Eyebrow>The alternative you are searching for</Eyebrow>
            <h2 className="font-fraunces font-semibold text-heading text-2xl md:text-3xl leading-tight">
              A Calm for Business, Headspace for Work and EAP alternative that gets used
            </h2>
            <p className="mt-5 text-charcoal/75 text-lg leading-relaxed">
              If you are searching for a{' '}
              <Link to="/blog/do-workplace-wellness-apps-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                Calm for Business alternative or a Headspace for Work alternative
              </Link>
              , you are
              usually not looking for a better content library. You are looking for the piece those apps leave out: a
              real person, at a fixed time, that people actually turn up to. That is the whole wellbeing app vs live
              sessions difference. The app waits to be opened. A live weekly session is led, so the hardest part,
              starting, is already handled.
            </p>
            <p className="mt-5 text-charcoal/75 text-lg leading-relaxed">
              As an EAP alternative the framing is different again. An EAP is a crisis safety net and should stay in
              place. What it does not do is build the everyday habit that keeps people well before a problem forms.
              A live weekly session, led by me, a 500-hour certified yoga teacher, on Teams or Zoom with camera
              optional and every session recorded, is the preventive, human layer that sits in front of both the app
              and the EAP. Keep them, and add the layer that finally drives attendance across the lot. Attendance and
              a short wellbeing check are reported in a one-page summary, so the engagement is something you can see.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-4xl leading-tight">Common questions</h2>
            <GuideFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-cream-soft-b py-24 md:py-28">
          <GlowField tone="sage" />
          <div className="relative max-w-[680px] mx-auto px-5 text-center">
            <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-4xl leading-tight">
              Add the layer your stack is missing
            </h2>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              A single taster session so your team can try it, then once it is a weekly habit the attendance and
              wellbeing reporting shows you the participation for yourself.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-semibold uppercase text-sm tracking-wider rounded-md px-8 py-6">
                  Book a taster
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
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Compare;
