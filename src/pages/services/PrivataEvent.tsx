import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Möhippa Yoga', href: '/tjanster/mohippa-yoga' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'Födelsedag Yoga', href: '/tjanster/fodelsedag-yoga' },
  { label: 'Mini Retreat', href: '/tjanster/mini-retreat' },
  { label: 'Adventure Paket', href: '/tjanster/adventure-paket' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Privata event i Stockholm & Dalarna",
  "description": "Privata event med yoga i Stockholm och Dalarna — möhippa, sommaravslutning, teambuilding, födelsedagsfirande och kickoffs. Privat klass anpassad för gruppen, ingen erfarenhet krävs.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Stockholm", "Dalarna"],
  "url": "https://yogawithcamilla.se/tjanster/privata-event"
};

const PrivataEvent = () => (
  <ServicePageLayout
    seoTitle="Privata event Stockholm & Dalarna — Möhippa, Teambuilding, Sommaravslutning | Yoga med Camilla"
    seoDescription="Annorlunda möhippa, sommaravslutning eller teamevent? Boka en privat yogaupplevelse i Stockholm eller Dalarna. Flexibla datum — mejla för offert."
    canonical="https://yogawithcamilla.se/tjanster/privata-event"
    ogImage="https://yogawithcamilla.se/images/IMG_6793.JPG"
    breadcrumbLabel="Privata Event"
    heroTag="Privata Event — Stockholm & Dalarna"
    heroHeading="Privata event med yoga"
    heroSubtitle="Annorlunda möhippa, sommaravslutning med jobbet eller en oförglömlig dag för gruppen. En riktig paus från allt annat — lugn, rörelse och gott sällskap."
    heroImage="/images/IMG_6793.JPG"
    heroImageAlt="Yoga utomhus — privat event med Camilla"
    heroImagePosition="center 35%"
    introHeading="Något annat än konferensrummet"
    introParagraphs={[
      "Letar ni efter en annorlunda möhippa, en sommaravslutning med jobbet som faktiskt lämnar avtryck, eller bara en dag ihop som inte är en vanlig middag? Jag sätter ihop privata event för grupper — möhippor, kickoffs, teamdagar, födelsedagar, AW-gäng och kompisgrupper — i Dalarna eller Stockholm.",
      "Upplägget är flexibelt. Det kan vara ett stilla morgonpass, en längre halvdag med flera bitar, eller en hel dag ute i skogen. Jag formar det runt vad ni faktiskt vill ha ut av dagen — inte runt en färdig mall. Ingen yogaerfarenhet krävs, och klassen hålls på svenska eller engelska.",
      "Jag är flexibel med datum och tider. Mejla mig så hittar vi något som passar er grupp."
    ]}
    highlights={[
      {
        heading: "På stugan i Dalarna",
        text: "Yoga på altanen vid stugan, omgiven av skog, tystnad och hönsen i bakgrunden. Plats för upp till 10 personer. Jag fixar mattor och all utrustning."
      },
      {
        heading: "Jag kommer till er",
        text: "Bor ni i en stuga i Dalarna, på ett hotell i Stockholm eller har ni ett kontor där ni vill möta upp? Jag reser med mattor, block och allt som behövs."
      },
      {
        heading: "Formas efter gruppen",
        text: "Lugnt och återhämtande, eller mer rörelse och flöde — jag frågar innan, och anpassar passet efter nivå, energi och vad ni är sugna på den dagen."
      },
      {
        heading: "Kombinera gärna",
        text: "Yogaklassen kan vara hela eventet, eller en del av en större dag. Kombinera med vandring, trail run, SUP yoga, bastu eller fika — jag hjälper er sätta ihop upplägget."
      }
    ]}
    pricing={[
      {
        label: "Yogapass — privatgrupp",
        price: "kontakta för pris",
        note: "60–90 min. All utrustning ingår."
      },
      {
        label: "Halvdag i Dalarna",
        price: "kontakta för offert",
        note: "Yoga + fika + valfri aktivitet i naturen."
      },
      {
        label: "Heldag / event med flera bitar",
        price: "kontakta för offert",
        note: "Skräddarsytt upplägg för er grupp."
      },
      {
        label: "Stockholm",
        price: "kontakta för offert",
        note: "Salsuthyrning eller utomhusplats kan ordnas. Resa ingår i offerten."
      }
    ]}
    detailsHeading="Perfekt för"
    detailsParagraphs={[
      "Möhippa & svensexa — en annorlunda möhippa-aktivitet som passar både aktiva gäng och de som hellre tar det lugnt. Sommaravslutning med jobbet — en naturnära paus innan alla skingras för semestern. Teambuilding & företagsevent — en teamdag som faktiskt får gruppen att landa tillsammans, utan att kännas som en övning. Födelsedagsfirande — ett annorlunda sätt att fira, särskilt för den som har allt.",
      "Kickoff, kick-out och AW-grupper — för jobbkompisar som vill göra något utöver det vanliga. Kompisgäng — som bara vill hitta på något ihop och behöver en anledning. Familjesammankomster och återträffar — något stillsamt för grupper som inte ses ofta.",
      "Det är en av de där aktiviteterna som funkar för de flesta. Man behöver inte vara vältränad, man behöver inte ha gjort yoga förut, och det finns inga extrema eller imponerande poser på menyn — det är en medveten hållning hos mig. Det handlar mer om att landa ihop, röra sig lite, och få en paus från allt annat."
    ]}
    ctaHeading="Boka ert privata event"
    ctaText="Mejla mig med önskade datum, gruppstorlek, plats och eventuella önskemål så återkommer jag med ett upplägg som passar just er."
    structuredData={structuredData}
    relatedServices={relatedServices}
    faq={[
      {
        question: "Behöver man kunna yoga för att delta?",
        answer: "Nej. De allra flesta som kommer är nybörjare. Jag börjar från grunden och anpassar passet efter gruppen. Inga förkunskaper krävs, och det finns inga krav på att man ska vara vältränad."
      },
      {
        question: "Hur många kan delta?",
        answer: "Jag tar privatbokningar för mindre och mellanstora grupper — upp till 10 personer fungerar smidigast. Mejla mig med er gruppstorlek så återkommer jag med vad som funkar."
      },
      {
        question: "När på året går det att boka?",
        answer: "Året runt. Utomhusyoga i Dalarna funkar bäst från maj till september — på altanen eller i skogen. Övrig tid håller vi klassen inomhus. I Stockholm fungerar det året runt i hyrda salar eller på er plats."
      },
      {
        question: "Var håller ni eventen?",
        answer: "I Dalarna: på altanen vid stugan, i er hyrda stuga, på ett hotell eller utomhus i skogen. I Stockholm: i en hyrd yogasal, på ert kontor, på ert hotell eller utomhus vid en lämplig plats. Jag kommer till er med allt som behövs."
      },
      {
        question: "Vad behöver vi ta med oss?",
        answer: "Kläder ni kan röra er i, och kanske en vattenflaska. Jag står för mattor, block och övrig utrustning. Om vi är utomhus och vädret är lite ostadigt, ta gärna med en extra tröja."
      },
      {
        question: "Kan vi kombinera yoga med något annat?",
        answer: "Ja, ofta blir det bäst så. Yoga + vandring, yoga + trail run, yoga + fika, eller yoga + SUP i samarbete med Smashing Balance i Stockholm. Berätta vad ni tänker er så formar jag dagen runt det."
      },
      {
        question: "Hur lång tid i förväg behöver vi boka?",
        answer: "Helst minst 2 veckor i förväg. Under högsäsong (maj–september) rekommenderar jag 4 veckor för att säkra datumet."
      }
    ]}
    englishKeywords={{
      heading: "Private Events in Sweden — Stockholm & Dalarna",
      text: "Looking for a different kind of bachelorette party, a summer send-off with work that people will actually remember, or a unique group activity in Sweden? I put together private yoga events for groups — hen parties, team days, kick-offs, birthdays, AW groups and friend gatherings — in Dalarna or Stockholm. The setup is flexible: a calm morning session, a longer half-day with a few pieces, or a full day out in the forest. I shape it around what you actually want from the day. No yoga experience needed, all equipment provided, and teaching is in English. Email me at hello.yogawithcamilla@gmail.com with your preferred dates, group size, location and any requests, and I'll come back with a tailored plan."
    }}
  />
);

export default PrivataEvent;
