import Link from "next/link";

const FEATURES = [
  {
    icon: "◈",
    title: "Readiness Assessment",
    body: "A clear-eyed view of where your business stands against what institutional investors expect to see.",
  },
  {
    icon: "↗",
    title: "Institutional Standards",
    body: "We build to the rigour that DFIs, private equity, and institutional investors demand.",
  },
  {
    icon: "◉",
    title: "African Markets",
    body: "Deep knowledge across 54 African jurisdictions, regulatory environments, and capital markets.",
  },
  {
    icon: "◆",
    title: "Strict Confidentiality",
    body: "Your strategy, financials, and negotiations remain fully protected at every stage.",
  },
];

const SERVICES = [
  {
    num: "01",
    title: "Investment Readiness",
    body: "A structured evaluation of your business against the criteria institutional investors apply — with a clear path to closing the gaps.",
  },
  {
    num: "02",
    title: "Financial Modelling",
    body: "Investor-grade financial analysis built to the rigour that development finance institutions and private equity funds demand.",
  },
  {
    num: "03",
    title: "Regulatory Advisory",
    body: "Navigate licences, approvals, and compliance requirements across African jurisdictions before they become deal blockers.",
  },
  {
    num: "04",
    title: "Investor Access",
    body: "Targeted introductions to DFIs, private equity, and VC funds actively deploying capital in your sector and geography.",
  },
];

const APPROACH = [
  "African capital market expertise",
  "Institutional-grade preparation",
  "Confidential and discreet advisory",
  "Outcome-focused engagement",
];

