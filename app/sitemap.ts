import type { MetadataRoute } from "next";
import { disciplineMeta, projects } from "@/src/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tysworld.example";
  const staticRoutes = [
    "",
    "/about",
    "/art",
    "/graphic-design",
    "/3d-animation",
    "/digital-media",
    "/photography-film",
    "/book-ty-time",
    "/links",
    "/work",
  ];
  const projectRoutes = projects.map((project) => {
    const meta = disciplineMeta[project.discipline];
    return `${meta.href}/${project.slug}`;
  });

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
