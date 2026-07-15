import Link from "next/link";
import { allNav, navLeft, navRight } from "@/src/data/site";
import { TyWorldLogo } from "./TyWorldLogo";

function NavList({ items }: { items: typeof navLeft }) {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__desktop">
        <NavList items={navLeft} />
        <TyWorldLogo />
        <NavList items={navRight} />
      </div>
      <details className="mobile-menu">
        <summary>
          <span>TY&apos;S WORLD</span>
          <b>Open the note</b>
        </summary>
        <div className="mobile-menu__sheet">
          <TyWorldLogo />
          <p>Pick somewhere to start. With haste.</p>
          <nav aria-label="Mobile navigation">
            {allNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </details>
    </header>
  );
}
