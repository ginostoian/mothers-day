"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="cinematic-layer relative min-h-screen">
        {!reduceMotion ? (
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.75, ease: [0.2, 0.82, 0.22, 1] }}
            className="pointer-events-none fixed inset-0 z-40 origin-top bg-[linear-gradient(180deg,_#f8dbe6_0%,_#f4e4da_100%)]"
          />
        ) : null}

        <motion.main
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
          className="relative z-10"
        >
          {children}
        </motion.main>
      </div>
    </AnimatePresence>
  );
}
