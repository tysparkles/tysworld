import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  aboutBlocks,
  bookingTypes,
  currentFeature,
  navLeft,
  navRight,
  processSteps,
  socialLinks,
} from "../src/data/site";
import {
  disciplineMeta,
  getProjectsByDiscipline,
  projects,
  type Discipline,
  type Project,
} from "../src/data/projects";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "vercel-static");

function esc(value: string | number) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function attrs(items: Record<string, string | undefined>) {
  return Object.entries(items)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => ` ${key}="${esc(value ?? "")}"`)
    .join("");
}

function link(href: string, text: string, className?: string) {
  return `<a${attrs({ href, class: className })}>${esc(text)}</a>`;
}

function logo() {
  return `<a class="ty-logo" href="/" aria-label="Return to Ty's World">
    <span class="ty-logo__main">TY'S WORLD</span>
    <span class="ty-logo__creator">Tylah the Creator</span>
    <span class="ty-logo__tag">To infini<span>TY</span> &amp; beyond.</span>
  </a>`;
}

function siteHeader() {
  return `<header class="site-header">
    <div class="site-header__desktop">
      <nav class="site-nav" aria-label="Primary navigation">${navLeft.map((item) => link(item.href, item.label)).join("")}</nav>
      ${logo()}
      <nav class="site-nav" aria-label="Primary navigation">${navRight.map((item) => link(item.href, item.label)).join("")}</nav>
    </div>
    <details class="mobile-menu">
      <summary><span>TY'S WORLD</span><b>Open the note</b></summary>
      <div class="mobile-menu__sheet">
        ${logo()}
        <p>Pick somewhere to start. With haste.</p>
        <nav aria-label="Mobile navigation">${[...navLeft, ...navRight, { href: "/work", label: "Work" }].map((item) => link(item.href, item.label)).join("")}</nav>
      </div>
    </details>
  </header>`;
}

function footer() {
  return `<footer class="sketch-footer">
    <div>
      <p class="hand-note">The end. Or another beginning.</p>
      <h2>Tylah the Creator</h2>
      <p>@tylah.the.creator · Available worldwide · To infini<span>TY</span> &amp; beyond.</p>
    </div>
    <nav aria-label="Footer links">
      ${link("/book-ty-time", "Book Ty Time")}
      ${link("/links", "Find Ty")}
      <a href="mailto:hello@tysworld.example">hello@tysworld.example</a>
      <a href="#top">Back to top</a>
    </nav>
    <div class="footer-socials">${socialLinks.slice(0, 4).map((item) => `<a href="${esc(item.href)}">${esc(item.label)}</a>`).join("")}</div>
    <small>© ${new Date().getFullYear()} Ty's World. Made with too many tabs open.</small>
  </footer>`;
}

function page(title: string, description: string, body: string, hideHeader = false) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)} | TY'S WORLD</title>
  <meta name="description" content="${esc(description)}" />
  <meta property="og:title" content="TY'S WORLD" />
  <meta property="og:description" content="To infiniTY & beyond. A visual self-portrait disguised as a portfolio." />
  <meta property="og:image" content="/og.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" href="/favicon.svg" />
  <link rel="stylesheet" href="/assets/site.css" />
</head>
<body${hideHeader ? ' class="static-home"' : ""}>
  ${siteHeader()}
  ${body}
  ${footer()}
  <script src="/assets/site.js"></script>
