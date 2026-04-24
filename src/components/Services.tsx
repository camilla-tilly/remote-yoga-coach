import { Link } from 'react-router-dom';
import { softenAmp } from '@/lib/amp';

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  tag?: string;
};

const stockholmServices: ServiceCard[] = [
  {
    title: 'Privata Event',
    description: 'Möhippa, födelsedag eller sommaravslutning. Privat yoga för gruppen.',
    href: '/tjanster/privata-event',
  },
  {
    title: 'Företagsyoga & Workshops',
    description: 'Konferenser, kickoffs, teambuilding och tematiska workshops. Alla nivåer.',
    href: '/tjanster/foretagsyoga',
  },
  {
    title: 'Privat SUP Yoga & Bastu',
    description: 'Yoga på paddleboard plus bastu vid Sickla Strand. För möhippa, team eller födelsedag.',
    href: '/tjanster/sup-yoga',
  },
  {
    title: 'SUP Yoga Klasser (drop-in)',
    description: 'Öppna vinyasa- och yin-klasser på vattnet vid Sickla Strand. Bastu ingår. Bokas via Smashing Balance.',
    href: '/tjanster/sup-yoga-klasser',
  },
];

const dalarnaServices: ServiceCard[] = [
  {
    title: 'Hönsyoga på Stugan',
    description: 'Yoga på altanen med hönsen runt. Har du hört talas om goat yoga? Det här är den svenska, lugnare varianten.',
    href: '/tjanster/honsyoga',
  },
  {
    title: 'Mini Retreat & Upplevelser',
    description: 'Retreat, adventure-paket eller trail run + yoga. Dag, heldag eller weekend i naturen.',
    href: '/tjanster/mini-retreat',
  },
  {
    title: 'Privata Event',
    description: 'Möhippa, bröllop eller firande. Skräddarsydd dag för gruppen på stugan i Dalarna.',
    href: '/tjanster/privata-event',
  },
];

const ServiceCard = ({ title, description, href, tag }: ServiceCard) => (
  <Link
    to={href}
    className="group relative flex flex-col justify-between bg-white rounded-2xl p-8 md:p-9 border border-dalashala-meadow/60 hover:border-dalashala-earth/50 hover:-translate-y-1 hover:shadow-card transition-all duration-400"
  >
    {/* Tag — absolute top-right so heading alignment is consistent across all cards */}
    {tag && (
      <span className="absolute top-5 right-5 font-inter text-[9px] uppercase tracking-[0.28em] text-dalashala-olive font-bold">
        {tag}
      </span>
    )}

    <div>
      <h3 className="font-fraunces text-[1.875rem] md:text-[2.125rem] text-dalashala-earth mb-4 group-hover:text-dalashala-earthSoft transition-colors leading-[1.05] tracking-[-0.02em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 48, 'SOFT' 50" }}>
        {softenAmp(title)}
      </h3>
      <p className="font-inter font-normal text-base md:text-[1.0625rem] text-dalashala-earth/85 leading-relaxed">
        {description}
      </p>
    </div>
    <span className="mt-8 inline-flex items-center gap-2 font-inter text-xs text-dalashala-earth uppercase tracking-[0.24em] font-semibold group-hover:gap-3 transition-all">
      Läs mer
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </span>
  </Link>
);

const LocationHeader = ({ label }: { label: string }) => (
  <div className="flex items-baseline gap-6 mb-12">
    <h3 className="font-inter text-sm md:text-base uppercase tracking-[0.42em] text-dalashala-earth font-bold whitespace-nowrap">
      {label}
    </h3>
    <span className="flex-1 h-px bg-dalashala-meadow" />
  </div>
);

const Services = () => {
  return (
    <section id="services" className="relative pt-24 md:pt-32 bg-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="font-inter text-sm md:text-base uppercase tracking-[0.42em] text-dalashala-olive font-bold mb-7">
            Tjänster
          </p>
          <h2 className="font-fraunces text-5xl md:text-6xl lg:text-7xl text-dalashala-earth mb-8 leading-[0.98] tracking-[-0.03em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
            Vad jag erbjuder
          </h2>
          <span className="block mx-auto w-16 h-[2px] bg-dalashala-earth/60 mb-8 rounded-full" aria-hidden="true" />
          <p className="font-inter font-normal text-lg md:text-xl text-dalashala-earth/85 leading-relaxed">
            Privat yoga för grupper och individer, i stadsmiljö eller mitt i skogen.
          </p>
        </div>

        {/* Stockholm */}
        <div id="stockholm" className="mb-24 scroll-mt-24">
          <LocationHeader label="Stockholm" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {stockholmServices.map((s) => (
              <ServiceCard key={s.href + s.title} {...s} />
            ))}
          </div>
        </div>

        {/* Dalarna */}
        <div id="dalarna" className="mb-20 scroll-mt-24">
          <LocationHeader label="Dalarna" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {dalarnaServices.map((s) => (
              <ServiceCard key={s.href + s.title} {...s} />
            ))}
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
            Hör av dig, jag skräddarsyr gärna något för just er grupp, er dag och er plats.
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
