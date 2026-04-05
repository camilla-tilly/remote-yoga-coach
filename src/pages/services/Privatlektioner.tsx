import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Mini Yoga Retreat', href: '/tjanster/mini-retreat' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
  { label: 'Äventyrpaket', href: '/tjanster/adventure-paket' },
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
    heroTag="Privatlektioner"
    heroHeading="Privata Yogalektioner"
    heroSubtitle="En-till-en yoga med full fokus på dig. Din kropp, dina mål, ditt tempo. Privatlektioner är det snabbaste och effektivaste sättet att fördjupa din yogapraktik."
    heroImage="/images/IMG_5788.JPG"
    heroImageAlt="Privat yogalektion med personlig instruktion"
    introHeading="Yoga anpassad helt för dig"
    introParagraphs={[
      "I en grupplektion gäller ett gemensamt tempo. I en privat lektion gäller ditt. Jag kan fokusera på exakt de områden du vill utveckla – rörlighet, styrka, andning, meditation, återhämtning efter skada, eller helt enkelt att bygga en hållbar daglig praktik.",
      "Jag erbjuder privatlektioner på plats i Stockholm (i yogasal eller annan lämplig lokal) och i Dalarna (på altanen eller inomhus i stugan). Alla lektioner sker fysiskt — jag tror på närvaro och personlig kontakt.",
      "Jag är 500-timmars certifierad med bakgrund i vinyasa flow, men anpassar alltid metodiken efter vad som passar dig bäst. Lektionen hålls på engelska."
    ]}
    highlights={[
      {
        heading: "Nybörjare",
        text: "Har du aldrig provat yoga men är nyfiken? En privat lektion är det bästa sättet att komma igång utan att känna sig utpekad eller efter. Jag börjar från grunden i din takt."
      },
      {
        heading: "Fördjupning",
        text: "Praktiserar du redan yoga men vill ta nästa steg? Jag hjälper dig att förfina din teknik, gå djupare i poses och förstå hur andning och rörelse samverkar."
      },
      {
        heading: "Återhämtning & rörlighet",
        text: "Springer du, gymmar, sitter mycket på jobbet? Yoga är ett utmärkt komplement. Jag fokuserar på rörlighet, balans och återhämtning kopplat till din vardag."
      },
      {
        heading: "Meditation & andning",
        text: "Vill du lära dig pranayama, mindfulness eller meditation? Jag kan vägleda dig i dessa praktiker som en del av eller separat från den fysiska yogan."
      }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Privatlektioner är 60 eller 90 minuter. Jag erbjuder enstaka lektioner, ett paket om 5 eller 10 lektioner, eller en regelbunden veckopraktik.",
      "Stockholm: lektioner hålls i yogasal eller på lämplig plats inomhus eller utomhus. Dalarna: på altanen vid stugan eller inomhus. Jag erbjuder inte online-lektioner — för mig är det personliga mötet det som gör skillnad.",
      "Maila hello.yogawithcamilla@gmail.com för att boka eller ställa frågor om upplägg och priser."
    ]}
    ctaHeading="Starta din personliga yogapraktik"
    ctaText="Maila mig med dina mål och önskemål – så hittar jag ett upplägg som fungerar för dig."
    structuredData={structuredData}
    relatedServices={relatedServices}
  />
);

export default Privatlektioner;
