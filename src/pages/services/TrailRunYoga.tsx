import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'SUP Yoga Stockholm', href: '/tjanster/sup-yoga' },
  { label: 'Mini Retreat Dalarna', href: '/tjanster/mini-retreat' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'Privatlektioner', href: '/tjanster/privatlektioner' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Trail Run + Yoga — Stockholm",
  "description": "Guidat trail run eller vandring i Nacka Naturreservat följt av SUP yoga på Sicklasjön. Halvdag för grupper och företag i Stockholm.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/trail-run-yoga"
};

const TrailRunYoga = () => (
  <ServicePageLayout
    seoTitle="Trail Run + Yoga Stockholm — Nacka Naturreservat | Yoga med Camilla"
    seoDescription="Guidat trail run eller vandring i Nacka Naturreservat + SUP yoga på Sicklasjön. Halvdag för grupper och företag i Stockholm."
    canonical="https://yogawithcamilla.se/tjanster/trail-run-yoga"
    ogImage="https://yogawithcamilla.se/images/IMG_6175.jpg"
    breadcrumbLabel="Trail Run + Yoga"
    heroTag="Löp & Yoga · Stockholm"
    heroHeading="Trail Run + Yoga"
    heroSubtitle="Trail run eller vandring i Nacka Naturreservat, följt av SUP yoga på Sicklasjön. Halvdag ca 3–4 timmar."
    heroImage="/images/IMG_6175.jpg"
    heroImageAlt="Utsikt över Nacka Naturreservat — trail run och yoga"
    heroImagePosition="center 40%"
    introHeading="Hur det funkar"
    introParagraphs={[
      "Trail run eller vandring i Nacka Naturreservat, följt av SUP yoga på Sicklasjön i samarbete med Smashing Balance. Halvdag ca 3–4 timmar, grupper om 2–10 personer.",
      "Du behöver inte vara löpare — tempot anpassas efter gruppen och vandring är alltid ett alternativ."
    ]}
    highlights={[
      {
        heading: "Trail + SUP Yoga",
        text: "Guidat löp- eller vandringpass i Nacka Naturreservat, följt av SUP yoga på Sicklasjön. All SUP-utrustning ingår via Smashing Balance."
      },
      {
        heading: "Alla nivåer",
        text: "Jag anpassar tempot och sträckan. Vandring är alltid ett alternativ."
      },
      {
        heading: "Teambuilding",
        text: "Funkar bra som företagsdag — en halvdag utomhus som faktiskt känns annorlunda."
      }
    ]}
    pricing={[
      { label: 'Halvdag (2–10 pers)', price: 'kontakta för pris', note: 'Ca 3–4 timmar. Trail i Nacka + SUP yoga på Sicklasjön.' },
      { label: 'Företagsdag (10+ pers)', price: 'kontakta för offert', note: 'Offert baseras på gruppstorlek och upplägg.' },
    ]}
    detailsHeading="Praktisk information"
    detailsParagraphs={[
      "Plats: Nacka Naturreservat + Sicklasjön. Enkelt att nå med kollektivtrafik.",
      "Ta med: löparskor eller vandringsskor, bekväma kläder, vattenflaska.",
      "Maila hello.yogawithcamilla@gmail.com med gruppstorlek och önskat datum."
    ]}
    ctaHeading="Boka Trail Run + Yoga"
    ctaText="Hör av dig med gruppstorlek och önskat datum."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Trail Running + Yoga — Stockholm, Sweden",
      body: "A guided trail run or hike in Nacka Nature Reserve combined with SUP yoga on Sicklasjön, Stockholm. Half-day packages for groups, corporate teams, runners, and adventure seekers. No running experience needed — hiking is always an option. Led by a 500-hour certified yoga teacher and ultramarathon runner.",
      ctaText: "Book a trail run and yoga experience",
      ctaHref: "mailto:hello.yogawithcamilla@gmail.com"
    }}
  />
);

export default TrailRunYoga;
