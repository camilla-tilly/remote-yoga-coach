import { useState } from 'react';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const challenges = ['Stress', 'Focus', 'Retention', 'Team culture', 'Not sure yet'];
const teamSizes = ['Up to 25', '26–50', '50+'];

const inputClass =
  'w-full rounded-md border border-sage-light bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay text-[15px]';
const labelClass = 'block text-sm font-semibold text-charcoal mb-1.5';

const Demo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: '', name: '', email: '', teamSize: teamSizes[0],
    timezones: '', days: '', challenge: challenges[0], message: '',
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO (launch): wire to Netlify Forms → Zapier → Google Sheet + confirmation
    // email (camilla@remoteyogacoach.com). For now this shows a confirmation and the
    // captured enquiry can be emailed via the mailto fallback below.
    setSubmitted(true);
  };

  const mailtoHref = `mailto:camilla@remoteyogacoach.com?subject=${encodeURIComponent(
    `Pilot enquiry, ${form.company || 'team'}`
  )}&body=${encodeURIComponent(
    `Company: ${form.company}\nName: ${form.name}\nEmail: ${form.email}\nTeam size: ${form.teamSize}\nTime zone(s): ${form.timezones}\nPreferred day(s): ${form.days}\nMain challenge: ${form.challenge}\n\n${form.message}`
  )}`;

  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Book a pilot | Remote Yoga Coach"
        description="Book a four-week pilot of The Weekly Reset for your team: one full programme ending in a one-page wellbeing report, credited to your first month if you continue."
        canonical="https://remoteyogacoach.com/demo"
      />
      <Navbar />

      <main>
        <section className="bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="max-w-[720px] mx-auto px-5 text-center">
            <h1 className="font-fraunces font-semibold text-heading text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Book a pilot
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[560px] mx-auto">
              A four-week pilot of The Weekly Reset for your team, credited to your first month if you continue. Tell me
              a little about your team and I'll be in touch to set it up.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[640px] mx-auto px-5">
            {submitted ? (
              <div className="bg-cream border border-sage-light rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-sage/20 flex items-center justify-center mx-auto">
                  <Check className="text-sage" size={28} strokeWidth={2.5} />
                </div>
                <h2 className="font-fraunces font-semibold text-heading text-2xl mt-5">Thanks, that's in.</h2>
                <p className="mt-3 text-charcoal/75 leading-relaxed">
                  I'll be in touch to confirm your pilot dates. If you'd rather send the details
                  straight to my inbox, use the button below.
                </p>
                <a href={mailtoHref} className="inline-block mt-6">
                  <Button className="bg-clay hover:bg-clayDark text-white font-semibold uppercase text-sm tracking-wider rounded-md px-8 py-6">
                    Email the details
                  </Button>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className={labelClass}>Company name</label>
                    <input id="company" required value={form.company} onChange={set('company')} className={inputClass} placeholder="Acme Ltd" />
                  </div>
                  <div>
                    <label htmlFor="name" className={labelClass}>Your name</label>
                    <input id="name" required value={form.name} onChange={set('name')} className={inputClass} placeholder="Alex Smith" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>Work email</label>
                  <input id="email" type="email" required value={form.email} onChange={set('email')} className={inputClass} placeholder="alex@acme.com" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="teamSize" className={labelClass}>Team size</label>
                    <select id="teamSize" value={form.teamSize} onChange={set('teamSize')} className={inputClass}>
                      {teamSizes.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="challenge" className={labelClass}>Main challenge</label>
                    <select id="challenge" value={form.challenge} onChange={set('challenge')} className={inputClass}>
                      {challenges.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="timezones" className={labelClass}>Time zone(s)</label>
                    <input id="timezones" value={form.timezones} onChange={set('timezones')} className={inputClass} placeholder="e.g. UK + CET" />
                  </div>
                  <div>
                    <label htmlFor="days" className={labelClass}>Preferred day(s)</label>
                    <input id="days" value={form.days} onChange={set('days')} className={inputClass} placeholder="e.g. Tuesdays" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Anything else? <span className="font-normal text-charcoal/50">(optional)</span></label>
                  <textarea id="message" rows={4} value={form.message} onChange={set('message')} className={inputClass} placeholder="Tell me a little about your team." />
                </div>

                <Button type="submit" className="w-full bg-clay hover:bg-clayDark text-white font-semibold uppercase text-sm tracking-wider rounded-md py-6">
                  Book a pilot
                </Button>
                <p className="text-center text-charcoal/50 text-sm">
                  Prefer email? <a href="mailto:camilla@remoteyogacoach.com" className="text-clay hover:text-clayDark">camilla@remoteyogacoach.com</a>
                </p>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Demo;
