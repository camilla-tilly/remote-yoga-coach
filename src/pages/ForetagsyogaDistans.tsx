import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const faq: Array<[string, string]> = [
  [
    'Vad är företagsyoga på distans?',
    'Korta livepass som hålls på skärm, i Teams eller Zoom, för hela teamet samtidigt. Hos mig kan ni välja mellan tre separata klasser: meditation, andning eller stolyoga. Ni kan hålla er till en, växla mellan dem, eller kombinera dem i samma pass. Ingen matta, inga ombyten, och kameran är frivillig.',
  ],
  [
    'Vilket språk hålls passen på?',
    'Passen hålls på engelska. Jag är australiensisk yogalärare och bor i Stockholm. Instruktionerna är enkla och guidande snarare än tekniska, och för team med internationella kollegor betyder det att alla kan delta på samma villkor. Många svenska arbetsplatser har redan engelska som arbetsspråk internt.',
  ],
  [
    'Hur långa är passen?',
    'Vanligtvis runt 30 minuter, vilket får plats i en arbetsdag utan att äta upp den. Längden går att anpassa efter hur er kalender ser ut.',
  ],
  [
    'Behöver alla ha kameran på?',
    'Nej. Kameran är frivillig, och det är en medveten del av upplägget. Så fort ett pass börjar kännas som en prestation slutar de som behöver det mest att dyka upp.',
  ],
  [
    'Vad händer om någon missar ett pass?',
    'Alla pass spelas in, så den som var upptagen eller sitter i en annan tidszon kan följa med i efterhand.',
  ],
  [
    'Kan detta betalas som naturaförmån?',
    'Ja, det är ofta så det passar bäst. När arbetsgivaren erbjuder yoga eller mindfulness till hela teamet på lika villkor kan det hanteras som en naturaförmån, i stället för att varje anställd ska lägga sitt eget friskvårdsbidrag på det. Kontrollera alltid upplägget med er ekonomifunktion eller revisor först.',
  ],
];

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Företagsyoga på distans för team',
    name: 'Företagsyoga på distans',
    provider: {
      '@type': 'Organization',
      name: 'Remote Yoga Coach',
      url: 'https://remoteyogacoach.com',
    },
    areaServed: 'SE',
    availableLanguage: 'en',
    inLanguage: 'sv',
    description:
      'Livepass i meditation, andning eller stolyoga för distans- och hybridteam, direkt i Teams eller Zoom. Samma lärare varje vecka, kamera frivillig, alla pass spelas in.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'sv',
    mainEntity: faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  },
];

const classes: Array<[string, string]> = [
  [
    'Meditation',
    'En kort guidad meditation som ger huvudet en riktig paus mitt i dagen. Inget krav på tidigare vana.',
  ],
  [
    'Andning',
    'Enkla andningstekniker som lugnar nervsystemet, och som går att använda igen på egen hand före ett tufft möte.',
  ],
  [
    'Stolyoga',
    'Mjuk rörlighet i nacke, axlar och rygg, gjord från kontorsstolen. Inga ombyten och ingen utrustning.',
  ],
];

const included: string[] = [
  'Samma lärare varje vecka, så det blir en vana och inte ännu en inloggning',
  'Kameran är alltid frivillig',
  'Alla pass spelas in och delas efteråt',
  'En länk som ni delar internt, jag sköter själva passet',
  'Fungerar lika bra för helt distansbaserade, hybrida och kontorsbaserade team',
  'Fast månadsavgift per team, i kronor',
];

