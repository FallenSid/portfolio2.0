import { ScrollReveal } from "@/components/scroll-reveal";
import { ProjectShowcase } from "@/components/project-showcase";
import { featuredProjects } from "@/data/projects";

export function WorkSection() {
  return (
    <section id="work" className="border-b border-line">
      <div className="container-page pt-24 sm:pt-32">
        <ScrollReveal>
          <p className="font-mono-label text-xs tracking-[0.3em] text-blue">
            SELECTED WORK
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="text-balance mt-5 max-w-xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] text-ink">
            Three projects, three different kinds of problems.
          </h2>
        </ScrollReveal>
      </div>

      <div className="mt-16">
        {featuredProjects.map((project, i) => (
          <ProjectShowcase
            key={project.slug}
            project={project}
            reversed={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
