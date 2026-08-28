import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { GuideEyebrow, GuideFAQ, GuideCTA } from '@/components/GuideLayout';

/**
 * Consolidated FAQ hub. Keyword-friendly buyer questions grouped into
 * sections, with FAQPage + BreadcrumbList JSON-LD so the answers are
 * eligible for Google's expandable FAQ results and AI answer engines.
 */

const groups: Array<{ heading: string; items: Array<[string, string]> }> = [
  {
    heading: 'The sessions',
    items: [
      [
        'What does Remote Yoga Coach offer?',
        'I run live wellbeing classes for remote and hybrid teams, delivered online over Microsoft Teams or Zoom. There are three separate class types to choose from: a meditation class, a breathing class, and a chair yoga class. You can pick one format, alternate between them week to week, or combine them into a single session. I am a 500-hour certified yoga teacher and I lead every session myself.',
      ],
      [
        'Are the meditation, breathing and chair yoga classes separate, or one combined session?',
        'They are three separate classes, and the choice is yours. Some teams pick one format to focus on, some alternate between them across the month, and others prefer a combined session that touches all three. Whatever suits your team, I build the sessions around that.',
      ],
      [
        'What happens in a typical session?',
        'It depends which class you choose. A breathing class teaches and practises simple techniques to settle the nervous system. A meditation class is a short guided meditation that gives the mind a genuine pause. A chair yoga class is gentle seated movement to release the neck, shoulders and back. All of them are calm, unhurried and easy to follow.',
      ],
      [
        'How long is a session?',
        'Usually around 30 minutes, which fits neatly into a workday without eating into it. I can flex the length to suit your team’s schedule.',
      ],
    ],
  },
  {
    heading: 'Who it is for',
    items: [
      [
        'Who is this for?',
        'HR and people leaders, team leads and founders who want a wellbeing habit their team actually keeps. It suits remote-first, hybrid and in-office teams.',
      ],
      [
        'Does it work for a hybrid or in-office team, not just fully remote?',
        'Yes. The sessions are live on screen, so they work for any team that spends its day at a screen, whether people are fully remote, hybrid, or together in an office. Everyone joins the same call, wherever they are.',
      ],
      [
        'Is it suitable for complete beginners?',
        'Completely. Every class is pitched so a total beginner can follow it comfortably. Nobody needs to be fit, flexible, or to have done yoga or meditation before. The chair yoga in particular came from adaptive yoga, so it assumes a range of bodies rather than the flexible few.',
      ],
    ],
  },
  {
    heading: 'How it works',
    items: [
      [
        'Do people need their cameras on?',
        'No. Camera-off is always welcome, and I say so at the start of every session. Letting people join unseen is one of the main reasons participation stays high.',
      ],
      [
        'What platform do you use?',
        'Whatever your team already uses. I run sessions live on Microsoft Teams or Zoom, so there is nothing new to install.',
      ],
      [
        'Are the sessions recorded?',
        'Yes, every session is recorded, so anyone who cannot make the live slot, or who is in another time zone, can follow along later.',
      ],
      [
        'Can you work across time zones?',
        'Yes. I run sessions across UK and European hours, with Australian hours for part of the year, and the recordings cover everyone else.',
      ],
      [
        'Does anyone need equipment or to change clothes?',
        'No. There is nothing to download, no mat and no equipment, and no need to change out of work clothes. The chair yoga is done seated in an ordinary chair.',
      ],
    ],
  },
  {
    heading: 'Pricing and getting started',
    items: [
      [
        'How much does it cost?',
        'Pricing is a flat monthly subscription, priced by session frequency. You can see the current tiers on the pricing page.',
      ],
      [
        'How is it priced?',
        'Per team. You pay one flat monthly fee for your whole team, not a per-seat licence, so adding people does not add cost.',
      ],
      [
        'Can we try it before committing?',
        'Yes. There is a single pilot session, one live 30-minute class, and if you continue, the pilot fee is credited to your first month. Once it is a weekly habit, the ongoing subscription gives you the attendance and wellbeing reporting.',
      ],
      [
        'Can we book a one-off session, like a lunch and learn?',
        'Yes. A single virtual session for a team event, kickoff or lunch and learn is a low-commitment way to see how it lands before deciding on anything ongoing.',
      ],
      [
        'Do you offer in-person sessions?',
        'The sessions are delivered live online, over Teams or Zoom, which is what lets them reach a whole distributed team equally. If you have a specific in-person need, get in touch and we can talk it through.',
      ],
      [
        'How do we get started?',
        'Get in touch through the contact form with a line about your team. I will reply, and we can either talk it through or set up a first session.',
      ],
    ],
  },
  {
    heading: 'How it compares',
    items: [
      [
        'Is this an alternative to a wellbeing app like Calm or Headspace for Business?',
        'It works well alongside them, or instead of them. Apps are good content, but they are passive: they only help the people who remember to open them. A live, scheduled class holds the time and removes the hardest part, starting, so far more of the team actually takes part.',
      ],
      [
        'We already have an EAP. Why add this?',
        'An employee assistance programme is a reactive safety net for people in crisis, and it is worth keeping. This is the opposite: a proactive weekly habit that supports everyone before things reach that point. The two complement each other.',
      ],
      [
        'How do you measure whether it is working?',
        'I report attendance and repeat attendance, tracked automatically, summarised in a simple report for leadership.',
      ],
    ],
  },
];

const allFaqs = groups.flatMap((g) => g.items);

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: allFaqs.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://remoteyogacoach.com/' },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://remoteyogacoach.com/faq' },
      ],
    },
  ],
};

const Faq = () => (
  <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
    <SEO
      title="Frequently Asked Questions | Remote Yoga Coach"
      description="Common questions on live meditation, breathing and chair yoga classes for remote and hybrid teams: how sessions run, pricing, cameras, recordings and time zones."
      canonical="https://remoteyogacoach.com/faq"
      structuredData={structuredData}
    />
    <Navbar />

    <main>
      <section className="bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-6 md:px-8 text-center">
          <GuideEyebrow>FAQ</GuideEyebrow>
          <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
            Frequently asked questions
          </h1>
          <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[600px] mx-auto">
            Everything HR and people leaders usually ask about live wellbeing classes for a remote or hybrid team. If
            your question is not here, just get in touch.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-6 md:px-8 space-y-14">
          {groups.map((g) => (
            <div key={g.heading}>
              <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl tracking-[-0.015em] leading-tight">{g.heading}</h2>
              <GuideFAQ items={g.items} />
            </div>
          ))}
        </div>
      </section>

      <GuideCTA
        heading="Still have a question?"
        text="Tell me about your team and what you are looking for, whether you just want more information or you are ready to try a session. I am happy to help."
        buttonLabel="Get in touch"
      />
    </main>

    <Footer />
    <ScrollToTop />
  </div>
);

export default Faq;
