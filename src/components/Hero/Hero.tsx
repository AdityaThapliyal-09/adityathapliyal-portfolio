"use client";

import { motion } from "framer-motion";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import Typewriter from "@/components/Typewriter/Typewriter";
import Spotlight from "@/components/Spotlight/Spotlight";
import styles from "./Hero.module.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.25, 1, 0.5, 1] as const }, // Apple-esque cubic bezier
});

export default function Hero() {
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className={styles.hero} id="hero">
      <Spotlight />
      <div className={`container ${styles.content}`}>
        
        {/* Subtitle / Status */}
        <motion.div {...fadeUp(0.1)} className={styles.statusBadge}>
          <span className="status-dot" style={{ backgroundColor: "var(--accent-green)", boxShadow: "0 0 10px var(--accent-green)", animation: "pulse 2s infinite" }} />
          <span><strong>Available for Opportunities</strong></span>
        </motion.div>

        {/* Name Container */}
        <div style={{ minHeight: "clamp(2.2rem, 8vw, 6rem)", display: "flex", alignItems: "center" }}>
          <h1 className={styles.name} style={{ marginBottom: 0 }}>
            <Typewriter text="Aditya Thapliyal." delay={300} speed={70} hideCursorOnComplete={true} />
          </h1>
        </div>

        {/* Role Container */}
        <div style={{ minHeight: "clamp(1.3rem, 4.5vw, 3rem)", display: "flex", alignItems: "center", marginBottom: "var(--space-2)" }}>
          <h2 className={styles.role} style={{ marginBottom: 0 }}>
            <Typewriter text="AI/ML Fullstack Engineer." delay={1800} speed={50} />
          </h2>
        </div>

        {/* Tagline */}
        <motion.p {...fadeUp(0.4)} className={styles.tagline}>
          I build premium digital experiences at the intersection of artificial intelligence and product design. Meticulous execution, from architecture to the final pixel.
        </motion.p>

        {/* Actions */}
        <motion.div {...fadeUp(0.5)} className={styles.ctaRow}>
          <button
            className="btn btn-primary"
            onClick={scrollToProjects}
            id="hero-view-work-btn"
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download="Aditya_Thapliyal_Resume.pdf"
            className="btn btn-outline"
            id="hero-download-resume-btn"
          >
            <FiDownload size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className={styles.scrollIndicator}
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        id="hero-scroll-btn"
      >
        <FiArrowDown size={18} />
      </motion.button>
    </section>
  );
}
