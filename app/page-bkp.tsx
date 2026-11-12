
import {
  ArrowRight, ArrowUpRight, BookOpen, Check,
  ChevronDown, ClipboardList, GraduationCap,
  Landmark, Mail, MapPin, Menu, MessageCircle,
  Phone, ShieldCheck, Star, Stethoscope, Users, Zap
} from "lucide-react";
import "./globals1.css";
const updates = [
  ["MCC UPDATE", "Round 1 registration schedule and counselling dates", "11 Nov 2026"],
  ["NEET PG", "Latest counselling notice and document checklist", "09 Nov 2026"],
  ["MCC UPDATE", "Revised seat matrix and choice filling instructions", "06 Nov 2026"],
  ["STATE", "State counselling registration and eligibility updates", "04 Nov 2026"],
  ["NEET PG", "Important advisory for MD, MS and DNB aspirants", "01 Nov 2026"]
];

const services = [
  { icon: Stethoscope, title: "MCC & State Counselling", desc: "Guidance for All India and state counselling rounds." },
  { icon: Users, title: "Personalized Guidance", desc: "One-to-one support based on your rank and goals." },
  { icon: ClipboardList, title: "Cutoff Comparison", desc: "Compare previous-year closing ranks and trends." },
  { icon: ShieldCheck, title: "Choice Filling Strategy", desc: "Build a balanced preference-wise choice list." },
  { icon: GraduationCap, title: "NEET PG College Predictor", desc: "Explore colleges aligned with your rank." },
  { icon: BookOpen, title: "Choice Filling Advisor", desc: "Make informed decisions at every stage." }
];

const faqs = [
  ["What is the NEET PG College Predictor?", "It estimates possible MD, MS and DNB college options using your rank, category and historical closing-rank data."],
  ["How does choice filling assistance work?", "We help arrange colleges and courses into a practical preference list based on your rank, interests and eligibility."],
  ["Can I get help with state counselling?", "Yes. Guidance can cover MCC and state processes, including domicile rules, reservation criteria and schedules."],
  ["How can I compare previous-year closing ranks?", "Review historical allotment trends by college, course, quota and category. Past cutoffs are indicative, not guarantees."],
  ["What information should I keep ready?", "Keep your NEET PG rank, scorecard, category details, internship information and academic documents ready."],
  ["Is admission guaranteed?", "No counsellor can guarantee admission. Final allotment depends on official rules, seat availability and candidate preferences."],
  ["How do I get started?", "Share your rank and preferences through the enquiry form to discuss your counselling requirements."],
  ["Can I use the tools more than once?", "You can revisit the tools while comparing options. Always verify final information against official notices."]
];

const states = [
  "Delhi", "Haryana", "Karnataka", "Madhya Pradesh",
  "Odisha", "Tamil Nadu", "Uttar Pradesh", "Uttarakhand"
];

const reviews = [
  ["SP", "S. Patnaik", "The team was patient, understanding and genuinely supportive. Their guidance helped me make a confident decision."],
  ["AM", "A. Mahishale", "Clear explanations and consistent support throughout the counselling process."],
  ["SD", "S. Dayal", "The counselling report was detailed and easy to understand, with realistic options."]
];

