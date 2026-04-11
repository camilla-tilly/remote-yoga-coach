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
    description: 'Möhippa, sommaravslutning, teambuilding eller födelsedag — privat yogaupplevelse för gruppen.',
    href: '/tjanster/privata-event',
    tag: 'Nytt',
  },
  {
    title: 'Möhippa Yoga',
    description: 'Privat yoga för hela gruppen — på SUP eller på land. Ingen erfarenhet krävs.',
    href: '/tjanster/mohippa-yoga',
    tag: 'Populärt',
  },
  {
    title: 'Företags- & Konferensyoga',
    description: 'Yoga för team och konferenser i Stockholm. Anpassat för er grupp, alla nivåer.',
    href: '/tjanster/foretagsyoga',
  },
  {
    title: 'SUP Yoga Stockholm',
    description: 'Yoga på brädan på Sicklasjön. Perfekt för team, födelsedag eller en sommardag.',
    href: '/tjanster/sup-yoga',
  },
  {
    title: 'Trail Run + Yoga',
    description: 'Guidat trail run i Nacka Naturreservat + återhämtningsyoga. En aktiv heldagsupplevelse.',
    href: '/tjanster/trail-run-yoga',
  },
  {
    title: 'Privatlektioner',
    description: 'En-till-en yoga i ditt tempo — anpassad efter dina mål. I Stockholm eller online.',
    href: '/tjanster/privatlektioner',
  },
  {
    title: 'Yoga för Löpare',
    description: 'Återhämtning, rörlighet och skadeförebyggande yoga — byggd specifikt för dig som springer.',
    href: '/tjanster/yoga-for-lopare',
  },
  {
    title: 'Födelsedag Yoga',
    description: 'En annorlunda födelsedagsaktivitet — privat yogaklass i hemmet, parken eller på hotellet.',
    href: '/tjanster/fodelsedag-yoga',
  },
  {
    title: 'Yoga Workshop',
    description: 'Tematiska halvdags- och heldagsworkshops — breathwork, yin, återhämtning och mer.',
    href: '/tjanster/yoga-workshop',
  },
];

const dalarnaServices: ServiceCard[] = [
  {
    title: 'Privata Event',
    description: 'Möhippa, sommaravslutning, teamdag eller födelsedag — skräddarsydd dag för gruppen i Dalarna.',
    href: '/tjanster/privata-event',
    tag: 'Nytt',
  },
  {
    title: 'Hönsyoga på Stugan',
    description: 'Yoga på altanen med hönsen runt. Sveriges svar på goat yoga — unikt och helt ostört.',
    href: '/tjanster/honsyoga',
    tag: 'Unikt',
  },
  {
    title: 'Mini Retreat',
    description: 'En dag i Dalarnas natur — yoga, vandring eller löpning, fika och mindfulness. Skräddarsytt för din grupp.',
    href: '/tjanster/mini-retreat',
    tag: 'Populärt',
  },
  {
    title: 'Möhippa Yoga',
    description: 'Privat yoga för möhippan — perfekt om ni hyr stuga i Dalarna. På altanen, i skogen eller vid sjön.',
    href: '/tjanster/mohippa-yoga',
  },
  {
    title: 'Företagsyoga Dalarna',
    description: 'Yoga för team och konferenser i Falun, Borlänge och övriga Dalarna. Alla nivåer.',
    href: '/tjanster/foretagsyoga',
  },
  {
    title: 'Bröllopsyoga',
    description: 'Yoga som en del av bröllopsveckan — morgonen av, kvällen innan eller dagen efter.',
    href: '/tjanster/brollopsyoga',
  },
  {
    title: 'Adventure Paket',
    description: 'Vandring, trail run, SUP och yoga i Dalarnas natur. Halvdag, heldag eller weekend.',
    href: '/tjanster/adventure-paket',
  },
  {
    title: 'Yoga för Turister',
    description: 'English-speaking yoga in a forest cabin — for travellers visiting Dalarna.',
    href: '/tjanster/yoga-dalarna-turister',
    tag: 'English',
  },
];

const tagStyles: Record<string, string> = {
  'Nytt': 'bg-dalashala-sage/20 text-dalashala-earth border border-dalashala-sage/50',
  'Populärt': 'bg-dalashala-olive/15 text-dalashala-olive border border-dalashala-olive/40',
  'Unikt': 'bg-dalashala-earth text-dalashala-cream border border-dalashala-earth',
  'English': 'bg-dalashala-meadow/25 text-dalashala-earth border border-dalashala-meadow/50',
};

