import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
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
    heroSubtitle="Privata en-till-en lektioner via Zoom, på engelska. Var du än befinner dig."
    heroImage="/images/IMG_5776.JPG"
    heroImageAlt="Yoga på altanen i Dalarna — online klasser via Zoom"
    introHeading="Hur det funkar"
    introParagraphs={[
      "Privata en-till-en lektioner via Zoom, på engelska. Anpassad helt efter dig — dina mål, din nivå, ditt tempo.",
      "Du behöver en matta, golvyta och internetuppkoppling. Populärt bland expats, löpare och alla som inte kan ta sig till en studio."
    ]}
    highlights={[
      {
        heading: "En-till-en via Zoom",
        text: "Jag ser dig, korrigerar i realtid och anpassar klassen löpande."
      },
      {
        heading: "På engelska",
        text: "Alla onlinelektioner hålls på engelska. Bra för expats, turister och engelskspråkiga var som helst."
      },
      {
        heading: "Alla nivåer",
        text: "Nybörjare till erfarna. Jag anpassar metodiken och tempot efter din nivå."
      },
      {
        heading: "Flexibla tider",
        text: "Alla tidszoner. Morgon, lunch eller kväll — vad som fungerar för dig."
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
      "2. Jag bokar in ett inledande samtal (15 min, kostnadsfritt) för att gå igenom dina behov och sätta upp ett upplägg.",
      "3. Lektionen hålls via Zoom. Du behöver en matta, golvyta som är ungefär din kroppslängd, och bekväma kläder.",
      "4. Betalning sker enkelt via Swish eller banköverföring innan lektionen."
    ]}
    ctaHeading="Starta din online yogapraktik"
    ctaText="Maila mig med dina mål och önskade tider. Jag bokar ett kostnadsfritt introduktionssamtal och så sätter vi igång."
    faq={[
      {
        question: "What do I need for an online class?",
        answer: "A yoga mat, enough floor space for your body length, comfortable clothes, and a stable internet connection. That's it."
      },
      {
        question: "Do you teach in English?",
        answer: "Yes — all online classes are taught in English. I'm an Australian yoga teacher based in Sweden."
      },
      {
        question: "Can beginners join?",
        answer: "Absolutely. Every session is fully personalised to your level, goals, and body. Most of my online students started as beginners."
      },
      {
        question: "What time zones do you cover?",
        answer: "All of them. I offer morning, lunch, and evening slots that work across European and international time zones."
      },
      {
        question: "How do I book a free intro call?",
        answer: "Email hello.yogawithcamilla@gmail.com with your goals and preferred times. I'll book a free 15-minute call to go through your needs."
      }
    ]}
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Private Online Yoga Classes in English – Book Worldwide",
      text: "Looking for private online yoga classes in English? I offer one-on-one yoga sessions via Zoom with a 500hr certified yoga teacher based in Sweden. Classes are fully personalised — whether you're a complete beginner, a runner looking for recovery yoga, or an experienced practitioner wanting to go deeper. Sessions available for all time zones. Ideal for expats in Sweden, tourists who visited Dalarna or Stockholm and want to continue their practice, or anyone wanting high-quality private yoga online. Book a free 15-minute intro call by emailing hello.yogawithcamilla@gmail.com."
    }}
  />
);

export default OnlineYoga;
