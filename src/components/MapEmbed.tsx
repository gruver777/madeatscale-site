import { site } from "@/lib/site";

/** Google Maps embed at the live site's schema coordinates (no API key). */
export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div>
      <div className={`overflow-hidden border border-forest/10 ${className}`}>
        <iframe
          title="Map: Made@Scale furniture factory, Limeroc Business Park, Centurion"
          src={site.mapEmbedSrc}
          className="h-full min-h-80 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        href={site.mapHref}
        className="mt-3 inline-block text-[12px] uppercase tracking-[0.14em] text-forest underline-offset-4 hover:underline"
      >
        Open in Google Maps
      </a>
    </div>
  );
}
