import { ScrollReveal } from "@/components/scroll-reveal";

const steps = [
  {
    label: "PHARMACY",
    detail: "Healthcare knowledge",
  },
  {
    label: "SOFTWARE",
    detail: "Frontend · Backend · Deployment",
  },
  {
    label: "HEALTHTECH",
    detail: "Better digital experiences",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-line py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <ScrollReveal>
              <p className="font-mono-label text-xs tracking-[0.3em] text-blue">
                ABOUT
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="text-balance mt-5 max-w-lg text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] text-ink">
                A slightly unusual route into software.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-8 flex max-w-lg flex-col gap-5 text-base leading-relaxed text-muted">
                <p>
                  I&apos;m a pharmacy student building my path in software,
                  with a focus on frontend development, deployment, and
                  product experiences.
                </p>
                <p>
                  I&apos;ve also worked across parts of the backend, which
                  gives me a better understanding of what happens beyond the
                  interface.
                </p>
                <p>
                  Long term, I want to work at the intersection of technology
                  and healthcare, building products that make complex
                  information easier to understand and use.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <div className="flex h-full flex-col justify-center gap-0 rounded-2xl border border-line bg-surface p-8 sm:p-10">
              {steps.map((step, i) => (
                <div key={step.label}>
                  <div className="flex items-center justify-between gap-4 py-5">
                    <span className="font-mono-label text-sm tracking-[0.2em] text-ink">
                      {step.label}
                    </span>
                    <span className="text-right text-xs text-muted sm:text-sm">
                      {step.detail}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex items-center gap-3 pl-1">
                      <span aria-hidden className="font-mono-label text-blue">
                        ↓
                      </span>
                      <span className="h-px flex-1 bg-line" />
                    </div>
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