</body>
</html>`;
}

function homePage() {
  const boardNav = `<div class="reference-nav" aria-label="Homepage navigation">
    <nav>${navLeft.map((item) => link(item.href, item.label)).join("")}</nav>
    ${logo()}
    <nav>${navRight.map((item) => link(item.href, item.label)).join("")}</nav>
  </div>`;

  const slot = (className: string, href: string, label: string, title: string, copy: string) =>
    `<a class="board-slot ${className}" href="${href}">
      <span>${esc(label)}</span><strong>${esc(title)}</strong><p>${esc(copy)}</p>
    </a>`;

  return page(
    "Tylah the Creator",
    "A visual self-portrait disguised as a portfolio for Tylah Jade Abrahams.",
    `<main class="home-scene home-scene--reference" id="top">
      <section class="reference-board" aria-labelledby="home-title">
        ${boardNav}
        <h1 id="home-title" class="visually-hidden">TY'S WORLD</h1>
        <figure class="figure-slot figure-slot--left" aria-label="Replaceable left-side full-body artwork slot">
          <div class="figure-slot__body"></div><div class="figure-slot__head"></div>
          <div class="figure-slot__arm figure-slot__arm--left"></div><div class="figure-slot__arm figure-slot__arm--right"></div>
          <figcaption><span>replaceable art slot</span><strong>left-world-anchor.png</strong></figcaption>
        </figure>
        ${slot("board-slot--current", "/work", currentFeature.eyebrow, "Current World", "Pinned project, obsession, soundtrack or experiment.")}
        ${slot("board-slot--meet", "/about", "Who am I?", "Meet Ty", "Who is responsible for all this?")}
        ${slot("board-slot--portfolio", "/work", "Illustrations & animations", "Portfolio", "Art, design and ideas that escaped my brain.")}
        ${slot("board-slot--booking", "/book-ty-time", "Prices, workflow, rules", "Book Ty Time", "Commission me or make an interesting proposal.")}
        <aside class="reference-contact" aria-label="Find Ty">
          <h2>Contacts</h2>
          ${socialLinks.slice(0, 3).map((item) => `<a href="${esc(item.href)}"><span>${esc(item.label)}</span>${esc(item.handle)}</a>`).join("")}
        </aside>
        <figure class="figure-slot figure-slot--right" aria-label="Replaceable upside-down Ty artwork slot">
          <div class="figure-slot__legs"></div><div class="figure-slot__torso"></div><div class="figure-slot__hair"></div><div class="figure-slot__hand-pencil"></div>
          <figcaption><span>replace with</span><strong>ty-upside-down.png</strong></figcaption>
        </figure>
        <p class="scribble scribble--comic">You can check my animated comic here!</p>
        <p class="scribble scribble--who">Who am I?</p>
        <p class="scribble scribble--where">Where you can find me</p>
        <p class="scribble scribble--portfolio">Things I made because my brain wouldn't leave me alone.</p>
        <p class="scribble scribble--booking">Book Ty Time. With haste.</p>
      </section>
    </main>`,
    true,
  );
}

function aboutPage() {
  return page(
    "About Ty",
    "Meet Tylah Jade Abrahams, artist, designer and multidisciplinary creator.",
    `<main class="inner-page about-page" id="top">
      <section class="about-hero"><p class="hand-note">Great question.</p><h1>Hi, I'm Ty.</h1><p>I'm Tylah Jade Abrahams — an artist, designer and multidisciplinary creator building whatever form the idea needs.</p></section>
      <section class="notebook-grid">${aboutBlocks.map((block) => `<article><h2>${esc(block.title)}</h2><p>${esc(block.copy)}</p></article>`).join("")}
        <article class="signature-card"><span>Tylah Jade</span><strong>TJA</strong><p>The signature area is ready for a scanned mark in /public/images/signatures.</p></article>
      </section>
      ${processSection()}
    </main>`,
  );
}

function processSection() {
  return `<section class="process-path">
    <p class="hand-note">The chaos is visual. The process is not.</p>
    <h2>Process</h2>
    <ol>${processSteps.map((step) => `<li>${esc(step)}</li>`).join("")}</ol>
    ${link("/book-ty-time", "Book Ty Time")}
  </section>`;
}

function projectCard(project: Project) {
  const meta = disciplineMeta[project.discipline];
  return `<a class="project-card" href="${meta.href}/${project.slug}">
    <span>${esc(project.category)}</span>
    <h3>${esc(project.title)}</h3>
    <p>${esc(project.summary)}</p>
    <b>Who else are we looking at?</b>
  </a>`;
}

function disciplinePage(discipline: Discipline) {
  const meta = disciplineMeta[discipline];
  const list = getProjectsByDiscipline(discipline);
  return page(
    meta.title,
    meta.intro,
    `<main class="inner-page" id="top">
      <section class="discipline-hero">
        <p class="hand-note">${esc(meta.kicker)}</p><h1>${esc(meta.title)}</h1><p>${esc(meta.intro)}</p>
        <div class="category-row">${meta.categories.map((category) => `<span>${esc(category)}</span>`).join("")}</div>
      </section>
      <section class="work-table" aria-label="${esc(meta.title)} projects">
        <div class="table-note"><h2>${esc(meta.texture)}</h2><p>Filter controls and real media slots are ready for Ty's final artwork. For now, the placeholders show the case-study structure.</p></div>
        <div class="project-grid">${list.map(projectCard).join("")}</div>
      </section>
      <section class="commission-strip"><p class="hand-note">Someone had to fix it.</p><h2>Need this kind of thing?</h2>${link("/book-ty-time", "Book Ty Time")}</section>
    </main>`,
  );
}

function projectPage(project: Project) {
  const meta = disciplineMeta[project.discipline];
  const siblings = getProjectsByDiscipline(project.discipline);
  const next = siblings[(siblings.findIndex((item) => item.slug === project.slug) + 1) % siblings.length];
  return page(
    project.title,
    project.summary,
    `<main class="inner-page" id="top">
      <article class="project-detail">
        ${link(meta.href, `Return to ${meta.title}`, "breadcrumb")}
        <header><p class="hand-note">${esc(project.category)}</p><h1>${esc(project.title)}</h1><p>${esc(project.summary)}</p></header>
        <section class="detail-spread" aria-label="Project details">
          <div><h2>What they asked for.</h2><p>${esc(project.brief)}</p></div>
          <div><h2>What was not working.</h2><p>${esc(project.challenge)}</p></div>
          <div><h2>Someone had to fix it.</h2><p>${esc(project.concept)}</p></div>
          <div><h2>It was always going to be me.</h2><p>${esc(project.outcome)}</p></div>
        </section>
        <section class="project-meta-grid">
          <div><h2>Role</h2><p>${esc(project.role)}</p></div>
          <div><h2>Deliverables</h2><ul>${project.deliverables.map((item) => `<li>${esc(item)}</li>`).join("")}</ul></div>
          <div><h2>Tools</h2><ul>${project.tools.map((item) => `<li>${esc(item)}</li>`).join("")}</ul></div>
          <div><h2>Project notes</h2><p>${esc(project.client)} · ${esc(project.date)}</p></div>
        </section>
        <section class="process-path"><h2>There were forces at play.</h2><ol>${project.process.map((step) => `<li>${esc(step)}</li>`).join("")}</ol></section>
        <section class="placeholder-gallery"><div>Hero image placeholder</div><div>Process image placeholder</div><div>Final image / video placeholder</div></section>
        ${project.testimonial ? `<blockquote>${esc(project.testimonial)}</blockquote>` : ""}
        <nav class="project-next" aria-label="Project navigation">${link("/book-ty-time", "Book Ty Time")}${link(`${meta.href}/${next.slug}`, "Who else are we looking at?")}</nav>
      </article>
    </main>`,
  );
}

function workPage() {
  return page(
    "Explore the World",
    "All TY'S WORLD projects in one place.",
    `<main class="inner-page" id="top">
      <section class="discipline-hero"><p class="hand-note">The plot thickens.</p><h1>Explore the World</h1><p>All the disciplines in one place: art, design, motion, digital media, photography, film and the experiments in between.</p></section>
      <section class="project-grid project-grid--wide">${projects.map(projectCard).join("")}</section>
    </main>`,
  );
}

function bookingPage() {
  return page(
    "Book Ty Time",
    "Commission, collaborate with, or invite Ty.",
    `<main class="inner-page booking-page" id="top">
      <section class="discipline-hero"><p class="hand-note">Your wish is my command.</p><h1>BOOK TY TIME</h1><p>Need a design, painting, website, shoot, idea, collaboration or a very specific amount of Ty's attention?</p></section>
      <section class="booking-layout">
        <div class="booking-types"><h2>What Ty can be booked for</h2><div>${bookingTypes.map((type) => `<span>${esc(type)}</span>`).join("")}</div></div>
        <form class="booking-form" data-static-booking-form>
          <label>Name<input required /></label><label>Email<input type="email" required /></label>
          <label>Company or social handle<input /></label>
          <label>What are you booking?<select>${bookingTypes.map((type) => `<option>${esc(type)}</option>`).join("")}</select></label>
          <label class="span-2">Project or invitation description<textarea required></textarea></label>
          <label>Budget<input /></label><label>Preferred date<input type="date" /></label>
          <label>Location<input /></label><label>Links<input placeholder="Portfolio, moodboard, website..." /></label>
          <label class="span-2">References<textarea placeholder="File upload placeholder lives here until integration."></textarea></label>
          <label>How did you find Ty?<input /></label>
          <label class="checkbox-label"><input type="checkbox" required /><span>I agree that Ty can use this information to respond. Spam prevention and email integration are placeholders.</span></label>
          <button type="submit">Book Ty Time</button>
        </form>
      </section>
      ${processSection()}
    </main>`,
  );
}

function linksPage() {
  return page(
    "Links",
    "Find Tylah the Creator elsewhere.",
    `<main class="inner-page links-page" id="top">
      <section class="discipline-hero"><p class="hand-note">Find me elsewhere.</p><h1>Links</h1><p>Where Ty exists outside this website. Email is a placeholder until the final contact address is connected.</p></section>
      <section class="links-note"><h2>Contacts</h2>${socialLinks.map((item) => `<a href="${esc(item.href)}"><span>${esc(item.label)}</span><strong>${esc(item.handle)}</strong></a>`).join("")}</section>
    </main>`,
  );
}

function notFoundPage() {
  return page(
    "The game is rigged.",
    "This part of Ty's World does not appear to exist.",
    `<main class="inner-page not-found-page" id="top"><section class="map-error"><p class="hand-note">Enough.</p><h1>The game is rigged.</h1><p>This part of Ty's World does not appear to exist.</p>${link("/", "Return to Ty's World")}</section></main>`,
  );
}

