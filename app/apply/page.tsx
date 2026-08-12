"use client";

import { useState, createContext, useContext } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const STEPS = [
  "Contact Details",
  "Business Overview",
  "Capital Raise",
  "Financial Performance",
  "Financial Projections",
  "Governance",
  "Regulatory",
  "Management Team",
  "Market Position",
];

const SECTORS   = ["Agriculture","Energy","Fintech","Healthcare","Infrastructure","Logistics","Manufacturing","Real Estate","Technology","Telecoms","Other"];
const COUNTRIES = ["Angola","Botswana","Cameroon","Côte d'Ivoire","DRC","Egypt","Ethiopia","Ghana","Kenya","Libya","Mali","Morocco","Mozambique","Namibia","Nigeria","Rwanda","Senegal","Somalia","South Africa","Sudan","Tanzania","Tunisia","Uganda","Zambia","Zimbabwe","Other"];
const CURRENCIES = ["USD","EUR","GBP","KES","NGN","ZAR","GHS","UGX","TZS","ETB"];
const TIMELINES  = ["Less than 6 months","6–12 months","12–24 months","More than 24 months"];
const REPORTING  = ["Monthly","Quarterly","Annually","Ad hoc / No formal reporting"];
const HOW_HEARD  = ["Referral from colleague","LinkedIn","Google","Conference / Event","Industry publication","Other"];

type F = Record<string, string>;

/* ── module-level styles (static — defined once, not per render) ── */
const inp: React.CSSProperties = { width:"100%", padding:"10px 13px", fontSize:14, border:"1px solid #d0d5dd", borderRadius:6, outline:"none", color:"#1a1a1a", background:"#fff", transition:"border-color 0.15s", fontFamily:"inherit" };
const lbl: React.CSSProperties = { display:"block", fontSize:12, fontWeight:600, color:"#52606f", marginBottom:5, letterSpacing:"0.01em" };
const hint: React.CSSProperties = { fontSize:11, color:"#aeb9c7", marginTop:3 };
const g2: React.CSSProperties  = { display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 };

/* ── form context (avoids re-defining components inside render) ── */
const FormCtx = createContext<{ form: F; set: (k: string, v: string) => void }>({ form: {}, set: () => {} });

