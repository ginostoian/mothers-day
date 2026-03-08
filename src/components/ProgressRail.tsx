import Link from "next/link";
import type { StoryChapter } from "@/types/story";

type ProgressRailProps = {
  chapters: StoryChapter[];
  currentSlug: string;
};

export function ProgressRail({ chapters, currentSlug }: ProgressRailProps) {
  const currentIndex = chapters.findIndex((chapter) => chapter.slug === currentSlug);

  return (
    <>
      <aside className="fixed top-0 left-0 hidden h-screen w-20 items-center justify-center xl:flex">
        <div className="relative flex h-[78vh] w-full items-center justify-center">
          <div className="timeline-line absolute left-1/2 h-full w-[1px] -translate-x-1/2" />

          <ol className="relative z-10 flex h-[92%] flex-col items-center justify-between">
            {chapters.map((chapter, index) => {
              const active = index === currentIndex;
              const complete = index < currentIndex;

              return (
                <li key={chapter.slug} className="group relative">
                  <Link
                    href={`/capitol/${chapter.slug}`}
                    className={`block h-3 w-3 rounded-full border transition ${
                      active
                        ? "scale-125 border-[var(--color-rose)] bg-[var(--color-rose)]"
                        : complete
                          ? "border-[var(--color-gold)] bg-[var(--color-gold)]/75"
                          : "border-[var(--color-border)] bg-white/70"
                    }`}
                    aria-label={`Capitol: ${chapter.titleRo}`}
                  />
                  <span className="pointer-events-none absolute left-5 top-1/2 hidden w-56 -translate-y-1/2 rounded-md border border-[var(--color-border)] bg-white/95 px-2 py-1 text-xs text-[var(--color-ink)] opacity-0 transition group-hover:block group-hover:opacity-100">
                    {chapter.periodRo}
                  </span>
                </li>
              );
            })}

            <li className="group relative">
              <Link
                href="/final"
                className={`block h-3 w-3 rounded-full border transition ${
                  currentSlug === "final"
                    ? "scale-125 border-[var(--color-rose)] bg-[var(--color-rose)]"
                    : currentIndex === chapters.length - 1
                      ? "border-[var(--color-gold)] bg-[var(--color-gold)]/75"
                      : "border-[var(--color-border)] bg-white/70"
                }`}
                aria-label="Epilog"
              />
              <span className="pointer-events-none absolute left-5 top-1/2 hidden w-56 -translate-y-1/2 rounded-md border border-[var(--color-border)] bg-white/95 px-2 py-1 text-xs text-[var(--color-ink)] opacity-0 transition group-hover:block group-hover:opacity-100">
                Epilog
              </span>
            </li>
          </ol>
        </div>
      </aside>

      <div className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-white/75 px-4 py-3 backdrop-blur-md xl:hidden">
        <div className="mx-auto flex max-w-5xl items-center gap-3">
          <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Parcurs</span>
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-[var(--color-rose)]/15">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--color-rose)] to-[var(--color-gold)]"
              style={{
                width: `${Math.max(5, ((currentIndex + 1) / (chapters.length + 1)) * 100)}%`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
