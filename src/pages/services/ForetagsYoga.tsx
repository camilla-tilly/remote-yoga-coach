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
    seoDescription="Yoga för konferenser, kickoffs och regelbundna klasser på kontoret i Stockholm och Dalarna. Öka teamets energi och välmående. Ingen förkunskap krävs."
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
      "Jag erbjuder företagsyoga i Stockholm och Dalarna: konferenser, kickoffs, AWs och regelbundna klasser på kontoret. Klassen hålls på engelska.",
      "Yogan funkar bra som teambuilding, en gemensam paus under konferensdagen, eller som ett återkommande inslag i ert friskvårdsprogram. Inga avancerade poser, inga prestationskrav.",
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
        text: "Återkommande yoga på ert kontor i Stockholm, veckovis eller varannan vecka."
      },
      {
        heading: "Teambuilding",
        text: "En gemensam yogaklass som faktiskt sänker tempot. Bra inslag på teamdagen, retreaten eller AW:n."
      },
      {
        heading: "Konferens i Dalarna",
        text: "Kombinera konferensen med yoga på altanen i Dalarna. Utomhus, i skogen."
      }
    ]}
    pricing={[
      { label: 'Kontoret · 60 min', price: '2 100 kr/pass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Kontoret · 45 min', price: '1 800 kr/pass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Kontoret · 30 min', price: '1 600 kr/pass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Konferens & event', price: 'kontakta för offert', note: 'Pris baseras på antal deltagare, längd och plats.' },
      { label: 'Kickoff & teambuilding', price: 'kontakta för offert', note: 'Skräddarsytt upplägg för er dag och er grupp.' },
    ]}
    detailsHeading="Format & praktisk information"
    detailsParagraphs={[
      "Klassen är vanligtvis 30–90 minuter. Ni behöver bara ha ett utrymme som är tillräckligt stort.",
      "Om ni inte har egna mattor tar jag med utrustning (mattor och block) för upp till 20 deltagare. För det tillkommer en kostnad utöver klasspriset, baserad på antal deltagare och avstånd. Har ni egna mattor är det ingen extra kostnad.",
      "I Stockholm kommer jag till er lokal, eller hjälper gärna till att hitta en lämplig yogasal. I Dalarna erbjuder jag företagsyoga i Falun, Borlänge och omnejd, på ert kontor, er konferensanläggning eller utomhus.",
      "Maila hello.yogawithcamilla@gmail.com med datum, antal deltagare, stad och typ av event för en offert."
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
        answer: "Regelbundna klasser på kontoret kostar från 1 600 kr/pass (30 min), 1 800 kr (45 min) eller 2 100 kr (60 min). Om ni inte har egna mattor tillkommer en kostnad för utrustning, baserad på antal deltagare och avstånd. Konferenser, kickoffs och event prissätts individuellt baserat på antal deltagare, längd och plats."
      },
      {
        question: "Hur lång är en klass?",
        answer: "Vanligtvis 30–90 minuter. På kontoret är 30 eller 45 minuter populärast. Under en konferens passar ofta 60 minuter på morgonen eller efter lunch."
      },
      {
        question: "Vad behöver vi ordna?",
        answer: "Bara ett utrymme som är tillräckligt stort. Om ni har egna yogamattor är det perfekt. Annars tar jag med mattor och block för upp till 20 deltagare, mot en separat kostnad utöver klasspriset."
      },
      {
        question: "Kan ni hålla yoga utomhus?",
        answer: "Ja, utomhusyoga funkar utmärkt för konferenser i Dalarna. Jag erbjuder klasser på altanen i skogen eller på er konferensanläggning."
      },
      {
        question: "Hur bokar vi?",
        answer: "Maila hello.yogawithcamilla@gmail.com med datum, antal deltagare, stad och typ av event. Jag svarar med tillgänglighet och en offert inom 24 timmar."
      }
    ]}
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Corporate Yoga in English | Stockholm & Dalarna",
      text: "Corporate yoga, conference yoga and kickoff sessions in Stockholm and Dalarna, Sweden. Led in English by a 500-hour certified yoga teacher. Regular office classes, conference sessions, kickoffs and team-building events for corporate teams. Email hello.yogawithcamilla@gmail.com to book."
    }}
  />
);

export default ForetagsYoga;
