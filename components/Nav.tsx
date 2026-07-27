"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact",  href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(11, 15, 26, 0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>BLUE NILE</span>
          <span style={{ fontSize: 10, fontWeight: 500, color: "var(--accent-light)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Innovation Group</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: 13, fontWeight: 500,
              color: pathname === l.href ? "var(--text-primary)" : "var(--text-secondary)",
              transition: "color 0.15s",
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" style={{
            fontSize: 13, fontWeight: 600,
            background: "var(--accent)", color: "#fff",
            padding: "8px 18px", borderRadius: 6,
            transition: "background 0.15s",
          }}>
            Work with us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }} className="mobile-menu-btn" aria-label="Menu">
          <div style={{ width: 22, height: 2, background: "var(--text-secondary)", marginBottom: 5, transition: "all 0.2s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <div style={{ width: 22, height: 2, background: "var(--text-secondary)", marginBottom: 5, opacity: open ? 0 : 1 }} />
          <div style={{ width: 22, height: 2, background: "var(--text-secondary)", transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "16px 24px 20px" }} className="mobile-nav">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "10px 0", fontSize: 15, color: "var(--text-secondary)", borderBottom: "1px solid var(--border)" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}
            style={{ display: "inline-block", marginTop: 16, fontSize: 13, fontWeight: 600, background: "var(--accent)", color: "#fff", padding: "10px 20px", borderRadius: 6 }}>
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
