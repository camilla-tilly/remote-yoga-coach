import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Hönsyoga på Stugan', href: '/tjanster/honsyoga' },
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
  { label: 'Möhippa Yoga', href: '/tjanster/mohippa-yoga' },
  { label: 'Bröllopsyoga', href: '/tjanster/brollopsyoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mini Yoga Retreat i Dalarna",
  "description": "Mini yoga retreat i Dalarna – en dag eller helg av yoga, meditation, naturvandring och återhämtning i Dalarna.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna", "Sverige"],
  "url": "https://yogawithcamilla.se/tjanster/mini-retreat"
};

const MiniRetreat = () => (
  <ServicePageLayout
    seoTitle="Mini Yoga Retreat i Dalarna – Dag & Weekend Retreat | Yoga med Camilla"
    seoDescription="Mini yoga retreat i Dalarna – en dag eller helg av yoga, meditation och naturvandring i en skogsstuga. För grupper upp till 6 personer."
    canonical="https://yogawithcamilla.se/tjanster/mini-retreat"
    ogImage="https://yogawithcamilla.se/images/IMG_8366.jpeg"
    breadcrumbLabel="Mini Yoga Retreat"
    heroTag="Retreat & Fördjupning"
    heroHeading="Mini Yoga Retreat i Dalarna"
    heroSubtitle="En skräddarsydd dag eller helg i Dalarnas natur — yoga, mindfulness och rörelse i form av vandring eller löpning. Anpassat för din grupp."
    heroImage="/images/IMG_8366.jpeg"
    heroImageAlt="Yogamattor uppställda på altanen — mini retreat i Dalarna"
    heroImagePosition="center 60%"
    introHeading="Retreat i skogen"
    introParagraphs={[
      "Du väljer upplägget — yoga och vandring i skogen, ett guidat löppass med återhämtningsyoga efteråt, eller en heldag med mindfulness, andning och fika.",
      "Mini-retreats för enskilda eller liten grupp (max 6 personer), som dagsupplevelse eller weekend. Programmet anpassas efter er. Leds på engelska, alla nivåer."
    ]}
    highlights={[
      {
        heading: "Dagsretreat",
        text: "Anländer på morgonen, lämnar på kvällen. Välj mellan vandring, trail run eller en lugnare dag med yoga och mindfulness. Fika ingår alltid."
      },
      {
        heading: "Trail Run + Yoga",
        text: "Guidat löppass i Dalarnas skogar följt av återhämtningsyoga. För dig som vill röra dig och landa. Alla nivåer — tempot anpassas efter gruppen."
      },
      {
        heading: "Weekend-retreat",
        text: "Lördag–söndag med övernattning. Mer tid för djup meditation, längre yogaklasser, vandring och naturupplevelse. Inkluderar logi i stugan (begränsat antal platser)."
      },
      {
        heading: "Privat eller grupp",
        text: "Ensam eller med vänner (max 6 personer). Jag skräddarsyr programmet efter er — återhämtning, rörelse, fördjupning, eller det ni just nu behöver mest."
      }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Stugan ligger i Dalarna — ca 4 timmar från Stockholm med tåg eller bil.",
      "Maila hello.yogawithcamilla@gmail.com med datum, format och gruppstorlek. Tillgängligt på helger och enstaka vardagar."
    ]}
    ctaHeading="Boka ditt mini-retreat"
    ctaText="Hör av dig med önskade datum och vad du söker — en dag, ett weekend, ensam eller i grupp."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Mini Yoga Retreat in Dalarna, Sweden",
      body: "A customisable day or weekend retreat in Dalarna, Sweden. Choose your adventure — yoga and hiking, a guided trail run with recovery yoga, or a full day of mindfulness and breathwork in the forest. Led by a 500-hour certified yoga teacher. Available for solo retreats or small groups (up to 6). Conducted in English. Ideal for those looking for a yoga retreat in Sweden, an outdoor adventure retreat, or a restorative break from city life.",
      ctaText: "Book a yoga retreat in Dalarna",
      ctaHref: "mailto:hello.yogawithcamilla@gmail.com"
    }}
  />
);

export default MiniRetreat;
