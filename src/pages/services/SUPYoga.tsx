import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Möhippa Yoga', href: '/tjanster/mohippa-yoga' },
  { label: 'Företagsyoga', href: '/tjanster/foretagsyoga' },
  { label: 'Äventyrpaket', href: '/tjanster/adventure-paket' },
  { label: 'Yoga för Turister', href: '/tjanster/yoga-dalarna-turister' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SUP Yoga Stockholm – Sickla Strand",
  "description": "SUP yoga classes at Sickla Strand, Stockholm. Open classes in vinyasa and yin yoga on paddleboards, plus private events. In partnership with Smashing Balance.",
  "provider": { "@type": "LocalBusiness", "name": "Yoga with Camilla", "url": "https://yogawithcamilla.se" },
  "areaServed": ["Stockholm"],
  "url": "https://yogawithcamilla.se/tjanster/sup-yoga"
};

const SUPYoga = () => (
  <ServicePageLayout
    seoTitle="SUP Yoga Stockholm – Paddleboard Yoga at Sickla Strand | Yoga with Camilla"
    seoDescription="SUP yoga at Sickla Strand, Stockholm — vinyasa and yin yoga on paddleboards. Open classes and private events. In partnership with Smashing Balance. No experience needed."
    canonical="https://yogawithcamilla.se/tjanster/sup-yoga"
    heroTag="SUP Yoga · Stockholm"
    heroHeading="Yoga on the Water"
    heroSubtitle="Paddleboard yoga at Sickla Strand, Stockholm. Open classes in vinyasa and yin, plus private events for groups. In partnership with Smashing Balance."
    heroImage="/images/sup-yoga-poster.png"
    heroImageAlt="SUP yoga på Sicklasjön, Stockholm — April–September 2026"
    introHeading="What to expect"
    introParagraphs={[
      "SUP yoga is yoga on a wide, stable paddleboard on open water. The moving surface means you work harder to stay steady — and that tends to take care of the mental noise on its own. Classes are held at Sickla Strand in Stockholm, in partnership with Smashing Balance who handle all the kit and safety on the water.",
      "No experience needed — in yoga or SUP. Every class starts with a safety briefing and paddleboard intro on land before heading out onto the water. Teaching is in English.",
      "After class, the wood-fired sauna is included in your price.",
      "Free first week: all drop-in classes at Sickla Strand are free 21–27 April 2026. No experience needed, just show up."
    ]}
    highlights={[
      {
        heading: "Vinyasa SUP Yoga",
        text: "A flowing, active class on the board. Movements are adapted for the water — you build strength and balance together. Suitable for most levels."
      },
      {
        heading: "Yin SUP Yoga",
        text: "Slow, held positions on the board with the water moving gently underneath you. Good for recovery or if you want something quieter and more restorative."
      },
      {
        heading: "Open classes",
        text: "Book a spot in a scheduled class and join other participants on the water. Classes run May–September. Schedule and booking via Smashing Balance."
      },
      {
        heading: "Private events",
        text: "Book the whole class for your group — hen party, birthday, corporate event, or just a day on the water with friends. You choose the format (vinyasa or yin), date and time."
      }
    ]}
    pricing={[
      {
        label: "Drop-in (incl. equipment + sauna)",
        price: "350 kr",
        note: "Paddleboard, paddle and wood-fired sauna included."
      },
      {
        label: "Drop-in with own board (+ sauna)",
        price: "150 kr",
        note: "Sauna included."
      },
      {
        label: "Season pass 2026 (incl. sauna)",
        price: "1 500 kr",
        note: "All classes this season. Personal, non-transferable."
      },
      {
        label: "10-class card",
        price: "1 000 kr",
        note: "Shareable — use it with a friend."
      },
      {
        label: "Private event (up to 10 people, 1 hr)",
        price: "2 500 kr",
        note: "All SUP equipment included. Contact to book."
      }
    ]}
    detailsHeading="Practical information"
    detailsParagraphs={[
      "Location: Sickla Strand, Stockholm — easy to reach by tube (Sickla station). Free parking available.",
      "Season: Open classes May–September. Private events can be arranged outside the season weather permitting.",
      "Equipment: Paddleboards and paddles provided by Smashing Balance. Life jackets and dry bags available on site. Changing facilities on site.",
      "No prior experience required. Every class starts with a safety briefing and paddleboard walkthrough on land.",
      "Teaching in English.",
      "Open classes: book via Smashing Balance at smashingbalance.se/pages/sup-yoga-stockholm. Private events: email hello.yogawithcamilla@gmail.com with your date, group size and preferred format."
    ]}
    ctaHeading="Boka SUP Yoga i Stockholm"
    ctaText="Öppna klasser April–September 2026 på Sicklasjön. Boka via Smashing Balance — allt utrustning ingår. Vill du boka ett privat event (möhippa, team eller födelsedag)? Hör av dig så löser vi det."
    bookingHref="https://smashingbalance.se/collections/sup-yoga"
    bookingLabel="Boka SUP Yoga →"
    termsHref="/tjanster/sup-yoga/villkor"
    structuredData={structuredData}
    relatedServices={relatedServices}
  />
);

export default SUPYoga;
