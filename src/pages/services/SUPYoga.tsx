import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'SUP Yoga Klasser', href: '/tjanster/sup-yoga-klasser' },
  { label: 'Privata Event', href: '/tjanster/privata-event' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'Mini Retreat & Upplevelser', href: '/tjanster/mini-retreat' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Privat SUP Yoga & Bastu Stockholm – möhippa, team och födelsedag",
  "description": "Privat SUP yoga och bastu i Stockholm vid Sickla Strand. Yoga-ledda paket för möhippa, team och födelsedag. I samarbete med Smashing Balance som står för plats och utrustning.",
  "provider": { "@type": "LocalBusiness", "name": "Yoga with Camilla", "url": "https://yogawithcamilla.se" },
  "areaServed": ["Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/sup-yoga",
  "offers": {
    "@type": "Offer",
    "name": "Privat SUP Yoga & Bastu",
    "priceCurrency": "SEK",
    "price": "500",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "500",
      "priceCurrency": "SEK",
      "description": "Från 500 kr per person, beroende på upplägg och gruppstorlek"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Privata SUP Yoga event Stockholm",
    "itemListElement": [
      { "@type": "Offer", "name": "Möhippa: SUP yoga + bastu", "description": "Yoga på paddleboard följt av bastu vid sjön, anpassat för möhippa" },
      { "@type": "Offer", "name": "Team event: SUP yoga + bastu", "description": "Sommaravslutning, kickoff eller teambuilding för upp till 10 personer (fler på förfrågan)" },
      { "@type": "Offer", "name": "Födelsedag: SUP yoga + bastu", "description": "Privat födelsedagsupplevelse på vattnet med bastu" }
    ]
  }
};

const SUPYoga = () => (
  <ServicePageLayout
    seoTitle="Privat SUP Yoga & Bastu Stockholm – Möhippa, Team, Födelsedag | Yoga with Camilla"
    seoDescription="Privata SUP yoga-event i Stockholm vid Sickla Strand. Yoga på paddleboard plus bastu, för möhippa, team och födelsedag. Från 500 kr per person."
    canonical="https://yogawithcamilla.se/tjanster/sup-yoga"
    ogImage="https://yogawithcamilla.se/images/sup-yoga-group.jpg"
    breadcrumbLabel="Privat SUP Yoga Stockholm"
    heroTag="Privata Event · SUP Yoga Stockholm"
    heroHeading="Privat SUP Yoga & Bastu i Stockholm"
    heroSubtitle="Yoga på paddleboard vid Sickla Strand, följt av bastu vid sjön. Skräddarsydda paket för möhippa, team och födelsedag. Du bokar direkt med mig."
    heroImage="/images/sup-yoga-group.jpg"
    heroImageAlt="Grupp som gör yoga på paddleboards på Sicklasjön, Stockholm"
    heroImageAspect="aspect-[4/5]"
    heroImagePosition="center center"
    gallery={[
      { src: "/images/sup-yoga-paddling.jpg", alt: "Paddla ut till flytbryggan vid Sickla Strand" },
      { src: "/images/sup-yoga-floating-dock.jpg", alt: "Flytbrygga på Sicklasjön i morgonljus" },
    ]}
    introHeading="Privat SUP yoga, ledd av mig"
    introParagraphs={[
      "Det här är yoga-paketet för er grupp. Vi börjar med en mjuk vinyasa eller lugn yin på brädan, justerat efter gruppens nivå, och avslutar med bastu vid vattnet. Ingen behöver kunna yoga eller paddla sedan tidigare.",
      "Klasserna hålls vid Sickla Strand, vid Elton's Café och Uthyrning, i samarbete med Smashing Balance som står för plats, brädor, paddel, flytväst och bastun. Jag står för yogan, planeringen och dagen i sin helhet.",
      "Bokning sker direkt via mig. Jag tar gruppens önskemål, datum och format, och skickar offert samma dag."
    ]}
    highlights={[
      {
        heading: "Möhippa på vattnet",
        text: "Yoga, skratt, någon faller i, alla värms upp i bastun efteråt. Det mest populära paketet för möhippor i Stockholm sommartid."
      },
      {
        heading: "Team & sommaravslutning",
        text: "Inte tävlingsbetonat, alla är på samma nivå. Funkar för kickoff, teambuilding eller en mjukare sommaravslutning."
      },
      {
        heading: "Födelsedag eller vänner",
        text: "En lugn, lite annorlunda födelsedag, eller bara en eftermiddag med vänner. Yoga + bastu + tid att hänga vid sjön."
      },
      {
        heading: "Vinyasa eller yin",
        text: "Ni väljer stil. Vinyasa om ni vill röra på er, yin om ni vill landa och slappna av. Båda anpassas efter gruppen."
      },
      {
        heading: "Bastu ingår",
        text: "Vedeldad eller eldriven bastu vid vattenkanten ingår i alla privata event. Värm upp, hoppa i sjön, repetera."
      },
      {
        heading: "Plats & utrustning",
        text: "Sickla Strand vid Elton's Café och Uthyrning, 10 till 15 minuter från city. Brädor, paddel, flytväst och dry bag finns på plats via Smashing Balance."
      }
    ]}
    pricing={[
      { label: "Från", price: "500 kr / person", note: "Beroende på upplägg, gruppstorlek och tillval" },
      { label: "Gruppstorlek", price: "3 till 10 personer", note: "Större grupper på förfrågan" }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Plats: Sickla Strand, vid Elton's Café och Uthyrning, Nacka. Cirka 10 till 15 minuter från centrala Stockholm med tunnelbana eller buss. T-bana Sickla eller Hammarby Sjöstad. Det finns parkering på plats.",
      "Säsong: privata event går att boka från slutet av april till september. Datum utanför säsongen kan funka om vädret tillåter, fråga.",
      "Längd: oftast 2 till 4 timmar inklusive yoga, bastu och tid att hänga vid sjön. Vi anpassar efter er.",
      "Utrustning: brädor, paddel, flytväst och dry bag tillhandahålls av Smashing Balance på plats. Omklädningsrum finns. Ta med badkläder, handduk och träningskläder.",
      "Undervisning på engelska, men jag pratar svenska om ni föredrar det. Ingen erfarenhet krävs, varken yoga eller SUP.",
      "Bokning: mejla hello.yogawithcamilla@gmail.com med datum, gruppstorlek och önskat format. Ni får offert samma dag."
    ]}
    ctaHeading="Boka ert privata SUP yoga-event"
    ctaText="Möhippa, team, födelsedag eller en eftermiddag med vänner. Mejla mig med datum och gruppstorlek så får ni offert samma dag. Letar du efter öppna veckoklasser istället? Se SUP Yoga Klasser."
    bookingHref="mailto:hello.yogawithcamilla@gmail.com"
    bookingLabel="Mejla för offert"
    termsHref="/tjanster/sup-yoga/villkor"
    structuredData={structuredData}
    relatedServices={relatedServices}
    faq={[
      {
        question: "Hur bokar vi ett privat event?",
        answer: "Mejla hello.yogawithcamilla@gmail.com med datum, gruppstorlek och vad ni vill göra (möhippa, team, födelsedag, vänner). Ni får offert samma dag. Bokning bekräftas när depositionen är betald."
      },
      {
        question: "Vad kostar det?",
        answer: "Från 500 kr per person. Slutpriset beror på gruppstorlek, längd på passet och om ni vill ha tillval som extra bastutid. Ni får alltid en konkret offert innan ni bokar."
      },
      {
        question: "Hur stor grupp kan vi vara?",
        answer: "Vanligtvis 3 till 10 personer. Större grupper går ofta att lösa, fråga när ni mejlar så ser vi vad som funkar med plats och utrustning."
      },
      {
        question: "Ingår bastu?",
        answer: "Ja, bastu vid sjön ingår i alla privata event. Vedeldad eller eldriven beroende på dag. Perfekt avslutning: värm upp, hoppa i sjön, sitt och prata."
      },
      {
        question: "Behöver vi kunna yoga eller SUP?",
        answer: "Nej, ingen erfarenhet krävs. Brädorna är breda och stabila. Vi börjar alltid med en kort säkerhetsgenomgång och introduktion på land."
      },
      {
        question: "Vad är skillnaden mot de öppna veckoklasserna?",
        answer: "Privata event är hela upplevelsen för er grupp, ledd av mig, bokad direkt med mig. Veckoklasserna är öppna för allmänheten, du bokar enskilda platser via Smashing Balance. Se sidan SUP Yoga Klasser om du letar efter det."
      },
      {
        question: "Vem är Smashing Balance?",
        answer: "Vår partner som driver platsen, brädorna, bastun och säkerhetsutrustningen vid Sickla Strand. Jag står för yogan och hela upplevelsen, de står för det som gör vattnet möjligt."
      },
      {
        question: "Vad gör vi om vädret är dåligt?",
        answer: "Vid hård vind (över 6 m/s), åska eller för kallt vatten flyttar vi till backup-datum. Du blir kontaktad senast kvällen innan om vi behöver flytta."
      }
    ]}
    englishKeywords={{
      heading: "Private SUP Yoga & Sauna Events in Stockholm",
      text: "Private SUP yoga and sauna events at Sickla Strand, Stockholm. Yoga on paddleboards on the lake, followed by a lakeside sauna. Tailored packages for hen parties, team days, birthdays and friend groups. From 500 kr per person, groups of 3 to 10 (larger groups on request). All equipment included via our partner Smashing Balance. No experience needed, taught in English. Email hello.yogawithcamilla@gmail.com with your dates and group size for a same-day quote. Looking for open weekly classes instead? See the SUP Yoga Klasser page."
    }}
  />
);

export default SUPYoga;
