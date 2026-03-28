
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
      <div className="max-w-[750px] mx-auto">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Contact />
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
