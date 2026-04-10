import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Mini Yoga Retreat', href: '/tjanster/mini-retreat' },
  { label: 'Trail Run + Yoga', href: '/tjanster/trail-run-yoga' },
  { label: 'Hönsyoga', href: '/tjanster/honsyoga' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Adventure Paket i Dalarna – Yoga, Vandring & SUP",
  "description": "Skräddarsydda adventure-paket i Dalarna. Kombinera vandring, trail run, SUP yoga, hönsyoga och återhämtning. En till tre dagar.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna", "Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/adventure-paket"
};

const AdventurePaket = () => (
  <ServicePageLayout
    seoTitle="Adventure Paket Dalarna – Yoga, Vandring & SUP | Yoga med Camilla"
    seoDescription="Adventure-paket i Dalarna. Kombinera vandring, trail run, SUP yoga och hönsyoga i en till tre dagar. Skräddarsytt för grupper och företag."
    canonical="https://yogawithcamilla.se/tjanster/adventure-paket"
    ogImage="https://yogawithcamilla.se/lovable-uploads/yoga-outdoor-pose.jpg"
    breadcrumbLabel="Adventure Paket"
    heroTag="Adventure & Yoga"
    heroHeading="Adventure Paket"
    heroSubtitle="Kombinera vandring, löpning, SUP yoga och hönsyoga i ett skräddarsytt paket — en till tre dagar i Dalarnas natur."
    introHeading="Rörelse och yoga, utomhus"
    introParagraphs={[
      "Adventure paket är för dig som vill ha mer än en yogaklass. Vi bygger ihop en halv dag, heldag eller weekend där rörelse i naturen varvas med yoga och återhämtning.",
      "Baserat vid stugan i Dalarna, men med möjlighet till SUP yoga på Sicklasjön i Stockholm. Ni väljer tempo — aktivt, lugnt, eller en blandning."
    ]}
    highlights={[
      {
        heading: "Halvdag",
        text: "Kort vandring eller trail run följt av en yogaklass och fika. Perfekt som teamaktivitet eller en ledig förmiddag med vänner."
      },
      {
        heading: "Heldag",
        text: "Vandring, SUP yoga eller hönsyoga, lunchpaus, återhämtningsyoga och meditation. En full dag i naturen utan stress."
      },
      {
        heading: "Weekend (1–2 nätter)",
        text: "För mindre grupper. Logi i stuga eller närliggande boende, två fulla dagar med yoga, vandring och tid att landa. Maten ingår i valda upplägg."
      },
      {
        heading: "Skräddarsytt för gruppen",
        text: "Säg vad ni vill göra, hur många ni är och er nivå — så bygger jag upplägget. Inga förkunskaper krävs för yogadelen."
      }
    ]}
    pricing={[
      {
        label: "Halvdag",
        price: "kontakta för pris",
        note: "Upp till 8 personer, all utrustning ingår."
      },
      {
        label: "Heldag",
        price: "kontakta för pris",
        note: "Inkl. lunch-koordinering, upp till 8 personer."
      },
      {
        label: "Weekend",
        price: "kontakta för pris",
        note: "Logi och mat koordineras separat."
      }
    ]}
    ctaHeading="Boka ett adventure paket"
    ctaText="Maila mig med önskat datum, gruppens storlek och vilka aktiviteter ni är nyfikna på — så sätter jag ihop ett förslag."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Adventure & Yoga Packages in Dalarna, Sweden",
      text: "Half-day, full-day and weekend adventure packages in Dalarna — combining hiking or trail running, SUP yoga, chicken yoga and recovery yoga. Based at a forest cabin in Dalarna, Sweden. Led in English by a 500-hour certified yoga teacher and ultramarathon runner. Ideal for small groups, corporate retreats, and adventure travellers. Email hello.yogawithcamilla@gmail.com to plan your experience."
    }}
    faq={[
      {
        question: "Vilken nivå behöver jag vara på?",
        answer: "Ingen förkunskap krävs i yoga. För trail run eller vandring anpassar vi distans och tempo efter er nivå. Hiking är alltid ett alternativ till löpning."
      },
      {
        question: "Ingår mat och boende?",
        answer: "För halvdag och heldag ingår fika. För weekend-paket koordinerar jag mat och logi separat — ni betalar själva för boende, men jag hjälper till att hitta det."
      },
      {
        question: "Var sker aktiviteterna?",
        answer: "Basläger är vid stugan i Dalarna. Trail run går i närliggande skogsmark. SUP yoga sker på Sicklasjön i Stockholm om ni hellre vill vara där."
      }
    ]}
  />
);

export default AdventurePaket;
