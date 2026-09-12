import Image from "next/image";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";

type Tone =
  | "steel"
  | "timber"
  | "bronze"
  | "cream"
  | "industrial"
  | "slate"
  | "hero"
  | "forest";

type Props = {
  src?: string | null;
  alt: string;
  tone?: Tone;
  className?: string;
  /** object-fit; product shots are often square studio */
  fit?: "cover" | "contain";
  priority?: boolean;
  sizes?: string;
  label?: string;
};

/**
 * Local /products/... photo when present; otherwise placeholder texture.
 */
export function ProductImage({
  src,
  alt,
  tone = "slate",
  className = "",
  fit = "cover",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
  label = "Product",
}: Props) {
  if (!src) {
    return (
      <PlaceholderMedia
        tone={tone}
        className={className}
        label={label}
        caption={alt}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden bg-paper ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={
          fit === "contain"
            ? "object-contain object-center p-2"
            : "object-cover object-center"
        }
      />
    </div>
  );
}
