import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Camilla",
  "jobTitle": "Certifierad Yogalärare",
  "description": "Australiensisk yogalärare baserad i Stockholm med regelbundna klasser i Dalarna. 500-timmar certifierad i vinyasa yoga.",
  "url": "https://yogawithcamilla.se/om-mig",
  "sameAs": [
    "https://www.youtube.com/@camilla_yoga",
    "https://www.instagram.com/yoga_with_camilla",
    "https://www.tiktok.com/@yoga_with_camilla"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Dalarna",
    "addressCountry": "SE"
  },
  "worksFor": [
    { "@type": "Organization", "name": "WD Wellness", "address": { "@type": "PostalAddress", "addressLocality": "Vansbro" } },
    { "@type": "Organization", "name": "Hot Yoga Stockholm" },
    { "@type": "Organization", "name": "Yogarummet Björkhagen" },
    { "@type": "Organization", "name": "Brahma Yoga Nacka" },
    { "@type": "Organization", "name": "Smashing Balance" }
  ]
};

const credentials = [
  {
    title: "500 timmars yoga-certifiering",
    detail: "200h YTT vid Rishikul Yogshala, Rishikesh, Indien\n300h YTT vid Sampoorna Yoga Shala, Goa — Advanced Vinyasa Flow"
  },
  {
    title: "Fitness & rörelsevetenskap",
    detail: "Certificate III in Fitness, Australien\n7 år som internationellt certifierad Les Mills Bodypump-instruktör i Australien & Sverige (certifierad 2018)"
  },
  {
    title: "Ultralöpning",
    detail: "5 ultramaraton genomförda, inklusive en pallplats\nUthållighetsträning som en praktik i närvaro, inte prestation"
  },
  {
    title: "Meditation & mindfulness",
    detail: "Retreater med Kadampa Meditation Center\nTranquil Wisdom Insight Meditation (TWIM)"
  }
];

