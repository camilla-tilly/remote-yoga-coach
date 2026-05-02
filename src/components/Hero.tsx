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
      className="relative w-full bg-white pt-20 md:pt-0 overflow-hidden"
    >
      {/* Aspect-locked container — matches the illustration's 16:9 ratio so the
          image fills edge-to-edge with no cropping and no side gutters on md+.
          On mobile it falls back to natural aspect so text has room to stack below. */}
      <div className="relative w-full md:aspect-[16/9]">
        {/* Scandi watercolor illustration */}
        <img
          src="/hero.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="block w-full h-auto md:absolute md:inset-0 md:h-full md:object-cover md:object-center pointer-events-none select-none"
        />

        {/* Soft cream wash on md+ to keep the headline crisp over the illustration */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(255,253,247,0.35) 0%, rgba(255,253,247,0.55) 50%, rgba(220,228,214,0.45) 100%)' }}
        />

        <div className="relative z-10 text-center w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-0 md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-center">
        {/* Eyebrow — tracked caps (kept — Camilla likes this treatment) */}
        <p className="font-inter text-sm md:text-base uppercase tracking-[0.42em] text-dalashala-olive font-semibold mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          Stockholm &nbsp;·&nbsp; Dalarna
        </p>

        <p
          ref={brandRef}
          className="font-fraunces text-[3.75rem] sm:text-[5rem] md:text-[6.75rem] lg:text-[8rem] xl:text-[9rem] text-dalashala-earth mb-8 opacity-0 -translate-y-3 transition-all duration-1000 ease-out tracking-[-0.035em] leading-[0.92]"
          style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
        >
          Yoga with<br className="md:hidden" /> Camilla
        </p>

        {/* Thin pine line */}
        <span className="block mx-auto w-20 h-[2px] bg-dalashala-earth/70 mb-10 rounded-full opacity-0 animate-fade-in" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }} aria-hidden="true" />

        <h1
          ref={headingRef}
          className="font-inter text-xl md:text-[1.5rem] text-dalashala-earth/90 mb-16 md:mb-20 opacity-0 -translate-y-3 transition-all duration-1000 ease-out delay-300 font-normal leading-[1.55] max-w-2xl mx-auto"
        >
          Privat yoga i Stockholm och Dalarna.<br />
          På en SUP på Sickla Sjö, på skogsaltanen i Dalarna, eller där du är.
        </h1>

        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 -translate-y-3 transition-all duration-1000 ease-out delay-500"
        >
          <a
            href="#stockholm"
            className="inline-block bg-dalashala-earth text-white px-11 py-4 md:px-14 md:py-[1.125rem] text-sm uppercase tracking-[0.22em] rounded-full font-inter font-semibold hover:bg-dalashala-earthSoft hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap shadow-card"
          >
            Stockholm
          </a>
          <a
            href="#dalarna"
            className="inline-block border border-dalashala-earth bg-transparent text-dalashala-earth px-11 py-4 md:px-14 md:py-[1.125rem] text-sm uppercase tracking-[0.22em] rounded-full font-inter font-semibold hover:bg-dalashala-earth hover:text-white hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            Dalarna
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
