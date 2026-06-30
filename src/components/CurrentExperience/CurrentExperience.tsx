"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { FiCheckCircle, FiUsers, FiTarget, FiZap, FiCode, FiBriefcase, FiAward, FiArrowRight } from "react-icons/fi";
import styles from "./CurrentExperience.module.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const chipVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function CurrentExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className={`section ${styles.section}`} id="current-experience">
      <div className={styles.ambientGlow} />
      <div className={styles.ambientNoise} />

      <div className="container" ref={containerRef}>
        
        {/* Section Heading */}
        <motion.div {...fadeUp(0)} className="section-heading" style={{ marginBottom: "var(--space-6)" }}>
          <span className="label">Current Status</span>
          <h2>Professional Experience.</h2>
        </motion.div>

        <div className={styles.contentWrapper}>
          
          {/* Main Glass Card */}
          <motion.div {...fadeUp(0.2)} className={`glass-card ${styles.mainCard}`}>
            <div className={styles.cardHighlight} />
            
            {/* Header: Identity & Status */}
            <div className={styles.cardHeader}>
              <div className={styles.identityGroup}>
                <div className={styles.logoBox}>
                  <div className={styles.logoInner}>NYC</div>
                </div>
                <div className={styles.companyMeta}>
                  <h3 className={styles.companyName}>Not Your College</h3>
                  <div className={styles.companySubtitle}>
                    <span className={styles.roleLabel}>Software Engineering Intern</span>
                    <span className={styles.divider}>·</span>
                    <span className={styles.poweredBy}>Powered by Sheryians</span>
                  </div>
                </div>
              </div>
              <div className={styles.statusBadge}>
                <div className={styles.pulseRing}>
                  <div className={styles.pulseDot} />
                </div>
                <span className={styles.statusText}>ACTIVE</span>
              </div>
            </div>

            {/* Hero Metric */}
            <div className={styles.heroMetricArea}>
              <h2 className={styles.heroNumber}>
                1 of 15 <span className={styles.heroSubtext}>Selected Interns</span>
              </h2>
              <p className={styles.heroContext}>
                Highly competitive placement chosen from <strong>2700+ applicants</strong> across the country.
              </p>
            </div>

            {/* Storytelling Content */}
            <div className={styles.storytelling}>
              <div className={styles.storyBlock}>
                <h4 className={styles.storyTitle}>Current Role</h4>
                <p className={styles.storyText}>
                  Actively contributing to practical product development within the Sheryians ecosystem. My daily workflow mirrors modern industry standards, focusing on building scalable, production-ready applications.
                </p>
              </div>
              
              <div className={styles.storyBlock}>
                <h4 className={styles.storyTitle}>Impact</h4>
                <p className={styles.storyText}>
                  Moving beyond theoretical concepts to engineer real-world solutions. I am directly responsible for writing clean, optimized code that solves actual user problems while collaborating closely with a highly vetted team.
                </p>
              </div>

              <div className={styles.storyBlock}>
                <h4 className={styles.storyTitle}>Why this Matters</h4>
                <p className={styles.storyText}>
                  This opportunity accelerates my growth by surrounding me with experienced mentors and high-performing peers. It bridges the gap between traditional education and elite tech industry expectations.
                </p>
              </div>
            </div>

            {/* Highlights Bar */}
            <div className={styles.highlightsBar}>
              {[
                { text: "Top 0.55% Selection", icon: <FiAward /> },
                { text: "Industry Mentorship", icon: <FiUsers /> },
                { text: "Production Code", icon: <FiCode /> },
              ].map((highlight, idx) => (
                <div key={idx} className={styles.highlightBadge}>
                  <span className={styles.highlightIcon}>{highlight.icon}</span>
                  {highlight.text}
                </div>
              ))}
            </div>

            {/* Focus Areas (Chips) */}
            <div className={styles.focusSection}>
              <h4 className={styles.focusTitle}>Core Engineering Focus</h4>
              <motion.div 
                className={styles.chipGrid}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
              >
                {[
                  { text: "Product Engineering", icon: <FiCode /> },
                  { text: "Modern Web Dev", icon: <FiZap /> },
                  { text: "Production Systems", icon: <FiCheckCircle /> },
                  { text: "Team Collaboration", icon: <FiUsers /> },
                  { text: "Industry Workflow", icon: <FiBriefcase /> },
                  { text: "Problem Solving", icon: <FiTarget /> },
                ].map((chip) => (
                  <motion.div key={chip.text} variants={chipVariant} className={styles.chip}>
                    <span className={styles.chipIcon}>{chip.icon}</span>
                    <span className={styles.chipText}>{chip.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Understated Recruiter Footer */}
            <div className={styles.cardFooter}>
              <p>
                Currently contributing to practical software development while gaining elite industry experience through real-world product building.
              </p>
            </div>

          </motion.div>

          {/* Timeline */}
          <div className={styles.timelineArea}>
            <div className={styles.timelineTrack}>
              <motion.div 
                className={styles.timelineProgress} 
                style={{ scaleY, transformOrigin: "top" }} 
              />
            </div>
            
            <div className={styles.timelineNodes}>
              {[
                { title: "Currently Active", desc: "Building scalable features & collaborating with peers.", status: "active" },
                { title: "Building Real Products", desc: "Writing production-ready, optimized code.", status: "completed" },
                { title: "Industry Workflow", desc: "Learning from experienced mentors & modern practices.", status: "completed" },
                { title: "Internship Begins", desc: "Onboarding into the Not Your College ecosystem.", status: "completed" },
                { title: "Selection", desc: "Chosen as 1 of 15 from over 2700 applicants.", status: "completed" },
              ].map((node, i) => (
                <motion.div 
                  key={node.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                  className={`${styles.node} ${node.status === 'active' ? styles.nodeActive : ''}`}
                >
                  <div className={styles.nodeIndicator}>
                    <div className={styles.nodeInner} />
                    {node.status === 'active' && <div className={styles.nodeRipple} />}
                  </div>
                  <div className={styles.nodeContent}>
                    <h4 className={styles.nodeTitle}>{node.title}</h4>
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
