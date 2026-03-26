import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Möhippa Yoga', href: '/tjanster/mohippa-yoga' },
  { label: 'Privata Events', href: '/tjanster/fodelsedag-yoga' },
  { label: 'Mini Yoga Retreat', href: '/tjanster/mini-retreat' },
  { label: 'Äventyrpaket', href: '/tjanster/adventure-paket' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bröllopsyoga i Dalarna & Stockholm",
  "description": "Yoga som bröllopaktivitet i Dalarna eller Stockholm. Välmående yoga för brudpar och gäster – en lugn och minnesvärd del av er bröllopsvecka.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna", "Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/brollopsyoga"
};

const BrollopYoga = () => (
  <ServicePageLayout
    seoTitle="Bröllopsyoga i Dalarna & Stockholm | Yoga med Camilla"
    seoDescription="Yoga som bröllopaktivitet för er och era gäster i Dalarna eller Stockholm. En lugn, inkluderande och minnesvärd aktivitet för bröllopsveckan."
    canonical="https://yogawithcamilla.se/tjanster/brollopsyoga"
    heroTag="Bröllop & Wellness"
    heroHeading="Yoga för Bröllop"
    heroSubtitle="Gör er bröllopsvecka lite mer zen. En morgonyoga på bröllopsdagen, en avslappningsklass för gästerna dagen innan, eller ett wellnessinslag på bröllopsmiddagen – yoga passar perfekt in."
    heroImage="/lovable-uploads/54e28b90-5dc5-42be-ac91-2bcbcc7e5c58.png"
    heroImageAlt="Lugn yoga i naturen – perfekt som bröllopsaktivitet"
    introHeading="Yoga som en del av er bröllopsvecka"
    introParagraphs={[
      "Allt fler par i Sverige väljer yoga som en del av sitt bröllopsupplägg – och det är lätt att förstå varför. En yogaklass ger gästerna ett gemensamt välmåendemoment bortom middagsbord och tal. Det är inkluderande för alla åldrar och fitnessnivåer, och skapar ett lugnt, vackert minne.",
      "Jag erbjuder yoga för bröllop i Dalarna och Stockholm. I Dalarna kan vi hålla klassen utomhus på min altan i Dalarna, eller på er bröllopslokation. I Stockholm kan jag ta med utrustning och hålla klass utomhus eller i en hyrd lokal.",
      "Varje klass anpassas för er grupp – oavsett om det är ett intimt bröllopssällskap om 8 personer eller ett större gästsläkting på 20. Inga förkunskaper behövs. Jag undervisar på engelska men kan hålla genomgångar på svenska vid behov."
    ]}
    highlights={[
      {
        heading: "Morgonyoga för brudparet",
        text: "Börja bröllopsdagen med lugn och närvaro. En 45–60 minuters yogaklass bara för er två – eller med era allra närmaste – innan det stora kalaset drar igång."
      },
      {
        heading: "Gäst-yoga dagen innan",
        text: "En perfekt bröllopsmiddagsaktivitet. Samla gästerna för en gemensam yogaklass på eftermiddagen innan ceremonin – ett sätt att få hela gruppen att mötas och slappna av."
      },
      {
        heading: "Bröllop i Dalarna",
        text: "Utomhusyoga på vår altan i Dalarna. En naturskön miljö som lyfter hela upplevelsen. Perfekt för bröllop som redan hålls i Dalarna."
      },
      {
        heading: "Bröllop i Stockholm",
        text: "Jag kan komma till er bröllopslokation i Stockholm med all utrustning och hålla yoga på er tilldelade yta. Hör av er med detaljer om lokal och antal gäster."
      }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "All utrustning – mattor, block och bolster – ingår. Ni behöver bara ha på er bekväma kläder. Klassens längd är flexibel, vanligtvis 45–90 minuter beroende på vad som passar bäst i ert schema.",
      "Boka gärna 4–8 veckor i förväg för bröllopsdatum, då dessa dagar bokas upp tidigt. Maila hello.yogawithcamilla@gmail.com med datum, plats och antal deltagare för en offert."
    ]}
    ctaHeading="Lägg till yoga i er bröllopsvecka"
    ctaText="Maila mig med ert datum, plats och antal gäster så sätter vi ihop något vackert tillsammans."
    structuredData={structuredData}
    relatedServices={relatedServices}
  />
);

export default BrollopYoga;
