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
        text: "Yogapaus under konferensdagen: morgon, lunch eller eftermiddag."
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
        text: "En gemensam yogaklass som faktiskt sänker tempot. Bra inslag på teamdagen, retreaten eller AW:n."
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
      "Ni väljer längd: 30, 45 eller 60 minuter. Ni behöver bara ha ett utrymme som är tillräckligt stort.",
      "Har ni egna yogamattor är det perfekt. Om jag behöver ta med utrustning diskuterar vi det separat, baserat på antal deltagare, avstånd och vad som behövs på plats.",
      "Vi pratar också igenom kläder innan. Ska klassen funka i det folk redan har på sig på kontoret, eller hinner ni byta om till träningskläder? Båda funkar, jag anpassar rörelserna efter det.",
      "I Stockholm kommer jag till er lokal, eller hjälper gärna till att hitta en lämplig yogasal. Regelbundna klasser på kontoret erbjuds endast i Stockholm. I Dalarna reser jag till Vansbro, Falun, Borlänge, Ludvika, Mora, Leksand och Rättvik, och området däremellan, för konferenser, kickoffs och företagsevent på er konferensanläggning eller utomhus.",
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
        answer: "Regelbundna klasser på kontoret kostar från 1 600 kr/klass (30 min), 1 800 kr (45 min) eller 2 100 kr (60 min). Om ni behöver att jag tar med utrustning diskuterar vi det separat, eftersom priset beror på antal deltagare, avstånd och vad som behövs på plats. Konferenser, kickoffs och event prissätts individuellt baserat på antal deltagare, längd och plats."
      },
      {
        question: "Hur lång är en klass?",
        answer: "Vanligtvis 30, 45 eller 60 minuter. På kontoret är 30 eller 45 minuter populärast. Under en konferens passar ofta 60 minuter på morgonen eller som eftermiddagspaus."
      },
      {
        question: "Vad behöver vi ordna?",
        answer: "Bara ett utrymme som är tillräckligt stort. Har ni egna yogamattor är det perfekt. Behöver ni att jag tar med utrustning kan vi prata om det utifrån gruppens storlek och plats."
      },
      {
        question: "Kan ni hålla yoga utomhus?",
        answer: "Ja. I Dalarna funkar utomhusyoga utmärkt, på altanen i skogen eller vid er konferensanläggning. I Stockholm kommer jag till er plats och håller klassen på gräsmattan eller en annan passande utomhusyta. Vill gruppen hellre ha yoga på vattnet kan vi i stället boka en SUP-yoga-session vid Sickla Strand."
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
