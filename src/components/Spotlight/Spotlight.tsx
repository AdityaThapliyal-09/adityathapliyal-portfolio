"use client";

import { motion } from "framer-motion";
import styles from "./Spotlight.module.css";

export default function Spotlight() {
  return (
    <div className={styles.container} aria-hidden="true">
      {/* Left Spotlight Beam */}
      <motion.div
        className={`${styles.beam} ${styles.beamLeft}`}
        initial={{ opacity: 0, x: -100, scale: 0.8, rotate: -35 }}
        animate={{ opacity: 1, x: 0, scale: 1, rotate: -45 }}
        transition={{
          duration: 2.5,
          ease: [0.16, 1, 0.3, 1], // Apple-style cubic bezier
          delay: 0.1,
        }}
      />
      
      {/* Right Spotlight Beam */}
      <motion.div
        className={`${styles.beam} ${styles.beamRight}`}
        initial={{ opacity: 0, x: 100, scale: 0.8, rotate: 35 }}
        animate={{ opacity: 1, x: 0, scale: 1, rotate: 45 }}
        transition={{
          duration: 2.5,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.3,
        }}
      />
    </div>
  );
}
