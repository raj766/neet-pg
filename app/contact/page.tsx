"use client";
import { FormEvent, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
export default function ContactPage() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  return <div className="page-shell"><section className="page-hero"><div className="container page-hero-inner"><div><span className="eyebrow">WE’RE HERE TO HELP</span><h1>Contact us</h1><p>Send a message about the platform or share feedback on your experience.</p></div><div className="page-hero-art"><MessageCircle size={48}/></div></div></section><section className="container contact-layout"><div><h2>Get in touch</h2><p className="muted">This form is a frontend demo. Connect it to your email service or backend to receive messages.</p><div className="contact-detail"><Mail size={19}/><div><strong>Email support</strong><span>Configure your official support email before launch.</span></div></div></div><form className="surface-card contact-form" onSubmit={submit}><label className="field-label">Your name<input required placeholder="Full name"/></label><label className="field-label">Email address<input required type="email" placeholder="you@example.com"/></label><label className="field-label">Message<textarea required rows={5} placeholder="How can we help?"/></label>{sent && <div className="form-alert success-alert">Demo form submitted. No message has been sent to a server.</div>}<button className="button button-primary button-full">Send message</button></form></section></div>;
}
