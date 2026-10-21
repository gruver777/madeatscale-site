import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/projects" },
  title: { absolute: "Furniture Projects | Campuses, Mining Camps, Hospitality | Made@Scale" },
  description:
    "Furniture projects by Made@Scale across campuses, mining camps, hospitality and residences: WITS, DRC mining mancamps, Doppio Zero, Mount Amanzi, Bergvallei Retirement Village and more.",
};

const tones = ["steel", "timber", "bronze", "industrial", "slate", "cream"] as const;

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        kicker="Projects"
        title="Rooms already in the world."
        lede="These are live case studies from the current site — names unchanged. Photography is placeholder until the project archive is recaptured."
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-8">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <li key={project.slug} className="group">
              <div className="tile-hover overflow-hidden">
                <PlaceholderMedia
                  tone={tones[i % tones.length]}
                  className="aspect-[4/3]"
                  label="Placeholder — project"
                />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-bronze">
                {project.place}
              </p>
              <h2 className="mt-1 font-display text-2xl text-forest">{project.name}</h2>
              <p className="mt-1 text-sm text-mute">{project.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
