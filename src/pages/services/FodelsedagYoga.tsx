import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Möhippa Yoga', href: '/tjanster/mohippa-yoga' },
  { label: 'Bröllopsyoga', href: '/tjanster/brollopsyoga' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
  { label: 'Äventyrpaket', href: '/tjanster/adventure-paket' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Födelsedag Yoga & Privata Events i Dalarna",
  "description": "Privat yoga för födelsedag, jubileum och privata events i Dalarna. Skräddarsydda yogaklasser i naturen för dig och dina vänner.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna"],
  "url": "https://yogawithcamilla.se/tjanster/fodelsedag-yoga"
};

const FodelsedagYoga = () => (
  <ServicePageLayout
    seoTitle="Yoga för Födelsedag & Privata Events i Dalarna | Yoga med Camilla"
    seoDescription="Fira din födelsedag med en privat yogaklass i Dalarna. Skräddarsydda upplevelser för dig och dina vänner i en skogsstuga omgiven av natur."
    canonical="https://yogawithcamilla.se/tjanster/fodelsedag-yoga"
    heroTag="Födelsedag & Privata Events"
    heroHeading="Yoga till Födelsedagen"
    heroSubtitle="Ge dina vänner ett annorlunda och minnesvärt present – en yoga-upplevelse i naturen. Perfekt för runda jubileum, girls' weekends eller bara för att göra din dag lite mer speciell."
    heroImage="/lovable-uploads/54e28b90-5dc5-42be-ac91-2bcbcc7e5c58.png"
    heroImageAlt="Privat yoga på altan i skog – födelsedag och privata events i Dalarna"
    introHeading="En födelsedag värd att minnas"
    introParagraphs={[
      "Yoga är en present som ger upplevelse, välmående och gemenskap – alla tre på samma gång. Istället för ännu ett restaurangbesök eller spadag kan du och dina vänner ta ett steg ut i naturen och röra kroppen tillsammans.",
      "Jag håller privata yogaklasser för födelsedag och andra privata event i Dalarna. Vi kan hålla klassen på min altan i Dalarna, eller jag kan komma till er om ni hyr en stuga eller bor inom 1 timmes avstånd.",
      "Klassen anpassas helt efter er grupp. Vill ni ha en mjuk och avslappnande klass? Mer dynamisk vinyasa? Kombinera med meditation och andning? Vi bestämmer tillsammans."
    ]}
    highlights={[
      {
        heading: "Utomhus på stugan",
        text: "Yoga på altanen vid stugan i Dalarna. En magisk miljö som gör din födelsedag till en riktig naturupplevelse. Plats för upp till 10 personer, väder permitting."
      },
      {
        heading: "Girls' Weekend i stugan",
        text: "Hyr ni en stuga i Dalarna för ett girls' weekend? Jag kan komma till er med all utrustning. Perfekt morning yoga inför en dag ute i naturen."
      },
      {
        heading: "Alla nivåer välkomna",
        text: "Inga förkunskaper krävs. Jag anpassar klassen för hela gruppen, oavsett om det är en blandning av nybörjare och erfarna praktiserare."
      },
      {
        heading: "Kombinera med mer",
        text: "Kolla in våra äventyrpaket – yoga kan kombineras med vandring, löpning, meditation och mer för en hel dag i naturen."
      }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "All utrustning ingår – mattor, block och eventuellt bolster. Klassen är vanligtvis 60–90 minuter. Jag undervisar på engelska men kan ha instruktioner på svenska.",
      "Boka via mail: hello.yogawithcamilla@gmail.com. Ange datum, antal personer och om ni vill ha klassen på stugan eller om jag ska komma till er."
    ]}
    ctaHeading="Boka din födelsedag-yoga"
    ctaText="Hör av dig med datum och hur ni vill ha det – jag ordnar resten."
    structuredData={structuredData}
    relatedServices={relatedServices}
  />
);

export default FodelsedagYoga;
