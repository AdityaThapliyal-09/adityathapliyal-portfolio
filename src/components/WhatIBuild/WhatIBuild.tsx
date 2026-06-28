"use client";

import { motion } from "framer-motion";
import TextHoverEffect from "@/components/TextHoverEffect/TextHoverEffect";
import styles from "./WhatIBuild.module.css";

const LINES = ["AI · ML", "FULLSTACK", "MOBILE"];

const CHIPS = [
  { label: "Next.js",  color: "#ffffff" },
  { label: "FastAPI",  color: "#009688" },
  { label: "Flutter",  color: "#02569B" },
  { label: "Firebase", color: "#FFCA28" },
  { label: "Supabase", color: "#3ECF8E" },
  { label: "LangChain",color: "#b06ef3" },
  { label: "Python",   color: "#3776AB" },
  { label: "Figma",    color: "#F24E1E" },
];

export default function WhatIBuild() {
  return (
    <section className={styles.section} aria-label="What I Build">
      <div className={styles.glow} aria-hidden />

      <div className={`container ${styles.inner}`}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.labelWrap}
        >
          <span className="label">// what_i_build</span>
          <p className={styles.hint}>Hover over each word ↓</p>
        </motion.div>

        {/* Text hover lines */}
        <div className={styles.textStack}>
          {LINES.map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
            >
              <TextHoverEffect
                text={line}
                className={styles.textLine}
              />
            </motion.div>
          ))}
        </div>

        {/* Tech chip cloud */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={styles.chipCloud}
        >
          {CHIPS.map((chip, i) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
              className={styles.chip}
              style={
                { "--chip-color": chip.color } as React.CSSProperties
              }
            >
              <span
                className={styles.chipDot}
                style={{ background: chip.color }}
              />
              {chip.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={styles.tagline}
        >
          Building at the intersection of{" "}
          <span className={styles.hl}>Artificial Intelligence</span>,{" "}
          <span className={styles.hl}>Full Stack Engineering</span>, and{" "}
          <span className={styles.hl}>Product Design</span>.
        </motion.p>
      </div>
    </section>
  );
}
