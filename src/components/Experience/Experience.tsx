"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiBook } from "react-icons/fi";
import { experiences } from "@/lib/data";
import styles from "./Experience.module.css";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] as const },
});

export default function Experience() {
  return (
    <section className={`section ${styles.expSection}`} id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as const }}
          className="section-heading"
        >
          <span className="label">My Journey</span>
          <h2>
            Experience &amp; Education.
          </h2>
          <p>From classroom to founder — my path as a product builder.</p>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => {
            const isWork = exp.type === "work";
            return (
              <motion.div
                key={exp.id}
                {...inView(0.1 + i * 0.1)}
                className={styles.item}
                id={`exp-${exp.id}`}
              >
                {/* Connector */}
                <div className={styles.connector}>
                  <div className={styles.nodeIcon}>
                    {isWork ? <FiBriefcase size={16} /> : <FiBook size={16} />}
                  </div>
                  {i < experiences.length - 1 && <div className={styles.line} />}
                </div>

                {/* Card */}
                <div className={`glass-card ${styles.card}`}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <p className={styles.org}>
                        {exp.organization}
                      </p>
                    </div>
                    <div className={styles.meta}>
                      <span className={`badge ${styles.typeBadge}`}>
                        {isWork ? "Work" : "Education"}
                      </span>
                      <p className={styles.period}>{exp.period}</p>
                      <p className={styles.location}>{exp.location}</p>
                    </div>
                  </div>

                  <ul className={styles.bullets}>
                    {exp.description.map((point, j) => (
                      <li key={j} className={styles.bullet}>
                        <span className={styles.bulletDot} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
