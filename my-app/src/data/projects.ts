export type ProjectLink = {
  label: string;
  href: string;
};

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  treatment: "product" | "cinematic" | "commercial";
  links: {
    github?: ProjectLink;
    live?: ProjectLink;
  };
  caseStudy?: CaseStudySection[];
};

export const featuredProjects: Project[] = [
  {
    slug: "sahayak",
    index: "01",
    title: "Sahayak",
    tagline: "Making health information easier to understand.",
    category: "HealthTech / Frontend / Product",
    description:
      "A web tool designed to help non-medical users understand reports and symptoms more clearly.",
    tags: ["HealthTech", "Frontend", "UX", "Deployment"],
    image: "/images/sahayak.jpg",
    imageAlt:
      "An image of sahayak interface of landing page.",
    treatment: "product",
    links: {
      github: { label: "GitHub", href: "https://github.com/Creatrix106/Sahayak" },
      live: { label: "Live Project", href: "https://sahayakapi.vercel.app/" },
    },
    caseStudy: [
      {
        heading: "The Problem",
        body: [
          "Medical reports and symptom descriptions are usually written for clinicians, not for the people reading them at home. Lab values, abbreviations, and clinical phrasing can make a routine report feel confusing or alarming, even when the result itself is unremarkable.",
          "As a pharmacy student, I kept noticing the same gap: the information is technically available, but it isn't built for the person who actually needs to understand it quickly.",
        ],
      },
      {
        heading: "The Idea",
        body: [
          "Sahayak started as a simple question — what would it look like if someone translated a report the way a pharmacist or clinician would explain it out loud, rather than the way it's printed on paper?",
          "The goal wasn't to replace medical advice. It was to reduce the gap between 'here is your data' and 'here is what it generally means', so a non-medical reader has a clearer starting point.",
        ],
      },
      {
        heading: "Designing for Non-Medical Users",
        body: [
          "Every interface decision was filtered through one constraint: the reader may have no clinical background at all. That meant prioritizing plain language, calm visual hierarchy, and a layout that doesn't rely on medical literacy to feel usable.",
          "I spent time thinking about tone as much as layout — the interface needed to feel reassuring and precise, not clinical and cold, and not casual to the point of feeling untrustworthy.",
        ],
      },
      {
        heading: "Technical Approach",
        body: [
          "Built with React.js and Javascript on the frontend, with attention to component structure so new report types or input formats could be added without reworking the core UI.",
          "I focused on a clean separation between the presentation layer and the underlying logic, so the project could evolve as I learn more about structuring frontend applications at scale.",
        ],
      },
      {
        heading: "What I Built",
        body: [
          "A focused interface for submitting a report or describing symptoms, and viewing a simplified, structured breakdown in return — organized in a way that's easy to scan rather than read top to bottom like a document.",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "Balancing simplicity with accuracy was the hardest part of this project. It's easy to simplify language to the point where it loses meaning, and just as easy to over-explain and recreate the same confusion in a different format.",
          "I'm still refining where that line sits, and treating this as an ongoing design problem rather than something to solve once.",
        ],
      },
      {
        heading: "What I Learned",
        body: [
          "This project taught me that healthcare interfaces carry a different kind of responsibility than most software — clarity isn't a nice-to-have, it's the entire point. It also confirmed the direction I want to keep building in.",
        ],
      },
    ],
  },
  {
    slug: "ashvathha",
    index: "02",
    title: "Ashvathha",
    tagline: "A web experience built around a webnovel's world.",
    category: "Creative / Frontend / Atmosphere",
    description:
      "A web experience built around a webnovel, showcasing characters, lore, and volumes.",
    tags: ["Creative Dev", "Framer Motion", "Design Systems"],
    image: "/images/ashvathha.jpg",
    imageAlt:
      "Cinematic dark fantasy illustration representing the world of Ashvathha, with a distant ancient tree silhouette.",
    treatment: "cinematic",
    links: {
      github: { label: "GitHub", href: "https://github.com/FallenSid/The-Ashvathha" },
      live: { label: "Live Project", href: "https://ashvathha.vercel.app/" },
    },
  },
  {
    slug: "cedar-vale",
    index: "03",
    title: "Cedar Vale Hotel",
    tagline: "A polished, client-ready hotel landing page.",
    category: "Commercial / Landing Page",
    description:
      "A polished hotel landing page focused on visual hierarchy, presentation, and a professional commercial experience.",
    tags: ["Next.js", "Responsive Design", "Deployment"],
    image: "/images/cedarvale.jpg",
    imageAlt:
      "Elegant hotel landing page visual showing a warmly lit suite interior at night.",
    treatment: "commercial",
    links: {
      github: { label: "GitHub", href: "https://github.com/FallenSid/cedar-vale-hotel" },
      live: { label: "Live Project", href: "https://cedarvalehotel.vercel.app/" },
    },
  },
];

export const smallProjects = [
  {
    title: "Palette Generator",
    description: "Small utility for exploring colour combinations.",
    tags: ["React", "TypeScript"],
    href: "#",
  },
  {
    title: "Herbodent",
    description: "Healthcare/product-oriented landing page.",
    tags: ["Next.js", "UI"],
    href: "#",
  },
  {
    title: "Gym Website",
    description: "Landing-page experiment focused on bold typography.",
    tags: ["HTML", "CSS"],
    href: "#",
  },
  {
    title: "Birthday Website",
    description: "A small interactive web experiment made for fun.",
    tags: ["JavaScript", "Animation"],
    href: "#",
  },
];
