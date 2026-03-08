"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { PhotoAsset } from "@/types/story";

type LightboxProps = {
  photos: PhotoAsset[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

const mod = (value: number, total: number) => {
  if (value < 0) return total - 1;
  if (value >= total) return 0;
  return value;
};

export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const current = photos[index];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate(mod(index + 1, photos.length));
      if (event.key === "ArrowLeft") onNavigate(mod(index - 1, photos.length));
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, onClose, onNavigate, photos.length]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgb(89_68_76_/_0.78)] px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Vizualizare fotografie"
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate(mod(index - 1, photos.length));
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--color-border)] bg-white/65 px-3 py-2 text-[var(--color-ink)] transition hover:border-[var(--color-rose)]"
        aria-label="Fotografia anterioară"
      >
        ←
      </button>

      <div
        className="relative w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border)]">
          <Image
            src={current.src}
            alt={current.altRo}
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[var(--color-soft)]">
          <p className="text-base md:text-lg">{current.captionRo}</p>
          {current.creditUrl ? (
            <a
              href={current.creditUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-[#ffe4ef] underline-offset-4 hover:underline"
            >
              Foto: {current.creditName}
            </a>
          ) : (
            <span className="text-xs uppercase tracking-[0.2em] text-[#ffe4ef]">
              Foto: {current.creditName}
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate(mod(index + 1, photos.length));
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--color-border)] bg-white/65 px-3 py-2 text-[var(--color-ink)] transition hover:border-[var(--color-rose)]"
        aria-label="Fotografia următoare"
      >
        →
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 rounded-full border border-[var(--color-border)] bg-white/65 px-3 py-1 text-sm text-[var(--color-ink)] transition hover:border-[var(--color-rose)]"
        aria-label="Închide"
      >
        Închide
      </button>
    </div>
  );
}
