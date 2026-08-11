import Link from "next/link";

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"/>
        <path d="M4 24c0-4 4-7 10-7s10 3 10 7"/>
      </svg>
    ),
    title: "Investment Readiness",
    body: "A structured assessment of your business against the criteria institutional investors apply — with a clear roadmap to close the gaps.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="22" height="22" rx="2"/>
        <path d="M8 18l4-5 4 3 5-7"/>
      </svg>
    ),
    title: "Financial Modelling",
    body: "Three-statement models, scenario analysis, and valuation built to the standard institutional investors expect.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3l10 4v8c0 5-4 9-10 11C8 24 4 20 4 15V7z"/>
        <path d="M10 14l3 3 5-5"/>
      </svg>
    ),
    title: "Regulatory Advisory",
    body: "Navigate licences, approvals, and compliance requirements across African jurisdictions — before they become blockers.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="14" r="4"/>
        <circle cx="20" cy="8" r="4"/>
        <circle cx="20" cy="20" r="4"/>
        <path d="M12 12l5-3M12 16l5 3"/>
      </svg>
    ),
    title: "Investor Access",
    body: "Warm introductions to DFIs, private equity, and VC funds actively deploying in your sector and geography.",
  },
];

const STATS = [
  { value: "54",    label: "African markets in scope" },
  { value: "$68B+", label: "Annual infrastructure financing gap" },
  { value: "5",     label: "Advisory services" },
  { value: "100%",  label: "Client confidentiality" },
];

const PROCESS = [
  { step: "01", title: "Readiness assessment",  body: "We evaluate where your business stands against what investors need to see — and identify exactly what needs to change." },
  { step: "02", title: "Build the foundations", body: "Financial model, business plan, regulatory checklist, and investor materials — built with rigour and precision." },
  { step: "03", title: "Prepare for scrutiny",  body: "Data room setup, due diligence preparation, and rehearsal for the questions investors will ask." },
  { step: "04", title: "Connect to capital",    body: "Targeted introductions to the right investors for your stage, sector, and geography." },
];

export default function Home() {
  return (
    <>
      {/* Hero — split layout */}
      <section style={{ background: "var(--bg-primary)", minHeight: "calc(100vh - 68px)", display: "grid", gridTemplateColumns: "1fr 1fr" }} className="hero-grid">

        {/* Left: text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 60px 80px 48px", maxWidth: 600, marginLeft: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ width: 32, height: 1, background: "var(--accent)" }} />
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>
              Blue Nile Innovation Group
            </p>
          </div>

          <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--text-primary)", marginBottom: 12 }}>
            Investment readiness
          </h1>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--accent)", marginBottom: 28 }}>
            for Africa&apos;s most ambitious businesses
          </h1>

          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 460, marginBottom: 40 }}>
            We prepare high-growth African companies to raise capital — from financial modelling and documentation to regulatory clearance and investor introductions.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
              background: "var(--accent)", color: "#0c1a2e",
              padding: "14px 32px", borderRadius: 4,
            }}>
              Start the conversation
            </Link>
            <Link href="/services" style={{
              fontSize: 13, fontWeight: 600, letterSpacing: "0.04em",
              color: "var(--accent)", padding: "14px 32px", borderRadius: 4,
              border: "1px solid var(--border-strong)",
            }}>
              Our services →
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 36, marginTop: 56, paddingTop: 40, borderTop: "1px solid var(--border)", flexWrap: "wrap" }}>
            {STATS.map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "var(--accent)", letterSpacing: "-0.01em" }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4, letterSpacing: "0.02em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: visual panel — replace background-image URL with your own photo */}
        <div style={{
          position: "relative", overflow: "hidden",
          backgroundImage: "url('/nile-hero.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} className="hero-image">
          {/* Gradient overlay so left edge blends into nav */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, var(--bg-primary) 0%, transparent 25%)",
          }} />
          {/* Bottom fade */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
            background: "linear-gradient(to top, var(--bg-primary), transparent)",
          }} />
        </div>
      </section>

      {/* Services */}
      <section style={{ background: "var(--bg-section)", padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 28, height: 1, background: "var(--accent)" }} />
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)" }}>What we do</p>
          </div>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 48, color: "var(--text-primary)" }}>
            End-to-end investment readiness
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1, border: "1px solid var(--border)" }}>
            {SERVICES.map((s, i) => (
              <div key={s.title} style={{
                background: "var(--bg-card)", padding: "36px 28px",
                borderRight: i < SERVICES.length - 1 ? "1px solid var(--border)" : "none",
                transition: "background 0.2s",
              }}>
                <div style={{ marginBottom: 20 }}>{s.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12, letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, textAlign: "center" }}>
            <Link href="/services" style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500, letterSpacing: "0.02em" }}>See full service details →</Link>
          </div>
        </div>
      </section>

      {/* Stats — gold bordered boxes */}
      <section style={{ background: "var(--bg-primary)", padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {STATS.map(s => (
              <div key={s.label} style={{
                border: "1px solid var(--accent)", borderRadius: 4,
                padding: "32px 28px", textAlign: "center",
                background: "rgba(201, 168, 76, 0.04)",
              }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: "var(--accent)", letterSpacing: "-0.02em", marginBottom: 10 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, letterSpacing: "0.02em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section style={{ background: "var(--bg-section)", padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 28, height: 1, background: "var(--accent)" }} />
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)" }}>How we work</p>
          </div>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 48, color: "var(--text-primary)" }}>
            A structured path to capital
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {PROCESS.map((p, i) => (
              <div key={p.step} style={{
                padding: "32px 28px",
                borderLeft: i === 0 ? "none" : "1px solid var(--border)",
                borderTop: "2px solid " + (i === 0 ? "var(--accent)" : "var(--border)"),
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", marginBottom: 16 }}>{p.step}</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-primary)", padding: "80px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 40, height: 1, background: "var(--accent)", margin: "0 auto 24px" }} />
          <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, letterSpacing: "-0.02em" }}>
            Ready to become investor-ready?
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", marginBottom: 36, lineHeight: 1.7 }}>
            Tell us about your business and where you&apos;re trying to get to. We&apos;ll be honest about whether we can help — and how.
          </p>
          <Link href="/contact" style={{
            fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
            background: "var(--accent)", color: "#0c1a2e",
            padding: "14px 36px", borderRadius: 4, display: "inline-block",
          }}>
            Start the conversation
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image { display: none !important; }
        }
      `}</style>
    </>
  );
}
