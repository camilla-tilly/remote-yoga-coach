import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Möhippa Yoga', href: '/tjanster/mohippa-yoga' },
  { label: 'Mini Yoga Retreat', href: '/tjanster/mini-retreat' },
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bröllopsyoga i Dalarna & Stockholm",
  "description": "Yoga som bröllopaktivitet i Dalarna eller Stockholm. Välmående yoga för brudpar och gäster – en lugn och minnesvärd del av er bröllopsvecka.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna", "Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/brollopsyoga"
};

const BrollopYoga = () => (
  <ServicePageLayout
    seoTitle="Bröllopsyoga i Dalarna & Stockholm | Yoga med Camilla"
    seoDescription="Yoga som bröllopaktivitet för er och era gäster i Dalarna eller Stockholm. En lugn, inkluderande och minnesvärd aktivitet för bröllopsveckan."
    canonical="https://yogawithcamilla.se/tjanster/brollopsyoga"
    heroTag="Bröllop & Wellness"
    heroHeading="Yoga för Bröllop"
    heroSubtitle="Yoga som en naturlig del av bröllopsveckan — morgonen av, kvällen innan, eller dagen efter. Jag tar med all utrustning och kommer till er, i Dalarna eller Stockholm."
    heroImage="/lovable-uploads/54e28b90-5dc5-42be-ac91-2bcbcc7e5c58.png"
    heroImageAlt="Lugn yoga i naturen – perfekt som bröllopsaktivitet"
    introHeading="Yoga som en del av bröllopsveckan"
    introParagraphs={[
      "Yoga passar in när som helst i bröllopsveckan — morgonen av, kvällen innan eller dagen efter. Inkluderande för alla åldrar och nivåer, inga förkunskaper krävs.",
      "Jag tar med all utrustning och kommer till er — stuga i Dalarna, slott i Sörmland eller innergård i Stockholm."
    ]}
    highlights={[
      {
        heading: "Morgonen av bröllopsdagen",
        text: "Börja dagen med lugn och närvaro. En 45–60 min yogaklass bara för er två, eller med era närmaste — innan det stora kalaset drar igång."
      },
      {
        heading: "Kvällen eller dagen innan",
        text: "Samla gästerna för ett gemensamt välmående-moment innan ceremonin. Yoga är ett enkelt sätt att få hela gruppen att mötas, andas och slappna av tillsammans."
      },
      {
        heading: "Dagen efter",
        text: "En mjuk, återhämtande klass morgonen efter festen. Rörelse och andning som hjälper kroppen att landa — uppskattad av gäster oavsett hur sena de var."
      },
      {
        heading: "Camilla kommer till er",
        text: "Jag reser till er bröllopslokation i Dalarna eller Stockholm med all utrustning. Hör av er med datum, plats och antal gäster så sätter jag ihop något."
      }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "All utrustning – mattor, block och bolster – ingår. Ni behöver bara ha på er bekväma kläder. Klassens längd är flexibel, vanligtvis 45–90 minuter beroende på vad som passar bäst i ert schema.",
      "Boka gärna 4–8 veckor i förväg för bröllopsdatum, då dessa dagar bokas upp tidigt. Maila hello.yogawithcamilla@gmail.com med datum, plats och antal deltagare för en offert."
    ]}
    ctaHeading="Lägg till yoga i er bröllopsvecka"
    ctaText="Maila mig med ert datum, plats och antal gäster så sätter jag ihop något vackert."
    structuredData={structuredData}
    relatedServices={relatedServices}
  />
);

export default BrollopYoga;
