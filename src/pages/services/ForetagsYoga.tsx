import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices: { label: string; href: string }[] = [];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Företagsyoga, Konferensyoga, Kickoff, AW, Sommaravslutning & Teambuilding i Stockholm",
  "description": "Yoga för företag, konferenser, kickoffs, AWs, sommaravslutningar och teambuilding i Stockholm. Öka teamets energi, fokus och välmående med en professionell yogaklass skräddarsydd för er organisation.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/foretagsyoga"
};

const ForetagsYoga = () => (
  <ServicePageLayout
    seoTitle="Företagsyoga Stockholm | Yoga med Camilla"
    seoDescription="Företagsyoga i Stockholm anpassad efter era behov. Andningsworkshop, stolsyoga, full flow eller skräddarsytt. Konferens, kickoff, AW. Kontakta för offert."
    canonical="https://yogawithcamilla.se/tjanster/foretagsyoga"
    ogImage="https://yogawithcamilla.se/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.jpg"
    breadcrumbLabel="Företagsyoga"
    heroTag="Företag, Konferens, Kickoff, AW & Teambuilding"
    heroHeading="Företagsyoga och teambuilding i Stockholm"
    heroSubtitle="Yoga för konferenser, kickoffs, AWs, sommaravslutningar, teambuilding och regelbundna klasser på kontoret. Alla kan delta, ingen erfarenhet krävs."
    heroImage="/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.jpg"
    heroImageAlt="Lugn och fokus, yoga för konferens och företagsevent"
    introHeading="Ett andrum för teamet"
    introParagraphs={[
      "I Stockholm erbjuder jag regelbunden yoga på kontoret samt konferenser, kickoffs, AWs och sommaravslutningar. Klassen hålls på engelska.",
      "Unna era anställda en stund att andas, sänka tempot och släppa spänningar från långa möten. Stressen sjunker, tankarna klarnar och fokus blir skarpare. En gemensam stund där ingen behöver prestera.",
      "Ingen yogaerfarenhet krävs. Klassen anpassas efter gruppen."
    ]}
    highlights={[
      {
        heading: "Andningsworkshop",
        text: "30 minuter fokus på andningstekniker. Inga mattor, inget ombyte. Passar perfekt som paus mitt i en konferensdag, ett möte eller en lång arbetsdag."
      },
      {
        heading: "Stolsyoga och kontorsyoga",
        text: "Yoga anpassad för kontoret, på stolar eller stående. Ingen behöver byta om eller ha med sig något. Lätt att slot in i dagen."
      },
      {
        heading: "Full yogaklass med mattor",
        text: "Traditionell klass med rörelser, flöde och avslappning. Ni behöver bara ett utrymme som rymmer en matta per person."
      },
      {
        heading: "Skräddarsytt efter era behov",
        text: "Fokus på prestation, mental hälsa, burnout-prevention eller energipåfyllning. Hör av er med era önskemål och vi hittar rätt format tillsammans."
      }
    ]}
    pricing={[
      { label: 'Alla format', price: 'kontakta för offert', note: 'Pris beror på format, längd, antal deltagare och plats.' },
    ]}
    detailsHeading="Format & praktisk information"
    detailsParagraphs={[
      { subheading: "Allmänt" },
      "Ni behöver bara ha ett utrymme som är tillräckligt stort. Har ni egna yogamattor är det perfekt. Behöver jag ta med utrustning tillkommer en avgift som vi kommer överens om i förväg, baserat på antal deltagare, avstånd och vad som behövs på plats.",
      "Säg till om gruppen vill byta om till träningskläder eller hellre köra direkt i det de har på sig. Jag formar klassen efter det.",
      { subheading: "Stockholm" },
      "Jag kommer till ert kontor eller er konferensanläggning, eller hjälper gärna till att hitta en lämplig yogasal. Regelbundna klasser på kontoret erbjuds i Stockholm.",
      "Funderar ni på fler alternativ för teamet? Guiden till [teambuilding i Stockholm](/blogg/teambuilding-aktiviteter-stockholm) går igenom sju aktiviteter och vad som passar vem.",
      { subheading: "Boka" },
      "Maila hello.yogawithcamilla@gmail.com med era önskemål, antal deltagare, plats och datum för en offert."
    ]}
    ctaHeading="Boka företagsyoga eller event"
    ctaText="Hör av dig med era önskemål och jag sätter ihop ett förslag som passar ert team."
    faq={[
      {
        question: "Behöver deltagarna ha yogaerfarenhet?",
        answer: "Nej, klassen anpassas för alla nivåer. De flesta deltagare på företagsyoga är nybörjare, och det funkar utmärkt."
      },
      {
        question: "Vad kostar företagsyoga?",
        answer: "Det beror på vad ni behöver. En kort andningsworkshop ser helt annorlunda ut mot en full yogaklass med mattor för 20 personer. Mejla med era önskemål så sätter jag ihop ett förslag."
      },
      {
        question: "Hur lång är en klass?",
        answer: "Det beror på formatet. En andningsworkshop kan vara 30 minuter. En full yogaklass är oftast 45 till 60 minuter. Vi anpassar efter vad som passar er dag."
      },
      {
        question: "Vad behöver vi ordna?",
        answer: "Bara ett utrymme som är tillräckligt stort. Har ni egna yogamattor är det perfekt. Behöver ni att jag tar med utrustning kan vi prata om det utifrån gruppens storlek och plats."
      },
      {
        question: "Kan ni hålla yoga utomhus?",
        answer: "Ja, vi kan hålla utomhusyoga vid er plats om ni har en lämplig yta."
      },
      {
        question: "Hur bokar vi?",
        answer: "Maila hello.yogawithcamilla@gmail.com med era önskemål, datum, antal deltagare och plats. Jag återkommer med tillgänglighet och en offert."
      }
    ]}
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Corporate Yoga in English | Stockholm",
      text: "Led in English by a 500-hour certified yoga teacher.\n\nIn Stockholm: office yoga, breathing workshops, chair yoga, conference sessions, kickoffs, after-works and summer send-offs. Every booking is tailored to your team's needs.\n\nEmail hello.yogawithcamilla@gmail.com with your wishes, date, group size and location for a quote."
    }}
  />
);

export default ForetagsYoga;
