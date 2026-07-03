import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

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
      name: '500-hour Yoga Teacher Training (advanced)',
    },
    worksFor: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
  },
};

const About = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="About | Remote Yoga Coach"
        description="Camilla is a 500-hour certified yoga teacher (advanced level) delivering live breathing, meditation and chair-yoga sessions for remote and distributed teams. Real training, real human, measurable."
        canonical="https://remoteyogacoach.com/about"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        <section className="bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="max-w-[760px] mx-auto px-5 text-center">
            <h1 className="font-fraunces font-semibold text-heading text-4xl md:text-5xl leading-[1.1] tracking-tight">
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
            <p>
              I'm Camilla, a 500-hour certified yoga teacher. That is the advanced level of training, double the
              standard 200-hour certification, so the sessions are grounded in real teaching rather than a weekend
              course. I work with distributed and hybrid teams to build one small, steady habit that keeps people
              focused and energised through the week.
            </p>
            <p>
              Before teaching full time, I worked across a 10,000-person corporate, a startup, a consultancy, and
              government. I know how a workday actually feels and what makes a new habit stick when everyone is busy, so
              the sessions are built around real office life, not an ideal version of it.
            </p>
            <p>
              The Weekly Reset is a simple idea: a scheduled moment with a real person, not another app to work through
              alone. When the session is already in the calendar and the coach is the same familiar face each week,
              showing up stops being a decision.
            </p>
            <p>
              Sessions are made to be easy to say yes to. Chair-based, camera optional, no activewear, nothing anyone
              has to be flexible or fit to do. The goal isn't an impressive practice, it's a habit your whole team can
              actually keep.
            </p>
          </div>
        </section>

        {/* TRAINING AND CREDENTIALS */}
        <section className="bg-cream py-16 md:py-20">
          <div className="max-w-[620px] mx-auto px-5">
            <h2 className="font-fraunces font-semibold text-heading text-2xl md:text-3xl leading-tight">Training and credentials</h2>
            <p className="mt-5 text-charcoal/75 text-lg leading-relaxed">
              My qualification is a 500-hour yoga teacher certification, the advanced level and double the standard
              200-hour training. My teaching focuses on the practices that fit a workday: breathing and pranayama,
              meditation and mindfulness, and gentle chair-based movement anyone can do at a desk, no experience
              needed.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                '500-hour certified yoga teacher',
                'Advanced level (double the 200-hour standard)',
                'Breathing and meditation',
                'Chair and accessible yoga',
                'Workplace wellbeing',
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
            <h2 className="font-fraunces font-semibold text-heading text-2xl md:text-3xl leading-tight text-center">Why live and human</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                ['Continuity', "The same coach every week, learning your team's names and needs. The relationship is the whole point."],
                ['Accessibility', 'Camera-off, chair-based, no equipment. Everyone can join, wherever they work.'],
                ['Honesty', 'Real attendance numbers and plainly-stated results, never inflated claims.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-heading/10 bg-offwhite p-8 text-center">
                  <h3 className="font-fraunces font-semibold text-heading text-xl">{title}</h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed mt-3">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream-soft-b py-24 md:py-28">
          <div className="max-w-[680px] mx-auto px-5 text-center">
            <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-4xl leading-tight">See it for your team</h2>
            <p className="mt-6 text-charcoal/75 text-lg leading-relaxed">
              Start with a four-week pilot, credited to your first month if you continue.
            </p>
            <div className="mt-9">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-semibold uppercase text-sm tracking-wider rounded-md px-8 py-6">
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
