import { cacheLife } from "next/cache";
import Link from "next/link";
import { Activity, ArrowUpRight } from "lucide-react";

export  function Footer() {
  
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand brand-light"><span className="brand-mark"><Activity size={21} /></span><span>Med<span>Predict</span></span></Link>
          <p>A clearer way to explore your NEET PG college options and prepare for counselling.</p>
        </div>
        <div><h4>Explore</h4><Link href="/predictor">College Predictor</Link><Link href="/colleges">Explore Colleges</Link><Link href="/counselling-guide">Counselling Guide</Link></div>
        <div><h4>Company</h4><Link href="/about">About us</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy policy</Link></div>
        <div><h4>Important</h4><Link href="/terms">Terms of use</Link><Link href="/disclaimer">Disclaimer</Link><a href="https://mcc.nic.in/" target="_blank" rel="noreferrer">MCC official site <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} MedPredict. All rights reserved.</span><span>Built to help students make informed choices.</span></div>
    </footer>
  );
}
