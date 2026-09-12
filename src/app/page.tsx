import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { collections, materials, projects, ranges, site } from "@/lib/site";

export default function Home() {
  const proof = [...projects, ...projects];

  return (
    <>
      <section className="relative overflow-x-clip bg-forest text-cream">
        <div className="mx-auto grid min-h-[calc(100svh-4.25rem)] max-w-[1400px] items-end gap-10 px-5 pb-14 pt-16 md:grid-cols-12 md:px-8 md:pb-20 md:pt-20">
          <div className="md:col-span-6 lg:col-span-6">
            <p className="eyebrow text-bronze">Centurion · Africa · World</p>
            <h1 className="mt-6 max-w-xl font-display text-[3.4rem] leading-[0.92] tracking-[-0.035em] md:text-[5.4rem]">
              Furniture that
              <br />
              <em className="italic font-normal">holds its line.</em>
            </h1>
            <p className="mt-8 max-w-md text-base leading-8 text-cream/72 md:text-lg">
              Steel and timber, specified for rooms that work hard — campuses,
              mines, hotels, and residences — without looking institutional.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/showroom" className="btn-solid bg-bronze text-forest hover:bg-cream">
                Explore ranges
              </Link>
              <Link href="/order" className="btn-ghost text-cream">
                Order at Scale
              </Link>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[5/4]">
              <div className="hero-shimmer placeholder-grain absolute inset-0 bg-linear-to-br from-[#15241f] via-[#3d4a3c] to-[#BF9D7E]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(191,157,126,0.28),transparent_50%)]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-[10px] uppercase tracking-[0.2em] text-cream/70">
                <span>Placeholder — studio film loop</span>
                <span>Steel · Timber</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-6 md:px-8">
          <p className="eyebrow text-mute">Specified for</p>
        </div>
        <div className="proof-rail pb-7">
          <div className="proof-track flex w-max gap-0">
            {proof.map((project, i) => (
              <span
                key={`${project.slug}-${i}`}
                className="px-8 font-display text-2xl text-forest/80 md:text-3xl"
              >
                {project.name}
                <span className="mx-8 text-bronze">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-bronze">Showroom</p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.03em] text-forest md:text-5xl">
              Six ranges. One language.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-mute">
            Six live ranges from the showroom — no invented inventory.
            Photography here is placeholder texture until the studio set is
            recaptured.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ranges.map((range) => (
            <Link
              key={range.slug}
              href={`/showroom/${range.slug}`}
              className="group block"
            >
              <div className="tile-hover overflow-hidden">
                <PlaceholderMedia
                  tone={range.tone}
                  label="Placeholder texture"
                  className="aspect-[4/3]"
                />
              </div>
              <div className="flex items-baseline justify-between gap-4 pt-4">
                <h3 className="font-display text-2xl text-forest">{range.name}</h3>
                <span className="text-[11px] uppercase tracking-[0.16em] text-bronze opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View
                </span>
              </div>
              <p className="mt-1 max-w-sm text-sm leading-6 text-mute">{range.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-forest/10 bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-bronze">Collections</p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.03em] text-forest md:text-5xl">
                Quench · Grain · Kiln · Load · Spine
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-mute">
              Five brand worlds above the catalogue. Families on the pieces —
              Chroma, Tekton, Elemento — stay; the collection names frame the room.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {collections.map((c) => (
              <Link key={c.key} href={`/collections/${c.slug}`} className="group block">
                <div className="tile-hover overflow-hidden">
                  <PlaceholderMedia
                    tone={c.tone}
                    label={c.label}
                    className="aspect-[3/4]"
                  />
                </div>
                <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-bronze">
                  {c.tagline}
                </p>
                <h3 className="mt-1 font-display text-2xl text-forest">{c.label}</h3>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/collections"
              className="text-[12px] uppercase tracking-[0.16em] text-forest underline-offset-4 hover:underline"
            >
              All collections
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-5">
            <p className="eyebrow text-bronze">Materials</p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.03em] md:text-5xl">
              Built to be specified, then repeated.
            </h2>
          </div>
          <div className="md:col-span-7">
            <ul className="grid gap-px bg-cream/10 sm:grid-cols-2">
              {materials.map((item) => (
                <li
                  key={item}
                  className="bg-forest px-6 py-8 font-display text-3xl tracking-[-0.02em]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-xl text-sm leading-7 text-cream/65">
              Powder-coated steel, timber, and Melawood — engineered as
              flat-pack where the project demands it, finished so the room
              still reads as a room.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <PlaceholderMedia tone="timber" className="aspect-[5/4]" label="Placeholder — workshop" />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="eyebrow text-bronze">Order at Scale</p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.03em] text-forest">
              Quote when you need a schedule. Cart when the price is live.
            </h2>
            <p className="mt-6 text-base leading-8 text-mute">
              Contract work stays consultation-led for architects, developers,
              and procurement. Public ZAR and cart stay on for pieces with
              migrated prices; until then, request a quote — we never invent
              numbers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/order" className="btn-solid">
                Start a brief
              </Link>
              <a href={site.whatsappHref} className="btn-ghost text-forest">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
