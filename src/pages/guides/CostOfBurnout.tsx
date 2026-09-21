import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import {
  GuideEyebrow,
  GuideHeading,
  GuideProse,
  GuideList,
  PullQuote,
  NumberedSteps,
  GuideTOC,
  SpokeCard,
  GuideFAQ,
  GuideCTA,
  RelatedGuides,
} from '@/components/GuideLayout';

const faqItems: Array<[string, string]> = [
  [
    'What does employee burnout actually cost an employer?',
    'Deloitte puts the cost of poor mental health to UK employers at around 51 billion pounds a year, roughly 2,646 pounds per affected employee. Most of it is presenteeism, not absence.',
  ],
  [
    'What is the ROI of workplace wellbeing spending?',
    'Deloitte finds an average return of 4.70 pounds for every 1 pound invested in workplace mental health, and around 6.30 pounds when spending is preventive and organisation-wide. In Australia, PwC and Beyond Blue put it at 2.30 Australian dollars per 1 dollar.',
  ],
  [
    'Why is burnout so expensive if people still show up to work?',
    'Because showing up is the expensive part. Around 89 percent of the cost of poor mental health comes from presenteeism, not absence. A burnt-out employee who logs on ships slower work and more errors for months before anyone books a sick day.',
  ],
  [
    'How do I build a business case for wellbeing spend?',
    'Anchor it on cost-avoidance. Show three numbers: about 2,646 pounds per affected employee, six to nine months of salary to replace one leaver, and around 4.70 pounds back per 1 pound. Then propose a measured pilot so you have your own team’s data.',
  ],
  [
    'Is prevention really cheaper than reacting to burnout?',
    'Consistently, yes. Employee assistance programmes reach only 3 to 5 percent of staff, and only after a problem has formed. Preventive habits reach the whole team before the crisis and return more per pound. A recurring session costs a fraction of one burnout resignation.',
  ],
  [
    'What is the cheapest expensive mistake employers make here?',
    'Buying a wellbeing tool nobody uses. App licences and gym benefits look like action on the invoice, but usage collapses within weeks. Paying for access is not the same as paying for outcomes, and only measured, used interventions move the number.',
  ],
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'What employee burnout costs, and the ROI of fixing it',
      description:
        'The real cost of employee burnout to employers, why most of it is invisible, the documented return on wellbeing spend, and how to build the business case for prevention.',
      author: { '@type': 'Person', name: 'Camilla', jobTitle: 'Corporate Wellness Coach' },
      publisher: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
      mainEntityOfPage: 'https://remoteyogacoach.com/guides/cost-of-employee-burnout',
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
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://remoteyogacoach.com/guides/cost-of-employee-burnout' },
        { '@type': 'ListItem', position: 3, name: 'What employee burnout costs' },
      ],
    },
  ],
};

const tocItems = [
  { href: '#headline', label: 'The headline number' },
  { href: '#invisible', label: 'Why most of the cost is invisible' },
  { href: '#one-number', label: 'The one number that ends the debate' },
  { href: '#return', label: 'What the return actually looks like' },
  { href: '#prevention', label: 'Why prevention is the cheap option' },
  { href: '#business-case', label: 'Building the business case' },
  { href: '#faq', label: 'Frequently asked questions' },
];

