import { useState } from 'react';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { WRAP } from '@/components/PageKit';

const inputClass =
  'w-full rounded-md border border-sage-light bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay text-[15px]';
const labelClass = 'block text-sm font-semibold text-charcoal mb-1.5';

const nextSteps: Array<[string, string]> = [
  ['A short call', "To see if it's a fit: your time zones, your team, and what they are struggling with."],
  ['Your pilot session', 'One live session with your team, 1,490 kr, credited to your first month if you continue.'],
  ['A weekly slot', 'If it works, the same time every week, as a recurring invite.'],
];

const Demo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', 'team-size': '', message: '',
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Netlify Forms: POST the fields; Netlify captures the submission and emails
    // it to the inbox set under Site settings -> Forms -> notifications.
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'pilot-enquiry', ...form }),
    })
      .then(() => {
        // GA4 lead conversion: count a successful pilot enquiry as a key event.
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        if (typeof w.gtag === 'function') {
          w.gtag('event', 'generate_lead', { form_name: 'pilot-enquiry' });
        }
        setSubmitted(true);
      })
      .catch(() => setSubmitted(true));
  };

  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Book a pilot session | Remote Yoga Coach"
        description="Book a single pilot session for your team: one live class, credited to your first month if you continue."
        canonical="https://remoteyogacoach.com/demo"
      />
      <Navbar />

      <main>
        <section data-section className="pt-32 pb-20 md:pt-44 md:pb-28">
          <div className={`${WRAP} md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-14 lg:gap-24 md:items-start`}>
            {/* Left: what the buyer is signing up for, and what happens next. */}
            <div>
              <h1 className="font-fraunces font-normal text-heading tracking-[-0.022em] leading-[1.04] text-[2.5rem] sm:text-[3.1rem] lg:text-[4.1rem] max-w-[14ch]">
                Book a pilot session
              </h1>
              <p className="mt-7 text-[18px] md:text-[20px] leading-[1.55] text-charcoal/80 max-w-[40ch]">
                Tell me a bit about your team, or ask a question first. I read every message myself and reply by
                email.
              </p>

              <h2 className="mt-12 md:mt-14 font-fraunces font-normal text-heading text-[1.6rem] leading-tight">What happens next</h2>
              <ol className="numbered-steps mt-5 border-t border-sage-light max-w-[520px]">
                {nextSteps.map(([title, text]) => (
                  <li key={title} className="flex gap-5 border-b border-sage-light py-5">
                    <p className="text-charcoal/75 text-[16px] leading-relaxed">
                      <span className="block font-fraunces font-normal text-heading text-[1.2rem] leading-snug mb-0.5">{title}</span>
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right: the form. */}
            <div className="mt-12 md:mt-2">
              {submitted ? (
                <div className="bg-white border border-sage-light rounded-[20px] p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-clay/10 flex items-center justify-center mx-auto">
                    <Check className="text-clay" size={28} strokeWidth={2.5} />
                  </div>
                  <h2 className="font-fraunces font-normal text-heading text-2xl mt-5">Thanks, that's in.</h2>
                  <p className="mt-3 text-charcoal/75 leading-relaxed">
                    I'll be in touch.
                  </p>
                </div>
              ) : (
                <form
                  name="pilot-enquiry"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="bg-white border border-sage-light rounded-[20px] p-6 sm:p-8 md:p-10 space-y-5"
                >
                  <input type="hidden" name="form-name" value="pilot-enquiry" />
                  <p className="hidden">
                    <label>Leave this field empty: <input name="bot-field" /></label>
                  </p>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>Your name</label>
                      <input id="name" name="name" required value={form.name} onChange={set('name')} className={inputClass} placeholder="Alex Smith" />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Work email</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={set('email')} className={inputClass} placeholder="alex@acme.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className={labelClass}>Company <span className="font-normal text-charcoal/50">(optional)</span></label>
                      <input id="company" name="company" value={form.company} onChange={set('company')} className={inputClass} placeholder="Acme Ltd" />
                    </div>
                    <div>
                      <label htmlFor="team-size" className={labelClass}>Team size <span className="font-normal text-charcoal/50">(optional)</span></label>
                      <select id="team-size" name="team-size" value={form['team-size']} onChange={set('team-size')} className={inputClass}>
                        <option value="">Choose</option>
                        <option>Under 10</option>
                        <option>10 to 25</option>
                        <option>25 to 50</option>
                        <option>Over 50</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>How can I help?</label>
                    <textarea id="message" name="message" required rows={5} value={form.message} onChange={set('message')} className={inputClass} placeholder="A line about your team, or your question." />
                  </div>

                  <Button type="submit" className="w-full bg-clay hover:bg-clayDark text-white font-semibold text-[16px] rounded-full h-14">
                    Send
                  </Button>
                  <p className="text-center text-[14px] text-charcoal/60">No newsletter, no sequence.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Demo;
