import Link from "next/link";
import { disciplineMeta, getProjectsByDiscipline, type Discipline } from "@/src/data/projects";

export function DisciplinePage({ discipline }: { discipline: Discipline }) {
  const meta = disciplineMeta[discipline];
  const projects = getProjectsByDiscipline(discipline);

  return (
    <main className="inner-page" id="top">
      <section className="discipline-hero">
        <p className="hand-note">{meta.kicker}</p>
        <h1>{meta.title}</h1>
        <p>{meta.intro}</p>
        <div className="category-row">
          {meta.categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </section>
      <section className="work-table" aria-label={`${meta.title} projects`}>
        <div className="table-note">
          <h2>{meta.texture}</h2>
          <p>Filter controls and real media slots are ready for Ty&apos;s final artwork. For now, the placeholders show the case-study structure.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link className="project-card" key={project.slug} href={`${meta.href}/${project.slug}`}>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <b>Who else are we looking at?</b>
            </Link>
          ))}
        </div>
      </section>
      <section className="commission-strip">
        <p className="hand-note">Someone had to fix it.</p>
        <h2>Need this kind of thing?</h2>
        <Link href="/book-ty-time">Book Ty Time</Link>
      </section>
    </main>
  );
}
