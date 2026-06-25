import type { NextConfig } from "next";

// Security headers applied to every response. Honored by Vercel at the edge.
// Static-rendered pages can't carry a per-request nonce without forcing dynamic
// rendering (and losing CDN caching), so script/style use 'unsafe-inline' — safe
// here because no user input is ever rendered as HTML. The high-value guards are
// frame-ancestors (clickjacking), object-src 'none', and base-uri 'self'.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self';
  frame-src https://open.spotify.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  object-src 'none';
  upgrade-insecure-requests;
`;

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspHeader.replace(/\s{2,}/g, " ").trim() },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Add `preload` only once every subdomain of the final domain is HTTPS.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  // autoplay/encrypted-media/fullscreen left enabled so the Spotify embed works.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  // Drop the X-Powered-By: Next.js header (framework/version fingerprinting).
  poweredByHeader: false,
  images: {
    // Allow the placeholder portrait SVGs to pass through next/image safely
    // (they're our own local files). Real photos are optimized normally.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // next/image only serves qualities listed here; 90 is for the hero photos.
    qualities: [75, 90],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
