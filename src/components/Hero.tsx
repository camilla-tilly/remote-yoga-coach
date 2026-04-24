
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

    if (brand) setTimeout(() => brand.classList.add('opacity-100', 'translate-y-0'), 300);
    if (heading) setTimeout(() => heading.classList.add('opacity-100', 'translate-y-0'), 600);
    if (button) setTimeout(() => button.classList.add('opacity-100', 'translate-y-0'), 900);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pt-36 sm:pt-44 md:pt-48 lg:pt-52 w-full pb-24 md:pb-32 bg-gradient-to-b from-white via-white to-dalashala-creamDeep"
    >
      <div className="container-section relative z-10 text-center w-full max-w-3xl px-4 sm:px-6">
        {/* Eyebrow tag — thin sage underline style */}
        <p className="font-inter text-xs md:text-sm uppercase tracking-[0.32em] text-dalashala-olive font-medium mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          Stockholm &nbsp;·&nbsp; Dalarna
        </p>

        <p
          ref={brandRef}
          className="font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-dalashala-earth mb-6 opacity-0 -translate-y-3 transition-all duration-1000 ease-out font-semibold tracking-tight leading-[1.02]"
        >
          Yoga with Camilla
        </p>

        {/* Short thin centred line — honey accent */}
        <span className="block mx-auto w-14 h-[2px] bg-dalashala-honey mb-8 opacity-90 rounded-full" aria-hidden="true" />

        <h1
          ref={headingRef}
          className="font-inter text-lg md:text-xl text-dalashala-earth mb-14 md:mb-16 opacity-0 -translate-y-3 transition-all duration-1000 ease-out delay-300 font-normal leading-relaxed max-w-xl mx-auto"
        >
          Privat yoga i Stockholm och Dalarna.<br />
          På en SUP på Sickla Sjö, på skogsaltanen i Dalarna, eller där du är.
        </h1>

        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center opacity-0 -translate-y-3 transition-all duration-1000 ease-out delay-500"
        >
          <a
            href="#stockholm"
            className="inline-block bg-dalashala-earth text-white px-9 py-3.5 md:px-11 md:py-4 text-sm uppercase tracking-[0.2em] rounded-full font-inter font-semibold hover:bg-dalashala-earthSoft hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            Stockholm
          </a>
          <a
            href="#dalarna"
            className="inline-block border border-dalashala-earth bg-transparent text-dalashala-earth px-9 py-3.5 md:px-11 md:py-4 text-sm uppercase tracking-[0.2em] rounded-full font-inter font-semibold hover:bg-dalashala-earth hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            Dalarna
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
