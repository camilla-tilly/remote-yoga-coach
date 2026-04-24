import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Hönsyoga på Stugan', href: '/tjanster/honsyoga' },
  { label: 'Privata Event', href: '/tjanster/privata-event' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mini Yoga Retreat & Adventure Paket i Dalarna",
  "description": "Mini yoga retreat, adventure paket och trail run + yoga i Dalarna och Stockholm. Dag, heldag eller weekend med yoga, vandring, löpning och återhämtning i naturen.",
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
    seoDescription="Mini yoga retreat och adventure-paket i Dalarna. Trail run + yoga i Stockholm. Dag, heldag eller weekend med yoga, vandring och återhämtning i naturen."
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
      "Du väljer upplägget: yoga och vandring i skogen, ett guidat löppass med återhämtningsyoga efteråt, en heldag med mindfulness och fika, eller ett multi-aktivitets-adventure. Allt baserat i Dalarna eller Stockholm.",
      "Mini-retreats och adventure-paket för enskilda eller grupp (max 6–8 personer), som dagsupplevelse eller weekend. Programmet anpassas efter er. Leds på engelska, alla nivåer."
    ]}
    highlights={[
      {
        heading: "Dagsretreat",
        text: "Anländer på morgonen, lämnar på kvällen. Välj mellan vandring, trail run eller en lugnare dag med yoga och mindfulness. Fika ingår alltid."
      },
      {
        heading: "Weekend-retreat",
        text: "Lördag–söndag med övernattning. Mer tid för djup meditation, längre yogaklasser, vandring och naturupplevelse. Inkluderar logi i stugan (begränsat antal platser)."
      },
      {
        heading: "Adventure Paket",
        text: "Kombinera vandring, trail run, SUP yoga och hönsyoga i en halvdag, heldag eller weekend. Vi bygger ihop ett skräddarsytt paket runt det ni vill göra."
      },
      {
        heading: "Trail Run + Yoga i Stockholm",
        text: "Trail run eller vandring i Nacka Naturreservat, följt av SUP yoga på Sicklasjön. Halvdag ca 3–4 timmar, grupper om 2–10 personer. Du behöver inte vara löpare."
      },
      {
        heading: "Privat eller grupp",
        text: "Ensam eller med vänner (max 6–8 personer). Jag skräddarsyr programmet efter er: återhämtning, rörelse, fördjupning, eller det ni just nu behöver mest."
      },
      {
        heading: "Teambuilding utomhus",
        text: "Funkar bra som företagsdag: trail run + yoga eller en adventure-halvdag utomhus som faktiskt känns annorlunda."
      }
    ]}
    pricing={[
      {
        label: "Dagsretreat Dalarna",
        price: "kontakta för pris",
        note: "Max 6 personer, fika ingår."
      },
      {
        label: "Weekend-retreat Dalarna",
        price: "kontakta för pris",
        note: "Max 6 personer, logi + program."
      },
      {
        label: "Adventure halvdag",
        price: "kontakta för pris",
        note: "Upp till 8 personer, all utrustning ingår."
      },
      {
        label: "Adventure heldag",
        price: "kontakta för pris",
        note: "Inkl. lunch-koordinering, upp till 8 personer."
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
      "Retreats i Dalarna: stugan ligger ca 4 timmar från Stockholm med tåg eller bil. Tillgängligt på helger och enstaka vardagar.",
      "Trail Run + Yoga Stockholm: Nacka Naturreservat + Sicklasjön. Enkelt att nå med kollektivtrafik. Ta med löparskor eller vandringsskor, bekväma kläder och vattenflaska.",
      "Adventure-paket: basläger vid stugan i Dalarna. Vandring och trail run i närliggande skogsmark. SUP yoga kan ske på Sicklasjön i Stockholm.",
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
        question: "Ingår mat och boende i retreatet?",
        answer: "Fika ingår alltid. För weekend-retreat koordinerar jag mat och logi separat. För adventure-paket halvdag och heldag ingår fika, logi koordineras vid behov."
      },
      {
        question: "Var sker aktiviteterna?",
        answer: "Retreat och adventure: basläger vid stugan i Dalarna. Trail Run + Yoga: Nacka Naturreservat och Sicklasjön i Stockholm. SUP yoga sker i samarbete med Smashing Balance."
      },
      {
        question: "Kan adventure-paketet kombineras med hönsyoga?",
        answer: "Ja, absolut. Hönsyoga på altanen kan vara en del av adventure-paketet. Det är ett populärt val, särskilt för grupper som vill ha en unik upplevelse."
      }
    ]}
    englishKeywords={{
      heading: "Mini Yoga Retreat, Adventure Packages & Trail Run + Yoga in Sweden",
      text: "Customisable day, full-day and weekend retreats and adventure packages in Dalarna, Sweden. Trail run + yoga half-days in Stockholm's Nacka Nature Reserve. Combining hiking, trail running, SUP yoga, chicken yoga and recovery yoga. Led in English by a 500-hour certified yoga teacher and ultramarathon runner. Available for solo retreats or small groups (up to 6–8). Ideal for those looking for a yoga retreat in Sweden, an outdoor adventure, or a restorative break from city life. Email hello.yogawithcamilla@gmail.com to plan your experience."
    }}
  />
);

export default MiniRetreat;
