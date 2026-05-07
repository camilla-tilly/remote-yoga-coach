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
  "name": "Privat SUP Yoga, Bastu & Mer Stockholm – möhippa, team och födelsedag",
  "description": "Privat paket vid Sickla Strand, Stockholm: SUP yoga och bastu, plus tillval som trail run i Nacka, tennis, vattencyklar, SUP-uthyrning och mat via Elton's Café. Skräddarsytt för möhippa, team och födelsedag.",
  "provider": { "@type": "LocalBusiness", "name": "Yoga with Camilla", "url": "https://yogawithcamilla.se" },
  "areaServed": ["Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/sup-yoga",
  "offers": {
    "@type": "Offer",
    "name": "Privat SUP Yoga & Bastu, med tillval",
    "priceCurrency": "SEK",
    "price": "500",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "500",
      "priceCurrency": "SEK",
      "description": "Från 500 kr per person för yoga och bastu, beroende på gruppstorlek, längd och tillval"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Privata event Sickla Strand",
    "itemListElement": [
      { "@type": "Offer", "name": "SUP yoga + bastu", "description": "Yoga på paddleboard ledd av Camilla, följt av bastu vid sjön. Basen i alla event." },
      { "@type": "Offer", "name": "Trail run i Nacka", "description": "Guidad löpning i Nackareservatet, ledd av Camilla. Tillval för grupper som vill röra sig mer." },
      { "@type": "Offer", "name": "Tennis med Lucas", "description": "Privatlektion i tennis via vår partnerinstruktör Lucas. Tillval." },
      { "@type": "Offer", "name": "Vattencyklar och SUP-uthyrning", "description": "Vattencyklar för alla nivåer eller SUP att paddla själva, via Smashing Balance. Tillval." },
      { "@type": "Offer", "name": "Mat via Elton's Café", "description": "Fika eller lättare måltid på plats via Elton's Café. Tillval." }
    ]
  }
};

