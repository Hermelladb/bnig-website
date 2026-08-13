"use client";

import Link from "next/link";

function DiamondMark() {
  return (
    <div style={{
      width: 40, height: 40,
      border: "1px solid var(--accent)",
      transform: "rotate(45deg)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <span style={{ transform: "rotate(-45deg)", color: "var(--accent)", fontFamily: "var(--serif)", fontSize: 16, lineHeight: 1 }}>◆</span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#011022", padding: "70px 0 30px" }}>
      <div style={{ width: "min(92%, 1280px)", margin: "0 auto" }}>

        {/* Top grid */}
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 56, borderBottom: "1px solid rgba(255,255,255,0.10)" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <DiamondMark />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 600, color: "var(--text-primary)" }}>Blue Nile</span>
                <span style={{ fontSize: 10, fontWeight: 500, color: "var(--accent)", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 2 }}>Innovation Group</span>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 320 }}>
              Investment readiness advisory for Africa&apos;s most ambitious businesses. We prepare
              companies to raise institutional capital — from first model to final close.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "var(--accent)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: 20 }}>Company</h4>
            <ul style={{ listStyle: "none" }}>
              {[["About", "/#about"], ["Services", "/#services"], ["Contact", "/contact"]].map(([l, h]) => (
                <li key={h} style={{ marginBottom: 12 }}>
                  <Link href={h} style={{ fontSize: 14, color: "var(--text-secondary)", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "var(--accent)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: 20 }}>Services</h4>
            <ul style={{ listStyle: "none" }}>
              {["Investment Readiness", "Financial Modelling", "Regulatory Advisory", "Investor Access"].map(s => (
                <li key={s} style={{ marginBottom: 12 }}>
                  <Link href="/services" style={{ fontSize: 14, color: "var(--text-secondary)", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "var(--accent)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: 20 }}>Get in Touch</h4>
            <ul style={{ listStyle: "none" }}>
              <li style={{ marginBottom: 12 }}>
                <a href="mailto:hello@bluenileinnovation.com" style={{ fontSize: 14, color: "var(--text-secondary)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
                  hello@bluenileinnovation.com
                </a>
              </li>
              <li style={{ marginBottom: 20, fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                North · West · Central · East · Horn · Southern Africa
              </li>
              <li>
                <Link href="/contact" style={{
                  display: "inline-block", fontSize: 12, fontWeight: 700,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  color: "var(--accent)", padding: "9px 18px",
                  border: "1px solid var(--accent)", transition: "all 0.25s",
                }}>
                  Start a conversation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: 26, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "#6f7b89" }}>© {new Date().getFullYear()} Blue Nile Innovation Group. All rights reserved.</p>
          <p style={{ fontSize: 12, color: "#6f7b89" }}>Privacy Policy &nbsp;|&nbsp; bluenileinnovation.com</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
