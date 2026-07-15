import Link from "next/link";
import { aboutBlocks, processSteps } from "@/src/data/site";

export default function AboutPage() {
  return (
    <main className="inner-page about-page" id="top">
      <section className="about-hero">
        <p className="hand-note">Great question.</p>
        <h1>Hi, I&apos;m Ty.</h1>
        <p>I&apos;m Tylah Jade Abrahams — an artist, designer and multidisciplinary creator building whatever form the idea needs.</p>
      </section>
      <section className="notebook-grid">
        {aboutBlocks.map((block) => (
          <article key={block.title}>
            <h2>{block.title}</h2>
            <p>{block.copy}</p>
          </article>
        ))}
        <article className="signature-card">
          <span>Tylah Jade</span>
          <strong>TJA</strong>
          <p>The signature area is ready for a scanned mark in /public/images/signatures.</p>
        </article>
      </section>
      <section className="process-path">
        <p className="hand-note">The chaos is visual. The process is not.</p>
        <h2>Work With Me</h2>
        <ol>{processSteps.map((step) => <li key={step}>{step}</li>)}</ol>
        <Link href="/book-ty-time">Book Ty Time</Link>
      </section>
    </main>
  );
}
