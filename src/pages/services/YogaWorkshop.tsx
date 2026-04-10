import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'Mini Yoga Retreat', href: '/tjanster/mini-retreat' },
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
  { label: 'Yoga för Löpare', href: '/tjanster/yoga-for-lopare' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Yoga Workshop i Stockholm & Dalarna",
  "description": "Tematiska yogaworkshops för grupper, företag och privata sällskap. Halvdag och heldag. Breathwork, yin, vinyasa, yoga för löpare och återhämtning.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna", "Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/yoga-workshop"
};

const YogaWorkshop = () => (
  <ServicePageLayout
    seoTitle="Yoga Workshop Stockholm & Dalarna – Tematiska Workshops | Yoga med Camilla"
    seoDescription="Yoga workshops i Stockholm och Dalarna. Halvdags- och heldagssessioner i breathwork, yin, vinyasa och återhämtning. För grupper och företag."
    canonical="https://yogawithcamilla.se/tjanster/yoga-workshop"
    ogImage="https://yogawithcamilla.se/lovable-uploads/yoga-outdoor-pose.jpg"
    breadcrumbLabel="Yoga Workshop"
    heroTag="Workshops & Tematisk Yoga"
    heroHeading="Yoga Workshops"
    heroSubtitle="Halvdags- eller heldagsworkshops där vi går på djupet i ett tema — breathwork, yin, återhämtning eller yoga för löpare. För grupper, företag och privata sällskap."
    introHeading="Gå på djupet i ett tema"
    introParagraphs={[
      "En yogaworkshop är längre och mer tematisk än en vanlig klass. Ni väljer fokus — andning, rörlighet, återhämtning eller mental balans — och vi ägnar några timmar åt det tillsammans.",
      "Workshops passar bra som en del av en teamdag, en vänners helg, en företagskonferens eller som ett skräddarsytt event för en yogagrupp. Jag håller dem på svenska eller engelska."
    ]}
    highlights={[
      {
        heading: "Breathwork & Meditation",
        text: "En 2–3 timmars workshop i andningstekniker, pranayama och enklare meditationsövningar. Inga förkunskaper krävs — lämpligt för team, retreats och privata grupper."
      },
      {
        heading: "Yin & Återhämtning",
        text: "En långsam workshop med längre positioner och fokus på det parasympatiska nervsystemet. Perfekt för dig som lever i högt tempo och behöver sakta ner."
      },
      {
        heading: "Yoga för Löpare",
        text: "En workshop byggd för löpare — fokus på höfter, hälsenor, ländrygg och balans. Halvdag med teori, praktik och återhämtning."
      },
      {
        heading: "Skräddarsytt tema",
        text: "Har ni ett annat tema i åtanke? Hör av er. Jag kan bygga en workshop runt det ni behöver — företagsfokuserat, milestone-firande eller ett tema ni själva väljer."
      }
    ]}
    pricing={[
      {
        label: "Halvdag (3 tim)",
        price: "kontakta för pris",
        note: "Upp till 12 personer, utrustning ingår."
      },
      {
        label: "Heldag (6 tim)",
        price: "kontakta för pris",
        note: "Större grupper, flera block, lunchrast."
      }
    ]}
    ctaHeading="Boka en yogaworkshop"
    ctaText="Maila mig med ert tema, önskat datum och antal deltagare — så sätter jag ihop ett förslag."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Yoga Workshops in English — Stockholm & Dalarna",
      text: "Half-day and full-day themed yoga workshops in Stockholm and Dalarna, Sweden. Led in English by a 500-hour certified yoga teacher. Topics include breathwork, yin, recovery yoga, and yoga for runners. Ideal for corporate teams, retreats, and private groups. Email hello.yogawithcamilla@gmail.com to book."
    }}
    faq={[
      {
        question: "Hur lång är en workshop?",
        answer: "Halvdag är cirka 3 timmar och heldag cirka 6 timmar inklusive pauser. Jag kan också bygga en kortare 2-timmars session om det passar bättre."
      },
      {
        question: "Vilken nivå behöver deltagarna ha?",
        answer: "Ingen förkunskap krävs för de flesta workshops. Jag anpassar innehållet efter gruppen och ger alltid varianter för olika nivåer."
      },
      {
        question: "Kan ni kombinera flera teman?",
        answer: "Ja, ofta. En heldag kan till exempel kombinera breathwork, yin yoga och en kort vandring. Hör av er så skräddarsyr vi ihop det."
      }
    ]}
  />
);

export default YogaWorkshop;
