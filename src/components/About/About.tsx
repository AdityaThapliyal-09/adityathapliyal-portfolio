"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiBook, FiCode, FiZap } from "react-icons/fi";
import { siteConfig } from "@/lib/data";
import styles from "./About.module.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const highlights = [
  { icon: FiMapPin, label: siteConfig.aboutHighlights[0].label, value: siteConfig.aboutHighlights[0].value },
  { icon: FiBook, label: siteConfig.aboutHighlights[1].label, value: siteConfig.aboutHighlights[1].value },
  { icon: FiCode, label: siteConfig.aboutHighlights[2].label, value: siteConfig.aboutHighlights[2].value },
  { icon: FiZap, label: siteConfig.aboutHighlights[3].label, value: siteConfig.aboutHighlights[3].value },
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
              {siteConfig.aboutLead}
            </motion.p>
            {siteConfig.aboutParagraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                {...fadeUp(0.2 + index * 0.1)}
                className={styles.bioText}
              >
                {paragraph}
              </motion.p>
            ))}
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
