"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { PhotoMosaic } from "@/components/PhotoMosaic";
import type { StoryChapter } from "@/types/story";

type ChapterSceneProps = {
  chapter: StoryChapter;
  chapterIndex: number;
  totalChapters: number;
  previousHref: string | null;
  nextHref: string;
  nextLabel: string;
};

const accentClasses: Record<StoryChapter["accent"], string> = {
  gold: "accent-gold",
  rose: "accent-rose",
  sunset: "accent-sunset",
  ivory: "accent-ivory",
};

export function ChapterScene({
  chapter,
  chapterIndex,
  totalChapters,
  previousHref,
  nextHref,
  nextLabel,
}: ChapterSceneProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={`mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 md:py-14 xl:px-0 ${accentClasses[chapter.accent]}`}>
      <div className="glass-card rounded-3xl p-6 md:p-10">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-color)]">
            Capitolul {chapterIndex + 1} din {totalChapters} - {chapter.periodRo}
          </p>

          <h1 className="story-title text-4xl text-[var(--color-ink)] md:text-6xl">{chapter.titleRo}</h1>

          <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">{chapter.narrativeRo}</p>

          <blockquote className="rounded-2xl border border-[var(--accent-color)]/55 bg-white/70 px-5 py-4 text-base leading-relaxed text-[var(--color-ink)] md:text-lg">
            {chapter.truthRo}
          </blockquote>
        </motion.div>

        <div className="mt-9">
          <PhotoMosaic photos={chapter.photos} />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] pt-6">
          {previousHref ? (
            <Link
              href={previousHref}
              className="rounded-full border border-[var(--color-border)] px-5 py-2 text-sm uppercase tracking-[0.16em] text-[var(--color-ink)] transition hover:border-[var(--color-rose)]/65"
            >
              Capitolul anterior
            </Link>
          ) : (
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Începutul poveștii</span>
          )}

          <Link
            href={nextHref}
            className="rounded-full border border-[var(--accent-color)]/65 bg-[var(--accent-color)]/24 px-6 py-2 text-sm uppercase tracking-[0.16em] text-[var(--color-ink)] transition hover:border-[var(--accent-color)] hover:bg-[var(--accent-color)]/35"
          >
            {nextLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
