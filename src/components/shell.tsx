"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhotoStack } from "@/components/photo-stack";
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
    <div className="relative z-10 mx-auto flex h-dvh w-full max-w-6xl flex-col gap-8 px-6 py-10 sm:px-10 md:flex-row md:gap-16 md:py-0">
      {/* LEFT — name + vertical nav */}
      <aside className="flex shrink-0 flex-col md:h-dvh md:justify-center md:py-16">
        <button onClick={() => go(null)} className="text-left">
          <h1 className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {site.name}
          </h1>
          {site.tagline && (
            <p className="mt-1.5 text-sm text-muted">{site.tagline}</p>
          )}
        </button>

        <nav className="mt-8 flex flex-col items-start gap-2.5 sm:mt-12 sm:gap-3.5">
          {tabs.map((t) => {
            const on = t.id === active;
            return (
              <button
                key={t.id}
                onClick={() => go(on ? null : t.id)}
                aria-current={on ? "true" : undefined}
                className="group flex items-center gap-3 text-xl text-muted transition-colors hover:text-ink sm:text-2xl"
              >
                <span
                  className={cn(
                    "h-px transition-all duration-300",
                    on
                      ? "w-9 bg-accent"
                      : "w-4 bg-line group-hover:w-7 group-hover:bg-ink",
                  )}
                />
                <span className={on ? "text-ink" : undefined}>{t.label}</span>
              </button>
            );
          })}
        </nav>

        {socials.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted sm:mt-16">
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
      </aside>

      {/* RIGHT — photo or viewer window */}
      <section className="flex min-h-0 flex-1 items-center justify-center md:h-dvh">
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
      </section>
    </div>
  );
}
