import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices: { label: string; href: string }[] = [];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Företagsyoga och wellness-program för team i Stockholm",
  "description": "Återkommande yoga och mindfulness för företag i Stockholm. Tre nivåer från 2 500 kr/månaden. Veckovisa Teams-sessioner och besök på kontoret.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/foretagsyoga"
};

const ForetagsYoga = () => (
  <ServicePageLayout
    seoTitle="Företagsyoga Stockholm | Abonnemang från 2 500 kr/mån | Yoga med Camilla"
    seoDescription="Återkommande yoga och andning för team i Stockholm. Inte ett engångsevent, en vana. Tre nivåer från 2 500 kr/mån. Teams varje vecka, besök på kontoret ingår från nivå 2."
    canonical="https://yogawithcamilla.se/tjanster/foretagsyoga"
    ogImage="https://yogawithcamilla.se/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.jpg"
    breadcrumbLabel="Företagsyoga"
    heroTag="Företagsyoga och teamwellness i Stockholm"
    heroHeading="Bättre fokus. Lägre stress. Varje vecka."
    heroSubtitle="Andning, meditation och rörelse varje vecka, på Teams, från skrivbordet. Inget ombyte. Ingen utrustning. Bara ett återkommande andrum som faktiskt håller."
    heroImage="/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.jpg"
    heroImageAlt="Yoga och välmående för företag i Stockholm"
    introHeading="Engångsevent ger engångsresultat"
    introParagraphs={[
      "De flesta satsningar på personalvård fastnar i samma mönster: ett event, lite entusiasm, sedan ingenting. Det är inte för att folk inte bryr sig. Det är för att ett event inte bygger en vana.",
      "Det som fungerar är repetition. Samma tid varje vecka, från skrivbordet. Ingen behöver åka någonstans, byta om eller förbereda sig. De loggar in, de gör det, de fortsätter sin dag.",
      "Jag leder andning, meditation och yoga för team i Stockholm, live på Teams varje vecka. Klasserna hålls på engelska, perfekt för internationella team. Från nivå 2 ingår också besök på ert kontor varje månad."
    ]}
    highlights={[
      {
        heading: "Weekly Practice",
        text: "En session i veckan på Teams. Andning, meditation eller stolsyoga, 20 till 30 minuter. Kameran behöver inte vara på. Fungerar från skrivbordet eller ett tyst rum."
      },
      {
        heading: "Embedded Wellness",
        text: "Två sessioner i veckan på Teams plus ett besök på plats varje månad och ett uppföljningssamtal. Vana plus närvaro."
      },
      {
        heading: "Full Program",
        text: "Två sessioner i veckan på Teams, två besök på kontoret varje månad och uppföljning varannan vecka. Wellness som en verklig del av er kultur."
      }
    ]}
    pricing={[
      {
        label: 'Weekly Practice',
        price: '2 500 kr/mån',
        note: '1 session/vecka på Teams, 20–30 min. Andning, meditation eller stolsyoga.'
      },
      {
        label: 'Embedded Wellness',
        price: '5 000 kr/mån',
        note: '2 sessioner/vecka på Teams + 1 besök på plats/mån + uppföljningssamtal.'
      },
      {
        label: 'Full Program',
        price: '7 500 kr/mån',
        note: '2 sessioner/vecka på Teams + 2 besök/mån + uppföljning varannan vecka.'
      },
    ]}
    detailsHeading="Hur det fungerar"
    detailsParagraphs={[
      { subheading: "Kom igång" },
      "Vi börjar med ett introduktionsmöte hos er, ungefär 45 minuter. Jag lär mig vad teamet behöver, ni lär känna mig, och vi sätter upp de återkommande tiderna som passar er arbetsdag.",
      "Sedan kör vi. Samma tid varje vecka. Ni får en Teams-länk i kalendern. De som vill är med, de som inte kan hoppar av den veckan och är med nästa.",
      { subheading: "Online och på plats" },
      "Alla tre nivåerna inkluderar veckovisa Teams-sessioner på 20 till 30 minuter. Från nivå 2 ingår också att jag kommer till ert kontor varje månad. Besöken kan vara andningspaus, meditation, stolsyoga eller en full klass med mattor, beroende på vad ni vill och hur mycket utrymme ni har.",
      { subheading: "Uppföljning" },
      "Från nivå 2 ingår ett månadsvis uppföljningssamtal på 15 till 20 minuter med er kontaktperson, oftast HR. Vi pratar om vad som fungerar, vad vi justerar, och om teamet märker skillnad.",
      { subheading: "Kickoffs och engångsevent" },
      "Vill ni ha yoga till ett specifikt event som en kickoff, AW, konferens eller sommaravslutning bokas det separat. Maila med era önskemål, antal deltagare, plats och datum för en offert.",
      { subheading: "Kontakt" },
      "Maila hello.yogawithcamilla@gmail.com med era önskemål, antal anställda och var ni sitter. Jag sätter ihop ett förslag."
    ]}
    ctaHeading="Boka ett introduktionsmöte"
    ctaText="Ett möte på 45 minuter. Jag lär mig vad ert team behöver och ni ser om det här är rätt för er."
    faq={[
      {
        question: "Varför abonnemang och inte ett engångsevent?",
        answer: "Engångsevent ger ett tillfälligt lyft, sedan är det bortglömt. Det som bygger verklig effekt är repetition. Samma tid varje vecka skapar en vana, och det är vanan som faktiskt minskar stress och förbättrar fokus över tid."
      },
      {
        question: "Behöver deltagarna ha yogaerfarenhet?",
        answer: "Nej. De flesta deltagare på företagssessioner är nybörjare. Formaten är utformade för att fungera för alla, inklusive de som aldrig gjort yoga."
      },
      {
        question: "Vad behöver vi ha på kontoret?",
        answer: "För Teams-sessionerna behövs ingenting utöver en dator och ett tyst hörn om man vill ha det. För besök på plats behövs ett rum som är tillräckligt stort. Har ni egna yogamattor är det perfekt, men det krävs inte."
      },
      {
        question: "Hur lång är varje session?",
        answer: "Teams-sessionerna är 20 till 30 minuter. Besöken på plats är flexibla, 20 till 45 minuter beroende på format och vad som passar er dag."
      },
      {
        question: "Kan vi byta nivå?",
        answer: "Ja. Många börjar på nivå 1 för att testa och uppgraderar när de sett att det fungerar för teamet. Vi justerar vid månadsskiftet."
      },
      {
        question: "Hur bokar vi kickoff eller engångsevent?",
        answer: "Maila hello.yogawithcamilla@gmail.com med era önskemål, datum, antal deltagare och plats. Engångsevent bokas separat från abonnemangen."
      }
    ]}
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Corporate Yoga & Wellness in English | Stockholm",
      text: "Recurring weekly yoga and mindfulness for teams in Stockholm, led in English by a 500-hour certified teacher.\n\nThree subscription tiers from 2,500 SEK/month. Teams sessions every week from your desk, in-person office visits included from tier 2. Ideal for international teams and companies with remote or hybrid setups.\n\nAlso available: one-off sessions for kickoffs, after-works, conferences, and summer send-offs.\n\nEmail hello.yogawithcamilla@gmail.com with your team size, location and needs."
    }}
  />
);

export default ForetagsYoga;
