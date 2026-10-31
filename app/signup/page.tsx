"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Eye, EyeOff, ArrowLeft, Activity, GraduationCap } from "lucide-react";

export default function SignupPage() {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(""); setNotice("");
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") || "").trim();
    const email = String(d.get("email") || "");
    const mobile = String(d.get("mobile") || "").trim();
    const password = String(d.get("password") || "");
    const confirm = String(d.get("confirm") || "");
    if (name.length < 2) return setError("Please enter your full name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Enter a valid email address.");
    if (mobile.replace(/\D/g, "").length < 10) return setError("Enter a valid mobile number.");
    if (password.length < 8) return setError("Password must be at least 8 characters.");
    if (password !== confirm) return setError("Passwords do not match.");
    if (!d.get("terms")) return setError("Please accept the Terms and Privacy Policy.");
    setNotice("Frontend demo only — connect your signup API to create an account.");
  }
  return <section className="auth-page signup-page"><div className="container auth-shell signup-shell">
    <div className="auth-story"><Link href="/" className="brand"><span className="brand-mark"><Activity size={21}/></span><span>Med<span>Predict</span></span></Link><Link href="/" className="back-link"><ArrowLeft size={15}/> Back to home</Link><div className="auth-story-content"><span className="eyebrow">PLAN WITH CONFIDENCE</span><h1>Build a clearer picture of your options.</h1><p>Create an account to get ready for personalized college exploration and shortlist tools.</p><div className="auth-illustration signup-illustration"><div className="illustration-circle"><GraduationCap size={62}/></div><div className="mini-float mini-float-a">✓ &nbsp; Keep your preferences together</div><div className="mini-float mini-float-b">✦ &nbsp; Start exploring</div></div></div><div className="auth-story-bottom">Your future deserves thoughtful planning.</div></div>
    <div className="auth-form-side"><form className="auth-card signup-card" onSubmit={submit} noValidate><div className="form-heading"><span className="eyebrow">GET STARTED</span><h2>Create your account</h2><p>Enter your details to start exploring.</p></div>
      {error && <div className="form-alert error-alert" role="alert">{error}</div>}{notice && <div className="form-alert success-alert" role="status">{notice}</div>}
      <label className="field-label">Full name<input name="name" placeholder="Enter your full name" autoComplete="name" required/></label>
      <label className="field-label">Email address<input type="email" name="email" placeholder="you@example.com" autoComplete="email" required/></label>
      <label className="field-label">Mobile number<input type="tel" name="mobile" placeholder="+91 98765 43210" autoComplete="tel" required/></label>
      <div className="form-two-col"><label className="field-label">Password<div className="password-wrap"><input type={show ? "text" : "password"} name="password" placeholder="Min. 8 characters" autoComplete="new-password" required/><button type="button" className="password-toggle" onClick={() => setShow(!show)} aria-label={show ? "Hide password" : "Show password"}>{show ? <EyeOff size={16}/> : <Eye size={16}/>}</button></div></label>
      <label className="field-label">Confirm password<div className="password-wrap"><input type={showConfirm ? "text" : "password"} name="confirm" placeholder="Re-enter password" autoComplete="new-password" required/><button type="button" className="password-toggle" onClick={() => setShowConfirm(!showConfirm)} aria-label={showConfirm ? "Hide password" : "Show password"}>{showConfirm ? <EyeOff size={16}/> : <Eye size={16}/>}</button></div></label></div>
      <div className="form-two-col"><label className="field-label">NEET PG year<select name="year" defaultValue=""><option value="">Select year</option><option>2024</option><option>2025</option><option>2026</option><option>2027</option></select></label><label className="field-label">Preferred course <span className="optional">(optional)</span><select name="course" defaultValue=""><option value="">Select course</option><option>MD General Medicine</option><option>MD Paediatrics</option><option>MD Radiodiagnosis</option><option>MS General Surgery</option><option>Other</option></select></label></div>
      <label className="check-label terms-check"><input type="checkbox" name="terms"/> <span>I agree to the <Link href="/terms">Terms</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.</span></label>
      <button className="button button-primary button-full" type="submit">Create account</button>
      <div className="auth-divider"><span>or</span></div><button type="button" className="button button-google button-full" onClick={() => setNotice("Google sign-up needs OAuth configuration.")}><span className="google-g">G</span> Continue with Google</button>
      <p className="auth-switch">Already have an account? <Link href="/login">Log in</Link></p>
    </form></div>
  </div></section>;
}
