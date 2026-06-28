export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  tag: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "work" | "education";
  description: string[];
  link?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
