import { MapPin, GraduationCap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export type College = { id: number; name: string; state: string; type: string; course: string; cutoff: string; tag: string; tagTone: string };

export function CollegeCard({ college }: { college: College }) {
  return <article className="college-card">
    <div className="college-card-top"><span className="college-icon"><GraduationCap size={22} /></span><span className={`badge ${college.tagTone}`}>{college.tag}</span></div>
    <h3>{college.name}</h3>
    <p className="college-location"><MapPin size={14} /> {college.state}</p>
    <div className="college-meta"><span>{college.type}</span><span>{college.course}</span></div>
    <div className="cutoff-row"><div><small>Sample historical cutoff</small><strong>{college.cutoff}</strong></div><Link href="/predictor" className="icon-link" aria-label="Explore prediction"><ArrowUpRight size={18} /></Link></div>
  </article>;
}