function Inp({ k, label, ph, type="text", req, h }: { k:string; label:string; ph?:string; type?:string; req?:boolean; h?:string }) {
  const { form, set } = useContext(FormCtx);
  return (
    <div>
      <label style={lbl}>{label}{req && " *"}</label>
      <input type={type} required={req} value={form[k]||""} placeholder={ph} onChange={e => set(k, e.target.value)} style={inp} />
      {h && <p style={hint}>{h}</p>}
    </div>
  );
}
function Sel({ k, label, opts, h }: { k:string; label:string; opts:string[]; h?:string }) {
  const { form, set } = useContext(FormCtx);
  return (
    <div>
      <label style={lbl}>{label}</label>
      <select value={form[k]||""} onChange={e => set(k, e.target.value)} style={{ ...inp, appearance:"none" }}>
        <option value="">Select…</option>
        {opts.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      {h && <p style={hint}>{h}</p>}
    </div>
  );
}
function Txt({ k, label, ph, rows=3, req, h }: { k:string; label:string; ph?:string; rows?:number; req?:boolean; h?:string }) {
  const { form, set } = useContext(FormCtx);
  return (
    <div>
      <label style={lbl}>{label}{req && " *"}</label>
      <textarea required={req} rows={rows} value={form[k]||""} placeholder={ph} onChange={e => set(k, e.target.value)} style={{ ...inp, resize:"none", lineHeight:1.6 }} />
      {h && <p style={hint}>{h}</p>}
    </div>
  );
}
function Num({ k, label, ph, prefix, h }: { k:string; label:string; ph?:string; prefix?:string; h?:string }) {
  const { form, set } = useContext(FormCtx);
  return (
    <div>
      <label style={lbl}>{label}</label>
      <div style={{ display:"flex" }}>
        {prefix && <span style={{ padding:"10px 11px", background:"#f5f5f5", border:"1px solid #d0d5dd", borderRight:"none", borderRadius:"6px 0 0 6px", fontSize:13, color:"#52606f", whiteSpace:"nowrap" }}>{prefix}</span>}
        <input type="number" value={form[k]||""} placeholder={ph} onChange={e => set(k, e.target.value)}
          style={{ ...inp, borderRadius: prefix ? "0 6px 6px 0" : 6 }} />
      </div>
      {h && <p style={hint}>{h}</p>}
    </div>
  );
}
function Radio({ k, opts }: { k:string; opts:string[] }) {
  const { form, set } = useContext(FormCtx);
  return (
    <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
      {opts.map(v => (
        <label key={v} style={{ display:"flex", alignItems:"center", gap:8, padding:"9px 14px", border:`1px solid ${form[k]===v?"#d9a441":"#d0d5dd"}`, borderRadius:6, cursor:"pointer", fontSize:14, color:"#1a1a1a", background: form[k]===v ? "rgba(217,164,65,0.08)" : "#fff", transition:"all 0.15s" }}>
          <input type="radio" name={k} value={v} checked={form[k]===v} onChange={() => set(k,v)} style={{ accentColor:"#d9a441" }} />
          {v}
        </label>
      ))}
    </div>
  );
}

const INIT: F = {
  company_name:"",sector:"",country:"",year_founded:"",legal_structure:"",stage:"",description:"",founder_gender:"",employees_fulltime:"",employees_parttime:"",pitch_deck_url:"",
  capital_amount:"",capital_currency:"USD",capital_type:"",use_of_funds:"",timeline:"",previously_raised:"",previous_raise_details:"",
  revenue_y1:"",revenue_y2:"",revenue_y3:"",gross_margin_pct:"",fixed_opex_annual:"",current_debt:"",debt_interest_rate:"",cash_on_hand:"",has_audited_accounts:"",audited_years:"",
  growth_y1:"",growth_y2:"",growth_y3:"",growth_y4:"",growth_y5:"",annual_capex:"",tax_rate:"",receivables_days:"",payables_days:"",inventory_days:"",
  has_board:"",board_size:"",has_independent_directors:"",has_shareholders_agreement:"",has_external_audit:"",auditor_name:"",management_reporting_frequency:"",
  registration_country:"",registration_number:"",sector_licenses:"",compliance_issues:"",compliance_details:"",multi_country:"",countries_operating:"",
  ceo_name:"",ceo_background:"",has_cfo:"",cfo_name:"",cfo_background:"",other_key_executives:"",key_person_risk:"",
  target_market:"",market_size_estimate:"",main_competitors:"",competitive_advantage:"",current_customers:"",revenue_model:"",
  contact_name:"",contact_role:"",contact_email:"",contact_phone:"",best_time:"",how_did_you_hear:"",
};

export default function Apply() {
  const [step, setStep]         = useState(0);
  const [form, setForm]         = useState<F>(INIT);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [error, setError]           = useState("");
  const [pitchDeckFile, setPitchDeckFile] = useState<File | null>(null);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  /* ── step panels ── */
  const steps = [

    /* 1 — Contact Details */
    <div key={1} style={{ display:"flex", flexDirection:"column", gap:18 }}>
      <div style={g2}>
        <Inp k="contact_name" label="Your full name" ph="Jane Mwangi" req />
        <Inp k="contact_role" label="Your title / role" ph="CEO & Founder" req />
      </div>
      <div style={g2}>
        <Inp k="contact_email" label="Email address" ph="jane@sunriseenergy.co.ke" type="email" req />
        <Inp k="contact_phone" label="Phone number" ph="+254 700 000 000" />
      </div>
      <Inp k="best_time" label="Best time / timezone to reach you" ph="Mornings EAT (GMT+3)" />
      <Sel k="how_did_you_hear" label="How did you hear about Blue Nile Innovation Group?" opts={HOW_HEARD} />
      <div style={{ padding:"16px 18px", background:"rgba(217,164,65,0.07)", border:"1px solid rgba(217,164,65,0.25)", borderRadius:8 }}>
        <p style={{ fontSize:13, color:"#52606f", lineHeight:1.75, margin:0 }}>
          <strong style={{ color:"#1a1a1a" }}>Confidentiality:</strong> All information submitted through this form is treated with strict confidentiality. It is used solely to assess your business and prepare our recommendations. It is never shared with third parties without your explicit consent.
        </p>
      </div>
    </div>,

    /* 2 — Business Overview */
    <div key={1} style={{ display:"flex", flexDirection:"column", gap:18 }}>
      <Inp k="company_name" label="Company name" ph="Sunrise Energy Ltd" req />
      <div style={g2}>
        <Sel k="sector" label="Sector" opts={SECTORS} />
        <Sel k="country" label="Country of primary operations" opts={COUNTRIES} />
      </div>
      <div style={g2}>
        <Inp k="year_founded" label="Year founded" ph="2019" type="number" />
        <Sel k="legal_structure" label="Legal structure" opts={["Limited Company","Partnership","Sole Trader","NGO / Non-profit","Joint Venture","Other"]} />
      </div>
      <Sel k="stage" label="Business stage" opts={["Early-stage / Startup","Growth","Expansion / Scale-up","Pre-IPO","Established"]} />
      <Txt k="description" label="Explain your startup" ph="Elevator pitch" rows={4} req />
      <div>
        <label style={lbl}>Gender of founder / CEO</label>
        <Radio k="founder_gender" opts={["Male","Female","Non-binary","Prefer not to say"]} />
      </div>
      <div style={g2}>
        <Num k="employees_fulltime" label="# of Full-time employees" ph="12" h="Permanent, full-time staff on payroll" />
        <Num k="employees_parttime" label="# of Part-time / contract employees" ph="5" h="Part-time, casual, or contract workers" />
      </div>
      <div>
        <label style={lbl}>Pitch deck <span style={{ fontWeight: 400, color: "#aeb9c7" }}>(optional)</span></label>
        <label style={{
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 8, padding: "22px 16px", cursor: "pointer",
          border: "1.5px dashed #d0d5dd", borderRadius: 6, background: "#fafafa",
          transition: "border-color 0.15s",
        }}>
          <input type="file" accept=".pdf,.ppt,.pptx" style={{ display: "none" }}
            onChange={e => setPitchDeckFile(e.target.files?.[0] || null)} />
          <span style={{ fontSize: 22, color: "#aeb9c7" }}>↑</span>
          {pitchDeckFile
            ? <span style={{ fontSize: 13, color: "#1a1a1a", fontWeight: 600 }}>{pitchDeckFile.name}</span>
            : <>
                <span style={{ fontSize: 13, color: "#52606f" }}>Drop your deck here, or <span style={{ color: "#d9a441" }}>browse</span></span>
                <span style={{ fontSize: 11, color: "#aeb9c7" }}>PDF or PowerPoint · max 20 MB</span>
              </>
          }
        </label>
        <p style={hint}>Uploaded files are stored securely and treated with strict confidentiality.</p>
      </div>
    </div>,

    /* 2 — Capital Raise */
    <div key={2} style={{ display:"flex", flexDirection:"column", gap:18 }}>
      <div>
        <label style={lbl}>Amount seeking to raise *</label>
        <div style={{ display:"flex", gap:10 }}>
          <select value={form.capital_currency} onChange={e => set("capital_currency",e.target.value)} style={{ ...inp, width:100, flexShrink:0, appearance:"none" }}>
            {CURRENCIES.map(c => <option key={c}>{c}</option>)}
          </select>
          <input type="number" required value={form.capital_amount} placeholder="5 000 000" onChange={e => set("capital_amount",e.target.value)} style={inp} />
        </div>
      </div>
      <div>
        <label style={lbl}>Type of capital</label>
        <Radio k="capital_type" opts={["Equity","Debt","Blended Finance (Equity + Debt)"]} />
      </div>
      <Txt k="use_of_funds" label="Use of funds" ph="Describe what the capital will fund — expansion, equipment, working capital, acquisition, etc." rows={3} req />
      <Sel k="timeline" label="Target timeline to close" opts={TIMELINES} />
      <div>
        <label style={lbl}>Have you raised capital before?</label>
        <Radio k="previously_raised" opts={["Yes","No"]} />
      </div>
      {form.previously_raised === "Yes" && (
        <Txt k="previous_raise_details" label="Previous raise details" ph="How much, from whom, and when?" rows={2} />
      )}
    </div>,

    /* 3 — Financial Performance */
    <div key={3} style={{ display:"flex", flexDirection:"column", gap:18 }}>
      <p style={{ fontSize:13, color:"#8a9ab5", margin:0 }}>Figures in {form.capital_currency||"USD"}. Approximate figures are fine — we will verify with you.</p>
      <Num k="revenue_y1" label="Revenue — most recent completed year" ph="2 400 000" />
      <div style={g2}>
        <Num k="revenue_y2" label="Revenue — year before" />
        <Num k="revenue_y3" label="Revenue — two years ago" />
      </div>
      <div style={g2}>
        <Num k="gross_margin_pct" label="Gross profit margin" prefix="%" ph="45" h="Revenue minus cost of goods/services, as % of revenue" />
        <Num k="fixed_opex_annual" label="Annual fixed operating costs" ph="800 000" h="Salaries, rent, admin — costs not tied to revenue volume" />
      </div>
      <div style={g2}>
        <Num k="current_debt" label="Existing debt outstanding" ph="0" />
        <Num k="debt_interest_rate" label="Interest rate on existing debt" prefix="%" ph="12" />
      </div>
      <Num k="cash_on_hand" label="Current cash on hand" ph="350 000" />
      <div>
        <label style={lbl}>Do you have audited financial statements?</label>
        <Radio k="has_audited_accounts" opts={["Yes","No"]} />
      </div>
      {form.has_audited_accounts === "Yes" && (
        <Inp k="audited_years" label="How many years of audited accounts?" ph="3" type="number" />
      )}
    </div>,

    /* 4 — Financial Projections */
    <div key={4} style={{ display:"flex", flexDirection:"column", gap:18 }}>
      <p style={{ fontSize:13, color:"#8a9ab5", margin:0 }}>Your best estimates over a 5-year horizon. We will review and refine these with you — precision is less important than direction.</p>
      <div>
        <label style={{ ...lbl, marginBottom:10 }}>Projected annual revenue growth rate (%)</label>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:12 }}>
          {[1,2,3,4,5].map(y => (
            <div key={y}>
              <label style={{ ...lbl, textAlign:"center" }}>Year {y}</label>
              <div style={{ display:"flex" }}>
                <input type="number" value={form[`growth_y${y}`]} placeholder="25" onChange={e => set(`growth_y${y}`,e.target.value)}
                  style={{ ...inp, borderRadius:"6px 0 0 6px", textAlign:"center" }} />
                <span style={{ padding:"10px 8px", background:"#f5f5f5", border:"1px solid #d0d5dd", borderLeft:"none", borderRadius:"0 6px 6px 0", fontSize:12, color:"#52606f" }}>%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={g2}>
        <Num k="annual_capex" label="Expected annual capital expenditure" ph="500 000" h="Equipment, property, infrastructure — leave 0 if none" />
        <Num k="tax_rate" label="Corporate tax rate" prefix="%" ph="30" h="In your primary operating jurisdiction" />
      </div>
      <div style={g2}>
        <Num k="receivables_days" label="Customer payment terms" ph="30" h="Average days between invoice and payment received" />
        <Num k="payables_days" label="Supplier payment terms" ph="30" h="Average days you take to pay suppliers" />
      </div>
      <Num k="inventory_days" label="Inventory holding period (days)" ph="0" h="Leave 0 if not applicable to your business" />
    </div>,

    /* 5 — Governance */
    <div key={5} style={{ display:"flex", flexDirection:"column", gap:18 }}>
      <div>
        <label style={lbl}>Do you have a formal board of directors?</label>
        <Radio k="has_board" opts={["Yes","Advisory board only","No"]} />
      </div>
      {form.has_board && form.has_board !== "No" && (
        <Inp k="board_size" label="Number of board / advisory members" ph="5" type="number" />
      )}
      <div>
        <label style={lbl}>Any independent (non-executive) directors?</label>
        <Radio k="has_independent_directors" opts={["Yes","No"]} />
      </div>
      <div>
        <label style={lbl}>Shareholders agreement in place?</label>
        <Radio k="has_shareholders_agreement" opts={["Yes","In progress","No"]} />
      </div>
      <div>
        <label style={lbl}>External audit completed?</label>
        <Radio k="has_external_audit" opts={["Yes","No"]} />
      </div>
      {form.has_external_audit === "Yes" && (
        <Inp k="auditor_name" label="Auditing firm" ph="e.g. KPMG Nairobi, Ernst & Young" />
      )}
      <Sel k="management_reporting_frequency" label="How often are management accounts prepared?" opts={REPORTING} />
    </div>,

    /* 6 — Regulatory */
    <div key={6} style={{ display:"flex", flexDirection:"column", gap:18 }}>
      <div style={g2}>
        <Inp k="registration_country" label="Country of company registration" ph="Kenya" />
        <Inp k="registration_number" label="Company registration number" ph="CPR/2019/123456" />
      </div>
      <Txt k="sector_licenses" label="Sector-specific licences held" ph="List any operating licences, regulatory approvals, or sector permits." rows={3} h="e.g. CBK licence, EPRA licence, NCA registration, NEMA permit" />
      <div>
        <label style={lbl}>Any regulatory investigations, penalties, or compliance issues in the last 3 years?</label>
        <Radio k="compliance_issues" opts={["Yes","No"]} />
      </div>
      {form.compliance_issues === "Yes" && (
        <Txt k="compliance_details" label="Brief description" ph="Describe the issue and current status." rows={3} />
      )}
      <div>
        <label style={lbl}>Do you operate across multiple countries?</label>
        <Radio k="multi_country" opts={["Yes","No"]} />
      </div>
      {form.multi_country === "Yes" && (
        <Txt k="countries_operating" label="Which countries?" ph="List all countries of active operations." rows={2} />
      )}
    </div>,

    /* 7 — Management Team */
    <div key={7} style={{ display:"flex", flexDirection:"column", gap:18 }}>
      <Inp k="ceo_name" label="CEO / Founder name" ph="Jane Mwangi" />
      <Txt k="ceo_background" label="CEO / Founder background and track record" ph="Professional background — sectors, previous roles, notable achievements, years of experience." rows={4} />
      <div>
        <label style={lbl}>Do you have a dedicated CFO or Finance lead?</label>
        <Radio k="has_cfo" opts={["Yes","No — founder handles finance"]} />
      </div>
      {form.has_cfo === "Yes" && <>
        <Inp k="cfo_name" label="CFO / Finance lead name" ph="David Osei" />
        <Txt k="cfo_background" label="CFO background" ph="Professional background." rows={3} />
      </>}
      <Txt k="other_key_executives" label="Other key executives" ph="Name, role, and brief background for other senior team members." rows={3} />
      <Txt k="key_person_risk" label="Key person dependencies" ph="Are there individuals whose departure would significantly affect the business? How is this managed?" rows={3} h="Investors will assess this — be direct." />
    </div>,

    /* 8 — Market Position */
    <div key={8} style={{ display:"flex", flexDirection:"column", gap:18 }}>
      <Txt k="target_market" label="Target market" ph="Who are your customers? Geography, size, sector, type." rows={3} req />
      <Inp k="market_size_estimate" label="Estimated total addressable market (TAM)" ph="e.g. USD 2.5 billion" h="Cite your source if you have one" />
      <Txt k="main_competitors" label="Main competitors" ph="Primary direct and indirect competitors." rows={3} />
      <Txt k="competitive_advantage" label="Competitive advantage" ph="What makes your business difficult to replicate? Why will customers choose you over alternatives?" rows={4} req />
      <Inp k="current_customers" label="Current number of paying customers / clients" ph="45" type="number" />
      <Txt k="revenue_model" label="Revenue model" ph="How do you generate revenue? e.g. subscription, transaction fee, long-term contracts, one-off sales." rows={3} />
    </div>,

  ];

  /* ── submit ── */
  async function handleSubmit() {
    if (!form.contact_name || !form.contact_email || !form.company_name) {
      setError("Please complete all required fields before submitting."); return;
    }
    setSubmitting(true); setError("");
    try {
      let pitchDeckUrl = "";
      if (pitchDeckFile) {
        const ext = pitchDeckFile.name.split(".").pop();
        const filename = `${Date.now()}-${form.company_name.replace(/\s+/g, "-").toLowerCase()}.${ext}`;
        const { data: uploadData, error: uploadErr } = await supabase.storage
          .from("pitch-decks")
          .upload(filename, pitchDeckFile, { contentType: pitchDeckFile.type });
        if (!uploadErr && uploadData) {
          pitchDeckUrl = supabase.storage.from("pitch-decks").getPublicUrl(uploadData.path).data.publicUrl;
        }
      }
      const { error: err } = await supabase.from("intake_submissions").insert({
        company_name: form.company_name, sector: form.sector||null, country: form.country||null,
        stage: form.stage||null, capital_amount: form.capital_amount ? parseFloat(form.capital_amount) : null,
        capital_currency: form.capital_currency, capital_type: form.capital_type||null,
        contact_name: form.contact_name, contact_email: form.contact_email,
        business_overview: { company_name:form.company_name, sector:form.sector, country:form.country, year_founded:form.year_founded, legal_structure:form.legal_structure, stage:form.stage, description:form.description, founder_gender:form.founder_gender, employees_fulltime:form.employees_fulltime, employees_parttime:form.employees_parttime, pitch_deck_url:pitchDeckUrl },
        capital_raise: { amount:form.capital_amount, currency:form.capital_currency, type:form.capital_type, use_of_funds:form.use_of_funds, timeline:form.timeline, previously_raised:form.previously_raised, previous_raise_details:form.previous_raise_details },
        financials: { revenue_y1:form.revenue_y1, revenue_y2:form.revenue_y2, revenue_y3:form.revenue_y3, gross_margin_pct:form.gross_margin_pct, fixed_opex_annual:form.fixed_opex_annual, current_debt:form.current_debt, debt_interest_rate:form.debt_interest_rate, cash_on_hand:form.cash_on_hand, has_audited_accounts:form.has_audited_accounts, audited_years:form.audited_years },
        projections: { growth_y1:form.growth_y1, growth_y2:form.growth_y2, growth_y3:form.growth_y3, growth_y4:form.growth_y4, growth_y5:form.growth_y5, annual_capex:form.annual_capex, tax_rate:form.tax_rate, receivables_days:form.receivables_days, payables_days:form.payables_days, inventory_days:form.inventory_days },
        governance: { has_board:form.has_board, board_size:form.board_size, has_independent_directors:form.has_independent_directors, has_shareholders_agreement:form.has_shareholders_agreement, has_external_audit:form.has_external_audit, auditor_name:form.auditor_name, management_reporting_frequency:form.management_reporting_frequency },
        regulatory: { registration_country:form.registration_country, registration_number:form.registration_number, sector_licenses:form.sector_licenses, compliance_issues:form.compliance_issues, compliance_details:form.compliance_details, multi_country:form.multi_country, countries_operating:form.countries_operating },
        management: { ceo_name:form.ceo_name, ceo_background:form.ceo_background, has_cfo:form.has_cfo, cfo_name:form.cfo_name, cfo_background:form.cfo_background, other_key_executives:form.other_key_executives, key_person_risk:form.key_person_risk },
        market: { target_market:form.target_market, market_size_estimate:form.market_size_estimate, main_competitors:form.main_competitors, competitive_advantage:form.competitive_advantage, current_customers:form.current_customers, revenue_model:form.revenue_model },
        contact: { name:form.contact_name, role:form.contact_role, email:form.contact_email, phone:form.contact_phone, best_time:form.best_time, how_did_you_hear:form.how_did_you_hear },
      });
      if (err) throw err;
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us at hello@bluenileinnovation.com");
    }
    setSubmitting(false);
  }

  /* ── success ── */
  if (submitted) return (
    <section style={{ minHeight:"calc(100vh - 68px)", background:"var(--navy)", display:"flex", alignItems:"center", justifyContent:"center", padding:"60px 24px" }}>
      <div style={{ maxWidth:520, textAlign:"center" }}>
        <div style={{ width:64, height:64, borderRadius:"50%", background:"rgba(217,164,65,0.12)", border:"1px solid var(--accent)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 28px", fontSize:28, color:"var(--accent)" }}>✓</div>
        <h1 style={{ fontFamily:"var(--serif)", fontSize:36, fontWeight:500, color:"var(--text-primary)", marginBottom:16 }}>Assessment received.</h1>
        <p style={{ fontSize:16, color:"var(--text-secondary)", lineHeight:1.8, marginBottom:32 }}>
          Thank you, {form.contact_name}. We have received your assessment for <strong style={{ color:"var(--text-primary)" }}>{form.company_name}</strong>. We will review it and be in touch within two business days.
        </p>
        <Link href="/" style={{ display:"inline-flex", alignItems:"center", background:"var(--accent)", color:"var(--navy)", padding:"13px 28px", fontWeight:700, fontSize:14 }}>
          Back to home
        </Link>
      </div>
    </section>
  );

  /* ── form ── */
  return (
    <FormCtx.Provider value={{ form, set }}>
    <>
      {/* Page header */}
      <section style={{ background:"var(--navy-dark)", borderBottom:"1px solid var(--border)", padding:"40px 24px 30px" }}>
        <div style={{ width:"min(92%, 860px)", margin:"0 auto" }}>
          <p style={{ color:"var(--accent)", fontSize:12, fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:10 }}>Business Assessment</p>
          <h1 style={{ fontFamily:"var(--serif)", fontSize:"clamp(26px, 4vw, 42px)", fontWeight:500, color:"var(--text-primary)", marginBottom:10 }}>Tell us about your business</h1>
          <p style={{ fontSize:15, color:"var(--text-secondary)", lineHeight:1.7, maxWidth:580 }}>
            This assessment takes approximately 20–30 minutes. All information is treated with strict confidentiality and used solely to prepare our recommendations.
          </p>
        </div>
      </section>

      {/* Step tabs */}
      <div style={{ background:"var(--navy)", borderBottom:"1px solid var(--border)", overflowX:"auto" }}>
        <div style={{ width:"min(92%, 860px)", margin:"0 auto", display:"flex", minWidth:"max-content" }}>
          {STEPS.map((s, i) => (
            <button key={s} onClick={() => i < step && setStep(i)} style={{
              padding:"13px 15px", fontSize:12, fontWeight:600, letterSpacing:"0.02em",
              border:"none", cursor: i < step ? "pointer" : "default", background:"transparent",
              color: i === step ? "var(--accent)" : i < step ? "var(--text-secondary)" : "var(--text-muted)",
              borderBottom: i === step ? "2px solid var(--accent)" : "2px solid transparent",
              transition:"all 0.15s", whiteSpace:"nowrap",
            }}>
              {i+1}. {s}
            </button>
          ))}
        </div>
      </div>

      {/* Form card */}
      <section style={{ background:"var(--navy)", padding:"44px 24px 80px", minHeight:"calc(100vh - 200px)" }}>
        <div style={{ width:"min(92%, 860px)", margin:"0 auto" }}>
          <div style={{ background:"#fff", borderRadius:12, padding:"36px 40px", boxShadow:"0 2px 16px rgba(0,0,0,0.10)" }}>

            <div style={{ marginBottom:28, paddingBottom:20, borderBottom:"1px solid #f0f0f0" }}>
              <p style={{ fontSize:11, color:"#aeb9c7", marginBottom:5 }}>Step {step+1} of {STEPS.length}</p>
              <h2 style={{ fontFamily:"var(--serif)", fontSize:24, fontWeight:500, color:"#1a1a1a", margin:0 }}>{STEPS[step]}</h2>
            </div>

            {steps[step]}

            {error && <p style={{ fontSize:13, color:"#ef4444", marginTop:16 }}>{error}</p>}

            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:32, paddingTop:24, borderTop:"1px solid #f0f0f0" }}>
              <button onClick={() => setStep(s => s-1)} disabled={step===0} style={{
                padding:"11px 24px", fontSize:14, fontWeight:600, background:"transparent",
                color: step===0 ? "#ccc" : "#52606f", border:`1px solid ${step===0?"#e8e8e8":"#d0d5dd"}`,
                borderRadius:6, cursor: step===0 ? "default" : "pointer", fontFamily:"inherit",
              }}>← Back</button>

              <span style={{ fontSize:12, color:"#aeb9c7" }}>{step+1} / {STEPS.length}</span>

              {step < STEPS.length-1 ? (
                <button onClick={() => setStep(s => s+1)} style={{
                  padding:"11px 26px", fontSize:14, fontWeight:700,
                  background:"var(--accent)", color:"var(--navy)",
                  border:"1px solid var(--accent)", borderRadius:6, cursor:"pointer", fontFamily:"inherit",
                }}>Next →</button>
              ) : (
                <button onClick={handleSubmit} disabled={submitting} style={{
                  padding:"11px 28px", fontSize:14, fontWeight:700,
                  background: submitting ? "#ccc" : "var(--accent)",
                  color:"var(--navy)", border:"none", borderRadius:6,
                  cursor: submitting ? "default" : "pointer", fontFamily:"inherit",
                }}>{submitting ? "Submitting…" : "Submit Assessment"}</button>
              )}
            </div>
          </div>

          <p style={{ textAlign:"center", fontSize:12, color:"var(--text-muted)", marginTop:18 }}>
            Questions? Email <a href="mailto:hello@bluenileinnovation.com" style={{ color:"var(--accent)" }}>hello@bluenileinnovation.com</a>
          </p>
        </div>
      </section>

      <style>{`
        input:focus, select:focus, textarea:focus { border-color: #d9a441 !important; box-shadow: 0 0 0 3px rgba(217,164,65,0.10); }
        @media (max-width: 600px) {
          .step-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
    </FormCtx.Provider>
  );
}
