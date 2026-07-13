"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/lib/data";
import styles from "./Projects.module.css";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const PROJECT_PALETTES: { from: string; to: string; num: string }[] = [
  { from: "#2997ff", to: "#5e5ce6", num: "01" },
  { from: "#5e5ce6", to: "#f472b6", num: "02" },
  { from: "#30d158", to: "#22d3a0", num: "03" },
];

export default function Projects() {
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
    <section className={`section ${styles.projectsSection}`} id="projects">
      <div className="container">
        <motion.div {...inView(0)} className="section-heading">
          <span className="label">Featured Work</span>
          <h2>Products I&apos;ve Shipped.</h2>
          <p>Real ideas, built from scratch, deployed to real users.</p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, i) => {
            const palette = PROJECT_PALETTES[i % PROJECT_PALETTES.length];
            const cardId = `project-${project.id}`;
            return (
              <motion.article
                key={project.id}
                {...inView(0.1 + i * 0.15)}
                className="glass-card-shell"
                id={cardId}
                onMouseMove={(e: React.MouseEvent<HTMLElement>) => handleMouseMove(e, cardId)}
                onTouchMove={(e: React.TouchEvent<HTMLElement>) => handleTouchMove(e, cardId)}
                style={{
                  "--card-from": palette.from,
                  "--card-to": palette.to,
                } as React.CSSProperties}
              >
                <div className={`glass-card ${styles.card}`}>
                {/* Reveal Canvas Background */}
                <div className={styles.canvasReveal} aria-hidden="true" />
                
                {/* Content Wrapper to sit above the canvas background */}
                <div className={styles.cardContent}>
                  {/* Mockup color header */}
                  <div
                    className={styles.mockup}
                    style={{
                      background: `linear-gradient(135deg, ${palette.from}18, ${palette.to}18)`,
                      borderBottom: `1px solid ${palette.from}22`,
                    }}
                  >
                    {/* Fake browser chrome */}
                    <div className={styles.mockupBar}>
                      <div className={styles.mockupDots}>
                        <span style={{ background: "#ff5f56" }} />
                        <span style={{ background: "#ffbd2e" }} />
                        <span style={{ background: "#27c93f" }} />
                      </div>
                      <div className={styles.mockupUrl}>
                        <span style={{ color: palette.from }}>◆</span> {project.title.toLowerCase()}.app
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    {/* Tag */}
                    <span
                      className={styles.tag}
                      style={{
                        color: palette.from,
                        borderColor: `${palette.from}40`,
                        background: `${palette.from}10`,
                      }}
                    >
                      {project.tag}
                    </span>

                    {/* Title */}
                    <h3 className={styles.title}>{project.title}</h3>

                    {/* Problem / Solution Framing */}
                    <div className={styles.framing}>
                      <div className={styles.framingBlock}>
                        <span className={styles.framingLabel}>Product:</span>
                        <p className={styles.framingText}>{project.description}</p>
                      </div>
                      <div className={styles.framingBlock}>
                        <span className={styles.framingLabel}>Execution:</span>
                        <p className={styles.framingText}>{project.longDescription}</p>
                      </div>
                    </div>

                    {/* Key impact line */}
                    {i === 0 && (
                      <p className={styles.impact}>
                        🏆 Semi-finalist at GEHU Hackathon · 100+ users tested
                      </p>
                    )}
                    {i === 1 && (
                      <p className={styles.impact}>
                        🛡 Real-time SOS · Role-based dashboards · Live map
                      </p>
                    )}
                    {i === 2 && (
                      <p className={styles.impact}>
                        📱 iOS + Android · Real-time matchmaking · Turf booking
                      </p>
                    )}

                    {/* Tech stack */}
                    <div className={styles.techStack}>
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span key={tech} className={`badge ${styles.techBadge}`}>
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className={`badge ${styles.techBadge}`}>
                          +{project.techStack.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className={styles.links}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-outline ${styles.linkBtn}`}
                        id={`project-${project.id}-github`}
                      >
                        <FiGithub size={14} />
                        Source
                      </a>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn btn-primary ${styles.linkBtn}`}
                          id={`project-${project.id}-live`}
                        >
                          <FiExternalLink size={14} />
                          Live Demo
                        </a>
                      ) : (
                        <span className={styles.wip}>
                          <FiArrowUpRight size={14} />
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div {...inView(0.5)} className={styles.githubCta}>
          <div className={styles.ctaInner}>
            <div>
              <p className={styles.ctaTitle}>More on GitHub</p>
              <p className={styles.ctaSub}>Explore all repositories, experiments, and code</p>
            </div>
            <a
              href="https://github.com/AdityaThapliyal-09"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              id="projects-github-cta"
            >
              <FiGithub size={15} />
              GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
