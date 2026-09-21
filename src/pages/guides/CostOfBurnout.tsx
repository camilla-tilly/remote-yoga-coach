import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { GuideProse, GuideList, PullQuote, NumberedSteps, GuideTOC, SpokeCard, GuideFAQ } from '@/components/GuideLayout';
import { PageHero, PageSection, ClosingCTA, PillLink } from '@/components/PageKit';

const faqItems: Array<[string, string]> = [
  [
    'What does employee burnout actually cost an employer?',
    'Deloitte puts the cost of poor mental health to UK employers at around 51 billion pounds a year, roughly 2,646 pounds per affected employee. Most of it comes from presenteeism rather than absence.',
  ],
  [
    'What is the ROI of workplace wellbeing spending?',
    'Deloitte finds an average return of 4.70 pounds for every 1 pound invested in workplace mental health, and around 6.30 pounds when spending is preventive and organisation-wide. In Australia, PwC and Beyond Blue put it at 2.30 Australian dollars per 1 dollar.',
  ],
  [
    'Why is burnout so expensive if people still show up to work?',
    'Because most of the cost comes from people who keep working. Around 89 percent of the cost of poor mental health comes from presenteeism, not absence. A burnt-out employee who logs on ships slower work and more errors for months before anyone books a sick day.',
  ],
  [
    'How do I build a business case for wellbeing spend?',
    'Base it on the costs you would avoid. Show three numbers: about 2,646 pounds per affected employee, six to nine months of salary to replace one leaver, and around 4.70 pounds back per 1 pound. Then propose a measured pilot so you have your own team’s data.',
  ],
  [
    'Is prevention really cheaper than reacting to burnout?',
    'Yes, consistently. Employee assistance programmes reach only 3 to 5 percent of staff, and only after a problem has formed. Preventive habits reach the whole team before the crisis and return more per pound. A recurring session costs a fraction of one burnout resignation.',
  ],
  [
    'What is a common mistake employers make with wellbeing spending?',
    'A common one is buying a wellbeing tool nobody uses. App licences and gym benefits look like action on the invoice, but usage drops sharply within weeks. Paying for access does not guarantee results, and only interventions that people use and that are measured reduce the cost.',
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
  { href: '#headline', label: 'What burnout costs employers' },
  { href: '#invisible', label: 'Why most of the cost is invisible' },
  { href: '#one-number', label: 'The cost of replacing one employee' },
  { href: '#return', label: 'The return on wellbeing spending' },
  { href: '#prevention', label: 'Why preventing burnout costs less' },
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
        <PageHero
          eyebrow="Guide"
          title="What employee burnout costs, and the ROI of fixing it"
          aside={
            <div className="[&>nav]:mt-0 [&>nav]:bg-transparent">
              <GuideTOC items={tocItems} />
            </div>
          }
        >
          <p>
            When wellbeing is presented as a kindness to staff, it tends to lose out in budget discussions. But burnout
            already costs your company money, through slower work, people quietly leaving and sick leave. This guide
            sets out the numbers and a way to prove the return.
          </p>
        </PageHero>

        <PageSection id="headline" heading="What burnout costs employers">
          <GuideProse>
            <p>
              Poor mental health costs UK employers around 51 billion pounds a year, roughly 2,646 pounds per affected
              employee. That is Deloitte's figure, built from lost output, staff turnover and sick leave.
            </p>
            <p>The figures are similar in the other markets a distributed team is likely to span:</p>
          </GuideProse>
          <GuideList
            items={[
              ['United Kingdom', 'Over 22 million working days lost to stress, depression and anxiety in a single year (Health and Safety Executive).'],
              ['Europe', 'Work-related depression alone is estimated at around 617 billion euros a year across the EU (EU-OSHA).'],
              ['Australia', 'Roughly 10.9 billion Australian dollars a year to employers (PwC and Beyond Blue).'],
              ['Global', 'Gallup puts the cost of disengagement at about 8.9 trillion US dollars, close to 9 percent of global GDP.'],
            ]}
          />
        </PageSection>

        <PageSection id="invisible" heading="Why most of the cost is invisible">
          <GuideProse>
            <PullQuote>Most of the cost of burnout comes from people who are still working, not from people who are off sick.</PullQuote>
            <p>
              Around 89 percent of the cost of poor mental health comes from presenteeism: people at their desks but
              depleted. They ship slower work, make more mistakes and stop offering ideas, for months before anyone
              books a sick day. In a distributed team, there is nobody in the office to notice.
            </p>
            <p>
              Headcount-level wellbeing metrics miss it entirely. My guide to{' '}
              <Link to="/guides/remote-work-burnout" className="text-clay underline underline-offset-4 hover:text-clayDark">
                remote work burnout
              </Link>{' '}
              covers the warning signs a manager can actually spot from a distance.
            </p>
          </GuideProse>
        </PageSection>

        <PageSection id="one-number" heading="The cost of replacing one employee">
          <GuideProse>
            <p>
              If national figures in the billions do not convince people, look at the cost of one person. Replacing an
              employee who leaves commonly costs six to nine months of their salary, once you count recruitment,
              onboarding and the load on everyone covering the gap.
            </p>
            <p>
              A recurring wellbeing programme for a whole team, for a year, costs a fraction of what a single burnout
              resignation costs. You only need to prevent a few departures for it to pay for itself.
            </p>
          </GuideProse>
        </PageSection>

        <PageSection id="return" heading="The return on wellbeing spending">
          <GuideProse>
            <p>
              Avoiding costs is one part of the case. The other part is the documented return on investment, which is
              unusually high.
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
        </PageSection>

        <PageSection id="prevention" heading="Why preventing burnout costs less">
          <GuideProse>
            <p>
              Most wellbeing budgets are spent after problems have already appeared. Employee assistance programmes are
              reactive and reach only 3 to 5 percent of staff. A quarter of employees do not know their EAP exists.
              Apps and gym benefits look like action, but usage drops sharply within weeks.
            </p>
            <p>
              Preventive habits reach the whole team on a regular schedule, before anyone reaches a crisis. A review of
              28 studies found a single session of yoga, meditation or breathing reduced stress reactivity in 71
              percent of physiological measures. I explain what does and does not work in{' '}
              <Link to="/blog/do-workplace-wellness-apps-work" className="text-clay underline underline-offset-4 hover:text-clayDark">
                do workplace wellness apps actually work?
              </Link>
            </p>
          </GuideProse>
        </PageSection>

        <PageSection id="business-case" heading="Building the business case">
          <GuideProse>
            <p>If you need to get this approved internally, you can make the case in four steps.</p>
          </GuideProse>
          <NumberedSteps
            items={[
              ['Start with the cost you already pay', 'Begin with the money already being lost: about 2,646 pounds per affected employee, most of it hard to see. The company is paying this now.'],
              ['Show the cost of one resignation', 'One resignation costs six to nine months of salary. Prevention costs a fraction of that.'],
              ['Show the documented return', 'The return is around 4.70 pounds per 1 pound, and up to 6.30 for preventive, whole-team programmes.'],
              ['Propose a measured pilot', 'Ask for a short trial and count how many people keep coming back. That gives you your own team’s data for the next discussion.'],
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
              description="Which wellness spending is worth it for a remote team, and which is wasted."
            />
          </div>
        </PageSection>

        <PageSection id="faq" heading="Frequently asked questions">
          <GuideFAQ items={faqItems} />
        </PageSection>

        <PageSection heading="Other guides">
          <div className="grid gap-4">
            <SpokeCard
              to="/guides/remote-work-burnout"
              label="Remote work burnout: the guide for distributed teams"
              description="The signs managers can spot from a distance, and how to prevent burnout."
            />
            <SpokeCard
              to="/guides/mindfulness-at-work"
              label="Mindfulness at work: does it work for teams?"
              description="The evidence behind meditation and breathing at work, and how to run it as a habit."
            />
          </div>
        </PageSection>

        <ClosingCTA
          heading="Try it on your own team"
          actions={
            <>
              <PillLink to="/demo" variant="light">Book a pilot</PillLink>
              <PillLink to="/pricing" variant="lightOutline">See pricing</PillLink>
            </>
          }
        >
          <p>Start with a single pilot session.</p>
        </ClosingCTA>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CostOfBurnout;
