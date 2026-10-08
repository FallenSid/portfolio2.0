import { ScrollReveal } from "@/components/scroll-reveal";

export function Direction() {
  return (
    <section className="border-b border-line bg-surface py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <ScrollReveal>
              <p className="font-mono-label text-xs tracking-[0.3em] text-red">
                DIRECTION
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="text-balance mt-5 max-w-lg text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] text-ink">
                Where I&apos;m heading.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-8 flex max-w-lg flex-col gap-5 text-base leading-relaxed text-muted">
                <p>
                  Healthcare has a strange problem: it contains enormous
                  amounts of complex information, but the people who need it
                  don&apos;t always have the tools to understand it easily.
                </p>
                <p>
                  My long-term goal is to combine my background in pharmacy
                  with software development to build better digital
                  healthcare experiences.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <div className="flex h-full flex-col justify-center gap-6 rounded-2xl border border-line bg-bg p-8 sm:p-10">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <div className="text-center">
                  <p className="font-mono-label text-sm tracking-[0.15em] text-ink">
                    PHARMACY
                  </p>
                  <p className="mt-1 text-xs text-muted">Healthcare knowledge</p>
                </div>
                <span aria-hidden className="font-mono-label text-blue">
                  +
                </span>
                <div className="text-center">
                  <p className="font-mono-label text-sm tracking-[0.15em] text-ink">
                    SOFTWARE
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Frontend · Backend · Deployment
                  </p>
                </div>
              </div>

              <div className="flex justify-center" aria-hidden>
                <span className="font-mono-label text-blue">↓</span>
              </div>

              <div className="rounded-xl border border-blue/30 bg-blue/5 py-6 text-center">
                <p className="font-mono-label text-sm tracking-[0.2em] text-blue">
                  HEALTHTECH
                </p>
                <p className="mt-1 text-xs text-muted">
                  Better digital experiences
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
