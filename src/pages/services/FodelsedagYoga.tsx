import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Möhippa Yoga', href: '/tjanster/mohippa-yoga' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
  { label: 'Hönsyoga', href: '/tjanster/honsyoga' },
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Födelsedag Yoga i Stockholm & Dalarna",
  "description": "Privat yogaklass som födelsedagsaktivitet. För barnkalas, vuxenfester och milestone-födelsedagar i Stockholm eller Dalarna. Ingen förkunskap krävs.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna", "Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/fodelsedag-yoga"
};

const FodelsedagYoga = () => (
  <ServicePageLayout
    seoTitle="Födelsedag Yoga Stockholm & Dalarna – Privat Yogafest | Yoga med Camilla"
    seoDescription="Fira födelsedagen med privat yoga för dig och dina gäster i Stockholm eller Dalarna. Altan, hem, park eller stuga. Ingen erfarenhet krävs."
    canonical="https://yogawithcamilla.se/tjanster/fodelsedag-yoga"
    ogImage="https://yogawithcamilla.se/lovable-uploads/yoga-outdoor-pose.jpg"
    breadcrumbLabel="Födelsedag Yoga"
    heroTag="Födelsedag & Fest"
    heroHeading="Yoga på födelsedagen"
    heroSubtitle="En annorlunda födelsedagsaktivitet för dig som vill samla dina närmaste kring något lugnt, roligt och minnesvärt — i Stockholm eller Dalarna."
    introHeading="Varför yoga som födelsedagsaktivitet?"
    introParagraphs={[
      "Yoga är ett enkelt sätt att samla vänner eller familj över ett gemensamt ögonblick utan press. Inga förkunskaper krävs, och jag anpassar klassen efter gruppens ålder och nivå.",
      "Jag tar med mattor, block och all utrustning — du behöver bara välja plats och bjuda in gästerna."
    ]}
    highlights={[
      {
        heading: "Milestone-födelsedag",
        text: "Fyller du 30, 40, 50? Samla dina närmaste över en lugn yogaklass innan middagen eller festen. Perfekt start på dagen."
      },
      {
        heading: "Vuxenfest",
        text: "Ett mjukt avbrott från vanliga middagskalas. 60 minuter yoga i vardagsrummet, trädgården eller i parken — sedan går ni vidare till maten."
      },
      {
        heading: "Barnkalas från 10 år",
        text: "Lekfull och lugn yoga för äldre barn och tonåringar. Bra för kompisgäng som vill prova något annorlunda."
      },
      {
        heading: "Jag kommer till er",
        text: "Stockholm eller Dalarna — altan, hem, hotell, stuga eller park. Jag ordnar platsen tillsammans med er om ni vill ha tips."
      }
    ]}
    pricing={[
      {
        label: "Privat yogaklass",
        price: "kontakta för pris",
        note: "60 min, upp till 10 personer, utrustning ingår."
      },
      {
        label: "Större grupper",
        price: "kontakta för pris",
        note: "Fler än 10 deltagare eller tematiserad fest."
      }
    ]}
    ctaHeading="Boka yoga till födelsedagen"
    ctaText="Maila mig med datum, plats och antal gäster — så sätter jag ihop något som passar er."
    structuredData={structuredData}
    relatedServices={relatedServices}
    faq={[
      {
        question: "Hur länge varar klassen?",
        answer: "Vanligtvis 60 minuter, men jag kan justera mellan 45 och 90 minuter beroende på ert schema."
      },
      {
        question: "Vad ingår?",
        answer: "Yogamattor, block och bolster för upp till 10 personer, resa inom rimligt avstånd, och en fullt anpassad klass. Ni behöver bara bekväma kläder."
      },
      {
        question: "Kan ni kombinera med SUP yoga eller hönsyoga?",
        answer: "Ja. Om ni är i Stockholm kan jag kombinera med SUP yoga på Sicklasjön. I Dalarna finns hönsyoga på altanen. Hör av er så pratar vi ihop oss."
      }
    ]}
  />
);

export default FodelsedagYoga;
