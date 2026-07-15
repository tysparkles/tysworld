import { notFound } from "next/navigation";
import { ProjectDetailLayout } from "@/src/components/ProjectDetailLayout";
import { getProject, getProjectsByDiscipline } from "@/src/data/projects";

export function generateStaticParams() {
  return getProjectsByDiscipline("graphic-design").map((project) => ({ slug: project.slug }));
}

export default async function GraphicDesignProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject("graphic-design", slug);
  if (!project) notFound();
  return <ProjectDetailLayout project={project} />;
}
