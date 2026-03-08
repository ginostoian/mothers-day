export type ChapterPhase =
  | "before_robert"
  | "pregnancy_robert"
  | "after_robert"
  | "pregnancy_eva"
  | "after_eva"
  | "final";

export type ChapterAccent = "gold" | "rose" | "sunset" | "ivory";

export type PhotoAsset = {
  id: string;
  src: string;
  altRo: string;
  captionRo: string;
  creditName: string;
  creditUrl: string;
};

export type StoryChapter = {
  slug: string;
  titleRo: string;
  periodRo: string;
  phase: ChapterPhase;
  narrativeRo: string;
  truthRo: string;
  photos: PhotoAsset[];
  accent: ChapterAccent;
};

export type SiteMetaRo = {
  title: string;
  subtitle: string;
  dedication: string;
  launchDateRo: string;
  musicUrl: string;
};

export type HeroMessageRo = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
};

export type FinalLetterRo = {
  title: string;
  paragraphs: string[];
  signature: string;
};
