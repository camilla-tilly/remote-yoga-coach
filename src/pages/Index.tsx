import { Link } from 'react-router-dom';
import { Focus, Wind, BatteryCharging, CalendarCheck, Video, LineChart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Corporate wellbeing sessions for distributed teams",
  "name": "The Weekly Reset",
  "provider": {
    "@type": "Organization",
    "name": "Remote Yoga Coach",
    "url": "https://remoteyogacoach.com"
  },
  "areaServed": ["GB", "EU", "AU", "Worldwide"],
  "description": "Live 30-minute breathing, meditation and chair-yoga sessions for remote and hybrid teams, delivered on Teams."
};

const benefits = [
  { icon: Focus, title: 'Sharper focus', text: 'A short reset clears the mental clutter, so people come back to work present and clear-headed.' },
  { icon: Wind, title: 'Steady under pressure', text: 'Simple breathing tools your team can reach for before the big meeting, the hard call, the busy afternoon.' },
  { icon: BatteryCharging, title: 'Energy that lasts', text: 'Less screen fatigue and afternoon slump, more left in the tank by the end of the day.' },
];

const steps = [
  { icon: CalendarCheck, title: 'Start with a pilot', text: 'A four-week trial, credited to your first month if you continue.' },
  { icon: Video, title: 'We set a weekly slot', text: 'Same time, same coach, one link. I run it, your team just shows up.' },
  { icon: LineChart, title: 'You see it working', text: 'Simple reporting on attendance and how people feel, before and after.' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Remote Yoga Coach – Live wellbeing for distributed teams"
        description="The Weekly Reset: short live breathing and chair-yoga sessions that keep distributed teams focused, steady and energised. On Teams, camera optional. Book a pilot."
        canonical="https://remoteyogacoach.com"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative bg-cream-soft pt-40 pb-28 md:pt-48 md:pb-36">
          <div className="max-w-[820px] mx-auto px-5 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-sage mb-6">
              The Weekly Reset
            </span>
            <h1 className="font-fraunces font-semibold text-heading text-4xl md:text-6xl leading-[1.08] tracking-tight">
              The weekly reset{' '}
              <span className="text-clay">your team looks forward to.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-[560px] mx-auto">
              Short live breathing and chair-yoga sessions for distributed teams. On Teams, camera optional.
              A calm weekly habit that keeps everyone focused and steady.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-semibold uppercase text-sm tracking-wider rounded-md px-8 py-6">
                  Book a pilot
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-sage text-charcoal hover:bg-sage-light/40 font-semibold uppercase text-sm tracking-wider rounded-md px-8 py-6">
                  See pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFITS — performance */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1000px] mx-auto px-5">
            <div className="text-center max-w-[560px] mx-auto">
              <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-4xl leading-tight">
                A calmer team is a sharper team
              </h2>
              <p className="mt-5 text-charcoal/70 text-lg leading-relaxed">
                Thirty minutes a week your whole team can feel, and we rarely use all of it, so there is breathing space before the next meeting.
              </p>
            </div>

            <div className="mt-16 grid gap-10 sm:grid-cols-3">
              {benefits.map((b) => (
                <div key={b.title} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mx-auto">
                    <b.icon className="text-clay" size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-fraunces font-semibold text-heading text-xl mt-5">{b.title}</h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed mt-2">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-cream py-24 md:py-32">
          <div className="max-w-[1000px] mx-auto px-5">
            <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-4xl leading-tight text-center">
              How it works
            </h2>
            <div className="mt-16 grid gap-10 sm:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.title} className="text-center">
                  <span className="text-sm font-semibold text-clay tracking-wider">0{i + 1}</span>
                  <s.icon className="text-sage mt-4 mx-auto" size={28} strokeWidth={1.5} />
                  <h3 className="font-fraunces font-semibold text-heading text-xl mt-4">{s.title}</h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed mt-2">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-14 text-center">
              <Link to="/services/team-wellness" className="text-clay hover:text-clayDark font-semibold uppercase text-sm tracking-wider">
                See how a session runs →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 md:py-36">
          <div className="max-w-[680px] mx-auto px-5 text-center">
            <h2 className="font-fraunces font-semibold text-heading text-3xl md:text-5xl leading-tight">
              Give your team a reset
            </h2>
            <p className="mt-6 text-charcoal/70 text-lg leading-relaxed max-w-[480px] mx-auto">
              Start with a four-week pilot, credited to your first month if you continue.
            </p>
            <div className="mt-10">
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

export default Index;
