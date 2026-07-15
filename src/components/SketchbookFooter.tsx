import Link from "next/link";
import { socialLinks } from "@/src/data/site";

export function SketchbookFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="sketch-footer">
      <div>
        <p className="hand-note">The end. Or another beginning.</p>
        <h2>Tylah the Creator</h2>
        <p>@tylah.the.creator · Available worldwide · To infini<span>TY</span> &amp; beyond.</p>
      </div>
      <nav aria-label="Footer links">
        <Link href="/book-ty-time">Book Ty Time</Link>
        <Link href="/links">Find Ty</Link>
        <a href="mailto:hello@tysworld.example">hello@tysworld.example</a>
        <a href="#top">Back to top</a>
      </nav>
      <div className="footer-socials">
        {socialLinks.slice(0, 4).map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <small>© {year} Ty&apos;s World. Made with too many tabs open.</small>
    </footer>
  );
}
