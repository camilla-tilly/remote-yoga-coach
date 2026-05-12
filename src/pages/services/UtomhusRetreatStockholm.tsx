import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'SUP Yoga Klasser', href: '/tjanster/sup-yoga-klasser' },
  { label: 'Privata Event & Yoga Retreat', href: '/tjanster/privata-event' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Utomhusretreat Stockholm – Vinyasa, Journaling och Yin Yoga på SUP vid Sicklasjön",
  "description": "Halfdagsretreat utomhus i Stockholm vid Sicklasjön. Vinyasa på gräset, fri rörelse, journaling och yin yoga på paddleboard. Från 800 kr per person, grupp 4 till 8 personer, maj till september.",
  "provider": { "@type": "LocalBusiness", "name": "Yoga with Camilla", "url": "https://yogawithcamilla.se" },
  "areaServed": ["Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/utomhusretreat-stockholm",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Utomhusretreat Stockholm priser",
    "itemListElement": [
      { "@type": "Offer", "name": "Gruppretreat (4 till 8 pers)", "price": "800", "priceCurrency": "SEK", "description": "Från 800 kr per person. Yogamatta, SUP-bräda, te och journaling-prompts ingår." }
    ]
  }
};

const UtomhusRetreatStockholm = () => (
  <ServicePageLayout
    seoTitle="Outdoor Yoga Retreat Stockholm | Sommarretreat vid Sicklasjön | Yoga with Camilla"
    seoDescription="Halfdagsretreat utomhus i Stockholm. Vinyasa på gräset, fri rörelse, journaling och yin yoga på paddleboard vid Sicklasjön. Från 800 kr per person, grupp 4 till 8 personer. Maj till september 2026."
    canonical="https://yogawithcamilla.se/tjanster/utomhusretreat-stockholm"
    ogImage="https://yogawithcamilla.se/images/utomhusretreat-stockholm.jpg"
    breadcrumbLabel="Utomhusretreat Stockholm"
    heroTag="Halfdagsretreat · Stockholm · Sicklasjön"
    heroHeading="Utomhusretreat i Stockholm"
    heroSubtitle="Vinyasa på gräset, fri rörelse, journaling och yin yoga på paddleboard vid Sicklasjön. Tre timmar för att faktiskt landa i kroppen. Från 800 kr per person."
    heroImage="/images/utomhusretreat-stockholm.jpg"
    heroImageAlt="Grupp som gör yoga utomhus vid Sicklasjön i Stockholm"
    heroImageAspect="aspect-[4/5]"
    heroImagePosition="center center"
    introHeading="Ett retreat som börjar på land och slutar på vattnet"
    introParagraphs={[
      "Vi börjar på gräset med en roterande vinyasa-flow för att landa i kroppen. Sedan går vi in i fri rörelse och skakning, ett sätt att släppa det som sitter fast utan att behöva analysera det. Däremellan finns stilla stunder med journaling och guidade reflektionsfrågor. Sen tar vi en te-paus vid sjön, paddlar ut och avslutar med yin yoga liggandes på paddleboard medan vattnet rör sig under er.",
      "Retreatet passar för ett kompisgäng som vill ha en sommardag som inte liknar alla andra dagar, en födelsedag som betyder något, eller ett lag som behöver hitta tillbaka till varandra. Ingen yoga- eller SUP-erfarenhet krävs.",
      "Vi håller till vid Sickla Strand i Nacka, cirka tio till femton minuter från city. Alla grupper är privata, fyra till åtta personer, och varje retreat anpassas efter er grupp."
    ]}
    highlights={[
      {
        heading: "Vinyasa på gräset",
        text: "Vi börjar på land med en mjuk vinyasa-flow för att landa i kroppen och släppa det ni kom med. Mattor och plats tillhandahålls."
      },
      {
        heading: "Fri rörelse och skakning",
        text: "Inte dans, inte koreografi. Bara kroppen som får röra sig fritt och släppa lagrad spänning. Ovant i fem sekunder, befriande resten av tiden."
      },
      {
        heading: "Journaling och reflektion",
        text: "Guidade frågor att skriva till. Inget rätt eller fel, ingen som läser. Bara ni och papperet."
      },
      {
        heading: "Te-paus vid sjön",
        text: "En stund att andas, titta ut över vattnet och låta kroppen registrera att ni faktiskt är här."
      },
      {
        heading: "Yin yoga på paddleboard",
        text: "Vi paddlar ut till en lugn plats på Sicklasjön och avslutar med yin yoga liggandes på brädorna. Vattnet gungar lätt under er. Brädor, paddlar och flytvästar ingår."
      },
      {
        heading: "Allt ingår",
        text: "Yogamatta, SUP-bräda, paddel, flytväst, te och journaling-prompts. Ni tar med er bara det ni vill bära med er hem."
      }
    ]}
    pricing={[
      { label: "Gruppretreat (4 till 8 pers)", price: "från 800 kr/pers", note: "Yogamatta, SUP-bräda, te och journaling-prompts ingår" },
      { label: "Företag och team", price: "kontakta för offert", note: "Skräddarsytt för er grupp och era behov" }
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Plats: Sickla Strand, Nacka. Cirka tio till femton minuter från Stockholms city. T-bana Sickla eller Hammarby Sjöstad. Parkering finns på plats.",
      "Säsong: maj till september 2026. Utomhusretreat förutsätter rimligt väder. Vid regn eller stark vind hittar vi en lösning tillsammans.",
      "Längd: cirka tre timmar totalt, inklusive paddling ut och tillbaka.",
      "Vad ingår: yogamatta, SUP-bräda, paddel, flytväst, te och guidade journaling-prompts.",
      "Ta med: bekväma kläder i lager, badkläder under (om ni vill ha möjlighet att hoppa i), handduk och vattenflaska.",
      "Gruppstorlek: minst fyra och max åtta personer. Alla bokningar är privata.",
      "Språk: svenska eller engelska, ni väljer.",
      "Bokning: kontakta mig direkt via formuläret nedan eller på hello.yogawithcamilla@gmail.com."
    ]}
    ctaHeading="Boka ett retreat för er grupp"
    ctaText="Välj ett datum som passar och hör av dig. Jag anpassar retreatet efter er grupp, ert tempo och vad ni vill ha ut av dagen. Grupper om fyra till åtta personer, från 800 kr per person."
    bookingHref="mailto:hello.yogawithcamilla@gmail.com?subject=Utomhusretreat%20Stockholm"
    bookingLabel="Skicka förfrågan →"
    structuredData={structuredData}
    relatedServices={relatedServices}
    faq={[
      {
        question: "För vilka passar det här?",
        answer: "För kompisgäng som vill ha en sommardag som faktiskt betyder något. Födelsedag, möhippa, en lördag ni har pratat om att boka men aldrig bokat. Passar också för team och arbetslag som vill ha något mer meningsfullt än en afterwork."
      },
      {
        question: "Behöver man ha yogaerfarenhet?",
        answer: "Nej. Varken yoga- eller SUP-erfarenhet krävs. Allt förklaras på plats och anpassas efter gruppen."
      },
      {
        question: "Vad händer om det regnar?",
        answer: "Vid lätt regn kör vi ändå, det är del av sommarupplevelsen. Vid kraftigt regn eller stark vind som påverkar säkerheten på vattnet hittar vi en lösning tillsammans, antingen byter vi datum eller anpassar programmet."
      },
      {
        question: "Vad ingår i priset?",
        answer: "Yogamatta, SUP-bräda, paddel, flytväst, te och guidade journaling-prompts. Ni tar med er bara det ni vill bära med er hem."
      },
      {
        question: "Hur stor kan gruppen vara?",
        answer: "Minst fyra och max åtta personer. Alla retreat är privata, ni delar inte grupp med andra."
      },
      {
        question: "Vad kostar det?",
        answer: "Från 800 kr per person. Exakt pris beror på gruppstorlek och eventuella tillägg. Hör av er så räknar vi ut vad det blir för er."
      },
      {
        question: "Passar det för ett företagsevent?",
        answer: "Ja. Retreatet fungerar bra som sommaravslutning, kickoff eller teamdag. Kontakta mig för offert, jag anpassar upplägget efter er grupp och era önskemål."
      },
      {
        question: "Hur bokar vi?",
        answer: "Skicka ett mejl till hello.yogawithcamilla@gmail.com eller klicka på knappen ovan. Berätta hur många ni är och vilket datum eller vilken period ni tittar på, så återkommer jag med tillgängliga tider och bekräftelse."
      }
    ]}
    englishKeywords={{
      heading: "Outdoor Yoga Retreat Stockholm — Half-Day at Sicklasjön",
      text: "A half-day outdoor yoga retreat in Stockholm, Sweden. Vinyasa flow on grass, free movement and somatic shaking, guided journaling, a tea break by the lake, then yin yoga lying on stand-up paddleboards on Sicklasjön. All included: yoga mats, SUP boards and paddles, life vests, tea and journaling prompts. Private groups of 4–8 people, from 800 SEK per person. No yoga or SUP experience required. Perfect for a birthday, hen party, bachelorette, team day or summer staycation in Stockholm. Season: May to September 2026. Held in English or Swedish. Located at Sickla Strand, Nacka, 10–15 minutes from central Stockholm. Contact to book: hello.yogawithcamilla@gmail.com."
    }}
  />
);

export default UtomhusRetreatStockholm;