async function writeRoute(route: string, html: string) {
  const filePath = route === "/" ? path.join(outDir, "index.html") : path.join(outDir, route.slice(1), "index.html");
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, html);
}

async function main() {
  await rm(outDir, { recursive: true, force: true });
  await mkdir(path.join(outDir, "assets"), { recursive: true });
  await cp(path.join(root, "public"), outDir, { recursive: true });

  const css = (await readFile(path.join(root, "app", "globals.css"), "utf8")).replace('@import "tailwindcss";', "");
  await writeFile(path.join(outDir, "assets", "site.css"), css);
  await writeFile(
    path.join(outDir, "assets", "site.js"),
    `document.querySelectorAll('[data-static-booking-form]').forEach((form)=>form.addEventListener('submit',(event)=>{event.preventDefault();form.outerHTML='<section class="booking-success" aria-live="polite"><p class="hand-note">Signed, sealed and delivered.</p><h2>Your wish is my command.</h2><p>This demo form is ready for email, calendar and file upload integrations when Ty chooses the final tools.</p></section>';}));`,
  );

  await writeRoute("/", homePage());
  await writeRoute("/about", aboutPage());
  await writeRoute("/work", workPage());
  await writeRoute("/book-ty-time", bookingPage());
  await writeRoute("/links", linksPage());

  for (const discipline of Object.keys(disciplineMeta) as Discipline[]) {
    await writeRoute(disciplineMeta[discipline].href, disciplinePage(discipline));
    for (const project of getProjectsByDiscipline(discipline)) {
      await writeRoute(`${disciplineMeta[discipline].href}/${project.slug}`, projectPage(project));
    }
  }

  await writeFile(path.join(outDir, "404.html"), notFoundPage());
  await writeFile(path.join(outDir, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: https://tysworld.tylahjabrahams.chatgpt.site/sitemap.xml\n");
  await writeFile(
    path.join(outDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${["/", "/about", "/work", "/book-ty-time", "/links", ...Object.values(disciplineMeta).map((item) => item.href), ...projects.map((project) => `${disciplineMeta[project.discipline].href}/${project.slug}`)].map((route) => `<url><loc>https://tysworld.tylahjabrahams.chatgpt.site${route}</loc></url>`).join("")}</urlset>`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
