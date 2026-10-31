"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Activity } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/predictor", label: "College Predictor" },
  { href: "/colleges", label: "Explore Colleges" },
  { href: "/counselling-guide", label: "Counselling Guide" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="MedPredict home" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Activity size={21} strokeWidth={2.7} /></span>
          <span>Med<span>Predict</span></span>
        </Link>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={pathname === link.href ? "nav-link active" : "nav-link"}>{link.label}</Link>)}
          <Link href="/about" className="nav-link" onClick={() => setOpen(false)}>About</Link>
          <div className="nav-actions">
            <Link href="/login" className="button button-ghost button-small">Log in</Link>
            <Link href="/signup" className="button button-primary button-small">Get started</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
