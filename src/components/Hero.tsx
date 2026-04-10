
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const logo = logoRef.current;
    const brand = brandRef.current;
    const heading = headingRef.current;
    const button = buttonRef.current;

    if (logo) {
      setTimeout(() => {
        logo.classList.add('opacity-100', 'translate-y-0');
      }, 300);
    }

    if (brand) {
      setTimeout(() => {
        brand.classList.add('opacity-100', 'translate-y-0');
      }, 800);
    }

    if (heading) {
      setTimeout(() => {
        heading.classList.add('opacity-100', 'translate-y-0');
      }, 1200);
    }

    if (button) {
      setTimeout(() => {
        button.classList.add('opacity-100', 'translate-y-0');
      }, 2000);
    }
  }, []);

  return (
    <section 
      id="hero" 
      className="relative flex items-center justify-center overflow-hidden pt-36 sm:pt-44 md:pt-48 lg:pt-52 bg-dalashala-beige w-full pb-12 md:pb-16"
    >
      <div className="container-section relative z-10 text-center w-full px-2 sm:px-3">
        <div 
          ref={logoRef} 
          className="mx-auto w-36 h-36 sm:w-32 sm:h-32 md:w-[12rem] md:h-[10rem] lg:w-[15rem] lg:h-[12rem] xl:w-[17rem] xl:h-[14rem] mb-4 sm:mb-6 opacity-0 -translate-y-4 transition-all duration-1000 ease-out overflow-visible"
        >
          <img 
            src="/lovable-uploads/fd83582b-7d97-4a90-a866-d7d3117ebdc4.png" 
            alt="Yoga with Camilla Logo" 
            className="w-full h-full object-contain object-center scale-95 sm:scale-90 xl:scale-100"
          />
        </div>

        <p
          ref={brandRef}
          className="font-cinzel-decorative text-xl sm:text-2xl md:text-3xl lg:text-4xl text-dalashala-darkBrown mb-3 sm:mb-4 opacity-0 -translate-y-4 transition-all duration-1000 ease-out font-bold"
        >
          Yoga with Camilla
        </p>

        <h1
          ref={headingRef}
          className="font-eb-garamond text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-dalashala-mediumBrown mb-6 sm:mb-8 opacity-0 -translate-y-4 transition-all duration-1000 ease-out delay-500 px-3 font-normal"
        >
          Privat yoga i Stockholm & Dalarna
        </h1>

        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center opacity-0 -translate-y-4 transition-all duration-1000 ease-out delay-700"
        >
          <a
            href="#stockholm"
            className="inline-block bg-dalashala-darkBrown text-dalashala-beige px-6 py-2.5 md:px-8 md:py-3 text-base md:text-lg rounded-sm font-medium hover:bg-dalashala-mediumBrown transition-colors duration-300 whitespace-nowrap"
          >
            Jag är i Stockholm
          </a>
          <a
            href="#dalarna"
            className="inline-block border border-dalashala-darkBrown text-dalashala-darkBrown px-6 py-2.5 md:px-8 md:py-3 text-base md:text-lg rounded-sm font-medium hover:bg-dalashala-tan/40 transition-colors duration-300 whitespace-nowrap"
          >
            Jag är i Dalarna
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
