import Link from "next/link";

export default function NotFound() {
  return <main id="main" className="shell not-found"><p className="eyebrow">A WRONG TURN IN THE LAB</p><h1>This page wandered off.</h1><p>Let’s get you back to the useful stuff.</p><Link className="button button--primary" href="/">Back home <span aria-hidden="true">→</span></Link></main>;
}