export default function Home() {
  return (
    <main>
      {/* TOP BAR */}
      <div className="topbar">
        <span>Admission guidance for your next medical milestone</span>
        <span>Call us: +91 93595 44396</span>
      </div>

      {/* HEADER */}
      <header className="header">
        <a href="#" className="logo">
          <span className="logo-icon"><Stethoscope /></span>
          <span>
            <b>NEET PG</b>
            <small>PATHWAY COUNSELLING</small>
          </span>
        </a>

        <nav>
          <a href="#updates">Updates</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="header-btn">Enquire Now ↗</a>
        <button className="mobile-menu" aria-label="Menu">
          <Menu />
        </button>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="eyebrow">YOUR NEXT STEP STARTS HERE</span>

            <h1>
              Make your NEET PG
              <em> dream a direction.</em>
            </h1>

            <p>
              Expert counselling for MD, MS & DNB admissions.
              Make every choice count with clear, personalized guidance.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-btn">
                Get Counselling <ArrowRight size={17} />
              </a>
              <a href="#services" className="secondary-btn">
                Explore Services
              </a>
            </div>

            <div className="trust">
              <Users size={22} />
              <span>
                <b>Personalized support</b>
                <small>From rank analysis to choice filling</small>
              </span>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-circle">
              <div className="doctor-icon">
                <Stethoscope size={75} />
              </div>
              <span>YOUR COUNSELLING PARTNER</span>
              <h2>Confident choices.<br />Clearer pathways.</h2>
              <small>MD · MS · DNB ADMISSIONS</small>
            </div>

            <div className="floating-card card-one">
              <Check size={16} /> Rank-based strategy
            </div>
            <div className="floating-card card-two">
              <GraduationCap size={20} /> Your goals, our guidance
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>COUNSELLING THAT PUTS YOUR GOALS FIRST</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* COUNSELLING UPDATES */}
      <section className="updates section" id="updates">
        <div className="section-heading">
          <span>THE LATEST</span>
          <h2>NEET PG 2026–27 Counselling Updates</h2>
          <p>Important announcements, schedules and notices in one place.</p>
        </div>

        <div className="updates-box">
          <div className="tabs">
            <button className="selected">All India Counselling</button>
            <button>State Counselling</button>
          </div>

          {updates.map((item, index) => (
            <a href="#contact" className="update-item" key={index}>
              <span className="tag">{item[0]}</span>
              <b>{item[1]}</b>
              <time>{item[2]}</time>
              <ArrowUpRight size={15} />
            </a>
          ))}

          <a href="#contact" className="view-link">
            View All Notifications <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="about-art">
          <div className="about-circle">
            <GraduationCap size={95} />
            <span>GUIDANCE WITH PURPOSE</span>
          </div>
          <div className="experience">
            <b>18+</b>
            <span>Years of<br />experience</span>
          </div>
        </div>

        <div className="about-content">
          <span className="eyebrow">ABOUT NEET PG PATHWAY</span>
          <h2>Simplify your <em>counselling journey.</em></h2>

          <p>
            Choosing the right postgraduate medical seat is one of
            the most important decisions in your career. The process
            can feel complex with multiple counselling authorities,
            changing schedules, seat matrices and category-specific rules.
          </p>

          <p>
            Our approach brings clarity to every step. From understanding
            your rank and exploring realistic options to building a
            thoughtful choice list, we help you move forward with confidence.
          </p>

          <a href="#contact" className="text-link">
            Know More About Us <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section" id="services">
        <div className="section-heading">
          <span>HOW WE HELP</span>
          <h2>Everything you need, in one place</h2>
          <p>Practical support for every stage of your NEET PG journey.</p>
        </div>

        <div className="service-grid">
          {services.map(({ icon: Icon, title, desc }) => (
            <a href="#contact" className="service-card" key={title}>
              <div className="service-icon"><Icon size={23} /></div>
              <div>
                <b>{title}</b>
                <p>{desc}</p>
              </div>
              <ArrowUpRight size={17} className="service-arrow" />
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section">
        <div className="section-heading">
          <span>GOOD TO KNOW</span>
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to help you take your next step.</p>
        </div>

        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} className="faq-item">
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {question}
                <ChevronDown size={18} />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing section" id="pricing">
        <div className="section-heading">
          <span>SIMPLE & TRANSPARENT</span>
          <h2>Our Counselling Packages</h2>
          <p>Choose the support that best fits your admission plan.</p>
        </div>

        <div className="pricing-grid">
          <div className="price-card">
            <span className="plan-label">FOCUSED SUPPORT</span>
            <h3>Targeted Counselling</h3>
            <h2>₹25,000</h2>
            <p>For candidates focused on MCC counselling and one state option.</p>

            <ul>
              <li><Check /> MCC / Central counselling</li>
              <li><Check /> AIQ, Deemed, Central University, DNB</li>
              <li><Check /> One state counselling option</li>
            </ul>

            <a href="#contact" className="outline-btn">Enquire Now <ArrowRight /></a>
          </div>

          <div className="price-card featured">
            <span className="popular">MOST COMPREHENSIVE</span>
            <span className="plan-label">COMPLETE COVERAGE</span>
            <h3>All-India Counselling</h3>
            <h2>₹50,000</h2>
            <p>For candidates exploring opportunities across multiple states.</p>

            <ul>
              <li><Check /> MCC / Central counselling</li>
              <li><Check /> AIQ, Deemed, Central University, DNB</li>
              <li><Check /> Multiple state counselling processes</li>
            </ul>

            <a href="#contact" className="primary-btn">Choose Package <ArrowRight /></a>
          </div>
        </div>
        <p className="pricing-note">
          Confirm package scope and fees with the counselling team before enrolment.
        </p>
      </section>

      {/* STATISTICS */}
      <section className="statistics section">
        <div className="section-heading">
          <span>OUR JOURNEY IN NUMBERS</span>
          <h2>Experience that helps <em>you move forward.</em></h2>
        </div>

        <div className="stats-grid">
          <div><Users /><b>18,114</b><span>Registered Users</span></div>
          <div><Check /><b>13,557</b><span>Total Admissions*</span></div>
          <div><Landmark /><b>2,286</b><span>College & Hospital Details</span></div>
          <div><Star /><b>19+</b><span>Years of Experience</span></div>
        </div>
        <small>*Replace illustrative figures with verified statistics.</small>
      </section>

      {/* REVIEWS */}
      <section className="reviews section" id="reviews">
        <div className="section-heading">
          <span>STUDENT STORIES</span>
          <h2>Guidance that makes a difference</h2>
          <p>Hear from candidates and families.</p>
        </div>

        <div className="review-grid">
          {reviews.map(([initials, name, quote]) => (
            <article className="review-card" key={name}>
              <div className="review-header">
                <span>{initials}</span>
                <div><b>{name}</b><small>Candidate / Parent</small></div>
                <strong>★★★★★</strong>
              </div>
              <p>“{quote}”</p>
            </article>
          ))}
        </div>

        <div className="google-rating">
          <div><b className="google-word">Google</b><h2>4.9 <span>★★★★★</span></h2><small>Candidate feedback</small></div>
          <div className="rating-bars">
            {[100, 82, 45, 20, 10].map((width, i) => (
              <div key={i}>
                <span>{5 - i}★</span>
                <div className="bar"><i style={{ width: `${width}%` }} /></div>
              </div>
            ))}
          </div>
          <a href="#contact">Read More Reviews ↗</a>
        </div>
      </section>

      {/* STATES */}
      <section className="states section">
        <div className="section-heading">
          <span>EXPLORE BY REGION</span>
          <h2>State-wise Counselling Information</h2>
          <p>Find guidance and updates for your preferred state.</p>
        </div>

        <div className="state-grid">
          {states.map((state, i) => (
            <a href="#contact" className="state-card" key={state}>
              <span>{i + 1}</span>
              <div><b>{state}</b><small>NEET PG Counselling 2026</small></div>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>

        <a href="#contact" className="all-states">View All States <ArrowRight /></a>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="footer-grid">
          <div>
            <a href="#" className="logo footer-logo">
              <span className="logo-icon"><Stethoscope /></span>
              <span><b>NEET PG</b><small>PATHWAY COUNSELLING</small></span>
            </a>
            <p>
              Helping medical graduates navigate NEET PG counselling
              with informed choices and personalized support.
            </p>
          </div>

          <div>
            <h4>IMPORTANT LINKS</h4>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#reviews">Reviews</a>
          </div>

          <div>
            <h4>OUR SERVICES</h4>
            <a href="#services">College Predictor</a>
            <a href="#services">Cutoff Comparison</a>
            <a href="#services">Choice Filling</a>
            <a href="#services">State Counselling</a>
          </div>

          <div>
            <h4>GET IN TOUCH</h4>
            <p><Phone size={15} /> +91 93595 44396</p>
            <p><Mail size={15} /> info@example.com</p>
            <p><MapPin size={15} /> India</p>
            <form className="subscribe">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 NEET PG Pathway. All rights reserved.
        </div>
      </footer>

      <a
        href="https://wa.me/919359544396"
        className="whatsapp"
        aria-label="WhatsApp"
      >
        <MessageCircle />
      </a>
    </main>
  );
}
