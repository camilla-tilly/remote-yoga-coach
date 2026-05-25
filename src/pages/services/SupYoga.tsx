import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices: { label: string; href: string }[] = [
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SUP yoga Stockholm — Öppna klasser och privata event vid Sickla Strand",
  "description": "SUP yoga på paddleboard vid Sickla Strand i Stockholm. Öppna vinyasa- och yinklasser samt privata event för möhippa, födelsedag, kickoff och företag. Säsong april–september.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/sup-yoga"
};

const SupYoga = () => (
  <ServicePageLayout
    seoTitle="SUP Yoga Stockholm | Öppna Klasser & Privata Event | Yoga med Camilla"
    seoDescription="SUP yoga på paddleboard vid Sickla Strand i Stockholm. Öppna vinyasa- och yinklasser samt privata event för möhippa, födelsedag, kickoff och företag. Säsong april–september."
    canonical="https://yogawithcamilla.se/tjanster/sup-yoga"
    ogImage="https://yogawithcamilla.se/images/sup-yoga-floating-dock.jpg"
    breadcrumbLabel="SUP yoga"
    heroTag="Öppna klasser & privata event"
    heroHeading="SUP yoga i Stockholm"
    heroSubtitle="Yoga på paddleboard och bastu vid Sickla Strand. Öppna klasser vinyasa och yin, eller boka ett privat event för er grupp. Ingen erfarenhet krävs."
    heroImage="/images/sup-yoga-floating-dock.jpg"
    heroImageAlt="SUP yoga på paddleboard vid Sickla Strand i Stockholm"
    introHeading="På vattnet, mitt i naturen"
    introParagraphs={[
      "Sickla Strand ligger 20 minuter från centrala Stockholm. Ni paddlar ut på brädorna, gör yoga på vattnet och avslutar i bastun vid sjön. All utrustning finns på plats.",
      "Klassen leds av mig på engelska och anpassas efter gruppen. Ni behöver varken ha gjort yoga eller stått på en paddleboard förut. Brädorna är breda och stabila, och de flesta i en grupp är förstagångare.",
      "Välj ett öppet tillfälle och kom som du är, eller boka ett privat event för er grupp: möhippa, födelsedag, kickoff eller bara ett gäng som vill göra något annorlunda en lördag."
    ]}
    highlights={[
      {
        heading: "Öppen vinyasayoga på SUP",
        text: "Flödande vinyasa på paddleboard. Klassen är anpassad för alla nivåer och fokuserar på balans, andning och rörelse på vattnet. Inget kräver att du kan yoga sedan tidigare. Anmälan till aktuellt schema via mejl."
      },
      {
        heading: "Öppen yinyoga på SUP",
        text: "Lugn yin på paddleboard. Långa, hållna positioner nära vattnet. Klassen passar lika bra som återhämtning för erfarna yogisar som för den som aldrig provat. Anmälan till aktuellt schema via mejl."
      },
      {
        heading: "Privat event: möhippa och födelsedag",
        text: "SUP yoga och bastu är ett av de mest bokade alternativen för möhippa i Stockholm. Ni gör något ihop, alla kan delta oavsett form eller träningsvana, och bastun efteråt sätter punkt på ett sätt som en bar inte riktigt kan."
      },
      {
        heading: "Privat event: kickoff och företag",
        text: "Ut från kontoret, ut på vattnet. SUP yoga fungerar lika bra för ett team som aldrig gjort yoga som för ett som tränar regelbundet. Fokus på att göra något tillsammans, inte på att prestera."
      }
    ]}
    pricing={[
      {
        label: 'Öppen klass (vinyasa eller yin)',
        price: 'kontakta för schema och pris',
        note: 'Anmälan via mejl. Platser är begränsade per tillfälle.'
      },
      {
        label: 'Privat SUP yoga + bastu',
        price: 'från 500 kr/person',
        note: 'Minst 1 500 kr per tillfälle (tre personer). Grupper 3–10 pers, upp till 15 på förfrågan. All utrustning ingår.'
      }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      { subheading: "Vad ingår" },
      "SUP yoga-klassen ledd av mig och bastu vid sjön ingår alltid. All utrustning, brädor, paddlar, flytvästar och dry bags, finns på plats via Smashing Balance som driver Sickla Strand. Omklädningsrum med låsbara skåp finns.",
      { subheading: "Säsong och plats" },
      "Säsongen är slutet av april till september. Sickla Strand ligger i Nacka, ca 20 minuter från Stockholm city med kollektivtrafik eller bil. Parkering finns.",
      { subheading: "Boka" },
      "Maila hello.yogawithcamilla@gmail.com för att anmäla dig till en öppen klass eller boka ett privat event. Uppge datum, antal personer och typ av tillfälle."
    ]}
    ctaHeading="Boka SUP yoga"
    ctaText="Hör av dig med datum och om du vill gå en öppen klass eller boka ett privat event, så återkommer jag med schema och tillgänglighet."
    faq={[
      {
        question: "Behöver vi ha gjort yoga eller stått på paddleboard förut?",
        answer: "Nej. Klassen anpassas efter gruppen och de flesta deltagare är förstagångare. Brädorna är breda och stabila. Ni behöver bara kunna simma."
      },
      {
        question: "Vad kostar en öppen klass?",
        answer: "Maila hello.yogawithcamilla@gmail.com för aktuellt schema och pris. Platser är begränsade per tillfälle."
      },
      {
        question: "Vad kostar ett privat SUP yoga-event?",
        answer: "Från 500 kr per person, med ett lägsta totalpris på 1 500 kr per tillfälle. Det betyder att tre personer betalar 1 500 kr totalt. Tillval som trail run, tennis, vattencyklar eller mat tillkommer. Mejla för en konkret offert."
      },
      {
        question: "Vad ingår i priset?",
        answer: "SUP yoga-klassen och bastu vid sjön. All utrustning, brädor, paddlar, flytvästar och dry bags, finns på plats. Omklädningsrum med låsbara skåp ingår."
      },
      {
        question: "Hur stor kan gruppen vara för ett privat event?",
        answer: "Privata event passar grupper på 3 till 10 personer. Större grupper upp till 15 går att boka på förfrågan."
      },
      {
        question: "Vilken tid på året går det att boka?",
        answer: "Säsongen är slutet av april till september. Utanför det fönstret bokas inga SUP yoga-event."
      },
      {
        question: "Hur bokar jag?",
        answer: "Maila hello.yogawithcamilla@gmail.com med datum, antal deltagare och typ av tillfälle. Jag återkommer med tillgänglighet och schema."
      }
    ]}
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "SUP Yoga in Stockholm | Open Classes & Private Events",
      text: "SUP yoga on paddleboards at Sickla Strand, Stockholm. Led in English by a certified yoga teacher.\n\nOpen classes: vinyasa and yin on the water. Email for current schedule and pricing. Spots are limited per session.\n\nPrivate events from 500 SEK per person (minimum 1,500 SEK per session). Groups of 3–10, up to 15 on request. Great for hen parties, birthdays, team kickoffs, and private groups.\n\nSeason: late April to September. All equipment provided. No yoga or paddleboard experience needed.\n\nEmail hello.yogawithcamilla@gmail.com with your date, group size and occasion."
    }}
  />
);

export default SupYoga;
