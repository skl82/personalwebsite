"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Headphones, PenLine } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/container";
import { SocialLinks } from "@/components/social-links";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.5, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-12 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:grid-cols-[1.5fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-surface px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent ring-1 ring-border"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="gradient-bg relative inline-flex h-2 w-2 rounded-full" />
            </span>
            {site.tagline}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl"
          >
            Hi, I&apos;m <span className="gradient-text">{site.name}</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {site.intro}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/music"
              className="group gradient-bg inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
            >
              <Headphones className="h-4 w-4" />
              Hear my music
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-fg ring-1 ring-border transition-colors hover:bg-surface"
            >
              <PenLine className="h-4 w-4" />
              Read my writing
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Decorative spinning disc */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-[18rem] lg:block"
        >
          <div
            className="animate-spin-slow absolute inset-0 rounded-full opacity-80 blur-2xl"
            style={{
              background:
                "conic-gradient(from 0deg, var(--color-accent), var(--color-accent-2), var(--color-accent-3), var(--color-cyan), var(--color-accent))",
            }}
          />
          <div className="gradient-bg absolute inset-6 rounded-full p-[2px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-bg">
              <span className="gradient-text font-display text-6xl font-bold">
                {site.initials}
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
