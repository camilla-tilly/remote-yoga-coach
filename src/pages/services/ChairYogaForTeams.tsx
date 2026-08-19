import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { GuideFAQ } from '@/components/GuideLayout';

const faqItems: Array<[string, string]> = [
  [
    'Is this office yoga, workplace yoga or chair yoga?',
    'They are the same thing here. Office yoga and workplace yoga are umbrella terms for yoga done during the workday, and what I run is chair yoga: the seated, gentle version that needs no mat and no changing of clothes. It is live on Teams or Zoom, camera optional, and works from any desk, whether your team is remote, hybrid or in an office.',
  ],
  [
    'What is a virtual chair yoga session for a company?',
    'A live, guided session over Teams or Zoom in which a coach leads your team through gentle seated and standing movement, simple breathing and a short reset, usually 15 to 30 minutes. Everyone joins from their own desk, in normal work clothes, camera optional. No mats, no changing, no experience needed.',
  ],
  [
    'Is chair yoga suitable for a whole workforce?',
    'That is exactly what it is designed for. Chair yoga came from adaptive yoga, so it assumes a range of bodies, ages and fitness levels rather than the flexible few. There are no advanced poses, nothing anyone has to be fit or bendy to do, which is why participation holds up across a mixed team in a way a gym benefit never does.',
  ],
  [
    'How long should a corporate chair yoga session be?',
    'For a recurring workplace session, 15 to 30 minutes is the sweet spot: long enough to reset the neck, shoulders and back and steady the nervous system, short enough to fit a lunch break or a slot between meetings without eating the day.',
  ],
  [
    'Does chair yoga help with the aches of desk work?',
    'It targets them directly. Around 80 percent of office workers report neck or back discomfort, most of it from sustained sitting. Regular seated mobility for the neck, shoulders, wrists, hips and lower back is exactly the gentle, frequent movement that eases screen-related stiffness.',
  ],
  [
    'How much does chair yoga for a team cost?',
    'It is priced as a monthly subscription by session frequency, not per class, so a weekly habit stays affordable. Pricing is public on the pricing page, and every engagement starts with a single pilot session so you can see how it lands before committing.',
  ],
  [
    'Can remote and hybrid teams do chair yoga together?',
    'Yes, and the live online format is where it works best. There is no room to book and no travel, every location joins as an equal, cameras stay off for anyone who prefers it, and sessions are recorded for colleagues in other time zones. It reaches a distributed workforce that an on-site class never could.',
  ],
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Virtual office yoga and chair yoga classes for companies and remote teams',
      name: 'Office yoga and chair yoga for teams',
      provider: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
      areaServed: ['GB', 'EU', 'AU'],
      description:
        'Live virtual office yoga and chair yoga sessions for companies and distributed teams on Teams or Zoom: gentle seated movement, breathing and a short reset, camera optional, no experience needed.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://remoteyogacoach.com/' },
        { '@type': 'ListItem', position: 2, name: 'Chair yoga for teams', item: 'https://remoteyogacoach.com/services/chair-yoga-for-teams' },
      ],
    },
  ],
};

const included = [
  ['Live and guided', 'A real coach leads every session, the same face each week. No pre-recorded video nobody presses play on.'],
  ['Seated and standing', 'Gentle mobility for the neck, shoulders, wrists, hips and lower back, the areas desk work punishes most.'],
  ['Breathing built in', 'Simple techniques your team can reuse before a meeting or a deadline, not just during the session.'],
  ['Camera optional', 'No activewear, no floor, nothing to perform. People join from their desk exactly as they are.'],
  ['Recorded every week', 'Included for shift workers and other time zones, so nobody is left out of the habit.'],
  ['One link to run it', 'You set the slot once. I take it from there. Zero admin for whoever organises it.'],
];

