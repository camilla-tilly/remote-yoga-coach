import { Link } from 'react-router-dom';

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  tag?: string;
};

const stockholmServices: ServiceCard[] = [
  {
    title: 'SUP Yoga Stockholm',
    description: 'Privat SUP yoga på Sicklasjön — perfekt som sommardag för team, möhippa eller vänner. Vinyasa och yin på brädan.',
    href: '/tjanster/sup-yoga',
    tag: 'Populärt',
  },
  {
    title: 'Möhippa Yoga',
    description: 'Boka yoga som möhippa-aktivitet i Stockholm — på SUP eller på land. Skräddarsytt för din grupp.',
    href: '/tjanster/mohippa-yoga',
    tag: 'Populärt',
  },
  {
    title: 'Företags- & Konferensyoga',
    description: 'Yoga för team, konferenser och arbetsdagar i Stockholm. Passar alla nivåer — ingen erfarenhet krävs.',
    href: '/tjanster/foretagsyoga',
  },
  {
    title: 'Privatlektioner',
    description: 'Personliga yoga-sessioner en-till-en i Stockholm. Anpassade efter dina mål, ditt schema, ditt tempo.',
    href: '/tjanster/privatlektioner',
  },
  {
    title: 'Yoga Workshops',
    description: 'Tematiska workshops i Stockholm — andning, yin, rörlighet eller meditation. Öppna klasser och privata bokningar.',
    href: '/tjanster/yoga-workshop',
  },
];

const dalarnaServices: ServiceCard[] = [
  {
    title: 'Möhippa Yoga på Stugan',
    description: 'Yoga på altanen i Dalarna — en möhippa ingen glömmer. Kabinyoga omgiven av skog, himmel och höns.',
    href: '/tjanster/mohippa-yoga',
    tag: 'Populärt',
  },
  {
    title: 'Hönsyoga på Stugan',
    description: 'Yoga med höns på vår altan i Dalarna. Som goat yoga — fast med höns. En unik, lugn upplevelse i naturen.',
    href: '/tjanster/honsyoga',
    tag: 'Nytt',
  },
  {
    title: 'Trail Run + Yoga',
    description: 'Springa + yoga i Dalarnas skogar. Halvdag eller heldag — guidat löppass följt av en återhämtande yoga-session.',
    href: '/tjanster/trail-run-yoga',
    tag: 'Nytt',
  },
  {
    title: 'Mini Retreat Dalarna',
    description: 'En dag i skogen — utomhusyoga, promenad, fika och stillhet. 2,5 timmar med tåg från Stockholm.',
    href: '/tjanster/mini-retreat',
  },
  {
    title: 'Bröllopsyoga',
    description: 'Yoga på bröllopsdagen eller som aktivitet för brudföljetet i Dalarna. Lugnt, vackert, oförglömligt.',
    href: '/tjanster/brollopsyoga',
  },
  {
    title: 'Privatlektioner Dalarna',
    description: 'En-till-en yoga på stugan eller hos dig — i Dalarna och omnejd.',
    href: '/tjanster/privatlektioner',
  },
  {
    title: 'Äventyrpaket',
    description: 'En hel dag i Dalarnas natur — yoga, vandring, meditation och friluftsliv. För grupper som vill uppleva mer.',
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
          <div className="mb-12">
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
          <div className="mb-10">
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