const SectionHeading = ({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) => (
  <>
    {eyebrow && (
      <span className="inline-block font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay mb-4">
        {eyebrow}
      </span>
    )}
    <h2 className="font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight">
      {children}
    </h2>
  </>
);

const ForetagsyogaDistans = () => {
  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Företagsyoga på distans för svenska team | Remote Yoga Coach"
        description="Livepass i meditation, andning eller stolyoga för distans- och hybridteam, direkt i Teams eller Zoom. Kamera frivillig, alla pass spelas in, fast månadspris i kronor. Boka ett pilotpass."
        canonical="https://remoteyogacoach.com/foretagsyoga-distans"
        ogType="website"
        ogLocale="sv_SE"
        lang="sv"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-cream-soft pt-36 pb-20 md:pt-44 md:pb-24">
          <div className="max-w-[820px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <span className="inline-block font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-clay mb-5">
              På svenska
            </span>
            <h1 className="font-fraunces font-normal text-heading text-[2.7rem] md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Företagsyoga på distans för svenska team
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[660px] mx-auto">
              Korta livepass i meditation, andning eller stolyoga, direkt i Teams eller Zoom. Samma lärare varje
              vecka, kameran frivillig, alla pass spelas in. Inga mattor, inga ombyten och ingen restid. Passen
              hålls på engelska, med enkla och guidande instruktioner.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-medium text-[15px] rounded-full px-8 py-6">
                  Boka ett pilotpass
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  variant="outline"
                  className="border-sage text-charcoal hover:bg-sage-light/40 font-medium text-[15px] rounded-full px-8 py-6"
                >
                  Se priser
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-20 md:py-24">
          <div className="max-w-[720px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="Varför det ofta inte fastnar">
              De flesta friskvårdssatsningar rinner ut i sanden
            </SectionHeading>
            <div className="mt-7 space-y-5 text-lg text-charcoal/75 leading-relaxed">
              <p>
                Ett friskvårdsbidrag är individuellt. Det landar hos var och en, och den som redan är slut i
                huvudet är sällan den som hinner boka något för det. En app blir en inloggning till som ingen
                öppnar efter vecka två. Och en enstaka temadag är trevlig och bortglömd på fredagen.
              </p>
              <p>
                Det som håller är något som redan står i kalendern, på en bestämd tid, som ingen behöver komma
                ihåg att boka eller känna dåligt samvete över att hoppa över. Det är hela idén här: en fast punkt
                i veckan där någon faktiskt håller i det.
              </p>
            </div>
          </div>
        </section>

        {/* THE THREE CLASSES */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[860px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="Tre klasser">Ni väljer, vi behöver inte blanda ihop dem</SectionHeading>
            <p className="mt-6 text-lg text-charcoal/75 leading-relaxed max-w-[640px]">
              Det här är tre separata klasser, inte ett blandat pass. Håll er till en, växla mellan dem över
              månaden, eller kombinera dem. Vad som passar ert team bestämmer ni.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {classes.map(([name, text]) => (
                <div key={name} className="bg-white rounded-2xl border border-sage-light p-7">
                  <h3 className="font-fraunces text-2xl text-heading mb-3 leading-tight">{name}</h3>
                  <p className="text-charcoal/75 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NATURAFÖRMÅN */}
        <section className="py-20 md:py-24">
          <div className="max-w-[720px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="Naturaförmån">Hela teamet, utan att röra friskvårdsbidraget</SectionHeading>
            <div className="mt-7 space-y-5 text-lg text-charcoal/75 leading-relaxed">
              <p>
                När arbetsgivaren erbjuder yoga och mindfulness till hela teamet på lika villkor kan det ofta
                hanteras som en naturaförmån. Det betyder att den enskilda medarbetaren inte behöver lägga sitt
                eget friskvårdsbidrag på det, och att bidraget kan gå till något annat.
              </p>
              <p>
                Det är också skillnaden mellan en förmån som några få utnyttjar och något hela teamet gör
                tillsammans. Stäm alltid av det konkreta upplägget med er ekonomifunktion eller revisor först.
              </p>
              <p>
                <Link
                  to="/blog/naturaforman-yoga-for-hela-teamet"
                  className="text-clay underline underline-offset-4 hover:text-clayDark"
                >
                  Läs mer om hur naturaförmån fungerar för yoga och mindfulness
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS INCLUDED */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[720px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="Så funkar det">Vad som ingår</SectionHeading>
            <ul className="mt-8 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex gap-3.5 text-lg text-charcoal/80 leading-relaxed">
                  <Check className="w-5 h-5 text-clay flex-none mt-1.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg text-charcoal/75 leading-relaxed">
              Priserna står i kronor på{' '}
              <Link to="/pricing" className="text-clay underline underline-offset-4 hover:text-clayDark">
                prissidan
              </Link>
              , som en fast månadsavgift per team i stället för per person.
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20 md:py-24">
          <div className="max-w-[720px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="Vem håller i passen">Jag gör det själv, varje vecka</SectionHeading>
            <div className="mt-7 space-y-5 text-lg text-charcoal/75 leading-relaxed">
              <p>
                Jag heter Camilla, är australiensisk yogalärare och bor i Stockholm. Jag har 500 timmars
                yogalärarutbildning inom rörelse, andning och meditation, plus en Certificate III in Fitness från
                Australien med anatomi och säker rörelse. Min meditations- och andningsdel bygger på erfarenhet
                från tre traditioner, och jag har gjort retreat i alla tre.
              </p>
              <p>
                Det är samma person varje vecka. Ingen pool av lärare, ingen ny röst varje gång. Det låter litet,
                men det är just det som gör att ett pass blir en vana i stället för en aktivitet.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[760px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="Vanliga frågor">Det ni brukar undra över</SectionHeading>
            <dl className="mt-9 divide-y divide-sage-light border-y border-sage-light">
              {faq.map(([q, a]) => (
                <div key={q} className="py-7">
                  <dt className="font-fraunces text-xl md:text-2xl text-heading leading-snug mb-3">{q}</dt>
                  <dd className="text-lg text-charcoal/75 leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* READ MORE IN SWEDISH */}
        <section className="py-20 md:py-24">
          <div className="max-w-[860px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="Läs mer">På svenska</SectionHeading>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {[
                ['Naturaförmån: yoga för hela teamet', '/blog/naturaforman-yoga-for-hela-teamet'],
                ['Hybridarbete och psykisk hälsa', '/blog/halsa-hybridarbete-distansteam'],
                ['Kontorsyoga på distans, förklarat', '/blog/kontorsyoga-pa-distans-forklaring'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="group block bg-white rounded-2xl border border-sage-light hover:border-clay/60 p-6 transition-colors"
                >
                  <span className="font-fraunces text-lg text-heading leading-snug group-hover:text-clay transition-colors">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream-soft-b py-24 md:py-28">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <h2 className="font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight">
              Börja med ett pilotpass
            </h2>
            <p className="mt-6 text-lg text-charcoal/75 leading-relaxed">
              Ett enskilt livepass med ert team, så ni får känna hur det är innan ni bestämmer er för något
              löpande. Berätta hur teamet ser ut och när ni har en lucka i kalendern, så föreslår jag ett upplägg.
            </p>
            <div className="mt-9">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-medium text-[15px] rounded-full px-8 py-6">
                  Boka ett pilotpass
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ForetagsyogaDistans;
