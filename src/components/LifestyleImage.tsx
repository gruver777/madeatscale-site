import Image from "next/image";
import type { LifestyleShot } from "@/lib/lifestyle";

type Props = {
  shot: LifestyleShot;
  className?: string;
  /** Soft dark overlay for type legibility */
  overlay?: "soft" | "heavy" | "none";
  priority?: boolean;
  sizes?: string;
  /** Show shot.caption in corner */
  showCaption?: boolean;
};

const overlays = {
  none: "",
  soft: "bg-gradient-to-t from-forest/70 via-forest/25 to-forest/10",
  heavy: "bg-gradient-to-t from-forest/80 via-forest/40 to-forest/20",
} as const;

export function LifestyleImage({
  shot,
  className = "",
  overlay = "soft",
  priority = false,
  sizes = "100vw",
  showCaption = false,
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={shot.src}
        alt={shot.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      {overlay !== "none" ? (
        <div className={`pointer-events-none absolute inset-0 ${overlays[overlay]}`} aria-hidden />
      ) : null}
      {showCaption && shot.caption ? (
        <span className="absolute bottom-3 left-3 z-10 text-[10px] uppercase tracking-[0.22em] text-cream/80">
          {shot.caption}
        </span>
      ) : null}
    </div>
  );
}
