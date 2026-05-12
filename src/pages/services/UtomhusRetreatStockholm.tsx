import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'SUP Yoga Klasser', href: '/tjanster/sup-yoga-klasser' },
  { label: 'Privata Event & Yoga Retreat', href: '/tjanster/privata-event' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Utomhusretreat Stockholm – Outdoor Yoga, Journaling och Yin Yoga på SUP vid Sicklasjön",
  "description": "Privat halvdagsretreat vid Sicklasjön i Stockholm för grupper om 4 till 10 personer. Outdoor yoga, guidad journaling och yin yoga på paddleboard. Perfekt för födelsedag, teamdag eller kompisgäng. Maj till september.",
  "provider": { "@type": "LocalBusiness", "name": "Yoga with Camilla", "url": "https://yogawithcamilla.se" },
  "areaServed": ["Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/utomhusretreat-stockholm",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Utomhusretreat Stockholm priser",
    "itemListElement": [
      { "@type": "Offer", "name": "Privat gruppretreat (4 till 10 pers)", "price": "800", "priceCurrency": "SEK", "description": "Från 800 kr per person. Yogamatta, SUP-bräda, te och journaling-prompts ingår." }
    ]
  }
};

const UtomhusRetreatStockholm = () => (
  <ServicePageLayout
    seoTitle="Outdoor Yoga Retreat Stockholm | Privat Halvdagsretreat vid Sicklasjön | Yoga with Camilla"
    seoDescription="Privat halvdagsretreat vid Sicklasjön i Stockholm för grupper om 4 till 10 personer. Outdoor yoga, guidad journaling och yin yoga på paddleboard. För födelsedag, teamdag eller kompisgäng. Maj till september 2026."
    canonical="https://yogawithcamilla.se/tjanster/utomhusretreat-stockholm"
    ogImage="https://yogawithcamilla.se/images/utomhusretreat-stockholm.jpg"
    breadcrumbLabel="Utomhusretreat Stockholm"
    heroTag="Privat Gruppretreat · Stockholm · Sicklasjön"
    heroHeading="Utomhusretreat i Stockholm"
    heroSubtitle="En halvdag vid Sicklasjön där er grupp faktiskt landar i sig själva. Outdoor yoga, guidad journaling och yin yoga på paddleboard."
    heroImage="/images/utomhusretreat-stockholm.jpg"
    heroImageAlt="Grupp som gör yoga utomhus vid Sicklasjön i Stockholm"
    heroImageAspect="aspect-[3/2]"
    heroImagePosition="center center"
    introHeading="Det här är för er som vill ge gruppen något att minnas"
    introParagraphs={[
      "Du organiserar det här för att du vet att gruppen behöver något annat. Inte middag på restaurang, inte ett escape room. Något som faktiskt ger tillbaka. Det här är ett privat halvdagsretreat för fyra till tio personer som vill ta en dag på allvar, utan att det behöver kännas pretentiöst eller svårt.",
      "Vi börjar på land med outdoor yoga och fri rörelse, fötterna i marken och fåglarna i bakgrunden. Sedan sätter vi oss ner med journaling och guidade reflektionsfrågor, var och en för sig men tillsammans i rummet. Vi avslutar med te vid sjön, paddlar ut och kör yin yoga liggandes på paddleboard med vattnet rörandes under er. Tre timmar som faktiskt gör skillnad.",
      "Funkar för en födelsedag som ska kännas som något. För ett team som vill ha en teamdag som inte liknar alla andra teamdagar. För ett kompisgäng som äntligen bokar det ni pratat om. Ingen yoga- eller SUP-erfarenhet krävs."
    ]}
    highlightsVariant="timeline"
    highlights={[
      {
        heading: "Outdoor yoga och fri rörelse",
        text: "Vi värmer upp kroppen och släpper taget om veckan ni kom ifrån. Mjuk vinyasa-flow följt av fri rörelse, fötterna i marken, fåglarna i bakgrunden."
      },
      {
        heading: "Guidad journaling",
        text: "Guidade frågor att skriva till, individuellt men tillsammans i rummet. Inget presteras, inget redovisas. Det är tid för var och en att faktiskt landa."
      },
      {
        heading: "Te-paus vid sjön",
        text: "Innan vi paddlar ut tar vi ett andetag vid vattnet. Lite tystnad, lite prat. En naturlig övergång som kroppen behöver."
      },
      {
        heading: "Yin yoga på paddleboard",
        text: "Vi paddlar ut till en lugn del av Sicklasjön och avslutar med yin yoga på brädorna, där långa hållna positioner och vattnet som rör sig sakta under er låter kroppen och sinnet mjukna ner på djupet."
      },
    ]}
    pricing={[
      { label: "Privat gruppretreat (4 till 10 pers)", price: "från 800 kr/pers", note: "Yogamatta, SUP-bräda, te och journaling-prompts ingår" },
      { label: "Företag och team", price: "kontakta för offert", note: "Skräddarsytt upplägg efter er grupp och era behov" }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Plats: Sickla Strand, Nacka. Cirka tio till femton minuter från Stockholms city. T-bana Sickla eller Hammarby Sjöstad. Parkering finns på plats.",
      "Säsong: maj till september 2026. Utomhusretreat förutsätter rimligt väder. Vid kraftigt regn eller stark vind hittar vi en lösning tillsammans.",
      "Längd: cirka tre timmar totalt, inklusive paddling ut och tillbaka.",
      "Vad ingår: yogamatta, SUP-bräda, paddel, flytväst, te och guidade journaling-prompts.",
      "Ta med: bekväma kläder i lager, badkläder under (om ni vill kunna hoppa i), handduk och vattenflaska.",
      "Gruppstorlek: minst fyra och max tio personer. Alla bokningar är privata.",
      "Språk: svenska eller engelska, ni väljer.",
      "Avbokning: vid avbokning senast 48 timmar innan får ni 50 procent tillbaka eller tillgodo i 30 dagar. Samma villkor gäller om vädret gör att vi måste flytta dagen.",
      "Säkerhet och eget ansvar: simkunnighet är ett krav för deltagande. Deltagande sker helt på egen risk. Yoga with Camilla och Smashing Balance ansvarar inte för personskada, sjukdom eller förlust av personliga tillhörigheter i samband med deltagande.",
      "Flytväst ingår och ska vara tillgänglig under hela SUP-passet. Om den används eller inte är deltagarens eget ansvar. Bräda, paddel och flytväst tillhandahålls av Smashing Balance. Deltagaren ansvarar för tilldelad utrustning under passens gång. Vid förlust av eller skada på paddel debiteras deltagaren återanskaffningskostnaden (500 kr).",
      "Bokning: hör av dig direkt via knappen nedan eller på hello.yogawithcamilla@gmail.com."
    ]}
    ctaHeading="Berätta om er grupp"
    ctaText="Hör av dig och berätta lite om vilka ni är och vad ni letar efter. Jag anpassar dagen efter er och återkommer med tillgängliga datum. Grupper om fyra till tio personer, maj till september."
    bookingHref="mailto:hello.yogawithcamilla@gmail.com?subject=Utomhusretreat%20Stockholm"
    bookingLabel="Skicka förfrågan →"
    structuredData={structuredData}
    relatedServices={relatedServices}
    faq={[
      {
        question: "Vem bokar det här?",
        answer: "Vanligtvis någon som organiserar för de andra. En födelsedag för en kompis som inte vill ha en vanlig fest. En teamledare som vill ha ett alternativ till after work som faktiskt ger något. Ett kompisgäng som pratat om att göra något sådant här och äntligen gör det. Det de har gemensamt är att de vill ge gruppen en dag som faktiskt betyder något."
      },
      {
        question: "Det låter lite alternativt. Är det det?",
        answer: "Ja, lite. Det är inte ett vanligt yogapass och inte ett vanligt teambuilding-event. Det är ett privat halvdagsretreat vid vattnet som kombinerar rörelse, reflektion och natur. Om ni är nyfikna på det är ni förmodligen rätt grupp."
      },
      {
        question: "Behöver man ha yogaerfarenhet?",
        answer: "Nej. Varken yoga- eller SUP-erfarenhet krävs. Allt förklaras på plats och anpassas efter gruppen. Brädorna är breda och stabila."
      },
      {
        question: "Vad händer om det regnar?",
        answer: "Vid lätt regn kör vi ändå, det är del av sommarupplevelsen. Vid kraftigt regn eller stark vind som påverkar säkerheten på vattnet löser vi det tillsammans, antingen byter vi datum eller anpassar programmet."
      },
      {
        question: "Vad ingår i priset?",
        answer: "Yogamatta, SUP-bräda, paddel, flytväst, te och guidade journaling-prompts. Ni tar med er bara det ni vill bära hem."
      },
      {
        question: "Hur stor kan gruppen vara?",
        answer: "Minst fyra och max tio personer. Alla retreat är privata, ni delar inte upplevelsen med någon annan grupp."
      },
      {
        question: "Passar det för ett företagsevent?",
        answer: "Ja. Det funkar bra som sommaravslutning, kickoff eller teamdag, men det är inte ett vanligt teambuilding-upplägg. Det är en halvdag där folk faktiskt landar i sig själva, och det brukar göra mer för en grupp än de flesta aktiviteter som marknadsförs som teambuilding."
      },
      {
        question: "Vad gäller vid avbokning eller dåligt väder?",
        answer: "Vid avbokning senast 48 timmar innan får ni 50 procent tillbaka eller tillgodo i 30 dagar. Samma villkor gäller om vädret gör att vi måste flytta dagen (hård vind, åska eller för kallt vatten). Ni blir kontaktade senast kvällen innan om vi behöver flytta."
      },
      {
        question: "Hur bokar vi?",
        answer: "Skicka ett mejl till hello.yogawithcamilla@gmail.com eller klicka på knappen ovan. Berätta hur många ni är och vilken period ni tittar på, så återkommer jag med tillgängliga datum."
      }
    ]}
    englishKeywords={{
      heading: "Outdoor Yoga Retreat Stockholm — Private Half-Day at Sicklasjön",
      text: "A private half-day outdoor retreat in Stockholm, Sweden, for groups of 4–10 people. Outdoor yoga and free movement, guided journaling, a tea break by the lake, then yin yoga on stand-up paddleboards on Sicklasjön. Everything included: yoga mats, SUP boards and paddles, life vests, tea and journaling prompts. From 800 SEK per person. No yoga or SUP experience needed. Perfect for a birthday, hen party, team day or group of friends who want a day that actually means something. Season: May to September 2026. Held in English or Swedish. Located at Sickla Strand, Nacka, 10–15 minutes from central Stockholm. Contact to book: hello.yogawithcamilla@gmail.com."
    }}
  />
);

export default UtomhusRetreatStockholm;
