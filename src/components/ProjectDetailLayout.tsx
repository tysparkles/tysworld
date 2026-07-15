import Link from "next/link";
import { disciplineMeta, projects, type Project } from "@/src/data/projects";

export function ProjectDetailLayout({ project }: { project: Project }) {
  const meta = disciplineMeta[project.discipline];
  const siblings = projects.filter((item) => item.discipline === project.discipline);
  const index = siblings.findIndex((item) => item.slug === project.slug);
  const next = siblings[(index + 1) % siblings.length];

  return (
    <main className="inner-page" id="top">
      <article className="project-detail">
        <Link className="breadcrumb" href={meta.href}>
          Return to {meta.title}
        </Link>
        <header>
          <p className="hand-note">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </header>
        <section className="detail-spread" aria-label="Project details">
          <div>
            <h2>What they asked for.</h2>
            <p>{project.brief}</p>
          </div>
          <div>
            <h2>What was not working.</h2>
            <p>{project.challenge}</p>
          </div>
          <div>
            <h2>Someone had to fix it.</h2>
            <p>{project.concept}</p>
          </div>
          <div>
            <h2>It was always going to be me.</h2>
            <p>{project.outcome}</p>
          </div>
        </section>
        <section className="project-meta-grid">
          <div>
            <h2>Role</h2>
            <p>{project.role}</p>
          </div>
          <div>
            <h2>Deliverables</h2>
            <ul>{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h2>Tools</h2>
            <ul>{project.tools.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h2>Project notes</h2>
            <p>{project.client} · {project.date}</p>
            {project.medium ? <p>{project.medium}</p> : null}
            {project.dimensions ? <p>{project.dimensions}</p> : null}
            {project.availability ? <p>{project.availability}</p> : null}
          </div>
        </section>
        <section className="process-path">
          <h2>There were forces at play.</h2>
          <ol>{project.process.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>
        <section className="placeholder-gallery">
          <div>Hero image placeholder</div>
          <div>Process image placeholder</div>
          <div>Final image / video placeholder</div>
        </section>
        {project.testimonial ? <blockquote>{project.testimonial}</blockquote> : null}
        <nav className="project-next" aria-label="Project navigation">
          <Link href="/book-ty-time">Book Ty Time</Link>
          <Link href={`${meta.href}/${next.slug}`}>Who else are we looking at?</Link>
        </nav>
      </article>
    </main>
  );
}
