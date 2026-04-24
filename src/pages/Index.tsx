
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import LotusDivider from '@/components/decorative/LotusDivider';
import Mandala from '@/components/decorative/Mandala';

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Yoga med Camilla",
  "url": "https://yogawithcamilla.se",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://yogawithcamilla.se/blogg?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const Index = () => {
  useEffect(() => {
    const loadFramerMotion = async () => {
      try {
        await import('framer-motion');
      } catch (error) {
        console.error('Failed to load Framer Motion:', error);
      }
    };

    loadFramerMotion();

    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-dalashala-cream relative overflow-x-hidden">
      <SEO
        title="Yoga med Camilla – Privat Yoga i Stockholm & Dalarna"
        description="Privat yoga i Stockholm och Dalarna: möhippa, företagsyoga, SUP yoga och retreats. Bröllopsyoga för bröllopshelger i Dalarna. Certifierad yogalärare i en skogsstuga i Dalarna."
        canonical="https://yogawithcamilla.se"
        structuredData={homepageStructuredData}
      />
      <Navbar />
      <main>
        <Hero />

        {/* Photo strip: softer edges, subtle frame, sage dividers */}
        <section className="relative bg-dalashala-cream py-6 md:py-10">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-card border border-dalashala-meadow/25 group">
                <img
                  src="/images/IMG_8340.JPG"
                  alt="Yoga på altanen i Dalarna"
                  className="w-full h-full object-cover object-[50%_40%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-card border border-dalashala-meadow/25 group">
                <img
                  src="/images/IMG_4442.jpeg"
                  alt="Utomhusyoga i Dalarna"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-card border border-dalashala-meadow/25 group">
                <img
                  src="/images/IMG_3367.jpeg"
                  alt="Hönsyoga, yoga med höns på altanen"
                  className="w-full h-full object-cover object-[50%_80%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEO keyword section: saffron band with mandala accent */}
        <section className="relative py-14 md:py-20 px-4 overflow-hidden bg-saffron-soft">
          <div className="blob-cream w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-40" aria-hidden="true" />
          <Mandala
            variant="twelve"
            strokeWidth={0.7}
            className="absolute -top-20 -left-16 w-[300px] h-[300px] text-dalashala-saffron/18 pointer-events-none"
          />
          <Mandala
            variant="eight"
            strokeWidth={0.7}
            className="absolute -bottom-16 -right-10 w-[240px] h-[240px] text-dalashala-gold/18 pointer-events-none"
          />
          <div className="relative max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 tag-pill bg-dalashala-saffronLight/60 text-dalashala-saffronDeep border border-dalashala-saffron/40 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-dalashala-saffron" />
              Stockholm · Dalarna · Online
            </span>
            <h2 className="font-cinzel-decorative text-2xl md:text-3xl text-dalashala-earth font-bold mb-5 leading-tight">
              Privat yoga i Stockholm & Dalarna
            </h2>
            <div className="max-w-[200px] mx-auto mb-5">
              <LotusDivider tone="gold" />
            </div>
            <p className="font-eb-garamond text-base md:text-lg text-dalashala-earthSoft leading-relaxed">
              Jag erbjuder privata yogaklasser för alla nivåer: möhippor, bröllop, företagsevent, retreats och en-till-en lektioner.
              I Stockholm kommer jag till er med all utrustning, eller så möts vi vid Sickla Sjö för SUP-yoga och bastu.
              I Dalarna håller jag klasser utomhus på altanen i skogen, med höns som sällskap.
            </p>
          </div>
        </section>

        {/* Section rhythm break */}
        <div className="py-6">
          <div className="max-w-xs mx-auto">
            <LotusDivider tone="gold" />
          </div>
        </div>

        <Services />

        {/* Section rhythm break */}
        <div className="py-4">
          <div className="max-w-xs mx-auto">
            <LotusDivider tone="gold" />
          </div>
        </div>

        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
