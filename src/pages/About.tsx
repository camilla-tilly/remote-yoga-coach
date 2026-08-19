import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { CoachPhoto } from '@/components/SiteBlocks';

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
        description="Camilla is a certified yoga teacher with 500 hours of training in movement, breathing and meditation, delivering live wellbeing sessions for remote and distributed teams. Real training, real human, measurable."
        canonical="https://remoteyogacoach.com/about"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        <section className="bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="max-w-[760px] mx-auto px-5 text-center">
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              A real person, live, every week.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[600px] mx-auto">
              Remote Yoga Coach isn't a generic wellness app. It's one coach, a defined programme, and honest reporting, 
              built specifically for teams that work apart.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[620px] mx-auto px-5 space-y-8 text-charcoal/80 text-lg md:text-xl leading-relaxed">
            <CoachPhoto
              src="/coach-camilla.jpg"
              alt="Camilla, a certified yoga teacher for remote teams"
              className="w-full max-w-[260px] mx-auto"
            />
            <p>
              I'm Camilla, a 500-hour certified yoga teacher. Before teaching full time I worked across a
              large multinational company, a startup, a consultancy and in government, so the sessions are
              built around real office life, not an ideal version of it.
            </p>
            <p>
              The Weekly Reset is a simple idea: a scheduled moment with a real person, not another app to work
              through alone. Chair-based, camera optional, nothing anyone has to be fit or flexible to do. Not an
              impressive practice, just a habit your whole team can keep.
            </p>
          </div>
        </section>

        {/* TRAINING AND CREDENTIALS */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[620px] mx-auto px-5">
            <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl tracking-[-0.015em] leading-tight">Training and credentials</h2>
            <p className="mt-5 text-charcoal/75 text-lg leading-relaxed">
              I have 500 hours of yoga teacher training in movement, breathwork and meditation, plus a Certificate III
              in Fitness from Australia covering anatomy and safe movement for all levels. That combination means I
              understand how bodies actually work, so I can keep every session genuinely accessible, no experience or
              equipment needed. My meditation and breathing work also draws on training
              in the Hindu yogic tradition, in mantra, breathing techniques and meditation, so those parts of a
              session stay grounded in the tradition they come from.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                '500 hours of yoga teacher training',
                'Certificate III in Fitness (Australia)',
                'Movement and breathwork',
                'Meditation and mindfulness',
                'Anatomy and safe movement',
              ].map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-sage-light bg-white px-3.5 py-1.5 text-[13px] font-medium text-charcoal/75"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-clay" aria-hidden="true" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[820px] mx-auto px-5">
            <h2 className="font-fraunces font-normal text-heading text-3xl md:text-4xl tracking-[-0.015em] leading-tight text-center">Why live and human</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                ['Continuity', 'The same coach every week, someone your team gets to know. The relationship is the whole point.'],
                ['Accessibility', 'Camera-off, chair-based, no equipment. Everyone can join, wherever they work.'],
                ['Honesty', 'Real attendance numbers and plainly-stated results, never inflated claims.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-heading/10 bg-offwhite p-8 text-center">
                  <h3 className="font-fraunces font-normal text-heading text-xl">{title}</h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed mt-3">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream-soft-b py-24 md:py-28">
          <div className="max-w-[680px] mx-auto px-5 text-center">
            <h2 className="font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight">See it for your team</h2>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              Start with a single pilot session, credited to your first month if you continue.
            </p>
            <div className="mt-9">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-medium text-[15px] rounded-full px-8 py-6">
                  Book a pilot
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
