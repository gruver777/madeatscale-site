"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import {
  collections,
  facetOptions,
  type CollectionKey,
  type Product,
  type ProductCategory,
  type ProductMaterial,
} from "@/lib/site";

type Props = {
  products: Product[];
  /** When set, hide collection facet (already scoped) */
  hideCollectionFacet?: boolean;
  emptyTitle?: string;
};

type FacetState = {
  category: ProductCategory | "all";
  material: ProductMaterial | "all";
  collection: CollectionKey | "all";
};

export function ShowroomPLP({
  products: source,
  hideCollectionFacet = false,
  emptyTitle = "No pieces match these filters.",
}: Props) {
  const options = useMemo(() => facetOptions(source), [source]);
  const [facets, setFacets] = useState<FacetState>({
    category: "all",
    material: "all",
    collection: "all",
  });

  const filtered = useMemo(() => {
    return source.filter((p) => {
      if (facets.category !== "all" && p.category !== facets.category) return false;
      if (facets.material !== "all" && p.material !== facets.material) return false;
      if (facets.collection !== "all" && p.collectionKey !== facets.collection)
        return false;
      return true;
    });
  }, [source, facets]);

  const chip = (
    active: boolean,
    label: string,
    onClick: () => void,
  ) => (
    <button
      type="button"
      onClick={onClick}
      className={`border px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] transition ${
        active
          ? "border-forest bg-forest text-cream"
          : "border-forest/15 text-forest hover:border-bronze hover:text-cognac"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <aside className="space-y-10 lg:col-span-3">
        <div>
          <p className="eyebrow text-bronze">Category</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {chip(facets.category === "all", "All", () =>
              setFacets((f) => ({ ...f, category: "all" })),
            )}
            {options.categories.map((c) =>
              chip(facets.category === c, c, () =>
                setFacets((f) => ({ ...f, category: c as ProductCategory })),
              ),
            )}
          </div>
        </div>
        <div>
          <p className="eyebrow text-bronze">Material</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {chip(facets.material === "all", "All", () =>
              setFacets((f) => ({ ...f, material: "all" })),
            )}
            {options.materials.map((m) =>
              chip(facets.material === m, m, () =>
                setFacets((f) => ({ ...f, material: m as ProductMaterial })),
              ),
            )}
          </div>
        </div>
        {!hideCollectionFacet ? (
          <div>
            <p className="eyebrow text-bronze">Collection</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {chip(facets.collection === "all", "All", () =>
                setFacets((f) => ({ ...f, collection: "all" })),
              )}
              {options.collectionKeys.map((key) => {
                const col = collections.find((c) => c.key === key);
                return chip(facets.collection === key, col?.label ?? key, () =>
                  setFacets((f) => ({ ...f, collection: key })),
                );
              })}
            </div>
          </div>
        ) : null}
        <p className="text-xs leading-6 text-mute">
          Phase 2 search — facets only. Filters local catalogue stubs; no typeahead.
        </p>
      </aside>

      <div className="lg:col-span-9">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <p className="text-sm text-mute">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          {(facets.category !== "all" ||
            facets.material !== "all" ||
            facets.collection !== "all") && (
            <button
              type="button"
              className="text-[11px] uppercase tracking-[0.14em] text-bronze hover:text-forest"
              onClick={() =>
                setFacets({ category: "all", material: "all", collection: "all" })
              }
            >
              Clear filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="border border-forest/10 bg-paper px-8 py-16 text-center">
            <p className="font-display text-3xl text-forest">{emptyTitle}</p>
            <p className="mt-3 text-sm text-mute">
              Try clearing a facet — catalogue stubs are limited until Woo migrates.
            </p>
            <button
              type="button"
              className="btn-ghost mt-8 text-forest"
              onClick={() =>
                setFacets({ category: "all", material: "all", collection: "all" })
              }
            >
              Reset facets
            </button>
          </div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} large />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
