import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { softenAmp } from '@/lib/amp';

const topServices = [
  { name: 'Privata Event', href: '/tjanster/privata-event' },
  { name: 'Företagsyoga & Workshops', href: '/tjanster/foretagsyoga' },
  { name: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
  { name: 'Privatlektioner', href: '/tjanster/privatlektioner' },
  { name: 'Mini Retreat & Upplevelser', href: '/tjanster/mini-retreat' },
  { name: 'Hönsyoga i Dalarna', href: '/tjanster/honsyoga' },
];

const NotFound = () => {
  useEffect(() => {
    // Add robots noindex so Google doesn't index 404s
    const existing = document.querySelector('meta[name="robots"]');
    const prev = existing?.getAttribute('content') || null;
    if (existing) {
      existing.setAttribute('content', 'noindex, nofollow');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      meta.setAttribute('content', 'noindex, nofollow');
      document.head.appendChild(meta);
    }
    return () => {
      const el = document.querySelector('meta[name="robots"]');
      if (el && prev !== null) {
        el.setAttribute('content', prev);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <SEO
        title="Sidan hittades inte – 404 | Yoga med Camilla"
        description="Den här sidan finns inte längre eller har flyttats. Hitta privata yogaklasser, företagsyoga, SUP yoga och retreats i Stockholm och Dalarna."
      />
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <section className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-inter text-sm md:text-base uppercase tracking-[0.42em] text-dalashala-olive font-bold mb-7">
            404
          </p>
          <h1 className="font-fraunces text-5xl md:text-6xl lg:text-7xl text-dalashala-earth mb-8 leading-[1.02] tracking-[-0.03em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
            Sidan hittades inte
          </h1>
          <span className="block mx-auto w-20 h-[2px] bg-dalashala-earth/60 mb-8 rounded-full" aria-hidden="true" />
          <p className="font-inter text-lg md:text-xl text-dalashala-earth/85 mb-10 leading-relaxed">
            Den här sidan finns inte längre eller har flyttats. Kanske hittar du det du letar efter bland mina tjänster nedan, eller så går du tillbaka till startsidan.
          </p>
          <Button
            className="bg-dalashala-earth text-white hover:bg-dalashala-earthSoft hover:-translate-y-0.5 transition-all duration-300 font-inter py-4 px-10 rounded-full uppercase tracking-[0.22em] text-sm font-semibold shadow-card"
            asChild
          >
            <Link to="/">Till startsidan</Link>
          </Button>
        </section>

        <section className="max-w-3xl mx-auto">
          <p className="font-inter text-xs md:text-sm uppercase tracking-[0.42em] text-dalashala-olive font-bold text-center mb-8">
            Populära tjänster
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topServices.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="bg-white rounded-xl border border-dalashala-meadow/60 px-6 py-5 font-fraunces text-lg md:text-xl text-dalashala-earth hover:border-dalashala-earth/50 hover:shadow-card hover:-translate-y-0.5 transition-all text-center"
                style={{ fontWeight: 400, fontVariationSettings: "'opsz' 24, 'SOFT' 40" }}
              >
                {softenAmp(s.name)}
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/blogg"
              className="font-inter text-xs uppercase tracking-[0.32em] text-dalashala-olive hover:text-dalashala-earth font-bold underline underline-offset-4 transition-colors"
            >
              Läs bloggen →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default NotFound;
