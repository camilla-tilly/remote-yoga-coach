import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Äventyrpaket Dalarna', href: '/tjanster/adventure-paket' },
  { label: 'Yoga för Löpare', href: '/tjanster/yoga-for-lopare' },
  { label: 'Mini Retreat Dalarna', href: '/tjanster/mini-retreat' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Trail Run + Yoga — Stockholm & Dalarna",
  "description": "Guidat löp- eller vandringpass följt av yoga. I Stockholm: trail i Nacka + SUP yoga på Sicklasjön. I Dalarna: skogsled + yoga på altanen. För grupper, företag och äventyrslystna.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna", "Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/trail-run-yoga"
};

const TrailRunYoga = () => (
  <ServicePageLayout
    seoTitle="Trail Run + Yoga — Stockholm & Dalarna | Yoga med Camilla"
    seoDescription="Guidat löp- eller vandringpass + yoga. Stockholm: Nacka Naturreservat + SUP yoga. Dalarna: skogsled + yoga på altanen. Halvdag eller heldag för grupper och företag."
    canonical="https://yogawithcamilla.se/tjanster/trail-run-yoga"
    heroTag="Löp & Yoga"
    heroHeading="Trail Run + Yoga"
    heroSubtitle="Ett guidat löp- eller vandringpass följt av yoga — i Nacka Naturreservat eller Dalarnas skogar. För dig som vill ta ut dig och sedan landa ordentligt."
    heroImage="/images/trail-run-nacka.jpeg"
    heroImageAlt="Utsikt över Nacka Naturreservat — trail run och yoga"
    introHeading="Rörelse och närvaro — på riktigt"
    introParagraphs={[
      "Jag är 500-timmars certifierad yogalärare — och ultramaratonlöpare med fem lopp bakom mig. De två sakerna hänger ihop mer än man tror. Traillöpning och yoga tränar samma sak: att vara i kroppen, att ta ett steg i taget, att inte låta tankarna köra iväg.",
      "Det här paketet kombinerar de båda. Ett guidat pass i naturen — anpassat till gruppens nivå, oavsett om ni springer eller vandrar — följt av yoga för återhämtning, andning och rörlighet.",
      "Du behöver inte vara löpare. Tempot sätts alltid efter gruppen. Jag anpassar till vandring, jogging eller löpning — det spelar ingen roll. Det som spelar roll är att ni tar er ut."
    ]}
    highlights={[
      {
        heading: "Stockholm — Nacka + SUP Yoga",
        text: "Trail eller vandring i Nacka Naturreservat, ett av Sveriges vackraste stadsnära naturområden. Följs av ett SUP yoga-pass på Sicklasjön via Smashing Balance. Halvdag ca 3–4 timmar. Passar grupper om 2–10 personer."
      },
      {
        heading: "Dalarna — Skog + Yoga på altanen",
        text: "Guidat löp- eller vandringpass på spår i Dalarnas skogar, startande från stugan. Följs av ett yoga-pass på altanen. Halvdag ca 3 timmar eller heldag ca 6 timmar med picknick i skogen. Passar grupper om 2–10 personer."
      },
      {
        heading: "Flexibelt för alla nivåer",
        text: "Har du sprungit ett ultramaraton eller aldrig sprungit förut — det spelar ingen roll. Jag anpassar tempot och sträckan till gruppen. Vandring är alltid ett alternativ."
      },
      {
        heading: "Företagsdag & teambuilding",
        text: "Trail + yoga är ett av de starkaste teambuildingformaten som finns. Det tar folk ur kontorets komfortzon, sätter dem i naturen och avslutar med ett yogapass som faktiskt återhämtar. Finns i både Stockholm och Dalarna."
      }
    ]}
    pricing={[
      { label: 'Halvdag, Stockholm (2–10 pers)', price: 'kontakta för pris', note: 'Ca 3–4 timmar. Trail i Nacka + SUP yoga.' },
      { label: 'Halvdag, Dalarna (2–10 pers)', price: 'kontakta för pris', note: 'Ca 3 timmar. Skogsled + yoga på altanen.' },
      { label: 'Heldag, Dalarna (2–10 pers)', price: 'kontakta för pris', note: 'Ca 6 timmar. Löp/vandring + picknick + yoga.' },
      { label: 'Företagsdag (10+ pers)', price: 'kontakta för offert', note: 'Offert baseras på gruppstorlek, uppläggets längd och plats.' },
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Stockholm-paketet hålls i Nacka Naturreservat med SUP yoga på Sicklasjön via Smashing Balance. Enkelt att nå med kollektivtrafik.",
      "Dalarna-paketet hålls i skogarna runt stugan i Dalarna. Transport ingår ej, men tåg från Stockholm tar ca 4 timmar.",
      "Ta med: löparskor eller vandringsskor, bekväma kläder, vattenflaska. Yogamattor tillhandahålls.",
      "Bokas via mail: hello.yogawithcamilla@gmail.com — ange stad, gruppstorlek och om ni vill ha halvdag eller heldag."
    ]}
    ctaHeading="Boka Trail Run + Yoga"
    ctaText="Hör av dig med stad, gruppstorlek och önskat datum — så skickar jag ett förslag."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Trail Running + Yoga — Stockholm & Dalarna, Sweden",
      body: "A guided trail run or hike combined with a yoga session. Two locations: Nacka Nature Reserve in Stockholm (trail + SUP yoga on Sicklasjön), or forest trails in Dalarna (trail + yoga on the cabin deck). Half-day or full-day packages for groups, corporate teams, runners, and adventure seekers. No running experience needed — hiking is always an option. Led by a 500-hour certified yoga teacher and ultramarathon runner. Perfect for team building in Sweden or a unique outdoor experience near Stockholm.",
      ctaText: "Book a trail run and yoga experience",
      ctaHref: "mailto:hello.yogawithcamilla@gmail.com"
    }}
  />
);

export default TrailRunYoga;
