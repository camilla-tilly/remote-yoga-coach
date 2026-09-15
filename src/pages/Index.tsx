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
  name: 'The Weekly Reset',
  provider: { '@type': 'Organization', name: 'Remote Yoga Coach', url: 'https://remoteyogacoach.com' },
  areaServed: ['GB', 'EU', 'AU'],
  description:
    'Live breathing, meditation and chair-yoga classes of around 15 to 30 minutes for remote and hybrid teams, delivered on Teams.',
};

// The three classes are the product, so each one gets its own mark, and the
// brand's only accent colour (terracotta) carries the emphasis. All three cards
// share the brand cream: an earlier version gave each its own peach, butter or
// blush tint, and two of those sat outside the palette entirely.
// the class name is the headline. Before this they were three identical pale
// cards whose largest text was a secondary name ("Desk reset"), with the class
// itself reduced to a small grey label, so nothing on the page said "these are
// the three things you can book".
const sessions = [
  {
    kind: 'Chair yoga',
    tagline: 'A desk reset',
    body: 'Shoulders, neck and hips, in work clothes, at the desk.',
    to: '/services/chair-yoga-for-teams',
    icon: 'chair',
  },
  {
    kind: 'Breathing',
    tagline: 'A pause between calls',
    body: 'Before the all-hands or after a hard call. Works with cameras off.',
    to: '/blog/breathing-exercises-for-work-stress',
    icon: 'breath',
  },
  {
    kind: 'Meditation',
    tagline: 'Settle and refocus',
    body: 'A quiet moment in the middle of the day.',
    to: '/guides/mindfulness-at-work',
    icon: 'meditation',
  },
] as const;

// Simple line marks, drawn to sit with the site's dot logo rather than
// borrowing yoga-studio iconography. Decorative only.
const ClassIcon = ({ kind, color }: { kind: 'chair' | 'breath' | 'meditation'; color: string }) => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === 'chair' && (
      <>
        <rect x="8" y="4" width="5" height="13.5" rx="2.5" />
        <rect x="8" y="16" width="17" height="4" rx="2" />
        <path d="M10.5 20v8M22.5 20v8" />
      </>
    )}
    {kind === 'breath' && (
      <>
        <path d="M3 13c3.5-5 6.5-5 10 0s6.5 5 10 0 4-3.5 6-2" />
        <path d="M3 21c3.5-5 6.5-5 10 0s6.5 5 10 0 4-3.5 6-2" opacity="0.5" />
      </>
    )}
    {kind === 'meditation' && (
      <>
        <circle cx="16" cy="16" r="11" opacity="0.5" />
        <circle cx="16" cy="16" r="4.5" fill={color} stroke="none" />
      </>
    )}
  </svg>
);

const steps = [
  ['01', 'A first call', 'To see if it is a fit. Your time zones, and what the team is struggling with.'],
  ['02', 'A pilot session', 'One paid session. See who joins before you commit.'],
  ['03', 'A weekly slot', 'Same time every week, as a recurring invite.'],
];

