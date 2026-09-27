export interface Skill {
  name: string;
  icon: string | null; // devicon CDN URL, or null to use a fallback icon
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg`, color: "#f7df1e" },
      { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg`, color: "#3178c6" },
      { name: "Java", icon: `${DEVICON}/java/java-original.svg`, color: "#f89820" },
      { name: "C", icon: `${DEVICON}/c/c-original.svg`, color: "#a8b9cc" },
      { name: "HTML5", icon: `${DEVICON}/html5/html5-original.svg`, color: "#e34f26" },
      { name: "CSS3", icon: `${DEVICON}/css3/css3-original.svg`, color: "#1572b6" },
      { name: "SQL (MySQL)", icon: `${DEVICON}/mysql/mysql-original.svg`, color: "#4479a1" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: `${DEVICON}/react/react-original.svg`, color: "#61dafb" },
      { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg`, color: "#ffffff" },
      { name: "Angular", icon: `${DEVICON}/angularjs/angularjs-original.svg`, color: "#dd0031" },
      { name: "Vite", icon: `${DEVICON}/vitejs/vitejs-original.svg`, color: "#646cff" },
      { name: "Spring Boot", icon: `${DEVICON}/spring/spring-original.svg`, color: "#6db33f" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg`, color: "#4479a1" },
      { name: "Microsoft Access", icon: null, color: "#a4373a" },
    ],
  },
  {
    title: "Tools & Environments",
    skills: [
      { name: "Git", icon: `${DEVICON}/git/git-original.svg`, color: "#f05032" },
      { name: "GitHub", icon: `${DEVICON}/github/github-original.svg`, color: "#ffffff" },
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg`, color: "#2496ed" },
      { name: "Linux (Ubuntu)", icon: `${DEVICON}/linux/linux-original.svg`, color: "#fcc624" },
      { name: "VS Code", icon: `${DEVICON}/vscode/vscode-original.svg`, color: "#007acc" },
      { name: "Cursor AI", icon: null, color: "#ec4899" },
    ],
  },
];