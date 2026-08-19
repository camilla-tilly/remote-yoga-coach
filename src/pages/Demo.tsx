import { useState } from 'react';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const inputClass =
  'w-full rounded-md border border-sage-light bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay text-[15px]';
const labelClass = 'block text-sm font-semibold text-charcoal mb-1.5';

const Demo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', message: '',
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
        title="Get in touch | Remote Yoga Coach"
        description="Book a single pilot session of The Weekly Reset for your team: one live 30-minute class, credited to your first month if you continue."
        canonical="https://remoteyogacoach.com/demo"
      />
      <Navbar />

      <main>
        <section className="bg-cream-soft pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="max-w-[720px] mx-auto px-5 text-center">
            <h1 className="font-fraunces font-semibold text-heading text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Get in touch
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/75 leading-relaxed max-w-[560px] mx-auto">
              Tell me a bit about your team and what you're after, whether you'd just like to talk it through, or
              you're ready to book a pilot session. I'll get back to you.
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
                className="space-y-5"
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

                <div>
                  <label htmlFor="company" className={labelClass}>Company <span className="font-normal text-charcoal/50">(optional)</span></label>
                  <input id="company" name="company" value={form.company} onChange={set('company')} className={inputClass} placeholder="Acme Ltd" />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>How can I help?</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={set('message')} className={inputClass} placeholder="A line about your team, or your question." />
                </div>

                <Button type="submit" className="w-full bg-clay hover:bg-clayDark text-white font-semibold uppercase text-sm tracking-wider rounded-md py-6">
                  Get in touch
                </Button>
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
