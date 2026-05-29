import ForestBranch from "@/components/decorative/ForestBranch";

const cards = [
  {
    title: 'Skräddarsytt',
    body: 'Varje klass är utformad efter er grupp och ert tillfälle. Möhippa, födelsedag, bröllop, konferens eller teamdag. Alla nivåer, alltid välkomna.',
  },
  {
    title: 'Flexibelt format',
    body: 'Online på Teams eller Zoom, på er plats i Stockholm, eller utomhus om ni är på konferensanläggning. Du väljer vad som passar bäst.',
  },
  {
    title: 'Veckovisa eller engångs',
    body: 'Regelbundna sessioner som bygger vanemönster och ny närvaro. Eller engångstillfällen för events, workshops och helger. Båda fungerar.',
  },
  {
    title: 'Ingen press, ingen bedömning',
    body: 'Inga krav eller förväntningar. Klasserna handlar om närvaro och självacceptans, inte perfekta poser. Kom som du är.',
  },
];

const WhyYogaWithCamilla = () => {
  return (
    <section id="why-yoga-with-camilla" className="relative py-20 md:py-28 bg-dalashala-creamDeep overflow-hidden">
      {/* Single quiet pine branch motif, low-key */}
      <ForestBranch
        variant="pine"
        className="absolute -top-4 -right-10 w-56 h-56 text-dalashala-sage/20 rotate-[12deg] pointer-events-none hidden md:block"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="font-inter text-sm md:text-base uppercase tracking-[0.42em] text-dalashala-olive font-bold mb-7">
            Så jag jobbar
          </p>
          <h2 className="font-fraunces text-5xl md:text-6xl lg:text-7xl text-dalashala-earth mb-8 tracking-[-0.03em] leading-[0.98]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
            Varför Yoga med Camilla
          </h2>
          <span className="block mx-auto w-20 h-[2px] bg-dalashala-earth/60 mb-8 rounded-full" aria-hidden="true" />
          <p className="font-inter font-normal text-lg md:text-xl text-dalashala-earth/85 leading-relaxed max-w-xl mx-auto">
            Lugn, välkomnande yoga med fokus på rörelse, andning och närvaro.
            Hos er i Stockholm.
          </p>
        </div>

        {/* Card grid — minimal, white, hairline borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-8 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="relative bg-white border border-dalashala-meadow/60 rounded-2xl p-9 md:p-11 hover:border-dalashala-earth/50 hover:shadow-card transition-all duration-400 animate-when-visible"
              data-animation="fade-in-up"
              {...(i ? { 'data-animation-delay': (i * 120).toString() } : {})}
            >
              <span className="block w-10 h-[2px] bg-dalashala-earth/50 mb-7 rounded-full" aria-hidden="true" />
              <h3 className="font-fraunces text-[1.75rem] md:text-[2.125rem] text-dalashala-earth mb-5 leading-[1.08] tracking-[-0.02em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 72, 'SOFT' 50" }}>
                {card.title}
              </h3>
              <p className="font-inter font-normal text-base md:text-[1.0625rem] text-dalashala-earth/85 leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyYogaWithCamilla;
