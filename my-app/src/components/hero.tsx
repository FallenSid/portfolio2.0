"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.5 });
  const springY = useSpring(my, { stiffness: 60, damping: 20, mass: 0.5 });

  const gridX = useTransform(springX, (v) => v * 14);
  const gridY = useTransform(springY, (v) => v * 14);
  const labelX = useTransform(springX, (v) => v * -10);
  const labelY = useTransform(springY, (v) => v * -10);
  const headingX = useTransform(springX, (v) => v * 6);
  const headingY = useTransform(springY, (v) => v * 6);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(x);
      my.set(y);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [mx, my, reducedMotion]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-line pt-28 pb-16"
    >
      <motion.div
        aria-hidden
        className="bg-grid absolute inset-[-10%]"
        style={reducedMotion ? undefined : { x: gridX, y: gridY }}
      />
      <div aria-hidden className="noise-overlay" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent)]"
      />

      <div className="container-page relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono-label text-xs tracking-[0.3em] text-blue"
            >
              FRONTEND DEVELOPER · PHARMACY STUDENT
            </motion.p>

            <motion.h1
              style={reducedMotion ? undefined : { x: headingX, y: headingY }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-balance mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-ink"
            >
              I build interfaces that make things work.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
            >
              Frontend-focused developer · Deployment · Backend experience.
              <br />
              Pharmacy student exploring the intersection of software and
              HealthTech.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-medium text-bg transition-transform hover:translate-x-0.5"
              >
                Explore my work
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-muted"
              >
                GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            style={reducedMotion ? undefined : { x: labelX, y: labelY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-mono-label flex shrink-0 flex-col gap-6 text-xs tracking-[0.15em] text-muted lg:items-end"
          >
            <p className="text-ink">GAURAV</p>
            <div className="flex flex-col gap-1 lg:items-end">
              <span className="text-blue">FRONTEND</span>
              <span className="text-blue">DEPLOYMENT</span>
              <span className="text-blue">HEALTHTECH</span>
            </div>
            <div className="flex flex-col gap-1 border-t border-line pt-4 lg:items-end">
              <span>CURRENTLY:</span>
              <span className="text-ink">NEXT.JS + TYPESCRIPT</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-hidden
      >
        <span className="font-mono-label text-[10px] tracking-[0.3em] text-muted">
          SCROLL
        </span>
        <span className="h-10 w-px bg-line" />
      </motion.div>
    </section>
  );
}
