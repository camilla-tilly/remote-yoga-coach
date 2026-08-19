import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Online corporate wellbeing sessions for remote and hybrid teams",
  "name": "The Weekly Reset, team wellness",
  "provider": { "@type": "Organization", "name": "Remote Yoga Coach", "url": "https://remoteyogacoach.com" },
  "areaServed": ["GB", "EU", "AU"],
  "description": "Live breathing, meditation and chair-yoga sessions for remote, hybrid and in-office teams on Teams or Zoom, with honest wellbeing reporting."
};

const arc = [
  ['Arrive', 'Settle in, a few breaths. No need to change or even turn your camera on.'],
  ['Breath', 'One technique simple enough to reuse at your desk later.'],
  ['Move', 'Gentle chair and desk-based mobility for the neck, shoulders, wrists and back that office work punishes.'],
  ['Settle', 'A short guided meditation to close.'],
  ['Carry it out', 'One small thing to take into the workday.'],
];

const builtFor = [
  ["Everyone's included", 'Fully remote, hybrid or multi-site, the live online format reaches the whole team equally.'],
  ['No equipment, no changing', 'Chair-based, camera optional, designed for a normal workday.'],
  ['Every session recorded', 'Included for shift workers and other time zones.'],
  ['One link to share', 'You set it up once; I run it.'],
];

