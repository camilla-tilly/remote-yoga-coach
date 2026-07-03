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
    'What is burnout, exactly?',
    'The World Health Organization defines burnout as a syndrome resulting from chronic workplace stress that has not been successfully managed, with three signatures: exhaustion that rest does not fix, growing mental distance or cynicism about the job, and a real drop in effectiveness. It is an occupational phenomenon, not a personal weakness and not a mental illness.',
  ],
  [
    'Is burnout worse for remote workers?',
    'The risk profile is different rather than automatically worse, but several large surveys consistently show remote and hybrid workers reporting higher burnout rates than office-based colleagues. The main drivers are isolation, blurred boundaries between work and home, always-on messaging culture and the loss of the commute as a decompression buffer.',
  ],
  [
    'What are the first signs of burnout at work?',
    'Early signs include tiredness that a weekend no longer repairs, dreading work you used to find manageable, growing cynicism or detachment, irritability over small things, trouble concentrating, and working longer hours to produce the same output. In remote teams, watch for cameras going off, slower and shorter replies, and dropping out of optional social calls.',
  ],
  [
    'How do you prevent burnout in a remote team?',
    'Prevention is structural plus rhythmical. Structural: realistic workloads, clear priorities, and managers trained to spot early signs. Rhythmical: protected boundaries around working hours, real breaks during the day, and recurring recovery habits such as a weekly live wellbeing session the whole team attends. One-off wellness days and passive app subscriptions have consistently poor results.',
  ],
  [
    'Can yoga, breathing or meditation help with burnout?',
    'They help with the stress physiology that feeds burnout. A review of 28 studies found a single session of yoga, meditation or breathing reduced stress reactivity in 71 percent of physiological measures. As a weekly team habit they build recovery into the schedule. They do not replace fixing a structurally impossible workload, and any honest provider will tell you that.',
  ],
  [
    'How much does burnout cost an employer?',
    'Estimates converge on painful numbers. Deloitte puts the cost of poor mental health to UK employers at 51 billion pounds a year, roughly 2,646 pounds per affected employee, with presenteeism the largest share. The same research finds an average return of 4.70 pounds for every 1 pound invested in workplace mental health, rising for preventive, organisation-wide action.',
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
          <div className="max-w-[820px] mx-auto px-5">
            <GuideEyebrow>Guide</GuideEyebrow>
            <h1 className="font-fraunces font-semibold text-heading text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Remote work burnout: signs, causes and prevention for distributed teams
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed">
              In an office, burnout leaves a trail someone eventually notices. In a distributed team it hides behind
              tidy Slack messages and a green status dot, and by the time it surfaces it is a resignation letter or a
              long sick note, and the cost of replacing the person who wrote it. This guide is for the managers, HR
              and people leaders who carry that risk: what burnout actually is, why remote conditions feed it, how to
              spot it across a distributed team before it costs you someone, and what genuinely reduces it.
            </p>
            <KeyTakeaways items={[
              'Burnout is chronic workplace stress plus insufficient recovery; the WHO calls it an occupational phenomenon, not a personal failing.',
              'Remote and hybrid teams are at higher risk: isolation, blurred boundaries, always-on culture and the lost commute.',
              'Spot it remotely through patterns, not faces: cameras-off creep, slower and shorter replies, dropping optional calls, and productive overwork.',
              'Prevention is structural (manager training, clear boundaries, real breaks) plus a recurring recovery habit the team keeps.',
            ]} />
            <GuideTOC items={tocItems} />
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="what-burnout-is" eyebrow="Definition">What burnout is, and what it is not</GuideHeading>
            <GuideProse>
              <p>
                The World Health Organization classifies burnout as an occupational phenomenon: a syndrome resulting
                from chronic workplace stress that has not been successfully managed. It shows up as three things
                arriving together. Exhaustion that sleep and weekends stop fixing. A growing distance from the work,
                often wearing the costume of cynicism. And a genuine drop in effectiveness that no amount of extra
                hours repairs.
              </p>
              <p>
                Two things it is not. It is not ordinary tiredness, which recovery fixes. And it is not a character
                flaw in the person burning out. Burnout is chronic stress plus insufficient recovery, sustained for
                months. The people it takes down first are very often the most conscientious, precisely because they
                are the ones who keep absorbing the overload without complaint.
              </p>
              <p>
                That last point matters for anyone reading this about themselves: needing recovery is not
                underperformance. You are allowed to be good at your job and still have limits.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* WHY REMOTE */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="why-remote" eyebrow="The conditions">Why remote teams are at higher risk</GuideHeading>
            <GuideProse>
              <p>
                Remote work removed a lot of friction, and some of that friction was quietly protective. Surveys
                consistently find remote and hybrid workers reporting more burnout than office-based colleagues, and
                four mechanisms explain most of it.
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'Isolation',
                  'Remote workers report loneliness at roughly double the rate of office-based staff. Loneliness is not just unpleasant, it drains the same reserves that buffer against stress, so everything else costs more.',
                ],
                [
                  'Blurred boundaries',
                  'When the desk is three metres from the bed, there is no physical line where work ends. Work expands into evenings not because anyone demanded it, but because nothing stops it.',
                ],
                [
                  'Always-on culture',
                  'One fast reply at 9pm quietly resets the team norm. Soon people monitor channels through dinner so they do not appear absent, and genuine recovery time disappears without a single policy changing.',
                ],
                [
                  'The vanished commute',
                  'The walk or train home was an accidental decompression ritual, a buffer between work-brain and home-brain. Remote, the last stressful message and the sofa are ninety seconds apart, and the stress comes along.',
                ],
              ]}
            />
            <GuideProse>
              <p>
                None of these is dramatic on its own. Stacked for months, they are exactly the conditions the WHO
                definition describes: chronic stress, insufficient recovery, nobody deciding any of it on purpose.
              </p>
            </GuideProse>
          </div>
        </section>

        {/* SIGNS */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="signs" eyebrow="Early warning">The signs, including the ones you can spot on Slack</GuideHeading>
            <GuideProse>
              <p>
                In yourself, the early signs are: tiredness a weekend no longer repairs, dread on Sunday evening
                about work that used to feel manageable, irritability out of proportion to its triggers, difficulty
                concentrating, and the quiet arithmetic of working longer hours for the same output.
              </p>
              <p>
                In a distributed team you will not see anyone look exhausted. But the interaction patterns are
                visible, sometimes more visible than in an office, because so much is logged:
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'Cameras-off creep',
                  'Someone who used to join calls with the camera on gradually stops. It reads as a preference. It is often withdrawal, the digital version of avoiding eye contact.',
                ],
                [
                  'Slower, shorter replies',
                  'Not one slow reply, a trend. Messages that came back in minutes now take hours and arrive clipped.',
                ],
                [
                  'Dropping the optional',
                  'The social call, the informal stand-up, the coffee chat go first. When bandwidth shrinks, the optional is cut before the required.',
                ],
                [
                  'Productive overwork',
                  'The sign managers miss most because it looks like commitment: messages late at night and early in the morning, output at a pace nobody asked for. Sustained overwork is a warning, not a win.',
                ],
              ]}
            />
            <GuideProse>
              <p>
                One of these means little. A cluster in the same person across a few weeks deserves a private,
                gentle check-in, not a performance conversation. The full playbook for managers is in my post on{' '}
                <Link to="/blog/prevent-burnout-distributed-team" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  preventing burnout in a distributed team
                </Link>
                .
              </p>
            </GuideProse>
          </div>
        </section>

        {/* COST */}
        <section className="bg-charcoal text-white py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-clay mb-4">The numbers</span>
            <h2 id="cost" className="scroll-mt-28 font-fraunces font-semibold text-3xl md:text-4xl leading-tight">
              What burnout costs
            </h2>
            <div className="mt-6 space-y-5 text-white/80 text-lg leading-relaxed">
              <p>
                For anyone who needs to make the business case internally, the research does the arguing. Deloitte
                puts the cost of poor mental health to UK employers at 51 billion pounds a year, around 2,646 pounds
                per affected employee, with presenteeism, people present but running on empty, as the largest share.
                The UK Health and Safety Executive recorded over 22 million working days lost to stress, depression
                and anxiety in a single year. Gallup estimates disengagement costs the global economy around 9
                percent of GDP.
              </p>
              <p>
                The same Deloitte research found employers get back an average of 4.70 pounds for every 1 pound
                spent on workplace mental health, and more when the spending is preventive and organisation-wide
                rather than reactive. Prevention is not the soft option. It is the cheap one.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT FAILS */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="what-fails" eyebrow="Honest audit">What does not work</GuideHeading>
            <GuideProse>
              <p>
                Most corporate wellbeing spend goes to things with weak results, which is why teams are cynical
                about the next initiative. The recurring failures:
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'The one-off wellness day',
                  'A massage chair and a fruit basket do not touch chronic stress. By the following Friday it is a pleasant memory with no residue.',
                ],
                [
                  'The unused app subscription',
                  'Meditation apps are good libraries, but licences are not outcomes. Usage collapses within weeks because the app asks exhausted people to self-initiate practice, alone, at their lowest-willpower moments.',
                ],
                [
                  'The EAP nobody touches',
                  'Employee assistance programmes are used by 3 to 5 percent of staff, and a quarter of employees do not know theirs exists. They are reactive by design: help after the crisis, not prevention before it.',
                ],
                [
                  'Resilience training that shifts the blame',
                  'Teaching people to endure an impossible workload treats the symptom and quietly relocates the problem into the employee. If the workload is the cause, the workload is the fix.',
                ],
              ]}
            />
          </div>
        </section>

        {/* PREVENTION */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="prevention" eyebrow="What works">Prevention that holds up</GuideHeading>
            <GuideProse>
              <p>
                Prevention that survives contact with a real calendar has two layers: structure, which removes the
                causes, and rhythm, which builds recovery into the week instead of hoping people find it themselves.
              </p>
            </GuideProse>
            <GuideList
              items={[
                [
                  'Train managers to see it early',
                  'Manager training in recognising early burnout signs is consistently one of the highest-leverage interventions in the research. Managers who can read the remote signals above intervene months earlier.',
                ],
                [
                  'Make boundaries explicit',
                  'Agree team norms in writing: when messages expect replies, when they do not, and leaders who visibly log off on time. Employees with clear work-hour boundaries report substantially lower burnout risk.',
                ],
                [
                  'Protect real breaks',
                  'Back-to-back video calls are an attention meat-grinder. Default meetings to 25 or 50 minutes, and treat lunch as load-bearing infrastructure rather than a gap to be colonised.',
                ],
                [
                  'Schedule recovery as a team ritual',
                  'A recurring live session of breathing, gentle movement and meditation, same time every week, makes recovery visible and normal. Scheduled and collective beats optional and individual, because it removes both the initiation problem and the guilt.',
                ],
                [
                  'Measure something honest',
                  'A two-question pulse on stress and energy, tracked over time, tells you more than an annual engagement survey. If an intervention is not moving the numbers, change it.',
                ],
              ]}
            />
            <GuideProse>
              <p>
                The rhythm layer is exactly what my{' '}
                <Link to="/services/team-wellness" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  Weekly Reset programme
                </Link>{' '}
                provides: a live 30-minute session on Teams each week, camera optional, with attendance and pre-post
                stress ratings reported honestly so you can see whether it is working. For the wider menu of options,
                see{' '}
                <Link to="/blog/corporate-wellness-ideas-remote-teams" className="text-clay underline underline-offset-4 hover:text-clayDark">
                  corporate wellness ideas that actually work for remote teams
                </Link>
                .
              </p>
            </GuideProse>
          </div>
        </section>

        {/* RECOVERY */}
        <section className="py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="recovery" eyebrow="If it is already here">If someone is already burning out</GuideHeading>
            <GuideProse>
              <p>
                Prevention advice is little comfort to the person already in it. If that is you or someone on your
                team, the honest sequence is: name it without shame, reduce the load for real rather than
                cosmetically, and rebuild recovery gradually. See a doctor if exhaustion, sleep problems or low mood
                are entrenched; burnout overlaps with conditions that deserve proper care.
              </p>
              <p>
                What managers control directly: take work off the plate visibly, so the person does not have to keep
                proving they are struggling. Agree a temporary scope, protect it, and check in on the person rather
                than the backlog. Recovery from serious burnout is measured in months, and a team that watches
                someone be treated well during it becomes a team less afraid to speak up early next time.
              </p>
              <p>
                Gentle daily practices help the physiology along the way: slow breathing lowers stress arousal
                within minutes, and short movement breaks interrupt the frozen-at-desk pattern. Start with the{' '}
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
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[760px] mx-auto px-5">
            <GuideHeading id="faq" eyebrow="FAQ">Frequently asked questions</GuideHeading>
            <GuideFAQ items={faqItems} />
          </div>
        </section>

        <RelatedGuides
          guides={[
            {
              to: '/guides/mindfulness-at-work',
              label: 'Mindfulness at work: the complete guide',
              description: 'The recovery skill itself: meditation at work, focus practices and team exercises that stick.',
            },
            {
              to: '/guides/desk-yoga',
              label: 'Desk yoga and chair yoga at work',
              description: 'The movement side: stretches and short routines for bodies that sit through back-to-back calls.',
            },
          ]}
        />

        <GuideCTA
          heading="Build recovery into your team's week"
          text="A four-week pilot of The Weekly Reset: live breathing, meditation and chair yoga on Teams, camera optional, with honest attendance and stress reporting at the end."
        />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RemoteWorkBurnout;
