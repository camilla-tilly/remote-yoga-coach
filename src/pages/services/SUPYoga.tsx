import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Privata Event', href: '/tjanster/privata-event' },
  { label: 'Företagsyoga & Workshops', href: '/tjanster/foretagsyoga' },
  { label: 'Mini Retreat & Upplevelser', href: '/tjanster/mini-retreat' },
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SUP Yoga Stockholm – Paddleboard Yoga Sickla Strand",
  "description": "SUP yoga i Stockholm — vinyasa och yin yoga på paddleboard vid Sickla Strand. Öppna klasser och privata event. I samarbete med Smashing Balance.",
  "provider": { "@type": "LocalBusiness", "name": "Yoga with Camilla", "url": "https://yogawithcamilla.se" },
  "areaServed": ["Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/sup-yoga",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SUP Yoga Stockholm klasser",
    "itemListElement": [
      { "@type": "Offer", "name": "Vinyasa SUP Yoga Stockholm", "description": "Aktivt flöde på paddleboard" },
      { "@type": "Offer", "name": "Yin SUP Yoga Stockholm", "description": "Lugn yoga på paddleboard" },
      { "@type": "Offer", "name": "Privat SUP Yoga event", "description": "Möhippa, födelsedag eller företagsevent" }
    ]
  }
};

const SUPYoga = () => (
  <ServicePageLayout
    seoTitle="SUP Yoga & Bastu Stockholm – Paddleboard Yoga Sickla Strand | Yoga with Camilla"
    seoDescription="SUP yoga och vedeldad bastu i Stockholm vid Sickla Strand — yoga på paddleboard + bastu vid sjön. Öppna klasser och privata event för möhippa, team och grupper."
    canonical="https://yogawithcamilla.se/tjanster/sup-yoga"
    ogImage="https://yogawithcamilla.se/images/sup-yoga-sickla.png"
    breadcrumbLabel="SUP Yoga Stockholm"
    heroTag="SUP Yoga · Stockholm"
    heroHeading="SUP Yoga & Bastu Stockholm"
    heroSubtitle="Yoga på paddleboard vid Sickla Strand — vedeldad bastu ingår efter passet. Öppna klasser och privata event. I samarbete med Smashing Balance."
    heroImage="/images/sup-yoga-sickla.png"
    heroImageAlt="SUP yoga på Sicklasjön, Stockholm"
    heroImageAspect="aspect-[2/3]"
    heroImagePosition="center 40%"
    introHeading="SUP yoga vid Sickla Strand"
    introParagraphs={[
      "SUP yoga är yoga på ett brett, stabilt paddleboard på öppet vatten. Klasser hålls vid Sickla Strand i Stockholm, i samarbete med Smashing Balance som sköter all utrustning och säkerhet.",
      "Ingen erfarenhet krävs — varken yoga eller SUP. Varje klass börjar med säkerhetsgenomgång och intro på land. Undervisning på engelska. Vedeldad bastu ingår efter passet.",
      "Gratis första veckan: alla drop-in-klasser vid Sickla Strand är gratis 21–27 april 2026."
    ]}
    highlights={[
      {
        heading: "Vinyasa SUP Yoga",
        text: "Aktivt flöde på brädan. Rörelserna är anpassade för vattnet — du bygger styrka och balans samtidigt."
      },
      {
        heading: "Yin SUP Yoga",
        text: "Lugna, hållna positioner med vattnet i rörelse under dig. Bra för återhämtning."
      },
      {
        heading: "Vedeldad bastu vid sjön",
        text: "Vedeldad bastu ingår efter varje pass. Perfekt avslutning — värm upp, hoppa i sjön, repetera. Bastun ligger direkt vid vattnet vid Sickla Strand."
      },
      {
        heading: "Öppna klasser",
        text: "Boka en plats i en schemalagd klass maj–september. Schema och bokning via Smashing Balance."
      },
      {
        heading: "Privata event",
        text: "Boka hela upplevelsen för er grupp — SUP yoga + bastu för möhippa, födelsedag, sommaravslutning, teambuilding eller en dag med vänner. Ni väljer datum och tid."
      }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Plats: Sickla Strand, Stockholm — nära Sickla station. Gratis parkering.",
      "Säsong: Öppna klasser maj–september. Privata event kan arrangeras utanför säsongen om vädret tillåter.",
      "Utrustning: Paddleboards, paddlar, flytvästar och dry bags tillhandahålls av Smashing Balance. Omklädningsrum finns på plats.",
      "Undervisning på engelska. Ingen erfarenhet krävs.",
      "Öppna klasser: boka via Smashing Balance. Privata event: maila hello.yogawithcamilla@gmail.com med datum, gruppstorlek och önskat format."
    ]}
    ctaHeading="Boka SUP Yoga & Bastu i Stockholm"
    ctaText="Öppna klasser april–september 2026. Boka via Smashing Balance — all utrustning och bastu ingår. Vill du boka ett privat event (möhippa, sommaravslutning, team eller födelsedag)? Mejla mig eller se mer på Smashing Balance."
    bookingHref="https://smashingbalance.se/collections/sup-yoga"
    bookingLabel="Boka SUP Yoga →"
    termsHref="/tjanster/sup-yoga/villkor"
    structuredData={structuredData}
    relatedServices={relatedServices}
    faq={[
      {
        question: "Ingår bastu?",
        answer: "Ja, vedeldad bastu vid sjön ingår efter varje SUP yoga-pass — både öppna klasser och privata event."
      },
      {
        question: "Kan vi boka SUP yoga + bastu som privat event?",
        answer: "Ja. SUP yoga + bastu är perfekt som möhippa, sommaravslutning, teambuilding eller födelsedag. Mejla hello.yogawithcamilla@gmail.com med datum och gruppstorlek, eller läs mer om privata event på smashingbalance.se/pages/privata-event-i-stockholm-sup-yoga-bastu-vid-sjon."
      },
      {
        question: "Behöver man kunna yoga eller SUP?",
        answer: "Nej, ingen erfarenhet krävs. Brädorna är breda och stabila. Varje klass börjar med säkerhetsgenomgång och intro på land."
      },
      {
        question: "Hur stor grupp kan boka privat event?",
        answer: "Upp till 20 personer för privata event. Alla får egna brädor, paddlar och flytvästar. Bastu ingår."
      }
    ]}
    englishKeywords={{
      heading: "SUP Yoga & Sauna in Stockholm — Paddleboard Yoga at Sickla Strand",
      text: "SUP yoga and wood-fired sauna at Sickla Strand, Stockholm. Yoga on paddleboards on the lake, followed by a lakeside sauna session. Open classes May–September, private events for hen parties, birthdays, team days and corporate groups. All equipment included. No experience needed, teaching in English. In partnership with Smashing Balance. Email hello.yogawithcamilla@gmail.com or visit smashingbalance.se/pages/privata-event-i-stockholm-sup-yoga-bastu-vid-sjon for private event bookings."
    }}
  />
);

export default SUPYoga;
