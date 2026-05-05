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
      "Jag har höns. De rör sig fritt på och runt altanen, ibland nära, ibland inte. Under yogaklassen finns de där, pickandes runt mattorna, ibland nyfikna, ibland helt oberörda.",
      "Hönsyoga är en vanlig yogaklass utomhus på altanen, med hönsens närvaro som naturligt inslag. Samma upplägg som alla mina klasser: rörelse, andning, närvaro. Skillnaden är att ni gör det med hönsen som sällskap.",
      "Klassen är populär som möhippa, födelsedag eller kompisgäng som vill ha något annorlunda att göra ihop i Dalarna. Vill ni göra hönsyoga till en del av en större dag, med fika, vandring eller bastu, så fixar jag det också. Se Privata Event för helhetsupplägg."
    ]}
    highlights={[
      {
        heading: "Utomhus på altanen",
        text: "Klassen hålls på altanen i Dalarna. Plats för upp till 10 deltagare. Yogamattor tillhandahålls."
      },
      {
        heading: "Alla nivåer",
        text: "Ingen yogaerfarenhet krävs. Klassen anpassas efter gruppen."
      },
      {
        heading: "Möhippa, födelsedag, kompisgäng",
        text: "Den vanligaste anledningen folk bokar. Privat klass för gruppen, ofta som en del av en helg eller dag i Dalarna."
      },
      {
        heading: "Privat bokning",
        text: "Alla klasser är privatbokade. Du bokar klassen för din grupp. Klassen hålls på engelska."
      }
    ]}
    pricing={[
      { label: 'Privat klass (upp till 10 pers, 60 min)', price: 'kontakta för pris', note: 'Yogamattor ingår.' },
      { label: 'Hönsyoga som möhippa eller födelsedag', price: 'kontakta för offert', note: 'Klassen plus fika, vandring, bastu eller annat. Se Privata Event för fler upplägg.' },
      { label: 'Kombinera med mini-retreat', price: 'kontakta för offert', note: 'Lägg till hönsyoga som en del av ett längre retreatprogram.' },
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Hönsyoga hålls utomhus på altanen i Dalarna, väderförhållanden tillåtet. Säsongen är maj till september.",
      "Hönsen rör sig fritt runt altanen under klassen. De interagerar inte aktivt med deltagarna, men de är där, pickar runt, klamrar lite, gör hönsen.",
      "Skicka en förfrågan till hello.yogawithcamilla@gmail.com med önskat datum och antal deltagare, så återkommer jag med tillgänglighet och offert."
    ]}
    ctaHeading="Boka Hönsyoga"
    ctaText="Hör av dig med datum och antal deltagare så fixar jag en klass."
    structuredData={structuredData}
    relatedServices={relatedServices}
    faq={[
      {
        question: "Funkar hönsyoga som möhippa eller födelsedag?",
        answer: "Ja, det är den vanligaste anledningen folk bokar. Privat klass för hela gruppen på altanen, ofta som en del av en längre dag eller helg i Dalarna. Vill ni kombinera med fika, vandring, bastu eller annat, se sidan för Privata Event."
      },
      {
        question: "Behöver man kunna yoga?",
        answer: "Nej. De flesta som kommer är nybörjare. Klassen anpassas efter gruppen, och det finns inga extrema eller imponerande poser på menyn. Det är medvetet."
      },
      {
        question: "Vad gör hönsen under klassen?",
        answer: "Höns. De pickar runt, klamrar lite, går förbi mattorna, ibland sätter sig en bredvid någon. De interagerar inte aktivt, men de finns där som en naturlig del av platsen."
      },
      {
        question: "När på året går det att boka?",
        answer: "Maj till september. Hönsyoga hålls utomhus på altanen, och vi kör så länge vädret tillåter. Övrig tid kan vi hålla en vanlig privat klass inomhus, men då utan hönsen."
      },
      {
        question: "Hur många kan delta?",
        answer: "Upp till 10 personer fungerar smidigast på altanen. Mejla mig med er gruppstorlek så återkommer jag."
      },
      {
        question: "Hur långt i förväg behöver vi boka?",
        answer: "Helst minst 2 veckor. Under högsäsong (maj till september) rekommenderar jag 4 veckor för att säkra datumet."
      }
    ]}
    englishKeywords={{
      heading: "Chicken Yoga in Dalarna, Sweden: If You've Heard of Goat Yoga, You'll Love This",
      body: "Yoga on the cabin deck with free-roaming chickens, a calm, grounded outdoor yoga experience in Dalarna, Sweden. If you've heard of goat yoga and liked the idea, this is a quieter, more Nordic take, set on the deck of a genuine Swedish forest cabin. Classes are led in English by a 500-hour certified yoga teacher. Suitable for all levels. Private bookings only, up to 10 people. Available May through September.",
      ctaText: "Book chicken yoga in Dalarna",
      ctaHref: "mailto:hello.yogawithcamilla@gmail.com"
    }}
  />
);

export default HonsYoga;
