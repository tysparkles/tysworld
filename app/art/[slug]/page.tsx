import { notFound } from "next/navigation";
import { ProjectDetailLayout } from "@/src/components/ProjectDetailLayout";
import { getProject, getProjectsByDiscipline } from "@/src/data/projects";

export function generateStaticParams() {
  return getProjectsByDiscipline("art").map((project) => ({ slug: project.slug }));
}

export default async function ArtProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject("art", slug);
  if (!project) notFound();
  return <ProjectDetailLayout project={project} />;
}
