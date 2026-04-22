
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';

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
        description="Privat yoga i Stockholm och Dalarna — möhippa, bröllop, företagsyoga, SUP yoga och retreats. Certifierad yogalärare i en skogsstuga i Dalarna."
        canonical="https://yogawithcamilla.se"
        structuredData={homepageStructuredData}
      />
      <Navbar />
      <main>
        <Hero />

        {/* Photo strip — softer edges, subtle frame, sage dividers */}
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
                  alt="Hönsyoga — yoga med höns på altanen"
                  className="w-full h-full object-cover object-[50%_80%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEO keyword section — elevated with sage accent */}
        <section className="relative py-14 md:py-20 px-4 overflow-hidden">
          <div className="blob-cream w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-40" aria-hidden="true" />
          <div className="relative max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 tag-pill bg-dalashala-sage/15 text-dalashala-olive border border-dalashala-sage/40 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-dalashala-sage" />
              Stockholm · Dalarna · Online
            </span>
            <h2 className="font-cinzel-decorative text-2xl md:text-3xl text-dalashala-earth font-bold mb-5 leading-tight">
              Privat yoga i Stockholm & Dalarna
            </h2>
            <div className="flex justify-center items-center gap-2 mb-5">
              <span className="h-px w-8 bg-dalashala-olive/40" />
              <span className="w-1 h-1 rounded-full bg-dalashala-sage" />
              <span className="h-px w-8 bg-dalashala-olive/40" />
            </div>
            <p className="font-eb-garamond text-base md:text-lg text-dalashala-earthSoft leading-relaxed">
              Jag erbjuder privata yogaklasser för alla nivåer — möhippor, bröllop, företagsevent, retreats och en-till-en lektioner.
              I Stockholm kommer jag till er med all utrustning — eller så möts vi vid Sickla Sjö för SUP-yoga och bastu.
              I Dalarna håller jag klasser utomhus på altanen i skogen, med höns som sällskap.
            </p>
          </div>
        </section>

        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
