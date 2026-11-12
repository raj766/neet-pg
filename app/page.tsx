import "./globals1.css";

const topbar = ["NEET College Predictor", "NEET PG 2026 Counselling: New MCC Rules", "NEET PG Closing Rank", "NEET PG Counsellings Directory", "Blog", "NEET PG Closing Cutoff", "NEET PG Choice Filling Advisor", "NRI Quota", "Media Coverage", "Candidate Enrolment Agreement", "Enquiry Form", "MCC NRI category conversion", "All India Quota PG Seat Matrix", "Deemed PG Seat Matrix", "DNB PG Seat Matrix", "PG Seat Matrix 2026"];

const updates = [
  ["All India Counselling - PG Medical Round 2 Virtual Vacancy Seat Matrix has been published", "11 Nov 2026"],
  ["Mcc Round 2 seat matrix declared", "10 Nov 2026"],
  ["All India Counselling - PG Medical Round 2 Choice Filling Update", "10 Nov 2026"],
  ["All India Counselling - PG Medical Round 2 Schedule has been published", "07 Nov 2026"],
  ["All India Counselling - PG Medical Round 2 Registration Link is Active", "07 Nov 2026"],
  ["Kindly note the Float candidate have to upload a undertaking to resign from the MCC counselling portal", "06 Nov 2026"],
];

const services = ["MCC & State Counselling", "Dedicated Personalized Service", "Cutoff Comparison", "Closing Ranks", "NEET PG College Predictor", "Choice Filling Advisor"];

const plans = [
  { name: "Targeted Counselling Package", price: "₹25,000", scope: "MCC / Central University: AIQ, Deemed, Central Univ., DNB, ESIC, AFMS", extra: "One state counselling of your choice", note: "Best suited for candidates focused on MCC plus a single home-state option." },
  { name: "Comprehensive All-India Package", price: "₹50,000", scope: "MCC / Central University: AIQ, Deemed, Central Univ., DNB, ESIC, AFMS", extra: "Unlimited state counselling processes", note: "Best suited for candidates who want to maximise chances across every avenue.", featured: true },
];

const stats = [["18114", "Total Registered Users"], ["13557", "Total Admissions"], ["2286", "College Hospital Details"], ["19", "Years of Rich Experience"]];

const reviews = [
  ["Sejal Patnaik", "I had a very positive experience with Navin sir and Vikas sir. They were patient, understanding, and genuinely supportive throughout the process. Their guidance helped me gain better clarity."],
  ["Surya Senthil", "I'm really grateful that I found Mr. Navin during my PG counselling. He is such a genuine human being and his services are top notch, but at the same time very supportive and honest."],
  ["Adhishri Karbhari", "I had a very positive experience with the team during my MDS counselling process. They are professional, patient, approachable, and genuinely committed to helping students make the right decision."],
];

const states = ["Delhi", "Haryana", "Karnataka", "MP", "Odisha", "Tamil Nadu", "UP", "Uttarakhand"];

