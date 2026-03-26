import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
  { label: 'Yoga Workshops', href: '/tjanster/yoga-workshop' },
  { label: 'Yoga för Löpare', href: '/tjanster/yoga-for-lopare' },
  { label: 'Mini Retreat', href: '/tjanster/mini-retreat' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Online Yoga – Private Classes in English",
  "description": "Private online yoga classes in English with a 500hr certified teacher. One-on-one sessions via Zoom for all levels — from anywhere in the world.",
  "provider": { "@type": "LocalBusiness", "name": "Yoga med Camilla", "url": "https://yogawithcamilla.se" },
  "areaServed": "Worldwide",
  "url": "https://yogawithcamilla.se/tjanster/online-yoga"
};

const OnlineYoga = () => (
  <ServicePageLayout
    seoTitle="Online Yoga Classes in English – Private Sessions Worldwide | Yoga med Camilla"
    seoDescription="Private online yoga classes in English with a 500hr certified teacher. One-on-one sessions via Zoom for all levels — beginners, runners, and anyone wanting personalised yoga."
    canonical="https://yogawithcamilla.se/tjanster/online-yoga"
    heroTag="Online Yoga"
    heroHeading="Online Yoga – Privata klasser var du än är"
    heroSubtitle="Samma kvalitet som en privat lektion – via Zoom. Oavsett om du sitter i Stockholm, Sydney eller någonstans däremellan."
    heroImage="/lovable-uploads/c1e6d7f9-3ac6-42af-ac83-3058516ff2ef.png"
    heroImageAlt="Online yoga via Zoom – privata klasser på engelska"
    introHeading="Yoga utan gränser"
    introParagraphs={[
      "Online yoga är inte ett kompromiss – det är ett format med egna styrkor. Du behöver inget gym, ingen studio, inga resekostnader. Du behöver en matta, tillräckligt med golvyta och en internetuppkoppling.",
      "Jag erbjuder privata en-till-en lektioner online via Zoom, på engelska. Klassen är helt anpassad för dig – dina mål, dina begränsningar, ditt tempo. Det är det effektivaste sättet att utveckla en yogapraktik oavsett var i världen du befinner dig.",
      "Populärt bland expats i Sverige, turister som besökt Dalarna och vill fortsätta, löpare och idrottare som vill ha specifik återhämtningssupport, och alla som av schemalogistik inte kan ta sig till en studio."
    ]}
    highlights={[
      {
        heading: "En-till-en via Zoom",
        text: "Full uppmärksamhet på dig. Jag ser dig, korrigerar i realtid och anpassar klassen löpande. Samma kvalitet som en fysisk privatlektion – utan resan."
      },
      {
        heading: "På engelska",
        text: "Alla onlinelektioner hålls på engelska. Perfekt för expats, internationella studenter, turister och engelskspråkiga som bor i Sverige eller utomlands."
      },
      {
        heading: "Alla nivåer",
        text: "Nybörjare som aldrig steppat på en matta till erfarna praktiserare som vill fördjupa sig. Jag anpassar metodiken och tempot för exakt din nivå."
      },
      {
        heading: "Flexibla tider",
        text: "Vi hittar en tid som passar din tidszon och ditt schema. Morgonklasser, lunch, kväll – vad som fungerar för dig."
      }
    ]}
    pricing={[
      {
        label: "Enstaka lektion (60 min)",
        price: "kontakta för pris",
        note: "Bokas och betalas enkelt via mail."
      },
      {
        label: "Enstaka lektion (90 min)",
        price: "kontakta för pris",
        note: "Mer tid för fördjupning och frågor."
      },
      {
        label: "Paket – 5 lektioner",
        price: "kontakta för pris",
        note: "Rabatterat. Giltigt i 3 månader."
      },
      {
        label: "Paket – 10 lektioner",
        price: "kontakta för pris",
        note: "Bäst värde. Giltigt i 6 månader."
      }
    ]}
    detailsHeading="Hur fungerar det?"
    detailsParagraphs={[
      "1. Maila hello.yogawithcamilla@gmail.com med dina mål, din erfarenhetsnivå och vilka tider som passar dig.",
      "2. Vi bokar in ett inledande samtal (15 min, kostnadsfritt) för att gå igenom dina behov och sätta upp ett upplägg.",
      "3. Vi håller lektionen via Zoom. Du behöver en matta, golvyta som är ungefär din kroppslängd, och bekväma kläder.",
      "4. Betalning sker enkelt via Swish eller banköverföring innan lektionen."
    ]}
    ctaHeading="Starta din online yogapraktik"
    ctaText="Maila mig med dina mål och önskade tider. Vi bokar ett kostnadsfritt introduktionssamtal och sätter igång."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Private Online Yoga Classes in English – Book Worldwide",
      text: "Looking for private online yoga classes in English? I offer one-on-one yoga sessions via Zoom with a 500hr certified yoga teacher based in Sweden. Classes are fully personalised — whether you're a complete beginner, a runner looking for recovery yoga, or an experienced practitioner wanting to go deeper. Sessions available for all time zones. Ideal for expats in Sweden, tourists who visited Dalarna or Stockholm and want to continue their practice, or anyone wanting high-quality private yoga online. Book a free 15-minute intro call by emailing hello.yogawithcamilla@gmail.com."
    }}
  />
);

export default OnlineYoga;
