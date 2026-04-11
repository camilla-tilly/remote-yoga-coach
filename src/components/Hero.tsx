
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const brandRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const brand = brandRef.current;
    const heading = headingRef.current;
    const button = buttonRef.current;

    if (brand) {
      setTimeout(() => {
        brand.classList.add('opacity-100', 'translate-y-0');
      }, 400);
    }

    if (heading) {
      setTimeout(() => {
        heading.classList.add('opacity-100', 'translate-y-0');
      }, 800);
    }

    if (button) {
      setTimeout(() => {
        button.classList.add('opacity-100', 'translate-y-0');
      }, 1400);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden pt-36 sm:pt-44 md:pt-48 lg:pt-52 bg-cream-soft w-full pb-16 md:pb-24"
    >
      {/* Decorative soft colour blobs for organic depth */}
      <div className="blob-sage w-[420px] h-[420px] -top-20 -left-20" aria-hidden="true" />
      <div className="blob-meadow w-[380px] h-[380px] top-10 -right-24" aria-hidden="true" />
      <div className="blob-olive w-[300px] h-[300px] bottom-0 left-1/3" aria-hidden="true" />

      <div className="container-section relative z-10 text-center w-full px-2 sm:px-3">
        {/* Sage eyebrow tag */}
        <div className="flex justify-center mb-6 px-2 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <span className="tag-pill bg-dalashala-sage/25 text-dalashala-earth border border-dalashala-sage/40 backdrop-blur-sm text-center whitespace-normal max-w-full">
            <span className="hidden sm:inline">500 timmar certifierad yogalärare · Stockholm & Dalarna</span>
            <span className="sm:hidden">500h certifierad · Stockholm & Dalarna</span>
          </span>
        </div>

        <p
          ref={brandRef}
          className="font-cinzel-decorative text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl text-dalashala-earth mb-3 sm:mb-4 px-2 opacity-0 -translate-y-4 transition-all duration-1000 ease-out font-bold leading-tight"
        >
          Yoga with Camilla
        </p>

        {/* Sage divider */}
        <div className="flex justify-center items-center gap-2 mb-4 opacity-60">
          <span className="h-px w-10 bg-dalashala-olive/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-dalashala-sage" />
          <span className="h-px w-10 bg-dalashala-olive/50" />
        </div>

        <h1
          ref={headingRef}
          className="font-eb-garamond italic text-lg sm:text-xl md:text-2xl lg:text-3xl text-dalashala-olive mb-8 sm:mb-10 opacity-0 -translate-y-4 transition-all duration-1000 ease-out delay-500 px-3 font-normal"
        >
          Privat yoga i Stockholm & Dalarna
        </h1>

        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center opacity-0 -translate-y-4 transition-all duration-1000 ease-out delay-700"
        >
          <a
            href="#stockholm"
            className="inline-block bg-earth-gradient text-dalashala-cream px-8 py-3 md:px-10 md:py-3.5 text-base md:text-lg rounded-full font-medium shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            Jag är i Stockholm
          </a>
          <a
            href="#dalarna"
            className="inline-block border-2 border-dalashala-earth/80 bg-white/50 backdrop-blur-sm text-dalashala-earth px-8 py-3 md:px-10 md:py-3.5 text-base md:text-lg rounded-full font-medium hover:bg-dalashala-sage/20 hover:border-dalashala-olive transition-all duration-300 whitespace-nowrap"
          >
            Jag är i Dalarna
          </a>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-dalashala-cream pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default Hero;
