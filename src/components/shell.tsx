"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhotoStack } from "@/components/photo-stack";
import { SpotifyPreload } from "@/components/spotify-preload";
import { ViewerWindow } from "@/components/viewer-window";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export type Tab = { id: string; label: string; content: React.ReactNode };

const socials = [
  { label: "linkedin", href: site.socials.linkedin },
  { label: "github", href: site.socials.github },
  { label: "substack", href: site.socials.substack },
  { label: "email", href: site.email ? `mailto:${site.email}` : "" },
].filter((s) => s.href);

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
              return (
                <button
                  key={t.id}
                  onClick={() => go(on ? null : t.id)}
                  aria-current={on ? "true" : undefined}
                  className="group relative text-lg text-muted transition-colors hover:text-ink sm:text-xl"
                >
                  {/* active/hover marker sits in the left gutter — never shifts the label */}
                  <span
                    className={cn(
                      "absolute top-1/2 right-full mr-3 hidden h-px -translate-y-1/2 transition-all duration-300 md:block",
                      on
                        ? "w-6 bg-accent opacity-100"
                        : "w-4 bg-ink opacity-0 group-hover:opacity-100",
                    )}
                  />
                  <span className={on ? "text-ink" : undefined}>{t.label}</span>
                </button>
              );
            })}
          </nav>

          {socials.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted sm:mt-14">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="link"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
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
