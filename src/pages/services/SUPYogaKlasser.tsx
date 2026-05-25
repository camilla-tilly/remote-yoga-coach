import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Privat SUP Yoga (möhippa, team)', href: '/tjanster/sup-yoga' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SUP Yoga Klasser Stockholm – Vinyasa & Yin på Sickla Strand",
  "description": "Öppna SUP yoga-klasser varje vecka i Stockholm vid Sickla Strand. Vinyasa eller yin på paddleboard, 75 minuter, bastu ingår. Säsong slutet april till september.",
  "provider": { "@type": "LocalBusiness", "name": "Yoga with Camilla", "url": "https://yogawithcamilla.se" },
  "areaServed": ["Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/sup-yoga-klasser",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SUP Yoga Klasser priser",
    "itemListElement": [
      { "@type": "Offer", "name": "Enstaka klass", "price": "350", "priceCurrency": "SEK", "description": "En SUP yoga-klass, bräda och bastu ingår" },
      { "@type": "Offer", "name": "Enstaka klass (egen SUP)", "price": "150", "priceCurrency": "SEK", "description": "En SUP yoga-klass om du tar med egen bräda, bastu ingår" },
      { "@type": "Offer", "name": "10-klippkort", "price": "1000", "priceCurrency": "SEK", "description": "Tio SUP yoga-klasser, bräda och bastu ingår" },
      { "@type": "Offer", "name": "Säsongspass 2026", "price": "1500", "priceCurrency": "SEK", "description": "Obegränsade SUP yoga-klasser hela säsongen, bräda och bastu ingår" }
    ]
  }
};

