"use client";

import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = {
  src: string;
};

export function MusicPlayer({ src }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowHint(false), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  const togglePlayback = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setFailed(false);
    } catch {
      setFailed(true);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-2 text-sm text-[var(--color-ink)] shadow-2xl backdrop-blur-md sm:right-6 sm:bottom-6">
      <button
        type="button"
        onClick={togglePlayback}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-soft)] transition hover:border-[var(--color-rose)]/70 hover:text-[var(--color-rose)] focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:outline-none"
        aria-label={isPlaying ? "Pauză muzică" : "Pornește muzica"}
      >
        <span aria-hidden>{isPlaying ? "❚❚" : "▶"}</span>
      </button>

      <div className="hidden items-center gap-2 sm:flex">
        <span className="text-[var(--color-rose)]" aria-hidden>
          ♪
        </span>
        <p className="max-w-44 leading-tight text-[var(--color-muted)]">
          {failed
            ? "Nu am putut reda muzica acum."
            : "Fundal muzical discret pentru poveste."}
        </p>
      </div>

      {!isPlaying && showHint ? (
        <span className="rounded-full bg-[var(--color-rose)]/18 px-2 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink)]">
          Apasă play
        </span>
      ) : null}

      <audio
        ref={audioRef}
        src={src}
        preload="none"
        loop
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}
