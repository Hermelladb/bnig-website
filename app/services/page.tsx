import Link from "next/link";

const SERVICES = [
  {
    number: "01",
    title: "Investment Readiness Assessment",
    tagline: "Know exactly where you stand.",
    body: "Before any capital raise begins, we conduct a structured assessment of your business against the criteria institutional investors apply.",
    deliverables: ["Structured readiness evaluation", "Gap analysis with prioritised actions", "Tailored roadmap to close the gaps"],
  },
  {
    number: "02",
    title: "Financial Modelling",
    tagline: "Numbers investors can trust.",
    body: "Financial analysis built to the standard institutional investors, DFIs, and private equity funds require. Rigorous, clearly structured, and built to withstand the scrutiny of professional due diligence.",
    deliverables: ["Investor-grade financial model", "Scenario and sensitivity analysis", "Valuation and returns outputs", "Lender and investor-ready documentation"],
  },
  {
    number: "03",
    title: "Transaction Documentation",
    tagline: "Tell your story with precision.",
    body: "The best businesses lose mandates to weaker ones because their documentation doesn't hold up. We prepare the materials your business needs to communicate clearly and withstand the scrutiny of institutional due diligence.",
    deliverables: ["Investment memorandum (IM)", "Executive summary", "Pitch deck narrative", "Data room structure and content"],
  },
  {
    number: "04",
    title: "Regulatory Advisory",
    tagline: "Remove the blockers early.",
    body: "Regulatory requirements in African markets are complex, varied, and often the last-minute reason a deal falls apart. We map every licence, approval, and filing required for your transaction across the relevant jurisdictions — and help you get ahead of them before they become problems.",
    deliverables: ["Regulatory requirements mapping", "Filing and approval timeline", "Liaison support with regulatory authorities", "Ongoing compliance tracking"],
  },
  {
    number: "05",
    title: "Investor Relations & Access",
    tagline: "The right introduction at the right time.",
    body: "We connect businesses that are ready with capital partners whose mandate aligns with their sector, stage, and geography.",
    deliverables: ["Curated longlist of matched investors", "Warm introductions with briefing notes", "Investor meeting preparation", "Term sheet negotiation support"],
  },
];

export default function Services() {
  return (
    <>
      {/* Page header */}
      <section style={{
        background: "var(--navy-dark)",
        padding: "80px 24px 64px",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--accent-light)", marginBottom: 16,
          }}>
            Services
          </p>
          <h1 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(32px, 4.5vw, 52px)",
            fontWeight: 500, lineHeight: 1.1,
            color: "var(--text-primary)", maxWidth: 640, marginBottom: 20,
          }}>
            Everything a company needs to raise capital in Africa
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 520 }}>
            We work with companies from first assessment through to signed term sheets — covering every gap
            between where you are and where investors need you to be.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section style={{ background: "var(--navy)", padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {SERVICES.map((s, i) => (
            <div key={s.number} className="service-row" style={{
              display: "grid", gridTemplateColumns: "1fr 2fr",
              gap: 48, padding: "56px 0",
              borderBottom: i < SERVICES.length - 1 ? "1px solid var(--border)" : "none",
            }}>
              {/* Left: number + title */}
              <div>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: "var(--accent-light)",
                  letterSpacing: "0.1em", marginBottom: 12,
                }}>
                  {s.number}
                </div>
                <h2 style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(20px, 2.2vw, 26px)",
                  fontWeight: 500, color: "var(--text-primary)",
                  lineHeight: 1.3, marginBottom: 8,
                }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: 13, color: "var(--accent-light)", fontStyle: "italic" }}>
                  {s.tagline}
                </p>
              </div>

              {/* Right: body + deliverables */}
              <div>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 28 }}>
                  {s.body}
                </p>
                <div style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border)",
                  padding: "20px 24px",
                }}>
                  <p style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14,
                  }}>
                    Deliverables
                  </p>
                  {s.deliverables.map(d => (
                    <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 12, color: "var(--accent)", marginTop: 1, flexShrink: 0 }}>—</span>
                      <span style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fee note */}
      <div style={{ background: "var(--navy-dark)", borderTop: "1px solid var(--border)", padding: "20px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 12, color: "var(--text-muted)", fontStyle: "italic" }}>
            * We work on a fixed-fee or retainer basis — no success fees that create conflicts of interest.
          </p>
        </div>
      </div>

      {/* CTA — full-width photo with navy overlay, matching homepage */}
      <section style={{
        minHeight: 440,
        backgroundImage: `
          linear-gradient(rgba(3,26,53,0.84), rgba(3,26,53,0.84)),
          url('/image-3.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}>
        <div style={{ width: "min(92%, 680px)", margin: "0 auto", padding: "80px 0" }}>
          <p style={{
            color: "var(--accent)", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 18,
          }}>
            Let&apos;s Talk
          </p>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(28px, 4vw, 46px)",
            fontWeight: 500, lineHeight: 1.15,
            color: "var(--text-primary)", marginBottom: 20,
          }}>
            Not sure which service you need?
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", marginBottom: 36, lineHeight: 1.75 }}>
            Start with a conversation. We&apos;ll ask the right questions and tell you honestly what your business needs.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center",
            background: "var(--accent)", color: "var(--navy)",
            padding: "14px 30px", fontWeight: 700, fontSize: 14,
            border: "1px solid var(--accent)", transition: "all 0.25s",
          }}>
            Start a conversation
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .service-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 480px) {
          .service-row { padding: 40px 0 !important; }
        }
      `}</style>
    </>
  );
}
