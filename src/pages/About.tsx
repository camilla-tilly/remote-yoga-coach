import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { PullQuote, ProseList } from '@/components/GuideLayout';
import { PageHero, PageSection, ClosingCTA, PillLink } from '@/components/PageKit';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Camilla',
    jobTitle: 'Corporate wellness coach and yoga teacher',
    description:
      '500-hour certified yoga teacher delivering live wellbeing sessions, breathing, meditation and chair yoga, for remote and distributed teams.',
    url: 'https://remoteyogacoach.com/about',
    knowsAbout: [
      'corporate wellbeing',
      'workplace mindfulness',
      'meditation',
      'breathing exercises',
      'pranayama',
      'chair yoga',
      'burnout prevention',
      'remote team wellbeing',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Yoga Teacher Training',
      name: '500-hour Yoga Teacher Training',
    },
    worksFor: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
  },
};

const About = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="About | Remote Yoga Coach"
        description="Camilla is a certified yoga teacher with 500 hours of training in movement, breathing and meditation, delivering live wellbeing sessions for remote and distributed teams. Real training, real human."
        canonical="https://remoteyogacoach.com/about"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        <PageHero
          title="About Camilla"
          aside={
            <div className="aspect-[4/5] max-h-[640px] rounded-[20px] overflow-hidden border border-sage-light bg-cream">
              <img
                src="/images/coach-camilla.jpg"
                alt="Camilla, a certified yoga teacher for remote teams, walking with a yoga mat in Stockholm"
                width={900}
                height={1200}
                className="w-full h-full object-cover object-[center_70%]"
              />
            </div>
          }
        >
          <p>
            Remote Yoga Coach is me, Camilla. I teach live classes on Teams for teams that work remotely or in a hybrid setup.
          </p>
        </PageHero>

        <PageSection heading="My background">
          <div className="space-y-5">
            <p>
              I'm Camilla, a 500-hour certified yoga teacher based in Stockholm. Before teaching full time I
              worked across a large multinational company, a startup, a consultancy and in government, so I build
              the classes around what office life is really like.
            </p>
            <p>
              Remote Yoga Coach is my online offer for teams. In Stockholm I also teach in person, as{' '}
              <a
                href="https://yogawithcamilla.se/tjanster/foretagsyoga"
                className="text-clay underline underline-offset-4 hover:text-clayDark"
              >
                Yoga with Camilla
              </a>
              . The classes, the prices and the teacher are the same.
            </p>
            <p>
              The idea is simple: a regular class with a real teacher, instead of another app to use on your own. It is done sitting in a chair, and nobody needs to be fit or flexible.
            </p>
          </div>
        </PageSection>

        <PageSection heading="Training and credentials">
          <div className="space-y-5">
            <p>
              I have 500 hours of yoga teacher training in movement, breathwork and meditation, plus a Certificate III
              in Fitness from Australia covering anatomy and safe movement for all levels. That means I understand how
              bodies work, so I can keep every class suitable for everyone, with no experience or equipment needed.
            </p>
            <p>
              My meditation and breathing work draws on extensive
              experience across three traditions, Kadampa Buddhism meditation, Tranquil Wisdom Insight Meditation,
              and the Hindu yogic tradition of mantra, breathing techniques and meditation. I have done retreats in
              all three and teach these styles, so the breathwork and meditation in a class come from those
              traditions.
            </p>
            <PullQuote>
              I am also an ultra runner, with six ultra marathons behind me, so I know how important rest is when you work hard.
            </PullQuote>
            <ProseList
              items={[
                '500 hours of yoga teacher training',
                'Certificate III in Fitness (Australia)',
                'Movement and breathwork',
                'Meditation and mindfulness',
                'Anatomy and safe movement',
              ]}
            />
          </div>
        </PageSection>

        <PageSection heading="Why the classes are live">
          <ul className="border-t border-sage-light">
            {[
              ['Continuity', 'The same teacher every week, so your team gets to know me.'],
              ['Accessibility', 'Chair-based, no equipment. Everyone can join, wherever they work.'],
            ].map(([title, text]) => (
              <li key={title} className="border-b border-sage-light py-5 md:py-6">
                <h3 className="font-fraunces font-normal text-heading text-[1.4rem] leading-snug">{title}</h3>
                <p className="mt-1 text-charcoal/75 text-[16px] leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </PageSection>

        <ClosingCTA
          heading="Start with one pilot session"
          actions={<PillLink to="/demo" variant="light">Book a pilot</PillLink>}
        >
          <p>A single live class, credited to your first month if you continue.</p>
        </ClosingCTA>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
