import Link from "next/link";
import { disciplineMeta, projects } from "@/src/data/projects";

export default function WorkPage() {
  return (
    <main className="inner-page" id="top">
      <section className="discipline-hero">
        <p className="hand-note">The plot thickens.</p>
        <h1>Explore the World</h1>
        <p>All the disciplines in one place: art, design, motion, digital media, photography, film and the experiments in between.</p>
      </section>
      <section className="project-grid project-grid--wide">
        {projects.map((project) => {
          const meta = disciplineMeta[project.discipline];
          return (
            <Link className="project-card" key={project.slug} href={`${meta.href}/${project.slug}`}>
              <span>{meta.title} · {project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <b>Open case file</b>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
