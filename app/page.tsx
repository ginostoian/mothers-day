import { CinematicHero } from "@/components/CinematicHero";
import { chapters, heroMessageRo, siteMetaRo } from "@/content/timeline.ro";

export default function HomePage() {
  const firstChapterSlug = chapters[0]?.slug ?? "prolog-8-martie";

  return (
    <div className="pb-20">
      <CinematicHero
        heroMessage={heroMessageRo}
        dedication={siteMetaRo.dedication}
        firstChapterSlug={firstChapterSlug}
        chapterPreview={chapters.slice(0, 5)}
      />

      <section className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-14">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Înainte de copii",
              text: "Fundația iubirii, muncii și caracterului care a construit această familie.",
            },
            {
              title: "Sarcină și începuturi",
              text: "Drumul curajos prin lunile de așteptare, cu Robert și apoi cu Eva.",
            },
            {
              title: "Prezentul nostru",
              text: "Două suflete mici și o mamă fără egal care ține inima casei vie.",
            },
          ].map((card) => (
            <article key={card.title} className="glass-card rounded-2xl p-5">
              <h2 className="story-title text-3xl text-[var(--color-ink)]">{card.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-[var(--color-muted)]">{card.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
