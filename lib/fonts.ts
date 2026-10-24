import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

// Display face: Archivo's width axis lets headings run slightly expanded,
// which gives the industrial, stamped-metal feel the brand brief asks for.
export const displayFont = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

// Used for spec-sheet details: part numbers, metrics, eyebrow labels.
export const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});
