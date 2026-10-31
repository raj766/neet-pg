"use client";
import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Info, RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { colleges } from "@/data/colleges";
import { CollegeCard } from "@/components/CollegeCard";
import { SectionHeading } from "@/components/SectionHeading";

export default function PredictorPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError("");
    const d = new FormData(e.currentTarget);
    const rank = Number(d.get("rank"));
    if (!rank || rank < 1) return setError("Enter a valid All India Rank greater than zero.");
    if (!d.get("category") || !d.get("course")) return setError("Choose your category and preferred course.");
    setSubmitted(true);
  }
  return <div className="page-shell"><section className="page-hero"><div className="container page-hero-inner"><div><span className="eyebrow">PERSONALIZED EXPLORATION</span><h1>NEET PG College Predictor</h1><p>Enter your details to explore potential college options and organize your next steps.</p></div><div className="page-hero-art"><SlidersHorizontal size={48}/></div></div></section>
    <section className="container predictor-layout"><form className="predictor-form surface-card" onSubmit={submit}><div className="form-section-title"><span className="number-pill">01</span><div><h2>Your exam details</h2><p>Start with your NEET PG information.</p></div></div>
      {error && <div className="form-alert error-alert" role="alert">{error}</div>}
      <div className="form-grid"><label className="field-label">NEET PG year<select name="year" defaultValue="2026"><option>2026</option><option>2025</option><option>2024</option></select></label><label className="field-label">All India Rank *<input type="number" name="rank" min="1" placeholder="e.g. 12500" required/></label><label className="field-label">NEET PG score <span className="optional">(optional)</span><input type="number" name="score" min="0" placeholder="Enter score"/></label><label className="field-label">Reservation category *<select name="category" defaultValue=""><option value="">Select category</option><option>General</option><option>OBC</option><option>SC</option><option>ST</option><option>EWS</option></select></label></div>
      <div className="form-section-title form-section-spaced"><span className="number-pill">02</span><div><h2>Your preferences</h2><p>Filter options to fit your goals.</p></div></div>
      <div className="form-grid"><label className="field-label">Preferred course *<select name="course" defaultValue=""><option value="">Select course</option><option>MD General Medicine</option><option>MD Paediatrics</option><option>MD Radiodiagnosis</option><option>MD Dermatology</option><option>MS General Surgery</option><option>MS Orthopaedics</option><option>MD Anaesthesiology</option></select></label><label className="field-label">Preferred state<select name="state" defaultValue=""><option value="">Any state</option><option>Tamil Nadu</option><option>Karnataka</option><option>Maharashtra</option><option>Uttar Pradesh</option><option>West Bengal</option></select></label><label className="field-label">College type<select name="type" defaultValue="Any"><option>Any</option><option>Government</option><option>Private</option><option>Deemed</option></select></label><label className="field-label">Counselling quota<select name="quota" defaultValue="All India Quota"><option>All India Quota</option><option>State Quota</option><option>Deemed University</option><option>Other / Not sure</option></select></label></div>
      <div className="form-actions"><button className="button button-primary" type="submit">Explore matches <ArrowRight size={16}/></button><button className="button button-ghost" type="reset" onClick={() => setSubmitted(false)}><RotateCcw size={15}/> Reset form</button></div>
      <p className="privacy-note"><Info size={15}/> Your entries are used only in this frontend demo; no data is sent to a server.</p>
    </form>
    <aside className="results-panel"><div className="results-heading"><div><span className="eyebrow">YOUR EXPLORATION</span><h2>{submitted ? "Demo results preview" : "Your results will appear here"}</h2></div><span className="results-icon"><Search size={20}/></span></div>
      {!submitted ? <div className="empty-results"><div className="empty-art"><Search size={38}/></div><h3>Ready when you are</h3><p>Fill in your rank and preferences, then select “Explore matches” to view illustrative sample cards.</p></div> : <><div className="form-alert info-alert"><Info size={16}/> These are illustrative demo cards, not rank-matched predictions. Connect a verified dataset and prediction service for real results.</div><div className="results-cards">{colleges.slice(0,3).map(c => <CollegeCard key={c.id} college={c}/>)}</div></>}
      <div className="disclaimer-box"><Info size={15}/><p>Predictions are estimates, not admission guarantees. Verify eligibility, cutoffs, seat matrix and current rules with official counselling authorities.</p></div>
    </aside></section>
  </div>;
}
