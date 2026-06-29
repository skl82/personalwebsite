"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PhotoStack } from "@/components/photo-stack";
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
  // Which hero facet is currently active — drives the first-name color.
  const [heroIndex, setHeroIndex] = useState(0);

  // Reflect the active panel in the URL hash (shareable / refresh-safe),
  // without ever navigating to a new page or tab.
  useEffect(() => {
    const sync = () => {
      // First hash segment is the tab; anything after (e.g. #writing/<slug>)
      // is an in-pane sub-route owned by that pane.
      const h = window.location.hash.replace("#", "").split("/")[0];
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
    // replaceState doesn't emit hashchange, so hash-driven panes (the writing
    // pane's open-article state) wouldn't otherwise re-sync. Nudge them so
    // returning to a tab always lands on its top-level view (the article list).
    window.dispatchEvent(new Event("hashchange"));
  };

  const activeTab = tabs.find((t) => t.id === active) ?? null;

  // First name takes on the active hero photo's accent (site.heroAccents),
  // cross-fading as the photo stack drifts. Surname stays ink.
  const [firstName, ...lastName] = site.name.split(" ");
  const heroColor = site.heroAccents?.[heroIndex];

  return (
    <div className="relative z-10 flex h-dvh w-full flex-col-reverse overflow-hidden md:flex-row">
      {/* LEFT HALF — name + nav, centered */}
      {/* On mobile this sits at the bottom (flex-col-reverse), so its lower edge
          meets the home indicator / floating Safari toolbar. pb gains the
          safe-area inset to keep the last nav item ("resume") clear of them.
          md:py-0 restores the desktop layout untouched (and env() is 0 there). */}
      <div className="flex flex-1 items-center justify-center px-8 pt-14 pb-[calc(1.5rem+env(safe-area-inset-bottom))] md:w-1/2 md:py-0">
        <div className="flex flex-col items-center md:items-start">
          <button onClick={() => go(null)} className="text-center md:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              <span
                className="transition-colors duration-700 ease-out"
                style={{ color: heroColor }}
              >
                {firstName}
              </span>
              {lastName.length > 0 && ` ${lastName.join(" ")}`}
            </h1>
          </button>

          {site.bio && (
            <p className="mt-4 max-w-xs text-center text-sm leading-relaxed text-ink/85 sm:max-w-sm md:text-left">
              {site.bio}
            </p>
          )}

          {/* Mobile: a 2×3 spreadsheet-style grid (Music/Reading · Writing/Projects
              · Contact/Resume) — half the height of a 6-item column, keeping the
              bio + nav clear of the photo stack. Cells share hairline borders to
              read as one continuous rectangle: the container draws the top + left
              edges, each cell draws its right + bottom edge (so no doubling).
              Desktop (md+): the original borderless vertical list. */}
          <nav className="mt-8 grid w-full grid-cols-2 border-t-2 border-l-2 border-line sm:mt-10 md:flex md:w-auto md:flex-col md:items-start md:gap-4 md:border-0">
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
                    className="group relative inline-flex items-center text-lg text-muted transition-colors hover:text-ink max-md:order-1 max-md:flex max-md:items-center max-md:justify-center max-md:border-r-2 max-md:border-b-2 max-md:border-line max-md:py-3 sm:text-xl"
                  >
                    {marker}
                    <span>{t.label}</span>
                    {/* Mobile (no hover): logo + arrow are always shown. Desktop
                        (md+): hidden by default, slide out on hover. */}
                    <span className="inline-flex max-w-[3rem] translate-x-0 items-center overflow-hidden opacity-100 transition-all duration-300 md:max-w-0 md:-translate-x-1 md:opacity-0 md:group-hover:max-w-[3rem] md:group-hover:translate-x-0 md:group-hover:opacity-100">
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
                  className="group relative text-lg text-muted transition-colors hover:text-ink max-md:flex max-md:items-center max-md:justify-center max-md:border-r-2 max-md:border-b-2 max-md:border-line max-md:py-3 sm:text-xl"
                >
                  {marker}
                  <span className={on ? "text-ink" : undefined}>{t.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* RIGHT HALF — the hero and EVERY content pane are all mounted at once,
          absolutely stacked, and cross-faded with opacity. Keeping every pane
          mounted from first paint means heavy embeds (the Spotify players) load
          on landing and stay warm in the background, so opening a tab is
          instant — no re-mount, no jerky reload. Inert hides inactive panes
          from pointer + keyboard without unmounting them. */}
      <div className="relative flex-1 md:w-1/2">
        {/* hero */}
        <div
          inert={activeTab ? true : undefined}
          className={cn(
            "absolute inset-0 flex items-center justify-center px-8 pt-14 pb-0 opacity-100 transition-opacity duration-200 ease-in-out md:pt-0 md:pb-0",
            // On desktop the hero cross-fades with the active pane. On mobile the
            // pane is a full-screen overlay, so the hero simply stays put behind it.
            activeTab && "md:pointer-events-none md:opacity-0",
          )}
        >
          <PhotoStack onActiveChange={setHeroIndex} />
        </div>

        {/* one persistent viewer window per content tab */}
        {tabs
          .filter((t) => t.content)
          .map((t) => {
            const on = t.id === active;
            return (
              <div
                key={t.id}
                inert={on ? undefined : true}
                // Opacity is set inline (not via a class) so inactive panes are
                // hidden on the very first paint — before the stylesheet loads.
                // With a class, the opacity-0 isn't applied until CSS arrives, so
                // every pane briefly renders stacked in normal flow on load. The
                // transition-opacity class still animates this inline change, so
                // the cross-fade is unaffected.
                style={{ opacity: on ? 1 : 0 }}
                className={cn(
                  // Mobile: a full-screen fixed overlay that floats above the
                  // hero + nav. Desktop (md+): an absolute pane within the right
                  // half that cross-fades with the hero — unchanged.
                  "flex items-center justify-center transition-opacity duration-200 ease-in-out",
                  "fixed inset-0 z-50 p-4 md:absolute md:z-auto md:p-0 md:px-8",
                  !on && "pointer-events-none",
                )}
              >
                {/* Mobile-only scrim: dims the page and closes the overlay when
                    tapped outside the window. Hidden on desktop. */}
                <button
                  type="button"
                  aria-label="close"
                  tabIndex={-1}
                  onClick={() => go(null)}
                  className="absolute inset-0 -z-10 cursor-default bg-ink/40 backdrop-blur-[2px] md:hidden"
                />
                <div className="h-full max-h-[85vh] w-full max-w-xl md:max-h-[min(80vh,660px)]">
                  <ViewerWindow
                    title={t.label}
                    active={on}
                    onClose={() => go(null)}
                  >
                    {t.content}
                  </ViewerWindow>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
