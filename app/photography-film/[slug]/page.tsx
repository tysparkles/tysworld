import { notFound } from "next/navigation";
import { ProjectDetailLayout } from "@/src/components/ProjectDetailLayout";
import { getProject, getProjectsByDiscipline } from "@/src/data/projects";

export function generateStaticParams() {
  return getProjectsByDiscipline("photography-film").map((project) => ({ slug: project.slug }));
}

export default async function PhotographyFilmProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject("photography-film", slug);
  if (!project) notFound();
  return <ProjectDetailLayout project={project} />;
}
