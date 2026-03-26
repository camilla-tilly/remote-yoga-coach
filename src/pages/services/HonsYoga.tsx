import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Mini Retreat Dalarna', href: '/tjanster/mini-retreat' },
  { label: 'Trail Run + Yoga', href: '/tjanster/trail-run-yoga' },
  { label: 'Äventyrpaket', href: '/tjanster/adventure-paket' },
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hönsyoga i Dalarna",
  "description": "Yoga på altanen med höns fritt strövande runt. En lugn och jordnära yogaupplevelse i Dalarnas natur — unik i Sverige.",
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
    seoTitle="Hönsyoga i Dalarna — Yoga med Höns | Yoga med Camilla"
    seoDescription="Yoga på altanen med höns fritt strövande runt — en unik och jordnära yogaupplevelse i Dalarna. Boka hönsyoga för dig, din grupp eller som ett alternativ till goat yoga i Sverige."
    canonical="https://yogawithcamilla.se/tjanster/honsyoga"
    heroTag="Hönsyoga · Dalarna"
    heroHeading="Hönsyoga i Dalarna"
    heroSubtitle="Yoga på altanen — med höns fritt strövande runt. En lugn, jordnära upplevelse i Dalarnas natur."
    heroImage="/lovable-uploads/54e28b90-5dc5-42be-ac91-2bcbcc7e5c58.png"
    heroImageAlt="Yoga på altan i Dalarna med höns"
    introHeading="Yoga med sällskap"
    introParagraphs={[
      "Vi har höns. De lever sina egna liv och rör sig fritt på och runt altanen. Under ett yogapass är de ibland nära, ibland inte — men de finns där, i bakgrunden, som en påminnelse om att ingenting behöver vara perfekt för att fungera.",
      "Hönsyoga är ett vanligt yogapass på altanen utomhus, med hönsens närvaro som ett naturligt inslag. Klassen leds av mig, Camilla — 500-timmars certifierad yogalärare — och följer samma upplägg som alla mina klasser: rörelse, andning, närvaro.",
      "Det är yoga i Dalarna som det faktiskt ser ut. Inget mer, inget mindre."
    ]}
    highlights={[
      {
        heading: "Utomhus på altanen",
        text: "Klassen hålls på altanen vid stugan i Dalarna. Plats för upp till 6 deltagare. Yogamattor tillhandahålls."
      },
      {
        heading: "Alla nivåer välkomna",
        text: "Ingen yogaerfarenhet krävs. Klassen anpassas efter gruppen — nybörjare och erfarna yogis kan delta tillsammans."
      },
      {
        heading: "För grupper och sällskap",
        text: "Hönsyoga passar utmärkt som en aktivitet för vänner, möhippa, födelsedag, kollegor eller ett litet sällskap som vill ha en annorlunda upplevelse i Dalarna."
      },
      {
        heading: "Privat bokning",
        text: "Alla klasser är privatbokade — du bokar passet för dig och din grupp. Inga okända deltagare. Klassen hålls på engelska."
      }
    ]}
    pricing={[
      { label: 'Privat klass (2–6 pers, 60 min)', price: 'kontakta för pris', note: 'Yogamattor ingår.' },
      { label: 'Kombinera med mini-retreat', price: 'kontakta för offert', note: 'Lägg till hönsyoga som en del av ett längre retreatprogram.' },
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Hönsyoga hålls vid stugan i Dalarna — utomhus på altanen, väderförhållanden tillåtet. Säsongen är maj–september.",
      "Hönsen rör sig fritt runt altanen under passet. De interagerar inte med deltagarna, men de är där.",
      "Maila hello.yogawithcamilla@gmail.com med önskat datum och antal deltagare."
    ]}
    ctaHeading="Boka Hönsyoga"
    ctaText="Hör av dig med datum och antal deltagare — så fixar vi ett pass."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Chicken Yoga in Dalarna, Sweden — A Swedish Alternative to Goat Yoga",
      body: "Yoga on the cabin deck with free-roaming chickens — a calm, grounded outdoor yoga experience in Dalarna, Sweden. If you've been searching for goat yoga in Sweden, this is Sweden's own version: quieter, more Nordic, and set in a genuine forest cabin. Classes are led in English by a 500-hour certified yoga teacher. Suitable for all levels. Private bookings only, up to 6 people. Available May–September.",
      ctaText: "Book chicken yoga in Dalarna",
      ctaHref: "mailto:hello.yogawithcamilla@gmail.com"
    }}
  />
);

export default HonsYoga;
