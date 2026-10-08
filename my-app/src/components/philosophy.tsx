import { ScrollReveal } from "@/components/scroll-reveal";

const traits = [
  {
    number: "01",
    title: "Adaptive",
    description: "Learn what the problem requires.",
  },
  {
    number: "02",
    title: "Curious",
    description: "Understand what's happening underneath the interface.",
  },
  {
    number: "03",
    title: "Stubborn",
    description: "If it isn't working, keep digging.",
  },
  {
    number: "04",
    title: "Make it work",
    description: "Build first. Refine relentlessly.",
  },
];

export function Philosophy() {
  return (
    <section className="border-b border-line py-24 sm:py-32">
      <div className="container-page">
        <ScrollReveal>
          <p className="font-mono-label text-xs tracking-[0.3em] text-blue">
            PHILOSOPHY
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="mt-5 max-w-lg text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] text-ink">
            How I work.
          </h2>
        </ScrollReveal>

        <div className="mt-14 divide-y divide-line border-t border-line">
          {traits.map((trait, i) => (
            <ScrollReveal key={trait.title} delay={i * 0.05}>
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 py-8 sm:grid-cols-[80px_1fr_1fr] sm:items-center">
                <span className="font-mono-label text-sm text-muted">
                  {trait.number}
                </span>
                <h3 className="text-2xl font-semibold text-ink transition-colors group-hover:text-blue sm:text-3xl">
                  {trait.title}
                </h3>
                <p className="col-span-2 mt-2 text-sm text-muted sm:col-span-1 sm:mt-0 sm:text-right sm:text-base">
                  {trait.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
