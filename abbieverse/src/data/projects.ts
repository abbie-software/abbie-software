export interface Project {
  slug: string;
  title: string;
  description: string;
  problem: string;
  role: string;
  techStack: string[];
  features: string[];
  challenges: string;
  image: string;
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
    techStack: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Marketplace connecting biomass harvesters with industrial buyers",
      "Live impact tracker dashboard (tons of biomass harvested)",
      "Interactive satellite map view of harvesting zones",
      "Dark/light theme toggle",
    ],
    challenges:
      "Balancing a compelling marketplace experience with fragmented supply-chain data, while creating a product that clearly communicates impact to both local harvesters and industrial buyers.",
    image: "/images/projects/ziwaclear.png",
    githubUrl: "", // TODO
    liveUrl: "https://ziwa-clear.vercel.app",
  },
];