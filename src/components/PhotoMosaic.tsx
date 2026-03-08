"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import type { PhotoAsset } from "@/types/story";

type PhotoMosaicProps = {
  photos: PhotoAsset[];
};

const layoutVariants = [
  {
    wrapper: "col-span-2 row-span-2 md:col-span-7 md:row-span-6",
    frame: "md:-rotate-[0.8deg]",
  },
  {
    wrapper: "col-span-1 row-span-1 md:col-span-5 md:row-span-3",
    frame: "md:rotate-[0.7deg]",
  },
  {
    wrapper: "col-span-1 row-span-1 md:col-span-5 md:row-span-3",
    frame: "md:-rotate-[0.45deg]",
  },
  {
    wrapper: "col-span-2 row-span-2 md:col-span-4 md:row-span-5",
    frame: "md:rotate-[0.4deg]",
  },
  {
    wrapper: "col-span-1 row-span-1 md:col-span-4 md:row-span-3",
    frame: "md:-rotate-[0.65deg]",
  },
  {
    wrapper: "col-span-1 row-span-1 md:col-span-4 md:row-span-3",
    frame: "md:rotate-[0.5deg]",
  },
  {
    wrapper: "col-span-2 row-span-2 md:col-span-6 md:row-span-4",
    frame: "md:-rotate-[0.45deg]",
  },
  {
    wrapper: "col-span-2 row-span-2 md:col-span-6 md:row-span-4",
    frame: "md:rotate-[0.65deg]",
  },
];

export function PhotoMosaic({ photos }: PhotoMosaicProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const gallery = useMemo(() => photos, [photos]);

  return (
    <>
      <div className="relative">
        <div className="pointer-events-none absolute -left-6 top-6 hidden h-40 w-40 rounded-full bg-[var(--color-rose)]/18 blur-3xl md:block" />
        <div className="pointer-events-none absolute -right-6 bottom-6 hidden h-44 w-44 rounded-full bg-[var(--color-gold)]/20 blur-3xl md:block" />

        <div className="relative grid auto-rows-[130px] grid-cols-2 gap-3 md:auto-rows-[58px] md:grid-cols-12 md:gap-4">
          {gallery.map((photo, index) => {
            const variant = layoutVariants[index % layoutVariants.length];

            return (
              <motion.button
                key={photo.id}
                type="button"
                className={`group relative overflow-hidden rounded-[1.25rem] border border-white/70 bg-white/55 p-1 shadow-[0_16px_38px_rgba(121,94,107,0.17)] transition duration-300 hover:border-[var(--color-rose)]/45 hover:shadow-[0_18px_45px_rgba(121,94,107,0.24)] ${variant.wrapper} ${variant.frame} focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:outline-none`}
                whileInView={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [0, 1],
                        y: [22, 0],
                      }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.52, ease: "easeOut", delay: index * 0.05 }}
                onClick={() => setActiveIndex(index)}
                aria-label={`Deschide fotografia ${index + 1}`}
              >
                <div className="texture-overlay relative h-full w-full overflow-hidden rounded-[1rem]">
                  <Image
                    src={photo.src}
                    alt={photo.altRo}
                    fill
                    unoptimized
                    className="object-cover saturate-[1.04]"
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 34vw, 28vw"
                    loading={index > 1 ? "lazy" : "eager"}
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgb(78_58_66_/_0.86)] via-[rgb(78_58_66_/_0.48)] to-transparent p-3 text-left text-xs text-[var(--color-soft)] md:text-sm">
                    {photo.captionRo}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {activeIndex !== null ? (
        <Lightbox
          photos={gallery}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      ) : null}
    </>
  );
}
