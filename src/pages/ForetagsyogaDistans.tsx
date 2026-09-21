import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { PageHero, PageSection, ClosingCTA, PillLink } from '@/components/PageKit';
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
        <PageHero
          eyebrow="På svenska"
          title="Företagsyoga på distans för svenska team"
          actions={
            <>
              <PillLink to="/demo">Boka ett pilotpass</PillLink>
              <PillLink to="/pricing" variant="outline">Se priser</PillLink>
            </>
          }
        >
          <p>
            Korta livepass i meditation, andning eller stolyoga, direkt i Teams. Inga mattor och inga
            ombyten. Passen hålls på engelska.
          </p>
        </PageHero>

        <PageSection heading="De flesta friskvårdssatsningar rinner ut i sanden">
          <div className="space-y-5">
            <p>
              Friskvårdsbidraget används av dem som redan tränar, appen glöms bort efter vecka två, och temadagen
              är bortglömd på fredagen.
            </p>
            <PullQuote>Det som håller är en fast punkt i veckan där någon faktiskt håller i det.</PullQuote>
          </div>
        </PageSection>

        <PageSection heading="Ni väljer, vi behöver inte blanda ihop dem">
          <p>Håll er till en, växla mellan dem över månaden, eller kombinera dem.</p>
          <ul className="mt-8 border-t border-sage-light">
            {classes.map(([name, text]) => (
              <li key={name} className="border-b border-sage-light py-5 md:py-6">
                <h3 className="font-fraunces font-normal text-heading text-[1.5rem] leading-snug">{name}</h3>
                <p className="mt-1 text-charcoal/75 text-[16px] leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </PageSection>

        <PageSection heading="Hela teamet, utan att röra friskvårdsbidraget">
          <div className="space-y-5">
            <ProseList
              items={[
                'När arbetsgivaren erbjuder yoga och mindfulness till hela teamet på lika villkor kan det ofta hanteras som en naturaförmån.',
                'Då behöver ingen lägga sitt eget friskvårdsbidrag på det.',
              ]}
            />
            <PullQuote>Stäm alltid av det konkreta upplägget med er ekonomifunktion eller revisor först.</PullQuote>
            <p>
              <Link to="/blog/naturaforman-yoga-for-hela-teamet" className="text-clay underline underline-offset-4 hover:text-clayDark">
                Läs mer om hur naturaförmån fungerar för yoga och mindfulness
              </Link>
              .
            </p>
          </div>
        </PageSection>

        <PageSection heading="Vad som ingår">
          <ProseList items={included} />
          <p className="mt-8">
            Priserna står på{' '}
            <Link to="/pricing" className="text-clay underline underline-offset-4 hover:text-clayDark">
              prissidan
            </Link>
            .
          </p>
        </PageSection>

        <PageSection heading="Det ni brukar undra över">
          <GuideFAQ items={faq as Array<[string, string]>} />
        </PageSection>

        <ClosingCTA
          heading="Börja med ett pilotpass"
          actions={<PillLink to="/demo" variant="light">Boka ett pilotpass</PillLink>}
        >
          <p>Ett enskilt livepass med ert team, innan ni bestämmer er för något löpande.</p>
          <p className="text-[15px] text-offwhite/60">
            Läs mer på svenska:{' '}
            <Link to="/blog/naturaforman-yoga-for-hela-teamet">naturaförmån</Link>,{' '}
            <Link to="/blog/halsa-hybridarbete-distansteam">hybridarbete och psykisk hälsa</Link> och{' '}
            <Link to="/blog/kontorsyoga-pa-distans-forklaring">kontorsyoga på distans</Link>.
          </p>
        </ClosingCTA>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ForetagsyogaDistans;
