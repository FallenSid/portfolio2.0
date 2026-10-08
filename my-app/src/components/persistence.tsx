import { ScrollReveal } from "@/components/scroll-reveal";

const steps = ["LEARN", "BUILD", "BREAK", "DEBUG", "ADAPT", "SHIP"];

export function Persistence() {
  return (
    <section className="border-b border-line py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <ScrollReveal>
              <h2 className="text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.15] text-ink">
                I don&apos;t always know how to build something.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="mt-5 text-xl text-muted">I usually figure it out.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-start gap-1">
              {steps.map((step, i) => (
                <div key={step} className="flex flex-col items-start">
                  <span className="font-mono-label text-sm tracking-[0.25em] text-ink">
                    {step}
                  </span>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="py-1 pl-1 font-mono-label text-sm text-blue"
                    >
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
