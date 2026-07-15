import { notFound } from "next/navigation";
import { ProjectDetailLayout } from "@/src/components/ProjectDetailLayout";
import { getProject, getProjectsByDiscipline } from "@/src/data/projects";

export function generateStaticParams() {
  return getProjectsByDiscipline("3d-animation").map((project) => ({ slug: project.slug }));
}

export default async function ThreeDAnimationProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject("3d-animation", slug);
  if (!project) notFound();
  return <ProjectDetailLayout project={project} />;
}
