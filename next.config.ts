import type { NextConfig } from "next";

// Security headers applied to every response. Honored by Vercel at the edge.
// Static-rendered pages can't carry a per-request nonce without forcing dynamic
// rendering (and losing CDN caching), so script/style use 'unsafe-inline' — safe
// here because no user input is ever rendered as HTML. The high-value guards are
// frame-ancestors (clickjacking), object-src 'none', and base-uri 'self'.
// The dev server (Turbopack) serves plain HTTP and evaluates modules via eval()
// for hot-reloading. Three production directives break that locally — Safari is
// strict about all of them, which is why it won't render in dev while Chrome
// (which exempts localhost) does:
//   - 'unsafe-eval' is required for the eval()-based HMR runtime.
//   - HSTS + upgrade-insecure-requests force every localhost request to HTTPS,
//     which the dev server can't answer. HSTS in particular is cached by the
//     browser for max-age and is NOT cleared by a normal cache flush.
// So we add 'unsafe-eval' only in dev, and drop the HTTPS-forcing directives.
const isDev = process.env.NODE_ENV === "development";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self';
  frame-src https://open.spotify.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  object-src 'none';
  ${isDev ? "" : "upgrade-insecure-requests;"}
`;

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspHeader.replace(/\s{2,}/g, " ").trim() },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // HSTS only in production. Add `preload` once every subdomain is HTTPS.
  ...(isDev
    ? []
    : [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" }]),
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
