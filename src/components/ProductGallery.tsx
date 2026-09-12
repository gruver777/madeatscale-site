"use client";

import { useState } from "react";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";

type Props = {
  tone?: string;
  name: string;
  tiles?: number;
};

export function ProductGallery({ tone = "slate", name, tiles = 4 }: Props) {
  const [active, setActive] = useState(0);
  const labels = Array.from({ length: tiles }, (_, i) =>
    i === 0 ? `${name} — hero` : `View ${i + 1}`,
  );

  return (
    <div>
      <div className="group relative overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.06]">
          <PlaceholderMedia
            tone={tone as "slate"}
            className="aspect-[4/3]"
            label={labels[active]}
          />
        </div>
        <span className="pointer-events-none absolute right-3 top-3 text-[10px] uppercase tracking-[0.18em] text-cream/60 opacity-0 transition-opacity group-hover:opacity-100">
          Zoom
        </span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {labels.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(i)}
            className={`overflow-hidden border transition ${
              active === i ? "border-bronze" : "border-transparent opacity-80 hover:opacity-100"
            }`}
            aria-label={`Show ${label}`}
          >
            <div className="overflow-hidden">
              <div className="transition-transform duration-500 hover:scale-110">
                <PlaceholderMedia
                  tone={tone as "slate"}
                  className="aspect-square"
                  label=""
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
