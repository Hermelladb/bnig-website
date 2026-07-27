import Link from "next/link";

const SERVICES = [
  { icon: "📊", title: "Financial Modelling", body: "Three-statement models, scenario analysis, and valuation built to the standard institutional investors expect." },
  { icon: "📄", title: "Transaction Documentation", body: "Investment memos, information memoranda, executive summaries, and pitch materials that tell your story clearly." },
  { icon: "⚖️", title: "Regulatory Advisory", body: "Navigate licences, approvals, and compliance requirements across African jurisdictions — before they become blockers." },
  { icon: "🤝", title: "Investor Access", body: "Warm introductions to DFIs, private equity, and VC funds actively deploying in your sector and geography." },
];

const STATS = [
  { value: "$140M+", label: "Capital facilitated" },
  { value: "28",     label: "Engagements completed" },
  { value: "9",      label: "Countries served" },
  { value: "100%",   label: "Client confidentiality" },
];

const PROCESS = [
  { step: "01", title: "Readiness assessment", body: "We evaluate where your business stands against what investors need to see — and identify exactly what needs to change." },
  { step: "02", title: "Build the foundations", body: "Financial model, business plan, regulatory checklist, and investor materials — built with rigour and precision." },
  { step: "03", title: "Prepare for scrutiny", body: "Data room setup, due diligence preparation, and rehearsal for the questions investors will ask." },
  { step: "04", title: "Connect to capital", body: "Targeted introductions to the right investors for your stage, sector, and geography." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--bg-primary)", padding: "100px 24px 80px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: 20 }}>
            Blue Nile Innovation Group
          </p>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--text-primary)", maxWidth: 700, marginBottom: 24 }}>
            Investment readiness for Africa&apos;s most ambitious businesses
          </h1>
          <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 540, marginBottom: 36 }}>
            We prepare high-growth African companies to raise capital — from financial modelling and documentation to regulatory clearance and investor introductions.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontSize: 14, fontWeight: 600, background: "var(--accent)", color: "#fff", padding: "13px 28px", borderRadius: 8 }}>
              Work with us
            </Link>
            <Link href="/services" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-secondary)", padding: "13px 28px", borderRadius: 8, border: "1px solid var(--border-strong)" }}>
              Our services →
            </Link>
          </div>
          <div style={{ display: "flex", gap: 48, marginTop: 56, paddingTop: 40, borderTop: "1px solid var(--border)", flexWrap: "wrap" }}>
            {STATS.map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 28, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section style={{ background: "var(--bg-section)", padding: "80px 24px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: 12 }}>What we do</p>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 48, color: "var(--text-primary)" }}>
            End-to-end investment readiness
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ background: "var(--bg-card)", borderRadius: 12, padding: "28px 24px", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <Link href="/services" style={{ fontSize: 13, color: "var(--accent-light)", fontWeight: 500 }}>See full service details →</Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section style={{ background: "var(--bg-primary)", padding: "80px 24px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: 12 }}>How we work</p>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 48, color: "var(--text-primary)" }}>
            A structured path to capital
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {PROCESS.map((p, i) => (
              <div key={p.step} style={{ padding: "28px 24px", borderLeft: i === 0 ? "none" : "1px solid var(--border)", borderTop: "1px solid var(--border)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent-light)", letterSpacing: "0.1em", marginBottom: 14 }}>{p.step}</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section style={{ background: "var(--accent)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: "-0.02em" }}>
            Ready to become investor-ready?
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.82)", marginBottom: 32, lineHeight: 1.7 }}>
            Tell us about your business and where you&apos;re trying to get to. We&apos;ll be honest about whether we can help — and how.
          </p>
          <Link href="/contact" style={{ fontSize: 14, fontWeight: 700, background: "#fff", color: "var(--accent)", padding: "14px 32px", borderRadius: 8, display: "inline-block" }}>
            Start the conversation
          </Link>
        </div>
      </section>
    </>
  );
}
