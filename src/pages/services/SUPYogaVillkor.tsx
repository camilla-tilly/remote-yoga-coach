import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';

const SUPYogaVillkor = () => {
  const [lang, setLang] = useState<'sv' | 'en'>('sv');

  // noindex on legal/terms page: don't waste crawl budget
  useEffect(() => {
    const el = document.querySelector('meta[name="robots"]');
    const prev = el?.getAttribute('content') || 'index, follow';
    if (el) {
      el.setAttribute('content', 'noindex, follow');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      meta.setAttribute('content', 'noindex, follow');
      document.head.appendChild(meta);
    }
    return () => {
      const current = document.querySelector('meta[name="robots"]');
      if (current) current.setAttribute('content', prev);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <SEO
        title="Deltagarvillkor SUP Yoga – Yoga med Camilla | Participant T&Cs SUP Yoga"
        description="Deltagarvillkor för SUP yoga vid Sickla sjö, Stockholm. Participant terms and conditions for SUP yoga at Sickla Strand, Stockholm. Yoga med Camilla & Smashing Balance."
        canonical="https://yogawithcamilla.se/tjanster/sup-yoga/villkor"
      />
      <Navbar />

      <main className="pt-24 pb-20 px-4">
        {/* Header */}
        <section className="py-12 md:py-16 text-center">
          <p className="font-inter text-xs md:text-sm uppercase tracking-[0.42em] text-dalashala-olive font-bold mb-6">
            SUP Yoga · Sickla Strand
          </p>
          <h1 className="font-fraunces text-4xl md:text-5xl lg:text-6xl text-dalashala-earth mb-5 leading-[1.02] tracking-[-0.03em]" style={{ fontWeight: 400, fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
            {lang === 'sv' ? 'Deltagarvillkor 2026' : <>Participant Terms <span className="amp">&amp;</span> Conditions 2026</>}
          </h1>
          <span className="block mx-auto w-16 h-[2px] bg-dalashala-earth/60 mb-6 rounded-full" aria-hidden="true" />
          <p className="font-inter text-base md:text-lg text-dalashala-earth/80 mb-8">
            Yoga with Camilla <span className="amp">&amp;</span> Smashing Balance
          </p>

          {/* Language toggle */}
          <div className="inline-flex rounded-full border border-dalashala-meadow overflow-hidden">
            <button
              onClick={() => setLang('sv')}
              className={`px-6 py-2 text-xs font-inter uppercase tracking-[0.2em] font-semibold transition-colors ${
                lang === 'sv'
                  ? 'bg-dalashala-earth text-white'
                  : 'bg-transparent text-dalashala-earth hover:bg-dalashala-meadowLight/50'
              }`}
            >
              Svenska
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-6 py-2 text-xs font-inter uppercase tracking-[0.2em] font-semibold transition-colors ${
                lang === 'en'
                  ? 'bg-dalashala-earth text-white'
                  : 'bg-transparent text-dalashala-earth hover:bg-dalashala-meadowLight/50'
              }`}
            >
              English
            </button>
          </div>
        </section>

        {/* T&C Content */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-dalashala-meadow/60 shadow-soft px-6 py-10 md:px-12 md:py-12 font-inter text-dalashala-earth">

            {lang === 'sv' ? (
              <>
                {/* === SWEDISH === */}
                <Section title="Bokning och betalning">
                  <p>Bokning sker via Smashing Balances bokningssystem. Betalning görs vid ankomst med Swish. Turister och besökare utan Swish ombeds kontakta oss i förväg – kortbetalning kan arrangeras via Smashing Balances system på plats.</p>
                </Section>

                <Section title="Priser">
                  <PriceTable
                    rows={[
                      ['Enstaka klass (inkl. utrustning + bastu)', '350 kr'],
                      ['Enstaka klass med egen bräda (+ bastu)', '150 kr'],
                      ['Säsongskort 2026 (inkl. bastu)', '1 500 kr'],
                      ['Klipkort – 10 klasser', '1 000 kr'],
                    ]}
                  />
                  <p className="mt-3 text-sm leading-relaxed">Säsongskort betalas i förväg direkt till Yoga with Camilla via Swish före säsongstart. Säsongskortet gäller för samtliga klasser under säsongen 2026 och är personligt och ej överlåtbart. Klipkortet kan delas med vänner. Priser och villkor kan komma att justeras under säsongen.</p>
                </Section>

                <Section title="Avbokning av deltagare">
                  <p><strong>Enstaka klass:</strong> Platser reserveras via bokningssystemet men betalas vid ankomst. Om du behöver avboka, vänligen gör det senast 24 timmar i förväg så att platsen kan erbjudas till någon annan. Upprepade sena avbokningar eller uteblivna besök kan påverka möjligheten att boka framtida klasser.</p>
                  <p className="mt-2"><strong>Säsongskort:</strong> Avbokning av enskild klass måste ske senast 24 timmar före start för att berättiga till kredit. Kredit är personlig, giltig under resten av säsongen och kan ej lösas in mot kontanter.</p>
                </Section>

                <Section title="Inställt av arrangören">
                  <p>Klassen kan ställas in vid för få anmälda deltagare, alltför kraftig blåst eller annan omständighet utanför arrangörens kontroll. Deltagare meddelas senast 2 timmar före start. Deltagare som betalar per klass debiteras inte. Säsongskortsinnehavare och klipkortsinnehavare erhåller kredit för den inställda klassen.</p>
                </Section>

                <Section title="Säkerhet och eget ansvar">
                  <p>Maxvikt 130 kg. Simkunnighet är ett krav för deltagande. Deltagande sker helt på egen risk. Yoga with Camilla och Smashing Balance ansvarar inte för personskada, sjukdom eller förlust av personliga tillhörigheter i samband med deltagande.</p>
                  <p className="mt-2">Flytväst ingår och ska vara tillgänglig under hela klassen. Board, paddel och flytväst tillhandahålls av Smashing Balance. Deltagaren ansvarar för tilldelad utrustning under klassens gång. Vid förlust av eller skada på paddel debiteras deltagaren återanskaffningskostnaden (500 kr).</p>
                </Section>

                <Section title="Att ta med">
                  <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
                    <li>Vattenflaska</li>
                    <li>Ombyte att lämna vid strandkanten</li>
                    <li>Badkläder under bekväma kläder, eller våtdräkt</li>
                    <li>Solkräm och solglasögon (som du inte är rädd om)</li>
                    <li>Värdesaker i knutna plastpåsar i en låst ficka eller magväska – lämna känsliga glasögon på land</li>
                  </ul>
                  <p className="mt-3 text-sm">Flytväst och torrpåsar finns tillgängliga på plats.</p>
                </Section>

                <Section title="Kontakt" last>
                  <p><a href="mailto:hello.yogawithcamilla@gmail.com" className="underline">hello.yogawithcamilla@gmail.com</a></p>
                  <p>yogawithcamilla.se</p>
                </Section>
              </>
            ) : (
              <>
                {/* === ENGLISH === */}
                <Section title="Booking & Payment">
                  <p>Booking is made via Smashing Balance's booking system. Payment is made on arrival by Swish. Tourists and visitors without Swish are asked to contact us in advance – card payment can be arranged via Smashing Balance's system on site.</p>
                </Section>

                <Section title="Pricing">
                  <PriceTable
                    rows={[
                      ['Single class (incl. equipment + sauna)', '350 kr'],
                      ['Single class with own board (+ sauna)', '150 kr'],
                      ['Season pass 2026 (incl. sauna)', '1 500 kr'],
                      ['10-class card (klipkort)', '1 000 kr'],
                    ]}
                  />
                  <p className="mt-3 text-sm leading-relaxed">Season passes are paid in advance directly to Yoga with Camilla via Swish. The season pass is valid for all classes in the 2026 season and is personal and non-transferable. The 10-class card is shareable. Prices and terms may be updated during the season.</p>
                </Section>

                <Section title="Cancellation by participant">
                  <p>Spots are reserved via the booking system but paid on arrival. Please cancel at least 24 hours in advance so your spot can be offered to someone else. Two late cancellations or no-shows will lead to a ban for future bookings.</p>
                </Section>

                <Section title="Cancellation by organiser">
                  <p>A class may be cancelled due to insufficient bookings, excessive wind, or other circumstances outside the organiser's control. Participants will be notified at least 2 hours before start.</p>
                </Section>

                <Section title="Safety & Personal Responsibility">
                  <p>Maximum weight 130 kg. The ability to swim is a requirement. Participation is entirely at the participant's own risk. Yoga with Camilla and Smashing Balance accept no responsibility for personal injury, illness, or loss of personal belongings in connection with participation.</p>
                  <p className="mt-2">A life jacket is included and must be kept accessible throughout the class. Board, paddle and life jacket are provided by Smashing Balance. The participant is responsible for their allocated equipment throughout the class. Loss of or damage to a paddle will be charged at replacement cost (500 kr).</p>
                </Section>

                <Section title="What to Bring">
                  <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
                    <li>Water bottle</li>
                    <li>A change of clothes to leave at the water's edge</li>
                    <li>Swimwear under comfortable clothes, or a wetsuit</li>
                    <li>Suncream and sunglasses that you don't mind getting wet</li>
                    <li>Valuables in knotted plastic bags in a locked pocket or bumbag – leave precious glasses on land</li>
                  </ul>
                  <p className="mt-3 text-sm">Life jackets and dry bags are available on site.</p>
                </Section>

                <Section title="Contact" last>
                  <p><a href="mailto:hello.yogawithcamilla@gmail.com" className="underline">hello.yogawithcamilla@gmail.com</a></p>
                  <p>yogawithcamilla.se</p>
                </Section>
              </>
            )}
          </div>

        {/* Back link */}
        <div className="text-center mt-10">
          <Link
            to="/tjanster/sup-yoga"
            className="font-inter text-xs uppercase tracking-[0.32em] text-dalashala-olive hover:text-dalashala-earth font-bold transition-colors"
          >
            ← {lang === 'sv' ? 'Tillbaka till SUP Yoga' : 'Back to SUP Yoga'}
          </Link>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

// Helper components
const Section = ({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) => (
  <div className={`${last ? '' : 'mb-8 pb-8 border-b border-dalashala-meadow/50'}`}>
    <h2 className="font-inter text-xs md:text-sm font-bold uppercase tracking-[0.32em] text-dalashala-olive mb-4">
      {title}
    </h2>
    <div className="text-base leading-relaxed text-dalashala-earth/85 font-inter">
      {children}
    </div>
  </div>
);

const PriceTable = ({ rows }: { rows: [string, string][] }) => (
  <table className="w-full text-base border-collapse my-3">
    <tbody>
      {rows.map(([label, price], i) => (
        <tr key={i} className={i % 2 === 0 ? 'bg-dalashala-creamDeep/50' : ''}>
          <td className="py-2 px-3 rounded-l">{label}</td>
          <td className="py-2 px-3 text-right font-semibold text-dalashala-earth rounded-r">{price}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default SUPYogaVillkor;
