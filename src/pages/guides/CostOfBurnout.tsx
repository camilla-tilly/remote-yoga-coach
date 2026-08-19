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
  GuideTOC,
  KeyTakeaways,
  SpokeCard,
  GuideFAQ,
  GuideCTA,
  RelatedGuides,
} from '@/components/GuideLayout';

const faqItems: Array<[string, string]> = [
  [
    'What does employee burnout actually cost an employer?',
    'Deloitte puts the cost of poor mental health to UK employers at around 51 billion pounds a year, roughly 2,646 pounds per affected employee. The largest single component is presenteeism, people at their desks but running on empty, not absence. Globally, Gallup estimates disengagement costs about 8.9 trillion US dollars, or 9 percent of GDP.',
  ],
  [
    'What is the ROI of workplace wellbeing spending?',
    'Deloitte finds an average return of 4.70 pounds for every 1 pound invested in workplace mental health, rising to around 6.30 pounds when the spending is preventive and organisation-wide rather than reactive. In Australia, PwC and Beyond Blue put the figure at 2.30 Australian dollars per 1 dollar, alongside a roughly 33 percent fall in absenteeism and claims.',
  ],
  [
    'Why is burnout so expensive if people still show up to work?',
    'Because showing up is the expensive part. Around 89 percent of the cost of poor mental health comes from presenteeism, not absence. A burnt-out employee who logs on still ships slower work, more errors and less initiative, and they do it for months before anyone books a sick day. Absence is visible and cheap by comparison; presenteeism is invisible and dwarfs it.',
  ],
  [
    'How do I build a business case for wellbeing spend?',
    'Anchor it on cost-avoidance, not niceness. Put three numbers in front of your finance approver: the cost of poor mental health per affected employee (about 2,646 pounds), the cost of replacing one person who leaves (commonly six to nine months of their salary), and the documented return on prevention (around 4.70 pounds per 1 pound). Then propose a measured pilot so the next slide shows your own team’s data, not an industry average.',
  ],
  [
    'Is prevention really cheaper than reacting to burnout?',
    'Consistently, yes. Reactive support such as employee assistance programmes is used by only 3 to 5 percent of staff and only after a problem has formed. Preventive habits reach the whole team before the crisis and return more per pound. A recurring wellbeing session costs a fraction of a single burnout resignation.',
  ],
  [
    'What is the cheapest expensive mistake employers make here?',
    'Buying a wellbeing tool nobody uses. App licences and gym benefits look like action on the invoice, but usage collapses within weeks, so the spend produces almost no reduction in the cost above. Paying for access is not the same as paying for outcomes, and only measured, used interventions move the number.',
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
        ogImage="https://remoteyogacoach.com/og/cost-of-employee-burnout.png"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="max-w-[820px] mx-auto px-5">
            <GuideEyebrow>Guide for HR and leaders</GuideEyebrow>
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              What employee burnout costs, and the ROI of fixing it
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed">
              Wellbeing usually loses the budget argument because it is pitched as a kindness. It is not. Burnout is
              already a line item in your accounts, it is just spread invisibly across slower work, quiet attrition
              and sick leave that nobody traced back to its cause. This guide gives HR and finance the numbers to
              move it from a nice-to-have to a cost-avoidance case, and a simple way to prove the return on your own
              team.
            </p>
            <KeyTakeaways items={[
              'Poor mental health costs UK employers about £51bn a year, roughly £2,646 per affected employee, and about 89% of that cost is invisible presenteeism.',
              'Workplace mental health spend returns about £4.70 per £1, up to £6.30 when it is preventive and organisation-wide.',
              'Prevention is the cheap option: EAPs reach 3 to 5% of staff and apps drop off, while a year of sessions costs a fraction of one burnout resignation.',
              'Build the case on cost-avoidance plus replacement cost plus documented ROI, then prove it on your own team with a measured pilot.',
            ]} />
            <GuideTOC items={tocItems} />
          </div>
        </section>

        {/* HEADLINE */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="headline" eyebrow="The number">The headline number</GuideHeading>
            <GuideProse>
              <p>
                Poor mental health costs UK employers around 51 billion pounds a year. That is Deloitte's figure, and
                it breaks down to roughly 2,646 pounds per affected employee, every year. It is not a soft estimate
                pulled from a wellbeing brochure; it is built from lost output, staff turnover and sick leave.
              </p>
              <p>The same picture repeats in every market a distributed team is likely to span:</p>
            </GuideProse>
            <GuideList
              items={[
                ['United Kingdom', 'About 51 billion pounds a year to employers, around 2,646 pounds per affected employee (Deloitte). The Health and Safety Executive recorded over 22 million working days lost to stress, depression and anxiety in a single year.'],
                ['Europe', 'Work-related depression alone is estimated at around 617 billion euros a year across the EU (EU-OSHA).'],
                ['Australia', 'Mental health conditions cost employers roughly 10.9 billion Australian dollars a year (PwC and Beyond Blue).'],
                ['Global', 'Gallup puts the cost of disengagement at about 8.9 trillion US dollars, close to 9 percent of global GDP.'],
              ]}
            />
          </div>
        </section>

        {/* INVISIBLE */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="invisible" eyebrow="Where it hides">Why most of the cost is invisible</GuideHeading>
            <GuideProse>
              <p>
                Here is the part that gets missed in the budget meeting. The expensive form of burnout is not the
                person who is off sick. It is the person still logging on.
              </p>
              <p>
                Around 89 percent of the cost of poor mental health comes from presenteeism, not absence, people at
                their desks but depleted. They ship slower work, make more mistakes, stop offering ideas, and hold
                that pattern for months before anyone books a single sick day. Absence is visible and, relatively,
                cheap. Presenteeism is invisible and enormous, and in a distributed team it is even harder to see
                because there is no one walking the floor to notice the grey face on the third call of the day.
              </p>
              <p>
                That is why headcount-level wellbeing metrics miss it entirely. The cost is already being paid, every
                week, in output nobody is measuring. My guide to{' '}
                <Link to="/guides/remote-work-burnout" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  remote work burnout
                </Link>{' '}
                covers the warning signs a manager can actually spot from a distance.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* ONE NUMBER */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-clay mb-4">The clincher</span>
            <h2 id="one-number" className="scroll-mt-28 font-fraunces font-normal text-3xl md:text-4xl leading-tight">
              The one number that ends the debate
            </h2>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>
                If a room is unmoved by industry billions, bring it down to one person. Replacing an employee who
                leaves commonly costs six to nine months of their salary once you count recruitment, onboarding, lost
                productivity and the load on everyone covering the gap. For a mid-level hire, that is comfortably tens
                of thousands.
              </p>
              <p>
                Now set that against the cost of prevention. A recurring wellbeing programme for a whole team, for a
                year, costs a fraction of a single burnout resignation. You do not need to prevent many departures
                for the maths to have already worked. That is the frame a finance approver understands: not wellbeing
                as spend, but wellbeing as the cheaper side of a risk you are carrying either way.
              </p>
            </div>
          </div>
        </section>

        {/* RETURN */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="return" eyebrow="The return">What the return actually looks like</GuideHeading>
            <GuideProse>
              <p>
                Cost-avoidance is one half of the case. The other half is documented return, and it is unusually
                strong for a category so often dismissed as fluffy.
              </p>
            </GuideProse>
            <GuideList
              items={[
                ['4.70 pounds per 1 pound', 'Deloitte’s average return on investment in workplace mental health, across UK employers.'],
                ['Up to 6.30 pounds per 1 pound', 'The return when spending is preventive and organisation-wide, rather than reactive support after a crisis.'],
                ['2.30 Australian dollars per 1 dollar', 'PwC and Beyond Blue’s figure for Australian employers, alongside a roughly 33 percent reduction in absenteeism and claims.'],
                ['89 percent better performance', 'The share of employees who say they perform better at work when their employer takes wellbeing seriously.'],
              ]}
            />
            <GuideProse>
              <p>
                The consistent thread: prevention returns more than reaction. Spending that reaches the whole team
                before anyone breaks down beats spending that waits for the crisis and then treats it.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* PREVENTION */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="prevention" eyebrow="Efficiency">Why prevention is the cheap option</GuideHeading>
            <GuideProse>
              <p>
                Most wellbeing budgets are spent on the wrong end of the problem. Employee assistance programmes are
                reactive by design and reach only 3 to 5 percent of staff, often after a problem has already formed.
                A quarter of employees do not know their EAP exists. Meditation apps and gym benefits look like action
                on the invoice, but usage collapses within weeks, so the spend buys access, not outcomes.
              </p>
              <p>
                Preventive habits are both cheaper and more effective because they reach everyone, before the crisis,
                on a schedule. And the method has evidence behind it: a review of 28 studies found that a single
                session of yoga, meditation or breathing reduced stress reactivity in 71 percent of physiological
                measures. Run weekly, that becomes recovery built into the calendar rather than hoped for. I unpack
                what does and does not work in{' '}
                <Link to="/blog/do-workplace-wellness-apps-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  do workplace wellness apps actually work?
                </Link>
              </p>
            </GuideProse>
          </div>
        </section>

        {/* BUSINESS CASE */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="business-case" eyebrow="Make the case">Building the business case</GuideHeading>
            <GuideProse>
              <p>
                If you are the HR or people leader who has to sell this internally, keep the case to four moves. It
                works for the CEO who signs off and the finance approver who scrutinises it.
              </p>
            </GuideProse>
            <GuideList
              items={[
                ['Lead with cost-avoidance', 'Open on the money already leaking: about 2,646 pounds per affected employee, most of it invisible presenteeism. This is a number you are paying now, not a new expense.'],
                ['Attach it to one departure', 'Translate it into the replacement cost of a single resignation, six to nine months of salary. Prevention costs a fraction of that.'],
                ['Show the documented return', 'Around 4.70 pounds back per 1 pound, up to 6.30 for preventive, whole-team programmes. This is a positive-ROI line item, not a cost centre.'],
                ['Propose a measured pilot', 'Ask for a short, low-risk trial that reports attendance and pre and post stress and energy. Your next slide is then your own team’s data, which beats any industry average in a budget meeting.'],
              ]}
            />
            <GuideProse>
              <p>
                That last step is the whole point of how I run things. Start with a single pilot session, then
                once it is a weekly habit the attendance and wellbeing reporting gives you a report you can take
                straight to the budget-holder. See{' '}
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
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
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
          heading="Prove the return on your own team"
          text="A single pilot session of live weekly wellbeing, then once it is a weekly habit the attendance and pre and post stress reporting gives you something concrete to take straight to your budget-holder."
        />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CostOfBurnout;
