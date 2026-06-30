"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { FiCheckCircle, FiUsers, FiTarget, FiZap, FiCode, FiBriefcase } from "react-icons/fi";
import styles from "./CurrentExperience.module.css";

// Reusable Counter Component
const AnimatedCounter = ({ value, duration = 2, delay = 0, suffix = "" }: { value: number; duration?: number; delay?: number; suffix?: string }) => {
  const [hasInView, setHasInView] = useState(false);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest) + suffix);

  return (
    <motion.span
      onViewportEnter={() => {
        if (!hasInView) {
          setTimeout(() => {
            motionValue.set(value);
          }, delay * 1000);
          setHasInView(true);
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {displayValue}
    </motion.span>
  );
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] as const },
});

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CurrentExperience() {
  return (
    <section className={`section ${styles.section}`} id="current-experience">
      <div className="container">
        {/* Section Heading */}
        <motion.div {...fadeUp(0)} className="section-heading">
          <span className="label">Professional Experience</span>
          <h2>Current Internship.</h2>
          <p>Building real-world impact with industry mentors.</p>
        </motion.div>

        <div className={styles.contentWrapper}>
          {/* Main Glass Card */}
          <motion.div {...fadeUp(0.2)} className={`glass-card ${styles.mainCard}`}>
            
            <div className={styles.cardHeader}>
              <div className={styles.companyInfo}>
                <div className={styles.logoBox}>
                  {/* Styled like the yellow/cyan sunburst logo */}
                  <span className={styles.logoText}>NYC</span>
                </div>
                <div>
                  <h3 className={styles.companyName}>Not Your College (NYC)</h3>
                  <p className={styles.companySubtitle}>Software Engineering Internship</p>
                </div>
              </div>
              <div className={styles.currentBadge}>
                <span className={styles.pulseDot} />
                <span className={styles.currentText}>CURRENT</span>
              </div>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <h4 className={styles.statValue}>
                  <AnimatedCounter value={2700} suffix="+" />
                </h4>
                <p className={styles.statLabel}>Applicants</p>
              </div>
              <div className={styles.divider} />
              <div className={styles.statBox}>
                <h4 className={styles.statValue}>
                  <AnimatedCounter value={15} />
                </h4>
                <p className={styles.statLabel}>Selected Interns</p>
              </div>
              <div className={styles.divider} />
              <div className={styles.statBox}>
                <h4 className={styles.statValue}>100%</h4>
                <p className={styles.statLabel}>Commitment</p>
              </div>
            </div>

            <div className={styles.description}>
              <p>
                Currently contributing as a Software Engineering Intern at <strong>Not Your College</strong> (part of the Sheryians Coding School ecosystem), where I collaborate on practical product development while learning from experienced industry engineers.
              </p>
              <p>
                Selected among thousands of applicants, this highly competitive opportunity reflects my commitment to building impactful software, writing production-ready code, and continuously evolving as an engineer.
              </p>
            </div>

            {/* What I'm Learning */}
            <div className={styles.learningSection}>
              <h4 className={styles.learningTitle}>Core Focus Areas</h4>
              <motion.div 
                className={styles.chipCloud}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {[
                  { text: "Product Engineering", icon: <FiCode /> },
                  { text: "Real-world Workflow", icon: <FiBriefcase /> },
                  { text: "Modern Web Dev", icon: <FiZap /> },
                  { text: "Team Collaboration", icon: <FiUsers /> },
                  { text: "Problem Solving", icon: <FiTarget /> },
                  { text: "Production-Ready Systems", icon: <FiCheckCircle /> },
                ].map((chip) => (
                  <motion.span key={chip.text} variants={staggerItem} className={styles.chip}>
                    {chip.icon} {chip.text}
                  </motion.span>
                ))}
              </motion.div>
            </div>

          </motion.div>

          {/* Vertical Timeline */}
          <div className={styles.timelineWrapper}>
            <motion.div 
              initial={{ height: 0 }} 
              whileInView={{ height: "100%" }} 
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className={styles.timelineLine} 
            />
            
            <div className={styles.timelineNodes}>
              {[
                { title: "Current", desc: "Collaborating on Real Projects", active: true },
                { title: "Onboarding", desc: "Mentorship & Industry Workflow", active: false },
                { title: "Selection", desc: "1 of 15 out of 2700+ Applicants", active: false },
              ].map((node, i) => (
                <motion.div 
                  key={node.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.3, duration: 0.5 }}
                  className={styles.nodeItem}
                >
                  <div className={`${styles.nodeDot} ${node.active ? styles.nodeDotActive : ""}`}>
                    {node.active && <span className={styles.nodePulse} />}
                  </div>
                  <div className={styles.nodeContent}>
                    <h4 className={node.active ? styles.nodeTitleActive : styles.nodeTitle}>{node.title}</h4>
                    <p className={styles.nodeDesc}>{node.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
