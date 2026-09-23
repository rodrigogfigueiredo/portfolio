import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="shell site-header__inner">
          <Link className="brand" href="/" aria-label="Rodrigo Figueiredo, home">
            <span className="brand__mark" aria-hidden="true">r.f<span className="brand__dot">.</span></span>
            <span className="brand__name">Rodrigo Figueiredo</span>
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/#work">Work</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <span className="footer-signature">r.f<span>.</span></span>
          <p>Built with curiosity. Made of music and cool puzzles.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:rodrigofigueiredo.hq@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/rodrigo-goncalves-figueiredo/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      {diagonal ? (
        <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}
