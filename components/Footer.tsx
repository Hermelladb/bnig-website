import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-section)", borderTop: "1px solid var(--border)", padding: "48px 24px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>

          <div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>BLUE NILE</div>
              <div style={{ fontSize: 10, fontWeight: 500, color: "var(--accent-light)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Innovation Group</div>
            </div>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 280 }}>
              Investment readiness advisory for Africa's most ambitious businesses. We prepare companies to raise capital — from first model to final close.
            </p>
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Navigate</p>
            {[["Home", "/"], ["Services", "/services"], ["Contact", "/contact"]].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", fontSize: 13, color: "var(--text-secondary)", marginBottom: 10 }}>{l}</Link>
            ))}
          </div>

          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Get in touch</p>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 8 }}>hello@bluenileinnovation.com</p>
            <Link href="/contact" style={{
              display: "inline-block", marginTop: 8, fontSize: 12, fontWeight: 600,
              background: "var(--accent)", color: "#fff", padding: "8px 16px", borderRadius: 6,
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
