"use client";

import { useState } from "react";
import { ProductImage } from "@/components/ProductImage";

type Props = {
  tone?: string;
  name: string;
  images?: string[];
  tiles?: number;
};

export function ProductGallery({
  tone = "slate",
  name,
  images = [],
  tiles = 4,
}: Props) {
  const shots =
    images.length > 0
      ? images
      : Array.from({ length: tiles }, () => undefined as string | undefined);
  const [active, setActive] = useState(0);
  const safeActive = Math.min(active, shots.length - 1);
  const labels = shots.map((_, i) =>
    i === 0 ? `${name} — hero` : `View ${i + 1}`,
  );

  return (
    <div>
      <div className="group relative overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.06]">
          <ProductImage
            src={shots[safeActive]}
            alt={labels[safeActive] ?? name}
            tone={tone as "slate"}
            className="aspect-[4/3]"
            fit={shots[safeActive] ? "contain" : "cover"}
            sizes="(max-width: 768px) 100vw, 58vw"
            label={labels[safeActive] ?? name}
          />
        </div>
        <span className="pointer-events-none absolute right-3 top-3 text-[10px] uppercase tracking-[0.18em] text-cream/60 opacity-0 transition-opacity group-hover:opacity-100">
          Zoom
        </span>
      </div>
      {shots.length > 1 ? (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {shots.slice(0, Math.max(tiles, shots.length)).map((src, i) => (
            <button
              key={`${src ?? "ph"}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              className={`overflow-hidden border transition ${
                safeActive === i
                  ? "border-bronze"
                  : "border-transparent opacity-80 hover:opacity-100"
              }`}
              aria-label={`Show ${labels[i] ?? `View ${i + 1}`}`}
            >
              <div className="overflow-hidden">
                <div className="transition-transform duration-500 hover:scale-110">
                  <ProductImage
                    src={src}
                    alt={labels[i] ?? name}
                    tone={tone as "slate"}
                    className="aspect-square"
                    fit={src ? "contain" : "cover"}
                    sizes="120px"
                    label=""
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
