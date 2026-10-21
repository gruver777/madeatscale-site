import type { Metadata } from "next";
import Link from "next/link";
import { LifestyleImage } from "@/components/LifestyleImage";
import { PageIntro } from "@/components/PageIntro";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { lifestyle } from "@/lib/lifestyle";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: { absolute: "About Made@Scale | Furniture Manufacturer in Centurion" },
  description:
    "Made@Scale is a steel and timber contract furniture manufacturer in Centurion, specified across Africa and beyond.",
};

export default function AboutPage() {
  return (
    <>
      <div className="relative">
        <LifestyleImage
          shot={lifestyle.about}
          className="aspect-[21/8] min-h-48 w-full md:min-h-64"
          overlay="heavy"
          priority
          sizes="100vw"
          showCaption
        />
      </div>
      <PageIntro
        kicker="About"
        title="A workshop that thinks in schedules."
        lede="We manufacture contract furniture in steel, timber, and Melawood — for designers, commercial interiors, mining camps, boarding schools, and residences that refuse a catalogue look."
      />
      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-24 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <PlaceholderMedia tone="industrial" className="aspect-[16/10]" label="Placeholder — factory floor" />
        </div>
        <div className="md:col-span-5 space-y-6 text-base leading-8 text-mute">
          <p>
            Made@Scale sits at Limeroc Business Park in Centurion. The work is
            B2B-first: specification, repeatability, and delivery at the scale
            of a lodge, a campus, or a thousand beds.
          </p>
          <p>
            The live brand already speaks in forest and bronze, in Ofelia, in
            six ranges. This rebuild keeps that language and drops the factory
            brochure tone — craft first, then capacity.
          </p>
          <p>
            Vision, mission, and the longer studio story will land here. For
            now: a quiet room, the right contacts, and the showroom.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/projects" className="btn-solid">
              See projects
            </Link>
            <Link href="/showroom" className="btn-ghost text-forest">
              Showroom
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
