import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/Section';
import { GuideFAQ, GuideHeading, DefinitionList, PullQuote } from '@/components/GuideLayout';

const faqItems: Array<[string, string]> = [
  [
    'Is this office yoga, workplace yoga or chair yoga?',
    'The same thing here. Office and workplace yoga are the umbrella terms. What I run is chair yoga: seated, gentle, no mat and no changing, live on Teams or Zoom from any desk.',
  ],
  [
    'What is a virtual chair yoga session for a company?',
    'A live session on Teams or Zoom where I lead your team through gentle seated movement, breathing and a short reset, usually 15 to 30 minutes. Everyone joins from their desk, camera optional.',
  ],
  [
    'How long should a corporate chair yoga session be?',
    '15 to 30 minutes. Long enough to reset the neck, shoulders and back, short enough to fit between meetings.',
  ],
  [
    'Does chair yoga help with the aches of desk work?',
    'It targets them directly. Around 80 percent of office workers report neck or back discomfort, mostly from sitting, and gentle, frequent seated movement is what eases it.',
  ],
  [
    'How much does chair yoga for a team cost?',
    'A monthly subscription priced by how often you meet, not per class. Prices are on the pricing page, and you start with a single pilot session.',
  ],
  [
    'Can remote and hybrid teams do chair yoga together?',
    'Yes, that is where the live online format works best. No room to book, every location joins as an equal, and cameras can stay off.',
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
  ['Live and guided', 'A real person leads every session, the same face each week.'],
  ['Seated, in work clothes', 'Neck, shoulders, wrists, hips and lower back. Camera optional.'],
  ['Breathing built in', 'Techniques people reuse before a meeting or a deadline.'],
  ['One link, zero admin', 'You set the slot once. I take it from there.'],
];

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
        <Section width="hero" tone="top" size="hero" center>
            <span className="inline-block font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay mb-6">
              For companies and remote teams
            </span>
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Virtual office yoga and chair yoga your whole team can actually do.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[600px] mx-auto">
              Live, guided{' '}
              <Link to="/blog/office-yoga-for-remote-teams" className="text-clay underline underline-offset-4 hover:text-clayDark">
                workplace yoga for distributed and hybrid teams
              </Link>{' '}
              on Teams or Zoom. Gentle, seated, in normal work clothes.
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
        </Section>

        {/* DEFINITIONS -- the three terms people search for, one line each. */}
        <Section tone="cream">
          <GuideHeading eyebrow="Quick definitions" size="md">Office yoga, desk yoga and chair yoga: what's the difference?</GuideHeading>
          <DefinitionList
            items={[
              ['Office yoga and workplace yoga', 'are umbrella terms for yoga done during the workday.'],
              ['Desk yoga', 'is gentle movement at, or right beside, your desk.'],
              ['Chair yoga', 'is seated and gentle, with no mat and no changing. It is the version I run for teams.'],
            ]}
          />
        </Section>

        {/* WHAT'S INCLUDED */}
        <Section width="hero">
          <GuideHeading eyebrow="What a session includes" size="md">One weekly slot, run for you</GuideHeading>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {included.map(([title, text]) => (
                <li key={title} className="flex gap-4 bg-card rounded-lg border border-sage-light p-5">
                  <span className="shrink-0 mt-1 w-6 h-6 rounded-full bg-clay/10 flex items-center justify-center">
                    <Check className="text-clay" size={15} strokeWidth={2.5} />
                  </span>
                  <p className="text-charcoal/80 text-[15px] leading-relaxed">
                    <span className="font-fraunces font-normal text-heading text-lg block mb-0.5">{title}</span>
                    {text}
                  </p>
                </li>
              ))}
            </ul>
        </Section>

        {/* WHY IT WORKS */}
        <Section tone="cream">
          <GuideHeading eyebrow="Why chair yoga" size="md">Movement a whole workforce will keep</GuideHeading>
          <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                A gym benefit rewards the already-active, and a PDF of stretches waits for busy people to start on
                their own. Most never do.
              </p>
              <PullQuote>Chair yoga is the opposite. It was designed for every body in the room.</PullQuote>
              <p>
                Around 80 percent of office workers report{' '}
                <Link to="/blog/tech-neck-exercises-desk" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  neck or back discomfort
                </Link>
                . A live session in the calendar reaches them, because someone else leads. For the movements
                themselves, see the{' '}
                <Link to="/guides/desk-yoga" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  desk yoga guide
                </Link>{' '}
                or the{' '}
                <Link to="/blog/chair-yoga-at-your-desk" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  8-pose chair yoga routine
                </Link>
                .
              </p>
          </div>
        </Section>

        {/* FAQ */}
        <Section>
          <GuideHeading eyebrow="FAQ" size="md">Common questions</GuideHeading>
          <GuideFAQ items={faqItems} />
        </Section>

        {/* CTA */}
        <Section tone="bottom" size="cta" center>
            <h2 className="font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight">
              Try chair yoga with your team
            </h2>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              Start with one pilot session, credited to your first month if you continue. Want breathing and
              meditation too? See{' '}
              <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                The Weekly Reset
              </Link>
              .
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
        </Section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ChairYogaForTeams;
