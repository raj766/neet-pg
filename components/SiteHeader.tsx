import Link from "next/link";

const links = [
  ["NEET PG College Predictor", "/college-predictor"], ["NEET PG 2026 Counselling — New MCC Rules", "#"], ["NEET PG Closing Rank", "#"],
  ["NEET PG Counsellings Directory", "#"], ["Blog", "#"], ["NEET PG Closing Cutoff", "#"], ["NEET PG Choice Filling Advisor", "#"],
  ["NRI Quota", "#"], ["Media Coverage", "#"], ["Candidate Enrolment Agreement", "#"], ["Enquiry Form", "#"],
  ["MCC NRI category conversion", "#"], ["All India Quota PG Seat Matrix", "#"], ["Deemed PG Seat Matrix", "#"],
  ["DNB PG Seat Matrix", "#"], ["PG Seat Matrix 2026", "#"],
];

export default function SiteHeader() {
  return (
    <>
      <div className="promo"><span>Admission in MBBS/MD/MS</span><b className="pill">Call Us - 9359544396 / 97118 57351</b></div>
      <header className="head">
        <div className="wrap head-row">
          <Link className="logo" href="/"><span className="logo-mark">IT</span><span>INDIA TO<small>INTERNATIONAL</small></span></Link>
          <div className="head-actions">
            <a className="btn btn-accent" href="#">LOG IN</a>
            <a className="btn btn-accent" href="#">SIGN UP</a>
            <button className="btn btn-accent bell" aria-label="Notifications">🔔</button>
          </div>
        </div>
        <nav className="wrap chips" aria-label="Quick links">
          {links.map(([t, h], i) => <Link key={t} href={h} className={`chip chip-${i % 5}`}>{t}</Link>)}
        </nav>
      </header>
    </>
  );
}
