export type Discipline =
  | "art"
  | "graphic-design"
  | "3d-animation"
  | "digital-media"
  | "photography-film";

export type Project = {
  title: string;
  slug: string;
  discipline: Discipline;
  category: string;
  client: string;
  date: string;
  summary: string;
  role: string;
  deliverables: string[];
  tools: string[];
  medium?: string;
  dimensions?: string;
  availability?: string;
  brief: string;
  challenge: string;
  concept: string;
  outcome: string;
  process: string[];
  testimonial?: string;
};

export const disciplineMeta: Record<
  Discipline,
  {
    title: string;
    href: string;
    kicker: string;
    intro: string;
    texture: string;
    categories: string[];
  }
> = {
  art: {
    title: "Art",
    href: "/art",
    kicker: "studio wall",
    intro: "Oil pastel, acrylic, portraits, pet portraits, murals, textured work and experiments that would not sit still.",
    texture: "Paint on paper, taped corners, process scraps, visible hand.",
    categories: ["Oil pastel", "Acrylic", "Portraits", "Pet portraits", "Murals", "Commissions"],
  },
  "graphic-design": {
    title: "Graphic Design",
    href: "/graphic-design",
    kicker: "proof stack",
    intro: "Brand identities, logos, typography, menus, posters, packaging, social systems and creative direction.",
    texture: "Printed sheets, folded brand books, annotated proofs, swatch decisions.",
    categories: ["Brand identity", "Logo design", "Typography", "Editorial", "Hospitality", "Packaging"],
  },
  "3d-animation": {
    title: "3D + Animation",
    href: "/3d-animation",
    kicker: "storyboard lab",
    intro: "Blender studies, motion graphics, 2D animation, animated illustration, storyboards and strange little environments.",
    texture: "Wireframes, frames, loops, motion arrows, dream laboratory notes.",
    categories: ["Blender", "3D art", "Motion graphics", "2D animation", "Storyboards", "Experiments"],
  },
  "digital-media": {
    title: "Digital Media",
    href: "/digital-media",
    kicker: "screen print",
    intro: "Websites, UI/UX, interactive experiences, apps, product concepts, digital campaigns and creative technology.",
    texture: "Browser-window sketches, printed wireframes, phone frames, cursor marks.",
    categories: ["Websites", "UI/UX", "Apps", "Interactive", "Creative tech", "Social systems"],
  },
  "photography-film": {
    title: "Photography + Film",
    href: "/photography-film",
    kicker: "contact sheet",
    intro: "Portraits, creative shoots, fashion, art direction, behind the scenes, videography and visual diaries.",
    texture: "Polaroids, contact sheets, marker circles, shot lists and production notes.",
    categories: ["Portraits", "Creative shoots", "Fashion", "Videography", "Campaign films", "Visual diaries"],
  },
};

