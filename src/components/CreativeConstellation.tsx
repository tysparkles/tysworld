import Link from "next/link";
import type { CSSProperties } from "react";
import { creativeObjects } from "@/src/data/site";
import { MotionLift } from "./MotionLift";

export function CreativeConstellation() {
  return (
    <div className="constellation" aria-label="Creative disciplines">
      {creativeObjects.map((object) => (
        <MotionLift key={object.title} className="constellation__motion">
          <Link
            className={`creative-object creative-object--${object.kind}`}
            href={object.href}
            style={{
              "--object-rotate": `${object.rotate}deg`,
              "--object-x": object.x,
              "--object-y": object.y,
              "--object-color": object.color,
            } as CSSProperties}
          >
            <span>{object.title}</span>
            <strong>{object.label}</strong>
          </Link>
        </MotionLift>
      ))}
    </div>
  );
}
