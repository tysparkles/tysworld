import Link from "next/link";
import { currentFeature, navLeft, navRight, socialLinks } from "@/src/data/site";
import { TyWorldLogo } from "./TyWorldLogo";

function BoardNav() {
  return (
    <div className="reference-nav" aria-label="Homepage navigation">
      <nav>
        {navLeft.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <TyWorldLogo />
      <nav>
        {navRight.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function ReplaceableSlot({
  className,
  href,
  label,
  title,
  copy,
}: {
  className: string;
  href: string;
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <Link className={`board-slot ${className}`} href={href}>
      <span>{label}</span>
      <strong>{title}</strong>
      <p>{copy}</p>
    </Link>
  );
}

export function HomePage() {
  return (
    <main className="home-scene home-scene--reference" id="top">
      <section className="reference-board" aria-labelledby="home-title">
        <BoardNav />
        <h1 id="home-title" className="visually-hidden">
          TY&apos;S WORLD
        </h1>

        <figure className="figure-slot figure-slot--left" aria-label="Replaceable left-side full-body artwork slot">
          <div className="figure-slot__body" />
          <div className="figure-slot__head" />
          <div className="figure-slot__arm figure-slot__arm--left" />
          <div className="figure-slot__arm figure-slot__arm--right" />
          <figcaption>
            <span>replaceable art slot</span>
            <strong>left-world-anchor.png</strong>
          </figcaption>
        </figure>

        <ReplaceableSlot
          className="board-slot--current"
          href="/work"
          label={currentFeature.eyebrow}
          title="Current World"
          copy="Pinned project, obsession, soundtrack or experiment."
        />
        <ReplaceableSlot
          className="board-slot--meet"
          href="/about"
          label="Who am I?"
          title="Meet Ty"
          copy="Who is responsible for all this?"
        />
        <ReplaceableSlot
          className="board-slot--portfolio"
          href="/work"
          label="Illustrations & animations"
          title="Portfolio"
          copy="Art, design and ideas that escaped my brain."
        />
        <ReplaceableSlot
          className="board-slot--booking"
          href="/book-ty-time"
          label="Prices, workflow, rules"
          title="Book Ty Time"
          copy="Commission me or make an interesting proposal."
        />

        <aside className="reference-contact" aria-label="Find Ty">
          <h2>Contacts</h2>
          {socialLinks.slice(0, 3).map((link) => (
            <a key={link.label} href={link.href}>
              <span>{link.label}</span>
              {link.handle}
            </a>
          ))}
        </aside>

        <figure className="figure-slot figure-slot--right" aria-label="Replaceable upside-down Ty artwork slot">
          <div className="figure-slot__legs" />
          <div className="figure-slot__torso" />
          <div className="figure-slot__hair" />
          <div className="figure-slot__hand-pencil" />
          <figcaption>
            <span>replace with</span>
            <strong>ty-upside-down.png</strong>
          </figcaption>
        </figure>

        <p className="scribble scribble--comic">You can check my animated comic here!</p>
        <p className="scribble scribble--who">Who am I?</p>
        <p className="scribble scribble--where">Where you can find me</p>
        <p className="scribble scribble--portfolio">Things I made because my brain wouldn&apos;t leave me alone.</p>
        <p className="scribble scribble--booking">Book Ty Time. With haste.</p>
      </section>
    </main>
  );
}
