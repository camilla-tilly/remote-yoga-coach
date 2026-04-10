import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Mini Yoga Retreat', href: '/tjanster/mini-retreat' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
  { label: 'Online Yoga', href: '/tjanster/online-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Privata Yogalektioner i Stockholm & Dalarna",
  "description": "En-till-en privata yogalektioner med certifierad lärare i Stockholm och Dalarna. Helt anpassad klass för dina mål, ditt schema och din nivå.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Stockholm", "Dalarna"],
  "url": "https://yogawithcamilla.se/tjanster/privatlektioner"
};

const Privatlektioner = () => (
  <ServicePageLayout
    seoTitle="Privata Yogalektioner Stockholm & Dalarna | Yoga med Camilla"
    seoDescription="En-till-en privata yogalektioner med 500-timmars certifierad lärare i Stockholm och Dalarna. Anpassad klass för dina mål och din nivå."
    canonical="https://yogawithcamilla.se/tjanster/privatlektioner"
    ogImage="https://yogawithcamilla.se/images/IMG_5788.JPG"
    breadcrumbLabel="Privatlektioner"
    heroTag="Privatlektioner"
    heroHeading="Privata Yogalektioner"
    heroSubtitle="En-till-en yoga med full fokus på dig. Din kropp, dina mål, ditt tempo."
    heroImage="/images/IMG_5788.JPG"
    heroImageAlt="Privat yogalektion med personlig instruktion"
    introHeading="Yoga anpassad helt för dig"
    introParagraphs={[
      "I en grupplektion gäller ett gemensamt tempo. I en privat lektion gäller ditt. Jag fokuserar på det du vill utveckla — rörlighet, styrka, andning, meditation eller återhämtning.",
      "Privatlektioner i Stockholm (yogasal eller lämplig lokal) och i Dalarna (altanen eller inomhus). Lektionen hålls på engelska."
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
        heading: "Återhämtning & rörlighet",
        text: "Löpning, gym, kontorsjobb — yoga som komplement. Fokus på rörlighet, balans och återhämtning."
      },
      {
        heading: "Meditation & andning",
        text: "Pranayama, mindfulness eller meditation — som en del av eller separat från den fysiska yogan."
      }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "60 eller 90 minuter. Enstaka lektion, paket om 5 eller 10, eller regelbunden veckopraktik.",
      "Stockholm: yogasal eller lämplig plats. Dalarna: altanen eller inomhus i stugan.",
      "Maila hello.yogawithcamilla@gmail.com för bokning och priser."
    ]}
    ctaHeading="Starta din personliga yogapraktik"
    ctaText="Maila mig med dina mål och önskemål – så hittar jag ett upplägg som fungerar för dig."
    structuredData={structuredData}
    relatedServices={relatedServices}
  />
);

export default Privatlektioner;
