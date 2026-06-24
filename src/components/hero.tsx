"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Container } from "@/components/container";
import { SocialLinks } from "@/components/social-links";

const indexItems = nav.filter((item) => item.href !== "/");

export function Hero() {
  return (
    <section className="relative border-b border-border">
      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.55fr_1fr]">
        {/* Left — identity */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="label flex items-center gap-2 text-muted">
            <span className="text-accent">&gt;</span>
            {site.tagline}
            <span className="cursor" />
          </p>

          <h1 className="font-display mt-6 text-[clamp(3.5rem,12vw,8.5rem)] uppercase leading-[0.85] tracking-tight">
            {site.name}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/music"
              className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-colors hover:bg-transparent hover:text-accent"
            >
              Hear my music
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-fg transition-colors hover:border-fg"
            >
              Read my writing
            </Link>
          </div>

          <div className="mt-9">
            <SocialLinks />
          </div>
        </motion.div>

        {/* Right — index panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden border border-border lg:block"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="label text-muted">Index</span>
            <span className="label text-dim">Est · 2026</span>
          </div>
          <ul>
            {indexItems.map((item, i) => {
              const inner = (
                <>
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl uppercase tracking-tight transition-colors group-hover:text-accent">
                      {item.label}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-dim transition-colors group-hover:text-accent" />
                </>
              );
              const cls =
                "group flex items-center justify-between px-4 py-4 transition-colors hover:bg-panel";
              return (
                <li key={item.label} className="border-b border-border last:border-b-0">
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
                      {inner}
                    </a>
                  ) : (
                    <Link href={item.href} className={cls}>
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="border-t border-border px-4 py-3">
            <span className="label text-dim">{site.email}</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
