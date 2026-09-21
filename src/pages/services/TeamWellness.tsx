import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { PageHero, PageSection, ClosingCTA, PillLink } from '@/components/PageKit';
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
        <PageHero
          title="The weekly reset your remote and hybrid team looks forward to."
          actions={
            <>
              <PillLink to="/demo">Book a pilot</PillLink>
              <PillLink to="/pricing" variant="outline">See pricing</PillLink>
            </>
          }
        >
          <p>
            A live class of 15 to 30 minutes on Teams: meditation, breathing or chair yoga, with the same coach
            every week.
          </p>
        </PageHero>

        <PageSection heading="HR knows this one">
          <div className="space-y-5">
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
        </PageSection>

        <PageSection heading="One weekly slot">
          <p>
            A session in the calendar removes the hardest part: starting. A combined session follows a simple arc.
          </p>
          <NumberedSteps items={arc as Array<[string, string]>} separator=": " />
          <p className="mt-8">No advanced poses and nothing anyone has to be fit to do.</p>
        </PageSection>

        <PageSection heading="A virtual session for a team event">
          <p>
            Not ready for a weekly slot? Book a single live session for a kickoff, an all-hands or an online
            offsite. It's the easiest way to try it.
          </p>
          <div className="mt-8">
            <PillLink to="/demo" variant="outline">Ask about a one-off</PillLink>
          </div>
        </PageSection>

        <ClosingCTA
          heading="Start with a pilot"
          actions={<PillLink to="/demo" variant="light">Book a pilot</PillLink>}
        >
          <p>One session for your team, credited to your first month if you continue.</p>
          <p className="text-[15px] text-offwhite/60">
            Further reading:{' '}
            <Link to="/guides/mindfulness-at-work">mindfulness at work</Link>,{' '}
            <Link to="/blog/how-to-meditate-at-work">how to meditate at work</Link> and{' '}
            <Link to="/blog/corporate-wellness-ideas-remote-teams">wellness ideas for remote teams</Link>.
          </p>
        </ClosingCTA>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TeamWellness;
