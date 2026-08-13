"use client";

import { useState } from "react";

const SECTORS = ["Energy", "Fintech", "Agriculture", "Infrastructure", "Healthcare", "Real Estate", "Technology", "Other"];
const STAGES  = ["Pre-revenue", "Revenue-generating", "Profitable", "Scaling"];
const RAISES  = ["Under $1M", "$1M – $5M", "$5M – $20M", "$20M – $50M", "$50M+"];

type FormState = { name: string; company: string; email: string; sector: string; stage: string; raise: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", company: "", email: "", sector: "", stage: "", raise: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function set(field: keyof FormState, value: string) { setForm(f => ({ ...f, [field]: value })); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xvzelpaz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px", fontSize: 14,
    background: "var(--bg-card)", color: "var(--text-primary)",
    border: "1px solid var(--border)", borderRadius: 8, outline: "none",
    transition: "border-color 0.15s",
  };
  const labelStyle: React.CSSProperties = { display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6, letterSpacing: "0.02em" };

  return (
    <>
      <section style={{ background: "var(--bg-primary)", padding: "80px 24px", minHeight: "calc(100vh - 64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>

          {/* Left: info */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: 16 }}>Contact</p>
            <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--text-primary)", marginBottom: 20 }}>
              Start the conversation
            </h1>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 40 }}>
              Tell us about your business and what you&apos;re trying to achieve. We respond to every enquiry within two business days.
            </p>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32, display: "flex", flexDirection: "column", gap: 24 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>Email</p>
                <a href="mailto:hello@bluenileinnovation.com" style={{ fontSize: 14, color: "var(--accent-light)" }}>hello@bluenileinnovation.com</a>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>Response time</p>
                <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>Within 2 business days</p>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>Geography</p>
                <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>East Africa · West Africa · Horn of Africa</p>
              </div>

              {/* Apply CTA */}
              <div style={{ marginTop: 8, background: "var(--bg-section)", border: "1px solid var(--border)", borderRadius: 10, padding: "22px 20px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: 8 }}>Raise Capital</p>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 14 }}>
                  Ready to start your investor readiness process? Submit a business assessment and we&apos;ll provide a clear view of what you need.
                </p>
                <a href="/apply" style={{
                  display: "inline-block", fontSize: 13, fontWeight: 700,
                  background: "var(--accent)", color: "var(--navy)",
                  padding: "10px 20px", letterSpacing: "0.03em",
                }}>
                  Start business assessment →
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div style={{ background: "var(--bg-section)", borderRadius: 16, border: "1px solid var(--border)", padding: "36px 32px" }}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", marginBottom: 10 }}>Message received</h2>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>We&apos;ll be in touch within two business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Your name *</label>
                    <input required style={inputStyle} value={form.name} onChange={e => set("name", e.target.value)} placeholder="Jane Mwangi" />
                  </div>
                  <div>
                    <label style={labelStyle}>Company *</label>
                    <input required style={inputStyle} value={form.company} onChange={e => set("company", e.target.value)} placeholder="Sunrise Power Ltd" />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email *</label>
                  <input required type="email" style={inputStyle} value={form.email} onChange={e => set("email", e.target.value)} placeholder="jane@company.com" />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Sector</label>
                    <select style={{ ...inputStyle, appearance: "none" }} value={form.sector} onChange={e => set("sector", e.target.value)}>
                      <option value="">Select…</option>
                      {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Business stage</label>
                    <select style={{ ...inputStyle, appearance: "none" }} value={form.stage} onChange={e => set("stage", e.target.value)}>
                      <option value="">Select…</option>
                      {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Target raise size</label>
                  <select style={{ ...inputStyle, appearance: "none" }} value={form.raise} onChange={e => set("raise", e.target.value)}>
                    <option value="">Select…</option>
                    {RAISES.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Tell us about your business *</label>
                  <textarea required rows={5} style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                    value={form.message} onChange={e => set("message", e.target.value)}
                    placeholder="What does your company do, what stage are you at, and what are you trying to achieve with this raise?" />
                </div>

                {status === "error" && (
                  <p style={{ fontSize: 13, color: "#f87171" }}>Something went wrong. Email us directly at hello@bluenileinnovation.com</p>
                )}

                <button type="submit" disabled={status === "sending"} style={{
                  fontSize: 14, fontWeight: 700, background: "var(--accent)", color: "#fff",
                  padding: "14px 24px", borderRadius: 8, border: "none", cursor: "pointer",
                  opacity: status === "sending" ? 0.7 : 1, transition: "opacity 0.15s",
                }}>
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>

                <p style={{ fontSize: 11, color: "var(--text-muted)", textAlign: "center" }}>
                  We treat every enquiry with strict confidentiality.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        input:focus, select:focus, textarea:focus { border-color: var(--accent) !important; }
        @media (max-width: 768px) {
          section > div { grid-template-columns: 1fr !important; }
          form > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
