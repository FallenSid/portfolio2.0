"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CapsuleCatch } from "@/components/game/capsule-catch";

export function EasterEgg() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open a hidden interactive experience"
        className="font-mono-label text-[11px] tracking-[0.15em] text-muted/40 transition-colors hover:text-blue focus-visible:text-blue"
      >
        sid.exe
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Hidden game"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/90 p-4 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md rounded-2xl border border-line bg-surface p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono-label text-xs tracking-[0.2em] text-muted">
                  YOU FOUND SOMETHING
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close game"
                  className="text-muted hover:text-ink"
                >
                  ✕
                </button>
              </div>
              <CapsuleCatch />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
