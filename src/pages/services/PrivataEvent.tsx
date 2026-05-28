import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Hönsyoga', href: '/tjanster/honsyoga' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Privata Event & Yoga Retreat: Möhippa, Födelsedag & Bröllopsyoga i Stockholm",
  "description": "Privata event och yoga retreats i Stockholm: möhippa, födelsedag, bröllopsyoga, kompisgäng, familjesammankomster och halvdag eller heldag yoga retreat med vandring och fika.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/privata-event"
};

const PrivataEvent = () => (
  <ServicePageLayout
    seoTitle="Privata Event & Yoga Retreat | Möhippa, Bröllopsyoga & Mini Retreat Stockholm | Yoga med Camilla"
    seoDescription="Privata yogaevent i Stockholm. Möhippa, födelsedag, bröllopsyoga, halvdag och heldag yoga retreat. Mejla för offert."
    canonical="https://yogawithcamilla.se/tjanster/privata-event"
    ogImage="https://yogawithcamilla.se/images/IMG_5788.JPG"
    breadcrumbLabel="Privata Event & Yoga Retreat"
    heroTag="Privata Event & Yoga Retreat i Stockholm"
    heroHeading="Privata event och yoga retreat"
    heroSubtitle="Möhippa, födelsedag, bröllopshelg eller en halvdag ute i förorten. En riktig paus från allt annat, för er grupp."
    heroImage="/images/IMG_5788.JPG"
    heroImageAlt="Yoga utomhus, privat event med Camilla"
    heroImagePosition="center 35%"
    introHeading="Något annat än vardagen"
    introParagraphs={[
      "Letar du efter något annorlunda? Jag sätter ihop privata event och yoga retreats i Stockholm. Möhippor, födelsedagar, bröllopshelger, kompisgäng och familjesammankomster, samt halvdag och heldag retreats för en mindre grupp.",
      "Jag kommer till er lägenhet, hyrd lokal, eller en lämplig plats utomhus i Stockholm med all utrustning. Vi kan ha klassen hemma, på ett hotell, i en hyrd salslokal, eller en park eller naturområde i eller omkring Stockholm.",
      "Ni bygger upplägget, jag formar schemat. Berätta vad ni vill ha med (yoga, vandring, löpning för de som gillar det, fika, lunch, bastu, eller något annat), så sätter jag ihop ett förslag som passar er grupp och dag. Det kan vara en stilla morgonklass, en längre halvdag med flera bitar, eller en dag med rörelse och vila. Inget färdigt paket, inga måsten. Ingen yogaerfarenhet krävs, och klassen hålls på engelska.",
      "Jag är flexibel med datum och tider. Mejla mig så hittar vi något som passar."
    ]}
    highlights={[
      {
        heading: "Yoga hemma hos er eller på en plats ni väljer",
        text: "I er lägenhet, ett hotell, en hyrd salslokal, eller en park i Stockholm. Jag tar med mattor, block och allt som behövs. Flexibelt och enkelt."
      },
      {
        heading: "Halvdag eller heldag yoga retreat",
        text: "Yoga, vandring eller rörelse, mindfulness, fika och paus. Halvdag (ca 3 till 4 timmar) eller hel dag, efter vad som passar er grupp. För grupper upp till 10."
      },
      {
        heading: "Jag kommer till er",
        text: "Ni väljer platsen och tidpunkten i Stockholm. Jag är flexibel och tar med allt som behövs. Dörr-till-dörr enkelt."
      },
      {
        heading: "Formas efter gruppen",
        text: "Lugnt och återhämtande, eller mer rörelse och flöde. Jag frågar innan, och anpassar klassen efter nivå, energi och vad ni är sugna på den dagen."
      }
    ]}
    pricing={[
      {
        label: "Yogaklass för privatgrupp",
        price: "från 2 500 kr",
        note: "60 till 90 min. All utrustning ingår."
      },
      {
        label: "Halvdag yoga retreat",
        price: "från 4 000 kr",
        note: "Yoga, vandring, mindfulness och fika. Ca 3 till 4 timmar."
      },
      {
        label: "Heldag yoga retreat",
        price: "från 6 500 kr",
        note: "Längre yogapass, vandring, mindfulness, fika och lunch."
      },
      {
        label: "Event med flera bitar",
        price: "kontakta för offert",
        note: "Skräddarsytt upplägg för möhippa, bröllopshelg eller större dag."
      }
    ]}
    detailsHeading="Perfekt för"
    detailsParagraphs={[
      "Möhippa som passar både aktiva gäng och de som hellre tar det lugnt. Bröllopshelger på landet i Dalarna, en lugn stund för brudparet och gästerna morgonen av bröllopsdagen, kvällen innan eller dagen efter. Födelsedagsfirande, ett annorlunda sätt att fira för den som har allt.",
      "Kompisgäng som bara vill hitta på något ihop och behöver en anledning. Familjesammankomster och återträffar, något stillsamt för grupper som inte ses ofta.",
      "Yoga retreat för en mindre grupp. En halvdag eller heldag ute i skogen i Dalarna, med yoga, andning, vandring eller trail run, fika och tid att bara vara. Vi är ca 3,5 timmar från Stockholm med bil, eller 4 timmar med tåg och buss. Ni behöver inte ta en hel vecka ledigt för att få retreat-känslan.",
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
        answer: "Ja, möhippa-yoga är en av de vanligaste bokningarna. Privat klass för hela gruppen hemma hos er, i en hyrd lokal, eller utomhus i Stockholm. Kan kombineras med SUP yoga vid Sickla sjö. Ingen yogaerfarenhet krävs."
      },
      {
        question: "Kan ni ha yoga på bröllopet?",
        answer: "Ja. Bröllopsyoga passar morgonen av bröllopsdagen, kvällen innan eller dagen efter. En lugn stund för brudparet och gästerna, 45 till 90 minuter. Jag kommer till er bröllopslokation i Stockholm med all utrustning."
      },
      {
        question: "Yoga som födelsedagsaktivitet?",
        answer: "Absolut. Yoga funkar bra som födelsedagsaktivitet för milestone-födelsedagar, vuxenfester eller barnkalas från 10 år. 45 till 90 minuter, i hemmet, trädgården, parken eller på hotellet. Jag tar med all utrustning."
      },
      {
        question: "Hur stor grupp kan boka yoga retreat?",
        answer: "Yoga retreats bokas för grupper, max 10 personer. Programmet anpassas efter er och innehåller yoga, andning, vandring, fika och tid för vila."
      },
      {
        question: "Vad ingår på en halvdag eller heldag retreat?",
        answer: "Halvdag (ca 3 till 4 timmar) innehåller yoga, vandring, mindfulness och fika. Heldag innehåller längre yogapass, vandring, mindfulness, fika och lunch. Specialkost ordnas på förhand."
      },
      {
        question: "När på året går det att boka?",
        answer: "Året runt. Utomhusaktiviteter funkar bäst från maj till september. Övrig tid kan vi hålla klassen inomhus eller välja andra aktiviteter. Event fungerar året runt i Stockholm."
      },
      {
        question: "Var håller ni eventen och retreats?",
        answer: "I Stockholm: hemma hos er, i en hyrd yogasal, på er plats eller utomhus vid en lämplig plats (park, naturreservat). Jag kommer med allt som behövs."
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
      heading: "Private Events & Yoga Retreats in Stockholm: Bachelorette, Birthday & Wedding Yoga",
      text: "Looking for a different kind of bachelorette party, birthday celebration or yoga retreat in Stockholm? I put together private events for groups in Stockholm: bachelorette parties, birthdays, friend gatherings, family reunions and wedding events. I offer wedding yoga as part of wedding weekends (the morning of, the evening before, or the day after). I also run half-day and full-day yoga retreats combining yoga, walking, mindfulness, fika and lunch, for small groups up to 10. The setup is flexible and tailored to what you actually want from the day. No yoga experience needed, all equipment provided, and teaching is in English. Email me at hello.yogawithcamilla@gmail.com with your preferred dates, group size, location and any requests, and I'll come back with a tailored plan."
    }}
  />
);

export default PrivataEvent;
