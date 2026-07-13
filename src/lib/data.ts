import type { Project, Experience, SkillCategory, Certification, SocialLink } from "@/types";

export const siteConfig = {
  name: "Aditya Thapliyal",
  title: "Aditya Thapliyal — Full Stack & Mobile Engineer",
  description:
    "5th Semester BCA student at Graphic Era Hill University. AI/ML Full Stack Engineer & Product Builder. I build elegant, intelligent digital products end-to-end.",
  email: "adityathapliyal52@gmail.com",
  phone: "+91 6395613242",
  location: "Dehradun, Uttarakhand, India",
  tagline: "Bridging Artificial Intelligence with Premium Digital Experiences.",
  status: "Open to Opportunities",
  githubUrl: "https://github.com/AdityaThapliyal-09",
  linkedinUrl: "https://www.linkedin.com/in/aditya-thapliyal",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub",   url: "https://github.com/AdityaThapliyal-09",           icon: "github"   },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/aditya-thapliyal",     icon: "linkedin" },
  { label: "Email",    url: "mailto:adityathapliyal52@gmail.com",               icon: "mail"     },
];

export const projects: Project[] = [
  {
    id: "uniexchange",
    title: "UniExchange",
    description:
      "A campus commerce platform that lets students buy, sell, lend, borrow, and offer services within their university — eliminating the friction of student commerce.",
    longDescription:
      "Founded UniExchange to solve real student commerce problems on campus. Integrated Clerk for auth, Razorpay for payments, and Twilio for SMS notifications. The platform was tested by 100+ students at GEHU and advanced to the semi-finals at a university hackathon.",
    techStack: ["TypeScript", "Next.js", "ShadCN UI", "Supabase", "Clerk", "Razorpay", "Twilio"],
    tag: "Full Stack · Marketplace",
    githubUrl: "https://github.com/AdityaThapliyal-09",
    featured: true,
  },
  {
    id: "campusshield",
    title: "CampusShield",
    description:
      "A real-time campus safety platform with SOS alerts, Safe Walk timer, and anonymous tip reporting — built to keep students safer on campus.",
    longDescription:
      "Built CampusShield with role-based dashboards for students, admins, and security staff. Live location tracking powered by OpenStreetMap. Supabase handles real-time data sync, auth, and database.",
    techStack: ["React.js", "Supabase", "OpenStreetMap API", "TypeScript", "CSS Modules"],
    tag: "Full Stack · Safety",
    githubUrl: "https://github.com/AdityaThapliyal-09",
    featured: true,
  },
  {
    id: "verso",
    title: "Verso",
    description:
      "A sports matchmaking and turf booking app — helping teams discover opponents, schedule matches, and reserve turfs without the hassle.",
    longDescription:
      "Designed and built Verso end-to-end. Cross-platform iOS and Android app using Flutter with Firebase real-time database for instant match updates, team discovery, and turf booking confirmation.",
    techStack: ["Flutter", "Firebase", "Dart", "Cloud Firestore", "Firebase Auth"],
    tag: "Mobile · Sports",
    githubUrl: "https://github.com/AdityaThapliyal-09",
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: "uniexchange-work",
    role: "Founder & Product Lead",
    organization: "UniExchange",
    period: "Apr 2026 – Present",
    location: "Dehradun, India · Remote",
    type: "work",
    description: [
      "Founded UniExchange — a campus marketplace addressing student commerce and side-income needs across university campuses.",
      "Designed the entire UI/UX in Figma and built the frontend in Next.js; architected the database and backend in Supabase with Clerk authentication.",
      "Led a hackathon team to the semi-finals; the platform was actively tested by 100+ students at GEHU.",
    ],
  },
  {
    id: "verso-work",
    role: "Founder & Product Lead",
    organization: "Verso",
    period: "2024 – Present",
    location: "Dehradun, India · Remote",
    type: "work",
    description: [
      "Founded Verso, a sports matchmaking and turf booking mobile app — solving the problem of finding opponents and booking courts.",
      "Architected and built the full Flutter application with Firebase real-time data sync, cloud functions, and multi-role user authentication.",
    ],
  },
  {
    id: "gehu",
    role: "Bachelor of Computer Applications (BCA)",
    organization: "Graphic Era Hill University",
    period: "Aug 2024 – May 2027",
    location: "Dehradun, Uttarakhand",
    type: "education",
    description: [
      "CGPA: 8.2 — consistently among the top performers in the department.",
      "Coursework spans algorithms, data structures, database systems, web development, and software engineering.",
    ],
  },
  {
    id: "dav",
    role: "Class XII – Science (CBSE)",
    organization: "DAV Public School, Defence Colony",
    period: "Graduated 2024",
    location: "Dehradun, Uttarakhand",
    type: "education",
    description: [
      "Aggregate: 80% — strong foundation in Mathematics, Physics, and Computer Science.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "TypeScript", icon: "SiTypescript", level: 88 },
      { name: "JavaScript", icon: "SiJavascript", level: 90 },
      { name: "Python",     icon: "SiPython",     level: 78 },
      { name: "Dart",       icon: "SiDart",       level: 80 },
      { name: "HTML5",      icon: "SiHtml5",      level: 95 },
      { name: "CSS3",       icon: "SiCss3",       level: 90 },
      { name: "SQL",        icon: "SiPostgresql", level: 75 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React.js",     icon: "SiReact",       level: 90 },
      { name: "Next.js",      icon: "SiNextdotjs",   level: 88 },
      { name: "Flutter",      icon: "SiFlutter",     level: 82 },
      { name: "Tailwind CSS", icon: "SiTailwindcss", level: 88 },
      { name: "ShadCN UI",    icon: "SiRadixui",     level: 82 },
      { name: "Figma",        icon: "SiFigma",       level: 80 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js",    icon: "SiNodedotjs", level: 82 },
      { name: "Express.js", icon: "SiExpress",   level: 80 },
      { name: "FastAPI",    icon: "SiFastapi",   level: 74 },
      { name: "Django",     icon: "SiDjango",    level: 68 },
      { name: "REST APIs",  icon: "SiPostman",   level: 88 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "Firebase",  icon: "SiFirebase",  level: 87 },
      { name: "Supabase",  icon: "SiSupabase",  level: 86 },
      { name: "MongoDB",   icon: "SiMongodb",   level: 78 },
      { name: "MySQL",     icon: "SiMysql",     level: 74 },
      { name: "PostgreSQL",icon: "SiPostgresql",level: 70 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git",        icon: "SiGit",               level: 90 },
      { name: "GitHub",     icon: "SiGithub",            level: 92 },
      { name: "Figma",      icon: "SiFigma",             level: 80 },
      { name: "Postman",    icon: "SiPostman",           level: 82 },
      { name: "VS Code",    icon: "SiVisualstudiocode",  level: 95 },
      { name: "Razorpay",   icon: "SiRazorpay",          level: 72 },
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Become an AI-Powered Marketer",
    issuer: "Semrush Academy",
    date: "Apr 2026",
  },
  {
    title: "Digital Skills: Artificial Intelligence",
    issuer: "Accenture via FutureLearn",
    date: "Nov 2025",
  },
  {
    title: "Getting Started with Microsoft Excel",
    issuer: "Coursera",
    date: "Apr 2026",
  },
  {
    title: "Agriculture, Economics and Nature",
    issuer: "University of Western Australia via FutureLearn",
    date: "Oct 2024",
  },
];
