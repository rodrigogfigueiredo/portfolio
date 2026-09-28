import Link from "next/link";
import { ArrowIcon } from "@/components/SiteChrome";
import { LabArtwork, ProjectArtwork } from "@/components/Artwork";
import { projects } from "@/content/projects";
import { education, experience, technicalFocus } from "@/content/profile";

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero section-grid" aria-labelledby="hero-title">
        <div className="shell hero__grid">
          <div className="hero__copy">
            <div className="eyebrow"><span className="eyebrow__line" /> GENAI ENGINEER · PORTO, PORTUGAL</div>
            <h1 id="hero-title">Human problems.<br /><span>Useful systems.</span></h1>
            <p className="hero__intro">I’m Rodrigo, a GenAI Engineer at DEUS. I build computer vision and generative AI systems that make sense of real-world content, and thoughtful software for everyday work.</p>
            <div className="hero__actions">
              <Link className="button button--primary" href="/#work">Explore my work <ArrowIcon /></Link>
              <a className="text-link" href="mailto:rodrigofigueiredo.hq@gmail.com">Say hello <ArrowIcon diagonal /></a>
            </div>
            <div className="hero__footnote"><span className="pulse-dot" /> Curious about what happens when good engineering meets everyday life.</div>
          </div>
          <LabArtwork />
        </div>
        <div className="shell hero__bottom"><span>SCROLL TO EXPLORE</span><span className="hero__bottom-line" /><span>01 / {String(projects.length).padStart(2, "0")}</span></div>
      </section>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">01 — SELECTED WORK</p><h2 id="work-title">Built for real life<span className="heading-period">.</span></h2></div>
            <p>Different problems, the same instinct: understand the work, make something useful, and measure what changed.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <Link className={`project-card project-card--${project.slug} ${index < 2 ? "project-card--featured" : ""}`} key={project.slug} href={`/work/${project.slug}/`} aria-label={`Read the ${project.title} case study`}>
                <div className="project-card__art"><ProjectArtwork slug={project.slug} /></div>
                <div className="project-card__body">
                  <div className="project-card__meta"><span>{project.number} / {project.category}</span><span className="round-arrow"><ArrowIcon diagonal /></span></div>
                  <h3>{project.title}</h3>
                  <p>{project.cardLine}</p>
                  <div className="project-card__signal"><strong>{project.signal}</strong><span>{project.signalLabel}</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="shell about-layout">
          <div className="about-intro"><p className="eyebrow">02 — ABOUT THE HUMAN</p><h2 id="about-title">I like the space between <em>what is</em> and <em>what could be.</em></h2></div>
          <div className="about-content">
            <p className="about-lead">I’m a GenAI Engineer at DEUS, currently working on Influencer Monitor. I hold an MSc in Artificial Intelligence and a BSc in Computer Science and Engineering from FEUP.</p>
            <p>My current work brings together computer vision, multimodal models, and Azure to detect logos and identify brands in social media. Before that, I built ATLaS for my master’s dissertation: a platform for automated talent profiles and grounded conversational search.</p>
            <p>I care about the full journey from understanding a problem to making a product people can rely on, whether that means careful AI evaluation or a clearer way to manage everyday work.</p>
            <div className="about-notes">
              <div><span className="note-icon" aria-hidden="true">♫</span><span>Made of music</span></div>
              <div><span className="note-icon note-icon--puzzle" aria-hidden="true">✳</span><span>And cool puzzles</span></div>
            </div>
          </div>
        </div>
        <div className="shell background-grid">
          <div>
            <h3 className="background-title">Experience</h3>
            <ol className="experience-list">
              {experience.slice(0, 2).map((item) => (
                <li key={`${item.organisation}-${item.role}`}>
                  <span className="background-period">{item.period}</span>
                  <h4>{item.role} <span>at {item.organisation}</span></h4>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
            <details className="earlier-experience">
              <summary>Earlier chapters <span aria-hidden="true">+</span></summary>
              <ol className="experience-list">
                {experience.slice(2).map((item) => (
                  <li key={`${item.organisation}-${item.role}`}>
                    <span className="background-period">{item.period}</span>
                    <h4>{item.role} <span>at {item.organisation}</span></h4>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ol>
            </details>
          </div>
          <div className="background-aside">
            <div>
              <h3 className="background-title">Education</h3>
              <ul className="education-list">
                {education.map((item) => (
                  <li key={item.degree}><span className="background-period">{item.period}</span><h4>{item.degree}</h4><p>{item.institution}</p></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="background-title">Technical focus</h3>
              <div className="method-tags">{technicalFocus.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section method-section" aria-labelledby="method-title">
        <div className="shell">
          <div className="section-heading section-heading--tight"><div><p className="eyebrow">03 — HOW I WORK</p><h2 id="method-title">A little method to the curiosity<span className="heading-period">.</span></h2></div></div>
          <div className="method-grid">
            <article className="method-card"><span className="method-card__number">01 / LISTEN</span><span className="method-card__glyph" aria-hidden="true">◌</span><h3>Find the real friction</h3><p>Start with the people and the workflow. The useful problem is often hiding behind the first request.</p></article>
            <article className="method-card"><span className="method-card__number">02 / MAKE</span><span className="method-card__glyph" aria-hidden="true">✳</span><h3>Build for trust</h3><p>Shape clear interfaces and dependable systems, with checks where mistakes would cost someone time.</p></article>
            <article className="method-card"><span className="method-card__number">03 / LEARN</span><span className="method-card__glyph" aria-hidden="true">↗</span><h3>Look for the change</h3><p>Evaluate the result in the context of real work, then keep refining what matters.</p></article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="shell contact-layout">
          <div><p className="eyebrow">04 — LET’S CONNECT</p><h2 id="contact-title">Have an interesting problem?<br /><em>Let’s talk.</em></h2><p>I’m always up for a thoughtful conversation about AI, useful products, or a good puzzle.</p></div>
          <div className="contact-actions"><a className="button button--light" href="mailto:rodrigofigueiredo.hq@gmail.com">Email me <ArrowIcon diagonal /></a><a className="contact-social" href="https://www.linkedin.com/in/rodrigo-goncalves-figueiredo/" target="_blank" rel="noopener noreferrer">Find me on LinkedIn <ArrowIcon diagonal /></a></div>
        </div>
      </section>
    </main>
  );
}
