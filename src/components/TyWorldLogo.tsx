import Link from "next/link";

export function TyWorldLogo() {
  return (
    <Link className="ty-logo" href="/" aria-label="Return to Ty's World">
      <span className="ty-logo__main">TY&apos;S WORLD</span>
      <span className="ty-logo__creator">Tylah the Creator</span>
      <span className="ty-logo__tag">
        To infini<span>TY</span> &amp; beyond.
      </span>
    </Link>
  );
}
