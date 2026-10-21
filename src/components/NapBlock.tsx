import { site } from "@/lib/site";

/** Name / address / phone — keep identical everywhere it appears. */
export function NapBlock({ className = "" }: { className?: string }) {
  return (
    <address className={`not-italic leading-7 text-mute ${className}`}>
      <strong className="block font-medium text-forest">
        {site.name} — furniture factory &amp; shop, Centurion
      </strong>
      {site.addressLines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
      <span className="block">Gauteng, South Africa</span>
      <a href={site.phoneHref} className="mt-2 block text-forest hover:underline">
        T: {site.phoneDisplay}
      </a>
      <a href={site.whatsappHref} className="block text-forest hover:underline">
        WhatsApp: {site.whatsappDisplay}
      </a>
      <a href={`mailto:${site.email}`} className="block text-forest hover:underline">
        {site.email}
      </a>
      <span className="mt-2 block text-sm">{site.openingHoursDisplay}</span>
    </address>
  );
}
