import ForestBranch from "@/components/decorative/ForestBranch";

const cards = [
  {
    title: 'Skräddarsytt',
    body: 'Varje pass är utformat efter er grupp och ert tillfälle. Möhippa, födelsedag, bröllop, konferens eller teamdag. Alla nivåer, alltid välkomna.',
  },
  {
    title: 'Naturen som studio',
    body: 'I Dalarna: altan omgivet av gran, frisk luft och naturens egna ljud. I Stockholm: SUP yoga på Sicklasjön eller etablerade studios.',
  },
  {
    title: 'På din plats',
    body: 'Kan ni inte ta er hit? Jag kommer till er med mattor och allt som behövs. Konferensrum, stuga eller trädgård, det går bra.',
  },
  {
    title: 'Ingen press, ingen bedömning',
    body: 'Inga krav eller förväntningar. Lektionerna handlar om närvaro och självacceptans, inte perfekta poser. Kom som du är.',
  },
];

const WhyYogaWithCamilla = () => {
  return (
    <section id="why-yoga-with-camilla" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Single quiet pine branch motif, low-key */}
      <ForestBranch
        variant="pine"
        className="absolute -top-4 -right-10 w-56 h-56 text-dalashala-sage/20 rotate-[12deg] pointer-events-none hidden md:block"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-inter text-xs md:text-sm uppercase tracking-[0.32em] text-dalashala-olive font-medium mb-5">
            Så jag jobbar
          </p>
          <h2 className="font-cormorant font-semibold text-4xl md:text-5xl lg:text-6xl text-dalashala-earth mb-6 tracking-tight leading-[1.05]">
            Varför Yoga med Camilla
          </h2>
          <span className="block mx-auto w-12 h-px bg-dalashala-sage mb-6 opacity-80" aria-hidden="true" />
          <p className="font-inter font-normal text-base md:text-lg text-dalashala-earth leading-relaxed max-w-xl mx-auto">
            Ett lugnt, välkomnande rum för rörelse, andning och närvaro.
            I Dalarna och i Stockholm.
          </p>
        </div>

        {/* Card grid — minimal, white, hairline borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="relative bg-white border border-dalashala-meadow/60 rounded-xl p-8 md:p-10 hover:border-dalashala-olive/60 transition-colors duration-300 animate-when-visible"
              data-animation="fade-in-up"
              {...(i ? { 'data-animation-delay': (i * 120).toString() } : {})}
            >
              <span className="block w-8 h-px bg-dalashala-olive mb-6" aria-hidden="true" />
              <h3 className="font-cormorant font-semibold text-2xl md:text-[1.875rem] text-dalashala-earth mb-4 leading-snug tracking-tight">
                {card.title}
              </h3>
              <p className="font-inter font-normal text-base text-dalashala-earth leading-relaxed">
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
