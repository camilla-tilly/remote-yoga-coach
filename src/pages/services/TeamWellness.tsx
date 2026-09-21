import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { PullQuote, NumberedSteps } from '@/components/GuideLayout';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Online corporate wellbeing sessions for remote and hybrid teams",
  "name": "Weekly classes for teams",
  "provider": { "@type": "Organization", "name": "Remote Yoga Coach", "url": "https://remoteyogacoach.com" },
  "areaServed": ["GB", "EU"],
  "description": "Live breathing, meditation and chair-yoga sessions for remote, hybrid and in-office teams on Teams."
};

const arc = [
  ['Arrive', 'A few breaths to settle.'],
  ['Breath', 'One technique simple enough to reuse at your desk.'],
  ['Move', 'Gentle chair-based mobility for the neck, shoulders and back.'],
  ['Settle', 'A short guided meditation.'],
  ['Carry it out', 'One small thing to take into the rest of the day.'],
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
        description="Live corporate wellbeing for remote, hybrid and in-office teams: weekly breathing, meditation and chair yoga on Teams. Book a pilot."
        canonical="https://remoteyogacoach.com/services/team-wellness"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-cream-soft pt-36 pb-20 md:pt-44 md:pb-24">
          <div className="max-w-[820px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              The weekly reset your remote and hybrid team looks forward to.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[600px] mx-auto">
              A live class of 15 to 30 minutes on Teams: meditation, breathing or chair yoga, with the same coach
              every week.
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
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="The problem">HR knows this one</SectionHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                The gym benefit goes unused, the meditation app is forgotten within a fortnight, and{' '}
                <Link to="/compare" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  nobody can tell you whether any of it works
                </Link>
                .
              </p>
              <PullQuote>
                The issue isn't that people don't want to feel better. It's that passive tools ask them to start on
                their own, and busy, screen-tired people rarely do.
              </PullQuote>
            </div>
          </div>
        </section>

        {/* THE OFFER */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[820px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="The offer">One weekly slot</SectionHeading>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              A session in the calendar removes the hardest part: starting. A combined session follows a simple arc.
            </p>
            <NumberedSteps items={arc as Array<[string, string]>} separator=": " />
            <p className="mt-8 text-charcoal/75 text-lg leading-relaxed">
              No advanced poses and nothing anyone has to be fit to do.
            </p>
          </div>
        </section>

        {/* ONE-OFF / TEAM EVENT */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="One-off sessions">A virtual session for a team event</SectionHeading>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              Not ready for a weekly slot? Book a single live session for a kickoff, an all-hands or an online
              offsite. It's the easiest way to try it.
            </p>
            <div className="mt-8">
              <Link to="/demo">
                <Button variant="outline" className="border-sage text-charcoal hover:bg-sage-light/40 font-medium text-[15px] rounded-full px-8 py-6">
                  Ask about a one-off
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream-soft-b py-24 md:py-28">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <h2 className="font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight">Start with a pilot</h2>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              One session for your team, credited to your first month if you continue.
            </p>
            <div className="mt-9">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-medium text-[15px] rounded-full px-8 py-6">
                  Book a pilot
                </Button>
              </Link>
            </div>
            <p className="mt-10 text-charcoal/60 text-[15px] leading-relaxed">
              Further reading:{' '}
              <Link to="/guides/mindfulness-at-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                mindfulness at work
              </Link>
              ,{' '}
              <Link to="/blog/how-to-meditate-at-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                how to meditate at work
              </Link>{' '}
              and{' '}
              <Link to="/blog/corporate-wellness-ideas-remote-teams" className="text-clay underline underline-offset-4 hover:text-clayDark">
                wellness ideas for remote teams
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TeamWellness;