export const projects: Project[] = [
  {
    title: "Pet Portrait Studies",
    slug: "pet-portrait-studies",
    discipline: "art",
    category: "Pet portraits",
    client: "Personal commission system",
    date: "2026",
    summary: "A replaceable project slot for expressive pet portraits with process scans, final art and commission notes.",
    role: "Artist, texture obsessive, expression translator",
    deliverables: ["Portrait artwork", "Process photos", "Print-ready file", "Commission handoff"],
    tools: ["Oil pastel", "Acrylic", "Pencil", "Scanner"],
    medium: "Oil pastel and acrylic on paper",
    dimensions: "Variable",
    availability: "Open for commissions",
    brief: "Create pet portraits that feel emotional without turning into generic cute wall art.",
    challenge: "Keep the likeness, the texture and the personality all visible at once.",
    concept: "Treat each pet like the main character. Because, frankly, they are.",
    outcome: "A commission-ready structure for final images, process details and client stories.",
    process: ["Reference review", "Expression sketch", "Colour study", "Final textured artwork"],
    testimonial: "The ops are crying. Respectfully.",
  },
  {
    title: "Hospitality Brand Kit",
    slug: "hospitality-brand-kit",
    discipline: "graphic-design",
    category: "Brand identity",
    client: "Editable client placeholder",
    date: "2026",
    summary: "A brand system template for restaurants, cafes and cultural spaces, adapted from earlier professional design concepts without the old public names.",
    role: "Brand designer, logo developer, typography menace",
    deliverables: ["Logo system", "Colour palette", "Menu direction", "Social templates", "Mini guidelines"],
    tools: ["Illustrator", "Photoshop", "Figma"],
    brief: "Make the place feel specific before anyone reads the menu.",
    challenge: "Hospitality brands can get samey very quickly. Someone had to fix it.",
    concept: "A tactile identity with printed matter, expressive type and small details that feel collected, not downloaded.",
    outcome: "A complete case-study structure ready for client visuals and outcomes.",
    process: ["Research", "Logo sketches", "Type tests", "Applications", "Guideline delivery"],
  },
  {
    title: "Dream Room Loop",
    slug: "dream-room-loop",
    discipline: "3d-animation",
    category: "3D art",
    client: "Personal experiment",
    date: "2026",
    summary: "A future-ready project template for Blender rooms, animated interiors and short motion loops.",
    role: "3D artist, animator, atmosphere instigator",
    deliverables: ["Looping preview", "Still renders", "Wireframe views", "Technique notes"],
    tools: ["Blender", "After Effects", "Premiere"],
    brief: "Build a room that feels like a thought, then make it move.",
    challenge: "Keep the image dreamy without losing the construction logic.",
    concept: "Storyboard wall meets strange dream laboratory.",
    outcome: "A detail page prepared for video embeds, still frames and process renders.",
    process: ["Moodboard", "Blockout", "Materials", "Lighting", "Loop test"],
  },
  {
    title: "World-Building Website System",
    slug: "world-building-website-system",
    discipline: "digital-media",
    category: "Websites",
    client: "Personal platform",
    date: "2026",
    summary: "A website and content system built to hold art, services, case studies, links and future obsessions without becoming a corporate template.",
    role: "Creative director, UI designer, digital builder",
    deliverables: ["Sitemap", "Responsive UI", "Content system", "Booking flow", "SEO setup"],
    tools: ["Next.js", "TypeScript", "CSS", "Figma"],
    brief: "Make a portfolio feel like a world while keeping the doors clearly labeled.",
    challenge: "Expressive sites love to become unreadable. The game is rigged, but we can still win.",
    concept: "A scrapbook interface with portals, notes, taped objects and practical route structure underneath.",
    outcome: "A reusable framework for Ty's personal creative world.",
    process: ["Content map", "Component system", "Homepage composition", "Route templates", "Build validation"],
  },
  {
    title: "Visual Diary Shoot",
    slug: "visual-diary-shoot",
    discipline: "photography-film",
    category: "Creative shoots",
    client: "Editorial placeholder",
    date: "2026",
    summary: "A photography and film case-study slot for portraits, fashion details, BTS, shot lists and final galleries.",
    role: "Creative direction, photography, editing",
    deliverables: ["Moodboard", "Shot list", "Portrait gallery", "Short-form edit", "BTS stills"],
    tools: ["Camera", "Lightroom", "Premiere", "Notes app"],
    brief: "Make the shoot feel like a page torn out of someone's real life.",
    challenge: "Balance polish with personal evidence.",
    concept: "Contact sheets, circles, production notes and images that feel found on purpose.",
    outcome: "A flexible template for image galleries and video embeds.",
    process: ["Concept", "Styling", "Location", "Shoot", "Edit", "Delivery"],
  },
];

export function getProjectsByDiscipline(discipline: Discipline) {
  return projects.filter((project) => project.discipline === discipline);
}

export function getProject(discipline: Discipline, slug: string) {
  return projects.find((project) => project.discipline === discipline && project.slug === slug);
}
