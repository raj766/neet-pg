"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

export type Query = {
  rank: string;
  counselling: string;
  branch: string;
  round: string;
  category: string;
  course: string;
};

type Chance = "High" | "Moderate" | "Tough";
type College = { name: string; fee: number; cutoff: number; type: string; hue: number };
type Row = College & { chance: Chance };

/* Replace with API data. cutoff = last year's closing rank. */
const COLLEGES: College[] = [
  { name: "RIMS, Imphal", fee: 5000, cutoff: 2725, type: "Government", hue: 150 },
  { name: "Rajiv Gandhi IMS, Ongole", fee: 30000, cutoff: 2607, type: "Government", hue: 200 },
  { name: "Govt Med Coll, Siddipet", fee: 15000, cutoff: 2525, type: "Government", hue: 215 },
  { name: "Rajiv Gandhi IMS, Srikakulam", fee: 30000, cutoff: 2519, type: "Government", hue: 230 },
  { name: "CIMS, Bilaspur", fee: 20000, cutoff: 2506, type: "Government", hue: 120 },
  { name: "Rajiv Gandhi IMS, Adilabad", fee: 15000, cutoff: 2415, type: "Government", hue: 25 },
  { name: "Bankura Sammilani Med Coll", fee: 12000, cutoff: 2199, type: "Government", hue: 260 },
  { name: "Govt Siddhartha, Vijaywada", fee: 30000, cutoff: 2126, type: "Government", hue: 340 },
];
const PAGE_SIZE = 8;

const chanceOf = (rank: number, cutoff: number): Chance =>
  rank <= cutoff * 0.9 ? "High" : rank <= cutoff * 1.15 ? "Moderate" : "Tough";
const inr = (n: number): string => "₹" + n.toLocaleString("en-IN") + "*";
const initials = (n: string): string =>
  n.split(/[ ,]+/).filter((w: string) => /^[A-Z]/.test(w)).slice(0, 2).map((w: string) => w[0]).join("");

export default function Results({ q }: { q: Query }) {
  const rank = Number(q.rank) || 0;
  const [chance, setChance] = useState<string>("All");
  const [type, setType] = useState<string>("All");
  const [panel, setPanel] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const rows: Row[] = useMemo(() => COLLEGES.map((c) => ({ ...c, chance: chanceOf(rank, c.cutoff) })), [rank]);
  const byType = rows.filter((r) => type === "All" || r.type === type);
  const count = (k: string): number => byType.filter((r) => k === "All" || r.chance === k).length;
  const shown = byType.filter((r) => chance === "All" || r.chance === chance);
  const pages = Math.max(1, Math.ceil(shown.length / PAGE_SIZE));
  const slice = shown.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const pick = (fn: (v: string) => void) => (v: string) => { fn(v); setPage(1); };

  const creds: [string, string][] = [
    ["NEET-PG Rank", q.rank], ["Category", q.category], ["Counselling", q.counselling],
    ["Course", q.course], ["Branch", q.branch], ["Round", q.round],
  ];

  return (
    <main className="rs-main">
      <div className="wrap rs-wrap">
        <Link href="/neet-all-india-college-predictor" className="rs-back">← Back</Link>

        <section className="rs-creds" aria-label="Your prediction credentials">
          <h2>Your Prediction Credentials</h2>
          <dl>
            {creds.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
          </dl>
        </section>

        <div className="rs-head">
          <h2>Predicted Colleges <small>({shown.length} Results Found)</small></h2>
          <button className="rs-apply" onClick={() => setPanel(!panel)} aria-expanded={panel}>▼ Apply Filters</button>
        </div>

        {panel && (
          <div className="rs-panel">
            <label>College type
              <select value={type} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => pick(setType)(e.target.value)}>
                {["All", "Government", "Private", "Deemed"].map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
          </div>
        )}

        <div className="rs-filter" role="group" aria-label="Filter by chance">
          <span>Filter by Chance:</span>
          {["All", "High", "Moderate", "Tough"].map((k) => (
            <button key={k} className={`pill-f f-${k.toLowerCase()} ${chance === k ? "on" : ""}`} onClick={() => pick(setChance)(k)}>
              {k} ({count(k)})
            </button>
          ))}
        </div>

        <ul className="rs-list">
          {slice.map((c) => (
            <li key={c.name} className="rs-card">
              <div className="rs-img" style={{ background: `linear-gradient(135deg, hsl(${c.hue} 45% 82%), hsl(${c.hue} 40% 62%))` }} aria-hidden="true">
                <span>{initials(c.name)}</span>
              </div>
              <div className="rs-body">
                <h3>{c.name}</h3>
                <div className="rs-meta">
                  <p><span>▤ Branch:</span> {q.branch}</p>
                  <p><span>Fee:</span> <b className="fee">{inr(c.fee)}</b></p>
                  <p><span>◆ Type:</span> {c.type}</p>
                  <p><span>↗ Cut Off (2025):</span> {c.cutoff}</p>
                  <p><span>Chance:</span> <b className={`badge b-${c.chance.toLowerCase()}`}>{c.chance === "Tough" ? "✕" : "●"} {c.chance}</b></p>
                </div>
              </div>
            </li>
          ))}
          {slice.length === 0 && <li className="rs-empty">No colleges match these filters.</li>}
        </ul>

        <nav className="rs-pager" aria-label="Pagination">
          <button className="prev" disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <button key={n} className={n === page ? "on" : ""} onClick={() => setPage(n)}>{n}</button>
          ))}
          <button disabled={page === pages} onClick={() => setPage(page + 1)}>Next</button>
        </nav>
      </div>
    </main>
  );
}
