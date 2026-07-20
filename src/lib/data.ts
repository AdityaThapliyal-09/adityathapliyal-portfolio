import type { Project, Experience, SkillCategory } from "@/types";

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

