import { LifestyleImage } from "@/components/LifestyleImage";
import { lifestyle, type LifestyleShot } from "@/lib/lifestyle";

type Props = {
  headline?: string;
  lede?: string;
  shot?: LifestyleShot;
};

export function CoastalStrip({
  headline = "Made for African light",
  lede = "Steel and timber that hold their line from Atlantic seaboard rooms to Highveld campuses.",
  shot = lifestyle.coastal,
}: Props) {
  return (
    <section className="relative isolate min-h-[60vh] w-full overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 z-0">
        <LifestyleImage
          shot={shot}
          className="min-h-[60vh]"
          overlay="heavy"
          sizes="100vw"
          priority={false}
        />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-[1400px] flex-col justify-end px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow text-bronze">Cape · Atlantic</p>
        <h2 className="mt-4 max-w-xl font-display text-4xl tracking-[-0.03em] md:text-6xl">
          {headline}
        </h2>
        <p className="mt-5 max-w-md text-base leading-8 text-cream/75">{lede}</p>
      </div>
    </section>
  );
}
