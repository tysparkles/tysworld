export type NavItem = {
  label: string;
  href: string;
};

export type CreativeObject = {
  title: string;
  label: string;
  href: string;
  kind: "paper" | "ticket" | "photo" | "swatch" | "wire" | "note";
  rotate: number;
  x: string;
  y: string;
  color: string;
};

export const navLeft: NavItem[] = [
  { label: "About Ty", href: "/about" },
  { label: "Art", href: "/art" },
  { label: "Graphic Design", href: "/graphic-design" },
  { label: "3D + Animation", href: "/3d-animation" },
];

export const navRight: NavItem[] = [
  { label: "Digital Media", href: "/digital-media" },
  { label: "Photography + Film", href: "/photography-film" },
  { label: "Book Ty Time", href: "/book-ty-time" },
  { label: "Links", href: "/links" },
];

export const allNav = [...navLeft, ...navRight, { label: "Work", href: "/work" }];

export const portals = [
  {
    title: "Explore the World",
    href: "/work",
    eyebrow: "portfolio directory",
    copy: "Art, design and ideas that escaped my brain.",
    tone: "cream",
  },
  {
    title: "Meet Ty",
    href: "/about",
    eyebrow: "artist file",
    copy: "Who is responsible for all this?",
    tone: "lavender",
  },
  {
    title: "Book Ty Time",
    href: "/book-ty-time",
    eyebrow: "appointment slip",
    copy: "Commission me, collaborate with me or make an interesting proposal.",
    tone: "orange",
  },
  {
    title: "Find Ty",
    href: "/links",
    eyebrow: "contact note",
    copy: "Where I exist outside this website.",
    tone: "lined",
  },
];

export const currentFeature = {
  title: "Currently in Ty's World",
  eyebrow: "pinned right now",
  body: "A rotating place for the artwork, obsession, soundtrack, experiment, or business idea currently refusing to leave Ty alone.",
  meta: ["Learning: better motion loops", "Mood: print grain", "Status: Future Ty approved"],
};

export const creativeObjects: CreativeObject[] = [
  {
    title: "Oil pastel box",
    label: "Art",
    href: "/art",
    kind: "swatch",
    rotate: -8,
    x: "7%",
    y: "18%",
    color: "var(--cream)",
  },
  {
    title: "Logo sketch sheet",
    label: "Graphic Design",
    href: "/graphic-design",
    kind: "paper",
    rotate: 5,
    x: "20%",
    y: "35%",
    color: "var(--sage)",
  },
  {
    title: "Storyboard strip",
    label: "3D + Animation",
    href: "/3d-animation",
    kind: "ticket",
    rotate: -3,
    x: "4%",
    y: "55%",
    color: "var(--lavender)",
  },
  {
    title: "Browser sketch",
    label: "Digital Media",
    href: "/digital-media",
    kind: "wire",
    rotate: 7,
    x: "27%",
    y: "66%",
    color: "var(--off-white)",
  },
  {
    title: "Contact sheet",
    label: "Photo + Film",
    href: "/photography-film",
    kind: "photo",
    rotate: -5,
    x: "12%",
    y: "78%",
    color: "var(--paper)",
  },
  {
    title: "Current obsessions",
    label: "Fish / tennis / music / business ideas",
    href: "/work",
    kind: "note",
    rotate: 4,
    x: "33%",
    y: "13%",
    color: "var(--muted-orange)",
  },
];

export const socialLinks = [
  { label: "Instagram", handle: "@tylah.the.creator", href: "https://instagram.com/tylah.the.creator" },
  { label: "TikTok", handle: "@tylah.the.creator", href: "https://www.tiktok.com/@tylah.the.creator" },
  { label: "Pinterest", handle: "Tylah the Creator", href: "https://www.pinterest.com/" },
  { label: "Behance", handle: "Tylah Jade", href: "https://www.behance.net/" },
  { label: "GitHub", handle: "Future Ty Problem", href: "https://github.com/" },
  { label: "Email", handle: "hello@tysworld.example", href: "mailto:hello@tysworld.example" },
];

export const bookingTypes = [
  "Brand identity",
  "Logo design",
  "Graphic design",
  "Art commission",
  "Pet portrait",
  "Mural",
  "Website",
  "Digital project",
  "3D project",
  "Animation",
  "Photography",
  "Creative shoot",
  "Videography",
  "Creative direction",
  "Collaboration",
  "Event invitation",
  "Social invitation",
  "Take Ty Out",
];

export const processSteps = [
  "Ideas",
  "Research and proposal",
  "Contract and 50% deposit",
  "Pre-creation and asset collection",
  "Creation",
  "Drafts and feedback",
  "Final approval and remaining payment",
  "Formatting and delivery",
];

export const aboutBlocks = [
  {
    title: "My story",
    copy: "I am Tylah Jade Abrahams, an artist, designer and multidisciplinary creator building whatever form the idea needs.",
  },
  {
    title: "How my brain works",
    copy: "I collect references, make lists, argue with the brief, then turn the useful chaos into something people can actually use.",
  },
  {
    title: "What I make",
    copy: "Art, brands, logos, websites, visual systems, photography, shoots, motion ideas, 3D experiments, and personal projects with suspicious amounts of personality.",
  },
  {
    title: "Current obsessions",
    copy: "Oil pastel texture, type that talks back, visual diaries, fish, fashion details, tennis energy, and business ideas that arrive at rude times.",
  },
];
