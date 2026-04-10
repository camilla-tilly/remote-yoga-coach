import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Trail Run + Yoga', href: '/tjanster/trail-run-yoga' },
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
  { label: 'Yoga Workshop', href: '/tjanster/yoga-workshop' },
  { label: 'Online Yoga', href: '/tjanster/online-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Yoga för Löpare i Stockholm & Dalarna",
  "description": "Återhämtningsyoga, rörlighetsträning och skadeförebyggande yoga för löpare. Privata sessioner och grupp i Stockholm eller Dalarna. Online-sessioner på engelska.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna", "Stockholm", "Worldwide"],
  "url": "https://yogawithcamilla.se/tjanster/yoga-for-lopare"
};

const YogaForLopare = () => (
  <ServicePageLayout
    seoTitle="Yoga för Löpare Stockholm & Dalarna – Återhämtningsyoga | Yoga med Camilla"
    seoDescription="Yoga för löpare i Stockholm och Dalarna. Återhämtning, rörlighet och skadeförebyggande yoga för dig som springer. Privata sessioner, grupp och online."
    canonical="https://yogawithcamilla.se/tjanster/yoga-for-lopare"
    ogImage="https://yogawithcamilla.se/lovable-uploads/yoga-outdoor-pose.jpg"
    breadcrumbLabel="Yoga för Löpare"
    heroTag="Yoga & Löpning"
    heroHeading="Yoga för Löpare"
    heroSubtitle="Återhämtning, rörlighet och skadeförebyggande yoga — byggd specifikt för dig som springer. Privat, i grupp eller online."
    introHeading="Yoga som faktiskt hjälper löpningen"
    introParagraphs={[
      "Löpning belastar höfter, hälsenor, ländrygg och quadriceps hårt. Utan rörlighet och återhämtning byggs spänningar som förr eller senare blir skador.",
      "Jag springer själv — ultramarathondistans — och bygger yogan specifikt runt det löpare behöver. Inga komplicerade positioner. Fokus på rörlighet, symmetri och nervsystemsåterhämtning.",
      "Jag håller sessionerna på svenska eller engelska, privat eller i grupp, i Stockholm, Dalarna eller online via Zoom."
    ]}
    highlights={[
      {
        heading: "Privat session",
        text: "En-till-en session där vi tittar på din rörelse, identifierar begränsningar och bygger en kort rutin du kan använda hemma. 60–75 minuter."
      },
      {
        heading: "Löparklubb / grupp",
        text: "Yoga för hela klubben — 45–60 min återhämtningsyoga efter ett löppass, eller en rörlighetsklass som uppvärmning inför ett race. Jag kommer till er."
      },
      {
        heading: "Trail Run + Yoga",
        text: "Kombinera en guidad trail run i Nacka Naturreservat med en återhämtningsyoga efteråt. Halvdag för grupper och företag."
      },
      {
        heading: "Online sessions",
        text: "Bor du inte i Stockholm eller Dalarna? Boka en privat session via Zoom. Jag kan guida dig genom ett program anpassat efter din träning och dina mål."
      }
    ]}
    pricing={[
      {
        label: "Privat session",
        price: "kontakta för pris",
        note: "En-till-en, 60–75 min, hos dig eller hos mig."
      },
      {
        label: "Löparklubb / grupp",
        price: "kontakta för pris",
        note: "Upp till 15 deltagare, 60 min, jag kommer till er."
      },
      {
        label: "Trail Run + Yoga",
        price: "kontakta för pris",
        note: "Halvdag. Se sida för trail run + yoga för fullständigt upplägg."
      }
    ]}
    ctaHeading="Boka yoga för löpare"
    ctaText="Maila mig med din träningsbakgrund och vad du vill fokusera på — så bygger jag en session runt det."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Yoga for Runners — Stockholm, Dalarna & Online",
      text: "Recovery, mobility and injury-prevention yoga for runners. Private sessions, group classes for running clubs, and online one-on-one sessions via Zoom. Led in English by a 500-hour certified yoga teacher and ultramarathon runner based in Sweden. Email hello.yogawithcamilla@gmail.com to book."
    }}
    faq={[
      {
        question: "Hur ofta bör en löpare göra yoga?",
        answer: "För de flesta löpare räcker 2–3 korta sessioner per vecka (15–30 min) för att märka skillnad i rörlighet och återhämtning. Vi kan bygga ett program efter din träning."
      },
      {
        question: "Kommer yoga göra mig stelare eller svagare?",
        answer: "Nej. Yoga för löpare handlar om kontrollerad rörlighet och aktivering — inte djupa stretchar som riskerar att försvaga senor. Vi arbetar med det löpkroppen behöver."
      },
      {
        question: "Kan ni komma till vår löparklubb?",
        answer: "Ja. Jag kommer gärna till klubbar i Stockholm och Dalarna. Hör av er med plats, antal deltagare och önskat datum."
      }
    ]}
  />
);

export default YogaForLopare;
