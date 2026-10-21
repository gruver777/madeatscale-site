import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Display face: Cormorant Garamond fallback until Ofelia is self-hosted.
 * TODO (Ofelia): Will confirmed self-host OK. Drop Ofelia Pro/Display files into
 * /public/fonts (or src/fonts) and switch to next/font/local — then remove Cormorant.
 * Font file may not be on disk yet.
 */
const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — Contract furniture in steel and timber`,
    template: `%s · ${site.name}`,
  },
  description:
    "Steel and timber contract furniture, specified for designers, commercial interiors, mining camps, boarding schools, and residences. Made in Centurion, delivered at African scale.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={`${geistSans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip">
        <LocalBusinessJsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
