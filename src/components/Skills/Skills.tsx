"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiTypescript, SiJavascript, SiPython, SiDart, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiFlutter, SiTailwindcss, SiFigma,
  SiNodedotjs, SiExpress, SiDjango, SiFastapi,
  SiFirebase, SiSupabase, SiMongodb, SiMysql,
  SiGit, SiGithub, SiPostman, SiPostgresql, SiRazorpay
} from "react-icons/si";
import { skillCategories } from "@/lib/data";
import styles from "./Skills.module.css";

type IconType = React.ComponentType<{ size?: number; className?: string }>;

const iconMap: Record<string, IconType> = {
  SiTypescript, SiJavascript, SiPython, SiDart, SiHtml5,
  SiCss3: SiCss,
  SiPostgresql,
  SiReact, SiNextdotjs, SiFlutter, SiTailwindcss, SiFigma,
  SiRadixui: SiReact,
  SiNodedotjs, SiExpress, SiDjango, SiFastapi, SiPostman,
  SiFirebase, SiSupabase, SiMongodb, SiMysql,
  SiGit, SiGithub,
  SiVisualstudiocode: SiGit,
  SiRazorpay,
  SiClerk: SiReact,
  SiTwilio: SiPostgresql,
};

// Color per icon for visual richness
const iconColors: Record<string, string> = {
  SiTypescript: "#3178C6",
  SiJavascript: "#F7DF1E",
  SiPython: "#3776AB",
  SiDart: "#0175C2",
  SiHtml5: "#E34F26",
  SiCss3: "#1572B6",
  SiPostgresql: "#336791",
  SiReact: "#61DAFB",
  SiNextdotjs: "#FFFFFF",
  SiFlutter: "#02569B",
  SiTailwindcss: "#06B6D4",
  SiFigma: "#F24E1E",
  SiRadixui: "#B06EF3",
  SiNodedotjs: "#339933",
  SiExpress: "#ffffff",
  SiDjango: "#092E20",
  SiFastapi: "#009688",
  SiPostman: "#FF6C37",
  SiFirebase: "#FFCA28",
  SiSupabase: "#3ECF8E",
  SiMongodb: "#47A248",
  SiMysql: "#4479A1",
  SiGit: "#F05032",
  SiGithub: "#ffffff",
  SiVisualstudiocode: "#007ACC",
  SiRazorpay: "#3395FF",
  SiClerk: "#6C47FF",
  SiTwilio: "#F22F46",
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section className={`section ${styles.skillsSection}`} id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="label">// tech_stack</span>
          <h2>
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <div className="divider" />
          <p>Tools I reach for to bring ideas to life.</p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.tabBar}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(cat.id)}
              id={`skills-tab-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className={styles.skillsGrid}
          >
            {activeCategory.skills.map((skill, i) => {
              const IconComp = iconMap[skill.icon] ?? SiReact;
              const iconColor = iconColors[skill.icon] ?? "var(--accent-cyan)";
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                  className="glass-card-shell"
                  style={{ "--icon-color": iconColor } as React.CSSProperties}
                >
                  <div className={`glass-card ${styles.skillCard}`}>
                  <div
                    className={styles.skillIconWrap}
                    style={{ "--icon-color": iconColor } as React.CSSProperties}
                  >
                    <IconComp size={28} />
                  </div>
                  <p className={styles.skillName}>{skill.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
