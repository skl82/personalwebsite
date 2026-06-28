import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

// On iOS the safe-area strips (status bar, area behind the floating toolbar)
// are tinted by themeColor, not the page background. For a seamless mobile edge
// this MUST equal the flat mobile background in globals.css (#e0d9c8). viewportFit
// cover lets the page paint edge-to-edge. No effect on desktop (no safe areas).
// NOTE: iOS caches themeColor per tab — a *fresh tab* (not a reload) is needed
// to pick up a changed value.
export const viewport: Viewport = {
  themeColor: "#e0d9c8",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceMono.variable} h-full antialiased`}>
      <body className="h-full">{children}</body>
    </html>
  );
}
