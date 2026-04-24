import ForestBranch from "@/components/decorative/ForestBranch";
import Mandala from "@/components/decorative/Mandala";

const WhyYogaWithCamilla = () => {
  return (
    <section id="why-yoga-with-camilla" className="py-8 bg-dalashala-beige relative overflow-hidden">
      {/* Ambient forest + mandala motifs */}
      <div className="absolute inset-0 pointer-events-none">
        <ForestBranch
          variant="pine"
          className="absolute top-16 -left-10 w-40 h-40 text-dalashala-olive/15 rotate-[10deg]"
        />
        <ForestBranch
          variant="fern"
          className="absolute bottom-24 right-6 w-36 h-36 text-dalashala-sage/25 -rotate-12"
        />
        <ForestBranch
          variant="pine"
          className="absolute top-1/2 left-1/3 w-28 h-28 text-dalashala-earthSoft/15 rotate-[45deg]"
        />
        <Mandala
          variant="eight"
          strokeWidth={0.8}
          className="absolute -top-12 right-8 w-48 h-48 text-dalashala-saffron/15"
        />
        <Mandala
          variant="twelve"
          strokeWidth={0.8}
          className="absolute bottom-8 -left-16 w-56 h-56 text-dalashala-gold/12"
        />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 animate-when-visible" data-animation="fade-in">
          <h2 className="heading-lg text-xl md:text-2xl lg:text-3xl mb-4 font-bold">Varför Yoga med Camilla</h2>

          <div className="font-eb-garamond text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-dalashala-earthSoft italic mb-10">
            <p>
              Oavsett om det är ett privat event, en företagsdag eller en morgonklass på altanen. Jag skapar
              ett lugnt, välkomnande rum för rörelse, andning och närvaro. I Dalarna och i Stockholm.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] mx-auto">
          {[
            {
              tag: 'Skräddarsytt',
              title: 'Ditt event, din yoga',
              body: 'Varje pass är utformat efter er grupp och ert tillfälle: möhippa, födelsedag, bröllop, konferens eller teamdag. Jag anpassar praktiken för alla nivåer och skapar en minnesvärd upplevelse.',
              delay: 0,
            },
            {
              tag: 'Miljö',
              title: 'Naturen som studio',
              body: 'I Dalarna: altan omgivet av gran, frisk luft och naturens egna ljud. I Stockholm: SUP yoga på Sicklasjön eller inomhus hos etablerade studios. Naturen är alltid med, oavsett var jag undervisar.',
              delay: 150,
            },
            {
              tag: 'Flexibelt',
              title: 'På din plats',
              body: 'Kan inte ni ta er hit? Jag kommer till er. Jag tar med mattor och allt som behövs, oavsett om det är ett konferensrum i Stockholm, en stuga i Dalarna eller en trädgård.',
              delay: 300,
            },
            {
              tag: 'Approach',
              title: 'Ingen press, ingen bedömning',
              body: 'Det finns inga krav eller förväntningar här. Mina lektioner handlar om närvaro och självacceptans, inte perfekta poser. Kom som du är, lämna som du vill.',
              delay: 450,
            },
          ].map((card) => (
            <div
              key={card.tag}
              className="relative rounded-2xl overflow-hidden border border-dalashala-meadow/30 bg-white/70 backdrop-blur-sm shadow-soft hover:shadow-card-hover transition-all duration-300 animate-when-visible h-full flex flex-col group"
              data-animation="fade-in-up"
              {...(card.delay ? { 'data-animation-delay': card.delay.toString() } : {})}
            >
              {/* Corner mandala watermark */}
              <Mandala
                variant="eight"
                strokeWidth={0.8}
                className="absolute -top-8 -right-8 w-28 h-28 text-dalashala-saffron/12 pointer-events-none"
              />
              <div className="bg-forest-gradient p-3 flex items-center justify-center gap-2 group-hover:brightness-110 transition-all duration-300">
                <span className="w-1 h-1 rounded-full bg-dalashala-saffron" />
                <h3 className="text-dalashala-cream uppercase tracking-[0.2em] text-xs md:text-sm font-cinzel font-bold">
                  {card.tag}
                </h3>
              </div>
              <div className="relative p-4 flex-1 flex flex-col group-hover:bg-white/90 transition-colors duration-300">
                <h4 className="text-base md:text-lg font-cinzel mb-3 text-dalashala-earth">{card.title}</h4>
                <p className="text-dalashala-earthSoft leading-relaxed font-eb-garamond text-xs md:text-sm">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyYogaWithCamilla;
