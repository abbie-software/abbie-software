export interface Project {
  slug: string;
  title: string;
  description: string;
  problem: string;
  role: string;
  techStack: string[];
  features: string[];
  challenges: string;
  image?: string; // omit if no screenshot exists yet
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "ziwaclear",
    title: "ZiwaClear",
    description: "A marketplace turning an invasive species into climate value.",
    problem:
      "Invasive water hyacinth is choking African freshwater lakes — clogging waterways and depleting oxygen — while biomass harvesters have no efficient way to connect with industrial buyers who could turn that same hyacinth into biogas and fertilizer.",
    role: "Frontend Architecture Lead",
    techStack: ["Next.js", "React", "Tailwind CSS"], // TODO: confirm stack (Next.js/React? Tailwind? maps/charts library?)
    features: [
      "Marketplace connecting biomass harvesters with industrial buyers",
      "Live impact tracker dashboard (tons of biomass harvested)",
      "Interactive satellite map view of harvesting zones",
      "Dark/light theme toggle",
    ],
    challenges: "figuring out how to integrate satellite imagery and map overlays with React and Next.js, while ensuring responsive design across devices.", // TODO: confirm challenges
    image: "/images/projects/ziwaclear.png",
    githubUrl: "", // TODO
    liveUrl: "https://ziwa-clear.vercel.app",
  },
  {
    slug: "lindakazi",
    title: "LindaKazi",
    description: "An offline-first safety platform for gig workers.",
    problem:
      "Gig workers often operate in areas with unreliable internet connectivity, making it hard to access safety tools and support exactly when they need them most.",
    role: "Frontend Architecture Lead",
    techStack: ["React Native"], // TODO
    features: ["Offline access to safety resources and guidelines"], // TODO: what did the app actually let a gig worker do?
    challenges: "Understanding the unique challenges of developing for offline scenarios and ensuring data consistency.", // TODO
    githubUrl: "https://github.com/Gathoni-K/lindaKazi",
    liveUrl: "",
  },
  {
    slug: "coffee-shop",
    title: "Abbie's Coffee House",
    description: "A responsive multi-page website for a Nairobi coffee shop.",
    problem:
      "A local coffee shop needed an inviting online presence to showcase its menu and atmosphere to customers before they visit.",
    role: "Solo Project", // TODO: solo project? confirm role
    techStack: ["HTML", "CSS", "JavaScript"], // TODO: confirm — looks like HTML/CSS/JS from the screenshot, correct?
    features: [
      "Multi-page layout: Home, Menu, About, Contact",
      "Hero landing section with call-to-action",
      "Featured Drinks showcase",
    ],
    challenges: "", // TODO
    image: "/images/projects/coffee-shop.png",
    githubUrl: "", // TODO: do you have a repo link for this one?
    liveUrl: "https://abbie-software.github.io/coffee-shop-website/",
  },
  {
    slug: "greenfield",
    title: "Greenfield Institute Login System",
    description: "A secure authentication portal built with PHP.",
    problem: "Institutional login system for students and staff", // TODO: what was this login system actually for — a student portal, staff system?
    role: "Solo Project", // TODO: solo project?
    techStack: ["PHP"], // TODO: confirm — MySQL for the backend? plain HTML/CSS for the frontend?
    features: [], // TODO
    challenges:
      "No live deployment exists since Vercel doesn't support PHP natively — would need a PHP-compatible host (e.g. Railway, Render, or a traditional LAMP host) to deploy live.",
    githubUrl: "https://github.com/abbie-software/GREENFIELD-INSTITUTE",
    liveUrl: "",
  },
];