"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PhotoStack } from "@/components/photo-stack";
import { SpotifyPreload } from "@/components/spotify-preload";
import { ViewerWindow } from "@/components/viewer-window";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

// A tab is either an in-page panel (content) or an external link (href).
export type Tab = {
  id: string;
  label: string;
  content?: React.ReactNode;
  href?: string;
};

// LinkedIn's "in" glyph — lucide dropped brand icons, so we inline it.
function LinkedInLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Shell({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState<string | null>(null);

  // Reflect the active panel in the URL hash (shareable / refresh-safe),
  // without ever navigating to a new page or tab.
  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.replace("#", "");
      setActive(tabs.some((t) => t.id === h) ? h : null);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [tabs]);

  const go = (id: string | null) => {
    setActive(id);
    const url = id ? `#${id}` : window.location.pathname;
    window.history.replaceState(null, "", url);
  };

  const activeTab = tabs.find((t) => t.id === active) ?? null;

  return (
    <div className="relative z-10 flex min-h-dvh w-full flex-col md:h-dvh md:flex-row md:overflow-hidden">
      {/* Off-screen: warms the Spotify players at page load (see component). */}
      <SpotifyPreload />
      {/* LEFT HALF — name + nav, centered */}
      <div className="flex flex-1 items-center justify-center px-8 py-14 md:w-1/2 md:py-0">
        <div className="flex flex-col items-start">
          <button onClick={() => go(null)} className="text-left">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {site.name}
            </h1>
          </button>

          <nav className="mt-8 flex flex-col items-start gap-3 sm:mt-10 sm:gap-4">
            {tabs.map((t) => {
              const on = t.id === active;

              // Left-gutter hover/active marker — shared by both variants.
              const marker = (
                <span
                  className={cn(
                    "absolute top-1/2 right-full mr-3 hidden h-px -translate-y-1/2 transition-all duration-300 md:block",
                    on
                      ? "w-6 bg-accent opacity-100"
                      : "w-4 bg-ink opacity-0 group-hover:opacity-100",
                  )}
                />
              );

              // External-link tab (e.g. resume → LinkedIn): on hover, a small
              // blue LinkedIn logo + arrow slide out to the right of the label.
              if (t.href) {
                return (
                  <a
                    key={t.id}
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center text-lg text-muted transition-colors hover:text-ink sm:text-xl"
                  >
                    {marker}
                    <span>{t.label}</span>
                    <span className="inline-flex max-w-0 -translate-x-1 items-center overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-[3rem] group-hover:translate-x-0 group-hover:opacity-100">
                      <LinkedInLogo className="ml-2 h-4 w-4 shrink-0 text-[#0A66C2]" />
                      <ArrowUpRight className="ml-1 h-3.5 w-3.5 shrink-0" />
                    </span>
                  </a>
                );
              }

              return (
                <button
                  key={t.id}
                  onClick={() => go(on ? null : t.id)}
                  aria-current={on ? "true" : undefined}
                  className="group relative text-lg text-muted transition-colors hover:text-ink sm:text-xl"
                >
                  {marker}
                  <span className={on ? "text-ink" : undefined}>{t.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* RIGHT HALF — photo or viewer window, centered */}
      <div className="flex flex-1 items-center justify-center px-8 pb-14 md:w-1/2 md:pb-0">
        <AnimatePresence mode="wait">
          {activeTab ? (
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="h-full max-h-[min(80vh,660px)] w-full max-w-xl"
            >
              <ViewerWindow title={activeTab.label} onClose={() => go(null)}>
                {activeTab.content}
              </ViewerWindow>
            </motion.div>
          ) : (
            <motion.div
              key="photo"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <PhotoStack />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
