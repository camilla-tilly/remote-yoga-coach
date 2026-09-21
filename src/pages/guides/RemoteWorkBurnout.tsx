import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { GuideProse, GuideList, GuideTOC, ProseList, PullQuote, SpokeCard, GuideFAQ } from '@/components/GuideLayout';
import { PageHero, PageSection, ClosingCTA, PillLink } from '@/components/PageKit';

const faqItems: Array<[string, string]> = [
  [
    'What is burnout, exactly?',
    'The World Health Organization defines burnout as a syndrome resulting from chronic workplace stress that has not been successfully managed: exhaustion rest does not fix, growing cynicism about the job, and a real drop in effectiveness. It is not a personal weakness.',
  ],
  [
    'Is burnout worse for remote workers?',
    'The risk is different rather than automatically worse, but surveys consistently show remote and hybrid workers reporting higher burnout. The main drivers are isolation, blurred work-home boundaries, always-on messaging and the lost commute.',
  ],
  [
    'What are the first signs of burnout at work?',
    'Early signs include tiredness a weekend no longer repairs, dread, cynicism, trouble concentrating and longer hours for the same output. In remote teams, watch for cameras going off, shorter replies and dropping out of optional calls.',
  ],
  [
    'How do you prevent burnout in a remote team?',
    'Prevention works on two levels. The first is the structure of work: realistic workloads, clear priorities and trained managers. The second is a regular rhythm: protected hours, real breaks and a recurring recovery habit such as a weekly live wellbeing session. One-off wellness days and passive apps have consistently poor results.',
  ],
  [
    'Can yoga, breathing or meditation help with burnout?',
    'They help with the stress physiology that feeds burnout: a review of 28 studies found a single session reduced stress reactivity in 71 percent of physiological measures. They do not replace fixing an impossible workload.',
  ],
  [
    'How much does burnout cost an employer?',
    'Deloitte puts the cost of poor mental health to UK employers at 51 billion pounds a year, roughly 2,646 pounds per affected employee. The same research finds 4.70 pounds back for every 1 pound invested.',
  ],
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Remote work burnout: signs, causes and prevention for distributed teams',
      description:
        'Why distributed teams burn out quietly, the warning signs managers can spot remotely, what the damage costs, and the prevention habits that actually work.',
      author: { '@type': 'Person', name: 'Camilla', jobTitle: 'Corporate Wellness Coach' },
      publisher: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
      mainEntityOfPage: 'https://remoteyogacoach.com/guides/remote-work-burnout',
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
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://remoteyogacoach.com/guides/remote-work-burnout' },
        { '@type': 'ListItem', position: 3, name: 'Remote work burnout' },
      ],
    },
  ],
};

const tocItems = [
  { href: '#what-burnout-is', label: 'What burnout is, and what it is not' },
  { href: '#why-remote', label: 'Why remote teams are at higher risk' },
  { href: '#signs', label: 'The signs, including the ones you can spot on Slack' },
  { href: '#cost', label: 'What burnout costs' },
  { href: '#what-fails', label: 'What does not work' },
  { href: '#prevention', label: 'How to prevent burnout in a remote team' },
  { href: '#recovery', label: 'If someone is already burning out' },
  { href: '#faq', label: 'Frequently asked questions' },
];

