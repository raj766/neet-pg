import Link from "next/link";
import '@/app/globals1.css';
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Faq from "@/components/Faq";
import Review from "@/components/Review";

export const metadata = {
  title: "NEET PG College Predictor 2026 | MCC & State Counselling",
  description: "Predict your NEET PG 2026 admission chances for MCC and state counselling using your All India Rank.",
};

const cards = [
  {
    title: "MCC COUNSELLING",
    href: "/neet-all-india-college-predictor",
    text: "The NEET PG 2026 MCC Counselling College Predictor is an advanced analytics tool designed to forecast your admission probability for postgraduate medical programs. By inputting your NEET PG All India Rank (AIR), the platform evaluates historical data to project your chances of securing a seat in M.D., M.S., DNB, and NBE Diploma courses. The predictor covers seat allocations across multiple national quotas, including: All India Quota (AIQ) 50% seats, DNB Quota, Deemed University Counselling 100% seats, and NBE Diploma Quota.",
  },
  {
    title: "STATE COUNSELLINGS",
    href: "/neet-all-india-college-predictor",
    text: "The NEET PG 2026 State Counselling College Predictor is an essential evaluation tool for medical graduates targeting state-specific postgraduate admissions. By entering your All India Rank (AIR), the predictor delivers a targeted projection of your admission chances for M.D., M.S., and DNB programs governed by individual state counselling authorities. This enables candidates to strategize their state-level applications with data-backed accuracy.",
  },
];

export default function CollegePredictor() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="pred-hero">
          <div className="wrap pred-grid">
            {cards.map((c) => (
              <article key={c.title} className="pred-card">
                <p className="hash">{"# NEET-PG 2026"}</p>
                <h1>{c.title}</h1>
                <h2>COLLEGE PREDICTOR</h2>
                <p className="pred-text">{c.text}</p>
                <Link href={c.href} className="use-now">USE NOW</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="wrap faq-wrap">
            <h2 className="center big">FAQ&apos;s</h2>
            <Faq />
          </div>
        </section>

        <Review />
      </main>
      <SiteFooter />
    </>
  );
}
