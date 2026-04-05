import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Mini Yoga Retreat', href: '/tjanster/mini-retreat' },
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
  { label: 'Trail Run + Yoga', href: '/tjanster/trail-run-yoga' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Företagsyoga & Konferensyoga i Stockholm & Dalarna",
  "description": "Yoga för företag och konferenser i Stockholm och Dalarna. Öka teamets energi, fokus och välmående med en professionell yogaklass skräddarsydd för er organisation.",
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
    seoTitle="Företagsyoga & Konferensyoga Stockholm & Dalarna | Yoga med Camilla"
    seoDescription="Yoga för konferenser och företagsevent i Stockholm och Dalarna. Öka teamets energi och välmående med en professionell yogaklass – ingen förkunskap krävs."
    canonical="https://yogawithcamilla.se/tjanster/foretagsyoga"
    heroTag="Företag & Konferens"
    heroHeading="Företagsyoga & Konferensyoga"
    heroSubtitle="Yoga för konferenser, kickoffs och regelbundna klasser på kontoret. Alla kan delta, ingen erfarenhet krävs."
    heroImage="/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.png"
    heroImageAlt="Lugn och fokus – yoga för konferens och företagsevent"
    introHeading="Rörelse som bryter av"
    introParagraphs={[
      "Jag erbjuder företagsyoga i Stockholm och Dalarna — konferenser, kickoffs, AWs, retreats och regelbundna klasser på kontoret. Klassen hålls på engelska.",
      "Ingen yogaerfarenhet krävs. Klassen anpassas efter gruppen."
    ]}
    highlights={[
      {
        heading: "Konferensyoga",
        text: "Yogapaus under konferensdagen — morgon, lunch eller eftermiddag."
      },
      {
        heading: "Kickoff & AW",
        text: "Yoga som en del av kickoff-programmet. Funkar bra som gemensam teamaktivitet."
      },
      {
        heading: "Regelbundna klasser",
        text: "Återkommande yoga på ert kontor i Stockholm — veckovis eller varannan vecka."
      },
      {
        heading: "Konferens i Dalarna",
        text: "Kombinera konferensen med yoga på altanen i Dalarna. Utomhus, i skogen."
      }
    ]}
    pricing={[
      { label: 'Kontoret — 60 min', price: '1 500 kr/pass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Kontoret — 45 min', price: '1 200 kr/pass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Kontoret — 30 min', price: '1 000 kr/pass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Konferens & event', price: 'kontakta för offert', note: 'Pris baseras på antal deltagare, längd och plats.' },
    ]}
    detailsHeading="Format & praktisk information"
    detailsParagraphs={[
      "Klassen är vanligtvis 30–90 minuter. Jag tar med all utrustning (mattor, block) för upp till 20 deltagare. Ni behöver bara ha ett utrymme som är tillräckligt stort.",
      "I Stockholm kommer jag till er lokal, eller hjälper gärna till att hitta en lämplig yogasal. I Dalarna erbjuder jag företagsyoga i Falun, Borlänge och omnejd — på ert kontor, er konferensanläggning eller utomhus.",
      "Maila hello.yogawithcamilla@gmail.com med datum, antal deltagare, stad och typ av event för en offert."
    ]}
    ctaHeading="Boka företagsyoga"
    ctaText="Hör av dig med era önskemål och jag sätter ihop ett förslag som passar ert event."
    structuredData={structuredData}
    relatedServices={relatedServices}
  />
);

export default ForetagsYoga;
