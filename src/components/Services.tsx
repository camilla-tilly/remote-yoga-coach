import { Link } from 'react-router-dom';

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  tag?: string;
};

const stockholmServices: ServiceCard[] = [
  {
    title: 'Möhippa Yoga',
    description: 'Privat yogaklass för möhippan — på SUP på Sicklasjön eller på land. Skräddarsytt för hela gruppen, ingen erfarenhet krävs.',
    href: '/tjanster/mohippa-yoga',
    tag: 'Populärt',
  },
  {
    title: 'Företags- & Konferensyoga',
    description: 'Yoga på jobbet, konferensen eller kick-offen. Passar alla nivåer — jag tar med all utrustning och anpassar passet för er grupp.',
    href: '/tjanster/foretagsyoga',
  },
  {
    title: 'SUP Yoga Stockholm',
    description: 'Yoga på brädan på Sicklasjön — för team, möhippa eller en annorlunda sommardag. Vinyasa och yin på vattnet.',
    href: '/tjanster/sup-yoga',
  },
  {
    title: 'Privatlektioner',
    description: 'En-till-en yoga anpassad helt efter dig — dina mål, ditt schema, ditt tempo. I Stockholm eller online.',
    href: '/tjanster/privatlektioner',
  },
];

const dalarnaServices: ServiceCard[] = [
  {
    title: 'Hönsyoga på Stugan',
    description: 'Yoga på altanen med hönsen fritt strövande runt. Sveriges svar på goat yoga — lugnt, jordnära och helt unikt. Privat bokning, upp till 6 pers.',
    href: '/tjanster/honsyoga',
    tag: 'Unikt',
  },
  {
    title: 'Mini Retreat i Dalarna',
    description: 'En dag i skogen — utomhusyoga, promenad, fika och stillhet. 2,5 timmar med tåg från Stockholm. Perfekt ensam eller med vänner.',
    href: '/tjanster/mini-retreat',
    tag: 'Populärt',
  },
  {
    title: 'Trail Run + Yoga',
    description: 'Guidat löppass i Dalarnas skogar följt av en återhämtande yogasession. Halvdag eller heldag — för löpare som vill röra sig och landa.',
    href: '/tjanster/trail-run-yoga',
  },
  {
    title: 'Bröllopsyoga',
    description: 'Yoga som en del av bröllopsveckan — morgonen av, kvällen innan, eller dagen efter. I Dalarna eller Stockholm, Camilla kommer till er.',
    href: '/tjanster/brollopsyoga',
  },
  {
    title: 'Äventyrpaket',
    description: 'En hel dag i Dalarnas natur — yoga, vandring, meditation och friluftsliv. För grupper som vill ha mer än ett vanligt yogapass.',
    href: '/tjanster/adventure-paket',
  },
];

const ServiceCard = ({ title, description, href, tag }: ServiceCard) => (
  <Link
    to={href}
    className="group block bg-white rounded-2xl p-5 border border-dalashala-tan/20 shadow-sm hover:shadow-md transition-all duration-300 relative"
  >
    {tag && (
      <span
        className="absolute top-4 right-4 text-xs font-montserrat uppercase tracking-wide px-2 py-0.5 rounded-full"
        style={{ backgroundColor: '#864927', color: '#f9dec6' }}
      >
        {tag}
      </span>
    )}
    <h3 className="font-cinzel text-sm text-dalashala-darkBrown mb-2 group-hover:text-dalashala-mediumBrown transition-colors pr-16">
      {title}
    </h3>
    <p className="font-eb-garamond text-sm text-dalashala-mediumBrown leading-relaxed">
      {description}
    </p>
    <span className="mt-3 inline-block font-montserrat text-xs text-dalashala-darkBrown uppercase tracking-wide group-hover:underline">
      Läs mer →
    </span>
  </Link>
);

const Services = () => {
  return (
    <section id="services" className="relative py-10 md:py-14 bg-dalashala-beige">
      <div className="container-section">
        <div className="max-w-[1200px] mx-auto">

          {/* Section header */}
          <div className="mb-10">
            <span className="text-xs uppercase tracking-wider font-montserrat text-dalashala-mediumBrown">
              Yoga med Camilla
            </span>
            <h2 className="font-cinzel text-2xl md:text-3xl text-dalashala-darkBrown mt-1 mb-2">
              Vad jag erbjuder
            </h2>
            <p className="font-eb-garamond text-base text-dalashala-mediumBrown max-w-xl">
              Jag är baserad i Dalarna och Stockholm — alla tjänster kan bokas på båda platser om inget annat anges.
            </p>
          </div>

          {/* Stockholm */}
          <div id="stockholm" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-5">
              <h3 className="font-cinzel text-sm uppercase tracking-widest text-dalashala-mediumBrown">
                Stockholm
              </h3>
              <div className="flex-1 h-px bg-dalashala-tan/40" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stockholmServices.map((s) => (
                <ServiceCard key={s.href + s.title} {...s} />
              ))}
            </div>
          </div>

          {/* Dalarna */}
          <div id="dalarna" className="mb-10 scroll-mt-20">
            <div className="flex items-center gap-3 mb-5">
              <h3 className="font-cinzel text-sm uppercase tracking-widest text-dalashala-mediumBrown">
                Dalarna
              </h3>
              <div className="flex-1 h-px bg-dalashala-tan/40" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dalarnaServices.map((s) => (
                <ServiceCard key={s.href + s.title} {...s} />
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-4">
            <p className="font-eb-garamond text-dalashala-mediumBrown mb-4">
              Ser du inte det du letar efter? Hör av dig — jag skräddarsyr gärna något för just er.
            </p>
            <a
              href="#contact"
              className="inline-block font-montserrat text-sm px-6 py-3 rounded-full transition-colors"
              style={{ backgroundColor: '#864927', color: '#f9dec6' }}
            >
              Kontakta mig
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
