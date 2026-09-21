import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';

/**
 * Homepage — redesign port (Aug 2026).
 *
 * Visual system from the Claude Design handoff (design_handoff_remote_yoga_coach):
 * Newsreader / Karla / IBM Plex Mono, warm-paper + terracotta oklch palette,
 * editorial image-led layout. Ported with inline styles + oklch to reproduce the
 * design faithfully without touching the shared Tailwind theme (which another
 * chat is mid-edit on). Content and SEO are Camilla's real, verified copy:
 * three separate classes, 15 to 30 minute sessions, SEK pricing, Teams only, real
 * review quotes, real bio. No fabricated stats, credentials, or client logos.
 */

// --- palette (oklch, straight from the handoff tokens) ---
const c = {
  paper: 'oklch(0.965 0.014 76)',
  card: 'oklch(0.985 0.01 76)',
  softPanel: 'oklch(0.955 0.016 60)',
  band: 'oklch(0.912 0.02 68)',
  bandDivider: 'oklch(0.855 0.022 68)',
  rule: 'oklch(0.88 0.02 76)',
  borderSoft: 'oklch(0.87 0.018 60)',
  text: 'oklch(0.24 0.02 60)',
  text2: 'oklch(0.4 0.02 60)',
  text3: 'oklch(0.48 0.02 60)',
  muted: 'oklch(0.56 0.02 60)',
  terracotta: 'oklch(0.5 0.095 45)',
  terracottaHover: 'oklch(0.42 0.085 45)',
  darkPill: 'oklch(0.3 0.025 45)',
  onDark: 'oklch(0.97 0.014 76)',
};
const serif = 'Newsreader, Georgia, serif';
const sans = 'Karla, system-ui, sans-serif';
const mono = "'IBM Plex Mono', ui-monospace, monospace";

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Corporate wellbeing sessions for distributed teams',
  name: 'Weekly yoga and meditation for teams',
  provider: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
  areaServed: ['GB', 'EU'],
  description:
    'Live breathing, meditation and chair-yoga classes of around 15 to 30 minutes for remote and hybrid teams, delivered on Teams.',
};

// The three classes are the product. They used to be three identical cards,
// each with an icon in a brown circle, which read as a template. Now they are a
// plain editorial list next to a real photo of a session, so the page shows
// what the buyer is getting instead of describing it three times over.
const sessions = [
  { kind: 'Chair yoga', body: 'Shoulders, neck and hips, in work clothes, at the desk.', to: '/services/chair-yoga-for-teams' },
  { kind: 'Breathing', body: 'Before the all-hands or after a hard call.', to: '/blog/breathing-exercises-for-work-stress' },
  { kind: 'Meditation', body: 'A quiet moment in the middle of the day.', to: '/guides/mindfulness-at-work' },
] as const;

// A real class photo. Set `src` to null to fall back to the list-only layout.
// Only use a photo whose participants have agreed to appear on the site.
const classPhoto: { src: string; alt: string; caption: string } | null = null;

const steps = [
  ['01', 'A first call', 'Your time zones, and what the team is struggling with.'],
  ['02', 'A pilot session', 'One paid session. See who joins before you commit.'],
  ['03', 'A weekly slot', 'Same time every week, as a recurring invite.'],
];

// Real client quotes, verbatim. Only the two that speak to what a buyer worries
// about (will people like it, is it calm). "Balance poses" and "20 years of
// yoga" came from studio classes and cut against the chair-based pitch.
const reviews = [
  { quote: 'You have such a soothing voice.', name: 'Kris' },
  { quote: 'Thanks for this beautiful flow. I felt great afterwards.', name: 'Susanne' },
];

const tiers = [
  { name: 'Starter', price: '2,990 kr', per: '/mo', body: 'Two live sessions a month.', highlight: false },
  { name: 'Weekly', price: '4,990 kr', per: '/mo', body: 'One live session every week.', highlight: true },
  { name: 'Enterprise', price: 'from 8,900 kr', per: '/mo', body: 'Two or more a week, or across time zones. Includes a monthly check-in call with your HR contact.', highlight: false },
];

const eyebrow: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 13,
  letterSpacing: '0.02em',
  color: c.text2,
};
const h2Style: React.CSSProperties = {
  fontFamily: serif,
  fontWeight: 400,
  letterSpacing: '-0.02em',
  margin: 0,
  color: c.text,
};

