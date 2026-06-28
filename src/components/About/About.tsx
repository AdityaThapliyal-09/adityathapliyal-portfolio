"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiBook, FiCode, FiZap } from "react-icons/fi";
import styles from "./About.module.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, delay, ease: [0.25, 1, 0.5, 1] as const },
});

const highlights = [
  { icon: FiMapPin, label: "Location", value: "Dehradun, India" },
  { icon: FiBook, label: "Education", value: "BCA @ GEHU" },
  { icon: FiCode, label: "Focus", value: "AI + Full Stack" },
  { icon: FiZap, label: "Status", value: "Seeking Internships" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className={`container ${styles.container}`}>
        
        <motion.div {...fadeUp(0)} className="section-heading">
          <span className="label">About Me</span>
          <h2>Driven by design. <br/>Powered by AI.</h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Main Bio Text */}
          <div className={styles.bioCol}>
            <motion.p {...fadeUp(0.1)} className={styles.bioLead}>
              I believe the best products disappear into the background, leaving only the experience.
            </motion.p>
            <motion.p {...fadeUp(0.2)} className={styles.bioText}>
              I&apos;m a 5th-semester BCA student at Graphic Era Hill University. While many engineers focus strictly on the implementation, I focus on the outcome. I build end-to-end digital products that solve real human problems, heavily utilizing Artificial Intelligence to create magical, frictionless experiences.
            </motion.p>
            <motion.p {...fadeUp(0.3)} className={styles.bioText}>
              My work spans from architecting robust backends with Python and FastAPI, to crafting pixel-perfect, 60fps frontend interfaces with Next.js and React. I don&apos;t just write code—I ship products.
            </motion.p>
          </div>

          {/* Highlights Grid */}
          <div className={styles.statsCol}>
            {highlights.map((item, i) => (
              <motion.div 
                key={item.label}
                {...fadeUp(0.3 + (i * 0.1))}
                className={`glass-card ${styles.statCard}`}
              >
                <div className={styles.iconWrap}>
                  <item.icon size={20} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statLabel}>{item.label}</span>
                  <span className={styles.statValue}>{item.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
