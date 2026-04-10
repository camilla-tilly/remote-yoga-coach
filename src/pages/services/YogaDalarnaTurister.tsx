import { useEffect } from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';

const relatedServices = [
  { label: 'Hönsyoga', href: '/tjanster/honsyoga' },
  { label: 'Mini Yoga Retreat', href: '/tjanster/mini-retreat' },
  { label: 'Adventure Paket', href: '/tjanster/adventure-paket' },
  { label: 'Online Yoga', href: '/tjanster/online-yoga' },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Yoga in Dalarna for Tourists",
  "description": "Private English-speaking yoga classes for tourists visiting Dalarna, Sweden. Outdoor yoga at a forest cabin, SUP yoga, chicken yoga, and guided nature retreats.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Yoga med Camilla",
    "url": "https://yogawithcamilla.se"
  },
  "areaServed": ["Dalarna", "Sweden"],
  "inLanguage": "en",
  "url": "https://yogawithcamilla.se/tjanster/yoga-dalarna-turister"
};

const YogaDalarnaTurister = () => {
  // English-first page — set html lang="en" while mounted
  useEffect(() => {
    const prev = document.documentElement.lang || 'sv';
    document.documentElement.lang = 'en';
    return () => { document.documentElement.lang = prev; };
  }, []);

  return (
  <ServicePageLayout
    seoTitle="Yoga in Dalarna for Tourists — English Classes in the Swedish Forest | Yoga with Camilla"
    seoDescription="Private English-speaking yoga for tourists in Dalarna, Sweden. Forest cabin yoga, chicken yoga and SUP yoga — book a unique Swedish experience."
    canonical="https://yogawithcamilla.se/tjanster/yoga-dalarna-turister"
    ogImage="https://yogawithcamilla.se/lovable-uploads/yoga-outdoor-pose.jpg"
    breadcrumbLabel="Yoga for Tourists"
    heroTag="For Visitors to Dalarna, Sweden"
    heroHeading="Yoga in Dalarna for Tourists"
    heroSubtitle="Private English-speaking yoga classes at a forest cabin in Dalarna — a calm, grounded experience for travellers visiting central Sweden."
    introHeading="A Swedish yoga experience, in English"
    introParagraphs={[
      "Visiting Dalarna and looking for something calm, grounded, and distinctly Swedish? I run private yoga classes in English from a forest cabin in Dala-Järna — roughly halfway between Stockholm and the Norwegian border.",
      "Classes are fully in English and designed for travellers. No yoga experience needed. I bring all the equipment and tailor the session to you or your group.",
      "I'm a 500-hour certified yoga teacher originally from Australia. I teach all levels and always make sure first-time visitors feel at home."
    ]}
    highlights={[
      {
        heading: "Forest Cabin Yoga",
        text: "Outdoor yoga on the cabin deck, surrounded by Swedish pine forest. Early morning or late afternoon is best — bird song, soft light, nothing rushed."
      },
      {
        heading: "Chicken Yoga (Hönsyoga)",
        text: "Yoga with free-roaming chickens around your mat — Sweden's quieter answer to goat yoga. A calm, grounded experience unique to this cabin."
      },
      {
        heading: "SUP Yoga (Stockholm)",
        text: "If you're travelling via Stockholm, I also run SUP yoga on paddleboards at Sickla Strand, May to September. Great for groups of friends or couples."
      },
      {
        heading: "Day Retreat",
        text: "Combine yoga with a guided forest walk, meditation and a simple fika (Swedish coffee break). A calm, full-day experience away from the crowds."
      }
    ]}
    detailsHeading="Practical information"
    detailsParagraphs={[
      "The cabin is in Dala-Järna, Dalarna — about 3.5 hours by car or train from Stockholm. The nearest station is Vansbro. Classes run from May to September when outdoor yoga is possible. Private bookings year-round can be arranged indoors.",
      "Groups up to 6 people. All equipment included. Email hello.yogawithcamilla@gmail.com with your travel dates and group size to enquire."
    ]}
    pricing={[
      {
        label: "Private class",
        price: "contact for quote",
        note: "60 min, up to 6 people, all equipment included."
      },
      {
        label: "Day experience",
        price: "contact for quote",
        note: "Yoga + forest walk + fika, small groups only."
      }
    ]}
    ctaHeading="Book a yoga experience in Dalarna"
    ctaText="Email me your travel dates and group size — I'll send back options that fit your trip."
    structuredData={structuredData}
    relatedServices={relatedServices}
    englishKeywords={{
      heading: "Yoga in Sweden for Tourists — Dalarna & Stockholm",
      text: "Looking for yoga in Sweden as a tourist? I offer private English-speaking yoga classes in Dalarna (central Sweden) and SUP yoga in Stockholm. Outdoor yoga at a forest cabin, chicken yoga, paddleboard yoga, and guided day retreats combining yoga with a nature walk. A 500-hour certified teacher originally from Australia, now teaching yoga in the Swedish forest. Perfect for travellers seeking a quiet, grounded experience outside the cities. Email hello.yogawithcamilla@gmail.com to plan your visit."
    }}
    faq={[
      {
        question: "How do I get to the cabin from Stockholm?",
        answer: "The easiest option is to take the train from Stockholm Central to Vansbro (about 3.5 hours), then a short taxi ride to Dala-Järna. I can help coordinate the logistics when you book."
      },
      {
        question: "What's the best time of year to visit?",
        answer: "May to September is ideal — the days are long, the weather is mild and outdoor yoga on the deck is possible. I also run classes indoors in winter for private bookings."
      },
      {
        question: "Do I need any yoga experience?",
        answer: "No. Classes are tailored to your level, whether you're a complete beginner or experienced. I'll adapt the session to your group."
      },
      {
        question: "Can I combine this with SUP yoga in Stockholm?",
        answer: "Yes. If you're spending time in both cities, I can coordinate a SUP yoga class in Stockholm at Sickla Strand and a forest yoga session in Dalarna. Just mention both when you email."
      }
    ]}
  />
  );
};

export default YogaDalarnaTurister;
