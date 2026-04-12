import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Privata Event', href: '/tjanster/privata-event' },
  { label: 'Mini Retreat & Upplevelser', href: '/tjanster/mini-retreat' },
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Företagsyoga, Konferensyoga & Workshops i Stockholm & Dalarna",
  "description": "Yoga för företag, konferenser och tematiska workshops i Stockholm och Dalarna. Öka teamets energi, fokus och välmående med en professionell yogaklass skräddarsydd för er organisation.",
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
    seoTitle="Företagsyoga, Konferensyoga & Workshops Stockholm & Dalarna | Yoga med Camilla"
    seoDescription="Yoga för konferenser, företagsevent och tematiska workshops i Stockholm och Dalarna. Öka teamets energi och välmående — ingen förkunskap krävs."
    canonical="https://yogawithcamilla.se/tjanster/foretagsyoga"
    ogImage="https://yogawithcamilla.se/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.png"
    breadcrumbLabel="Företagsyoga & Workshops"
    heroTag="Företag, Konferens & Workshops"
    heroHeading="Företagsyoga & Workshops"
    heroSubtitle="Yoga för konferenser, kickoffs och regelbundna klasser på kontoret. Tematiska workshops i breathwork, yin och återhämtning. Alla kan delta, ingen erfarenhet krävs."
    heroImage="/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.png"
    heroImageAlt="Lugn och fokus – yoga för konferens och företagsevent"
    introHeading="Rörelse som bryter av"
    introParagraphs={[
      "Jag erbjuder företagsyoga i Stockholm och Dalarna — konferenser, kickoffs, AWs, retreats och regelbundna klasser på kontoret. Klassen hålls på engelska.",
      "Vill ni gå djupare? Jag håller också tematiska workshops — halvdag eller heldag — i breathwork, yin, återhämtning eller yoga för löpare. Perfekt som en del av en teamdag, konferens eller som ett eget event.",
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
      },
      {
        heading: "Workshops — Breathwork & Meditation",
        text: "En 2–3 timmars workshop i andningstekniker, pranayama och meditation. Inga förkunskaper krävs — lämpligt för team, retreats och privata grupper."
      },
      {
        heading: "Workshops — Yin & Återhämtning",
        text: "En långsam workshop med längre positioner och fokus på det parasympatiska nervsystemet. Perfekt för team som lever i högt tempo."
      }
    ]}
    pricing={[
      { label: 'Kontoret — 60 min', price: '1 500 kr/pass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Kontoret — 45 min', price: '1 200 kr/pass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Kontoret — 30 min', price: '1 000 kr/pass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Konferens & event', price: 'kontakta för offert', note: 'Pris baseras på antal deltagare, längd och plats.' },
      { label: 'Workshop halvdag (3 tim)', price: 'kontakta för pris', note: 'Upp till 12 personer, utrustning ingår.' },
      { label: 'Workshop heldag (6 tim)', price: 'kontakta för pris', note: 'Större grupper, flera block, lunchrast.' },
    ]}
    detailsHeading="Format & praktisk information"
    detailsParagraphs={[
      "Klassen är vanligtvis 30–90 minuter. Jag tar med all utrustning (mattor, block) för upp till 20 deltagare. Ni behöver bara ha ett utrymme som är tillräckligt stort.",
      "Workshops är längre och mer tematiska — halvdag ca 3 timmar, heldag ca 6 timmar. Ni väljer fokus: andning, rörlighet, återhämtning eller ett skräddarsytt tema. Workshops passar bra som en del av en teamdag, konferens eller som ett separat event.",
      "I Stockholm kommer jag till er lokal, eller hjälper gärna till att hitta en lämplig yogasal. I Dalarna erbjuder jag företagsyoga i Falun, Borlänge och omnejd — på ert kontor, er konferensanläggning eller utomhus.",
      "Maila hello.yogawithcamilla@gmail.com med datum, antal deltagare, stad och typ av event för en offert."
    ]}
    ctaHeading="Boka företagsyoga eller workshop"
    ctaText="Hör av dig med era önskemål och jag sätter ihop ett förslag som passar ert event."
    faq={[
      {
        question: "Behöver deltagarna ha yogaerfarenhet?",
        answer: "Nej, klassen anpassas för alla nivåer. De flesta deltagare på företagsyoga är nybörjare — och det funkar utmärkt."
      },
      {
        question: "Vad kostar företagsyoga?",
        answer: "Regelbundna klasser på kontoret kostar från 1 000 kr/pass (30 min). Konferenser och event prissätts individuellt baserat på antal deltagare, längd och plats."
      },
      {
        question: "Hur lång är en workshop?",
        answer: "Halvdag är cirka 3 timmar och heldag cirka 6 timmar inklusive pauser. Jag kan också bygga en kortare 2-timmars session om det passar bättre."
      },
      {
        question: "Kan ni kombinera flera teman i en workshop?",
        answer: "Ja, ofta. En heldag kan till exempel kombinera breathwork, yin yoga och en kort vandring. Hör av er så skräddarsyr vi ihop det."
      },
      {
        question: "Vad behöver vi ordna?",
        answer: "Bara ett utrymme som är tillräckligt stort. Jag tar med mattor, block och all utrustning för upp till 20 deltagare."
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
      heading: "Corporate Yoga & Workshops in English — Stockholm & Dalarna",
      text: "Corporate yoga, conference yoga and themed workshops in Stockholm and Dalarna, Sweden. Led in English by a 500-hour certified yoga teacher. Regular office classes, conference sessions, kickoffs, and half-day or full-day workshops in breathwork, yin, recovery yoga, and yoga for runners. Ideal for corporate teams, retreats, and private groups. Email hello.yogawithcamilla@gmail.com to book."
    }}
  />
);

export default ForetagsYoga;
