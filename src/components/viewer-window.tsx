"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

// The "little scrollable viewer window" the nav content appears in.
export function ViewerWindow({
  title,
  onClose,
  active,
  children,
}: {
  title: string;
  onClose: () => void;
  // True when this pane is the one on screen. Panes stay mounted (so embeds
  // stay warm), so we reset the scroll to the top each time one is re-opened.
  active?: boolean;
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (active && scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [active]);

  return (
    <div className="flex h-full w-full flex-col border border-line bg-paper-2 shadow-[0_24px_70px_-30px_rgba(40,33,20,0.55)]">
      {/* title bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-line px-4 py-2.5">
        <span className="flex items-center gap-2 text-sm text-muted">
          <span className="h-1.5 w-1.5 bg-accent" />
          {title}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="close"
          className="text-muted transition-colors hover:text-accent"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      {/* scrollable body */}
      <div
        ref={scrollRef}
        className="scroll-paper min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-7"
      >
        {children}
      </div>
    </div>
  );
}
