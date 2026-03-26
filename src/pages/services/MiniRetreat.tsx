import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Äventyrpaket', href: '/tjanster/adventure-paket' },
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
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
    seoDescription="Mini yoga retreat i Dalarna – en dag eller helg av yoga, meditation, naturvandring och stillhet i en stuga i skogen. För enskilda och grupper upp till 6 personer."
    canonical="https://yogawithcamilla.se/tjanster/mini-retreat"
    heroTag="Retreat & Fördjupning"
    heroHeading="Mini Yoga Retreat i Dalarna"
    heroSubtitle="En dag eller helg av yoga, meditation, vandring och djup återhämtning i en stuga i Dalarna. För dig som är redo att faktiskt stanna upp."
    heroImage="/lovable-uploads/54e28b90-5dc5-42be-ac91-2bcbcc7e5c58.png"
    heroImageAlt="Yoga retreat i naturen – stuga i Dalarna"
    introHeading="Retreat i skogen — inte på skärmen"
    introParagraphs={[
      "Dalarna erbjuder exakt det som ett retreat ska ge: avskildhet, natur, tystnad och tid för inåtgående rörelse. Det här är inte ett dagsutflyktsformat — det är en upplevelse som kräver att du faktiskt tar dig hit och stannar.",
      "Jag erbjuder mini-retreats för enskilda eller i liten grupp (max 6 personer), antingen som en dagslång upplevelse eller ett weekend-format. Programmet är flexibelt och inkluderar yoga, andningsövningar, meditation och tid i naturen.",
      "Retreaten leds på engelska och är öppen för alla nivåer. Ingen yogaerfarenhet krävs — det enda som krävs är en vilja att vara mer med sig själv."
    ]}
    highlights={[
      {
        heading: "Dagsretreat",
        text: "Anländer på morgonen, lämnar på kvällen. Programmet inkluderar morgonyoga, meditation, vandring i skogen och en avslutande yin/restorative klass. En full återhämtningsdag."
      },
      {
        heading: "Weekend-retreat",
        text: "Lördag–söndag med övernattning. Mer tid för djup meditation, längre yogaklasser, stillhet och naturupplevelse. Inkluderar logi i stugan (begränsat antal platser)."
      },
      {
        heading: "Privat retreat",
        text: "Vill du ha ett retreat bara för dig? Jag skräddarsyr ett helt program utifrån dina behov — återhämtning, fördjupning, andning, eller det du just nu behöver mest."
      },
      {
        heading: "Grupp-retreat",
        text: "Kom som en grupp av vänner (max 6 personer) för ett gemensamt retreatupplägg. Perfekt för en girls' trip, ett rundat födelsedag eller kollegor som vill ha en annorlunda dag."
      }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Stugan ligger i Dalarna. Resan från Stockholm tar ca 4 timmar med tåg eller bil. Det är en resa som kräver en övernattning om du vill hinna vara här ordentligt — och det är poängen.",
      "Maila hello.yogawithcamilla@gmail.com för att diskutera datum, format och vad som ingår. Retreatdagar är tillgängliga på helger och enstaka vardagar."
    ]}
    ctaHeading="Boka ditt mini-retreat"
    ctaText="Hör av dig med önskade datum och vad du söker — en dag, ett weekend, ensam eller i grupp."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Mini Yoga Retreat in Dalarna, Sweden",
      body: "A day or weekend yoga retreat in Dalarna, Sweden. Led by a 500-hour certified yoga teacher in a private forest cabin setting. Programmes include yoga, meditation, breathwork, and time in nature. Available for solo retreats or small groups (up to 6). Conducted in English. Ideal for those looking for a yoga retreat in Sweden, a Scandinavian forest retreat, or a restorative break from city life.",
      ctaText: "Book a yoga retreat in Dalarna",
      ctaHref: "mailto:hello.yogawithcamilla@gmail.com"
    }}
  />
);

export default MiniRetreat;
