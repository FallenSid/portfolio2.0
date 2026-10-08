import { ScrollReveal } from "@/components/scroll-reveal";

const items = [
  {
    title: "Chess",
    description: "Strategy, intuition, experimentation.",
  },
  {
    title: "Science & Healthcare",
    description: "The field I study and want to build for.",
  },
  {
    title: "Experiments",
    description:
      "Small ideas, prototypes, and things built simply because they seemed interesting.",
  },
];

export function OutsideStack() {
  return (
    <section className="border-b border-line py-24 sm:py-32">
      <div className="container-page">
        <ScrollReveal>
          <p className="font-mono-label text-xs tracking-[0.3em] text-blue">
            OUTSIDE THE STACK
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-line p-6">
                <h3 className="text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
