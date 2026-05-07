import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Hönsyoga', href: '/tjanster/honsyoga' },
  { label: 'Privata Event', href: '/tjanster/privata-event' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mini Yoga Retreat & Adventure Paket i Dalarna",
  "description": "Mini yoga retreat och adventure-paket i Dalarna. Halvdag eller heldag med yoga, vandring, löpning och återhämtning i naturen.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna"],
  "url": "https://yogawithcamilla.se/tjanster/mini-retreat"
};

const MiniRetreat = () => (
  <ServicePageLayout
    seoTitle="Mini Yoga Retreat & Adventure Paket Dalarna | Yoga med Camilla"
    seoDescription="Mini yoga retreat och adventure-paket i Dalarna. Halvdag eller heldag med yoga, vandring, trail run och återhämtning i naturen."
    canonical="https://yogawithcamilla.se/tjanster/mini-retreat"
    ogImage="https://yogawithcamilla.se/images/IMG_8366.jpeg"
    breadcrumbLabel="Mini Retreat & Upplevelser"
    heroTag="Retreat & Adventure i Dalarna"
    heroHeading="Mini Retreat & Upplevelser"
    heroSubtitle="Yoga retreat i Dalarnas natur, adventure-paket med vandring och löpning. Skräddarsytt för din grupp."
    heroImage="/images/IMG_8366.jpeg"
    heroImageAlt="Yogamattor uppställda på altanen, mini retreat i Dalarna"
    heroImagePosition="center 60%"
    introHeading="Rörelse och yoga i naturen"
    introParagraphs={[
      "Du väljer upplägget: yoga och vandring i skogen, guidat löppass med återhämtningsyoga, eller en heldag med mindfulness och fika. Allt sker i Dalarna.",
      "För grupper (max 10 personer), som halvdag eller heldag. Programmet anpassas efter er. Leds på engelska, alla nivåer."
    ]}
    highlights={[
      {
        heading: "Halvdag",
        text: "Yoga, vandring eller trail run i skogen, mindfulness och fika. Ca 3–4 timmar."
      },
      {
        heading: "Heldag",
        text: "En full dag i naturen: längre yogapass, vandring eller trail run, mindfulness, fika och lunch."
      },
      {
        heading: "Lägg till",
        text: "Hönsyoga på altanen eller extra fördjupning kan kombineras in i ditt upplägg."
      }
    ]}
    pricing={[
      {
        label: "Halvdag",
        price: "kontakta för pris",
        note: "Max 10 personer, fika ingår."
      },
      {
        label: "Heldag",
        price: "kontakta för pris",
        note: "Max 10 personer, fika och lunch."
      },
      {
        label: "Företagsdag (10+ pers)",
        price: "kontakta för offert",
        note: "Offert baseras på gruppstorlek och upplägg."
      }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Vi är ca 3,5 timmar från Stockholm med bil, eller 4 timmar med tåg och buss. Basläger på altanen, vandring och trail run i närliggande skogsmark. Tillgängligt på helger och enstaka vardagar.",
      "Ta med löparskor eller vandringsskor, bekväma kläder och vattenflaska. Yogamattor finns på plats.",
      "Maila hello.yogawithcamilla@gmail.com med datum, format och gruppstorlek."
    ]}
    ctaHeading="Boka din upplevelse"
    ctaText="Hör av dig med önskade datum och vad du söker: retreat, adventure, eller något helt eget."
    structuredData={structuredData}
    relatedServices={relatedServices}
    faq={[
      {
        question: "Vilken nivå behöver jag vara på?",
        answer: "Ingen förkunskap krävs i yoga. För trail run eller vandring anpassar vi distans och tempo efter er nivå. Vandring är alltid ett alternativ till löpning."
      },
      {
        question: "Ingår mat och fika?",
        answer: "Fika ingår alltid. På heldagen ingår även lunch. Specialkost ordnas på förhand."
      },
      {
        question: "Var sker aktiviteterna?",
        answer: "Basläger på altanen i Dalarna. Vandring och trail run i närliggande skogsmark."
      },
      {
        question: "Kan upplägget kombineras med hönsyoga?",
        answer: "Ja. Hönsyoga på altanen kan läggas in i halvdagen eller heldagen. Populärt val för grupper som vill ha en unik upplevelse."
      }
    ]}
    englishKeywords={{
      heading: "Mini Yoga Retreat & Adventure Packages in Dalarna, Sweden",
      text: "Customisable half-day and full-day retreats and adventure packages in Dalarna, Sweden. Combining hiking, trail running, chicken yoga and recovery yoga. Led in English by a 500-hour certified yoga teacher and ultramarathon runner. Available for small groups (up to 10). Ideal for those looking for a yoga retreat in Sweden, an outdoor adventure, or a restorative break from city life. Email hello.yogawithcamilla@gmail.com to plan your experience."
    }}
  />
);

export default MiniRetreat;