const STATS = [
  { value: "54",    label: "African markets in scope" },
  { value: "$68B+", label: "Annual infrastructure financing gap" },
  { value: "4",     label: "Core advisory services" },
  { value: "100%",  label: "Client confidentiality" },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{
        minHeight: "calc(100vh - 68px)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        backgroundImage: `
          linear-gradient(90deg,
            rgba(3,26,53,0.98) 0%,
            rgba(3,26,53,0.92) 35%,
            rgba(3,26,53,0.60) 58%,
            rgba(3,26,53,0.15) 100%
          ),
          url('/image-1.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(3,26,53,0.10), rgba(3,26,53,0.42))",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, width: "min(92%, 1280px)", margin: "0 auto", padding: "80px 0" }}>
          <div style={{ maxWidth: 650 }}>
            <p style={{
              color: "var(--accent)", fontSize: 13, fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20,
            }}>
              Blue Nile Innovation Group
            </p>

            <h1 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(44px, 6vw, 80px)",
              lineHeight: 1.05, fontWeight: 500, marginBottom: 28,
            }}>
              Investment readiness<br />
              <span style={{ color: "var(--accent)" }}>for Africa&apos;s most ambitious businesses.</span>
            </h1>

            <p style={{ color: "#d7dde5", fontSize: 18, maxWidth: 540, marginBottom: 38, lineHeight: 1.75 }}>
              We prepare high-growth African companies to raise institutional capital — from documentation
              and due diligence to regulatory clearance and investor introductions.
            </p>

            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center",
              background: "var(--accent)", color: "var(--navy)",
              padding: "16px 30px", fontWeight: 700, fontSize: 14,
              border: "1px solid var(--accent)",
              transition: "all 0.25s",
            }}>
              Start the conversation
            </Link>
          </div>
        </div>
      </section>


      {/* ─── FEATURE STRIP ─── */}
      <section style={{
        background: "var(--navy)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ width: "min(92%, 1280px)", margin: "0 auto" }}>
          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {FEATURES.map((f, i) => (
              <div key={f.title} style={{
                padding: "55px 35px", textAlign: "center",
                borderRight: i < FEATURES.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}>
                <div style={{ fontSize: 34, color: "var(--accent)", marginBottom: 22 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: 21, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, maxWidth: 220, margin: "auto", lineHeight: 1.65 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── ABOUT ─── */}
      <section style={{ background: "var(--navy-dark)", padding: "100px 0" }} id="about">
        <div style={{ width: "min(92%, 1280px)", margin: "0 auto" }}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

            {/* Image with gold offset border */}
            <div style={{ position: "relative", marginRight: 18 }}>
              <div style={{
                position: "absolute",
                top: 18, right: -18, bottom: -18, left: 18,
                border: "1px solid var(--accent)", zIndex: 0,
              }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image-1.jpg"
                alt="Blue Nile Innovation Group"
                style={{ width: "100%", height: 500, objectFit: "cover", position: "relative", zIndex: 1 }}
              />
            </div>

            {/* Text */}
            <div style={{ paddingLeft: 20 }}>
              <p style={{ color: "var(--accent)", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 18 }}>
                About Us
              </p>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 500, lineHeight: 1.1, marginBottom: 25 }}>
                A specialist firm built for African capital markets.
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.85, marginBottom: 20 }}>
                Blue Nile Innovation Group is an African-focused investment readiness advisory firm. We work
                with founders, management teams, and business owners who are serious about raising institutional
                capital — and who understand that preparation determines outcomes.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.85, marginBottom: 36 }}>
                We bring the rigour and standards that development finance institutions, private equity,
                and institutional investors expect — tailored to the realities of African markets.
              </p>
              <Link href="/services" style={{
                display: "inline-flex", alignItems: "center",
                background: "var(--accent)", color: "var(--navy)",
                padding: "14px 28px", fontWeight: 700, fontSize: 14,
                border: "1px solid var(--accent)",
              }}>
                Our services
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ─── SERVICES ─── */}
      <section style={{ background: "var(--navy)", padding: "100px 0" }} id="services">
        <div style={{ width: "min(92%, 1280px)", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ color: "var(--accent)", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 18 }}>
              Our Services
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 500, lineHeight: 1.1, marginBottom: 25 }}>
              Capital readiness, end to end.
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 17, maxWidth: 600, margin: "auto", lineHeight: 1.7 }}>
              From first assessment to final investor introduction, we cover every stage of the journey to institutional capital.
            </p>
          </div>

          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {SERVICES.map(s => (
              <article key={s.num} style={{
                border: "1px solid rgba(255,255,255,0.10)",
                padding: "45px 35px",
                background: "rgba(255,255,255,0.02)",
                transition: "border-color 0.3s, transform 0.3s",
              }}>
                <div style={{ color: "var(--accent)", fontFamily: "var(--serif)", fontSize: 28, marginBottom: 28 }}>{s.num}</div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: 26, marginBottom: 16 }}>{s.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.75 }}>{s.body}</p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* ─── APPROACH (light section with image) ─── */}
      <section id="approach">
        <div className="approach-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 580 }}>

          {/* Full-bleed image column */}
          <div style={{
            backgroundImage: "url('/image-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 480,
          }} />

          {/* Content column */}
          <div style={{
            background: "var(--off-white)",
            display: "flex", alignItems: "center",
            padding: "80px 70px",
          }}>
            <div>
              <p style={{ color: "#b8832a", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 18 }}>
                Our Approach
              </p>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 500, lineHeight: 1.1, marginBottom: 25, color: "var(--navy)" }}>
                Discipline over noise.
              </h2>
              <p style={{ color: "#52606f", fontSize: 16, maxWidth: 440, lineHeight: 1.8 }}>
                We focus on what actually moves the needle for investors — not optics, not storytelling.
                Rigour, substance, and a deep understanding of the African capital landscape.
              </p>
              <ul style={{ listStyle: "none", marginTop: 35 }}>
                {APPROACH.map(item => (
                  <li key={item} style={{
                    padding: "16px 0", borderBottom: "1px solid #d8dce0",
                    fontWeight: 600, color: "var(--navy)",
                  }}>
                    <span style={{ color: "var(--accent)", marginRight: 14, fontWeight: 400 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ─── STATS ─── */}
      <section style={{
        background: "var(--navy)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ width: "min(92%, 1280px)", margin: "0 auto" }}>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                textAlign: "center", padding: "60px 25px",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}>
                <div style={{ color: "var(--accent)", fontFamily: "var(--serif)", fontSize: 48, lineHeight: 1, marginBottom: 15 }}>
                  {s.value}
                </div>
                <div style={{ color: "var(--text-secondary)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── CTA ─── */}
      <section style={{
        minHeight: 520,
        backgroundImage: `
          linear-gradient(rgba(3,26,53,0.82), rgba(3,26,53,0.82)),
          url('/image-3.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}>
        <div style={{ width: "min(92%, 750px)", margin: "0 auto", padding: "80px 0" }}>
          <p style={{ color: "var(--accent)", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
            Let&apos;s Talk
          </p>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 500, lineHeight: 1.1, marginBottom: 25 }}>
            Ready to pursue institutional capital?
          </h2>
          <p style={{ color: "#d1d8e0", fontSize: 18, lineHeight: 1.75, margin: "0 auto 36px", maxWidth: 600 }}>
            Tell us about your business and where you&apos;re trying to get to. We&apos;ll be direct about whether and how we can help.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center",
            background: "var(--accent)", color: "var(--navy)",
            padding: "16px 30px", fontWeight: 700, fontSize: 14,
            border: "1px solid var(--accent)",
          }}>
            Start the conversation
          </Link>
        </div>
      </section>


      <style>{`
        @media (max-width: 1000px) {
          .features-grid  { grid-template-columns: repeat(2, 1fr) !important; }
          .about-grid     { grid-template-columns: 1fr !important; gap: 48px !important; }
          .approach-grid  { grid-template-columns: 1fr !important; }
          .services-grid  { grid-template-columns: 1fr !important; }
          .stats-grid     { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 650px) {
          .features-grid  { grid-template-columns: 1fr !important; }
          .stats-grid     { grid-template-columns: 1fr !important; }
        }
        article:hover {
          border-color: var(--accent) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </>
  );
}
