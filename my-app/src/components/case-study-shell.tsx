import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/data/projects";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CaseStudyShell({
  project,
  tagline,
  children,
}: {
  project: Project;
  tagline: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="pt-28">
      <div className="container-page">
        <Link
          href="/#work"
          className="font-mono-label inline-flex items-center gap-2 text-xs tracking-[0.15em] text-muted hover:text-ink"
        >
          ← BACK TO WORK
        </Link>

        <p className="font-mono-label mt-8 text-xs tracking-[0.3em] text-blue">
          {project.index} / {project.category.toUpperCase()}
        </p>
        <h1 className="text-balance mt-5 max-w-3xl text-[clamp(2rem,5.5vw,4rem)] font-semibold leading-[1.05] text-ink">
          {project.title}
        </h1>
        <p className="text-balance mt-6 max-w-xl text-lg text-muted">
          {tagline}
        </p>

        <ScrollReveal>
          <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-xl border border-line bg-surface sm:mt-16">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </div>

      <div className="container-page mt-16 pb-24 sm:mt-20 sm:pb-32">
        <div className="mx-auto max-w-2xl">{children}</div>

        <div className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center gap-6 border-t border-line pt-10">
          {project.links.github && (
            <a
              href={project.links.github.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-muted"
            >
              GitHub ↗
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:translate-x-0.5"
            >
              Live Project ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function CaseStudySection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <ScrollReveal>
      <section className="mt-14 first:mt-0">
        <h2 className="font-mono-label text-xs tracking-[0.2em] text-blue">
          {heading.toUpperCase()}
        </h2>
        <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted">
          {children}
        </div>
      </section>
    </ScrollReveal>
  );
}
