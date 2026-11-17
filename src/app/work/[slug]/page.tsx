import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectArtwork } from "@/components/Artwork";
import { ArrowIcon } from "@/components/SiteChrome";
import { getProject, projects, type Project } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

type Story = {
  problem: string;
  approach: string[];
  workflow: [string, string, string];
  outcome: string;
  impactNote?: string;
  sourceUrl?: string;
  methods?: string[];
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary, openGraph: { title: `${project.title} — Rodrigo Figueiredo`, description: project.summary } };
}

/** Problem, approach, flow and outcome. In a multi-part case study these sit under the part's h2, so they use h3. */
function StorySections({ story, idPrefix, Heading }: { story: Story; idPrefix: string; Heading: "h2" | "h3" }) {
  const id = (name: string) => `${idPrefix}${name}-title`;
  return (
    <>
      <section className="case-section" aria-labelledby={id("problem")}><div className="case-section__aside"><span className="detail-label">01 / THE PROBLEM</span><span className="aside-decoration" aria-hidden="true">✳</span></div><div><Heading id={id("problem")}>Start with the work.</Heading><p>{story.problem}</p></div></section>
      <section className="case-section" aria-labelledby={id("approach")}><div className="case-section__aside"><span className="detail-label">02 / THE APPROACH</span><span className="aside-decoration" aria-hidden="true">↗</span></div><div><Heading id={id("approach")}>Shape a useful path.</Heading><ol className="approach-list">{story.approach.map((step, i) => <li key={step}><span>0{i + 1}</span><p>{step}</p></li>)}</ol></div></section>
      <section className="case-section case-section--workflow" aria-labelledby={id("workflow")}><div className="case-section__aside"><span className="detail-label">THE FLOW</span></div><div><Heading id={id("workflow")}>From friction to flow.</Heading><div className="flow-diagram" aria-label={story.workflow.join(" to ")}>{story.workflow.map((step, i) => <div className="flow-step" key={step}><span className="flow-step__index">0{i + 1}</span><strong>{step}</strong>{i < 2 && <span className="flow-step__arrow" aria-hidden="true">→</span>}</div>)}</div><p className="diagram-caption">Simplified illustration using example labels.</p></div></section>
      <section className="case-section" aria-labelledby={id("outcome")}><div className="case-section__aside"><span className="detail-label">03 / THE OUTCOME</span><span className="aside-decoration" aria-hidden="true">✓</span></div><div><Heading id={id("outcome")}>What changed.</Heading><p>{story.outcome}</p>{story.impactNote && <p className="case-note">{story.impactNote} {story.sourceUrl && <a href={story.sourceUrl} target="_blank" rel="noopener noreferrer">View the public description <span aria-hidden="true">↗</span></a>}</p>}{story.methods && <div className="method-tags">{story.methods.map((method) => <span key={method}>{method}</span>)}</div>}</div></section>
    </>
  );
}

function CaseBody({ project }: { project: Project }) {
  if (!("parts" in project)) {
    return <StorySections story={project} idPrefix="" Heading="h2" />;
  }
  return (
    <>
      <nav className="case-parts-nav" aria-label="Parts of this case study">
        {project.parts.map((part, i) => (
          <a key={part.id} href={`#${part.id}`}>
            <span className="detail-label">PART 0{i + 1}</span>
            <strong>{part.title}</strong>
            <span>{part.intro}</span>
          </a>
        ))}
      </nav>
      {project.parts.map((part, i) => (
        <article className="case-part" id={part.id} key={part.id} aria-labelledby={`${part.id}-title`}>
          <header className="case-part__header">
            <div className="case-section__aside"><span className="detail-label">PART 0{i + 1} / 0{project.parts.length}</span></div>
            <div>
              <h2 id={`${part.id}-title`}>{part.title}<span className="heading-period">.</span></h2>
              <p className="case-part__intro">{part.intro}</p>
              <div className="case-part__signal"><strong>{part.signal}</strong><span>{part.signalLabel}</span></div>
            </div>
          </header>
          <StorySections story={part} idPrefix={`${part.id}-`} Heading="h3" />
        </article>
      ))}
    </>
  );
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];
  const hasParts = "parts" in project;

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
        <CaseBody project={project} />
        <section className="case-section" aria-labelledby="learning-title"><div className="case-section__aside"><span className="detail-label">{hasParts ? "THE LEARNING" : "04 / THE LEARNING"}</span></div><div><h2 id="learning-title">What stayed with me.</h2><p>{project.learning}</p>{!hasParts && <div className="method-tags">{project.methods.map((method) => <span key={method}>{method}</span>)}</div>}</div></section>
      </div>
      <section className="case-next"><div className="shell"><p className="eyebrow">KEEP EXPLORING</p><Link href={`/work/${nextProject.slug}/`}><span>Next project</span><strong>{nextProject.title}</strong><span className="case-next__arrow"><ArrowIcon diagonal /></span></Link></div></section>
    </main>
  );
}
