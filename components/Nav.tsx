"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "About",    href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact",  href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(3, 26, 53, 0.96)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ width: "min(92%, 1280px)", margin: "0 auto", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bnig-logo-light.svg" alt="Blue Nile Innovation Group" style={{ height: 42, width: "auto" }} />
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="desktop-nav">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: 14, fontWeight: 500,
              color: pathname === l.href ? "var(--accent)" : "var(--text-secondary)",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = pathname === l.href ? "var(--accent)" : "var(--text-secondary)")}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" style={{
            fontSize: 13, fontWeight: 600,
            color: "var(--accent)",
            padding: "10px 22px",
            border: "1px solid var(--accent)",
            transition: "all 0.25s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--navy)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}>
            Work with us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="mobile-menu-btn"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }}
          aria-label="Menu">
          <div style={{ width: 22, height: 1.5, background: "var(--accent)", marginBottom: 6, transition: "all 0.2s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <div style={{ width: 22, height: 1.5, background: "var(--accent)", marginBottom: 6, opacity: open ? 0 : 1 }} />
          <div style={{ width: 22, height: 1.5, background: "var(--accent)", transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: "var(--navy-light)", borderTop: "1px solid var(--border)", padding: "16px 24px 24px" }}>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "13px 0", fontSize: 15, color: "var(--text-secondary)", borderBottom: "1px solid var(--border)" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{
            display: "inline-block", marginTop: 20,
            fontSize: 13, fontWeight: 600, color: "var(--accent)",
            padding: "10px 24px", border: "1px solid var(--accent)",
          }}>
            Work with us
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .desktop-nav     { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
