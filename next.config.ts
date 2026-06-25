import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow the placeholder portrait SVGs to pass through next/image safely
    // (they're our own local files). Real photos are optimized normally.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // next/image only serves qualities listed here; 90 is for the hero photos.
    qualities: [75, 90],
  },
};

export default nextConfig;
