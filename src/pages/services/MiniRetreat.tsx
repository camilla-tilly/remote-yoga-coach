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
  "description": "Mini yoga retreat, adventure paket och trail run + yoga i Dalarna och Stockholm. Halvdag eller heldag med yoga, vandring, löpning och återhämtning i naturen.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna", "Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/mini-retreat"
};

const MiniRetreat = () => (
  <ServicePageLayout
    seoTitle="Mini Yoga Retreat, Adventure Paket & Trail Run + Yoga Dalarna | Yoga med Camilla"
    seoDescription="Mini yoga retreat och adventure-paket i Dalarna. Trail run + yoga i Stockholm. Halvdag eller heldag med yoga, vandring och återhämtning i naturen."
    canonical="https://yogawithcamilla.se/tjanster/mini-retreat"
    ogImage="https://yogawithcamilla.se/images/IMG_8366.jpeg"
    breadcrumbLabel="Mini Retreat & Upplevelser"
    heroTag="Retreat, Adventure & Trail Run"
    heroHeading="Mini Retreat & Upplevelser"
    heroSubtitle="Yoga retreat i Dalarnas natur, adventure-paket med vandring och löpning, eller trail run + yoga i Stockholm. Skräddarsytt för din grupp."
    heroImage="/images/IMG_8366.jpeg"
    heroImageAlt="Yogamattor uppställda på altanen, mini retreat i Dalarna"
    heroImagePosition="center 60%"
    introHeading="Rörelse och yoga i naturen"
    introParagraphs={[
      "Du väljer upplägget: yoga och vandring i skogen, guidat löppass med återhämtningsyoga, eller en heldag med mindfulness och fika. Baserat i Dalarna eller Stockholm.",
      "För enskilda eller grupp (max 10 personer), som halvdag eller heldag. Programmet anpassas efter er. Leds på engelska, alla nivåer."
    ]}
    highlights={[
      {
        heading: "Halvdag i Dalarna",
        text: "Yoga, vandring eller trail run i skogen, mindfulness och fika. Ca 3–4 timmar."
      },
      {
        heading: "Heldag i Dalarna",
        text: "En full dag i naturen: längre yogapass, vandring eller trail run, mindfulness, fika och lunch."
      },
      {
        heading: "Trail Run + Yoga Stockholm",
        text: "Trail eller vandring i Nacka Naturreservat följt av SUP yoga på Sicklasjön. Ca 3–4 timmar. Du behöver inte vara löpare."
      },
      {
        heading: "Lägg till",
        text: "Hönsyoga på altanen, SUP yoga eller extra fördjupning kan kombineras in i ditt upplägg."
      }
    ]}
    pricing={[
      {
        label: "Halvdag i Dalarna",
        price: "kontakta för pris",
        note: "Max 10 personer, fika ingår."
      },
      {
        label: "Heldag i Dalarna",
        price: "kontakta för pris",
        note: "Max 10 personer, fika och lunch."
      },
      {
        label: "Trail Run + Yoga Stockholm",
        price: "kontakta för pris",
        note: "Ca 3–4 timmar. Trail i Nacka + SUP yoga på Sicklasjön."
      },
      {
        label: "Företagsdag (10+ pers)",
        price: "kontakta för offert",
        note: "Offert baseras på gruppstorlek och upplägg."
      }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Dalarna: ca 4 timmar från Stockholm med tåg eller bil. Basläger på altanen, vandring och trail run i närliggande skogsmark. Tillgängligt på helger och enstaka vardagar.",
      "Trail Run + Yoga Stockholm: Nacka Naturreservat + Sicklasjön. Enkelt att nå med kollektivtrafik. Ta med löparskor eller vandringsskor, bekväma kläder och vattenflaska.",
      "Maila hello.yogawithcamilla@gmail.com med datum, format och gruppstorlek."
    ]}
    ctaHeading="Boka din upplevelse"
    ctaText="Hör av dig med önskade datum och vad du söker: retreat, adventure, trail run + yoga, eller något helt eget."
    structuredData={structuredData}
    relatedServices={relatedServices}
    faq={[
      {
        question: "Vilken nivå behöver jag vara på?",
        answer: "Ingen förkunskap krävs i yoga. För trail run eller vandring anpassar vi distans och tempo efter er nivå. Vandring är alltid ett alternativ till löpning."
      },
      {
        question: "Behöver jag vara löpare för Trail Run + Yoga?",
        answer: "Nej. Tempot anpassas efter gruppen och vandring är alltid ett alternativ. Det handlar mer om att röra sig i naturen än att prestera."
      },
      {
        question: "Ingår mat och fika?",
        answer: "Fika ingår alltid. På heldagen ingår även lunch. Specialkost ordnas på förhand."
      },
      {
        question: "Var sker aktiviteterna?",
        answer: "Halvdag och heldag i Dalarna: basläger på altanen. Trail Run + Yoga: Nacka Naturreservat och Sicklasjön i Stockholm. SUP yoga sker i samarbete med Smashing Balance."
      },
      {
        question: "Kan upplägget kombineras med hönsyoga?",
        answer: "Ja. Hönsyoga på altanen kan läggas in i halvdagen eller heldagen. Populärt val för grupper som vill ha en unik upplevelse."
      }
    ]}
    englishKeywords={{
      heading: "Mini Yoga Retreat, Adventure Packages & Trail Run + Yoga in Sweden",
      text: "Customisable half-day and full-day retreats and adventure packages in Dalarna, Sweden. Trail run + yoga half-days in Stockholm's Nacka Nature Reserve. Combining hiking, trail running, SUP yoga, chicken yoga and recovery yoga. Led in English by a 500-hour certified yoga teacher and ultramarathon runner. Available for solo retreats or small groups (up to 10). Ideal for those looking for a yoga retreat in Sweden, an outdoor adventure, or a restorative break from city life. Email hello.yogawithcamilla@gmail.com to plan your experience."
    }}
  />
);

export default MiniRetreat;
