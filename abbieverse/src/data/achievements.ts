export interface Achievement {
  title: string;
  event: string;
  result: string;
  role: string;
  link?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "ZiwaClear",
    event: "AYSC Climate Hackathon",
    result: "4th Place",
    role: "Frontend Architecture Lead",
    link: "https://devpost.com/software/ziwaclear",
  },
  {
    title: "ZiwaClear",
    event: "IGAD Climate Hackathon",
    result: "5th Place",
    role: "Frontend Architecture Lead",
    link: "https://devpost.com/software/ziwaclear",
  },
  {
    title: "LindaKazi",
    event: "Girls in STEM Global Hackathon",
    result: "Participant",
    role: "Frontend Architecture Lead",
    link: "https://devpost.com/software/lindakazi",
  },
];