const SUPYoga = () => (
  <ServicePageLayout
    seoTitle="Privat SUP Yoga, Bastu & Mer Stockholm – Möhippa, Team, Födelsedag | Yoga with Camilla"
    seoDescription="Privat paket vid Sickla Strand: SUP yoga och bastu, med tillval som trail run, tennis, vattencyklar och mat. För möhippa, team och födelsedag. Från 500 kr per person."
    canonical="https://yogawithcamilla.se/tjanster/sup-yoga"
    ogImage="https://yogawithcamilla.se/images/sup-yoga-group.jpg"
    breadcrumbLabel="Privat SUP Yoga Stockholm"
    heroTag="Privata Event · Sickla Strand Stockholm"
    heroHeading="Privat SUP Yoga, Bastu & Mer i Stockholm"
    heroSubtitle="SUP yoga och bastu vid Sickla Strand, med tillval som trail run i Nacka, tennis, vattencyklar eller mat på plats. Skräddarsytt för möhippa, team och födelsedag, bokat direkt via mig."
    heroGallery={[
      { src: "/images/sup-yoga-group.jpg", alt: "Grupp som gör yoga på paddleboards på Sicklasjön, Stockholm" },
      { src: "/images/sup-yoga-paddling.jpg", alt: "Paddla ut till flytbryggan vid Sickla Strand", position: "center 55%" },
      { src: "/images/sup-yoga-floating-dock.jpg", alt: "Flytbrygga på Sicklasjön", position: "center 70%" },
    ]}
    introHeading="Yoga på brädan, bastu vid vattnet"
    introParagraphs={[
      "Mjuk vinyasa eller lugn yin på paddleboarden, anpassat efter gruppen, och bastu vid sjön efteråt. Det ingår alltid. Sen lägger ni till det ni vill: trail run i Nackareservatet ledd av mig, tennis med Lucas, vattencyklar, SUP-uthyrning eller fika på Elton's Café.",
      "Mejla med datum, gruppstorlek och önskemål, så återkommer jag med offert."
    ]}
    audience={{
      eyebrow: "Perfekt för",
      items: [
        {
          heading: "Möhippa på vattnet",
          text: "Yoga, skratt och bastu efteråt. En möhippa vid sjön i lugnt tempo."
        },
        {
          heading: "Team & sommaravslutning",
          text: "Ut på sjön, ner i varv, bastu efteråt. Funkar för kickoff, teambuilding eller sommaravslutning."
        },
        {
          heading: "Födelsedag eller vänner",
          text: "En lugn, lite annorlunda födelsedag, eller en stund vid sjön med vänner. Yoga och bastu i lugnt tempo."
        }
      ]
    }}
    offerings={{
      eyebrow: "Bygg dagen som ni vill",
      items: [
        {
          heading: "Yoga på brädan",
          text: "Vinyasa om ni vill röra på er, yin om ni vill landa. Anpassas efter gruppens nivå och energi den dagen. Inga förkunskaper krävs.",
          included: true
        },
        {
          heading: "Bastu vid sjön",
          text: "Vedeldad eller eldriven bastu vid vattenkanten ingår i alla privata event. Värm upp, hoppa i sjön, repetera.",
          included: true
        },
        {
          heading: "Trail run i Nacka",
          text: "Guidad löpning i Nackareservatet, ledd av mig. Ni väljer tempo och distans, lugn promenad-jogg eller lite mer fart. Bra för grupper som vill röra sig mer.",
          included: false
        },
        {
          heading: "Tennis med Lucas",
          text: "Privatlektion i tennis med Lucas på plats. Bra om någon i gruppen vill röra sig mer eller prova något nytt.",
          included: false
        },
        {
          heading: "Vattencyklar",
          text: "Enkelt och kul, funkar även för dem som inte är vana vid vatten.",
          included: false
        },
        {
          heading: "SUP-uthyrning",
          text: "SUP att paddla själva, för den som vill utforska sjön i egen takt efter eller före passet.",
          included: false
        },
        {
          heading: "Mat via Elton's Café",
          text: "Fika eller en hel måltid hos Elton's, vid sjön. Allt på samma plats.",
          included: false
        }
      ]
    }}
    pricing={[
      { label: "SUP yoga + bastu (bas)", price: "från 500 kr / person", note: "Minsta totala pris 1500 kr per tillfälle. Slutpriset beror på gruppstorlek och längd. Bastu ingår alltid." },
      { label: "Tillval", price: "kontakta för offert", note: "Yoga och bastu ingår alltid. Lägg till trail run, tennis, vattencyklar, SUP-uthyrning eller mat så får ni en offert på paketet." },
      { label: "Gruppstorlek", price: "3 till 10 personer", note: "Större grupper upp till 15 på förfrågan." }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Plats: Sickla Strand, vid Elton's Café och Uthyrning. [Hitta hit på Google Maps](https://maps.app.goo.gl/ZqpkKJDtYha9BgbN9). Det finns parkering på plats.",
      "Säsong: privata event går att boka från slutet av april till september.",
      "Längd: vanligtvis 2 till 4 timmar inklusive yoga, bastu och eventuella tillval. Vi anpassar efter er.",
      "Utrustning: brädor, paddel, flytväst och dry bag tillhandahålls av Smashing Balance på plats. Omklädningsrum finns. Ta med badkläder och handduk. Träningskläder och skor om ni lägger till tennis eller trail run.",
      "Avbokning: vid avbokning senast 48 timmar innan får ni 50 procent tillbaka eller tillgodo i 30 dagar. Samma villkor gäller om vädret gör att vi måste flytta dagen.",
      "Säkerhet och eget ansvar: simkunnighet är ett krav för deltagande. Deltagande sker helt på egen risk. Yoga with Camilla och Smashing Balance ansvarar inte för personskada, sjukdom eller förlust av personliga tillhörigheter i samband med deltagande.",
      "Flytväst ingår och ska vara tillgänglig under hela klassen. Board, paddel och flytväst tillhandahålls av Smashing Balance. Deltagaren ansvarar för tilldelad utrustning under klassens gång. Vid förlust av eller skada på paddel debiteras deltagaren återanskaffningskostnaden (500 kr).",
      "Undervisning på engelska. Ingen erfarenhet krävs, varken yoga eller SUP.",
      "Bokning: mejla hello.yogawithcamilla@gmail.com med datum, gruppstorlek och önskat format."
    ]}
    ctaHeading="Boka ert privata event"
    ctaText="Möhippa, team, födelsedag eller en eftermiddag med vänner. Mejla mig med datum, gruppstorlek och vad ni vill ha ut av dagen, så återkommer jag med offert. Letar du efter öppna veckoklasser istället? Se SUP Yoga Klasser."
    bookingHref="mailto:hello.yogawithcamilla@gmail.com"
    bookingLabel="Mejla för offert"
    structuredData={structuredData}
    relatedServices={relatedServices}
    faq={[
      {
        question: "Hur bokar vi ett privat event?",
        answer: "Mejla hello.yogawithcamilla@gmail.com med datum, gruppstorlek och vad ni vill göra (möhippa, team, födelsedag, vänner). Bokning bekräftas när full betalning är mottagen."
      },
      {
        question: "Vad ingår i grundpaketet?",
        answer: "SUP yoga ledd av mig och bastu vid sjön. Brädor, paddel, flytväst och dry bag finns på plats. Funkar bra som ett kort event på cirka 2 timmar."
      },
      {
        question: "Vad mer kan vi lägga till?",
        answer: "Trail run i Nackareservatet (ledd av mig), tennis med Lucas, vattencyklar för alla nivåer, SUP-uthyrning för att paddla själva, och fika eller en hel måltid hos Elton's Café vid sjön. Vi sätter ihop det som passar gruppen."
      },
      {
        question: "Vad kostar det?",
        answer: "Från 500 kr per person för yoga och bastu, med ett minsta totalpris på 1500 kr per tillfälle (motsvarar tre personer). Slutpriset beror på gruppstorlek, längd och vilka tillval ni vill ha. Ni får alltid en konkret offert innan ni bokar."
      },
      {
        question: "Hur stor grupp kan vi vara?",
        answer: "Ideal storlek är 3 till 10 personer. Större grupper upp till 15 på förfrågan."
      },
      {
        question: "Behöver vi kunna yoga eller SUP?",
        answer: "Nej, ingen erfarenhet krävs. Brädorna är breda och stabila. Vi börjar alltid med en kort säkerhetsgenomgång och introduktion på land."
      },
      {
        question: "Vinyasa eller yin på brädan?",
        answer: "Ni väljer. Vinyasa om ni vill röra på er och få upp värmen, yin om ni vill landa och slappna av. Båda anpassas efter gruppens nivå."
      },
      {
        question: "Vad är skillnaden mot de öppna veckoklasserna?",
        answer: "Privata event är hela upplevelsen för er grupp, bokad direkt med mig. Veckoklasserna är öppna för allmänheten och bokas per plats. Se sidan SUP Yoga Klasser om du letar efter det."
      },
      {
        question: "Vem är Smashing Balance?",
        answer: "Vår partner som driver platsen, brädorna, bastun, vattencyklarna och säkerhetsutrustningen vid Sickla Strand. Jag står för yogan, trail run-passet och hela upplevelsen, de står för det som gör vattnet möjligt."
      },
      {
        question: "Vad gäller vid avbokning eller dåligt väder?",
        answer: "Vid avbokning senast 48 timmar innan får ni 50 procent tillbaka eller tillgodo i 30 dagar. Samma villkor gäller om vädret gör att vi måste flytta dagen (hård vind över 6 m/s, åska eller för kallt vatten). Du blir kontaktad senast kvällen innan om vi behöver flytta."
      }
    ]}
    englishKeywords={{
      heading: "Private SUP Yoga, Sauna & More in Stockholm",
      text: "Private events at Sickla Strand, Stockholm. SUP yoga on the lake plus a lakeside sauna are the base, and you can build out the day with trail running in Nacka nature reserve (led by me), tennis with Lucas, water bikes, SUP rentals or food at Elton's Café on site. Tailored packages for hen parties, team days, birthdays and friend groups. From 500 kr per person with a 1500 kr minimum per booking. Groups of 3 to 10 are ideal, up to 15 on request. All equipment provided. No experience needed, taught in English. Cancellation 48+ hours ahead gets 50% back or 30-day credit, same terms for weather cancellations.\n\nSafety and own responsibility: swimming ability is required for participation. Participation is entirely at the participant's own risk. Yoga with Camilla and Smashing Balance accept no responsibility for personal injury, illness or loss of personal belongings in connection with participation.\n\nA buoyancy aid (PFD) is included and must be accessible throughout the class. Board, paddle and PFD are provided by Smashing Balance. The participant is responsible for their allocated equipment throughout the class. Loss of or damage to a paddle will be charged at replacement cost (500 kr).\n\nEmail hello.yogawithcamilla@gmail.com with your dates, group size and what you'd like to do for a same-day quote."
    }}
  />
);

export default SUPYoga;
