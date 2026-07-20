import type { Project, Experience, SkillCategory } from "@/types";

export const siteConfig = {
  name: "Aditya Thapliyal",
  title: "Aditya Thapliyal — Full Stack & Mobile Engineer",
  description:
    "BCA student and builder of AI-native products. I design and ship full-stack applications, mobile products, and intelligent experiences end-to-end.",
  email: "adityathapliyal52@gmail.com",
  phone: "+91 6395613242",
  location: "Dehradun, Uttarakhand, India",
  tagline: "Bridging Artificial Intelligence with Premium Digital Experiences.",
  status: "Open to Opportunities",
  heroRole: "Building AI-native products and polished digital experiences.",
  heroTagline:
    "I design the product, architect the system, and ship the final experience with care — from first idea to live release.",
  availabilityLine:
    "Usually available for product, full-stack, and AI engineering conversations within 24 hours.",
  aboutLead:
    "I care about products that feel effortless, useful, and genuinely memorable.",
  aboutParagraphs: [
    "I’m a 5th-semester BCA student at Graphic Era Hill University building software that people can actually use. My work sits at the intersection of product thinking, AI, and polished execution.",
    "I enjoy working across the stack — from product framing and UI/UX to backend systems and deployment — because the strongest products come from a clear point of view and strong implementation.",
  ],
  aboutHighlights: [
    { label: "Location", value: "Dehradun, India" },
    { label: "Education", value: "BCA @ GEHU" },
    { label: "Focus", value: "AI + Product Engineering" },
    { label: "Status", value: "Open to Opportunities" },
  ],
  nowHeadline: "What I’m building now",
  nowIntro:
    "I’m currently focused on turning ideas into reliable products that combine smart systems with polished user experiences.",
  nowItems: [
    {
      title: "AI-native product experiences",
      description: "Designing interfaces and flows where AI supports the user without feeling forced or gimmicky.",
      metric: "3 product ideas in motion",
    },
    {
      title: "Founder-led build mode",
      description: "Shipping and refining real products with an eye on usability, reliability, and long-term growth.",
      metric: "2 platforms in active iteration",
    },
    {
      title: "Full-stack craft",
      description: "Strengthening the backend, deployment, and product decision-making behind the scenes.",
      metric: "Focused on systems thinking",
    },
  ],
  githubUrl: "https://github.com/AdityaThapliyal-09",
  linkedinUrl: "https://www.linkedin.com/in/aditya-thapliyal",
};

export const projects: Project[] = [
  {
    id: "uniexchange",
    title: "UniExchange",
    description:
      "A campus commerce platform that helps students buy, sell, lend, borrow, and offer services without friction.",
    longDescription:
      "I founded UniExchange to solve a real campus problem: making commerce feel simple, trustworthy, and useful for students. The product combines a polished UI, payments, auth, and notifications in a way that feels lightweight and dependable.",
    techStack: ["TypeScript", "Next.js", "ShadCN UI", "Supabase", "Clerk", "Razorpay", "Twilio"],
    tag: "Full Stack · Marketplace",
    githubUrl: "https://github.com/AdityaThapliyal-09",
    featured: true,
    impact: "Semi-finalist at GEHU hackathon · 100+ students tested the experience",
  },
  {
    id: "campusshield",
    title: "CampusShield",
    description:
      "A real-time campus safety platform with SOS alerts, Safe Walk timers, and anonymous reporting built for urgent situations.",
    longDescription:
      "CampusShield combines role-based dashboards, live location-aware workflows, and a clear safety-first experience. The product is designed to be calm under pressure while still being actionable in the moment.",
    techStack: ["React.js", "Supabase", "OpenStreetMap API", "TypeScript", "CSS Modules"],
    tag: "Full Stack · Safety",
    githubUrl: "https://github.com/AdityaThapliyal-09",
    featured: true,
    impact: "Real-time safety workflows · Role-based access · Map-based response logic",
  },
  {
    id: "verso",
    title: "Verso",
    description:
      "A sports matchmaking and turf-booking app that makes it easy for teams to find games and secure venues.",
    longDescription:
      "Verso was built as a mobile-first way to remove friction from local sports coordination. The experience is fast, event-driven, and centered around helping players and teams make plans quickly.",
    techStack: ["Flutter", "Firebase", "Dart", "Cloud Firestore", "Firebase Auth"],
    tag: "Mobile · Sports",
    githubUrl: "https://github.com/AdityaThapliyal-09",
    featured: true,
    impact: "Cross-platform mobile experience · Live updates · Booking flow built-in",
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
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Python",     icon: "SiPython"     },
      { name: "Dart",       icon: "SiDart"       },
      { name: "HTML5",      icon: "SiHtml5"      },
      { name: "CSS3",       icon: "SiCss3"       },
      { name: "SQL",        icon: "SiPostgresql" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React.js",     icon: "SiReact"       },
      { name: "Next.js",      icon: "SiNextdotjs"   },
      { name: "Flutter",      icon: "SiFlutter"     },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "ShadCN UI",    icon: "SiRadixui"     },
      { name: "Figma",        icon: "SiFigma"       },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js",    icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress"   },
      { name: "FastAPI",    icon: "SiFastapi"   },
      { name: "Django",     icon: "SiDjango"    },
      { name: "REST APIs",  icon: "SiPostman"   },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "Firebase",  icon: "SiFirebase"   },
      { name: "Supabase",  icon: "SiSupabase"   },
      { name: "MongoDB",   icon: "SiMongodb"    },
      { name: "MySQL",     icon: "SiMysql"      },
      { name: "PostgreSQL",icon: "SiPostgresql" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git",        icon: "SiGit"               },
      { name: "GitHub",     icon: "SiGithub"            },
      { name: "Figma",      icon: "SiFigma"             },
      { name: "Postman",    icon: "SiPostman"           },
      { name: "VS Code",    icon: "SiVisualstudiocode"  },
      { name: "Razorpay",   icon: "SiRazorpay"          },
    ],
  },
];