const OmMig = () => {
  return (
    <>
      <SEO
        title="Om Camilla — Yogalärare i Dalarna & Stockholm | Yoga with Camilla"
        description="Australiensisk yogalärare baserad i Stockholm med regelbundna klasser i Dalarna. 500-timmar certifierad. Yoga som självacceptans, inte självförbättring."
        canonical="https://yogawithcamilla.se/om-mig"
        structuredData={structuredData}
      />

      <Navbar />
      <div className="min-h-screen bg-dalashala-beige pt-20">

        {/* ── Hero ── */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-montserrat text-xs text-dalashala-mediumBrown uppercase tracking-widest mb-4">
              Om mig
            </p>
            <h1 className="font-cinzel text-4xl md:text-5xl text-dalashala-darkBrown leading-tight mb-6">
              Yogalärare i Dalarna<br className="hidden md:block" /> & Stockholm
            </h1>
            <p className="font-eb-garamond text-xl text-dalashala-darkBrown max-w-xl mx-auto leading-relaxed">
              Certifierad yogalärare, ursprungligen från Australien. Baserad i Stockholm med regelbundna klasser i Dalarna.
            </p>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="py-4 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-5 gap-8 items-start">
                <div className="md:col-span-3 space-y-6">
                  <p className="font-eb-garamond text-lg leading-relaxed text-dalashala-darkBrown">
                    Jag heter Camilla. Jag är australiensisk, 500-timmar certifierad yogalärare och undervisar yoga i Stockholm och Dalarna. Jag har instruerat fitness i sju år som Les Mills-instruktör och sprungit fem ultramaraton — inklusive en pallplats. Rörelse har alltid varit en stor del av mitt liv.
                  </p>
                  <p className="font-eb-garamond text-lg leading-relaxed text-dalashala-darkBrown">
                    Jag älskar rörelse, natur och mindfulness — och upplever hur mycket de ger tillbaka när man gör dem till en del av vardagen. Yoga är för mig den röda tråden: ett sätt att vara närvarande, andas och hitta balans mitt i allt annat.
                  </p>
                  <p className="font-eb-garamond text-lg leading-relaxed text-dalashala-darkBrown">
                    Jag är baserad i Stockholm och undervisar även i Dalarna, där jag har en stuga med en stor altan som ibland förvandlas till yogashala.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/IMG_5776.JPG"
                      alt="Camilla i warrior pose på altanen i Dalarna"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Philosophy ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-dalashala-tan rounded-2xl p-8 md:p-10">
              <p className="font-eb-garamond text-lg leading-relaxed text-dalashala-darkBrown">
                Mina klasser är utmanande men inte bestraffande. Inga extrema poser, ingen tävling med grannen på mattan. Yoga som rörelse, andning och närvaro — oavsett om vi är på altanen i Dalarna eller i ett studio i Stockholm.
              </p>
            </div>
          </div>
        </section>

        {/* ── Credentials ── */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-cinzel text-2xl md:text-3xl text-dalashala-darkBrown text-center mb-8">
              Utbildning & bakgrund
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div key={cred.title} className="bg-white rounded-xl p-6">
                  <h3 className="font-montserrat text-xs text-dalashala-mediumBrown uppercase tracking-widest mb-3">
                    {cred.title}
                  </h3>
                  <p className="font-eb-garamond text-dalashala-darkBrown leading-relaxed whitespace-pre-line">
                    {cred.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Where I teach ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-cinzel text-2xl text-dalashala-darkBrown mb-6">
                Var jag undervisar
              </h2>
              <p className="font-eb-garamond text-lg text-dalashala-darkBrown leading-relaxed mb-4">
                Jag undervisar på <strong>WD Wellness i Vansbro</strong>, <strong>Hot Yoga Stockholm</strong>, <strong>Yogarummet Björkhagen</strong>, <strong>Brahma Yoga i Nacka</strong> och som SUP yoga-lärare för <strong>Smashing Balance</strong>.
              </p>
              <p className="font-eb-garamond text-lg text-dalashala-darkBrown leading-relaxed">
                Jag tar också emot bokningar för privatlektioner, företagsevent, möhippor, bröllop och gruppevent i Dalarna och Stockholm.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-2xl p-10 text-center"
              style={{ backgroundColor: '#864927' }}
            >
              <h2 className="font-cinzel text-2xl text-dalashala-beige mb-4">
                Vill du yoga med mig?
              </h2>
              <p className="font-eb-garamond text-dalashala-tan text-lg mb-8 leading-relaxed">
                Se mina tjänster eller hör av dig direkt — oavsett om det är en privatlektion, ett bröllop, en konferens eller en morgonklass på veranadan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/tjanster/privatlektioner"
                  className="font-montserrat text-sm px-6 py-3 rounded-full transition-colors"
                  style={{ backgroundColor: '#f9dec6', color: '#864927' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f9dec6')}
                >
                  Se alla tjänster
                </Link>
                <Link
                  to="/#contact"
                  className="font-montserrat text-sm px-6 py-3 rounded-full border transition-colors"
                  style={{ borderColor: '#f9dec6', color: '#f9dec6' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#95593b')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  Kontakta mig
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── English section ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="font-montserrat text-xs text-dalashala-mediumBrown uppercase tracking-widest mb-4">
              In English
            </p>
            <h2 className="font-cinzel text-2xl text-dalashala-darkBrown mb-6">
              About Camilla — Yoga Teacher in Dalarna &amp; Stockholm, Sweden
            </h2>
            <div className="space-y-5 font-eb-garamond text-lg text-dalashala-darkBrown leading-relaxed">
              <p>
                I'm Camilla, an Australian-born 500-hour certified yoga teacher based in Stockholm, Sweden, with regular classes in Dalarna. I teach vinyasa and yin yoga in Swedish and English.
              </p>
              <p>
                I love movement, nature, and mindfulness — and I've experienced firsthand how much they give back when you make them part of everyday life. I completed my 200-hour YTT at Rishikul Yogshala in Rishikesh, India, and my 300-hour advanced vinyasa training at Sampoorna Yoga Shala in Goa. I also have a background in fitness instruction as a Les Mills certified instructor (7 years, Australia and Sweden), and I've completed five ultramarathons — including a podium finish.
              </p>
              <p>
                My approach to yoga is simple: challenging but not punishing. I'm not interested in impressive poses or performance. I'm interested in what yoga becomes when it stops being another thing you have to do well.
              </p>
              <p>
                I teach at WD Wellness in Vansbro, Hot Yoga Stockholm, Yogarummet Björkhagen, Brahma Yoga in Nacka, and as the SUP yoga teacher for Smashing Balance. I also take bookings for private lessons, corporate yoga, bachelorette yoga, wedding yoga, and yoga retreats across Stockholm and Dalarna.
              </p>
              <p>
                If you're a tourist looking for a yoga class in Dalarna, an expat in Stockholm searching for English-language yoga, or you simply found me on YouTube — you're welcome to get in touch.
              </p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default OmMig;
