"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <span className="h-3 w-3 bg-accent transition-transform duration-300 group-hover:rotate-45" />
          <span className="font-display text-2xl uppercase leading-none tracking-tight">
            {site.name}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 sm:flex">
          {nav.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-fg"
              >
                {item.label}
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest transition-colors",
                  isActive(item.href) ? "text-accent" : "text-muted hover:text-fg",
                )}
              >
                {isActive(item.href) && (
                  <span className="h-1.5 w-1.5 bg-accent" />
                )}
                {item.label}
              </Link>
            ),
          )}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center border border-border text-fg sm:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border sm:hidden"
          >
            <div className="flex flex-col">
              {nav.map((item, i) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-border px-5 py-4 font-mono text-xs uppercase tracking-widest text-muted"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 border-b border-border px-5 py-4 font-mono text-xs uppercase tracking-widest",
                      isActive(item.href) ? "text-accent" : "text-muted",
                    )}
                  >
                    <span className="text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
