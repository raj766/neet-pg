import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Results from "@/components/Results";
import '@/app/globals1.css';
export const metadata = { title: "Predicted Colleges | NEET PG 2026 College Predictor" };
export type Query = {
  rank: string;
  counselling: string;
  branch: string;
  round: string;
  category: string;
  course: string;
};
export default function ResultsPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const q: Query = {
    rank: searchParams.rank ?? "5500",
    counselling: searchParams.quota ?? "All India Quota",
    branch: (searchParams.branch ?? "Dermatology").toUpperCase(),
    round: searchParams.round ?? "Round 1",
    category: searchParams.category ?? "GEN",
    course: searchParams.course ?? "MD/MS",
  };
  return (
    <>
      <SiteHeader />
      <Results q={q} />
      <SiteFooter />
    </>
  );
}