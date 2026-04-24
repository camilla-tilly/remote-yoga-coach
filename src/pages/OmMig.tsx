import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { softenAmp } from '@/lib/amp';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Camilla",
  "jobTitle": "Certifierad Yogalärare",
  "description": "Australiensisk yogalärare baserad i Stockholm med undervisar även i Dalarna. 500-timmar certifierad i vinyasa yoga.",
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
    detail: "200h YTT vid Rishikul Yogshala, Rishikesh, Indien\n300h YTT vid Sampoorna Yoga Shala, Goa i Advanced Vinyasa Flow"
  },
  {
    title: "Fitness & rörelsevetenskap",
    detail: "Certificate III in Fitness, Australien\n7 år som internationellt certifierad Les Mills Bodypump-instruktör i Australien & Sverige (certifierad 2018)"
  },
  {
    title: "Ultralöpning",
    detail: "5 ultramaraton genomförda, inklusive en pallplats"
  },
  {
    title: "Meditation & mindfulness",
    detail: "Erfarenhet inom Kadampa Buddhism meditation\noch Tranquil Wisdom Insight Meditation (TWIM)"
  }
];

const OmMig = () => {
  return (
    <>
      <SEO
        title="Om Camilla | Yogalärare i Dalarna & Stockholm | Yoga with Camilla"
        description="Australiensisk yogalärare baserad i Stockholm med undervisar även i Dalarna. 500-timmar certifierad. Yoga som självacceptans, inte självförbättring."
        canonical="https://yogawithcamilla.se/om-mig"
        structuredData={structuredData}
      />

      <Navbar />
      <div className="min-h-screen bg-dalashala-cream pt-20">

        {/* ── Hero ── */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="blob-sage w-[500px] h-[500px] -top-20 -right-40 opacity-40" aria-hidden="true" />
          <div className="blob-meadow w-[400px] h-[400px] top-10 -left-32 opacity-40" aria-hidden="true" />
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="inline-block tag-pill bg-dalashala-sage/15 text-dalashala-olive border border-dalashala-sage/40 mb-5">
              Om mig
            </span>
            <h1 className="font-cinzel-decorative text-4xl md:text-5xl text-dalashala-earth leading-tight mb-5 font-bold">
              Yogalärare i Dalarna<br className="hidden md:block" /> <span className="amp">&amp;</span> Stockholm
            </h1>
            <div className="flex justify-center items-center gap-2 mb-5">
              <span className="h-px w-10 bg-dalashala-olive/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-dalashala-sage" />
              <span className="h-px w-10 bg-dalashala-olive/40" />
            </div>
            <p className="font-eb-garamond italic text-xl text-dalashala-earthSoft max-w-xl mx-auto leading-relaxed">
              Certifierad yogalärare, ursprungligen från Australien. Baserad i Stockholm, med undervisar även i Dalarna.
            </p>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="py-4 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative card-soft p-8 md:p-12">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-dalashala-sage via-dalashala-meadow to-dalashala-olive rounded-full" />
              <div className="grid md:grid-cols-5 gap-8 items-start">
                <div className="md:col-span-3 space-y-6">
                  <p className="font-eb-garamond text-lg leading-relaxed text-dalashala-earth">
                    Jag heter Camilla. Jag är australiensisk, 500-timmar certifierad yogalärare och undervisar yoga i Stockholm och Dalarna. Jag har instruerat fitness i sju år som Les Mills-instruktör och sprungit fem ultramaraton, inklusive en pallplats. Rörelse har alltid varit en stor del av mitt liv.
                  </p>
                  <p className="font-eb-garamond text-lg leading-relaxed text-dalashala-earthSoft">
                    Rörelse, natur och mindfulness har alltid varit viktiga för mig. Yoga binder ihop dem. Det är där jag landar.
                  </p>
                  <p className="font-eb-garamond text-lg leading-relaxed text-dalashala-earthSoft">
                    Jag är baserad i Stockholm och undervisar även i Dalarna, där jag har en stuga med en stor altan som ibland förvandlas till yogashala.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="overflow-hidden rounded-2xl shadow-card border border-dalashala-meadow/25">
                    <img
                      src="/lovable-uploads/c1e6d7f9-3ac6-42af-ac83-3058516ff2ef.jpg"
                      alt="Camilla i warrior pose på altanen i Dalarna"
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
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
            <div className="relative rounded-3xl overflow-hidden border border-dalashala-meadow/30 shadow-card">
              <div className="absolute inset-0 bg-gradient-to-br from-dalashala-sage/25 via-dalashala-meadow/20 to-dalashala-creamLight" />
              <div className="relative p-8 md:p-10">
                <span className="inline-block tag-pill bg-white/60 text-dalashala-olive border border-dalashala-olive/30 mb-4">
                  Min praktik
                </span>
                <p className="font-eb-garamond text-lg leading-relaxed text-dalashala-earth italic">
                  Mina klasser är utmanande men inte bestraffande. Inga extrema poser, ingen tävling med grannen på mattan. Yoga som rörelse, andning och närvaro, oavsett om jag undervisar på altanen i Dalarna eller i en studio i Stockholm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Credentials ── */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block tag-pill bg-dalashala-olive/15 text-dalashala-olive border border-dalashala-olive/30 mb-3">
                Utbildning
              </span>
              <h2 className="font-cinzel-decorative text-2xl md:text-3xl text-dalashala-earth font-bold">
                Utbildning & bakgrund
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div key={cred.title} className="card-soft p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-montserrat text-xs text-dalashala-olive uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dalashala-sage" />
                    {cred.title}
                  </h3>
                  <p className="font-eb-garamond text-dalashala-earthSoft leading-relaxed whitespace-pre-line">
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
            <div className="card-soft p-8 md:p-12 text-center">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-dalashala-sage via-dalashala-meadow to-dalashala-olive rounded-full" />
              <h2 className="font-cinzel-decorative text-2xl md:text-3xl text-dalashala-earth mb-6 font-bold">
                Var jag undervisar
              </h2>
              <p className="font-eb-garamond text-lg text-dalashala-earthSoft leading-relaxed mb-4">
                Jag undervisar på <strong className="text-dalashala-earth">WD Wellness i Vansbro</strong>, <strong className="text-dalashala-earth">Hot Yoga Stockholm</strong>, <strong className="text-dalashala-earth">Yogarummet Björkhagen</strong>, <strong className="text-dalashala-earth">Brahma Yoga i Nacka</strong> och som SUP yoga-lärare för <strong className="text-dalashala-earth">Smashing Balance</strong>.
              </p>
              <p className="font-eb-garamond text-lg text-dalashala-earthSoft leading-relaxed">
                Jag tar också emot bokningar för privatlektioner, företagsevent, möhippor, bröllop och gruppevent i Dalarna och Stockholm.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-3xl p-10 text-center overflow-hidden shadow-card">
              <div className="absolute inset-0 bg-earth-gradient" />
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-dalashala-sage/30 blur-3xl" aria-hidden="true" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-dalashala-olive/40 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <h2 className="font-cinzel-decorative text-2xl md:text-3xl text-dalashala-cream mb-4 font-bold">
                  Vill du yoga med mig?
                </h2>
                <p className="font-eb-garamond text-dalashala-cream/85 text-lg mb-8 leading-relaxed max-w-lg mx-auto">
                  Se mina tjänster eller hör av dig direkt, oavsett om det är en privatlektion, ett bröllop, en konferens eller en morgonklass på altanen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/tjanster/privatlektioner"
                    className="font-montserrat text-sm px-7 py-3 rounded-full bg-dalashala-cream text-dalashala-earth hover:bg-white hover:-translate-y-0.5 transition-all shadow-card"
                  >
                    Se alla tjänster
                  </Link>
                  <Link
                    to="/#contact"
                    className="font-montserrat text-sm px-7 py-3 rounded-full border-2 border-dalashala-cream/60 text-dalashala-cream hover:bg-dalashala-sage/20 hover:border-dalashala-cream transition-all"
                  >
                    Kontakta mig
                  </Link>
                </div>
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
              About Camilla, Yoga Teacher in Dalarna &amp; Stockholm, Sweden
            </h2>
            <div className="space-y-5 font-eb-garamond text-lg text-dalashala-darkBrown leading-relaxed">
              <p>
                I'm Camilla, an Australian-born 500-hour certified yoga teacher based in Stockholm, Sweden, with regular classes in Dalarna. I teach vinyasa and yin yoga in English.
              </p>
              <p>
                Movement, nature, and mindfulness have always been important to me. I completed my 200-hour YTT at Rishikul Yogshala in Rishikesh, India, and my 300-hour advanced vinyasa training at Sampoorna Yoga Shala in Goa. I also have a background in fitness instruction as a Les Mills certified instructor (7 years, Australia and Sweden), and I've completed five ultramarathons, including a podium finish.
              </p>
              <p>
                My approach to yoga is simple: challenging but not punishing. I'm not interested in impressive poses or performance. I'm interested in what yoga becomes when it stops being another thing you have to do well.
              </p>
              <p>
                I teach at WD Wellness in Vansbro, Hot Yoga Stockholm, Yogarummet Björkhagen, Brahma Yoga in Nacka, and as the SUP yoga teacher for Smashing Balance. I also take bookings for private lessons, corporate yoga, bachelorette yoga, wedding yoga, and yoga retreats across Stockholm and Dalarna.
              </p>
              <p>
                If you're a tourist looking for a yoga class in Dalarna, an expat in Stockholm searching for English-language yoga, or you simply found me on YouTube, you're welcome to get in touch.
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
