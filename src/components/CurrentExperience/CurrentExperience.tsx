"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { FiCheckCircle, FiUsers, FiTarget, FiZap, FiCode, FiBriefcase, FiAward, FiBarChart2, FiFigma, FiTrendingUp } from "react-icons/fi";
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
          <span className="label">Experience</span>
          <h2>Professional Experience.</h2>
        </motion.div>

        <div className={styles.contentWrapper}>
          
          {/* Main Glass Card (Double-Bezel Architecture) */}
          <motion.div {...fadeUp(0.2)} className="glass-card-shell">
            <div className={`glass-card ${styles.mainCard}`}>
              <div className={styles.cardHighlight} />
            
            {/* Header: Identity & Status */}
            <div className={styles.cardHeader}>
              <div className={styles.identityGroup}>
                <div className={styles.logoBox}>
                  <Image src="/nyclogo.webp" alt="Not Your College logo" width={64} height={64} className={styles.logoImage} />
                </div>
                <div className={styles.companyMeta}>
                  <h3 className={styles.companyName}>Not Your College</h3>
                  <div className={styles.companySubtitle}>
                    <span className={styles.roleLabel}>Software Engineering Intern</span>
                    <span className={styles.divider}>·</span>
                    <span className={styles.poweredBy}>
                      Powered by
                      <Image src="/sheryians.webp" alt="Sheryians logo" width={22} height={22} className={styles.sheryiansLogo} />
                      Sheryians
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.statusBadgeCompleted}>
                <FiCheckCircle size={14} className={styles.completedIcon} />
                <span className={styles.statusTextCompleted}>COMPLETED</span>
              </div>
            </div>

            {/* Philosophy Block */}
            <div className={styles.philosophyBlock}>
              <h4 className={styles.philosophyTitle}>The Problem-First Philosophy</h4>
              <p className={styles.philosophyText}>
                The problem is the mother of all development: Design, Tech, Marketing, and Sales. 
                For our flagship project, <strong>DormEats</strong>, we started with a simple truth: 
                <em>Restaurants need customers, and students are hungry</em>. Before writing a single line of code, we mapped the business mechanics connecting them—understanding user frustrations, researching solutions, planning the architecture, and executing fast.
              </p>
            </div>

            {/* Execution Pipeline (Bento Grid) */}
            <div className={styles.pipelineGrid}>
              <motion.div {...fadeUp(0.1)} className={styles.pipelineCard}>
                <div className={styles.pipelineHeader}>
                  <div className={styles.pipelineIconWrap}><FiBarChart2 /></div>
                  <h4 className={styles.pipelineTitle}>Market Research</h4>
                </div>
                <p className={styles.pipelineText}>Calculated CAC, LTV, and AOV. Analyzed front-end vs. back-end profit margins to ensure a sustainable, scalable business model.</p>
              </motion.div>

              <motion.div {...fadeUp(0.2)} className={styles.pipelineCard}>
                <div className={styles.pipelineHeader}>
                  <div className={styles.pipelineIconWrap}><FiFigma /></div>
                  <h4 className={styles.pipelineTitle}>UI/UX Design</h4>
                </div>
                <p className={styles.pipelineText}>Translated research into wireframes, mockups, and high-fidelity Figma prototypes, prioritizing intuitive user flows for hungry students.</p>
              </motion.div>

              <motion.div {...fadeUp(0.3)} className={styles.pipelineCard}>
                <div className={styles.pipelineHeader}>
                  <div className={styles.pipelineIconWrap}><FiCode /></div>
                  <h4 className={styles.pipelineTitle}>Tech Architecture</h4>
                </div>
                <p className={styles.pipelineText}>Generated strict SRS (Functional, Non-Functional, Out of Scope). Architected the tech stack, enforced SOLID principles, structured linting, and integrated logging.</p>
              </motion.div>

              <motion.div {...fadeUp(0.4)} className={styles.pipelineCard}>
                <div className={styles.pipelineHeader}>
                  <div className={styles.pipelineIconWrap}><FiTrendingUp /></div>
                  <h4 className={styles.pipelineTitle}>Marketing & Sales</h4>
                </div>
                <p className={styles.pipelineText}>"Speed is money." Rapidly executed content strategies, graphics, and editing to drive user acquisition and validate the product in the real world.</p>
              </motion.div>
            </div>

            {/* Internship Gallery */}
            <div className={styles.gallery}>
              {/* Product Mockups */}
              <div className={styles.gallerySubGrid}>
                <motion.div {...fadeUp(0.1)} className={styles.galleryItem}>
                  <Image src="/dormeats-1.png" alt="DormEats Splash Screen" width={640} height={480} className={styles.galleryImg} />
                </motion.div>
                <motion.div {...fadeUp(0.2)} className={styles.galleryItem}>
                  <Image src="/dormeats-2.png" alt="DormEats UI Mockups" width={640} height={480} className={styles.galleryImg} />
                </motion.div>
                <motion.div {...fadeUp(0.3)} className={styles.galleryItem}>
                  <Image src="/dormeats-3.png" alt="DormEats Checkout Screen" width={640} height={480} className={styles.galleryImg} />
                </motion.div>
              </div>

              {/* Real World Photos */}
              <div className={styles.galleryRealWorld}>
                <motion.div {...fadeUp(0.4)} className={`${styles.galleryItem} ${styles.galleryMain}`}>
                  <Image src="/nyc-1.webp" alt="Presenting at NYC Internship" width={1600} height={686} className={styles.galleryImg} />
                </motion.div>
                <div className={styles.gallerySubGrid}>
                  <motion.div {...fadeUp(0.5)} className={styles.galleryItem}>
                    <Image src="/nyc-letter.webp" alt="NYC Welcome Letter" width={1200} height={900} className={styles.galleryImg} />
                  </motion.div>
                  <motion.div {...fadeUp(0.6)} className={styles.galleryItem}>
                    <Image src="/nyc-2.webp" alt="Collaborating at NYC Internship" width={1600} height={1200} className={styles.galleryImg} />
                  </motion.div>
                  <motion.div {...fadeUp(0.7)} className={styles.galleryItem}>
                    <Image src="/nyc-3.webp" alt="Showing product at NYC Internship" width={1600} height={1200} className={styles.galleryImg} />
                  </motion.div>
                </div>
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
                Gained elite industry experience and practical software development skills through real-world product building.
              </p>
            </div>

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
                { title: "Internship Completed", desc: "Successfully delivered scalable features & collaborated with peers.", status: "completed" },
                { title: "Building Real Products", desc: "Wrote production-ready, optimized code.", status: "completed" },
                { title: "Industry Workflow", desc: "Learned from experienced mentors & modern practices.", status: "completed" },
                { title: "Internship Begins", desc: "Onboarding into the Not Your College ecosystem.", status: "completed" },
                { title: "Selection", desc: "Chosen as 1 of 5 from over 2700 applicants.", status: "completed" },
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
