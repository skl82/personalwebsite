import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow the placeholder portrait SVGs to pass through next/image safely
    // (they're our own local files). Real photos are optimized normally.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
