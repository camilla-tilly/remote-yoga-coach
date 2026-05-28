import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices: { label: string; href: string }[] = [
  { label: 'Företagsyoga — abonnemang', href: '/tjanster/foretagsyoga' },
  { label: 'SUP yoga — privata event', href: '/tjanster/sup-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Konferensyoga och event-yoga för företag i Stockholm",
  "description": "Yoga för kickoffs, konferenser, AWs och sommaravslutningar i Stockholm. Certifierad lärare kommer till er med utrustning. Kontakta för offert.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/foretagsyoga-event"
};

const ForetagsYogaEvent = () => (
  <ServicePageLayout
    seoTitle="Konferensyoga & kickoff-yoga Stockholm | Yoga med Camilla"
    seoDescription="Yoga för kickoffs, AWs, konferenser och sommaravslutningar i Stockholm. Certifierad yogalärare med utrustning. Kontakta för offert."
    canonical="https://yogawithcamilla.se/tjanster/foretagsyoga-event"
    ogImage="https://yogawithcamilla.se/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.jpg"
    breadcrumbLabel="Företagsyoga — events"
    heroTag="Konferensyoga och event-yoga i Stockholm"
    heroHeading="Yoga för kickoffs, konferenser och teambuilding i Stockholm."
    heroSubtitle="En yogaklass mitt i kickoffen, AW:n eller sommaravslutningen. Klassen anpassas efter er grupp och ert tillfälle. Jag tar med allt. Ni behöver bara ett utrymme."
    heroImage="/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.jpg"
    heroImageAlt="Yoga för kickoffs och företagsevent i Stockholm"
    introHeading="Inte en paus — en höjdpunkt"
    introParagraphs={[
      "De flesta konferenselement ser likadana ut: föreläsningar, workshops, gemensam lunch. Yoga är ofta det som folk pratar om efteråt. Inte för att det är häftigt, utan för att det bryter mönstret på ett sätt som faktiskt sitter kvar.",
      "Jag anpassar klassen efter gruppen, tillfället och hur mycket tid ni har. Det kan vara en 30-minuters andningspaus mitt i konferensdagen, stolsyoga direkt vid skrivbordet, eller en full klass med mattor för teamet på AW:n. Ingen förkunskap krävs.",
      "Klassen hålls på engelska, vilket fungerar utmärkt för internationella team och grupper med blandad bakgrund."
    ]}
    highlights={[
      {
        heading: "Andningsworkshop",
        text: "30 minuter. Inga mattor, inget ombyte. Fokus på andningstekniker för stress, fokus och återhämtning. Passar perfekt som paus mitt i en konferensdag."
      },
      {
        heading: "Stolsyoga",
        text: "Yoga vid skrivbordet eller på stolar, stående. Inget ombyte, ingen utrustning. Axlar, nacke, höfter. Lätt att slot in i dagen utan avbrott."
      },
      {
        heading: "Full yoga med mattor",
        text: "Traditionell klass med flöde och avslappning. Jag tar med mattor och block. Ni behöver ett utrymme som rymmer en matta per person."
      },
      {
        heading: "Skräddarsytt",
        text: "Kombination av ovanstående, outdoor-klass, retreat i Dalarna eller annat upplägg. Berätta vad ni vill ha och jag sätter ihop ett förslag."
      }
    ]}
    pricing={[
      {
        label: 'Alla format',
        price: 'Kontakta för offert',
        note: 'Priset beror på format, längd, antal deltagare och plats.'
      }
    ]}
    detailsHeading="Hur det fungerar"
    detailsParagraphs={[
      { subheading: "Boka" },
      "Mejla hello.yogawithcamilla@gmail.com med era önskemål, datum, ungefärligt antal deltagare och plats. Jag återkommer med förslag på format och offert.",
      { subheading: "Klassen" },
      "Jag är på plats 10 till 15 minuter innan start och fixar det som behöver fixas. Ni behöver inte tänka på något. Klassen är anpassad efter er grupp från start, inga avancerade positioner, alla kan hänga med.",
      { subheading: "Format och längd" },
      "Allt från 20-minuters andningsklass till 90-minuters full klass med mattor och avslappning. Vanligast är 45 till 60 minuter. Formatet väljer vi tillsammans baserat på vad som passar er dag.",
      { subheading: "Var" },
      "Kontoret, konferensanläggningen, takterrassen, eller utomhus. Jag tar med utrustning. Ni behöver bara ett utrymme.",
      { subheading: "Återkommande abonnemang" },
      "Letar ni efter veckovisa sessioner för teamet, inte ett engångstillfälle? Det är ett annat upplägg. Läs mer om [Företagsyoga på abonnemang](/tjanster/foretagsyoga)."
    ]}
    ctaHeading="Boka yoga till ert event"
    ctaText="Mejla med era önskemål, datum, antal deltagare och plats. Jag sätter ihop ett förslag."
    faq={[
      {
        question: "Vilken lokal behövs?",
        answer: "Det beror på formatet. Andningsworkshop och stolsyoga kräver inget speciellt utöver ett rum och stolar. Full klass med mattor behöver ett utrymme som rymmer en matta per person med armlängd emellan. För 10 personer räcker ett konferensrum på 25 till 30 kvm där borden kan flyttas."
      },
      {
        question: "Hur många kan vara med?",
        answer: "Från 3 till 20 personer med min utrustning. Större grupper går att lösa men vi pratar om lokal och upplägg i förväg."
      },
      {
        question: "Behöver deltagarna ha yogaerfarenhet?",
        answer: "Nej. Klassen anpassas efter gruppen och inga avancerade positioner används. De flesta av mina eventdeltagare har aldrig gjort yoga förut."
      },
      {
        question: "Hur lång är klassen?",
        answer: "Allt från 20 minuter (andningsklass) till 90 minuter (full klass). Vanligast är 45 till 60 minuter. Vi bestämmer formatet baserat på era behov."
      },
      {
        question: "Kan ni hålla klassen på engelska?",
        answer: "Ja, alltid. Jag är från Australien och undervisar på engelska som standard."
      },
      {
        question: "Är yoga en godkänd friskvårdsförmån?",
        answer: "Ja. Yoga finns på Skatteverkets lista över godkända friskvårdsaktiviteter. Prata med er HR eller ekonomiansvarig om hur ni vill hantera det."
      }
    ]}
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Corporate Yoga for Events & Conferences | Stockholm",
      text: "One-off yoga sessions for company kickoffs, after-works, conferences, and summer send-offs in Stockholm.\n\nAll formats available: breathing workshop (30 min, no mats), chair yoga (no equipment needed), full yoga class with mats. Led in English by a 500-hour certified teacher. I bring everything — you just need a space.\n\nEmail hello.yogawithcamilla@gmail.com with your date, headcount, location, and any preferences. I'll come back with format options and a quote."
    }}
  />
);

export default ForetagsYogaEvent;
