import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectArtwork } from "@/components/Artwork";
import { ArrowIcon } from "@/components/SiteChrome";
import { getProject, projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary, openGraph: { title: `${project.title} — Rodrigo Figueiredo`, description: project.summary } };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main id="main" className="case-page">
      <div className="shell case-page__back"><Link href="/#work"><span aria-hidden="true">←</span> All projects</Link><span>{project.number} / {String(projects.length).padStart(2, "0")}</span></div>
      <header className={`shell case-hero ${project.slug === "influencer-monitor" ? "case-hero--long-title" : ""}`}>
        <div className="case-hero__heading"><p className="eyebrow">{project.category}</p><h1>{project.title}<span className="heading-period">.</span></h1><p className="case-hero__context">{project.context}</p></div>
        <p className="case-hero__summary">{project.summary}</p>
      </header>
      <div className={`shell case-art case-art--${project.slug}`}><ProjectArtwork slug={project.slug} /><p>Conceptual illustration · no business or employee data shown</p></div>
      <section className="shell case-overview" aria-label="Project at a glance">
        <div><span className="detail-label">THE SIGNAL</span><strong>{project.signal}</strong><p>{project.signalLabel}</p></div>
        <div><span className="detail-label">MY ROLE</span><p>{project.role}</p></div>
      </section>
      <div className="shell case-content">
        <section className="case-section" aria-labelledby="problem-title"><div className="case-section__aside"><span className="detail-label">01 / THE PROBLEM</span><span className="aside-decoration" aria-hidden="true">✳</span></div><div><h2 id="problem-title">Start with the work.</h2><p>{project.problem}</p></div></section>
        <section className="case-section" aria-labelledby="approach-title"><div className="case-section__aside"><span className="detail-label">02 / THE APPROACH</span><span className="aside-decoration" aria-hidden="true">↗</span></div><div><h2 id="approach-title">Shape a useful path.</h2><ol className="approach-list">{project.approach.map((step, i) => <li key={step}><span>0{i + 1}</span><p>{step}</p></li>)}</ol></div></section>
        <section className="case-section case-section--workflow" aria-labelledby="workflow-title"><div className="case-section__aside"><span className="detail-label">THE FLOW</span></div><div><h2 id="workflow-title">From friction to flow.</h2><div className="flow-diagram" aria-label={project.workflow.join(" to ")}>{project.workflow.map((step, i) => <div className="flow-step" key={step}><span className="flow-step__index">0{i + 1}</span><strong>{step}</strong>{i < 2 && <span className="flow-step__arrow" aria-hidden="true">→</span>}</div>)}</div><p className="diagram-caption">Simplified illustration using example labels.</p></div></section>
        <section className="case-section" aria-labelledby="outcome-title"><div className="case-section__aside"><span className="detail-label">03 / THE OUTCOME</span><span className="aside-decoration" aria-hidden="true">✓</span></div><div><h2 id="outcome-title">What changed.</h2><p>{project.outcome}</p>{project.impactNote && <p className="case-note">{project.impactNote} {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">View the public description <span aria-hidden="true">↗</span></a>}</p>}</div></section>
        <section className="case-section" aria-labelledby="learning-title"><div className="case-section__aside"><span className="detail-label">04 / THE LEARNING</span></div><div><h2 id="learning-title">What stayed with me.</h2><p>{project.learning}</p><div className="method-tags">{project.methods.map((method) => <span key={method}>{method}</span>)}</div></div></section>
      </div>
      <section className="case-next"><div className="shell"><p className="eyebrow">KEEP EXPLORING</p><Link href={`/work/${nextProject.slug}/`}><span>Next project</span><strong>{nextProject.title}</strong><span className="case-next__arrow"><ArrowIcon diagonal /></span></Link></div></section>
    </main>
  );
}
