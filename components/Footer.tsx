import Link from "next/link";

function DiamondLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,2 30,16 16,30 2,16" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
      <polygon points="16,8 24,16 16,24 8,16" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.5"/>
      <circle cx="16" cy="16" r="2" fill="#c9a84c"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-section)", borderTop: "1px solid var(--border)", padding: "56px 24px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <DiamondLogo />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Blue Nile</span>
                <span style={{ fontSize: 9, fontWeight: 500, color: "var(--accent-light)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Innovation Group</span>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 280 }}>
              Investment readiness advisory for Africa&apos;s most ambitious businesses. We prepare companies to raise capital — from first model to final close.
            </p>
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Navigate</p>
            {[["Home", "/"], ["Services", "/services"], ["Contact", "/contact"]].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", fontSize: 13, color: "var(--text-secondary)", marginBottom: 12 }}>{l}</Link>
            ))}
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Get in touch</p>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 10 }}>hello@bluenileinnovation.com</p>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 20 }}>East · West · Horn of Africa</p>
            <Link href="/contact" style={{
              display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
              color: "var(--accent)", padding: "9px 18px", borderRadius: 4, border: "1px solid var(--accent)",
            }}>
              Start a conversation
            </Link>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>© {new Date().getFullYear()} Blue Nile Innovation Group. All rights reserved.</p>
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>bluenileinnovation.com</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
