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
    detail: "200h YTT på Rishikul Yogshala, Rishikesh, Indien\n300h YTT i Advanced Vinyasa Flow på Sampoorna Yoga Shala, Goa"
  },
  {
    title: "Group fitness-instruktör",
    detail: "Certificate III in Fitness, Australian Institute of Personal Trainers\n7 år som internationellt certifierad Les Mills Bodypump-instruktör i Australien & Sverige (certifierad 2018)"
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
      <div className="min-h-screen bg-white pt-24">

        {/* ── Hero ── */}
        <section className="relative py-16 md:py-24 px-4">
          <div className="relative max-w-3xl mx-auto text-center">
            <p className="font-inter text-sm md:text-base uppercase tracking-[0.42em] text-dalashala-olive font-bold mb-7">
              Om mig
            </p>
            <h1 className="font-fraunces text-5xl md:text-6xl lg:text-[4.75rem] text-dalashala-earth leading-[0.98] mb-8 tracking-[-0.03em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
              Yogalärare i Dalarna<br className="hidden md:block" /> <span className="amp">&amp;</span> Stockholm
            </h1>
            <span className="block mx-auto w-20 h-[2px] bg-dalashala-earth/60 mb-8 rounded-full" aria-hidden="true" />
            <p className="font-inter text-lg md:text-xl text-dalashala-earth/85 max-w-xl mx-auto leading-relaxed">
              Certifierad yogalärare, ursprungligen från Australien. Baserad i Stockholm, undervisar även i Dalarna.
            </p>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className="md:col-span-7 order-2 md:order-1">
                <h2 className="font-fraunces text-3xl md:text-4xl text-dalashala-earth leading-[1.1] tracking-[-0.025em] mb-7" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 120, 'SOFT' 80" }}>
                  Jag heter Camilla.
                </h2>
                <div className="space-y-5">
                  <p className="font-inter text-lg leading-relaxed text-dalashala-earth/85">
                    Jag växte upp i Australien och bor idag i Stockholm. När jag kan drar jag upp till stugan i Dalarna, till hönsen och altanen som ibland förvandlas till yogashala.
                  </p>
                  <p className="font-inter text-lg leading-relaxed text-dalashala-earth/85">
                    Rörelse, natur och mindfulness har alltid hängt ihop för mig, och yogan är där allt möts.
                  </p>
                  <p className="font-inter text-lg leading-relaxed text-dalashala-earth/85">
                    Jag undervisar mest i Stockholm, i studio och privat, och uppe i Dalarna när jag är där.
                  </p>
                </div>
              </div>
              <div className="md:col-span-5 order-1 md:order-2">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-3 md:-inset-4 rounded-[1.75rem] bg-dalashala-meadow/25 -z-10 translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3"
                  />
                  <div className="overflow-hidden rounded-2xl shadow-card border border-dalashala-meadow/40 aspect-[4/5]">
                    <img
                      src="/lovable-uploads/c1e6d7f9-3ac6-42af-ac83-3058516ff2ef.jpg"
                      alt="Camilla i warrior pose på altanen i Dalarna"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Philosophy ── */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <blockquote className="border-l-2 border-dalashala-olive pl-8 md:pl-10">
              <p className="font-fraunces italic text-2xl md:text-[2rem] text-dalashala-earth leading-[1.35] tracking-[-0.01em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 96, 'SOFT' 100" }}>
                Mina klasser är utmanande men inte bestraffande. Inga extrema poser, ingen tävling med grannen på mattan. För mig handlar yoga om rörelse, andning och närvaro, oavsett om jag undervisar i en studio i Stockholm eller på altanen i Dalarna.
              </p>
              <footer className="font-inter text-xs uppercase tracking-[0.32em] text-dalashala-olive font-bold mt-6 not-italic">
                Min praktik
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ── Credentials ── */}
        <section className="py-16 md:py-20 px-4 bg-dalashala-creamDeep/60">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-inter text-sm md:text-base uppercase tracking-[0.42em] text-dalashala-olive font-bold mb-6">
                Utbildning
              </p>
              <h2 className="font-fraunces text-4xl md:text-5xl lg:text-[3.5rem] text-dalashala-earth tracking-[-0.025em] leading-[1.02]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
                Utbildning <span className="amp">&amp;</span> bakgrund
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-7">
              {credentials.map((cred) => (
                <div key={cred.title} className="bg-white border border-dalashala-meadow/60 rounded-2xl p-8 md:p-9 hover:border-dalashala-earth/50 hover:shadow-card transition-all duration-400">
                  <h3 className="font-inter text-xs text-dalashala-olive uppercase tracking-[0.3em] font-bold mb-5">
                    {softenAmp(cred.title)}
                  </h3>
                  <p className="font-inter text-base md:text-[1.0625rem] text-dalashala-earth/85 leading-relaxed whitespace-pre-line">
                    {cred.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Where I teach ── */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-fraunces text-4xl md:text-5xl text-dalashala-earth mb-8 tracking-[-0.025em] leading-[1.02]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
              Var jag undervisar
            </h2>
            <span className="block mx-auto w-16 h-[2px] bg-dalashala-earth/60 mb-8 rounded-full" aria-hidden="true" />
            <p className="font-inter text-lg md:text-xl text-dalashala-earth/85 leading-relaxed mb-5">
              Jag undervisar på <strong className="text-dalashala-earth font-semibold">WD Wellness i Vansbro</strong>, <strong className="text-dalashala-earth font-semibold">Hot Yoga Stockholm</strong>, <strong className="text-dalashala-earth font-semibold">Yogarummet Björkhagen</strong>, <strong className="text-dalashala-earth font-semibold">Brahma Yoga i Nacka</strong> och som SUP yoga-lärare för <strong className="text-dalashala-earth font-semibold">Smashing Balance</strong>.
            </p>
            <p className="font-inter text-lg md:text-xl text-dalashala-earth/85 leading-relaxed">
              Jag tar också emot bokningar för företagsevent, möhippor, bröllop och gruppevent i Dalarna och Stockholm.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 md:py-24 px-4 bg-forest-gradient text-white relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full opacity-[0.14] blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, #8AA48E 0%, transparent 70%)' }}
          />
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="font-fraunces text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-6 tracking-[-0.025em] leading-[1]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
              Vill du yoga med mig?
            </h2>
            <span className="block mx-auto w-16 h-[2px] bg-white/50 mb-8 rounded-full" aria-hidden="true" />
            <p className="font-inter text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-lg mx-auto">
              Se mina tjänster eller hör av dig direkt, oavsett om det är ett bröllop, en konferens eller en morgonklass på altanen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#services"
                className="font-inter text-sm font-semibold uppercase tracking-[0.22em] px-10 py-4 rounded-full bg-white text-dalashala-earth hover:-translate-y-0.5 transition-all shadow-card"
              >
                Se alla tjänster
              </Link>
              <Link
                to="/#contact"
                className="font-inter text-sm font-semibold uppercase tracking-[0.22em] px-10 py-4 rounded-full border border-white/60 text-white hover:bg-white/10 hover:border-white transition-all"
              >
                Kontakta mig
              </Link>
            </div>
          </div>
        </section>

        {/* ── English section ── */}
        <section className="py-20 md:py-24 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="font-inter text-sm md:text-base uppercase tracking-[0.42em] text-dalashala-olive font-bold mb-6">
              In English
            </p>
            <h2 className="font-fraunces text-3xl md:text-4xl lg:text-[2.75rem] text-dalashala-earth mb-10 tracking-[-0.025em] leading-[1.06]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 96, 'SOFT' 60" }}>
              About Camilla, Yoga Teacher in Dalarna <span className="amp">&amp;</span> Stockholm, Sweden
            </h2>
            <div className="space-y-6 font-inter text-lg md:text-xl text-dalashala-earth/85 leading-relaxed">
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
