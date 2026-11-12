import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PredictorForm from "@/components/PredictorForm";
import '@/app/globals1.css';
export const metadata = {
  title: "NEET PG 2026 All India College Predictor",
  description: "Enter your NEET PG All India Rank to see probable colleges based on the latest counselling trends.",
};

export default function AllIndexPredictor() {
  return (
    <>
      <SiteHeader />
      <main className="pg-main">
        <div className="wrap pg-grid">
          <section className="pg-copy">
            <h1>NEET PG 2026 College predictor</h1>
            <p>
              Our NEET College Predictor comes with a range of basic yet powerful features designed to help students make informed decisions about their medical career. By simply entering your NEET score or rank, you can instantly check a list of probable colleges based on the latest counselling trends. The tool covers both All India Quota (15%) and State Quota (85%) seats, supporting all categories including General, OBC, SC, ST, and EWS for more accurate results. It provides predictions for MBBS and BDS courses across government, private, deemed, and central universities in India. With access to last year’s cut-off data, the predictor ensures reliable insights, while filters such as state, domicile, and reservation type allow you to personalize your search. The interface is simple, fast, and mobile-friendly, making it convenient for students to access predictions anytime, anywhere. Best of all, the basic version is completely free to use, giving you quick and easy access to college possibilities without the need to sign up.
            </p>
          </section>
          <PredictorForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}