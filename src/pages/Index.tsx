
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
    <div className="min-h-screen bg-dalashala-beige relative overflow-x-hidden">
      <SEO
        title="Yoga med Camilla – Privat Yoga i Stockholm & Dalarna"
        description="Privat yoga i Stockholm och Dalarna — möhippa, bröllop, företagsyoga, SUP yoga och retreats. Yogaklasser för alla nivåer med certifierad yogalärare i en skogsstuga i Dalarna."
        canonical="https://yogawithcamilla.se"
        structuredData={homepageStructuredData}
      />
      <Navbar />
      <main>
        <Hero />

        {/* Photo strip */}
        <div className="w-full grid grid-cols-3 gap-0">
          {/* Misty backbend — focus on pose in lower centre */}
          <div className="aspect-square overflow-hidden">
            <img
              src="/images/IMG_8340.JPG"
              alt="Yoga på altanen i Dalarna"
              className="w-full h-full object-cover object-[50%_40%]"
            />
          </div>
          {/* Middle photo */}
          <div className="aspect-square overflow-hidden">
            <img
              src="/images/IMG_4442.jpeg"
              alt="Utomhusyoga i Dalarna"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Plank with chickens — she's in lower half, chickens surrounding */}
          <div className="aspect-square overflow-hidden">
            <img
              src="/images/IMG_3367.jpeg"
              alt="Hönsyoga — yoga med höns på altanen"
              className="w-full h-full object-cover object-[50%_80%]"
            />
          </div>
        </div>

        {/* SEO keyword section */}
        <section className="py-12 px-4 bg-dalashala-beige">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-cinzel text-lg md:text-xl text-dalashala-darkBrown font-bold mb-4">
              Privat yoga i Stockholm & Dalarna
            </h2>
            <p className="font-eb-garamond text-sm md:text-base text-dalashala-mediumBrown leading-relaxed">
              Jag erbjuder privata yogaklasser för alla nivåer — möhippor, bröllop, företagsevent, retreats och en-till-en lektioner.
              I Stockholm kommer jag till er med all utrustning. I Dalarna håller jag klasser utomhus på altanen i skogen,
              med höns som sällskap. Online-yoga via Zoom på engelska, var du än befinner dig.
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
