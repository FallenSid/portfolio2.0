import Link from "next/link";
import { EasterEgg } from "@/components/easter-egg";

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@sid.dev" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-10 py-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono-label text-sm font-semibold tracking-[0.2em] text-ink">
              GAURAV
            </p>
            <p className="mt-2 text-sm text-muted">
              Frontend · Deployment · HealthTech
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="font-mono-label text-xs tracking-[0.15em] text-muted underline-link hover:text-ink"
                >
                  {social.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono-label text-[11px] tracking-[0.1em] text-muted">
            © 2026 SID. BUILT WITH NEXT.JS, TYPESCRIPT &amp; FRAMER MOTION.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/lab"
              className="font-mono-label text-[11px] tracking-[0.15em] text-muted hover:text-ink"
            >
              LAB
            </Link>
            <EasterEgg />
          </div>
        </div>
      </div>
    </footer>
  );
}
