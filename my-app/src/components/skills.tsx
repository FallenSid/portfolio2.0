import { ScrollReveal } from "@/components/scroll-reveal";

const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "HTML", "CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "APIs", "Authentication", "Databases"],
  },
  {
    title: "Deployment",
    items: ["Git", "GitHub", "Cloud deployment", "CI/CD"],
  },
  {
    title: "Currently exploring",
    items: ["Deeper TypeScript", "System design", "Scalable frontend architecture"],
  },
];

export function Skills() {
  return (
    <section className="border-b border-line py-24 sm:py-32">
      <div className="container-page">
        <ScrollReveal>
          <p className="font-mono-label text-xs tracking-[0.3em] text-blue">
            SKILLS
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="mt-5 max-w-lg text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] text-ink">
            A growing, evolving toolkit.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-5 max-w-lg text-sm text-muted">
            No percentages, no inflated claims — just what I use and what
            I&apos;m actively learning.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.title} delay={i * 0.05}>
              <div className="h-full bg-surface p-7">
                <h3 className="font-mono-label text-xs tracking-[0.15em] text-blue">
                  {group.title.toUpperCase()}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
