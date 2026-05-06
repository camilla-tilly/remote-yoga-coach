import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Privata Event', href: '/tjanster/privata-event' },
  { label: 'Mini Retreat & Upplevelser', href: '/tjanster/mini-retreat' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Företagsyoga, Konferensyoga & Kickoff i Stockholm & Dalarna",
  "description": "Yoga för företag, konferenser och kickoff-event i Stockholm och Dalarna. Öka teamets energi, fokus och välmående med en professionell yogaklass skräddarsydd för er organisation.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Stockholm", "Dalarna"],
  "url": "https://yogawithcamilla.se/tjanster/foretagsyoga"
};

const ForetagsYoga = () => (
  <ServicePageLayout
    seoTitle="Företagsyoga, Konferensyoga & Kickoff Stockholm & Dalarna | Yoga med Camilla"
    seoDescription="Företagsyoga i Stockholm: regelbundna klasser på kontoret samt konferenser och kickoffs. I Dalarna: yoga för konferenser, kickoffs och företagsevent. Ingen förkunskap krävs."
    canonical="https://yogawithcamilla.se/tjanster/foretagsyoga"
    ogImage="https://yogawithcamilla.se/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.jpg"
    breadcrumbLabel="Företagsyoga"
    heroTag="Företag, Konferens & Kickoff"
    heroHeading="Företagsyoga"
    heroSubtitle="Yoga för konferenser, kickoffs och regelbundna klasser på kontoret. En lugn, fokuserad paus mitt i arbetsdagen. Alla kan delta, ingen erfarenhet krävs."
    heroImage="/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.jpg"
    heroImageAlt="Lugn och fokus, yoga för konferens och företagsevent"
    introHeading="Ett andrum för teamet"
    introParagraphs={[
      "I Stockholm erbjuder jag regelbunden yoga på kontoret samt konferenser, kickoffs och AWs. I Dalarna håller jag yoga för konferenser, kickoffs och företagsevent. Klassen hålls på engelska.",
      "Unna era anställda en stund att andas, sänka tempot och släppa spänningar från långa möten. Stressen sjunker, tankarna klarnar och fokus blir skarpare. En gemensam stund där ingen behöver prestera.",
      "Ingen yogaerfarenhet krävs. Klassen anpassas efter gruppen."
    ]}
    highlights={[
      {
        heading: "Konferensyoga",
        text: "Yogapaus mitt i konferensdagen för att rensa huvudet och skärpa fokus."
      },
      {
        heading: "Kickoff & AW",
        text: "Yoga som en del av kickoff-programmet. Funkar bra som gemensam teamaktivitet."
      },
      {
        heading: "Regelbundna klasser",
        text: "Återkommande yoga på ert kontor i Stockholm, veckovis eller varannan vecka. (Endast Stockholm.)"
      },
      {
        heading: "Teambuilding",
        text: "En gemensam paus där ingen behöver prestera. Bygger närvaro istället för tempo."
      }
    ]}
    pricing={[
      { label: 'Kontoret · 60 min', price: '2 100 kr/klass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Kontoret · 45 min', price: '1 800 kr/klass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Kontoret · 30 min', price: '1 600 kr/klass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Konferens, kickoff & event', price: 'kontakta för offert', note: 'Pris baseras på antal deltagare, längd och plats.' },
    ]}
    detailsHeading="Format & praktisk information"
    detailsParagraphs={[
      { subheading: "Allmänt" },
      "Ni behöver bara ha ett utrymme som är tillräckligt stort. Har ni egna yogamattor är det perfekt. Behöver jag ta med utrustning tillkommer en avgift som vi kommer överens om i förväg, baserat på antal deltagare, avstånd och vad som behövs på plats.",
      "Säg till om gruppen vill byta om till träningskläder eller hellre köra direkt i det de har på sig. Jag formar klassen efter det.",
      { subheading: "Stockholm" },
      "Jag kommer till ert kontor eller er konferensanläggning, eller hjälper gärna till att hitta en lämplig yogasal. Vill ni hellre ha yoga på vattnet kan vi i stället boka en [SUP-yoga-session](/tjanster/sup-yoga) vid Sicklasjön. Regelbundna klasser på kontoret erbjuds endast i Stockholm.",
      { subheading: "Dalarna" },
      "Jag reser till Vansbro, Falun, Borlänge, Ludvika, Mora, Leksand och Rättvik, och området däremellan, för konferenser, kickoffs och företagsevent på er konferensanläggning eller utomhus.",
      { subheading: "Boka" },
      "Maila hello.yogawithcamilla@gmail.com med datum, antal deltagare, plats och typ av event för en offert."
    ]}
    ctaHeading="Boka företagsyoga eller event"
    ctaText="Hör av dig med era önskemål och jag sätter ihop ett förslag som passar ert event."
    faq={[
      {
        question: "Behöver deltagarna ha yogaerfarenhet?",
        answer: "Nej, klassen anpassas för alla nivåer. De flesta deltagare på företagsyoga är nybörjare, och det funkar utmärkt."
      },
      {
        question: "Vad kostar företagsyoga?",
        answer: "Regelbundna klasser på kontoret prissätts efter längd, se prislistan ovan. Konferenser, kickoffs och event prissätts individuellt baserat på antal deltagare, längd och plats. Behöver jag ta med utrustning diskuterar vi det separat."
      },
      {
        question: "Hur lång är en klass?",
        answer: "På kontoret är 30 eller 45 minuter populärast. Under en konferens passar 60 minuter på morgonen eller som eftermiddagspaus."
      },
      {
        question: "Vad behöver vi ordna?",
        answer: "Bara ett utrymme som är tillräckligt stort. Har ni egna yogamattor är det perfekt. Behöver ni att jag tar med utrustning kan vi prata om det utifrån gruppens storlek och plats."
      },
      {
        question: "Kan ni hålla yoga utomhus?",
        answer: "Ja, vi kan hålla utomhusyoga vid er plats eller SUP-yoga på Sickla sjö."
      },
      {
        question: "Hur bokar vi?",
        answer: "Maila hello.yogawithcamilla@gmail.com med datum, antal deltagare, plats och typ av event. Jag återkommer till er med tillgänglighet och en offert."
      }
    ]}
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Corporate Yoga in English | Stockholm & Dalarna",
      text: "Led in English by a 500-hour certified yoga teacher.\n\nIn Stockholm: regular office yoga classes, plus yoga for conferences, kickoffs and AWs.\n\nIn Dalarna: yoga for conferences, kickoffs and corporate events. I travel to Vansbro, Falun, Borlänge, Ludvika, Mora, Leksand and Rättvik, and the surrounding area.\n\nEmail hello.yogawithcamilla@gmail.com with date, group size, location and event type for a quote."
    }}
  />
);

export default ForetagsYoga;
