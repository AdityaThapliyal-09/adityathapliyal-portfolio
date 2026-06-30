"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import styles from "./SideProjects.module.css";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1, delay, ease: [0.25, 1, 0.5, 1] as const },
});

const SIDE_PROJECTS = [
  {
    id: "aurum",
    title: "Aurum",
    tag: "Premium Dining",
    description: "A fine-dining restaurant experience site with elegant typography and immersive visuals.",
    liveUrl: "https://aurum-nu-seven.vercel.app",
    githubUrl: "https://github.com/AdityaThapliyal-09/aurum-restaurant",
    color: "#eab308", // gold accent
  },
  {
    id: "nova-dental",
    title: "Nova Dental",
    tag: "Medical / Clinic",
    description: "A clean, trust-focused clinic website built for patient bookings and service clarity.",
    liveUrl: "https://nova-dental-beta.vercel.app",
    githubUrl: "https://github.com/AdityaThapliyal-09/nova-dental",
    color: "#3b82f6", // blue accent
  },
  {
    id: "elevate-realty",
    title: "Elevate Realty",
    tag: "Luxury Real Estate",
    description: "A high-end real estate showcase site emphasizing property listings and visual storytelling.",
    liveUrl: "https://elevate-realty-beige.vercel.app",
    githubUrl: "https://github.com/AdityaThapliyal-09/elevate-realty",
    color: "#a8a29e", // stone/beige accent
  },
];

export default function SideProjects() {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const touch = e.touches[0];
    const rect = el.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className={`section ${styles.sideProjectsSection}`} id="side-projects">
      <div className="container">
        
        {/* Section Heading */}
        <motion.div {...inView(0)} className="section-heading">
          <span className="label">Other Builds</span>
          <h2>Side Projects.</h2>
          <p>Explorations in niche industries, landing pages, and rapid prototyping.</p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className={styles.grid}>
          {SIDE_PROJECTS.map((project, i) => {
            const cardId = `sideproject-${project.id}`;
            return (
              <motion.article
                key={project.id}
                {...inView(0.1 + i * 0.15)}
                className={`glass-card ${styles.card}`}
                id={cardId}
                onMouseMove={(e: React.MouseEvent<HTMLElement>) => handleMouseMove(e, cardId)}
                onTouchMove={(e: React.TouchEvent<HTMLElement>) => handleTouchMove(e, cardId)}
                style={{
                  "--card-accent": project.color,
                } as React.CSSProperties}
              >
                {/* Reveal Canvas Background */}
                <div className={styles.canvasReveal} aria-hidden="true" />
                
                <div className={styles.cardContent}>
                  {/* Category Tag */}
                  <span
                    className={styles.tag}
                    style={{
                      color: project.color,
                      borderColor: `${project.color}40`,
                      background: `${project.color}10`,
                    }}
                  >
                    {project.tag}
                  </span>

                  {/* Title */}
                  <h3 className={styles.title}>{project.title}</h3>

                  {/* Description */}
                  <p className={styles.description}>{project.description}</p>

                  {/* Links */}
                  <div className={styles.links}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-outline ${styles.linkBtn}`}
                      title="Source Code"
                    >
                      <FiGithub size={14} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-primary ${styles.linkBtn} ${styles.liveBtn}`}
                    >
                      <FiExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
