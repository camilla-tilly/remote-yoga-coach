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
    description: 'Yoga på brädan på Sicklasjön. Perfekt för team, möhippa eller en sommardag.',
    href: '/tjanster/sup-yoga',
  },
  {
    title: 'Trail Run + Yoga',
    description: 'SUP yoga på Sicklasjön följt av guidat trail run i Nacka Naturreservat. En aktiv heldagsupplevelse.',
    href: '/tjanster/trail-run-yoga',
  },
  {
    title: 'Privatlektioner',
    description: 'En-till-en yoga i ditt tempo — anpassad efter dina mål. I Stockholm eller online.',
    href: '/tjanster/privatlektioner',
  },
];

const dalarnaServices: ServiceCard[] = [
  {
    title: 'Hönsyoga på Stugan',
    description: 'Yoga på altanen med hönsen runt. Sveriges svar på goat yoga — unikt och helt ostört.',
    href: '/tjanster/honsyoga',
    tag: 'Unikt',
  },
  {
    title: 'Mini Retreat',
    description: 'En hel dag i Dalarnas natur — yoga, promenad och fika. En riktig paus, långt från stan.',
    href: '/tjanster/mini-retreat',
    tag: 'Populärt',
  },
  {
    title: 'Trail Run + Yoga',
    description: 'Guidat löppass i Dalarnas skogar + återhämtningsyoga. För dig som vill röra dig och landa.',
    href: '/tjanster/trail-run-yoga',
  },
  {
    title: 'Bröllopsyoga',
    description: 'Yoga som en del av bröllopsveckan — morgonen av, kvällen innan eller dagen efter.',
    href: '/tjanster/brollopsyoga',
  },
];

const ServiceCard = ({ title, description, href, tag }: ServiceCard) => (
  <Link
    to={href}
    className="group flex flex-col justify-between bg-white rounded-2xl p-5 border border-dalashala-tan/20 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
  >
    <div>
      {tag && (
        <span
          className="inline-block mb-2 text-xs font-montserrat uppercase tracking-wide px-2.5 py-0.5 rounded-full"
          style={{ backgroundColor: '#864927', color: '#f9dec6' }}
        >
          {tag}
        </span>
      )}
      <h3 className="font-cinzel text-sm md:text-base text-dalashala-darkBrown mb-2 group-hover:text-dalashala-mediumBrown transition-colors leading-snug">
        {title}
      </h3>
      <p className="font-eb-garamond text-sm text-dalashala-mediumBrown leading-relaxed">
        {description}
      </p>
    </div>
    <span className="mt-4 inline-block font-montserrat text-xs text-dalashala-darkBrown uppercase tracking-widest group-hover:underline">
      Läs mer →
    </span>
  </Link>
);

const Services = () => {
  return (
    <section id="services" className="relative py-12 md:py-16 bg-dalashala-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* Section header */}
          <div className="mb-10">
            <span className="text-xs uppercase tracking-wider font-montserrat text-dalashala-mediumBrown">
              Yoga med Camilla
            </span>
            <h2 className="font-cinzel text-2xl md:text-3xl text-dalashala-darkBrown mt-1 mb-2">
              Vad jag erbjuder
            </h2>
            <p className="font-eb-garamond text-base text-dalashala-mediumBrown max-w-xl">
              Baserad i Dalarna och Stockholm — privat yoga för grupper och individer.
            </p>
          </div>

          {/* Stockholm */}
          <div id="stockholm" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-cinzel text-sm uppercase tracking-widest text-dalashala-mediumBrown whitespace-nowrap">
                Stockholm
              </h3>
              <div className="flex-1 h-px bg-dalashala-tan/40" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {stockholmServices.map((s) => (
                <ServiceCard key={s.href + s.title} {...s} />
              ))}
            </div>
          </div>

          {/* Dalarna */}
          <div id="dalarna" className="mb-10 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-cinzel text-sm uppercase tracking-widest text-dalashala-mediumBrown whitespace-nowrap">
                Dalarna
              </h3>
              <div className="flex-1 h-px bg-dalashala-tan/40" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dalarnaServices.map((s) => (
                <ServiceCard key={s.href + s.title} {...s} />
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-4">
            <p className="font-eb-garamond text-lg md:text-xl text-dalashala-mediumBrown mb-4">
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
    </section>
  );
};

export default Services;
