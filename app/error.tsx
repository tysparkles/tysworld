"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="inner-page not-found-page" id="top">
      <section className="map-error">
        <p className="hand-note">There are forces at play.</p>
        <h1>The game is rigged.</h1>
        <p>Something in Ty&apos;s World tripped over a loose pencil line.</p>
        <Link href="/">Return to Ty&apos;s World</Link>
      </section>
    </main>
  );
}
