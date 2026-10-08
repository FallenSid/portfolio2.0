import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { Project } from "@/data/projects";

function treatmentStyles(treatment: Project["treatment"]) {
  switch (treatment) {
    case "cinematic":
      return {
        wrapper: "bg-[#05060a]",
        overlay:
          "bg-gradient-to-t from-black/70 via-black/10 to-transparent",
        accent: "text-red",
      };
    case "commercial":
      return {
        wrapper: "bg-surface",
        overlay: "bg-gradient-to-t from-black/50 via-transparent to-transparent",
        accent: "text-blue",
      };
    default:
      return {
        wrapper: "bg-surface",
        overlay: "bg-gradient-to-t from-black/40 via-transparent to-transparent",
        accent: "text-blue",
      };
  }
}

export function ProjectShowcase({
  project,
  reversed,
}: {
  project: Project;
  reversed?: boolean;
}) {
  const styles = treatmentStyles(project.treatment);
  const hasCaseStudy = Boolean(project.caseStudy);

  return (
    <article className="border-b border-line py-20 last:border-b-0 sm:py-28">
      <div className="container-page">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <ScrollReveal>
            <Link
              href={hasCaseStudy ? `/work/${project.slug}` : "#"}
              aria-label={`View ${project.title} ${hasCaseStudy ? "case study" : "project"}`}
              className={`group relative block aspect-[4/3] overflow-hidden rounded-xl border border-line ${styles.wrapper}`}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className={`absolute inset-0 ${styles.overlay}`} />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono-label text-xs tracking-[0.2em] text-white/80">
                  {project.index}
                </span>
                {hasCaseStudy && (
                  <span className="font-mono-label flex items-center gap-1 text-xs tracking-[0.15em] text-white/90">
                    VIEW CASE STUDY
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                )}
              </div>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              <p className={`font-mono-label text-xs tracking-[0.3em] ${styles.accent}`}>
                {project.index} / {project.category.toUpperCase()}
              </p>
              <h3 className="mt-4 text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-[1.05] text-ink">
                {project.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="font-mono-label rounded-full border border-line px-3 py-1 text-[11px] tracking-[0.1em] text-muted"
                  >
                    {tag.toUpperCase()}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                {hasCaseStudy && (
                  <Link
                    href={`/work/${project.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-ink underline-link"
                  >
                    View Case Study
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-label text-xs tracking-[0.1em] text-muted hover:text-ink"
                  >
                    GITHUB ↗
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-label text-xs tracking-[0.1em] text-muted hover:text-ink"
                  >
                    LIVE PROJECT ↗
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </article>
  );
}
