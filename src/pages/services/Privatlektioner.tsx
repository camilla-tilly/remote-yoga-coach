import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Företagsyoga & Workshops', href: '/tjanster/foretagsyoga' },
  { label: 'Mini Retreat & Upplevelser', href: '/tjanster/mini-retreat' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
  { label: 'Privata Event', href: '/tjanster/privata-event' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Privata Yogalektioner, Yoga för Löpare & Yoga in English",
  "description": "Privata yogalektioner i Stockholm och Dalarna. Specialisering i yoga för löpare. Online sessioner via Zoom på engelska. Forest cabin yoga i Dalarna för besökare och expats.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Stockholm", "Dalarna", "Worldwide"],
  "url": "https://yogawithcamilla.se/tjanster/privatlektioner"
};

const Privatlektioner = () => {
  const { hash } = useLocation();

  // Set html lang="en" when English sections are targeted
  useEffect(() => {
    if (hash === '#online' || hash === '#english') {
      const prev = document.documentElement.lang || 'sv';
      document.documentElement.lang = 'en';
      return () => { document.documentElement.lang = prev; };
    }
  }, [hash]);

  return (
  <ServicePageLayout
    seoTitle="Privata Yogalektioner, Yoga för Löpare & Yoga in English | Yoga med Camilla"
    seoDescription="Privata yogalektioner i Stockholm och Dalarna. Yoga för löpare. Online via Zoom. English-speaking yoga at a forest cabin in Dalarna for visitors and expats."
    canonical="https://yogawithcamilla.se/tjanster/privatlektioner"
    ogImage="https://yogawithcamilla.se/images/IMG_5788.JPG"
    breadcrumbLabel="Privatlektioner"
    heroTag="Privat Yoga · Live, Online & in English"
    heroHeading="Privata Yogalektioner"
    heroSubtitle="En-till-en yoga med full fokus på dig. I Stockholm, Dalarna eller online via Zoom. Alla lektioner hålls på engelska."
    heroImage="/images/IMG_5788.JPG"
    heroImageAlt="Privat yogalektion med personlig instruktion"
    introHeading="Yoga anpassad helt för dig"
    introParagraphs={[
      "I en grupplektion gäller ett gemensamt tempo. I en privat lektion gäller ditt. Jag fokuserar på det du vill utveckla: rörlighet, styrka, andning, meditation eller återhämtning.",
      "Privatlektioner i Stockholm (yogasal eller lämplig lokal), i Dalarna (på altanen vid stugan i skogen) eller online via Zoom, var du än befinner dig i världen. Alla lektioner hålls på engelska."
    ]}
    highlights={[
      {
        heading: "Nybörjare",
        text: "Aldrig provat yoga? En privatlektion är ett bra sätt att komma igång i din egen takt."
      },
      {
        heading: "Fördjupning",
        text: "Redan yogare? Jag hjälper dig förfina teknik och gå djupare i hur andning och rörelse samverkar."
      },
      {
        heading: "Yoga för Löpare",
        text: "Jag springer själv ultramarathon och bygger yogan specifikt runt det löpare behöver: höfter, hälsenor, ländrygg och symmetri. Privat session eller för din löparklubb."
      },
      {
        heading: "Forest Cabin Yoga i Dalarna",
        text: "Yoga på altanen vid stugan i skogen, omgiven av svensk natur. Perfekt för besökare, turister och expats som söker en lugn, unik upplevelse. May–September utomhus, året runt inomhus."
      },
      {
        heading: "Online via Zoom",
        text: "Privata en-till-en lektioner via Zoom, på engelska. Jag ser dig, korrigerar i realtid och anpassar klassen. Alla tidszoner. Populärt bland expats och löpare."
      },
      {
        heading: "Meditation & andning",
        text: "Pranayama, mindfulness eller meditation, som en del av eller separat från den fysiska yogan."
      }
    ]}
    pricing={[
      {
        label: "Privatlektion 60 min",
        price: "kontakta för pris",
        note: "Stockholm eller Dalarna. Alla nivåer."
      },
      {
        label: "Privatlektion 90 min",
        price: "kontakta för pris",
        note: "Mer tid för fördjupning."
      },
      {
        label: "Online 60 min (Zoom)",
        price: "kontakta för pris",
        note: "På engelska, alla tidszoner."
      },
      {
        label: "Paket · 5 lektioner",
        price: "kontakta för pris",
        note: "Rabatterat. Live eller online. Giltigt i 3 månader."
      },
      {
        label: "Paket · 10 lektioner",
        price: "kontakta för pris",
        note: "Bäst värde. Live eller online. Giltigt i 6 månader."
      },
      {
        label: "Löparklubb / grupp",
        price: "kontakta för pris",
        note: "Upp till 15 deltagare, 60 min, jag kommer till er."
      }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "60 eller 90 minuter. Enstaka lektion, paket om 5 eller 10, eller regelbunden veckopraktik.",
      "Stockholm: yogasal eller lämplig plats. Dalarna: altanen vid stugan i Dala-Järna (ca 3,5 timmar från Stockholm). Online: via Zoom, du behöver en matta och golvyta.",
      "Forest cabin yoga i Dalarna passar utmärkt för besökare och turister. Kombinera gärna med en skogsvandring och fika. Grupper upp till 6 personer. Utomhus maj–september, inomhus året runt.",
      "För online-lektioner erbjuder jag ett kostnadsfritt introduktionssamtal (15 min) där vi går igenom dina mål och sätter upp ett upplägg.",
      "Maila hello.yogawithcamilla@gmail.com för bokning och priser."
    ]}
    ctaHeading="Starta din personliga yogapraktik"
    ctaText="Maila mig med dina mål och önskemål så hittar jag ett upplägg som fungerar för dig, oavsett om du vill träna live, i Dalarna eller online."
    structuredData={structuredData}
    relatedServices={relatedServices}
    faq={[
      {
        question: "Behöver jag ha yogaerfarenhet?",
        answer: "Nej, de flesta som bokar privatlektioner är nybörjare. Jag anpassar helt efter din nivå."
      },
      {
        question: "Yoga för löpare, hur ofta bör jag göra det?",
        answer: "För de flesta löpare räcker 2–3 korta sessioner per vecka (15–30 min) för att märka skillnad i rörlighet och återhämtning. Vi kan bygga ett program efter din träning."
      },
      {
        question: "Kan ni komma till vår löparklubb?",
        answer: "Ja. Jag kommer gärna till klubbar i Stockholm och Dalarna med 45–60 min återhämtningsyoga efter ett löppass."
      },
      {
        question: "Hur funkar online-lektionerna?",
        answer: "Via Zoom, på engelska. Du behöver en matta, golvyta och internetuppkoppling. Jag erbjuder ett kostnadsfritt 15-min introduktionssamtal först."
      },
      {
        question: "How do I get to the cabin in Dalarna?",
        answer: "The cabin is in Dala-Järna, about 3.5 hours by car or train from Stockholm. The nearest station is Vansbro. I can help coordinate logistics when you book."
      },
      {
        question: "What's the best time of year to visit Dalarna?",
        answer: "May to September is ideal for outdoor yoga on the deck. Indoor private bookings are available year-round."
      }
    ]}
    englishKeywords={{
      heading: "Private Yoga in English: Stockholm, Dalarna & Online",
      text: "Private one-on-one yoga sessions in Stockholm and Dalarna, Sweden. Forest cabin yoga on a wooden deck surrounded by Swedish pine forest, perfect for visitors, tourists, and expats looking for yoga in English. Specialising in yoga for runners (recovery, mobility and injury prevention), led by a 500-hour certified teacher and ultramarathon runner originally from Australia. Online sessions available worldwide via Zoom. Combine forest yoga with a guided nature walk and fika (Swedish coffee break) for a full day experience. Groups up to 6 people, all equipment included. Free 15-minute intro call. Email hello.yogawithcamilla@gmail.com to book."
    }}
  />
  );
};

export default Privatlektioner;
