import { ScrollReveal } from "@/components/scroll-reveal";

const links = [
  { label: "Email", href: "mailto:gautamgaurav849@gmail.con", display: "gautamgaurav849@gmail.com" },
  { label: "GitHub", href: "https://github.com/fallensid", display: "github.com/fallensid" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gaurav-gautam-54a281392",
    display: "linkedin.com/in/gaurav-gautam-54a281392",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="font-mono-label text-xs tracking-[0.3em] text-blue">
              CONTACT
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="text-balance mt-5 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.1] text-ink">
              Have something worth building?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-5 text-base text-muted">
              Available for internships, freelance projects and interesting
              collaborations.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-2 text-sm font-medium text-ink underline-link"
                >
                  <span className="font-mono-label text-xs tracking-[0.15em] text-muted">
                    {link.label.toUpperCase()}
                  </span>
                  <span>{link.display}</span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
