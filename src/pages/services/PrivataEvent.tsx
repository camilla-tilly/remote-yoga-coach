import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Hönsyoga', href: '/tjanster/honsyoga' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Privata Event & Yoga Retreat: Möhippa, Födelsedag, Bröllopsyoga & Mini Retreat i Dalarna och Stockholm",
  "description": "Privata event och yoga retreats i Dalarna och Stockholm: möhippa, födelsedag, bröllopsyoga, kompisgäng, familjesammankomster och halvdag eller heldag yoga retreat med vandring, trail run, fika och lunch i Dalarnas natur.",
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
    seoTitle="Privata Event & Yoga Retreat | Möhippa, Bröllopsyoga & Mini Retreat Dalarna | Yoga med Camilla"
    seoDescription="Privata yogaevent i Stockholm och Dalarna, och yoga retreat i Dalarnas natur. Möhippa, födelsedag, bröllopsyoga, halvdag och heldag retreat med vandring och trail run. Mejla för offert."
    canonical="https://yogawithcamilla.se/tjanster/privata-event"
    ogImage="https://yogawithcamilla.se/images/IMG_5788.JPG"
    breadcrumbLabel="Privata Event & Yoga Retreat"
    heroTag="Privata Event & Yoga Retreat i Stockholm & Dalarna"
    heroHeading="Privata event och yoga retreat"
    heroSubtitle="Möhippa, födelsedag, bröllopshelg eller en heldag ute i skogen. En riktig paus från allt annat, för en grupp eller bara dig själv."
    heroImage="/images/IMG_5788.JPG"
    heroImageAlt="Yoga utomhus, privat event med Camilla"
    heroImagePosition="center 35%"
    introHeading="Något annat än vardagen"
    introParagraphs={[
      "Letar du efter något annorlunda? Jag sätter ihop privata event och yoga retreats i Dalarna och Stockholm. Möhippor, födelsedagar, bröllopshelger på landet, kompisgäng och familjesammankomster, samt halvdag och heldag retreats för dig själv eller en mindre grupp.",
      "I Dalarna hålls eventen på altanen vid skogsstugan, med hönsen pickande runt mattorna under klassen. Det är ovanligt, och det är liksom det som är poängen. Det blir alltid den biten alla pratar om i gruppchatten efteråt.",
      "Upplägget är flexibelt. Det kan vara en stilla morgonklass, en längre halvdag med flera bitar, eller en hel dag ute i skogen med yoga, vandring eller trail run, fika och lunch. Jag formar det runt vad ni faktiskt vill ha ut av dagen, inte runt en färdig mall. Ingen yogaerfarenhet krävs, och klassen hålls på engelska.",
      "Jag är flexibel med datum och tider. Mejla mig så hittar vi något som passar."
    ]}
    highlights={[
      {
        heading: "Yoga med hönsen i Dalarna",
        text: "Yoga på altanen mitt i skogen, med hönsen pickande runt mattorna. Jordnära och ovanligt, svårt att hitta någon annanstans. Plats för upp till 10 personer, mattor och all utrustning ingår."
      },
      {
        heading: "Halvdag eller heldag i naturen",
        text: "Yoga retreat i Dalarna: yoga, vandring eller trail run, mindfulness, fika och lunch. Halvdag (ca 3 till 4 timmar) eller hel dag, med basläger på altanen och naturen runt omkring. Solo eller grupp upp till 10."
      },
      {
        heading: "Jag kommer till er",
        text: "Ni väljer platsen, inomhus eller utomhus, i Dalarna eller Stockholm. Jag är flexibel och reser med mattor, block och allt som behövs."
      },
      {
        heading: "Formas efter gruppen",
        text: "Lugnt och återhämtande, eller mer rörelse och flöde. Jag frågar innan, och anpassar klassen efter nivå, energi och vad ni är sugna på den dagen."
      }
    ]}
    pricing={[
      {
        label: "Yogaklass för privatgrupp",
        price: "kontakta för pris",
        note: "60 till 90 min. All utrustning ingår."
      },
      {
        label: "Halvdag yoga retreat i Dalarna",
        price: "kontakta för offert",
        note: "Yoga, vandring eller trail run, mindfulness och fika. Ca 3 till 4 timmar."
      },
      {
        label: "Heldag yoga retreat i Dalarna",
        price: "kontakta för offert",
        note: "Längre yogapass, vandring eller trail run, mindfulness, fika och lunch."
      },
      {
        label: "Event med flera bitar",
        price: "kontakta för offert",
        note: "Skräddarsytt upplägg för möhippa, bröllopshelg eller större dag."
      },
      {
        label: "Stockholm",
        price: "kontakta för offert",
        note: "Salsuthyrning eller utomhusplats kan ordnas. Resa ingår i offerten."
      }
    ]}
    detailsHeading="Perfekt för"
    detailsParagraphs={[
      "Möhippa som passar både aktiva gäng och de som hellre tar det lugnt. Bröllopshelger på landet i Dalarna, en lugn stund för brudparet och gästerna morgonen av bröllopsdagen, kvällen innan eller dagen efter. Födelsedagsfirande, ett annorlunda sätt att fira för den som har allt.",
      "Kompisgäng som bara vill hitta på något ihop och behöver en anledning. Familjesammankomster och återträffar, något stillsamt för grupper som inte ses ofta.",
      "Yoga retreat för dig själv eller en mindre grupp. En halvdag eller heldag ute i skogen i Dalarna, med yoga, andning, vandring eller trail run, fika och tid att bara vara. Du behöver inte ta en hel vecka ledigt för att få retreat-känslan.",
      "Det är en av de där aktiviteterna som funkar för de flesta. Man behöver inte vara vältränad, inte ha gjort yoga förut, och det finns inga extrema eller imponerande poser på menyn. Det är medvetet. Det handlar om att landa, röra sig lite, och få en paus från allt annat."
    ]}
    ctaHeading="Boka ditt event eller din retreat"
    ctaText="Mejla mig med önskade datum, gruppstorlek, plats och eventuella önskemål så återkommer jag med ett upplägg som passar."
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
        answer: "Absolut. Yoga funkar bra som födelsedagsaktivitet för milestone-födelsedagar, vuxenfester eller barnkalas från 10 år. 45 till 90 minuter, i hemmet, trädgården, parken eller på hotellet. Jag tar med all utrustning."
      },
      {
        question: "Kan jag boka yoga retreat solo eller bara i grupp?",
        answer: "Båda funkar. Halvdag och heldag retreats i Dalarna kan bokas solo eller för en mindre grupp upp till 10. Programmet anpassas efter dig eller gruppen, och innehåller yoga, andning, vandring eller trail run, fika och tid i naturen."
      },
      {
        question: "Vad ingår på en halvdag eller heldag retreat?",
        answer: "Halvdag (ca 3 till 4 timmar) innehåller yoga, vandring eller trail run, mindfulness och fika. Heldag innehåller längre yogapass, vandring eller trail run, mindfulness, fika och lunch. Specialkost ordnas på förhand."
      },
      {
        question: "När på året går det att boka?",
        answer: "Året runt. Utomhusyoga och retreats i Dalarna funkar bäst från maj till september, på altanen eller i skogen. Övrig tid håller vi klassen inomhus. I Stockholm fungerar event året runt i hyrda salar eller på er plats."
      },
      {
        question: "Var håller ni eventen och retreats?",
        answer: "I Dalarna: basläger på altanen i skogen, vandring och trail run i närliggande skogsmark, eller i er hyrda lokal eller på ett hotell. I Stockholm: i en hyrd yogasal, på er plats eller utomhus vid en lämplig plats. Jag kommer med allt som behövs."
      },
      {
        question: "Vad behöver vi ta med oss?",
        answer: "Kläder ni kan röra er i, och en vattenflaska. För retreat med vandring eller trail run, ta med löparskor eller vandringsskor och en extra tröja. Yogamattor, block och övrig utrustning står jag för."
      },
      {
        question: "Kan vi kombinera yoga med något annat?",
        answer: "Ja, ofta blir det bäst så. Yoga och vandring, yoga och trail run, yoga och fika, yoga och bastu, eller yoga och SUP i samarbete med Smashing Balance i Stockholm. Berätta vad ni tänker er så formar jag dagen runt det."
      },
      {
        question: "Hur lång tid i förväg behöver vi boka?",
        answer: "Helst minst 2 veckor i förväg. Under högsäsong (maj till september) rekommenderar jag 4 veckor för att säkra datumet. För bröllopsdatum rekommenderar jag 4 till 8 veckor."
      }
    ]}
    englishKeywords={{
      heading: "Private Events & Yoga Retreats in Sweden: Bachelorette, Birthday & Wedding Yoga in Stockholm & Dalarna, Mini Yoga Retreats in Dalarna",
      text: "Looking for a different kind of bachelorette party, birthday celebration or yoga retreat in Sweden? I put together private events for groups in Dalarna and Stockholm: bachelorette parties, birthdays, friend gatherings and family reunions. For countryside wedding weekends in Dalarna I also offer wedding yoga as part of the weekend's activities (the morning of, the evening before, or the day after). I run half-day and full-day yoga retreats in Dalarna too, combining yoga, hiking, trail running, fika and lunch, suitable for solo retreats or small groups up to 10. The setup is flexible and tailored to what you actually want from the day. No yoga experience needed, all equipment provided, and teaching is in English. Email me at hello.yogawithcamilla@gmail.com with your preferred dates, group size, location and any requests, and I'll come back with a tailored plan."
    }}
  />
);

export default PrivataEvent;
