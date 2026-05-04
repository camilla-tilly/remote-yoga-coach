
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyYogaWithCamilla from '@/components/WhyYogaWithCamilla';
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
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <SEO
        title="Yoga med Camilla – Privat Yoga i Stockholm & Dalarna"
        description="Privat yoga i Stockholm och Dalarna: möhippa, företagsyoga, SUP yoga och retreats. Bröllopsyoga för bröllopshelger i Dalarna. Certifierad yogalärare med yogaaltan i skogen i Dalarna."
        canonical="https://yogawithcamilla.se"
        structuredData={homepageStructuredData}
      />
      <Navbar />
      <main>
        <Hero />

        {/* Photo strip: horizontal snap-scroll on mobile (big, immersive),
            3-up grid on md+ (balanced triptych). */}
        <section className="relative bg-dalashala-creamDeep py-14 md:py-20">
          {/* Mobile: horizontal scroller — each photo fills ~80vw */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pl-4 pr-4 pb-2 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
              <div className="shrink-0 w-[82vw] aspect-[4/5] overflow-hidden rounded-2xl snap-center shadow-soft">
                <img
                  src="/images/IMG_8340.JPG"
                  alt="Yoga på altanen i Dalarna"
                  className="w-full h-full object-cover object-[50%_40%]"
                  loading="lazy"
                />
              </div>
              <div className="shrink-0 w-[82vw] aspect-[4/5] overflow-hidden rounded-2xl snap-center shadow-soft">
                <img
                  src="/images/IMG_4442.jpeg"
                  alt="Utomhusyoga i Dalarna"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="shrink-0 w-[82vw] aspect-[4/5] overflow-hidden rounded-2xl snap-center shadow-soft">
                <img
                  src="/images/IMG_3367.jpeg"
                  alt="Hönsyoga, yoga med höns på altanen"
                  className="w-full h-full object-cover object-[50%_80%]"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Small swipe hint */}
            <p className="mt-5 text-center font-inter text-[10px] uppercase tracking-[0.32em] text-dalashala-olive/80 font-semibold">
              Swipe →
            </p>
          </div>

          {/* md+: balanced triptych */}
          <div className="hidden md:block max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-3 gap-5">
              <div className="aspect-[4/5] overflow-hidden rounded-xl group">
                <img
                  src="/images/IMG_8340.JPG"
                  alt="Yoga på altanen i Dalarna"
                  className="w-full h-full object-cover object-[50%_40%] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-xl group">
                <img
                  src="/images/IMG_4442.jpeg"
                  alt="Utomhusyoga i Dalarna"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-xl group">
                <img
                  src="/images/IMG_3367.jpeg"
                  alt="Hönsyoga, yoga med höns på altanen"
                  className="w-full h-full object-cover object-[50%_80%] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <WhyYogaWithCamilla />

        <Services />

        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