const RemoteWorkBurnout = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Remote Work Burnout: Signs and Prevention | Remote Yoga Coach"
        description="Why distributed teams burn out quietly, the warning signs managers can spot remotely, what it costs employers, and the prevention habits that actually work."
        canonical="https://remoteyogacoach.com/guides/remote-work-burnout"
        ogType="article"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        <PageHero
          eyebrow="Guide"
          title="Remote work burnout: signs, causes and prevention for distributed teams"
          aside={
            <div className="[&>nav]:mt-0 [&>nav]:bg-transparent">
              <GuideTOC items={tocItems} />
            </div>
          }
        >
          <p>
            In an office, colleagues often notice when someone is heading for burnout. In a distributed team it is easy
            to miss, because the Slack messages still look fine and the status dot stays green, until the person
            resigns or goes on long-term sick leave.
          </p>
        </PageHero>

        <PageSection id="what-burnout-is" heading="What burnout is, and what it is not">
          <GuideProse>
            <p>
              The World Health Organization classifies burnout as an occupational phenomenon: chronic workplace stress
              that has not been successfully managed. It shows up as exhaustion that weekends no longer fix, growing
              cynicism about the work, and a drop in effectiveness.
            </p>
            <p>
              It is different from ordinary tiredness, and it is not a character flaw. It often affects the most
              conscientious people first, because they keep taking on the extra work.
            </p>
            <p>
              If you are reading this about yourself, needing time to recover does not mean you are underperforming.
              You can be good at your job and still have limits.
            </p>
          </GuideProse>
        </PageSection>

        <PageSection id="why-remote" heading="Why remote teams are at higher risk">
          <GuideProse>
            <p>
              Surveys consistently find remote and hybrid workers reporting more burnout. Four things explain most of
              it.
            </p>
          </GuideProse>
          <GuideList
            items={[
              [
                'Isolation',
                'Remote workers report loneliness at roughly double the rate of office-based staff, and loneliness drains the reserves that buffer stress.',
              ],
              [
                'Blurred boundaries',
                'When the desk is three metres from the bed, nothing clearly marks the end of the working day.',
              ],
              [
                'Always-on culture',
                'When one person replies quickly at 9pm, others start to feel they should too. People end up checking channels through dinner and lose the time they need to recover.',
              ],
              [
                'The lost commute',
                'The commute used to give people time to unwind between work and home. Without it, you can go from a stressful message to the sofa in ninety seconds.',
              ],
            ]}
          />
        </PageSection>

        <PageSection id="signs" heading="The signs, including the ones you can spot on Slack">
          <GuideProse>
            <p>
              Signs in yourself include tiredness a weekend no longer repairs, Sunday-evening dread, irritability,
              trouble concentrating, and longer hours for the same output.
            </p>
            <p>
              In a distributed team you will not see anyone looking exhausted, but the signs show up in how people
              work online:
            </p>
          </GuideProse>
          <GuideList
            items={[
              [
                'Cameras going off',
                'Someone who used to join on camera gradually stops. It can look like a preference, but it is often a sign they are withdrawing.',
              ],
              [
                'Slower, shorter replies',
                'One slow reply means little, but a pattern matters. Messages that used to come back in minutes now take hours and are much shorter.',
              ],
              [
                'Dropping optional calls',
                'The social call and the coffee chat are usually the first things people drop, because they are optional.',
              ],
              [
                'Productive overwork',
                'Managers miss this sign most, because it looks like commitment: late-night messages, output at a pace nobody asked for. Overwork that goes on for weeks is a warning sign.',
              ],
            ]}
          />
          <GuideProse>
            <p>
              One of these means little. A cluster in one person over a few weeks is a reason for a gentle private
              check-in rather than a conversation about performance. The manager playbook is in my post on{' '}
              <Link to="/blog/prevent-burnout-distributed-team" className="text-clay underline underline-offset-4 hover:text-clayDark">
                preventing burnout in a distributed team
              </Link>
              .
            </p>
          </GuideProse>
        </PageSection>

        <PageSection id="cost" heading="What burnout costs">
          <GuideProse>
            <p>If you need to make the business case, these are the figures from the research.</p>
            <ProseList
              items={[
                'Deloitte puts the cost of poor mental health to UK employers at 51 billion pounds a year, around 2,646 pounds per affected employee, mostly presenteeism.',
                'The UK Health and Safety Executive recorded over 22 million working days lost to stress, depression and anxiety in a single year.',
                'Gallup estimates disengagement costs the global economy around 9 percent of GDP.',
              ]}
            />
            <p>
              The same Deloitte research finds 4.70 pounds back for every 1 pound spent, and more when it is
              preventive and organisation-wide.
            </p>
            <PullQuote>Preventing burnout costs an employer much less than dealing with it afterwards.</PullQuote>
          </GuideProse>
        </PageSection>

        <PageSection id="what-fails" heading="What does not work">
          <GuideProse>
            <p>Most corporate wellbeing spend goes on things with weak results:</p>
          </GuideProse>
          <GuideList
            items={[
              [
                'The one-off wellness day',
                'A massage chair and a fruit basket do nothing for chronic stress.',
              ],
              [
                'The unused app subscription',
                'Paying for licences does not mean people use them. Usage drops sharply within weeks, because the app relies on exhausted people starting a practice on their own.',
              ],
              [
                'The EAP nobody touches',
                'Used by 3 to 5 percent of staff, and a quarter of employees do not know theirs exists. It helps after a crisis, but it does not prevent one.',
              ],
              [
                'Resilience training that shifts the blame',
                'Teaching people to endure an impossible workload moves the problem onto them. If the workload is causing the burnout, the workload is what needs to change.',
              ],
            ]}
          />
        </PageSection>

        <PageSection id="prevention" heading="How to prevent burnout in a remote team">
          <GuideProse>
            <p>
              Prevention has two parts: changing how the work is set up to remove the causes, and building regular
              recovery into the week.
            </p>
          </GuideProse>
          <GuideList
            items={[
              [
                'Train managers to see it early',
                'Manager training in spotting early signs is consistently one of the highest-leverage interventions in the research. Managers who read the signals above intervene months earlier.',
              ],
              [
                'Make boundaries explicit',
                'Agree in writing when messages expect replies, and have leaders visibly log off on time. Employees with clear work-hour boundaries report substantially lower burnout risk.',
              ],
              [
                'Protect real breaks',
                'Default meetings to 25 or 50 minutes, and protect lunch.',
              ],
              [
                'Schedule recovery as a team ritual',
                'A live session of breathing, gentle movement and meditation, same time every week, makes taking time to recover normal, so people do not feel guilty about it.',
              ],
              [
                'Measure something honest',
                'Track a two-question pulse on stress and energy over time. If an intervention is not moving the numbers, change it.',
              ],
            ]}
          />
          <GuideProse>
            <p>
              My{' '}
              <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                weekly classes
              </Link>{' '}
              cover the second part: a live session of 15 to 30 minutes on Teams each week. For wider options, see{' '}
              <Link to="/blog/corporate-wellness-ideas-remote-teams" className="text-clay underline underline-offset-4 hover:text-clayDark">
                corporate wellness ideas that actually work for remote teams
              </Link>
              .
            </p>
          </GuideProse>
        </PageSection>

        <PageSection id="recovery" heading="If someone is already burning out">
          <GuideProse>
            <p>
              If that is you or someone on your team, say so openly, reduce the workload properly, and build recovery
              back up gradually. See a doctor if exhaustion, sleep problems or low mood are entrenched.
            </p>
            <p>
              Managers can take work off the person's plate visibly, so they do not have to keep proving they are
              struggling. Agree a reduced scope for a while, protect it, and in check-ins ask about the person rather
              than the backlog. Recovery takes months.
            </p>
            <p>
              Slow breathing lowers stress arousal within minutes. Start with the{' '}
              <Link to="/blog/breathing-exercises-for-work-stress" className="text-clay underline underline-offset-4 hover:text-clayDark">
                breathing exercises for work stress
              </Link>
              . They help in the moment, but they will not cure burnout.
            </p>
          </GuideProse>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <SpokeCard
              to="/blog/prevent-burnout-distributed-team"
              label="How to prevent burnout in a distributed team"
              description="The manager playbook: remote warning signs, what fails, and the habits that reduce risk."
            />
            <SpokeCard
              to="/blog/how-much-does-corporate-yoga-cost"
              label="How much does corporate yoga cost?"
              description="Honest 2026 pricing for live team sessions, and what you should expect to be included."
            />
          </div>
        </PageSection>

        <PageSection id="faq" heading="Frequently asked questions">
          <GuideFAQ items={faqItems} />
        </PageSection>

        <PageSection heading="Other guides">
          <div className="grid gap-4">
            <SpokeCard
              to="/guides/mindfulness-at-work"
              label="Mindfulness at work: the complete guide"
              description="Meditation, focus practices and mindfulness exercises for teams."
            />
            <SpokeCard
              to="/guides/desk-yoga"
              label="Desk yoga and chair yoga at work"
              description="Short movement routines for people who sit through back-to-back calls."
            />
          </div>
        </PageSection>

        <ClosingCTA
          heading="Build recovery into your team's week"
          actions={
            <>
              <PillLink to="/demo" variant="light">Book a pilot</PillLink>
              <PillLink to="/pricing" variant="lightOutline">See pricing</PillLink>
            </>
          }
        >
          <p>Start with one pilot session of live breathing, meditation and chair yoga on Teams.</p>
        </ClosingCTA>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RemoteWorkBurnout;
