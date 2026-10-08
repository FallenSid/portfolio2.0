import type { Metadata } from "next";
import { SmallProjects } from "@/components/small-projects";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CapsuleCatch } from "@/components/game/capsule-catch";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Smaller experiments, utilities, and a playable arcade side-project by Sid.",
};

export default function LabPage() {
  return (
    <div className="pt-28">
      <section className="container-page pb-10">
        <ScrollReveal>
          <p className="font-mono-label text-xs tracking-[0.3em] text-blue">
            LAB
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h1 className="text-balance mt-5 max-w-xl text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.1] text-ink">
            Smaller experiments and things built for fun.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-5 max-w-lg text-base text-muted">
            Not everything needs a full case study. This is where the
            smaller, rougher, and more experimental work lives.
          </p>
        </ScrollReveal>
      </section>

      <SmallProjects />

      <section className="py-24 sm:py-32">
        <div className="container-page">
          <ScrollReveal>
            <p className="font-mono-label text-xs tracking-[0.3em] text-red">
              ARCADE
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="mt-5 max-w-lg text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.1] text-ink">
              Capsule Catch
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 max-w-lg text-sm text-muted">
              A tiny browser game built with canvas and a handful of keyboard
              and touch events — mostly an excuse to practice a game loop.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mx-auto mt-10 max-w-md">
              <CapsuleCatch />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