const Index = () => {
  return (
    <div className="ryc" style={{ fontFamily: sans, color: c.text, background: c.paper, overflowX: 'hidden', minHeight: '100vh' }}>
      <SEO
        title="Corporate Wellbeing for Remote and Hybrid Teams | Remote Yoga Coach"
        description="Live meditation, breathing and chair yoga for remote and hybrid teams on Teams. Sessions your team actually turns up for."
        canonical="https://remoteyogacoach.com/"
        structuredData={structuredData}
      />

      <style>{`
        html { scroll-behavior: smooth; }
        .ryc a { color: ${c.terracotta}; text-decoration: none; }
        .ryc ::selection { background: oklch(0.92 0.03 55); }
        .ryc-navlink { color: ${c.text2}; transition: color .15s ease; }
        .ryc-navlink:hover { color: ${c.text}; }
        .ryc-pill-dark { transition: background .18s ease; }
        .ryc-pill-dark:hover { background: ${c.terracotta}; }
        .ryc-btn-primary { transition: background .18s ease; }
        .ryc-btn-primary:hover { background: ${c.terracottaHover}; }
        .ryc-btn-outline { transition: border-color .18s ease, color .18s ease; }
        .ryc-btn-outline:hover { border-color: ${c.terracotta}; color: ${c.terracotta}; }
        .ryc-underline:hover { text-decoration: underline; text-underline-offset: 4px; }
        .ryc-card { transition: border-color .18s ease, transform .18s ease; }
        .ryc-card:hover { border-color: ${c.terracotta}; transform: translateY(-2px); }
        .ryc-class-arrow { transition: transform .18s ease; }
        .ryc-class-row:hover .ryc-class-arrow { transform: translateX(4px); }
        .ryc-class-row:hover > span:first-child > span:first-child { color: ${c.terracotta}; }
        .ryc-btn-light { transition: background .18s ease; }
        .ryc-btn-light:hover { background: oklch(0.92 0.03 60); }
        @media (max-width: 900px) {
          .ryc-nav-links { display: none !important; }
          .ryc-hero-grid, .ryc-split { grid-template-columns: 1fr !important; gap: 32px !important; }
          .ryc-steps, .ryc-quotes { grid-template-columns: 1fr !important; gap: 24px !important; }
          .ryc-hero-img { height: 340px !important; }
          .ryc-coach-img { aspect-ratio: 4 / 3 !important; }
          .ryc-pad { padding-left: 22px !important; padding-right: 22px !important; }
          .ryc-sec { padding-top: 64px !important; }
          #how.ryc-sec { padding-top: 0 !important; margin-top: 64px !important; }
          .ryc-band { padding-top: 48px !important; padding-bottom: 48px !important; }
          #pilot.ryc-sec { padding-bottom: 64px !important; }
          .ryc-pilot-panel { padding: 44px 24px !important; }
          .ryc-hero-ctas a { padding: 0 20px !important; height: 50px !important; font-size: 15px !important; }
          .ryc-hero-top { padding-top: 96px !important; padding-bottom: 0 !important; min-height: 0 !important; }
        }
      `}</style>

      {/* HEADER (shared, restyled) */}
      <Navbar />

      {/* HERO: fills the first screen, so the page opens on one clear message
          and the rest is below the fold. */}
      <section className="ryc-pad ryc-hero-top" style={{ maxWidth: 1240, margin: '0 auto', padding: '112px 40px 56px', minHeight: '100svh', display: 'flex', alignItems: 'center' }}>
        <div className="ryc-hero-grid" style={{ width: '100%', display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)', gap: 72, alignItems: 'center' }}>
          <div>
            <div style={{ ...eyebrow, marginBottom: 26 }}>Live on Teams&nbsp;&nbsp;·&nbsp;&nbsp;15 to 30 minutes</div>
            <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(38px, 5.4vw, 76px)', lineHeight: 1.06, letterSpacing: '-0.02em', margin: 0, maxWidth: '14ch', textWrap: 'balance' }}>
              A stronger team, <span style={{ color: c.terracotta }}>half&nbsp;an&nbsp;hour</span> at a time.
            </h1>
            <p style={{ fontSize: 'clamp(18px, 1.5vw, 21px)', lineHeight: 1.6, color: c.text2, margin: '30px 0 0', maxWidth: '44ch' }}>
              Live breathing, meditation and chair yoga that fits inside the working day. Office, remote or hybrid. No mats, no changing, no awkward silence.
            </p>
            <div className="ryc-hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 34 }}>
              <Link className="ryc-btn-primary" to="/demo" style={{ display: 'inline-flex', alignItems: 'center', height: 54, padding: '0 28px', borderRadius: 999, background: c.terracotta, color: c.onDark, fontWeight: 600, fontSize: 16 }}>Book a pilot session</Link>
              <a className="ryc-btn-outline" href="#sessions" style={{ display: 'inline-flex', alignItems: 'center', height: 54, padding: '0 26px', borderRadius: 999, border: `1px solid oklch(0.84 0.02 76)`, color: c.text, fontSize: 16 }}>See the sessions</a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 26, marginTop: 34, fontSize: 14.5, color: c.text3 }}>
              <span>No app to install</span>
              <span>Runs in your calendar</span>            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div className="ryc-hero-img" style={{ height: 'min(640px, 72svh)', borderRadius: '999px 999px 18px 18px', overflow: 'hidden', border: `1px solid ${c.rule}`, background: 'oklch(0.94 0.018 76)' }}>
              <img src="/images/hero-camilla.jpg" alt="Camilla, a certified yoga teacher, against a sandstone wall in Stockholm" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SESSIONS: a real class photo beside a plain list of the three classes */}
      <section id="sessions" className="ryc-pad ryc-sec" style={{ maxWidth: 1200, margin: '0 auto', padding: '112px 40px 0' }}>
        <div className={classPhoto ? 'ryc-split' : undefined} style={classPhoto ? { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 64, alignItems: 'center' } : undefined}>
          {classPhoto && (
            <figure style={{ margin: 0 }}>
              <div style={{ aspectRatio: '4 / 3', borderRadius: 14, overflow: 'hidden', background: 'oklch(0.94 0.018 76)' }}>
                <img src={classPhoto.src} alt={classPhoto.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <figcaption style={{ fontSize: 14, color: c.text3, marginTop: 12 }}>{classPhoto.caption}</figcaption>
            </figure>
          )}
          {/* Without a photo, the heading takes the left column and the list the
              right, so the heading never sits alone with empty space beside it. */}
          <div className={classPhoto ? undefined : 'ryc-split'} style={classPhoto ? undefined : { display: 'grid', gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)', gap: 64, alignItems: 'start' }}>
            <div>
              <h2 style={{ ...h2Style, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.1, maxWidth: '18ch' }}>Three classes. Choose one, or rotate.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: c.text2, margin: '16px 0 0', maxWidth: '44ch' }}>Every class is live and around 15 to 30 minutes, done from a chair.</p>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: classPhoto ? '32px 0 0' : 0, borderTop: `1px solid ${c.rule}` }}>
              {sessions.map((s) => (
                <li key={s.kind} style={{ borderBottom: `1px solid ${c.rule}` }}>
                  <Link to={s.to} className="ryc-class-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', gap: 20, alignItems: 'center', padding: '22px 0', color: 'inherit' }}>
                    <span>
                      <span style={{ display: 'block', fontFamily: serif, fontSize: 'clamp(26px, 2.4vw, 32px)', lineHeight: 1.1, color: c.text }}>{s.kind}</span>
                      <span style={{ display: 'block', fontSize: 16, lineHeight: 1.55, color: c.text2, marginTop: 6 }}>{s.body}</span>
                    </span>
                    <span aria-hidden="true" className="ryc-class-arrow" style={{ color: c.terracotta, fontSize: 20 }}>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS: one horizontal strip, not a tall list */}
      <section id="how" className="ryc-sec" style={{ background: c.band, color: c.text, marginTop: 112 }}>
        <div className="ryc-pad ryc-band" style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 40px' }}>
          <h2 style={{ ...h2Style, fontSize: 'clamp(26px, 2.7vw, 34px)' }}>Booked on Monday, running next week.</h2>
          <ol className="ryc-steps" style={{ listStyle: 'none', padding: 0, margin: '36px 0 0', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 40 }}>
            {steps.map(([n, title, body]) => (
              <li key={n} style={{ borderTop: `1px solid ${c.bandDivider}`, paddingTop: 20 }}>
                <span style={{ fontFamily: mono, fontSize: 12, color: c.terracotta }}>{n}</span>
                <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: 23, margin: '8px 0 6px', color: c.text }}>{title}</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: c.text2, margin: 0 }}>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* YOUR COACH */}
      <section id="about" className="ryc-pad ryc-sec" style={{ maxWidth: 1200, margin: '0 auto', padding: '112px 40px 0' }}>
        <div className="ryc-split" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)', gap: 64, alignItems: 'center' }}>
          <div className="ryc-coach-img" style={{ aspectRatio: '4 / 5', borderRadius: 14, overflow: 'hidden', background: 'oklch(0.94 0.018 76)' }}>
            <img src="/images/coach-camilla.jpg" alt="Camilla walking with a yoga mat past a sandstone facade in Stockholm" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 70%', display: 'block' }} />
          </div>
          <div>
            <h2 style={{ ...h2Style, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.1, maxWidth: '18ch' }}>I&rsquo;m Camilla. I&rsquo;ve sat in the meetings too.</h2>
            <div style={{ display: 'grid', gap: 18, marginTop: 24, maxWidth: '50ch' }}>
              <p style={{ fontSize: 17.5, lineHeight: 1.6, color: c.text2, margin: 0 }}>Before I taught full time I worked in a multinational, a startup, a consultancy and government. I know what a Thursday afternoon feels like.</p>
              <p style={{ fontSize: 17.5, lineHeight: 1.6, color: c.text2, margin: 0 }}>So the classes are deliberately unimpressive. Done in a chair, in work clothes. Nobody has to be good at it.</p>
            </div>
            <p style={{ fontSize: 15, color: c.text3, margin: '24px 0 0' }}>500 hours of yoga training · Live on Teams · UK and European hours</p>
            <p style={{ marginTop: 20 }}>
              <Link className="ryc-underline" to="/about" style={{ color: c.terracotta, fontSize: 15 }}>More about how I work →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* PROOF: two quotes, set large, no cards */}
      <section id="proof" className="ryc-pad ryc-sec" style={{ maxWidth: 1200, margin: '0 auto', padding: '112px 40px 0' }}>
        <div className="ryc-quotes" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 56, borderTop: `1px solid ${c.rule}`, paddingTop: 48 }}>
          {reviews.map((r) => (
            <figure key={r.name} style={{ margin: 0 }}>
              <blockquote style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(26px, 2.6vw, 34px)', lineHeight: 1.25, letterSpacing: '-0.01em', margin: 0, color: c.text }}>&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption style={{ fontSize: 15, color: c.text3, marginTop: 16 }}>{r.name}, after a live class</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="ryc-pad ryc-sec" style={{ maxWidth: 1200, margin: '0 auto', padding: '112px 40px 0' }}>
        <h2 style={{ ...h2Style, fontSize: 'clamp(26px, 2.7vw, 34px)' }}>Simple, per month</h2>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: c.text2, margin: '12px 0 32px', maxWidth: '52ch' }}>Priced by how often you meet, not which class you pick.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
          {tiers.map((t) => (
            <Link key={t.name} to="/pricing" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="ryc-card" style={{ background: t.highlight ? c.card : 'transparent', border: t.highlight ? `1.5px solid ${c.terracotta}` : `1px solid ${c.rule}`, borderRadius: 12, padding: '26px 26px', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                  <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: 22, margin: 0, color: c.text }}>{t.name}</h3>
                  {t.highlight && <span style={{ fontSize: 13, color: c.terracotta, fontWeight: 600 }}>Most popular</span>}
                </div>
                <div style={{ fontFamily: serif, fontSize: 34, lineHeight: 1, margin: '14px 0 0', color: c.text, whiteSpace: 'nowrap' }}>
                  {t.price}<span style={{ fontFamily: sans, fontSize: 15, color: c.text3 }}> {t.per}</span>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: c.text2, margin: '12px 0 0' }}>{t.body}</p>
              </div>
            </Link>
          ))}
        </div>
        <p style={{ marginTop: 20, fontSize: 15.5, color: c.text3 }}>
          Every engagement starts with a single pilot session at 1,490 kr, credited to your first month.{' '}
          <Link className="ryc-underline" to="/pricing" style={{ color: c.terracotta }}>See full pricing →</Link>
        </p>
      </section>

      {/* PILOT CTA: one message, one button */}
      <section id="pilot" className="ryc-pad ryc-sec" style={{ maxWidth: 1200, margin: '0 auto', padding: '112px 40px 112px' }}>
        <div className="ryc-pilot-panel" style={{ background: c.darkPill, color: c.onDark, borderRadius: 18, padding: '64px 56px', textAlign: 'center' }}>
          <h2 style={{ ...h2Style, color: c.onDark, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.1 }}>Try one session. See who shows up.</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'oklch(0.86 0.02 76)', margin: '16px auto 0', maxWidth: '42ch' }}>One paid session, no contract, nothing to sign.</p>
          <Link className="ryc-btn-light" to="/demo" style={{ display: 'inline-flex', alignItems: 'center', height: 54, padding: '0 30px', marginTop: 30, borderRadius: 999, background: c.onDark, color: c.text, fontWeight: 600, fontSize: 16 }}>Book a pilot</Link>
        </div>
      </section>

      {/* FOOTER (shared) */}
      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Index;
