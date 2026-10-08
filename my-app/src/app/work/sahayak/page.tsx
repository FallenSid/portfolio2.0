import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { featuredProjects } from "@/data/projects";
import { CaseStudyShell, CaseStudySection } from "@/components/case-study-shell";

const project = featuredProjects.find((p) => p.slug === "sahayak");

export const metadata: Metadata = {
  title: "Sahayak — Case Study",
  description:
    "A web tool designed to help non-medical users understand reports and symptoms more clearly.",
};

export default function SahayakPage() {
  if (!project || !project.caseStudy) notFound();

  return (
    <CaseStudyShell
      project={project}
      tagline="Making health information easier to understand."
    >
      {project.caseStudy.map((section) => (
        <CaseStudySection key={section.heading} heading={section.heading}>
          {section.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </CaseStudySection>
      ))}
    </CaseStudyShell>
  );
}
