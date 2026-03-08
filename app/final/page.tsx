import Link from "next/link";
import { ProgressRail } from "@/components/ProgressRail";
import { chapters, finalLetterRo, siteMetaRo } from "@/content/timeline.ro";

export default function FinalPage() {
  return (
    <div className="pb-20">
      <ProgressRail chapters={chapters} currentSlug="final" />

      <section className="mx-auto w-full max-w-4xl px-6 py-14 sm:px-8 md:py-20">
        <div className="glass-card texture-overlay rounded-3xl p-7 md:p-12">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-rose)]">
            {siteMetaRo.launchDateRo} - Epilog
          </p>

          <h1 className="story-title mt-4 text-5xl text-[var(--color-ink)] md:text-7xl">{finalLetterRo.title}</h1>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--color-muted)]">
            {finalLetterRo.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="story-title mt-10 text-3xl text-[var(--color-ink)] md:text-4xl">{finalLetterRo.signature}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-[var(--color-border)] px-5 py-2 text-xs uppercase tracking-[0.2em] text-[var(--color-ink)] transition hover:border-[var(--color-rose)]/65"
            >
              Reia povestea
            </Link>
            <Link
              href={`/capitol/${chapters[0].slug}`}
              className="rounded-full border border-[var(--color-rose)]/70 bg-[var(--color-rose)]/18 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[var(--color-ink)] transition hover:bg-[var(--color-rose)]/25"
            >
              Înapoi la primul capitol
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
