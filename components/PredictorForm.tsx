"use client";
import { useState } from "react";

const options = {
  course: ["MD", "MS", "DNB", "PG Diploma", "MDS"],
  type: ["All India Counselling", "Deemed University", "Central University", "ESIC / AFMS"],
  quota: ["All India Quota (50%)", "DNB Quota", "Deemed University (100%)", "NBE Diploma Quota"],
  round: ["Round 1", "Round 2", "Round 3", "Stray Vacancy"],
  category: ["General", "OBC", "SC", "ST", "EWS", "General-PwD"],
};

function Select({ id, label, items, value, onChange, half }) {
  return (
    <div className={half ? "pf-field" : "pf-field pf-full"}>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} required>
        <option value="">Select</option>
        {items.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function PredictorForm() {
  const [f, setF] = useState({ rank: "5500", course: "", branch: "", type: "", quota: "", category: "", round: "" });
  const [done, setDone] = useState(false);
  const set = (k) => (v) => { setDone(false); setF((s) => ({ ...s, [k]: v })); };

  const submit = (e) => {
    e.preventDefault();
    setDone(true);
    // TODO: call your predictor API here with `f`
  };

  return (
    <form className="pf" onSubmit={submit} noValidate={false}>
      <h2>NEET-PG 2026 All India Counselling College Predictor</h2>

      <div className="pf-field pf-full">
        <label htmlFor="rank">NEET All India Overall Rank</label>
        <input id="rank" type="number" min="1" inputMode="numeric" value={f.rank} onChange={(e) => set("rank")(e.target.value)} required />
      </div>
      <Select id="course" label="Course" items={options.course} value={f.course} onChange={set("course")} />
      <div className="pf-field pf-full">
        <label htmlFor="branch">Branch</label>
        <input id="branch" list="branches" value={f.branch} onChange={(e) => set("branch")(e.target.value)} />
        <datalist id="branches">
          {["General Medicine", "General Surgery", "Paediatrics", "Radiology", "Orthopaedics", "Obstetrics & Gynaecology", "Anaesthesiology", "Dermatology"].map((b) => <option key={b} value={b} />)}
        </datalist>
      </div>
      <Select half id="type" label="Counselling Type" items={options.type} value={f.type} onChange={set("type")} />
      <Select half id="quota" label="Quota" items={options.quota} value={f.quota} onChange={set("quota")} />
      <Select half id="category" label="Category" items={options.category} value={f.category} onChange={set("category")} />
      <Select half id="round" label="Select Round" items={options.round} value={f.round} onChange={set("round")} />

      <button type="submit" className="pf-submit">PREDICT MY COLLEGES</button>
      {done && <p className="pf-note" role="status">Request ready for rank {f.rank} · {f.course} · {f.category}. Connect your prediction API in PredictorForm.js to show results.</p>}
    </form>
  );
}