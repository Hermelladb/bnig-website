"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact",  href: "/contact" },
];

function DiamondLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,2 30,16 16,30 2,16" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
      <polygon points="16,8 24,16 16,24 8,16" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.5"/>
      <circle cx="16" cy="16" r="2" fill="#c9a84c"/>
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(12, 26, 46, 0.95)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <DiamondLogo />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Blue Nile</span>
            <span style={{ fontSize: 9, fontWeight: 500, color: "var(--accent-light)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Innovation Group</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="desktop-nav">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: 13, fontWeight: 500, letterSpacing: "0.02em",
              color: pathname === l.href ? "var(--accent-light)" : "var(--text-secondary)",
              transition: "color 0.15s",
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" style={{
            fontSize: 13, fontWeight: 600, letterSpacing: "0.04em",
            color: "var(--accent)",
            padding: "8px 20px", borderRadius: 4,
            border: "1px solid var(--accent)",
            transition: "all 0.15s",
          }}
          onMouseEnter={e => { (e.target as HTMLElement).style.background = "var(--accent)"; (e.target as HTMLElement).style.color = "#0c1a2e"; }}
          onMouseLeave={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "var(--accent)"; }}>
            Work with us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }} className="mobile-menu-btn" aria-label="Menu">
          <div style={{ width: 22, height: 1.5, background: "var(--accent)", marginBottom: 6, transition: "all 0.2s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <div style={{ width: 22, height: 1.5, background: "var(--accent)", marginBottom: 6, opacity: open ? 0 : 1 }} />
          <div style={{ width: 22, height: 1.5, background: "var(--accent)", transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "16px 24px 24px" }} className="mobile-nav">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "12px 0", fontSize: 15, color: "var(--text-secondary)", borderBottom: "1px solid var(--border)" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}
            style={{ display: "inline-block", marginTop: 20, fontSize: 13, fontWeight: 600, color: "var(--accent)", padding: "10px 24px", borderRadius: 4, border: "1px solid var(--accent)" }}>
            Work with us
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
