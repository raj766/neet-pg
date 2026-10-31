"use client";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, Info } from "lucide-react";
import { colleges } from "@/data/colleges";
import { CollegeCard } from "@/components/CollegeCard";
import { SectionHeading } from "@/components/SectionHeading";

export default function CollegesPage() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState("All states");
  const [type, setType] = useState("All types");
  const filtered = useMemo(() => colleges.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) && (state === "All states" || c.state.includes(state)) && (type === "All types" || c.type === type)), [query, state, type]);
  return <div className="page-shell"><section className="page-hero"><div className="container page-hero-inner"><div><span className="eyebrow">DISCOVER YOUR OPTIONS</span><h1>Explore colleges</h1><p>Search and filter college examples by location and institution type.</p></div><div className="page-hero-art"><Search size={48}/></div></div></section>
    <section className="container content-section"><div className="search-toolbar"><label className="search-input"><Search size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by college name..." aria-label="Search college name"/></label><select value={state} onChange={e => setState(e.target.value)} aria-label="Filter by state"><option>All states</option><option>Tamil Nadu</option><option>Karnataka</option><option>Maharashtra</option><option>West Bengal</option><option>Uttar Pradesh</option></select><select value={type} onChange={e => setType(e.target.value)} aria-label="Filter by college type"><option>All types</option><option>Government</option><option>Private</option><option>Deemed</option></select><span className="filter-label"><SlidersHorizontal size={15}/> Filters</span></div>
      <div className="listing-meta"><span>{filtered.length} illustrative records</span><span>Demo data · Not official listings</span></div>
      {filtered.length ? <div className="college-grid">{filtered.map(c => <CollegeCard key={c.id} college={c}/>)}</div> : <div className="empty-state"><Search size={28}/><h3>No colleges found</h3><p>Try a different name or clear your filters.</p><button className="button button-ghost" onClick={() => {setQuery("");setState("All states");setType("All types");}}>Clear filters</button></div>}
      <div className="notice-strip"><Info size={17}/><p>College names and records on this starter page are illustrative. Replace them with verified college, course, seat and cutoff data before publishing.</p></div>
    </section>
  </div>;
}
