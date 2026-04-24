
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MandalaBackdrop from '@/components/decorative/MandalaBackdrop';
import IndianBorder from '@/components/decorative/IndianBorder';

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
      className="relative flex items-center justify-center overflow-hidden pt-36 sm:pt-44 md:pt-48 lg:pt-52 bg-cream-soft w-full pb-20 md:pb-28"
    >
      {/* Mandala backdrop — the Indian roots signature motif */}
      <MandalaBackdrop position="right" size="xl" />
      <MandalaBackdrop position="left" size="lg" className="opacity-60 hidden md:block" />

      {/* Decorative soft colour blobs for organic depth */}
      <div className="blob-sage w-[420px] h-[420px] -top-20 -left-20" aria-hidden="true" />
      <div className="blob-saffron w-[380px] h-[380px] top-10 -right-24" aria-hidden="true" />
      <div className="blob-olive w-[300px] h-[300px] bottom-0 left-1/3" aria-hidden="true" />

      <div className="container-section relative z-10 text-center w-full px-2 sm:px-3">
        {/* Saffron eyebrow tag */}
        <div className="flex justify-center mb-6 px-2 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <span className="tag-pill bg-dalashala-saffronLight/60 text-dalashala-saffronDeep border border-dalashala-saffron/40 backdrop-blur-sm text-center whitespace-normal max-w-full">
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

        {/* Gold divider with a lotus bud */}
        <div className="flex justify-center items-center gap-2 mb-4 opacity-80">
          <span className="h-px w-14 bg-gradient-to-r from-transparent via-dalashala-gold/60 to-dalashala-gold" />
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-dalashala-saffron">
            <path d="M7 1 C5 4 5 7 7 9 C9 7 9 4 7 1 Z" fill="currentColor" opacity="0.25" />
            <path d="M7 1 C5 4 5 7 7 9 C9 7 9 4 7 1 Z" />
          </svg>
          <span className="h-px w-14 bg-gradient-to-l from-transparent via-dalashala-gold/60 to-dalashala-gold" />
        </div>

        <h1
          ref={headingRef}
          className="font-eb-garamond italic text-lg sm:text-xl md:text-2xl lg:text-3xl text-dalashala-earthSoft mb-8 sm:mb-10 opacity-0 -translate-y-4 transition-all duration-1000 ease-out delay-500 px-3 font-normal"
        >
          Privat yoga i Stockholm & Dalarna
        </h1>

        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center opacity-0 -translate-y-4 transition-all duration-1000 ease-out delay-700"
        >
          <a
            href="#stockholm"
            className="inline-block bg-saffron-gradient text-white px-8 py-3 md:px-10 md:py-3.5 text-base md:text-lg rounded-full font-medium shadow-card hover:shadow-saffron-glow hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            Jag är i Stockholm
          </a>
          <a
            href="#dalarna"
            className="inline-block border-2 border-dalashala-earth/80 bg-white/60 backdrop-blur-sm text-dalashala-earth px-8 py-3 md:px-10 md:py-3.5 text-base md:text-lg rounded-full font-medium hover:bg-dalashala-sage/25 hover:border-dalashala-olive transition-all duration-300 whitespace-nowrap"
          >
            Jag är i Dalarna
          </a>
        </div>
      </div>

      {/* Indian border banding at the bottom of the hero */}
      <div className="absolute bottom-0 left-0 right-0 text-dalashala-gold/45 z-20">
        <IndianBorder height={14} />
      </div>
      {/* Bottom fade into next section, shifted above the border */}
      <div className="absolute bottom-4 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-dalashala-cream pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default Hero;
