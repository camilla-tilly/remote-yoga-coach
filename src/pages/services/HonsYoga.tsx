import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Mini Retreat & Upplevelser', href: '/tjanster/mini-retreat' },
  { label: 'Privata Event', href: '/tjanster/privata-event' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hönsyoga i Dalarna",
  "description": "Yoga på altanen med höns fritt strövande runt. En lugn och jordnära yogaupplevelse i Dalarnas natur, unik i Sverige.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna"],
  "url": "https://yogawithcamilla.se/tjanster/honsyoga"
};

const HonsYoga = () => (
  <ServicePageLayout
    seoTitle="Hönsyoga i Dalarna | Yoga med Höns | Yoga med Camilla"
    seoDescription="Yoga på altanen med höns fritt strövande runt i Dalarna. Om du har hört talas om goat yoga, så är det här den svenska, lugnare varianten. Privat bokning för upp till 10 personer, maj till september."
    canonical="https://yogawithcamilla.se/tjanster/honsyoga"
    ogImage="https://yogawithcamilla.se/images/IMG_3765.jpeg"
    breadcrumbLabel="Hönsyoga"
    heroTag="Hönsyoga · Dalarna"
    heroHeading="Hönsyoga i Dalarna"
    heroSubtitle="Yoga på altanen med höns fritt strövande runt. En lugn, jordnära upplevelse i Dalarnas natur."
    heroImage="/images/IMG_3765.jpeg"
    heroImageAlt="Höns på yogamattan, hönsyoga i Dalarna"
    heroImagePosition="center bottom"
    introHeading="Yoga med sällskap"
    introParagraphs={[
      "Jag har höns. De rör sig fritt på och runt altanen, ibland nära, ibland inte. Under yogapasset finns de där i bakgrunden.",
      "Hönsyoga är ett vanligt yogapass utomhus på altanen, med hönsens närvaro som naturligt inslag. Samma upplägg som alla mina klasser: rörelse, andning, närvaro."
    ]}
    highlights={[
      {
        heading: "Utomhus på altanen",
        text: "Klassen hålls på altanen vid stugan i Dalarna. Plats för upp till 10 deltagare. Yogamattor tillhandahålls."
      },
      {
        heading: "Alla nivåer",
        text: "Ingen yogaerfarenhet krävs. Klassen anpassas efter gruppen."
      },
      {
        heading: "Grupper & sällskap",
        text: "Passar bra för vänner, möhippa, födelsedag eller kollegor som vill ha en annorlunda upplevelse i Dalarna."
      },
      {
        heading: "Privat bokning",
        text: "Alla klasser är privatbokade. Du bokar passet för din grupp. Klassen hålls på engelska."
      }
    ]}
    pricing={[
      { label: 'Privat klass (upp till 10 pers, 60 min)', price: 'kontakta för pris', note: 'Yogamattor ingår.' },
      { label: 'Kombinera med mini-retreat', price: 'kontakta för offert', note: 'Lägg till hönsyoga som en del av ett längre retreatprogram.' },
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Hönsyoga hålls vid stugan i Dalarna, utomhus på altanen, väderförhållanden tillåtet. Säsongen är maj–september.",
      "Hönsen rör sig fritt runt altanen under passet. De interagerar inte med deltagarna, men de är där.",
      "Skicka en förfrågan till hello.yogawithcamilla@gmail.com med önskat datum och antal deltagare, så återkommer jag med tillgänglighet och offert."
    ]}
    ctaHeading="Boka Hönsyoga"
    ctaText="Hör av dig med datum och antal deltagare så fixar jag ett pass."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Chicken Yoga in Dalarna, Sweden: If You've Heard of Goat Yoga, You'll Love This",
      body: "Yoga on the cabin deck with free-roaming chickens, a calm, grounded outdoor yoga experience in Dalarna, Sweden. If you've heard of goat yoga and liked the idea, this is a quieter, more Nordic take, set on the deck of a genuine Swedish forest cabin. Classes are led in English by a 500-hour certified yoga teacher. Suitable for all levels. Private bookings only, up to 10 people. Available May through September.",
      ctaText: "Book chicken yoga in Dalarna",
      ctaHref: "mailto:hello.yogawithcamilla@gmail.com"
    }}
  />
);

export default HonsYoga;
