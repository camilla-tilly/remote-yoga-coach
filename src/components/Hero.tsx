import { useEffect, useRef } from 'react';

const Hero = () => {
  const brandRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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
      className="relative w-full bg-dalashala-creamDeep overflow-hidden"
    >
      <div className="relative w-full min-h-[70vh] md:min-h-0 md:py-32 flex items-center">
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto px-4 sm:px-6 pt-16 md:pt-0">
        <p className="font-inter text-sm md:text-base uppercase tracking-[0.42em] text-dalashala-olive font-semibold mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          Stockholm
        </p>

        <p
          ref={brandRef}
          className="font-fraunces text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem] xl:text-[11rem] text-dalashala-earth mb-8 opacity-0 -translate-y-3 transition-all duration-1000 ease-out tracking-[-0.035em] leading-[0.92]"
          style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
        >
          Yoga with<br className="md:hidden" /> Camilla
        </p>

        <span className="block mx-auto w-20 h-[2px] bg-dalashala-earth/70 mb-10 rounded-full opacity-0 animate-fade-in" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }} aria-hidden="true" />

        <h1
          ref={headingRef}
          className="font-inter text-xl md:text-[1.5rem] text-dalashala-earth/90 mb-6 md:mb-8 opacity-0 -translate-y-3 transition-all duration-1000 ease-out delay-300 font-normal leading-[1.55] max-w-2xl mx-auto"
        >
          Fokus, lugn och teamenergi — helt på era villkor.
        </h1>
        <p className="font-inter text-base md:text-lg text-dalashala-earth/75 mb-16 md:mb-20 opacity-0 -translate-y-3 transition-all duration-1000 ease-out delay-300 max-w-2xl mx-auto leading-relaxed">
          Tre sätt att arbeta med mig: veckovisa Teams-sessioner, workshops för kickoffs och event, och SUP yoga på Sickla sjö.
        </p>

        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 -translate-y-3 transition-all duration-1000 ease-out delay-500"
        >
          <a
            href="#services"
            className="inline-block bg-dalashala-earth text-white px-11 py-4 md:px-14 md:py-[1.125rem] text-sm uppercase tracking-[0.22em] rounded-full font-inter font-semibold hover:bg-dalashala-earthSoft hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap shadow-card"
          >
            Se tjänster
          </a>
          <a
            href="#contact"
            className="inline-block border border-dalashala-earth bg-transparent text-dalashala-earth px-11 py-4 md:px-14 md:py-[1.125rem] text-sm uppercase tracking-[0.22em] rounded-full font-inter font-semibold hover:bg-dalashala-earth hover:text-white hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            Kontakt
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
