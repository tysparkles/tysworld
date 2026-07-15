import { socialLinks } from "@/src/data/site";

export default function LinksPage() {
  return (
    <main className="inner-page links-page" id="top">
      <section className="discipline-hero">
        <p className="hand-note">Find me elsewhere.</p>
        <h1>Links</h1>
        <p>Where Ty exists outside this website. Email is a placeholder until the final contact address is connected.</p>
      </section>
      <section className="links-note">
        <h2>Contacts</h2>
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href}>
            <span>{link.label}</span>
            <strong>{link.handle}</strong>
          </a>
        ))}
      </section>
    </main>
  );
}
