import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Mini Retreat', href: '/tjanster/mini-retreat' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
  { label: 'Möhippa Yoga', href: '/tjanster/mohippa-yoga' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Äventyrpaket Dalarna – Yoga, Vandring, SUP & Mer",
  "description": "Heldag äventyrpaket i Dalarna – kombinera yoga, utomhusmeditation, vandring, löpning och naturupplevelse. Skräddarsydda paket för grupper, möhippa och teambuilding.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna", "Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/adventure-paket"
};

const AdventurePackage = () => (
  <ServicePageLayout
    seoTitle="Äventyrpaket Dalarna – Yoga, Vandring & Naturupplevelse | Yoga med Camilla"
    seoDescription="Heldag äventyrpaket i Dalarna – yoga, vandring, meditation, löpning och naturupplevelse i ett paket. Perfekt för möhippa, teambuilding eller en dag i naturen."
    canonical="https://yogawithcamilla.se/tjanster/adventure-paket"
    heroTag="Äventyr & Wellness"
    heroHeading="Äventyrpaket i Dalarna"
    heroSubtitle="En hel dag i naturen med yoga, vandring, andning och rörelse. Skräddarsydda paket som kombinerar det bästa av utomhusliv och välmående. Dalarna som kontext – naturen som gymmet."
    heroImage="/lovable-uploads/54e28b90-5dc5-42be-ac91-2bcbcc7e5c58.png"
    heroImageAlt="Äventyr i Dalarna – yoga och vandring i skogen"
    introHeading="Mer än yoga – en hel upplevelse"
    introParagraphs={[
      "Vad händer när du kombinerar yoga med vandring, löpning, meditation och tid i naturen? Du får en dag som faktiskt förändrar något. Inte en dag du glömmer nästa vecka – utan en som sitter kvar.",
      "Jag erbjuder skräddarsydda äventyrpaket i Dalarna för grupper på upp till 10 personer. Basen är vår stuga och altan i Dalarna, och skogen, sjöarna och stigarna runt omkring oss är del av programmet.",
      "Paketen är flexibla och byggs utifrån vad er grupp vill ha. Det kan vara en yogadag med morgonvandring och avslutande meditation, eller ett fullt äventyrsupplägg med löpning, yoga och sjöbad. Du väljer – jag bygger."
    ]}
    highlights={[
      {
        heading: "Yoga + Vandring",
        text: "Starta morgonen med yoga på altanen, ta sedan ut i skogen på en guidad vandring. Välj kortare promenad (2–3 km) eller längre tur (5–10 km) beroende på gruppen."
      },
      {
        heading: "Yoga + Löpning",
        text: "För de som vill ha mer fart – börja med en löprunda på skogsstigarna runt stugan och avsluta med yoga och stretching. Anpassad för alla löpnivåer."
      },
      {
        heading: "Meditation & Stillhet",
        text: "Vill ni ha ett mer kontemplativt upplägg? Vi kan inkludera guidad utomhusmeditation, andningsövningar och stillhetspromenader i skogen."
      },
      {
        heading: "SUP i Stockholm",
        text: "Bor ni i Stockholm? Kombinera SUP yoga på Sickla sjö med en yogasession på land för ett stadsnära äventyrpaket. Se SUP Yoga-sidan för detaljer."
      }
    ]}
    detailsHeading="Exempelupplägg – Heldag i Dalarna"
    detailsParagraphs={[
      "08:30 – Ankomst till stugan, kaffe/te i naturen",
      "09:00 – Morgonyoga på altanen (60–75 min)",
      "10:30 – Guidad vandring i skogen (2–5 km)",
      "12:30 – Lunchpaus",
      "14:00 – Andning, pranayama & meditation (45 min)",
      "15:00 – Fri tid vid sjön eller vidare vandring",
      "16:00 – Avslutande yin yoga / restorative (45 min)",
      "",
      "Upplägget kan anpassas helt för er grupp. Kontakta mig för en skräddarsydd offert."
    ]}
    ctaHeading="Bygg ert äventyrpaket"
    ctaText="Berätta vad ni söker – yoga, vandring, löpning, meditation eller en blandning – och jag sätter ihop ett program som passar er perfekt."
    structuredData={structuredData}
    relatedServices={relatedServices}
  />
);

export default AdventurePackage;
