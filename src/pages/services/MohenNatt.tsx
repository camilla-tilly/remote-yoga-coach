import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Bröllopsyoga', href: '/tjanster/brollopsyoga' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
  { label: 'Mini Retreat Dalarna', href: '/tjanster/mini-retreat' },
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Möhippa Yoga i Dalarna & Stockholm",
  "description": "Privat yogaklass för möhippa i Dalarna eller Stockholm. Privat yogaklass för hela gruppen — ingen erfarenhet krävs.",
  "provider": { "@type": "LocalBusiness", "name": "Yoga med Camilla", "url": "https://yogawithcamilla.se" },
  "areaServed": ["Dalarna", "Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/mohippa-yoga"
};

const MohenNatt = () => (
  <ServicePageLayout
    seoTitle="Möhippa Yoga Dalarna & Stockholm – Bachelorette Yoga Sweden | Yoga med Camilla"
    seoDescription="Boka möhippa-yoga i Dalarna eller Stockholm. Privat yogaklass för hela gruppen – ingen erfarenhet krävs. Book bachelorette yoga in Sweden with a certified teacher."
    canonical="https://yogawithcamilla.se/tjanster/mohippa-yoga"
    heroTag="Möhippa & Bachelorette Yoga"
    heroHeading="Möhippa med Yoga"
    heroSubtitle="Privat yogaklass för möhippan — avslappnad, rolig och inkluderande. Ingen erfarenhet krävs."
    heroImage="/images/IMG_6793.JPG"
    heroImageAlt="Yoga i solnedgång — perfekt för möhippa"
    heroImagePosition="center 75%"
    introHeading="Varför välja yoga till möhippan?"
    introParagraphs={[
      "Jag håller klassen på svenska eller engelska och anpassar efter gruppen. Ingen yogaerfarenhet krävs.",
      "Jag kan hålla klassen på altanen i Dalarna, eller komma till er — hus på landet, hotell i Stockholm eller er AirBnB."
    ]}
    highlights={[
      {
        heading: "På stugan i Dalarna",
        text: "Yoga på altanen vid stugan, omgiven av skog och fågelsång. Jag fixar mattor och all utrustning. Plats för upp till 10 personer."
      },
      {
        heading: "Jag kommer till er",
        text: "Jag reser runt om i Dalarna med mattor, block och all utrustning för upp till 10 personer. Perfekt om ni hyr en stuga eller bor på hotell i regionen."
      },
      {
        heading: "Stockholm",
        text: "Bor ni i Stockholm? Jag kan ordna möhippa-yoga på en hyrd yogasal eller utomhus på lämplig plats. Hör av er så berättar jag mer om alternativen."
      },
      {
        heading: "Anpassad för gruppen",
        text: "Klassen skräddarsys för er grupp – oavsett om hälften är nybörjare eller om ni vill ha mer rörelse och flöde. Inga förkunskaper krävs."
      }
    ]}
    pricing={[
      {
        label: "På stugan i Dalarna",
        price: "kontakta för pris",
        note: "All utrustning ingår."
      },
      {
        label: "Jag kommer till er (Dalarna)",
        price: "kontakta för pris",
        note: "Resor i Dalarna. Reseavgift kan tillkomma."
      },
      {
        label: "Stockholm",
        price: "Kontakta för offert",
        note: "Salsuthyrning + resa ingår i priset."
      },
      {
        label: "SUP Yoga Möhippa",
        price: "kontakta för pris",
        note: "I samarbete med Smashing Balance, Sickla sjö."
      }
    ]}
    detailsHeading="Hur bokar jag?"
    detailsParagraphs={[
      "Maila mig på hello.yogawithcamilla@gmail.com med datum, antal personer, plats och om ni vill ha klassen på stugan eller om jag ska komma till er. Jag svarar inom 24 timmar med tillgänglighet och en skräddarsydd offert.",
      "Klasser är tillgängliga alla dagar i veckan, morgon och eftermiddag. Boka gärna minst 2 veckor i förväg för att säkra ditt datum."
    ]}
    ctaHeading="Redo att boka möhippa-yoga?"
    ctaText="Hör av dig med datum, antal personer och önskemål. Jag sätter ihop ett förslag som passar er grupp perfekt."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Bachelorette Yoga in Sweden – Dalarna & Stockholm",
      text: "Looking for a unique bachelorette party idea in Sweden? I offer private yoga classes for hen parties and bachelorette groups in Dalarna and Stockholm. Whether you want outdoor yoga on a forest deck, SUP yoga on the water in Stockholm, or a class at your accommodation — I bring all the equipment and tailor the session to your group. No yoga experience needed. Teaching is in English. Book your bachelorette yoga experience by emailing hello.yogawithcamilla@gmail.com."
    }}
  />
);

export default MohenNatt;
