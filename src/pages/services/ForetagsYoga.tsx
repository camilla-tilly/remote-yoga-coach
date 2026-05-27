import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices: { label: string; href: string }[] = [];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Företagsyoga och wellness-program för team i Stockholm",
  "description": "Återkommande yoga och mindfulness för företag i Stockholm. Tre nivåer från 2 500 kr/månaden. Veckovisa Teams-sessioner från skrivbordet, inget ombyte och ingen förflyttning.",
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
    seoTitle="Företagsyoga Stockholm | Yoga med Camilla"
    seoDescription="Återkommande yoga och andning för team i Stockholm. Inte ett engångsevent, en vana. Tre nivåer från 2 500 kr/mån. Teams varje vecka, direkt från skrivbordet."
    canonical="https://yogawithcamilla.se/tjanster/foretagsyoga"
    ogImage="https://yogawithcamilla.se/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.jpg"
    breadcrumbLabel="Företagsyoga"
    heroTag="Företagsyoga och teamwellness i Stockholm"
    heroHeading="Bättre fokus. Lägre stress. Varje vecka."
    heroSubtitle="Andning, meditation och rörelse varje vecka, på Teams, från skrivbordet. Inget ombyte. Ingen utrustning. Bara ett återkommande andrum som faktiskt håller."
    heroImage="/lovable-uploads/ec37a165-71d0-4960-bff7-48058352d12b.jpg"
    heroImageAlt="Yoga och välmående för företag i Stockholm"
    introHeading="Stressen försvinner inte av sig själv"
    introParagraphs={[
      "De flesta satsningar på personalvård fastnar i samma mönster: ett event, lite entusiasm, sedan ingenting. Det är inte för att folk inte bryr sig. Det är för att ett event inte bygger en vana.",
      "Det som fungerar är repetition. Samma tid varje vecka, från skrivbordet. Ingen behöver åka någonstans, byta om eller förbereda sig. De loggar in, de gör det, de fortsätter sin dag.",
      "Jag leder andning, meditation och rörelse för team i Stockholm, live på Teams varje vecka. Klasserna hålls på engelska, perfekt för internationella team."
    ]}
    pricingEyebrow="Abonnemang"
    pricing={[
      {
        label: '1 — Weekly Practice',
        price: '2 500 kr/mån',
        note: '2 sessioner/månad på Teams. Andning eller meditation, 20–30 min.'
      },
      {
        label: '2 — Embedded Wellness',
        price: '4 500 kr/mån',
        note: '1x andning/meditation + 1x rörelse och stretching/månad på Teams + månadvis uppföljning.'
      },
      {
        label: '3 — Full Program',
        price: '6 500 kr/mån',
        note: '2x andning/meditation + 1–2x rörelse och stretching/månad på Teams + uppföljning varannan månad.'
      },
    ]}
    detailsHeading="Hur det fungerar"
    detailsParagraphs={[
      { subheading: "Kom igång" },
      "Vi börjar med ett introduktionsmöte hos er, ungefär 45 minuter. Jag lär mig vad teamet behöver, ni lär känna mig, och vi sätter upp de återkommande tiderna som passar er arbetsdag.",
      "Sedan kör vi. Samma tid varje vecka. Ni får en Teams-länk i kalendern. De som vill är med, de som inte kan hoppar av den veckan och är med nästa.",
      { subheading: "Online, via Teams" },
      "Alla tre nivåerna körs på Teams, 20 till 30 minuter per session. Ni loggar in från skrivbordet, ett konferensrum eller hemma. Inget ombyte, inga mattor, ingen förflyttning. Vill ni ha ett andningsstopp eller meditation direkt på kontoret vid något enskilt tillfälle går det att ordna för format som inte kräver matta, säg till när ni bokar.",
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
        answer: "Ingenting. Sessionerna hålls på Teams och fungerar från skrivbordet eller ett tyst hörn. Inget ombyte, inga mattor, ingen utrustning."
      },
      {
        question: "Hur lång är varje session?",
        answer: "20 till 30 minuter. Lagom för att passa in i en arbetsdag utan att kännas som ett avbrott."
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
      text: "Recurring weekly yoga and mindfulness for teams in Stockholm, led in English by a 500-hour certified teacher.\n\nThree subscription tiers from 2,500 SEK/month. Sessions run on Teams, 20–30 minutes, straight from the desk. No changing, no equipment, no travel. We start with a one-off intro meeting at your office, then everything is online. Ideal for international teams and companies with remote or hybrid setups.\n\nAlso available: one-off sessions for kickoffs, after-works, conferences, and summer send-offs.\n\nEmail hello.yogawithcamilla@gmail.com with your team size, location and needs."
    }}
  />
);

export default ForetagsYoga;
