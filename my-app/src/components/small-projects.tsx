import { ScrollReveal } from "@/components/scroll-reveal";
import { smallProjects } from "@/data/projects";

export function SmallProjects() {
  return (
    <section className="border-b border-line py-24 sm:py-32">
      <div className="container-page">
        <ScrollReveal>
          <p className="font-mono-label text-xs tracking-[0.3em] text-blue">
            LAB NOTES
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="mt-5 max-w-lg text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.1] text-ink">
            Small things I&apos;ve built.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {smallProjects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.05}>
              <a
                href={project.href}
                className="group flex h-full flex-col justify-between gap-6 rounded-xl border border-line p-6 transition-colors hover:border-muted"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-ink">
                    {project.title}
                  </h3>
                  <span
                    aria-hidden
                    className="font-mono-label text-muted transition-all group-hover:translate-x-0.5 group-hover:text-blue"
                  >
                    →
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono-label rounded-full border border-line px-2.5 py-1 text-[10px] tracking-[0.1em] text-muted"
                    >
                      {tag.toUpperCase()}
                    </li>
                  ))}
                </ul>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
