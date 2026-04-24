
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
        description="Privat yoga i Stockholm och Dalarna: möhippa, företagsyoga, SUP yoga och retreats. Bröllopsyoga för bröllopshelger i Dalarna. Certifierad yogalärare i en skogsstuga i Dalarna."
        canonical="https://yogawithcamilla.se"
        structuredData={homepageStructuredData}
      />
      <Navbar />
      <main>
        <Hero />

        {/* Photo strip: three simple images, generous whitespace */}
        <section className="relative bg-white pb-20 md:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-3 gap-3 md:gap-5">
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
