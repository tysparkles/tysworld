import { notFound } from "next/navigation";
import { ProjectDetailLayout } from "@/src/components/ProjectDetailLayout";
import { getProject, getProjectsByDiscipline } from "@/src/data/projects";

export function generateStaticParams() {
  return getProjectsByDiscipline("digital-media").map((project) => ({ slug: project.slug }));
}

export default async function DigitalMediaProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject("digital-media", slug);
  if (!project) notFound();
  return <ProjectDetailLayout project={project} />;
}
