import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Möhippa Yoga', href: '/tjanster/mohippa-yoga' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'Trail Run + Yoga', href: '/tjanster/trail-run-yoga' },
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
    seoTitle="SUP Yoga Stockholm – Paddleboard Yoga Sickla Strand | Yoga with Camilla"
    seoDescription="SUP yoga i Stockholm vid Sickla Strand — vinyasa och yin yoga på paddleboard. Öppna klasser maj–september och privata event. I samarbete med Smashing Balance."
    canonical="https://yogawithcamilla.se/tjanster/sup-yoga"
    heroTag="SUP Yoga · Stockholm"
    heroHeading="SUP Yoga Stockholm"
    heroSubtitle="Yoga på paddleboard vid Sickla Strand. Öppna klasser i vinyasa och yin, plus privata event. I samarbete med Smashing Balance."
    heroImage="/images/sup-yoga-sickla.png"
    heroImageAlt="SUP yoga på Sicklasjön, Stockholm"
    heroImagePosition="center 45%"
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
        heading: "Öppna klasser",
        text: "Boka en plats i en schemalagd klass maj–september. Schema och bokning via Smashing Balance."
      },
      {
        heading: "Privata event",
        text: "Boka hela klassen för er grupp — möhippa, födelsedag, företagsevent eller en dag på vattnet med vänner. Ni väljer format, datum och tid."
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
    ctaHeading="Boka SUP Yoga i Stockholm"
    ctaText="Öppna klasser April–September 2026 på Sicklasjön. Boka via Smashing Balance — all utrustning ingår. Vill du boka ett privat event (möhippa, team eller födelsedag)? Hör av dig så löser vi det."
    bookingHref="https://smashingbalance.se/collections/sup-yoga"
    bookingLabel="Boka SUP Yoga →"
    termsHref="/tjanster/sup-yoga/villkor"
    structuredData={structuredData}
    relatedServices={relatedServices}
  />
);

export default SUPYoga;
