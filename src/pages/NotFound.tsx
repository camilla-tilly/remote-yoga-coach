import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const topServices = [
  { name: 'Möhippa Yoga', href: '/tjanster/mohippa-yoga' },
  { name: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { name: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
  { name: 'Privatlektioner', href: '/tjanster/privatlektioner' },
  { name: 'Mini Yoga Retreat', href: '/tjanster/mini-retreat' },
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
    <div className="min-h-screen bg-dalashala-beige relative overflow-x-hidden">
      <SEO
        title="Sidan hittades inte – 404 | Yoga med Camilla"
        description="Den här sidan finns inte längre eller har flyttats. Hitta privata yogaklasser, företagsyoga, SUP yoga och retreats i Stockholm och Dalarna."
      />
      <div className="max-w-[750px] mx-auto">
        <Navbar />
        <main className="pt-28 pb-16 px-4">
          <section className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-cinzel text-dalashala-mediumBrown mb-3 block">
              404
            </span>
            <h1 className="font-cinzel-decorative text-2xl md:text-3xl text-dalashala-darkBrown mb-4 font-bold leading-snug">
              Sidan hittades inte
            </h1>
            <p className="font-eb-garamond text-base md:text-lg text-dalashala-mediumBrown mb-8 leading-relaxed">
              Den här sidan finns inte längre eller har flyttats. Kanske hittar du det du letar efter bland mina tjänster nedan, eller så går du tillbaka till startsidan.
            </p>
            <Button
              className="bg-dalashala-darkBrown text-dalashala-beige hover:bg-dalashala-darkBrown/90 font-montserrat py-2 px-8 rounded-full uppercase tracking-wide text-sm"
              asChild
            >
              <Link to="/">Till startsidan</Link>
            </Button>
          </section>

          <section className="max-w-2xl mx-auto">
            <h2 className="font-cinzel text-base md:text-lg text-dalashala-darkBrown font-bold uppercase tracking-wider text-center mb-6">
              Populära tjänster
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {topServices.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="bg-white rounded-2xl border border-dalashala-tan/20 shadow-sm px-5 py-4 font-cinzel text-sm text-dalashala-darkBrown hover:bg-dalashala-darkBrown hover:text-dalashala-beige transition-colors text-center"
                >
                  {s.name}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/blogg"
                className="font-montserrat text-xs uppercase tracking-widest text-dalashala-mediumBrown hover:text-dalashala-darkBrown underline underline-offset-4 transition-colors"
              >
                Läs bloggen →
              </Link>
            </div>
          </section>
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default NotFound;
