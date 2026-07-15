import Link from "next/link";
import { tyLanguage } from "@/src/data/ty-language";

export default function NotFound() {
  return (
    <main className="inner-page not-found-page" id="top">
      <section className="map-error">
        <p className="hand-note">Enough.</p>
        <h1>{tyLanguage.notFoundTitle}</h1>
        <p>{tyLanguage.notFoundCopy}</p>
        <Link href="/">{tyLanguage.backHome}</Link>
      </section>
    </main>
  );
}
