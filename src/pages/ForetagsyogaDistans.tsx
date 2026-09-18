import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { GuideFAQ, ProseList, PullQuote } from '@/components/GuideLayout';

const faq: Array<[string, string]> = [
  [
    'Vad är företagsyoga på distans?',
    'Korta livepass i Teams för hela teamet samtidigt. Ni väljer meditation, andning eller stolyoga, eller växlar mellan dem. Ingen matta och inga ombyten.',
  ],
  [
    'Vilket språk hålls passen på?',
    'Engelska, med enkla och guidande instruktioner. För team med internationella kollegor betyder det att alla kan delta på samma villkor.',
  ],
  [
    'Hur långa är passen?',
    'Runt 15 till 30 minuter, så det får plats i arbetsdagen.',
  ],
  [
    'Behöver alla ha kameran på?',
    'Nej. Så fort ett pass börjar kännas som en prestation slutar de som behöver det mest att dyka upp.',
  ],
  [
    'Vad händer om någon missar ett pass?',
    'Passen kan spelas in om ni vill, så att den som missar kan följa med i efterhand.',
  ],
  [
    'Kan detta betalas som naturaförmån?',
    'Ofta, ja. När arbetsgivaren erbjuder det till hela teamet på lika villkor kan det hanteras som naturaförmån. Kontrollera alltid upplägget med er ekonomifunktion eller revisor.',
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
      'Livepass i meditation, andning eller stolyoga för distans- och hybridteam, direkt i Teams. Samma lärare varje vecka, passen kan spelas in om ni vill.',
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
  ['Meditation', 'En kort guidad paus för huvudet. Ingen tidigare vana behövs.'],
  ['Andning', 'Enkla tekniker som lugnar, och som går att använda före ett tufft möte.'],
  ['Stolyoga', 'Mjuk rörlighet i nacke, axlar och rygg, direkt från kontorsstolen.'],
];

const included: string[] = [
  'Samma lärare varje vecka: jag, Camilla, med 500 timmars yogalärarutbildning',
  'Passen kan spelas in om ni vill',
  'En länk som ni delar internt, jag sköter resten',
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
        description="Livepass i meditation, andning eller stolyoga för distans- och hybridteam, direkt i Teams. Passen kan spelas in om ni vill, fast månadspris i kronor. Boka ett pilotpass."
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
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[600px] mx-auto">
              Korta livepass i meditation, andning eller stolyoga, direkt i Teams. Inga mattor och inga
              ombyten. Passen hålls på engelska.
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
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="Varför det ofta inte fastnar">
              De flesta friskvårdssatsningar rinner ut i sanden
            </SectionHeading>
            <div className="mt-7 space-y-5 text-lg text-charcoal/75 leading-relaxed">
              <p>
                Friskvårdsbidraget används av dem som redan tränar, appen glöms bort efter vecka två, och temadagen
                är bortglömd på fredagen.
              </p>
              <PullQuote>Det som håller är en fast punkt i veckan där någon faktiskt håller i det.</PullQuote>
            </div>
          </div>
        </section>

        {/* THE THREE CLASSES */}
        <section className="bg-cream py-20 md:py-24">
          <div className="max-w-[860px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="Tre klasser">Ni väljer, vi behöver inte blanda ihop dem</SectionHeading>
            <p className="mt-6 text-lg text-charcoal/75 leading-relaxed max-w-[640px]">
              Håll er till en, växla mellan dem över månaden, eller kombinera dem.
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
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="Naturaförmån">Hela teamet, utan att röra friskvårdsbidraget</SectionHeading>
            <div className="mt-7 space-y-5 text-lg text-charcoal/75 leading-relaxed">
              <ProseList
                items={[
                  'När arbetsgivaren erbjuder yoga och mindfulness till hela teamet på lika villkor kan det ofta hanteras som en naturaförmån.',
                  'Då behöver ingen lägga sitt eget friskvårdsbidrag på det.',
                ]}
              />
              <PullQuote>Stäm alltid av det konkreta upplägget med er ekonomifunktion eller revisor först.</PullQuote>
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
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
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
              Priserna står på{' '}
              <Link to="/pricing" className="text-clay underline underline-offset-4 hover:text-clayDark">
                prissidan
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8">
            <SectionHeading eyebrow="Vanliga frågor">Det ni brukar undra över</SectionHeading>
            <GuideFAQ items={faq as Array<[string, string]>} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream-soft-b py-24 md:py-28">
          <div className="max-w-[680px] mx-auto px-5 sm:px-6 md:px-8 text-center">
            <h2 className="font-fraunces font-normal text-heading text-4xl md:text-5xl tracking-[-0.02em] leading-tight">
              Börja med ett pilotpass
            </h2>
            <p className="mt-6 text-lg text-charcoal/75 leading-relaxed">
              Ett enskilt livepass med ert team, innan ni bestämmer er för något löpande.
            </p>
            <div className="mt-9">
              <Link to="/demo">
                <Button className="bg-clay hover:bg-clayDark text-white font-medium text-[15px] rounded-full px-8 py-6">
                  Boka ett pilotpass
                </Button>
              </Link>
            </div>
            <p className="mt-10 text-charcoal/60 text-[15px] leading-relaxed">
              Läs mer på svenska:{' '}
              <Link to="/blog/naturaforman-yoga-for-hela-teamet" className="text-clay underline underline-offset-4 hover:text-clayDark">
                naturaförmån
              </Link>
              ,{' '}
              <Link to="/blog/halsa-hybridarbete-distansteam" className="text-clay underline underline-offset-4 hover:text-clayDark">
                hybridarbete och psykisk hälsa
              </Link>{' '}
              och{' '}
              <Link to="/blog/kontorsyoga-pa-distans-forklaring" className="text-clay underline underline-offset-4 hover:text-clayDark">
                kontorsyoga på distans
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ForetagsyogaDistans;
