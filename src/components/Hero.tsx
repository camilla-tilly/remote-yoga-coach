
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const logo = logoRef.current;
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    if (logo) {
      setTimeout(() => {
        logo.classList.add('opacity-100', 'translate-y-0');
      }, 300);
    }

    if (heading) {
      setTimeout(() => {
        heading.classList.add('opacity-100', 'translate-y-0');
      }, 800);
    }

    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add('opacity-100', 'translate-y-0');
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
      className="relative h-[100svh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-36 sm:pt-44 md:min-h-[65vh] md:pt-48 lg:pt-52 bg-dalashala-beige w-full pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40"
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

        <h2 
          ref={headingRef}
          className="font-cinzel-decorative text-xl sm:text-2xl md:text-3xl lg:text-4xl text-dalashala-darkBrown mb-3 sm:mb-4 opacity-0 -translate-y-4 transition-all duration-1000 ease-out font-bold"
        >
          Yoga with Camilla
        </h2>

        <p 
          ref={subtitleRef} 
          className="font-eb-garamond text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-dalashala-mediumBrown mb-6 sm:mb-8 opacity-0 -translate-y-4 transition-all duration-1000 ease-out delay-500 px-3"
        >
          Yoga i Dalarna & Stockholm
        </p>

        <a 
          ref={buttonRef}
          href="#services" 
          className="inline-block bg-dalashala-darkBrown text-dalashala-beige px-4 sm:px-6 py-1.5 sm:py-2 md:px-8 md:py-3 lg:px-10 lg:py-2.5 text-base md:text-lg lg:text-xl rounded-sm font-medium hover:bg-dalashala-mediumBrown transition-colors duration-300 opacity-0 -translate-y-4 transition-all duration-1000 ease-out delay-700 mb-16 sm:mb-20 md:mb-24 lg:mb-32 xl:mb-40"
        >
          Se tjänster
        </a>
      </div>
    </section>
  );
};

export default Hero;