const SectionHeading = ({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) => (
  <>
    {eyebrow && <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-sage mb-4">{eyebrow}</span>}
    <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-4xl leading-tight">{children}</h2>
  </>
);

const ChairYogaForTeams = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Virtual Office Yoga and Chair Yoga for Teams | Remote Yoga Coach"
        description="Live virtual office yoga and chair yoga for companies and remote teams on Teams or Zoom. Workplace yoga that is gentle and desk-friendly, camera optional, no experience needed. Book a pilot session."
        canonical="https://remoteyogacoach.com/services/chair-yoga-for-teams"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-cream-soft pt-36 pb-20 md:pt-44 md:pb-24">
          <div className="max-w-[820px] mx-auto px-5 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-sage mb-6">
              For companies and remote teams
            </span>
            <h1 className="font-fraunces font-semibold text-heading text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Virtual office yoga and chair yoga your whole team can actually do.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[640px] mx-auto">
              Live, guided{' '}
              <Link to="/blog/office-yoga-for-remote-teams" className="text-clay underline underline-offset-4 hover:text-clayDark">
                workplace yoga for distributed and hybrid teams
              </Link>
              , on Teams or Zoom. Gentle seated
              movement, simple breathing and a short reset, in normal work clothes, camera optional. No mats, no
              changing, no experience, nothing anyone has to be fit or flexible to join.
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

        {/* DEFINITIONS */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <SectionHeading eyebrow="Quick definitions">Office yoga, desk yoga and chair yoga: what's the difference?</SectionHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                <span className="text-charcoal font-medium">Office yoga and workplace yoga</span> are umbrella terms
                for yoga done during the workday, wherever the team happens to be. They cover any format built to fit
                around meetings and desk work, from a few minutes of stretching to a full guided session.
              </p>
              <p>
                <span className="text-charcoal font-medium">Desk yoga</span> is the narrowest of the three: gentle
                movements done at, or right beside, a desk. It is designed to loosen the neck, shoulders, wrists and
                back between tasks, without anyone leaving their workstation.
              </p>
              <p>
                <span className="text-charcoal font-medium">Chair yoga</span> is seated and gentle, with a standing
                option. It needs no mat and no changing of clothes, and it came from adaptive yoga, so it assumes a
                range of bodies and levels rather than the flexible few. It is the version I run for teams.
              </p>
              <p>
                Sessions are live on Teams or Zoom, so they work for any team that spends its day on a screen, whether
                fully remote, hybrid, or together in an office. The session comes to wherever each person already is.
              </p>
              <p>
                Every session suits every body and every level. Cameras can stay off, there is nothing to download, no
                equipment and no changing of clothes, and there is always a seated option.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHAIR YOGA */}
        <section className="py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <SectionHeading eyebrow="Why chair yoga">Movement a whole workforce will keep</SectionHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                Most corporate fitness perks are built for the people who least need them. A gym benefit rewards the
                already-active, a lunchtime bootcamp filters out anyone who does not want to change clothes and
                sweat at work. Uptake settles around 12 percent, and the other 88 percent quietly opt out.
              </p>
              <p className="text-charcoal font-medium">
                Chair yoga is the opposite. It was designed for every body in the room.
              </p>
              <p>
                Because it is seated, gentle and demands nothing athletic, participation holds up across ages, sizes
                and fitness levels. That matters when roughly 80 percent of office workers report{' '}
                <Link to="/blog/tech-neck-exercises-desk" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  neck or back discomfort
                </Link>{' '}
                from sitting: the people who most need to move are exactly the ones an intense class
                scares off. A short weekly session of seated mobility reaches them instead of skipping them.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[820px] mx-auto px-5">
            <SectionHeading eyebrow="What a session includes">One weekly slot, run for you</SectionHeading>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {included.map(([title, text]) => (
                <li key={title} className="flex gap-4 bg-white rounded-lg border border-sage-light p-5">
                  <span className="shrink-0 mt-1 w-6 h-6 rounded-full bg-clay/10 flex items-center justify-center">
                    <Check className="text-clay" size={15} strokeWidth={2.5} />
                  </span>
                  <p className="text-charcoal/80 text-[15px] leading-relaxed">
                    <span className="font-fraunces font-semibold text-heading text-lg block mb-0.5">{title}</span>
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHY IT STICKS */}
        <section className="py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <SectionHeading eyebrow="Why it sticks">Live and scheduled beats an app or a handout</SectionHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                You could send your team a chair-yoga PDF or a meditation-app licence. Most companies already have,
                and watched usage collapse within weeks. The reason is not the content, which is usually fine. It is
                that passive tools ask busy, tired people to start on their own, at the exact moments their willpower
                is lowest, and they almost never do.
              </p>
              <p>
                A live session in the calendar removes that step entirely. People click one link and someone else
                leads. Within a few weeks it stops being a task and becomes the moment the team quietly protects.
                That is the whole difference between a benefit that is bought and a benefit that is used.
              </p>
              <p>
                If you want the self-guided version to share alongside it, my{' '}
                <Link to="/guides/desk-yoga" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  desk yoga and chair yoga guide
                </Link>{' '}
                covers the movements in full, and the{' '}
                <Link to="/blog/chair-yoga-at-your-desk" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  8-pose chair yoga routine
                </Link>{' '}
                works as a handout. The live weekly session is what turns knowing about it into doing it.
              </p>
            </div>
          </div>
        </section>

        {/* MEASUREMENT */}
        <section className="bg-charcoal text-white py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-clay mb-4">The proof</span>
            <h2 className="font-fraunces font-semibold text-3xl md:text-4xl leading-tight">You will see whether it is working</h2>
            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              Every programme comes with simple, honest reporting: how many of your team attend and how many keep coming
              back. Once it is a weekly habit you
              get a report you can take straight to your budget-holder, no guesswork about whether it earned
              its slot.
            </p>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <SectionHeading eyebrow="Who it's for">Built for distributed teams</SectionHeading>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              People and culture leaders, team leads and founders at remote-first and hybrid companies who want a
              wellbeing habit the whole team actually keeps, not another perk that lands flat. Teams of roughly 10 to
              100 across tech, consulting, sustainability and distributed organisations.
            </p>
            <p className="mt-5 text-charcoal/60 text-base leading-relaxed">
              Sessions run in English, online, across UK and European time zones, with Australian hours for part of
              the year. Suitable for international and distributed teams anywhere. It sits naturally alongside{' '}
              <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                The Weekly Reset
              </Link>
              , which blends chair yoga with breathing and meditation in one recurring session.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-sage mb-4">FAQ</span>
            <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-4xl leading-tight">Common questions</h2>
            <GuideFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream-soft-b py-24 md:py-28">
          <div className="max-w-[680px] mx-auto px-5 text-center">
            <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-4xl leading-tight">
              Try chair yoga with your team
            </h2>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              A single pilot session of live chair yoga, credited to your first month
              if you continue. See it work with your own team before committing.
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
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ChairYogaForTeams;
