type Tone =
  | "steel"
  | "timber"
  | "bronze"
  | "cream"
  | "industrial"
  | "slate"
  | "hero"
  | "forest";

const tones: Record<Tone, string> = {
  steel:
    "from-[#2a3a36] via-[#6d7a74] to-[#c4b6a4]",
  timber:
    "from-[#3a2a1f] via-[#8a6a4a] to-[#d4c2a4]",
  bronze:
    "from-[#1D2E28] via-[#5c4636] to-[#BF9D7E]",
  cream:
    "from-[#4a3a2c] via-[#a89074] to-[#efe6d6]",
  industrial:
    "from-[#141918] via-[#2a3832] to-[#7a6a58]",
  slate:
    "from-[#1D2E28] via-[#3d4a46] to-[#8a8478]",
  hero:
    "from-[#15241f] via-[#2a3c34] to-[#6b5340]",
  forest:
    "from-[#1D2E28] via-[#243832] to-[#3d4f48]",
};

type Props = {
  tone?: Tone;
  label?: string;
  className?: string;
  caption?: string;
};

export function PlaceholderMedia({
  tone = "forest",
  label = "Placeholder imagery",
  className = "",
  caption,
}: Props) {
  return (
    <div
      className={`placeholder-grain relative overflow-hidden bg-linear-to-br ${tones[tone]} ${className}`}
      role="img"
      aria-label={caption ?? label}
    >
      <div className="absolute inset-0 opacity-40 mix-blend-soft-light bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.28),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(0,0,0,0.25),transparent_55%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.08)_50%,transparent_60%)]" />
      <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.22em] text-cream/70">
        {label}
      </span>
    </div>
  );
}
