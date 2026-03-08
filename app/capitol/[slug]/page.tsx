import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChapterScene } from "@/components/ChapterScene";
import { ProgressRail } from "@/components/ProgressRail";
import { chapters, siteMetaRo } from "@/content/timeline.ro";

type ChapterPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = chapters.find((item) => item.slug === slug);

  if (!chapter) {
    return {
      title: siteMetaRo.title,
    };
  }

  return {
    title: `${chapter.titleRo} | ${siteMetaRo.title}`,
    description: chapter.narrativeRo,
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapterIndex = chapters.findIndex((item) => item.slug === slug);

  if (chapterIndex < 0) {
    notFound();
  }

  const chapter = chapters[chapterIndex];
  const previousHref = chapterIndex > 0 ? `/capitol/${chapters[chapterIndex - 1].slug}` : null;
  const hasNextChapter = chapterIndex < chapters.length - 1;

  const nextHref = hasNextChapter
    ? `/capitol/${chapters[chapterIndex + 1].slug}`
    : "/final";

  const nextLabel = hasNextChapter ? "Capitolul următor" : "Mergi la epilog";

  return (
    <div className="pb-20">
      <ProgressRail chapters={chapters} currentSlug={chapter.slug} />
      <ChapterScene
        chapter={chapter}
        chapterIndex={chapterIndex}
        totalChapters={chapters.length}
        previousHref={previousHref}
        nextHref={nextHref}
        nextLabel={nextLabel}
      />
    </div>
  );
}
