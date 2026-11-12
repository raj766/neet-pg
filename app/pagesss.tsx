import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ClipboardCheck, Compass, GraduationCap, ShieldCheck, SlidersHorizontal, Sparkles, Target, TrendingUp, BookOpenCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CollegeCard } from "@/components/CollegeCard";
import { colleges } from "@/data/colleges";

const benefits = [
  { icon: Target, title: "Rank-based exploration", text: "Explore options around your rank with clear context and transparent data references." },
  { icon: SlidersHorizontal, title: "Personalized filters", text: "Narrow your options by course, category, state, college type and quota." },
  { icon: Compass, title: "College discovery", text: "Compare institutions and organize the options you want to research further." },
  { icon: ShieldCheck, title: "Counselling clarity", text: "Prepare with useful checklists and links to official counselling resources." },
];

export default function HomePage() {
  return <>
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} /> YOUR NEXT CHAPTER STARTS HERE</div>
          <h1>Your NEET PG rank.<br />Your medical career.<br /><span>Your best-fit college.</span></h1>
          <p className="hero-description">Explore potential medical colleges based on your rank, category and preferences. Make your counselling preparation more informed and organized.</p>
          <div className="hero-actions"><Link href="/predictor" className="button button-primary button-large">Predict my college <ArrowRight size={17} /></Link><Link href="/colleges" className="button button-ghost button-large">Explore colleges</Link></div>
          <div className="hero-note"><CheckCircle2 size={17} /> Understand your options before making counselling decisions.</div>
          <div className="hero-proof"><div className="proof-avatars"><span>PG</span><span>MD</span><span>MS</span></div><p><strong>Built for aspirants</strong><br /><span>Clear tools for a complex process</span></p></div>
        </div>
        <div className="hero-visual" aria-label="Illustration of a college prediction dashboard">
          <div className="visual-orb orb-one"></div><div className="visual-orb orb-two"></div>
          <div className="floating-chip chip-top"><span className="chip-dot"></span> Personalized exploration</div>
          <div className="prediction-window">
            <div className="window-header"><div className="window-dots"><i></i><i></i><i></i></div><span>College matches <span className="live-dot"></span></span><span className="window-more">•••</span></div>
            <div className="rank-panel"><div><small>YOUR NEET PG RANK</small><strong>Enter your rank</strong></div><span className="rank-icon"><TrendingUp size={20}/></span></div>
            <div className="match-heading"><span>Explore your options</span><small>Sample preview</small></div>
            {[
              { n: "Government Medical College", s: "Tamil Nadu · MD General Medicine", tag: "Target", tone: "badge-green", icon: "G" },
              { n: "State Medical College", s: "Karnataka · MD Paediatrics", tag: "Explore", tone: "badge-blue", icon: "S" },
              { n: "Private Medical Institute", s: "Maharashtra · MD Dermatology", tag: "Review", tone: "badge-amber", icon: "P" },
            ].map(item => <div className="match-row" key={item.n}><span className="match-avatar">{item.icon}</span><div className="match-details"><strong>{item.n}</strong><small>{item.s}</small></div><span className={`badge ${item.tone}`}>{item.tag}</span></div>)}
            <div className="window-footer"><span><ShieldCheck size={14}/> Your preferences matter</span><Link href="/predictor">Try predictor <ArrowUpRight size={14}/></Link></div>
          </div>
          <div className="floating-card float-bottom"><span className="floating-icon"><ClipboardCheck size={18}/></span><div><strong>Stay organized</strong><small>Build your shortlist</small></div><CheckCircle2 size={17} className="green-check"/></div>
          <div className="decor-cross cross-one">+</div><div className="decor-cross cross-two">+</div>
        </div>
      </div>
    </section>

    <section className="benefits-section section-pad">
      <div className="container">
        <SectionHeading eyebrow="A SMARTER WAY TO PLAN" title="Clarity for every next step" description="Bring your preferences, college research and counselling preparation together in one place." center />
        <div className="benefit-grid">{benefits.map(({ icon: Icon, title, text }) => <article className="benefit-card" key={title}><span className="benefit-icon"><Icon size={23}/></span><h3>{title}</h3><p>{text}</p><Link href="/predictor" className="text-link">Explore feature <ArrowRight size={15}/></Link></article>)}</div>
      </div>
    </section>

    <section className="how-section section-pad">
      <div className="container how-grid">
        <div><SectionHeading eyebrow="HOW IT WORKS" title="Three steps to a clearer shortlist" description="Start with the details that matter to you, then explore options with context."/><Link href="/predictor" className="button button-primary">Start predicting <ArrowRight size={16}/></Link></div>
        <div className="steps-list">
          <div className="step-item"><span className="step-number">01</span><div><h3>Tell us about your rank</h3><p>Add your exam year, rank, category, preferred course and counselling preferences.</p></div></div>
          <div className="step-item"><span className="step-number">02</span><div><h3>Explore potential matches</h3><p>Review available options alongside historical cutoff references when verified data is available.</p></div></div>
          <div className="step-item"><span className="step-number">03</span><div><h3>Build your shortlist</h3><p>Compare colleges, do your research and prepare your choices for counselling.</p></div></div>
        </div>
      </div>
    </section>

    <section className="featured-section section-pad">
      <div className="container"><div className="section-title-row"><SectionHeading eyebrow="COLLEGE DISCOVERY" title="Explore a few possibilities" description="A preview of how college options can be presented. Records below are illustrative demo data."/><Link href="/colleges" className="button button-ghost">View all colleges <ArrowRight size={16}/></Link></div>
        <div className="college-grid">{colleges.slice(0, 3).map(college => <CollegeCard key={college.id} college={college}/>)}</div>
      </div>
    </section>

    <section className="feature-band section-pad"><div className="container feature-band-inner"><div className="feature-band-icon"><BookOpenCheck size={27}/></div><div><span className="eyebrow">COUNSELLING SUPPORT</span><h2>Preparation goes beyond a prediction.</h2><p>Understand the counselling process, keep documents in order and refer to official notifications before making decisions.</p></div><Link href="/counselling-guide" className="button button-white">Read the guide <ArrowRight size={16}/></Link></div></section>

    <section className="faq-section section-pad"><div className="container faq-grid"><div><SectionHeading eyebrow="GOOD TO KNOW" title="Questions, answered." description="A few things to understand before using a college predictor."/><Link href="/counselling-guide" className="text-link">Read the counselling guide <ArrowRight size={15}/></Link></div><div className="faq-list">
      <details><summary>Does a prediction guarantee admission?</summary><p>No. Predictions are estimates only. Actual admission depends on official rules, eligibility, seat availability, preferences and counselling outcomes.</p></details>
      <details><summary>What details should I have ready?</summary><p>Your NEET PG rank, category, preferred course, and relevant quota or state preferences are useful starting points.</p></details>
      <details><summary>Are cutoff ranks official?</summary><p>Only records sourced from verified official or otherwise reliable datasets should be treated as historical references. Demo entries on this starter site are not official data.</p></details>
      <details><summary>Where can I check official updates?</summary><p>Use the official counselling authority websites and current information bulletins. Visit our counselling guide for a starting checklist.</p></details>
    </div></div></section>

    <section className="final-cta"><div className="container final-cta-inner"><div><span className="eyebrow eyebrow-light">YOUR JOURNEY, YOUR CHOICES</span><h2>Make your next step a more informed one.</h2><p>Start exploring college options and build a counselling shortlist that reflects your preferences.</p></div><Link href="/signup" className="button button-white button-large">Get started for free <ArrowRight size={17}/></Link></div></section>
  </>;
}
