import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
  { label: 'Online Yoga', href: '/tjanster/online-yoga' },
  { label: 'Mini Retreat', href: '/tjanster/mini-retreat' },
  { label: 'Äventyrpaket', href: '/tjanster/adventure-paket' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Yoga för Löpare – Stockholm & Dalarna",
  "description": "Yoga för löpare och uthållighetsidrottare i Stockholm och Dalarna. Rörlighet, styrka och återhämtning för alla distanser – ledd av en ultra runner med 500h yogacertifiering.",
  "provider": { "@type": "LocalBusiness", "name": "Yoga med Camilla", "url": "https://yogawithcamilla.se" },
  "areaServed": ["Stockholm", "Dalarna"],
  "url": "https://yogawithcamilla.se/tjanster/yoga-for-lopare"
};

const YogaForRunners = () => (
  <ServicePageLayout
    seoTitle="Yoga för Löpare Stockholm & Dalarna – Recovery Yoga | Yoga med Camilla"
    seoDescription="Yoga för löpare och uthållighetsidrottare i Stockholm och Dalarna. Rörlighet, styrka och återhämtning – ledd av en ultra runner och 500h certifierad yogalärare."
    canonical="https://yogawithcamilla.se/tjanster/yoga-for-lopare"
    heroTag="Yoga för Löpare"
    heroHeading="Yoga för Löpare & Uthållighetsidrottare"
    heroSubtitle="Yogaklasser byggda av en löpare, för löpare. Fem ultramaraton upp till 100 km – och ett decennium av yoga. Jag vet exakt var din kropp behöver arbete."
    heroImage="/lovable-uploads/c1e6d7f9-3ac6-42af-ac83-3058516ff2ef.png"
    heroImageAlt="Yoga för löpare – rörlighet och återhämtning i naturen"
    introHeading="Vad yoga faktiskt gör för din löpning"
    introParagraphs={[
      "Löpare är ofta starka men stela. Höftböjare, hamstrings, IT-band, vader – det är de klassiska problemen, och de behandlas sällan tillräckligt. Yoga adresserar just dessa mönster, inte som stretching i slutet av ett pass, utan som ett eget system för rörlighet, styrka och kroppskännedom.",
      "Jag är 500-timmars certifierad yogalärare och har de senaste fyra åren sprungit fem ultramaraton med längden upp till 100 km. Det betyder att jag undervisar yoga för löpare inifrån – inte som en teori, utan som något jag lever med i min egen kropp och träning.",
      "Yoga för löpare handlar inte om att bli maximal flexibel. Det handlar om att röra dig bättre, skada dig mindre, och återhämta dig snabbare. Det är en investering i din löpning – oavsett om du springer 5 km eller 50."
    ]}
    highlights={[
      {
        heading: "Rörlighet & rörelseanalys",
        text: "Vi arbetar med de specifika mönster som löpning skapar – höftböjare, hamstrings, IT-band, vader, fotsulor. Fokus på funktionell rörlighet, inte akrobatik."
      },
      {
        heading: "Styrka & stabilitet",
        text: "Enbensstyrka, höftstabilitet och rumpmuskulatur är ofta understimulerande hos löpare. Yoga bygger dessa mönster med kroppsvikt på ett sätt som kompletterar din löpträning."
      },
      {
        heading: "Återhämtning",
        text: "Yin yoga och restorativ yoga efter tuffa pass eller lopp. Djup vävnad, nervsystem och mental återhämtning. Perfekt dagen efter ett långpass eller en tävling."
      },
      {
        heading: "Mentalt fokus",
        text: "Löpning och yoga delar en kärna: att hålla närvaro under uthållighet. Vi arbetar med andning och koncentrationstekniker som är direkt överförbara till löptävlingar och långa pass."
      }
    ]}
    pricing={[
      {
        label: "Enstaka privat lektion (60 min)",
        price: "kontakta för pris",
        note: "Skräddarsydd för just dina löparmönster."
      },
      {
        label: "Paket – 5 lektioner",
        price: "kontakta för pris",
        note: "Rekommenderat för att se verklig förändring."
      },
      {
        label: "Online lektion (60 min)",
        price: "kontakta för pris",
        note: "Via Zoom. Samma kvalitet, var du än är."
      },
      {
        label: "Grupplektion (löpargrupp)",
        price: "kontakta för pris",
        note: "Kontakta för anpassat upplägg för din löpargrupp."
      }
    ]}
    detailsHeading="Upplägg och format"
    detailsParagraphs={[
      "Privata lektioner är 60 eller 90 minuter och hålls i Stockholm (hyrd sal), i Dalarna (på stugan) eller online via Zoom. Vi börjar alltid med en kort genomgång av dina mål och eventuella skadehistorik.",
      "Har du en löpargrupp eller ett löparsällskap? Jag erbjuder grupplektioner för löpare – ett ypperligt komplement till er reguljära träning. Hör av er för ett anpassat upplägg.",
      "Maila hello.yogawithcamilla@gmail.com för att boka eller ställa frågor."
    ]}
    ctaHeading="Ge din löpning ett nytt lager"
    ctaText="Oavsett om du precis börjat springa eller siktar på ditt nästa ultra – yoga är investeringen du inte visste att du behövde."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Yoga for Runners in Sweden – Stockholm & Dalarna",
      text: "Looking for yoga for runners in Sweden? I offer private and group yoga classes specifically designed for runners and endurance athletes in Stockholm and Dalarna — plus online sessions worldwide. As a certified 500hr yoga teacher and ultra marathon runner (five ultras up to 100km), I understand exactly what running does to your body and how yoga addresses it. Classes focus on mobility, hip flexors, hamstrings, recovery, and the mental focus that endurance sports demand. All sessions are taught in English. Book a private yoga session for runners by emailing hello.yogawithcamilla@gmail.com."
    }}
  />
);

export default YogaForRunners;
