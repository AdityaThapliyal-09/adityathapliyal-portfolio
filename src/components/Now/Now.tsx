"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import styles from "./Now.module.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Now() {
  return (
    <section className={`section ${styles.nowSection}`} id="now">
      <div className={`container ${styles.container}`}>
        <motion.div {...fadeUp(0)} className="section-heading">
          <span className="label">What I’m Building</span>
          <h2>{siteConfig.nowHeadline}</h2>
          <p>{siteConfig.nowIntro}</p>
        </motion.div>

        <div className={styles.grid}>
          {siteConfig.nowItems.map((item, index) => (
            <motion.article
              key={item.title}
              {...fadeUp(0.08 + index * 0.09)}
              className={`glass-card ${styles.card}`}
            >
              <p className={styles.metric}>{item.metric}</p>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
