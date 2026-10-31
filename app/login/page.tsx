"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Eye, EyeOff, ArrowLeft, Activity, GraduationCap, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(""); setNotice("");
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") || "");
    const password = String(data.get("password") || "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Enter a valid email address.");
    if (password.length < 8) return setError("Password must be at least 8 characters.");
    setNotice("Frontend demo only — connect your authentication API to sign in.");
  }
  return <section className="auth-page"><div className="container auth-shell">
    <div className="auth-story"><Link href="/" className="brand"><span className="brand-mark"><Activity size={21}/></span><span>Med<span>Predict</span></span></Link><Link href="/" className="back-link"><ArrowLeft size={15}/> Back to home</Link><div className="auth-story-content"><span className="eyebrow">WELCOME BACK</span><h1>Your NEET PG journey starts here.</h1><p>Pick up where you left off and keep your college exploration organized.</p><div className="auth-illustration"><div className="illustration-circle"><GraduationCap size={62}/></div><div className="mini-float mini-float-a"><ShieldCheck size={17}/> Your plan, your pace</div><div className="mini-float mini-float-b">✦ &nbsp; Explore possibilities</div></div></div><div className="auth-story-bottom">A clearer path to informed choices.</div></div>
    <div className="auth-form-side"><form className="auth-card" onSubmit={submit} noValidate><div className="form-heading"><span className="eyebrow">YOUR ACCOUNT</span><h2>Log in to MedPredict</h2><p>Welcome back. Enter your details to continue.</p></div>
      {error && <div className="form-alert error-alert" role="alert">{error}</div>}{notice && <div className="form-alert success-alert" role="status">{notice}</div>}
      <label className="field-label">Email address<input type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></label>
      <label className="field-label">Password<div className="password-wrap"><input type={show ? "text" : "password"} name="password" placeholder="At least 8 characters" autoComplete="current-password" required/><button type="button" className="password-toggle" onClick={() => setShow(!show)} aria-label={show ? "Hide password" : "Show password"}>{show ? <EyeOff size={17}/> : <Eye size={17}/>}</button></div></label>
      <div className="form-options"><label className="check-label"><input type="checkbox" name="remember"/> Remember me</label><Link href="/contact" className="text-link">Forgot password?</Link></div>
      <button className="button button-primary button-full" type="submit">Log in</button>
      <div className="auth-divider"><span>or</span></div><button type="button" className="button button-google button-full" onClick={() => setNotice("Google sign-in needs OAuth configuration.")}><span className="google-g">G</span> Continue with Google</button>
      <p className="auth-switch">Don't have an account? <Link href="/signup">Sign up</Link></p>
    </form></div>
  </div></section>;
}