const CostOfBurnout = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="What Employee Burnout Costs, and the ROI of Fixing It | Remote Yoga Coach"
        description="The real cost of employee burnout to employers, why most of it is invisible, the documented ROI of wellbeing spend, and how to build the business case for prevention."
        canonical="https://remoteyogacoach.com/guides/cost-of-employee-burnout"
        ogType="article"
        ogImage="https://remoteyogacoach.com/og/cost-of-employee-burnout.png?v=4"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="max-w-[820px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideEyebrow>Guide for HR and leaders</GuideEyebrow>
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              What employee burnout costs, and the ROI of fixing it
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed">
              Wellbeing loses the budget argument when it is pitched as a kindness. Burnout is already a cost in your
              accounts, hidden in slower work, quiet attrition and sick leave. Here are the numbers, and a way to prove
              the return.
            </p>
            <GuideTOC items={tocItems} />
          </div>
        </section>

        {/* HEADLINE */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="headline" eyebrow="The number">The headline number</GuideHeading>
            <GuideProse>
              <p>
                Poor mental health costs UK employers around 51 billion pounds a year, roughly 2,646 pounds per
                affected employee. That is Deloitte's figure, built from lost output, staff turnover and sick leave.
              </p>
              <p>The picture repeats in every market a distributed team spans:</p>
            </GuideProse>
            <GuideList
              items={[
                ['United Kingdom', 'Over 22 million working days lost to stress, depression and anxiety in a single year (Health and Safety Executive).'],
                ['Europe', 'Work-related depression alone is estimated at around 617 billion euros a year across the EU (EU-OSHA).'],
                ['Australia', 'Roughly 10.9 billion Australian dollars a year to employers (PwC and Beyond Blue).'],
                ['Global', 'Gallup puts the cost of disengagement at about 8.9 trillion US dollars, close to 9 percent of global GDP.'],
              ]}
            />
          </div>
        </section>

        {/* INVISIBLE */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="invisible" eyebrow="Where it hides">Why most of the cost is invisible</GuideHeading>
            <GuideProse>
              <PullQuote>
                The expensive form of burnout is not the person who is off sick. It is the person still logging on.
              </PullQuote>
              <p>
                Around 89 percent of the cost of poor mental health comes from presenteeism: people at their desks but
                depleted. They ship slower work, make more mistakes and stop offering ideas, for months before anyone
                books a sick day. In a distributed team, nobody is walking the floor to notice.
              </p>
              <p>
                Headcount-level wellbeing metrics miss it entirely. My guide to{' '}
                <Link to="/guides/remote-work-burnout" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  remote work burnout
                </Link>{' '}
                covers the warning signs a manager can actually spot from a distance.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* ONE NUMBER */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="one-number" eyebrow="The clincher" size="md">The one number that ends the debate</GuideHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                If a room is unmoved by industry billions, bring it down to one person. Replacing an employee who
                leaves commonly costs six to nine months of their salary, once you count recruitment, onboarding and
                the load on everyone covering the gap.
              </p>
              <p>
                A recurring wellbeing programme for a whole team, for a year, costs a fraction of a single burnout
                resignation. You do not need to prevent many departures for the maths to work.
              </p>
            </div>
          </div>
        </section>

        {/* RETURN */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="return" eyebrow="The return">What the return actually looks like</GuideHeading>
            <GuideProse>
              <p>
                Cost-avoidance is half the case. The other half is documented return, and it is unusually strong.
              </p>
            </GuideProse>
            <GuideList
              items={[
                ['4.70 pounds per 1 pound', 'Deloitte’s average return on investment in workplace mental health, across UK employers.'],
                ['Up to 6.30 pounds per 1 pound', 'When spending is preventive and organisation-wide, not reactive.'],
                ['2.30 Australian dollars per 1 dollar', 'PwC and Beyond Blue, alongside a roughly 33 percent reduction in absenteeism and claims.'],
                ['89 percent better performance', 'The share of employees who say they perform better when their employer takes wellbeing seriously.'],
              ]}
            />
          </div>
        </section>

        {/* PREVENTION */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="prevention" eyebrow="Efficiency">Why prevention is the cheap option</GuideHeading>
            <GuideProse>
              <p>
                Most wellbeing budgets go on the wrong end of the problem. Employee assistance programmes are reactive
                and reach only 3 to 5 percent of staff. A quarter of employees do not know their EAP exists. Apps and
                gym benefits look like action, but usage collapses within weeks.
              </p>
              <p>
                Preventive habits reach everyone, before the crisis, on a schedule. A review of 28 studies found a
                single session of yoga, meditation or breathing reduced stress reactivity in 71 percent of
                physiological measures. I unpack what does and does not work in{' '}
                <Link to="/blog/do-workplace-wellness-apps-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  do workplace wellness apps actually work?
                </Link>
              </p>
            </GuideProse>
          </div>
        </section>

        {/* BUSINESS CASE */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="business-case" eyebrow="Make the case">Building the business case</GuideHeading>
            <GuideProse>
              <p>If you have to sell this internally, keep the case to four moves.</p>
            </GuideProse>
            <NumberedSteps
              items={[
                ['Lead with cost-avoidance', 'Open on the money already leaking: about 2,646 pounds per affected employee, most of it invisible. You are paying it now.'],
                ['Attach it to one departure', 'One resignation costs six to nine months of salary. Prevention costs a fraction of that.'],
                ['Show the documented return', 'Around 4.70 pounds back per 1 pound, up to 6.30 for preventive, whole-team programmes.'],
                ['Propose a measured pilot', 'Ask for a short trial, and count who keeps coming back. Your next slide is then your own team’s data.'],
              ]}
            />
            <GuideProse>
              <p>
                Start with a single pilot session. See{' '}
                <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  how the programme works
                </Link>{' '}
                and the public{' '}
                <Link to="/pricing" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  pricing
                </Link>
                , or read{' '}
                <Link to="/blog/how-much-does-corporate-yoga-cost" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  how much corporate wellbeing costs
                </Link>{' '}
                to benchmark the spend.
              </p>
            </GuideProse>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <SpokeCard
                to="/blog/prevent-burnout-distributed-team"
                label="How to prevent burnout in a distributed team"
                description="The manager playbook: remote warning signs, what fails, and the habits that reduce risk."
              />
              <SpokeCard
                to="/blog/corporate-wellness-ideas-remote-teams"
                label="Corporate wellness ideas that actually work"
                description="What earns its budget for a remote team, and what quietly wastes it."
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="faq" eyebrow="FAQ">Frequently asked questions</GuideHeading>
            <GuideFAQ items={faqItems} />
          </div>
        </section>

        <RelatedGuides
          guides={[
            {
              to: '/guides/remote-work-burnout',
              label: 'Remote work burnout: the guide for distributed teams',
              description: 'The signs managers can spot from a distance, and prevention that holds up.',
            },
            {
              to: '/guides/mindfulness-at-work',
              label: 'Mindfulness at work: does it work for teams?',
              description: 'The evidence behind meditation and breathing at work, and how to run it as a habit.',
            },
          ]}
        />

        <GuideCTA
          heading="Try it on your own team"
          text="Start with a single pilot session."
        />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CostOfBurnout;
