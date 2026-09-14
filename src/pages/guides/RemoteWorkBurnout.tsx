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
  ProseList,
  PullQuote,
  SpokeCard,
  GuideFAQ,
  GuideCTA,
  RelatedGuides,
} from '@/components/GuideLayout';

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
    'Prevention is structural plus rhythmical: realistic workloads, clear priorities and trained managers, plus protected hours, real breaks and a recurring recovery habit such as a weekly live wellbeing session. One-off wellness days and passive apps have consistently poor results.',
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
  { href: '#prevention', label: 'Prevention that holds up' },
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
        {/* HERO */}
        <section className="bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="max-w-[820px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideEyebrow>Guide</GuideEyebrow>
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Remote work burnout: signs, causes and prevention for distributed teams
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed">
              In an office, burnout leaves a trail someone notices. In a distributed team it hides behind tidy Slack
              messages and a green status dot, until it surfaces as a resignation letter or a long sick note.
            </p>
            <GuideTOC items={tocItems} />
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="what-burnout-is" eyebrow="Definition">What burnout is, and what it is not</GuideHeading>
            <GuideProse>
              <p>
                The World Health Organization classifies burnout as an occupational phenomenon: chronic workplace
                stress that has not been successfully managed. It shows up as exhaustion weekends stop fixing, growing
                cynicism about the work, and a drop in effectiveness.
              </p>
              <p>
                It is not ordinary tiredness, and it is not a character flaw. It often takes down the most
                conscientious people first, because they keep absorbing the overload.
              </p>
              <p>
                If you are reading this about yourself: needing recovery is not underperformance. You are allowed to
                be good at your job and still have limits.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* WHY REMOTE */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="why-remote" eyebrow="The conditions">Why remote teams are at higher risk</GuideHeading>
            <GuideProse>
              <p>
                Surveys consistently find remote and hybrid workers reporting more burnout. Four mechanisms explain
                most of it.
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
                  'With the desk three metres from the bed, nothing marks where work ends.',
                ],
                [
                  'Always-on culture',
                  'One fast reply at 9pm resets the team norm. Soon people watch channels through dinner, and recovery time disappears.',
                ],
                [
                  'The vanished commute',
                  'The commute was an accidental decompression ritual. Now the last stressful message and the sofa are ninety seconds apart.',
                ],
              ]}
            />
          </div>
        </section>

        {/* SIGNS */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="signs" eyebrow="Early warning">The signs, including the ones you can spot on Slack</GuideHeading>
            <GuideProse>
              <p>
                In yourself: tiredness a weekend no longer repairs, Sunday-evening dread, irritability, trouble
                concentrating, and longer hours for the same output.
              </p>
              <p>
                In a distributed team you will not see anyone look exhausted, but the patterns are logged:
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'Cameras-off creep',
                  'Someone who used to join on camera gradually stops. It reads as a preference. It is often withdrawal.',
                ],
                [
                  'Slower, shorter replies',
                  'Not one slow reply, a trend. Messages that came back in minutes now take hours and arrive clipped.',
                ],
                [
                  'Dropping the optional',
                  'The social call and the coffee chat go first, because the optional is cut before the required.',
                ],
                [
                  'Productive overwork',
                  'The sign managers miss most, because it looks like commitment: late-night messages, output at a pace nobody asked for. Sustained overwork is a warning, not a win.',
                ],
              ]}
            />
            <GuideProse>
              <p>
                One of these means little. A cluster in one person over a few weeks deserves a gentle private check-in,
                not a performance conversation. The manager playbook is in my post on{' '}
                <Link to="/blog/prevent-burnout-distributed-team" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  preventing burnout in a distributed team
                </Link>
                .
              </p>
            </GuideProse>
          </div>
        </section>

        {/* COST */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="cost" eyebrow="The numbers" size="md">What burnout costs</GuideHeading>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed">
              <p>For anyone making the business case, the research does the arguing.</p>
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
              <PullQuote>Prevention is not the soft option. It is the cheap one.</PullQuote>
            </div>
          </div>
        </section>

        {/* WHAT FAILS */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="what-fails" eyebrow="Honest audit">What does not work</GuideHeading>
            <GuideProse>
              <p>
                Most corporate wellbeing spend goes on things with weak results:
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'The one-off wellness day',
                  'A massage chair and a fruit basket do not touch chronic stress.',
                ],
                [
                  'The unused app subscription',
                  'Licences are not outcomes. Usage collapses within weeks because the app asks exhausted people to start practice alone.',
                ],
                [
                  'The EAP nobody touches',
                  'Used by 3 to 5 percent of staff, and a quarter of employees do not know theirs exists. Help after the crisis, not prevention.',
                ],
                [
                  'Resilience training that shifts the blame',
                  'Teaching people to endure an impossible workload moves the problem onto them. If the workload is the cause, the workload is the fix.',
                ],
              ]}
            />
          </div>
        </section>

        {/* PREVENTION */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="prevention" eyebrow="What works">Prevention that holds up</GuideHeading>
            <GuideProse>
              <p>
                Prevention has two layers: structure, which removes the causes, and rhythm, which builds recovery into
                the week.
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
                  'A live session of breathing, gentle movement and meditation, same time every week, makes recovery normal and removes the guilt.',
                ],
                [
                  'Measure something honest',
                  'Track a two-question pulse on stress and energy over time. If an intervention is not moving the numbers, change it.',
                ],
              ]}
            />
            <GuideProse>
              <p>
                The rhythm layer is what my{' '}
                <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  Weekly Reset programme
                </Link>{' '}
                provides: a live session of 15 to 30 minutes on Teams each week. For wider options, see{' '}
                <Link to="/blog/corporate-wellness-ideas-remote-teams" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  corporate wellness ideas that actually work for remote teams
                </Link>
                .
              </p>
            </GuideProse>
          </div>
        </section>

        {/* RECOVERY */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <GuideHeading id="recovery" eyebrow="If it is already here">If someone is already burning out</GuideHeading>
            <GuideProse>
              <p>
                If that is you or someone on your team: name it without shame, reduce the load for real, and rebuild
                recovery gradually. See a doctor if exhaustion, sleep problems or low mood are entrenched.
              </p>
              <p>
                Managers can take work off the plate visibly, so the person does not have to keep proving they are
                struggling. Agree a temporary scope, protect it, and check in on the person, not the backlog. Recovery
                takes months.
              </p>
              <p>
                Slow breathing lowers stress arousal within minutes. Start with the{' '}
                <Link to="/blog/breathing-exercises-for-work-stress" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  breathing exercises for work stress
                </Link>{' '}
                and treat them as first aid, not a cure.
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
              to: '/guides/mindfulness-at-work',
              label: 'Mindfulness at work: the complete guide',
              description: 'The recovery skill itself: meditation, focus practices and team exercises.',
            },
            {
              to: '/guides/desk-yoga',
              label: 'Desk yoga and chair yoga at work',
              description: 'The movement side: short routines for bodies that sit through back-to-back calls.',
            },
          ]}
        />

        <GuideCTA
          heading="Build recovery into your team's week"
          text="A single pilot session of The Weekly Reset: live breathing, meditation and chair yoga on Teams, camera optional."
        />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RemoteWorkBurnout;