// Real client quotes, verbatim, first names only. Card layout with varied spans/sizes.
const reviews: Array<{ quote: string; name: string; span: number; size: number; sand?: boolean }> = [
  { quote: 'I have done yoga for 20 years and never done this. I really enjoyed it, and feel really stretched out.', name: 'Anonymous', span: 2, size: 34, sand: true },
  { quote: 'You have such a soothing voice.', name: 'Kris', span: 1, size: 26 },
  { quote: 'Thanks for this beautiful flow. I felt great afterwards.', name: 'Susanne', span: 1, size: 26 },
  { quote: 'Wonderful practice, especially all the balance poses. Thank you.', name: 'Nina', span: 2, size: 30 },
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
        .ryc-class-card { box-shadow: 0 1px 0 oklch(0.88 0.02 60 / 0.6); }
        .ryc-class-card:hover { box-shadow: 0 14px 30px -18px oklch(0.4 0.05 45 / 0.35); }
        .ryc-class-arrow { transition: transform .18s ease; }
        .ryc-class-card:hover .ryc-class-arrow { transform: translateX(4px); }
        @media (max-width: 900px) {
          .ryc-nav-links { display: none !important; }
          .ryc-hero-grid, .ryc-how-grid, .ryc-coach-grid, .ryc-pilot-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ryc-sessions-grid { grid-template-columns: 1fr !important; }
          .ryc-proof-grid { grid-template-columns: 1fr !important; }
          .ryc-proof-grid > div { grid-column: span 1 !important; }
          .ryc-hero-img { height: 400px !important; }
          .ryc-pad { padding-left: 22px !important; padding-right: 22px !important; }
          .ryc-pilot-panel { padding: 44px 26px !important; }
        }
      `}</style>

      {/* HEADER (shared, restyled) */}
      <Navbar />

      {/* HERO */}
      <section className="ryc-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 40px 0' }}>
        <div className="ryc-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ ...eyebrow, marginBottom: 26 }}>Live on Teams&nbsp;&nbsp;·&nbsp;&nbsp;camera optional</div>
            <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(34px, 3.8vw, 53px)', lineHeight: 1.14, letterSpacing: '-0.012em', margin: 0, maxWidth: '20ch', textWrap: 'balance' }}>
              A stronger team, <span style={{ color: c.terracotta }}>half&nbsp;an&nbsp;hour</span> at a time.
            </h1>
            <p style={{ fontSize: 19.5, lineHeight: 1.6, color: c.text2, margin: '30px 0 0', maxWidth: '48ch' }}>
              Live breathing, meditation and chair yoga that fits inside the working day. Office, remote or hybrid. No mats, no changing, no awkward silence.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 34 }}>
              <Link className="ryc-btn-primary" to="/demo" style={{ display: 'inline-flex', alignItems: 'center', height: 54, padding: '0 28px', borderRadius: 999, background: c.terracotta, color: c.onDark, fontWeight: 600, fontSize: 16 }}>Book a pilot session</Link>
              <a className="ryc-btn-outline" href="#sessions" style={{ display: 'inline-flex', alignItems: 'center', height: 54, padding: '0 26px', borderRadius: 999, border: `1px solid oklch(0.84 0.02 76)`, color: c.text, fontSize: 16 }}>See the sessions</a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 26, marginTop: 34, fontSize: 14.5, color: c.text3 }}>
              <span>No app to install</span>
              <span>Runs in your calendar</span>            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div className="ryc-hero-img" style={{ height: 520, borderRadius: '260px 260px 18px 18px', overflow: 'hidden', border: `1px solid ${c.rule}`, background: 'oklch(0.94 0.018 76)' }}>
              <img src="/images/hero-camilla.jpg" alt="Camilla, a certified yoga teacher, against a sandstone wall in Stockholm" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SESSIONS */}
      <section id="sessions" className="ryc-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 40, marginBottom: 44, flexWrap: 'wrap' }}>
          <h2 style={{ ...h2Style, fontSize: 'clamp(26px, 2.8vw, 36px)', maxWidth: '22ch' }}>Three classes. Choose one, alternate, or combine.</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.6, color: c.text3, margin: 0, maxWidth: '34ch' }}>Every class is live and around 15 to 30 minutes. Pick one, or rotate through them.</p>
        </div>
        <div className="ryc-sessions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
          {sessions.map((s) => (
            <Link key={s.kind} to={s.to} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="ryc-card ryc-class-card" style={{ background: '#efe4d6', border: `1px solid ${c.borderSoft}`, borderRadius: 14, padding: '34px 32px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 58, height: 58, borderRadius: 999, background: c.terracotta, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 26 }}>
                  <ClassIcon kind={s.icon} color={c.onDark} />
                </div>
                <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(30px, 2.6vw, 36px)', lineHeight: 1.05, letterSpacing: '-0.012em', margin: 0, color: c.text }}>{s.kind}</h3>
                <div style={{ fontFamily: mono, fontSize: 12.5, color: c.terracotta, margin: '10px 0 14px' }}>{s.tagline}</div>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: c.text2, margin: 0, flex: 1 }}>{s.body}</p>
                <div className="ryc-class-more" style={{ marginTop: 26, paddingTop: 18, borderTop: `1px solid ${c.borderSoft}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 14.5, color: c.terracotta }}>
                  <span>Explore {s.kind.toLowerCase()}</span>
                  <span aria-hidden="true" className="ryc-class-arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px', marginTop: 26, fontSize: 14.5 }}>
          <Link className="ryc-underline" to="/services/chair-yoga-for-teams" style={{ color: c.terracotta }}>Chair yoga for teams →</Link>
          <Link className="ryc-underline" to="/services/team-wellness" style={{ color: c.terracotta }}>How a session runs →</Link>
          <Link className="ryc-underline" to="/services/corporate-wellbeing-for-remote-teams" style={{ color: c.terracotta }}>Wellbeing for remote and hybrid teams →</Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ background: c.band, color: c.text, marginTop: 100 }}>
        <div className="ryc-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '86px 40px' }}>
          <div className="ryc-how-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)', gap: 60 }}>
            <div>
              <h2 style={{ ...h2Style, fontSize: 'clamp(25px, 2.7vw, 34px)', maxWidth: '16ch' }}>Booked on Monday, running next week.</h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.65, color: c.text2, margin: '24px 0 0', maxWidth: '36ch' }}>No procurement marathon. No platform to roll out. It lands in the calendar tool you already use.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: c.bandDivider }}>
              {steps.map(([n, title, body], i) => (
                <div key={n} style={{ background: c.band, padding: i === steps.length - 1 ? '26px 0 0' : '26px 0', display: 'grid', gridTemplateColumns: '58px minmax(0, 1fr)', gap: 20, alignItems: 'start' }}>
                  <span style={{ fontFamily: mono, fontSize: 12, color: c.terracotta }}>{n}</span>
                  <div>
                    <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: 23, margin: '0 0 8px', color: c.text }}>{title}</h3>
                    <p style={{ fontSize: 15.5, lineHeight: 1.6, color: c.text2, margin: 0, maxWidth: '52ch' }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YOUR COACH */}
      <section id="about" className="ryc-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 40px 0' }}>
        <div className="ryc-coach-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)', gap: 56, alignItems: 'start', borderTop: `1px solid ${c.rule}`, paddingTop: 48 }}>
          <div style={{ aspectRatio: '3 / 4', borderRadius: 10, overflow: 'hidden', background: 'oklch(0.94 0.018 76)' }}>
            <img src="/images/coach-camilla.jpg" alt="Camilla walking with a yoga mat past a sandstone facade in Stockholm" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <div style={{ ...eyebrow, marginBottom: 22 }}>A real person, live, every week</div>
            <h2 style={{ ...h2Style, fontSize: 'clamp(26px, 2.8vw, 36px)', lineHeight: 1.06, maxWidth: '20ch' }}>I&rsquo;m Camilla. I&rsquo;ve sat in the meetings too.</h2>
            <div style={{ display: 'grid', gap: 18, marginTop: 26, maxWidth: '54ch' }}>
              <p style={{ fontSize: 17.5, lineHeight: 1.6, color: c.text2, margin: 0 }}>Before I taught full time I worked in a multinational, a startup, a consultancy and government. I know what a Thursday afternoon feels like.</p>
              <p style={{ fontSize: 17.5, lineHeight: 1.6, color: c.text2, margin: 0 }}>So the Weekly Reset is deliberately unimpressive. Done in a chair, in work clothes, camera off if you like. Nobody has to be good at it.</p>            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 30 }}>
              {['500 hours of yoga training', 'Meditation, breathing and chair yoga', 'Live on Teams', 'UK, EU and AU hours'].map((p) => (
                <span key={p} style={{ fontFamily: mono, fontSize: 12, color: c.text2, border: `1px solid oklch(0.86 0.02 76)`, borderRadius: 999, padding: '9px 16px', whiteSpace: 'nowrap' }}>{p}</span>
              ))}
            </div>
            <p style={{ marginTop: 28 }}>
              <Link className="ryc-underline" to="/about" style={{ color: c.terracotta, fontSize: 15 }}>More about how I work →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="ryc-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 0.8fr)', gap: 60, alignItems: 'end', borderTop: `1px solid ${c.rule}`, paddingTop: 28, marginBottom: 44 }}>
          <h2 style={{ ...h2Style, fontSize: 'clamp(26px, 2.8vw, 36px)', lineHeight: 1.05, maxWidth: '24ch' }}>What people say about practising with me</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'oklch(0.45 0.02 60)', margin: 0, maxWidth: '38ch' }}>Unedited comments from people I have taught.</p>
        </div>
        <div className="ryc-proof-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ gridColumn: `span ${r.span}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 22, background: r.sand ? 'oklch(0.955 0.016 60)' : 'oklch(0.985 0.01 76)', border: `1px solid ${r.sand ? 'oklch(0.9 0.018 60)' : 'oklch(0.88 0.02 76)'}`, borderRadius: 10, padding: '32px 30px' }}>
              <blockquote style={{ fontFamily: serif, fontWeight: 400, fontSize: r.size, lineHeight: 1.3, letterSpacing: '-0.01em', margin: 0, color: 'oklch(0.24 0.02 60)' }}>&ldquo;{r.quote}&rdquo;</blockquote>
              <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: r.sand ? 'oklch(0.46 0.04 45)' : 'oklch(0.5 0.02 60)' }}>{r.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="ryc-pad" style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 40, borderTop: `1px solid ${c.rule}`, paddingTop: 28, marginBottom: 44, flexWrap: 'wrap' }}>
          <h2 style={{ ...h2Style, fontSize: 'clamp(25px, 2.7vw, 34px)' }}>Simple, per month</h2>
          <span style={{ fontSize: 15.5, color: c.text3 }}>A flat monthly fee, priced by how often you meet, not which class you pick.</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 20 }}>
          {tiers.map((t) => (
            <Link key={t.name} to="/pricing" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="ryc-card" style={{ background: c.card, border: t.highlight ? `1.5px solid ${c.terracotta}` : `1px solid ${c.rule}`, borderRadius: 10, padding: '34px 30px', position: 'relative' }}>
                {t.highlight && (
                  <span style={{ position: 'absolute', top: -11, left: 28, background: c.terracotta, color: c.onDark, fontFamily: mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999, whiteSpace: 'nowrap' }}>Most popular</span>
                )}
                <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: 24, margin: 0, color: c.text }}>{t.name}</h3>
                <div style={{ fontFamily: serif, fontSize: 40, lineHeight: 1, margin: '20px 0 6px', color: c.text, whiteSpace: 'nowrap' }}>
                  {t.price}<span style={{ fontFamily: sans, fontSize: 15, color: c.text3 }}> {t.per}</span>
                </div>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: c.text2, margin: '14px 0 0' }}>{t.body}</p>
              </div>
            </Link>
          ))}
        </div>
        <p style={{ marginTop: 22, fontSize: 15.5, color: c.text3 }}>
          Every engagement starts with a single pilot session at 1,490 kr, credited to your first month.{' '}
          <Link className="ryc-underline" to="/pricing" style={{ color: c.terracotta }}>See full pricing →</Link>
        </p>
      </section>

      {/* PILOT CTA */}
      <section id="pilot" className="ryc-pad" style={{ maxWidth: 1200, margin: '96px auto 0', padding: '0 40px 110px' }}>
        <div className="ryc-pilot-panel ryc-pilot-grid" style={{ background: c.softPanel, borderRadius: 18, padding: '72px 56px', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 0.85fr)', gap: 56, alignItems: 'center' }}>
          <div>
            <h2 style={{ ...h2Style, fontSize: 'clamp(27px, 2.9vw, 38px)', lineHeight: 1.05, maxWidth: '18ch' }}>Try one session. See who shows up.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: c.text2, margin: '22px 0 0', maxWidth: '42ch' }}>One paid session, no contract, nothing to sign.</p>
          </div>
          <div style={{ background: c.card, border: `1px solid ${c.borderSoft}`, borderRadius: 12, padding: '30px 28px', display: 'grid', gap: 16 }}>
            <Link className="ryc-btn-primary" to="/demo" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 54, borderRadius: 999, background: c.terracotta, color: c.onDark, fontWeight: 600, fontSize: 16 }}>Book a pilot</Link>
            <div style={{ display: 'grid', gap: 10, fontSize: 14.5, color: c.text2 }}>
              <span>No app to install</span>
              <span>Runs in your calendar</span>            </div>
            <span style={{ fontSize: 13.5, color: c.text3 }}>No newsletter, no sequence.</span>
          </div>
        </div>
      </section>

      {/* FOOTER (shared) */}
      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Index;