const SUPYogaKlasser = () => (
  <ServicePageLayout
    seoTitle="SUP Yoga Klasser Stockholm – Vinyasa & Yin på Sickla Strand | Yoga with Camilla"
    seoDescription="Öppna SUP yoga-klasser varje vecka i Stockholm vid Sickla Strand. Vinyasa eller yin, 75 min, bastu ingår. Enstaka klass 350 kr, 10-klippkort 1 000 kr, säsongspass 1 500 kr. Säsong slutet april till september."
    canonical="https://yogawithcamilla.se/tjanster/sup-yoga-klasser"
    ogImage="https://yogawithcamilla.se/images/sup-yoga-klasser.jpg"
    breadcrumbLabel="SUP Yoga Klasser Stockholm"
    heroTag="Öppna Veckoklasser · SUP Yoga Stockholm"
    heroHeading="SUP Yoga Klasser i Stockholm"
    heroSubtitle="Öppna vinyasa- eller yin-klasser på paddleboard vid Sickla Strand. 75 minuter, bastu ingår. Säsong slutet april till september. Bokas via Smashing Balance."
    heroImage="/images/sup-yoga-klasser.jpg"
    heroImageAlt="SUP yoga-klass på paddleboards vid Sickla Strand"
    heroImageAspect="aspect-[4/5]"
    heroImagePosition="center center"
    introHeading="Öppna SUP yoga-klasser, vinyasa eller yin"
    introParagraphs={[
      "Varje vecka under säsongen håller jag öppna SUP yoga-klasser vid Sickla Strand. Du bokar din plats, kommer 10 till 15 minuter före för säkerhetsgenomgång och är sedan på vattnet i 75 minuter.",
      "Klasserna hålls hos Elton's Café och Uthyrning. Smashing Balance driver platsen och står för brädor och bastu vid sjön, som ingår i varje klass.",
      "Bokning görs hos Smashing Balance. Letar du istället efter ett privat event för möhippa, team eller födelsedag? Se Privat SUP Yoga."
    ]}
    highlights={[
      {
        heading: "Vinyasa SUP Yoga",
        text: "Aktivt flöde på brädan. Mjuka övergångar, anpassat för vattnet. Du bygger styrka och balans samtidigt som du landar i andningen."
      },
      {
        heading: "Yin SUP Yoga",
        text: "Lugna, hållna positioner med vattnet i rörelse under dig. Återhämtande, perfekt efter en lång arbetsvecka."
      },
      {
        heading: "Bastu vid sjön",
        text: "Bastun ingår i alla klasser. Värm upp efteråt, hoppa i sjön, sitt och låt kvällen landa."
      },
      {
        heading: "75 minuter inkl. paddling",
        text: "Vi möts på land, korta säkerhetsgenomgången, paddlar ut till ankringsplatsen, kör klassen och paddlar tillbaka."
      },
      {
        heading: "Alla nivåer",
        text: "Ingen erfarenhet krävs, varken yoga eller SUP. Brädorna är breda och stabila. Klassen anpassas efter de som är där."
      },
      {
        heading: "Klippkort & säsongspass",
        text: "Kom ofta? Tio klasser för 1 000 kr eller obegränsat hela säsongen för 1 500 kr."
      }
    ]}
    pricing={[
      { label: "Enstaka klass", price: "350 kr", note: "Bräda och bastu ingår" },
      { label: "Enstaka klass (egen SUP)", price: "150 kr", note: "Om du tar med egen bräda" },
      { label: "10-klippkort", price: "1 000 kr", note: "Tio klasser, bräda och bastu ingår" },
      { label: "Säsongspass 2026", price: "1 500 kr", note: "Obegränsat hela säsongen" }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Plats: Sickla Strand, vid Elton's Café och Uthyrning, Nacka. Cirka 10 till 15 minuter från city. T-bana Sickla eller Hammarby Sjöstad. Parkering finns på plats.",
      "Säsong: slutet april till september 2026. Schemat uppdateras varje vecka, se aktuella tider på Smashing Balance.",
      "Längd: 75 minuter inklusive paddling till och från ankringsplatsen. Kom 10 till 15 minuter innan för säkerhetsgenomgång och introduktion av utrustning.",
      "Vad som ingår: bräda, paddel, flytväst, dry bag, omklädningsrum, lås till värdesaker och bastu vid sjön efter klassen.",
      "Ta med: badkläder under, träningskläder du inte är rädd om, handduk, vattenflaska, solkräm. Mobil och värdesaker stannar i låst skåp.",
      "Undervisning på engelska. Ingen erfarenhet krävs.",
      "Bokning sker via Smashing Balance. Klicka på knappen nedan för att se aktuella tider och boka."
    ]}
    ctaHeading="Boka en SUP yoga-klass"
    ctaText="Se aktuellt schema och boka direkt via Smashing Balance. Enstaka klass från 350 kr, klippkort och säsongspass tillgängliga. Letar du efter ett privat event för er grupp istället? Se Privat SUP Yoga."
    bookingHref="https://smashingbalance.se/collections/sup-yoga"
    bookingLabel="Boka SUP klass →"
    structuredData={structuredData}
    relatedServices={relatedServices}
    faq={[
      {
        question: "Var bokar jag?",
        answer: "Klasserna bokas via Smashing Balance på smashingbalance.se/collections/sup-yoga. Där ser du aktuellt schema och alla biljettyper."
      },
      {
        question: "Hur lång är en klass?",
        answer: "75 minuter totalt, inklusive paddling till och från ankringsplatsen. Kom 10 till 15 minuter innan för säkerhetsgenomgång."
      },
      {
        question: "Vad är skillnaden mellan vinyasa och yin?",
        answer: "Vinyasa är ett aktivt flöde med mjuka övergångar, bra om du vill röra på dig. Yin är lugna, hållna positioner, bra för återhämtning. Båda fungerar för alla nivåer."
      },
      {
        question: "Ingår bastu?",
        answer: "Ja, bastu vid sjön ingår i alla klasser, oavsett biljettyp."
      },
      {
        question: "Vad kostar det?",
        answer: "Enstaka klass 350 kr (bräda och bastu ingår), 150 kr om du tar med egen SUP, 10-klippkort 1 000 kr och säsongspass 2026 för 1 500 kr."
      },
      {
        question: "Behöver jag erfarenhet?",
        answer: "Nej. Brädorna är breda och stabila, och klassen börjar alltid med en kort säkerhetsgenomgång på land. Ingen tidigare yoga eller SUP behövs."
      },
      {
        question: "Ramlar man i vattnet?",
        answer: "Tidigt på säsongen, medan vattnet fortfarande är kallt, håller jag klasserna enkla och vi gör få stående positioner. Det mesta sker sittande, på knä eller liggande på mage och rygg, så det är liten risk att du hamnar i vattnet. När det blir varmare lägger jag in fler stående poser. Skulle det hända så är vattnet rent, du tar dig upp på brädan igen och klassen fortsätter."
      },
      {
        question: "Vill ni boka för en hel grupp?",
        answer: "Då passar privata event bättre. Se sidan Privat SUP Yoga för möhippa, team och födelsedag, bokas direkt med mig."
      }
    ]}
    englishKeywords={{
      heading: "SUP Yoga Classes in Stockholm",
      text: "Open SUP yoga classes every week at Sickla Strand, Stockholm. Vinyasa or yin on paddleboards, 75 minutes including paddling time, lakeside sauna included. Season runs late April through September 2026. Single class 350 kr (board and sauna included), 150 kr if you bring your own SUP, 10-class pass 1 000 kr, season pass 1 500 kr. All classes taught in English. No experience needed. Booking via Smashing Balance at smashingbalance.se/collections/sup-yoga. Looking for a private group event for a hen party, team day or birthday instead? See the Private SUP Yoga page."
    }}
  />
);

export default SUPYogaKlasser;
