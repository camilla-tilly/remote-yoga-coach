import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'Mini Retreat & Upplevelser', href: '/tjanster/mini-retreat' },
  { label: 'Hönsyoga', href: '/tjanster/honsyoga' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Privata event med yoga: Möhippa & Födelsedag i Stockholm & Dalarna, Bröllopsyoga i Dalarna",
  "description": "Privata event med yoga i Stockholm och Dalarna: möhippa, födelsedag, sommaravslutning, teambuilding och kickoffs. Bröllopsyoga för bröllopshelger i Dalarna. Privat klass anpassad för gruppen, ingen erfarenhet krävs.",
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
    seoTitle="Privata Event | Möhippa & Födelsedag Yoga Stockholm & Dalarna | Bröllopsyoga Dalarna | Yoga med Camilla"
    seoDescription="Annorlunda möhippa eller födelsedag med yoga i Stockholm eller Dalarna, och bröllopsyoga för bröllopshelger i Dalarna. Flexibla datum, mejla för offert."
    canonical="https://yogawithcamilla.se/tjanster/privata-event"
    ogImage="https://yogawithcamilla.se/images/IMG_5788.JPG"
    breadcrumbLabel="Privata Event"
    heroTag="Privata Event i Stockholm & Dalarna"
    heroHeading="Privata event med yoga"
    heroSubtitle="Möhippa, födelsedag, sommaravslutning eller bara en dag ihop. En riktig paus från allt annat: lugn, rörelse och gott sällskap."
    heroImage="/images/IMG_5788.JPG"
    heroImageAlt="Yoga utomhus, privat event med Camilla"
    heroImagePosition="center 35%"
    introHeading="Något annat än konferensrummet"
    introParagraphs={[
      "Letar ni efter något annorlunda för gruppen? Jag sätter ihop privata event i Dalarna eller Stockholm: möhippor, födelsedagar, sommaravslutningar, kickoffs, teamdagar, AW-gäng och kompisgäng som bara vill göra något ihop. För bröllopshelger på landet i Dalarna håller jag även bröllopsyoga som en del av helgens aktiviteter.",
      "I Dalarna hålls eventen på altanen vid skogsstugan, med hönsen pickande runt mattorna under klassen. Det är ovanligt, och det är liksom det som är poängen. Det blir alltid den biten alla pratar om i gruppchatten efteråt.",
      "Upplägget är flexibelt. Det kan vara en stilla morgonklass, en längre halvdag med flera bitar, eller en hel dag ute i skogen. Jag formar det runt vad ni faktiskt vill ha ut av dagen, inte runt en färdig mall. Ingen yogaerfarenhet krävs, och klassen hålls på engelska.",
      "Jag är flexibel med datum och tider. Mejla mig så hittar vi något som passar er grupp."
    ]}
    highlights={[
      {
        heading: "Yoga med hönsen i Dalarna",
        text: "Yoga på altanen mitt i skogen, med hönsen pickande runt mattorna. Jordnära och ovanligt, svårt att hitta någon annanstans. Plats för upp till 10 personer, mattor och all utrustning ingår."
      },
      {
        heading: "Jag kommer till er",
        text: "Ni väljer platsen, inomhus eller utomhus, i Dalarna eller Stockholm. Jag är flexibel och reser med mattor, block och allt som behövs."
      },
      {
        heading: "Formas efter gruppen",
        text: "Lugnt och återhämtande, eller mer rörelse och flöde. Jag frågar innan, och anpassar klassen efter nivå, energi och vad ni är sugna på den dagen."
      },
      {
        heading: "Kombinera gärna",
        text: "Yogaklassen kan vara hela eventet, eller en del av en större dag. Kombinera med vandring, trail run, paddling, bastu eller fika. Jag hjälper er sätta ihop upplägget."
      }
    ]}
    pricing={[
      {
        label: "Yogaklass för privatgrupp",
        price: "kontakta för pris",
        note: "60–90 min. All utrustning ingår."
      },
      {
        label: "Halvdag i Dalarna",
        price: "kontakta för offert",
        note: "Yoga + fika + valfri aktivitet i naturen."
      },
      {
        label: "Event med flera bitar",
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
      "Möhippa som passar både aktiva gäng och de som hellre tar det lugnt. Sommaravslutning med jobbet, en naturnära paus innan alla skingras för semestern. Teambuilding och företagsevent, en teamdag som faktiskt får gruppen att landa ihop utan att kännas som en övning. Födelsedagsfirande, ett annorlunda sätt att fira för den som har allt.",
      "Kickoff, kick-out och AW-grupper för jobbkompisar som vill göra något utöver det vanliga. Kompisgäng som bara vill hitta på något ihop och behöver en anledning. Familjesammankomster och återträffar, något stillsamt för grupper som inte ses ofta.",
      "Det är en av de där aktiviteterna som funkar för de flesta. Man behöver inte vara vältränad, inte ha gjort yoga förut, och det finns inga extrema eller imponerande poser på menyn. Det är medvetet. Det handlar om att landa ihop, röra sig lite, och få en paus från allt annat."
    ]}
    ctaHeading="Boka ert privata event"
    ctaText="Mejla mig med önskade datum, gruppstorlek, plats och eventuella önskemål så återkommer jag med ett upplägg som passar just er."
    structuredData={structuredData}
    relatedServices={relatedServices}
    faq={[
      {
        question: "Behöver man kunna yoga för att delta?",
        answer: "Nej. De allra flesta som kommer är nybörjare. Jag börjar från grunden och anpassar klassen efter gruppen. Inga förkunskaper krävs, och det finns inga krav på att man ska vara vältränad."
      },
      {
        question: "Hur många kan delta?",
        answer: "Jag tar privatbokningar för mindre och mellanstora grupper. Upp till 10 personer fungerar smidigast. Mejla mig med er gruppstorlek så återkommer jag med vad som funkar."
      },
      {
        question: "Funkar det som möhippa-aktivitet?",
        answer: "Ja, möhippa-yoga är en av de vanligaste bokningarna. Privat klass för hela gruppen på altanen i Dalarna, i en hyrd lokal i Stockholm, eller utomhus. Kan kombineras med SUP yoga vid Sickla sjö. Ingen yogaerfarenhet krävs."
      },
      {
        question: "Kan ni ha yoga på bröllopet?",
        answer: "Ja, för bröllopshelger på landet i Dalarna. Bröllopsyoga passar morgonen av bröllopsdagen, kvällen innan eller dagen efter. En lugn stund för brudparet och gästerna, 45 till 90 minuter. Jag kommer till er bröllopslokation i Dalarna med all utrustning."
      },
      {
        question: "Yoga som födelsedagsaktivitet?",
        answer: "Absolut. Yoga funkar bra som födelsedagsaktivitet för milestone-födelsedagar, vuxenfester eller barnkalas från 10 år. 45–90 minuter, i hemmet, trädgården, parken eller på hotellet. Jag tar med all utrustning."
      },
      {
        question: "När på året går det att boka?",
        answer: "Året runt. Utomhusyoga i Dalarna funkar bäst från maj till september, på altanen eller i skogen. Övrig tid håller vi klassen inomhus. I Stockholm fungerar det året runt i hyrda salar eller på er plats."
      },
      {
        question: "Var håller ni eventen?",
        answer: "I Dalarna: på altanen i skogen, i er hyrda lokal, på ett hotell eller utomhus i skogen. I Stockholm: i en hyrd yogasal, på ert kontor, på ert hotell eller utomhus vid en lämplig plats. Jag kommer till er med allt som behövs."
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
        answer: "Helst minst 2 veckor i förväg. Under högsäsong (maj–september) rekommenderar jag 4 veckor för att säkra datumet. För bröllopsdatum rekommenderar jag 4–8 veckor."
      }
    ]}
    englishKeywords={{
      heading: "Private Events in Sweden: Bachelorette & Birthday Yoga in Stockholm & Dalarna, Wedding Yoga in Dalarna",
      text: "Looking for a different kind of bachelorette party, birthday celebration, or team event in Sweden? I put together private yoga events for groups in Dalarna and Stockholm: bachelorette parties, birthdays, kick-offs, summer send-offs and friend gatherings. For countryside wedding weekends in Dalarna, I also offer wedding yoga as part of the weekend's activities (the morning of, the evening before, or the day after). The setup is flexible: a calm morning session, a longer half-day with a few pieces, or a full day out in the forest. No yoga experience needed, all equipment provided, and teaching is in English. Email me at hello.yogawithcamilla@gmail.com with your preferred dates, group size, location and any requests, and I'll come back with a tailored plan."
    }}
  />
);

export default PrivataEvent;
