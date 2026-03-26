import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Mini Retreat', href: '/tjanster/mini-retreat' },
  { label: 'Äventyrpaket', href: '/tjanster/adventure-paket' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
  { label: 'Hönsyoga', href: '/tjanster/honsyoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Yoga i Dalarna för Turister – Yoga Class Dalarna Sweden",
  "description": "Yoga class in Dalarna for tourists and visitors to Sweden. Outdoor yoga on the cabin deck in Dalarna — a unique experience to add to your trip.",
  "provider": { "@type": "LocalBusiness", "name": "Yoga med Camilla", "url": "https://yogawithcamilla.se" },
  "areaServed": ["Dalarna", "Sverige"],
  "url": "https://yogawithcamilla.se/tjanster/yoga-dalarna-turister"
};

const YogaTurister = () => (
  <ServicePageLayout
    seoTitle="Yoga Class in Dalarna Sweden – Book Yoga for Tourists | Yoga med Camilla"
    seoDescription="Yoga class in Dalarna for tourists and visitors. Outdoor yoga on the cabin deck in Dalarna — a unique experience to add to your Sweden trip. Book in English."
    canonical="https://yogawithcamilla.se/tjanster/yoga-dalarna-turister"
    heroTag="Yoga i Dalarna / Yoga in Dalarna"
    heroHeading="Yoga i Dalarna för besökare"
    heroSubtitle="Besöker du Dalarna? Lägg till en yogaklass i naturen till din resa. En timme på altanen vid stugan — du lämnar med en annan känsla i kroppen och en ny syn på regionen."
    heroImage="/lovable-uploads/54e28b90-5dc5-42be-ac91-2bcbcc7e5c58.png"
    heroImageAlt="Outdoor yoga in Dalarna Sweden – yoga class for tourists"
    introHeading="En annan typ av Dalarna-upplevelse"
    introParagraphs={[
      "Dalarna är känt för sin natur, sina sjöar och sin lugna skönhet. Att praktisera yoga utomhus här — på altanen omgiven av skog — är ett sätt att verkligen landa i det som gör regionen speciell.",
      "Jag erbjuder yogaklasser för turister och besökare till Dalarna. Du behöver ingen yogaerfarenhet. Allt du behöver är bekväma kläder — jag fixar mattan och all utrustning. Klassen hålls på engelska.",
      "Passar för solobesökare, par, vängrupper och familjer (vuxna och ungdomar). Perfekt att kombinera med en stugvistelse i Dalarna, en vandring, eller bara en lugn dag i naturen."
    ]}
    highlights={[
      {
        heading: "Utomhus på altanen",
        text: "Yoga på altanen vid stugan, omgiven av granskog i Dalarna. En miljö som inte kan reproduceras i någon studio."
      },
      {
        heading: "På engelska",
        text: "Alla klasser för turister hålls på engelska. Välkomnande för alla nationaliteter och bakgrunder. Inga förkunskaper i yoga eller svenska krävs."
      },
      {
        heading: "Privat eller i liten grupp",
        text: "Boka en klass bara för dig eller din grupp — eller fråga om det finns en öppen klass att ansluta till. Max 10 personer per klass."
      },
      {
        heading: "Kombinera med Dalarna",
        text: "Lägg till yoga som en del av din Dalarna-resa. Kombination med vandring, sjöbad och naturnärvaro gör det till en hel dag värd att minnas. Se även äventyrpaket."
      }
    ]}
    pricing={[
      {
        label: "Enstaka klass (60–75 min)",
        price: "kontakta för pris",
        note: "Matta och utrustning ingår."
      },
      {
        label: "Privat bokning (grupp)",
        price: "kontakta för pris",
        note: "Hela klassen för din grupp. Upp till 10 personer."
      },
      {
        label: "Hel dag äventyr",
        price: "kontakta för pris",
        note: "Yoga + vandring + naturupplevelse. Se äventyrpaket."
      }
    ]}
    detailsHeading="Hur tar man sig hit?"
    detailsParagraphs={[
      "Stugan ligger i Dalarna. Med tåg från Stockholm C tar resan ca 4 timmar. Med bil: ca 3,5–4 timmar. Det är en resa som är värd att planera för — och Dalarna i sig är värt resan.",
      "Boka via mail: hello.yogawithcamilla@gmail.com. Ange önskat datum, antal personer och om du vill ha en privat klass eller vill ansluta till en öppen klass."
    ]}
    ctaHeading="Boka din yogaklass i Dalarna"
    ctaText="Hör av dig med datum och antal personer – på engelska eller svenska, det spelar ingen roll."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Yoga Class in Dalarna, Sweden – Book for Tourists & Visitors",
      text: "Visiting Dalarna and looking for a yoga class? I offer outdoor yoga classes on the cabin deck in Dalarna — one of the most beautiful settings you'll find for yoga in Sweden. Classes are in English, equipment is provided, and no experience is needed. Perfect for solo travellers, couples, and groups visiting the region. You can also combine your yoga class with hiking, swimming, and nature time for a full Dalarna wellness day — see Adventure Packages. Book your yoga class in Dalarna by emailing hello.yogawithcamilla@gmail.com."
    }}
  />
);

export default YogaTurister;
