import { Link } from 'react-router-dom';

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
    tag: 'Populärt',
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
  {
    title: 'Privatlektioner',
    description: 'En-till-en yoga live i Stockholm, specialisering för löpare, eller online via Zoom.',
    href: '/tjanster/privatlektioner',
  },
];

const dalarnaServices: ServiceCard[] = [
  {
    title: 'Hönsyoga på Stugan',
    description: 'Yoga på altanen med hönsen runt. Har du hört talas om goat yoga? Det här är den svenska, lugnare varianten.',
    href: '/tjanster/honsyoga',
    tag: 'Unikt',
  },
  {
    title: 'Mini Retreat & Upplevelser',
    description: 'Retreat, adventure-paket eller trail run + yoga. Dag, heldag eller weekend i naturen.',
    href: '/tjanster/mini-retreat',
    tag: 'Populärt',
  },
  {
    title: 'Privata Event',
    description: 'Möhippa, bröllop eller firande. Skräddarsydd dag för gruppen på stugan i Dalarna.',
    href: '/tjanster/privata-event',
  },
  {
    title: 'Privatlektioner',
    description: 'En-till-en yoga i Dalarna, online via Zoom, eller för löpare. Alla lektioner på engelska.',
    href: '/tjanster/privatlektioner',
    tag: 'English',
  },
];

const tagStyles: Record<string, string> = {
  'Nytt': 'bg-dalashala-meadowLight/60 text-dalashala-olive border border-dalashala-meadow',
  'Populärt': 'bg-dalashala-honeyLight text-dalashala-honeyDeep border border-dalashala-honey/50',
  'Unikt': 'bg-dalashala-earth text-white border border-dalashala-earth',
  'English': 'bg-white text-dalashala-earth border border-dalashala-meadow/80',
};

const ServiceCard = ({ title, description, href, tag }: ServiceCard) => (
  <Link
    to={href}
    className="group flex flex-col justify-between bg-white rounded-xl p-7 md:p-8 border border-dalashala-meadow/60 hover:border-dalashala-olive/60 hover:-translate-y-0.5 transition-all duration-300"
  >
    <div>
      {tag && (
        <span className={`tag-pill mb-4 font-semibold ${tagStyles[tag] || tagStyles['Nytt']}`}>
          {tag}
        </span>
      )}
      <h3 className="font-cormorant font-semibold text-[1.625rem] md:text-[1.75rem] text-dalashala-earth mb-3 group-hover:text-dalashala-olive transition-colors leading-snug tracking-tight">
        {title}
      </h3>
      <p className="font-inter font-normal text-base text-dalashala-earth leading-relaxed">
        {description}
      </p>
    </div>
    <span className="mt-6 inline-flex items-center gap-2 font-inter text-xs text-dalashala-honeyDeep uppercase tracking-[0.22em] font-semibold group-hover:text-dalashala-earth transition-colors">
      Läs mer
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </span>
  </Link>
);

const LocationHeader = ({ label }: { label: string }) => (
  <div className="flex items-baseline gap-5 mb-10">
    <h3 className="font-cormorant font-semibold text-3xl md:text-4xl text-dalashala-earth tracking-tight whitespace-nowrap">
      {label}
    </h3>
    <span className="flex-1 h-px bg-dalashala-meadow" />
  </div>
);

const Services = () => {
  return (
    <section id="services" className="relative pt-20 md:pt-28 bg-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-inter text-xs md:text-sm uppercase tracking-[0.32em] text-dalashala-olive font-medium mb-5">
            Tjänster
          </p>
          <h2 className="font-cormorant font-semibold text-4xl md:text-5xl lg:text-6xl text-dalashala-earth mb-6 leading-[1.05] tracking-tight">
            Vad jag erbjuder
          </h2>
          <span className="block mx-auto w-14 h-[2px] bg-dalashala-honey mb-6 opacity-90 rounded-full" aria-hidden="true" />
          <p className="font-inter font-normal text-base md:text-lg text-dalashala-earth leading-relaxed">
            Privat yoga för grupper och individer,
            i stadsmiljö eller mitt i skogen.
          </p>
        </div>

        {/* Stockholm */}
        <div id="stockholm" className="mb-20 scroll-mt-24">
          <LocationHeader label="Stockholm" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {stockholmServices.map((s) => (
              <ServiceCard key={s.href + s.title} {...s} />
            ))}
          </div>
        </div>

        {/* Dalarna */}
        <div id="dalarna" className="mb-16 scroll-mt-24">
          <LocationHeader label="Dalarna" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {dalarnaServices.map((s) => (
              <ServiceCard key={s.href + s.title} {...s} />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom CTA — pale sage wash, distinct from both white sections and the dark footer */}
      <div className="relative mt-20 md:mt-28 bg-dalashala-creamDeep py-16 md:py-20 text-center">
        <span className="block mx-auto w-14 h-[2px] bg-dalashala-honey mb-7 opacity-90 rounded-full" aria-hidden="true" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h3 className="font-cormorant font-semibold text-4xl md:text-5xl text-dalashala-earth mb-5 tracking-tight leading-[1.05]">
            Ser du inte det du letar efter?
          </h3>
          <p className="font-inter font-normal text-base md:text-lg text-dalashala-earth mb-8 max-w-lg mx-auto leading-relaxed">
            Hör av dig, jag skräddarsyr gärna något för just er grupp, er dag och er plats.
          </p>
          <a
            href="#contact"
            className="inline-block font-inter text-sm font-semibold uppercase tracking-[0.2em] bg-dalashala-earth text-white px-10 py-4 rounded-full hover:bg-dalashala-earthSoft hover:-translate-y-0.5 transition-all duration-300"
          >
            Kontakta mig
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