const SectionHeading = ({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) => (
  <>
    {eyebrow && <span className="inline-block font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay mb-4">{eyebrow}</span>}
    <h2 className="font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight">{children}</h2>
  </>
);

const TeamWellness = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Corporate Wellbeing Sessions for Remote and Hybrid Teams | Remote Yoga Coach"
        description="Live corporate wellbeing for remote, hybrid and in-office teams: The Weekly Reset, breathing, meditation and chair yoga on Teams or Zoom, camera optional, with attendance and stress reporting. Book a pilot."
        canonical="https://remoteyogacoach.com/services/team-wellness"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-cream-soft pt-36 pb-20 md:pt-44 md:pb-24">
          <div className="max-w-[820px] mx-auto px-5 text-center">
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              The weekly reset your remote and hybrid team looks forward to.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[660px] mx-auto">
              Live 30-minute meditation, breathing or chair-yoga classes on Teams or Zoom, choose one, alternate,
              or combine them, no activewear, no commute, camera optional. Sessions are live on screen, so they work for any team that
              spends its day on a screen, whether fully remote, hybrid, or together in an office. The same coach every
              week, building a real habit instead of another app login nobody opens.
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

        {/* PROBLEM */}
        <section className="py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <SectionHeading eyebrow="The problem">HR knows this one</SectionHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                Your team is spread across cities and time zones. Wellbeing perks keep landing flat, the gym benefit
                sits at around 12% use, the meditation app gets downloaded and forgotten within two weeks, and the EAP
                only 3–5% of people ever touch. Meanwhile work-related stress is at a record high, and remote employees
                report loneliness at nearly double the rate of office-based staff.
              </p>
              <p className="text-charcoal font-medium">
                The issue isn't that people don't want to feel better. It's that passive tools ask them to start on
                their own, and busy, screen-tired people rarely do.
              </p>
            </div>
          </div>
        </section>

        {/* THE OFFER */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[820px] mx-auto px-5">
            <SectionHeading eyebrow="The offer">The Weekly Reset</SectionHeading>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              A live, scheduled session in the calendar removes the hardest part, starting. People click one link and
              join. Over a few weeks, it becomes the moment the team looks forward to. Every session follows the same
              simple arc:
            </p>
            <ul className="mt-8 space-y-4">
              {arc.map(([title, text]) => (
                <li key={title} className="flex gap-4 bg-white rounded-lg border border-sage-light p-5">
                  <span className="shrink-0 mt-1 w-6 h-6 rounded-full bg-clay/10 flex items-center justify-center">
                    <Check className="text-clay" size={15} strokeWidth={2.5} />
                  </span>
                  <p className="text-charcoal/80 text-[16px] leading-relaxed">
                    <span className="font-fraunces font-normal text-heading text-lg">{title}</span>
                    {': '}{text}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-charcoal/75 text-lg leading-relaxed">
              Challenging but never punishing. No headstands, no "advanced" poses, nothing anyone has to be flexible or
              fit to do. Just a reliable reset that fits a lunch break or a meeting slot.
            </p>
            <p className="mt-5 text-charcoal/75 text-lg leading-relaxed">
              Every session suits every body and every level. Cameras can stay off, there is nothing to download, no
              equipment and no changing of clothes, and there is always a seated option.
            </p>
          </div>
        </section>

        {/* BUILT FOR DISTRIBUTED TEAMS */}
        <section className="py-20 md:py-24">
          <div className="max-w-[900px] mx-auto px-5">
            <SectionHeading eyebrow="Why it fits">Built for distributed teams</SectionHeading>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {builtFor.map(([title, text]) => (
                <div key={title}>
                  <h3 className="font-fraunces font-normal text-heading text-xl">{title}</h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed mt-1.5">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEASUREMENT */}
        <section className="bg-charcoal text-white py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-clay mb-4">The proof</span>
            <h2 className="font-fraunces font-normal text-3xl md:text-4xl leading-tight">You'll see whether it's working</h2>
            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              Unlike{' '}
              <Link to="/compare" className="text-clay underline underline-offset-4 hover:text-clayDark">
                an app you can't measure
              </Link>
              , every programme comes with simple, honest reporting: how many of your
              team attend and how many come back. At the end
              of each quarter you get a report you can take straight to your budget-holder.
            </p>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5">
            <SectionHeading eyebrow="Who it's for">A wellbeing habit people actually keep</SectionHeading>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              People and culture leaders, team leads and founders at remote-first and hybrid companies, tech,
              consulting, sustainability and distributed teams that want a wellbeing habit that
              people actually keep.
            </p>
            <p className="mt-5 text-charcoal/60 text-base leading-relaxed">
              Sessions are delivered in English, online, across UK and European time zones (and Australian hours for
              part of the year). Suitable for international and distributed teams anywhere.
            </p>
          </div>
        </section>

        {/* ONE-OFF / TEAM EVENT */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[820px] mx-auto px-5">
            <SectionHeading eyebrow="One-off sessions">A virtual session for a team event</SectionHeading>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              If a full programme feels like a big first step, you can book a single live session for a moment your
              team is already gathering around: a virtual kickoff, an all-hands, an online offsite, or a virtual lunch
              and learn. It runs live on Teams or Zoom, wherever each person already is, with the same breathing,
              meditation and gentle chair yoga as the weekly sessions.
            </p>
            <p className="mt-5 text-charcoal/75 text-lg leading-relaxed">
              Think of a one-off as a low-commitment way to try it. It is an easy door-opener and a wellbeing session
              for a team event, not the main offering. The Weekly Reset, the recurring weekly habit, is where the real
              change happens, and a single session is the simplest way to feel what that would be like before you
              commit.
            </p>
            <div className="mt-9">
              <Link to="/demo">
                <Button variant="outline" className="border-sage text-charcoal hover:bg-sage-light/40 font-medium text-[15px] rounded-full px-8 py-6">
                  Ask about a one-off
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* RELATED READING */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <span className="inline-block font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay mb-4">Related reading</span>
            <ul className="space-y-2 text-lg leading-relaxed">
              <li>
                <Link to="/guides/mindfulness-at-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  Mindfulness at work: a practical guide
                </Link>
              </li>
              <li>
                <Link to="/blog/how-to-meditate-at-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  How to meditate at work
                </Link>
              </li>
              <li>
                <Link to="/blog/corporate-wellness-ideas-remote-teams" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  Corporate wellness ideas for remote teams
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream-soft-b py-24 md:py-28">
          <div className="max-w-[680px] mx-auto px-5 text-center">
            <h2 className="font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight">Start with a pilot</h2>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              A single pilot session of The Weekly Reset for your team, credited to your first
              month if you continue. See it work with your own team before committing to a subscription.
            </p>
            <div className="mt-9">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-medium text-[15px] rounded-full px-8 py-6">
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

export default TeamWellness;
