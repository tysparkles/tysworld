import Link from "next/link";
import { MotionLift } from "./MotionLift";

export function PaperPortal({
  title,
  href,
  eyebrow,
  copy,
  tone,
}: {
  title: string;
  href: string;
  eyebrow: string;
  copy: string;
  tone: string;
}) {
  return (
    <MotionLift className={`paper-portal paper-portal--${tone}`}>
      <Link href={href}>
        <span>{eyebrow}</span>
        <h3>{title}</h3>
        <p>{copy}</p>
        <b>The plot thickens.</b>
      </Link>
    </MotionLift>
  );
}
