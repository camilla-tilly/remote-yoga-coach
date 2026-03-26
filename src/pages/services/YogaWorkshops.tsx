import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'Mini Retreat', href: '/tjanster/mini-retreat' },
  { label: 'Yoga för Löpare', href: '/tjanster/yoga-for-lopare' },
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Yoga Workshops – Stockholm & Dalarna",
  "description": "Temainriktade yoga workshops i Stockholm och Dalarna. Andningsövningar, yin yoga, rörlighet, meditation och mer – som öppna klasser eller privatbokade event.",
  "provider": { "@type": "LocalBusiness", "name": "Yoga med Camilla", "url": "https://yogawithcamilla.se" },
  "areaServed": ["Stockholm", "Dalarna", "Vansbro"],
  "url": "https://yogawithcamilla.se/tjanster/yoga-workshop"
};

const YogaWorkshops = () => (
  <ServicePageLayout
    seoTitle="Yoga Workshop Stockholm & Dalarna – Boka Yogaworkshop | Yoga med Camilla"
    seoDescription="Temainriktade yoga workshops i Stockholm och Dalarna. Andning, yin, rörlighet och meditation – öppna klasser och privata event. Book a yoga workshop in Sweden."
    canonical="https://yogawithcamilla.se/tjanster/yoga-workshop"
    heroTag="Yoga Workshops"
    heroHeading="Yoga Workshops"
    heroSubtitle="Fördjupa din praktik under en fokuserad dag. Workshops är längre, temainriktade sessioner som ger dig tid att gå djupare än en vanlig klass tillåter."
    heroImage="/lovable-uploads/54e28b90-5dc5-42be-ac91-2bcbcc7e5c58.png"
    heroImageAlt="Yoga workshop i naturen – Dalarna"
    introHeading="Mer tid, mer djup"
    introParagraphs={[
      "En workshop är något annat än en klass. Det är 2–4 timmar fokuserat arbete kring ett specifikt tema – andningsövningar, yin yoga, rörlighet för löpare, meditation, eller ett helt vinyasa-fördjupningspass. Det finns tid att ställa frågor, att repetera, att faktiskt förstå vad du gör och varför.",
      "Jag håller workshops i Stockholm (i samarbete med WD Wellness i Vansbro och andra venues), på stugan i Dalarna, och som privatbokade event för grupper. Workshops kan också bokas online.",
      "Temana varierar och uppdateras löpande. Har du en specifik önskan – breathwork, flexibilitet, yoganidra, meditatonsövningar – hör av dig så ser vi om vi kan skräddarsy något."
    ]}
    highlights={[
      {
        heading: "Andning & Pranayama",
        text: "Fördjupning i yogans andningsövningar – Nadi Shodhana, Kapalabhati, Bhramari och mer. Hur andningen påverkar nervsystemet, energin och koncentrationen. 2–3 timmar."
      },
      {
        heading: "Yin Yoga Fördjupning",
        text: "Lär dig principerna bakom yin yoga – hur länge man håller, vilka vävnader som påverkas, hur man arbetar med motstånd utan att forcera. Teori plus praktik."
      },
      {
        heading: "Rörlighet & Fasciaträning",
        text: "Riktad rörlighetsworkshop för specifika problemområden – höfter, ryggrad, axlar, hamstrings. Populär bland löpare, cyklister och kontorsarbetare."
      },
      {
        heading: "Meditation & Yoganidra",
        text: "Guidad meditationsworkshop med bakgrund i Kamadpa och TWIM-tradition. Inkluderar yoga nidra – det djupaste tillståndet av avslappning du kan nå med medvetandet vaken."
      }
    ]}
    pricing={[
      {
        label: "Öppen workshop (per person)",
        price: "kontakta för pris",
        note: "2–3 timmar. Datum och teman annonseras löpande."
      },
      {
        label: "Privat workshop (grupp)",
        price: "kontakta för pris",
        note: "Skräddarsytt tema för din grupp. Upp till 10 personer."
      },
      {
        label: "Online workshop",
        price: "kontakta för pris",
        note: "Via Zoom. Inspelning kan inkluderas vid förfrågan."
      }
    ]}
    detailsHeading="Var håller vi workshops?"
    detailsParagraphs={[
      "Dalarna: På altanen vid stugan i Dalarna (utomhus, väder permitting) eller inomhus i stugan för mindre grupper.",
      "Stockholm & Vansbro: I samarbete med WD Wellness i Vansbro och utvalda yogastudios i Stockholm. Hör av dig för aktuella venues.",
      "Online: Via Zoom. Fungerar utmärkt för teoritunga workshops som andning och meditation.",
      "Privata event: Boka en hel workshop för din grupp – utmärkt som teamevent, retreat-inslag, eller föreningsaktivitet. Maila hello.yogawithcamilla@gmail.com med önskat tema och datum."
    ]}
    ctaHeading="Boka eller förfråga en workshop"
    ctaText="Hör av dig med vilket tema du är intresserad av, om du vill ha öppen klass eller privat bokning, och var du befinner dig."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Book a Yoga Workshop in Sweden – Stockholm & Dalarna",
      text: "Looking to book a yoga workshop in Sweden? I run themed yoga workshops in Stockholm and Dalarna covering breathwork (pranayama), yin yoga, flexibility and fascia, and meditation (including yoga nidra). Workshops are available as open bookings or as private group events — ideal for corporate wellness days, yoga retreats, or group bookings. Online workshops are also available globally. All sessions taught in English. Email hello.yogawithcamilla@gmail.com to enquire about upcoming workshops or to book a private yoga workshop in Sweden."
    }}
  />
);

export default YogaWorkshops;
