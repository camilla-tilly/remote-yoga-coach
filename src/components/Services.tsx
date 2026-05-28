import { Link } from 'react-router-dom';
import { softenAmp } from '@/lib/amp';

const Services = () => {
  return (
    <section id="services" className="relative pt-24 md:pt-32 bg-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="font-inter text-sm md:text-base uppercase tracking-[0.42em] text-dalashala-olive font-bold mb-7">
            Företagsyoga
          </p>
          <h2 className="font-fraunces text-5xl md:text-6xl lg:text-7xl text-dalashala-earth mb-8 leading-[0.98] tracking-[-0.03em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
            Tre vägar att arbeta med mig
          </h2>
          <span className="block mx-auto w-16 h-[2px] bg-dalashala-earth/60 mb-8 rounded-full" aria-hidden="true" />
          <p className="font-inter font-normal text-lg md:text-xl text-dalashala-earth/85 leading-relaxed">
            Oavsett om ni behöver regelbundna sessioner för fokus och lugn, en workshop för ett event, eller ett sommarevent för teamet.
          </p>
        </div>

        <div id="stockholm" className="mb-24 scroll-mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              to="/tjanster/foretagsyoga"
              className="group relative flex flex-col justify-between bg-white rounded-2xl p-8 md:p-9 border border-dalashala-meadow/60 hover:border-dalashala-earth/50 hover:-translate-y-1 hover:shadow-card transition-all duration-400"
            >
              <div>
                <h3 className="font-fraunces text-[1.875rem] md:text-[2.125rem] text-dalashala-earth mb-4 group-hover:text-dalashala-earthSoft transition-colors leading-[1.05] tracking-[-0.02em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 48, 'SOFT' 50" }}>
                  Veckovisa Teams-sessioner
                </h3>
                <p className="font-inter font-normal text-base md:text-[1.0625rem] text-dalashala-earth/85 leading-relaxed">
                  1–2 sessioner per vecka direkt från kontoret. Andning, meditation och rörelse som bygger fokus och lugn. Passar in i arbetsdagen. Två nivåer från 3 500 kr/mån.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-inter text-xs text-dalashala-earth uppercase tracking-[0.24em] font-semibold group-hover:gap-3 transition-all">
                Läs mer
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
            <Link
              to="/tjanster/foretagsyoga-event"
              className="group relative flex flex-col justify-between bg-white rounded-2xl p-8 md:p-9 border border-dalashala-meadow/60 hover:border-dalashala-earth/50 hover:-translate-y-1 hover:shadow-card transition-all duration-400"
            >
              <div>
                <h3 className="font-fraunces text-[1.875rem] md:text-[2.125rem] text-dalashala-earth mb-4 group-hover:text-dalashala-earthSoft transition-colors leading-[1.05] tracking-[-0.02em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 48, 'SOFT' 50" }}>
                  Workshops för event
                </h3>
                <p className="font-inter font-normal text-base md:text-[1.0625rem] text-dalashala-earth/85 leading-relaxed">
                  Anpassad yoga för kickoffs, AWs, konferenser och möten. Andningsövningar, stolsyoga eller full yoga — helt skräddarsytt för er grupp. 30 minuter till flera timmar. Kontakta för offert.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-inter text-xs text-dalashala-earth uppercase tracking-[0.24em] font-semibold group-hover:gap-3 transition-all">
                Läs mer
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
            <Link
              to="/tjanster/sup-yoga"
              className="group relative flex flex-col justify-between bg-white rounded-2xl p-8 md:p-9 border border-dalashala-meadow/60 hover:border-dalashala-earth/50 hover:-translate-y-1 hover:shadow-card transition-all duration-400"
            >
              <div>
                <h3 className="font-fraunces text-[1.875rem] md:text-[2.125rem] text-dalashala-earth mb-4 group-hover:text-dalashala-earthSoft transition-colors leading-[1.05] tracking-[-0.02em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 48, 'SOFT' 50" }}>
                  SUP yoga på Sickla sjö
                </h3>
                <p className="font-inter font-normal text-base md:text-[1.0625rem] text-dalashala-earth/85 leading-relaxed">
                  Yoga på paddleboard vid Stockholms vackraste sjö. Perfekt för sommarkickoff, AW eller teamavslutning. Alla nivåer välkomna. Från 500 kr/person.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-inter text-xs text-dalashala-earth uppercase tracking-[0.24em] font-semibold group-hover:gap-3 transition-all">
                Läs mer
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom CTA — pale sage wash */}
      <div className="relative mt-24 md:mt-32 bg-dalashala-creamDeep py-20 md:py-24 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h3 className="font-fraunces text-4xl md:text-5xl lg:text-[3.5rem] text-dalashala-earth mb-6 tracking-[-0.02em] leading-[1]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
            Ser du inte det du letar efter?
          </h3>
          <p className="font-inter font-normal text-lg md:text-xl text-dalashala-earth/85 mb-10 max-w-lg mx-auto leading-relaxed">
            Hör av dig om ni letar efter något skräddarsytt — ett återkommande upplägg för kontoret, ett engångstillfälle eller ett sommarevent för teamet.
          </p>
          <a
            href="#contact"
            className="inline-block font-inter text-sm font-semibold uppercase tracking-[0.22em] bg-dalashala-earth text-white px-12 py-[1.125rem] rounded-full hover:bg-dalashala-earthSoft hover:-translate-y-0.5 transition-all duration-300 shadow-card"
          >
            Kontakta mig
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
