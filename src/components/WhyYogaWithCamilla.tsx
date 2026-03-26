import { Leaf } from "lucide-react";

const WhyYogaWithCamilla = () => {
  return (
    <section id="why-yoga-with-camilla" className="py-8 bg-dalashala-beige relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 transform rotate-12"><Leaf size={40} className="text-dalashala-tan" /></div>
        <div className="absolute bottom-40 right-10 transform -rotate-12"><Leaf size={50} className="text-dalashala-tan" /></div>
        <div className="absolute top-1/2 left-1/3 transform rotate-45"><Leaf size={30} className="text-dalashala-tan" /></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 animate-when-visible" data-animation="fade-in">
          <h2 className="heading-lg text-xl md:text-2xl lg:text-3xl mb-4 font-bold">Varför Yoga med Camilla</h2>

          <div className="font-eb-garamond text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-dalashala-mediumBrown italic mb-10">
            <p>
              Oavsett om det är ett privat event, en företagsdag eller en morgonklass på altanen — jag skapar
              ett lugnt, välkomnande rum för rörelse, andning och närvaro. I Dalarna och i Stockholm.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] mx-auto">
          <div className="rounded-lg overflow-hidden border border-dalashala-tan/30 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 animate-when-visible h-full flex flex-col group" data-animation="fade-in-up">
            <div className="bg-dalashala-darkBrown/90 p-3 flex items-center justify-center group-hover:bg-dalashala-darkBrown transition-colors duration-300">
              <h3 className="text-dalashala-beige uppercase tracking-wider text-xs md:text-sm font-bold">Skräddarsytt</h3>
            </div>
            <div className="p-4 flex-1 flex flex-col group-hover:bg-white/80 transition-colors duration-300">
              <h4 className="text-base md:text-lg font-cinzel mb-3 text-dalashala-darkBrown">Ditt event, din yoga</h4>
              <p className="text-dalashala-mediumBrown leading-relaxed font-eb-garamond text-xs md:text-sm">
                Varje pass är utformat efter er grupp och ert tillfälle — möhippa, födelsedag, bröllop, konferens
                eller teamdag. Jag anpassar praktiken för alla nivåer och skapar en minnesvärd upplevelse.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-dalashala-tan/30 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 animate-when-visible h-full flex flex-col group" data-animation="fade-in-up" data-animation-delay="150">
            <div className="bg-dalashala-darkBrown/90 p-3 flex items-center justify-center group-hover:bg-dalashala-darkBrown transition-colors duration-300">
              <h3 className="text-dalashala-beige uppercase tracking-wider text-xs md:text-sm font-bold">Miljö</h3>
            </div>
            <div className="p-4 flex-1 flex flex-col group-hover:bg-white/80 transition-colors duration-300">
              <h4 className="text-base md:text-lg font-cinzel mb-3 text-dalashala-darkBrown">Naturen som studio</h4>
              <p className="text-dalashala-mediumBrown leading-relaxed font-eb-garamond text-xs md:text-sm">
                I Dalarna: altan omgivet av gran, frisk luft och naturens egna ljud. I Stockholm: SUP yoga på
                Sicklasjön eller inomhus hos etablerade studios. Naturen är alltid med, oavsett var vi är.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-dalashala-tan/30 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 animate-when-visible h-full flex flex-col group" data-animation="fade-in-up" data-animation-delay="300">
            <div className="bg-dalashala-darkBrown/90 p-3 flex items-center justify-center group-hover:bg-dalashala-darkBrown transition-colors duration-300">
              <h3 className="text-dalashala-beige uppercase tracking-wider text-xs md:text-sm font-bold">Flexibelt</h3>
            </div>
            <div className="p-4 flex-1 flex flex-col group-hover:bg-white/80 transition-colors duration-300">
              <h4 className="text-base md:text-lg font-cinzel mb-3 text-dalashala-darkBrown">På din plats</h4>
              <p className="text-dalashala-mediumBrown leading-relaxed font-eb-garamond text-xs md:text-sm">
                Kan inte ni ta er hit? Jag kommer till er. Jag tar med mattor och allt som behövs —
                oavsett om det är ett konferensrum i Stockholm, en stuga i Dalarna eller en trädgård.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-dalashala-tan/30 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 animate-when-visible h-full flex flex-col group" data-animation="fade-in-up" data-animation-delay="450">
            <div className="bg-dalashala-darkBrown/90 p-3 flex items-center justify-center group-hover:bg-dalashala-darkBrown transition-colors duration-300">
              <h3 className="text-dalashala-beige uppercase tracking-wider text-xs md:text-sm font-bold">Approach</h3>
            </div>
            <div className="p-4 flex-1 flex flex-col group-hover:bg-white/80 transition-colors duration-300">
              <h4 className="text-base md:text-lg font-cinzel mb-3 text-dalashala-darkBrown">Ingen press, ingen bedömning</h4>
              <p className="text-dalashala-mediumBrown leading-relaxed font-eb-garamond text-xs md:text-sm">
                Det finns inga krav eller förväntningar här. Mina lektioner handlar om närvaro och
                självacceptans — inte perfekta poser. Kom som du är, lämna som du vill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyYogaWithCamilla;
