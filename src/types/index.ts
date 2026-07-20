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
  impact?: string;
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
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}