export default function Home() {
  return (
    <>
      <div className="promo"><span>Admission in MBBS/MD/MS</span><b className="pill">Call Us - 9359544396 / 97118 57351</b></div>

      <header className="head">
        <div className="wrap head-row">
          <a className="logo" href="#"><span className="logo-mark">IT</span><span>INDIA TO<small>INTERNATIONAL</small></span></a>
          <div className="head-actions">
            <a className="btn btn-accent" href="#">LOG IN</a>
            <a className="btn btn-accent" href="#">SIGN UP</a>
            <button className="btn btn-accent bell" aria-label="Notifications">🔔</button>
          </div>
        </div>
        <nav className="wrap chips" aria-label="Quick links">
          {topbar.map((t, i) => <a key={t} href="/neet-college-predictor" className={`chip chip-${i % 5}`}>{t}</a>)}
        </nav>
      </header>

      <section className="hero">
        <button className="arrow" aria-label="Previous slide">←</button>
        <blockquote>
          <p>Knowledge and integrity outlast any capital.</p>
          <cite>— Navin Harjwani</cite>
        </blockquote>
        {/* Replace .portrait with <Image src="/navin.jpg" .../> */}
        <div className="portrait" aria-hidden="true"><i className="head" /><i className="body" /></div>
        <button className="arrow" aria-label="Next slide">→</button>
        <a className="enquiry" href="#">Enquiry Form</a>
      </section>

      <section className="section wash">
        <div className="wrap center">
          <p className="hash"># Updates</p>
          <h2>NEET PG 2026–27 Counselling Updates</h2>
          <div className="tabs" role="tablist">
            <button role="tab" aria-selected="true" className="tab on">All India Counselling</button>
            <button role="tab" aria-selected="false" className="tab">State Counselling</button>
          </div>
          <ul className="updates">
            {updates.map(([t, d]) => (
              <li key={t}><span className="tag">MCC Counselling</span><p>{t}</p><time>{d}</time></li>
            ))}
          </ul>
          <a className="btn btn-solid" href="#">View all notifications</a>
        </div>
      </section>

      <section className="section">
        <div className="wrap center narrow">
          <h1>NEET PG Counselling for MD, MS & DNB Admissions</h1>
          <p className="muted">India To International (neetadmission.in) is a NEET PG counselling service that helps MBBS graduates secure MD, MS and DNB seats through MCC, deemed, central and state PG counselling. Led by Navin Harjwani, it offers free college predictor, preference-wise choice-filling strategy and real-time closing-rank data.</p>
          <h2 className="gap">Simplify your NEET counselling process</h2>
          <p className="muted">With an 18-year track record guiding aspiring students towards successful academic journeys, our approach blends years of expertise with a deep understanding of the admission process, so each student receives personalised guidance tailored to their aspirations.</p>
          <a className="link" href="#">Read more</a>
        </div>
      </section>

      <section className="section wash">
        <div className="wrap">
          <h2>Explore Our Services</h2>
          <div className="services">
            {services.map((s) => (
              <a key={s} href="#" className="service"><span className="ico" aria-hidden="true" />{s}</a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="center">FAQs</h2>
          {/* <Faq /> */}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Our Pricing Quotation</h2>
          <div className="plans">
            {plans.map((p) => (
              <article key={p.name} className={`plan ${p.featured ? "featured" : ""}`}>
                <h3>{p.name}</h3>
                <p className="price">{p.price}</p>
                <p>{p.scope}</p>
                <p>{p.extra}</p>
                <p className="muted small">{p.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap center">
          <h2>What will you discover?</h2>
          <div className="stat-grid">
            {stats.map(([n, l]) => (
              <div key={l}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="center">Our Google Reviews</h2>
          <div className="reviews">
            {reviews.map(([n, t]) => (
              <figure key={n} className="review">
                <span className="avatar">{n[0]}</span>
                <figcaption>{n} <span className="stars">★★★★★</span></figcaption>
                <p>{t}</p>
              </figure>
            ))}
          </div>
          <div className="rating">
            <div><b>Google</b><strong>4.9</strong><span className="stars">★★★★★</span><small>Based on 163 reviews</small></div>
            <a className="btn btn-solid" href="#">See all reviews</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap center">
          <h2>State Wise Counselling Information</h2>
          <div className="states">
            {states.map((s) => (
              <a key={s} href="#" className="state"><span className="map" aria-hidden="true" />{s} NEET PG Counselling 2026</a>
            ))}
          </div>
          <a className="btn btn-outline" href="#">View more</a>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap foot-grid">
          <div>
            <h4>Get in touch</h4>
            <p>2088, Vijay Nagar Colony, Prasad Bungalow, Sadashiv Peth, Pune, Maharashtra 411030</p>
            <p>+91 9359544396</p><p>+91 97118 57351</p>
            <p>info@indiatointernational.com</p>
          </div>
          <div><h4>Important link</h4><a href="#">Home</a><a href="#">About us</a><a href="#">Why subscribe us</a><a href="#">Contact us</a></div>
          <div><h4>Services</h4><a href="#">Check IPD/OPD/BEDS</a><a href="#">NEET PG NRI Quota Admission Services</a><a href="#">NEET PG Management Quota</a><a href="#">NEET PG Counselling services</a></div>
          <div>
            <h4>Stay always in touch</h4>
            <p>Get latest update on mail</p>
            <input type="email" placeholder="Enter your email address" aria-label="Email address" />
            <a className="btn btn-accent" href="#">Submit</a>
          </div>
        </div>
        <p className="copy">Powered by India To International © 2026</p>
      </footer>

      <button className="fab fab-plus" aria-label="Quick actions">+</button>
      <a className="fab fab-wa" href="#" aria-label="Chat on WhatsApp">✆</a>
    </>
  );
}