const ServiceCard = ({ title, description, href, tag }: ServiceCard) => (
  <Link
    to={href}
    className="group relative flex flex-col justify-between bg-white rounded-2xl p-5 pt-6 border border-dalashala-meadow/25 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
  >
    {/* Top accent bar */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dalashala-sage via-dalashala-meadow to-dalashala-olive opacity-80 group-hover:opacity-100 transition-opacity" />
    {/* Soft corner glow */}
    <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-dalashala-sage/10 blur-2xl pointer-events-none" />

    <div className="relative">
      {tag && (
        <span className={`tag-pill mb-3 ${tagStyles[tag] || tagStyles['Nytt']}`}>
          {tag}
        </span>
      )}
      <h3 className="font-cinzel text-sm md:text-base text-dalashala-earth mb-2 group-hover:text-dalashala-olive transition-colors leading-snug font-bold">
        {title}
      </h3>
      <p className="font-eb-garamond text-sm text-dalashala-earthSoft leading-relaxed">
        {description}
      </p>
    </div>
    <span className="relative mt-4 inline-flex items-center gap-1 font-montserrat text-[11px] text-dalashala-olive uppercase tracking-widest group-hover:text-dalashala-earth transition-colors">
      Läs mer
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </span>
  </Link>
);

const LocationHeader = ({
  label,
  accent,
}: {
  label: string;
  accent: 'sage' | 'olive';
}) => (
  <div className="flex items-center gap-4 mb-8">
    <div className={`flex items-center gap-2 ${accent === 'sage' ? 'text-dalashala-sage' : 'text-dalashala-olive'}`}>
      <span className={`w-2 h-2 rounded-full ${accent === 'sage' ? 'bg-dalashala-sage' : 'bg-dalashala-olive'}`} />
      <span className={`w-8 h-px ${accent === 'sage' ? 'bg-dalashala-sage' : 'bg-dalashala-olive'}`} />
    </div>
    <h3 className="font-cinzel text-xs md:text-sm uppercase tracking-[0.25em] text-dalashala-earth font-bold whitespace-nowrap">
      {label}
    </h3>
    <div className="flex-1 h-px bg-gradient-to-r from-dalashala-meadow/50 to-transparent" />
  </div>
);

const Services = () => {
  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden bg-cream-soft-b">
      {/* Decorative background elements */}
      <div className="blob-sage w-[500px] h-[500px] top-20 -right-40 opacity-40" aria-hidden="true" />
      <div className="blob-meadow w-[400px] h-[400px] bottom-40 -left-32 opacity-40" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section header */}
        <div className="mb-14 text-center md:text-left max-w-2xl md:mx-0 mx-auto">
          <span className="inline-block tag-pill bg-dalashala-olive/15 text-dalashala-olive border border-dalashala-olive/30 mb-3">
            Yoga med Camilla
          </span>
          <h2 className="font-cinzel-decorative text-3xl md:text-4xl lg:text-5xl text-dalashala-earth font-bold mb-3 leading-tight">
            Vad jag erbjuder
          </h2>
          <p className="font-eb-garamond text-base md:text-lg text-dalashala-earthSoft leading-relaxed">
            Baserad i Dalarna och Stockholm — privat yoga för grupper och individer,
            i stadsmiljö eller mitt i skogen.
          </p>
        </div>

        {/* Stockholm */}
        <div id="stockholm" className="mb-16 scroll-mt-20">
          <LocationHeader label="Stockholm" accent="sage" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {stockholmServices.map((s) => (
              <ServiceCard key={s.href + s.title} {...s} />
            ))}
          </div>
        </div>

        {/* Dalarna */}
        <div id="dalarna" className="mb-14 scroll-mt-20">
          <LocationHeader label="Dalarna" accent="olive" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {dalarnaServices.map((s) => (
              <ServiceCard key={s.href + s.title} {...s} />
            ))}
          </div>
        </div>

        {/* Bottom CTA — elevated card with sage wash */}
        <div className="relative mt-16 rounded-3xl overflow-hidden shadow-card border border-dalashala-meadow/30">
          <div className="absolute inset-0 bg-gradient-to-br from-dalashala-sage/30 via-dalashala-meadow/20 to-dalashala-creamLight" />
          <div className="relative p-8 md:p-12 text-center">
            <h3 className="font-cinzel-decorative text-xl md:text-2xl text-dalashala-earth mb-3 font-bold">
              Ser du inte det du letar efter?
            </h3>
            <p className="font-eb-garamond text-base md:text-lg text-dalashala-earthSoft mb-6 max-w-xl mx-auto">
              Hör av dig — jag skräddarsyr gärna något för just er grupp, er dag och er plats.
            </p>
            <a
              href="#contact"
              className="inline-block font-montserrat text-sm bg-earth-gradient text-dalashala-cream px-8 py-3 rounded-full shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
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
