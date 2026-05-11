import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Privata Event & Yoga Retreat', href: '/tjanster/privata-event' },
  { label: 'Hönsyoga', href: '/tjanster/honsyoga' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Företagsyoga, Konferensyoga, Kickoff, AW, Sommaravslutning & Teambuilding i Stockholm & Dalarna",
  "description": "Yoga för företag, konferenser, kickoffs, AWs, sommaravslutningar, teambuilding och företagsdagar i Stockholm och Dalarna. Halvdag och heldag i naturen i Dalarna med yoga, vandring, trail run och fika. Öka teamets energi, fokus och välmående med en professionell yogaklass skräddarsydd för er organisation.",
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
    seoTitle="Företagsyoga, Konferensyoga, Kickoff, AW & Teambuilding Stockholm & Dalarna | Yoga med Camilla"
    seoDescription="Företagsyoga i Stockholm: regelbundna klasser på kontoret samt konferenser, kickoffs, AWs och sommaravslutningar. I Dalarna: yoga för konferenser, kickoffs, teambuilding och halvdag eller heldag i naturen med yoga, vandring och trail run."
    canonical="https://yogawithcamilla.se/tjanster/foretagsyoga"
    ogImage="https://yogawithcamilla.se/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.jpg"
    breadcrumbLabel="Företagsyoga"
    heroTag="Företag, Konferens, Kickoff, AW & Teambuilding"
    heroHeading="Företagsyoga och teambuilding i Stockholm"
    heroSubtitle="Yoga för konferenser, kickoffs, AWs, sommaravslutningar, teambuilding och regelbundna klasser på kontoret. I Dalarna även halvdag och heldag i naturen. Alla kan delta, ingen erfarenhet krävs."
    heroImage="/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.jpg"
    heroImageAlt="Lugn och fokus, yoga för konferens och företagsevent"
    introHeading="Ett andrum för teamet"
    introParagraphs={[
      "I Stockholm erbjuder jag regelbunden yoga på kontoret samt konferenser, kickoffs, AWs och sommaravslutningar. I Dalarna håller jag yoga för konferenser, kickoffs, teambuilding och företagsevent, samt halvdag och heldag i naturen med yoga, vandring eller trail run och fika. Klassen hålls på engelska.",
      "Unna era anställda en stund att andas, sänka tempot och släppa spänningar från långa möten. Stressen sjunker, tankarna klarnar och fokus blir skarpare. En gemensam stund där ingen behöver prestera.",
      "Ingen yogaerfarenhet krävs. Klassen anpassas efter gruppen."
    ]}
    highlights={[
      {
        heading: "Konferensyoga",
        text: "Yogapaus mitt i konferensdagen för att rensa huvudet och skärpa fokus."
      },
      {
        heading: "Kickoff, AW & sommaravslutning",
        text: "Yoga som en del av kickoff-programmet, AW eller sommaravslutningen. Funkar bra som gemensam teamaktivitet där ingen behöver prestera."
      },
      {
        heading: "Halvdag eller heldag i Dalarna",
        text: "Företagsdag i naturen med yoga, vandring eller trail run, mindfulness, fika och lunch. Basläger på altanen, skogen runt omkring. För team upp till 10, eller större grupper på offert."
      },
      {
        heading: "Regelbundna klasser",
        text: "Återkommande yoga på ert kontor i Stockholm, veckovis eller varannan vecka. (Endast Stockholm.)"
      }
    ]}
    pricing={[
      { label: 'Kontoret · 60 min', price: '2 100 kr/klass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Kontoret · 45 min', price: '1 800 kr/klass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Kontoret · 30 min', price: '1 600 kr/klass', note: 'Regelbunden yoga på kontoret, 1 gång/vecka månadsvis.' },
      { label: 'Konferens, kickoff, AW & sommaravslutning', price: 'kontakta för offert', note: 'Pris baseras på antal deltagare, längd och plats.' },
      { label: 'Halvdag eller heldag i Dalarna', price: 'kontakta för offert', note: 'Företagsdag i naturen, yoga plus vandring eller trail run, fika och eventuell lunch.' },
    ]}
    detailsHeading="Format & praktisk information"
    detailsParagraphs={[
      { subheading: "Allmänt" },
      "Ni behöver bara ha ett utrymme som är tillräckligt stort. Har ni egna yogamattor är det perfekt. Behöver jag ta med utrustning tillkommer en avgift som vi kommer överens om i förväg, baserat på antal deltagare, avstånd och vad som behövs på plats.",
      "Säg till om gruppen vill byta om till träningskläder eller hellre köra direkt i det de har på sig. Jag formar klassen efter det.",
      { subheading: "Stockholm" },
      "Jag kommer till ert kontor eller er konferensanläggning, eller hjälper gärna till att hitta en lämplig yogasal. Vill ni hellre ha yoga på vattnet kan vi i stället boka en [SUP-yoga-session](/tjanster/sup-yoga) vid Sicklasjön. Regelbundna klasser på kontoret erbjuds endast i Stockholm.",
      "Funderar ni på fler alternativ för teamet? Guiden till [teambuilding i Stockholm](/blogg/teambuilding-aktiviteter-stockholm) går igenom sju aktiviteter med priser och vad som passar vem.",
      { subheading: "Dalarna" },
      "Jag reser till Vansbro, Falun, Borlänge, Ludvika, Mora, Leksand och Rättvik, och området däremellan, för konferenser, kickoffs, teambuilding och företagsevent på er konferensanläggning eller utomhus. För team som vill ut i naturen erbjuder jag även halvdag och heldag med yoga, vandring eller trail run, fika och lunch, med basläger på altanen vid skogsstugan.",
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
        answer: "Regelbundna klasser på kontoret prissätts efter längd, se prislistan ovan. Konferenser, kickoffs, AWs, sommaravslutningar och halvdag eller heldag i Dalarna prissätts individuellt baserat på antal deltagare, längd och plats. Behöver jag ta med utrustning diskuterar vi det separat."
      },
      {
        question: "Erbjuder ni halvdag eller heldag i naturen för team?",
        answer: "Ja, i Dalarna. En företagsdag i naturen med yoga, vandring eller trail run, mindfulness, fika och eventuell lunch. Basläger på altanen vid skogsstugan, skogen runt omkring. Funkar för team upp till 10, större grupper på offert. Hör av dig med datum och gruppstorlek."
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
      text: "Led in English by a 500-hour certified yoga teacher.\n\nIn Stockholm: regular office yoga classes, plus yoga for conferences, kickoffs, after-works and summer send-offs.\n\nIn Dalarna: yoga for conferences, kickoffs, teambuilding and corporate events, plus half-day and full-day team days in nature combining yoga, hiking or trail running, fika and lunch (basecamp at the forest cabin deck). I travel to Vansbro, Falun, Borlänge, Ludvika, Mora, Leksand and Rättvik, and the surrounding area.\n\nEmail hello.yogawithcamilla@gmail.com with date, group size, location and event type for a quote."
    }}
  />
);

export default ForetagsYoga;
