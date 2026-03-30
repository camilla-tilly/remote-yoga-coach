
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

    if (window.innerWidth > 2560) {
      document.documentElement.style.maxWidth = '1400px';
      document.documentElement.style.margin = '0 auto';
    } else if (window.innerWidth > 1920) {
      document.documentElement.style.maxWidth = '1200px';
      document.documentElement.style.margin = '0 auto';
    }

    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
      document.documentElement.style.maxWidth = '';
      document.documentElement.style.margin = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-dalashala-beige relative overflow-x-hidden">
      <SEO
        title="Yoga med Camilla – Privat Yoga i Dalarna & Stockholm"
        description="Privata yogaklasser och events i Dalarna och Stockholm. Yoga för möhippa, bröllop, företag, SUP yoga och retreats. Australiensisk yogalärare i en skogsstuga i Dalarna."
        canonical="https://yogawithcamilla.se"
        structuredData={homepageStructuredData}
      />
      <Navbar />
      <main>
        <Hero />

        {/* Photo strip */}
        <div className="w-full grid grid-cols-3 gap-0">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/images/IMG_5788.JPG"
              alt="Yoga på altanen i Dalarna"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/images/IMG_7919.jpeg"
              alt="Utomhusyoga i Dalarna"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/images/IMG_3367.jpeg"
              alt="Hönsyoga — yoga med höns på altanen"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
