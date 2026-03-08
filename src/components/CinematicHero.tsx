"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { HeroMessageRo, StoryChapter } from "@/types/story";

type CinematicHeroProps = {
  heroMessage: HeroMessageRo;
  dedication: string;
  firstChapterSlug: string;
  chapterPreview: StoryChapter[];
};

export function CinematicHero({
  heroMessage,
  dedication,
  firstChapterSlug,
  chapterPreview,
}: CinematicHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden px-6 pt-16 pb-14 sm:px-10 md:pt-24 md:pb-20 lg:px-14">
      <div className="absolute -top-24 left-[-10%] h-80 w-80 rounded-full bg-[var(--color-rose)]/22 blur-3xl" />
      <div className="absolute -right-16 top-28 h-72 w-72 rounded-full bg-[var(--color-sunset)]/18 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-rose)]">{heroMessage.eyebrow}</p>

          <h1 className="story-title max-w-3xl text-5xl leading-[0.94] text-[var(--color-ink)] sm:text-6xl md:text-7xl lg:text-8xl">
            {heroMessage.headline}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-muted)] sm:text-xl">{heroMessage.subheadline}</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/capitol/${firstChapterSlug}`}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-rose)]/20 px-8 py-3 text-sm uppercase tracking-[0.22em] text-[var(--color-ink)] transition hover:border-[var(--color-rose)]/60 hover:bg-[var(--color-rose)]/30 focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:outline-none"
            >
              {heroMessage.ctaLabel}
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">{dedication}</p>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: reduceMotion ? 0 : 0.08 }}
          className="glass-card texture-overlay rounded-3xl p-6"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-rose)]">Capitole</p>
          <ul className="mt-6 space-y-3">
            {chapterPreview.map((chapter, index) => (
              <li key={chapter.slug}>
                <Link
                  href={`/capitol/${chapter.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-white/60 px-3 py-2 transition hover:border-[var(--color-rose)]/55"
                >
                  <span className="text-sm text-[var(--color-ink)] md:text-base">{chapter.titleRo}</span>
                  <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{String(index + 1).padStart(2, "0")}</span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
