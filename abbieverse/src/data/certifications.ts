export interface Certification {
  title: string;
  issuer: string;
  date?: string; 
  credentialUrl?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "25 october 2025",
    credentialUrl: "", 
  },
];