"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  FiHome,
  FiUser,
  FiZap,
  FiBriefcase,
  FiClock,
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import styles from "./FloatingDock.module.css";

/* ── Types ─────────────────────────────────────────────────────── */
interface DockItemDef {
  id: string;
  icon: React.ElementType;
  label: string;
  href?: string;
  sectionId?: string;
}

const DOCK_ITEMS: DockItemDef[] = [
  { id: "home",       icon: FiHome,     label: "Home",       sectionId: "hero"       },
  { id: "about",      icon: FiUser,     label: "About",      sectionId: "about"      },
  { id: "skills",     icon: FiZap,      label: "Skills",     sectionId: "skills"     },
  { id: "projects",   icon: FiBriefcase,label: "Projects",   sectionId: "projects"   },
  { id: "experience", icon: FiClock,    label: "Experience", sectionId: "experience" },
  { id: "contact",    icon: FiMail,     label: "Contact",    sectionId: "contact"    },
  { id: "github",     icon: FiGithub,   label: "GitHub",     href: "https://github.com/AdityaThapliyal-09" },
  { id: "linkedin",   icon: FiLinkedin, label: "LinkedIn",   href: "https://www.linkedin.com/in/aditya-thapliyal" },
];

/* ── Single dock icon with spring magnification ──────────────── */
function DockIcon({
  item,
  mouseX,
}: {
  item: DockItemDef;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  // Distance from cursor center → size mapping
  const distance = useTransform(mouseX, (val: number) => {
    const el = ref.current;
    if (!el) return 1000;
    const rect = el.getBoundingClientRect();
    return Math.abs(val - (rect.left + rect.width / 2));
  });

  const rawSize = useTransform(distance, [0, 50, 100, 160], [68, 56, 46, 38]);
  const size = useSpring(rawSize, { stiffness: 400, damping: 32, mass: 0.6 });

  const rawY = useTransform(distance, [0, 60, 120], [-12, -6, 0]);
  const y = useSpring(rawY, { stiffness: 400, damping: 30 });

  const handleClick = () => {
    if (item.sectionId) {
      document.getElementById(item.sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sharedStyle = {
    width: size,
    height: size,
    y,
  };

  const sharedClass = styles.iconBtn;
  const Icon = item.icon;

  if (item.href) {
    return (
      <div className={styles.iconWrap}>
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={sharedClass}
          style={sharedStyle}
          id={`dock-${item.id}`}
          aria-label={item.label}
          whileTap={{ scale: 0.88 }}
        >
          <Icon />
        </motion.a>
        <span className={styles.tooltip}>{item.label}</span>
      </div>
    );
  }

  return (
    <div className={styles.iconWrap}>
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={sharedClass}
        style={sharedStyle}
        onClick={handleClick}
        id={`dock-${item.id}`}
        aria-label={`Navigate to ${item.label}`}
        whileTap={{ scale: 0.88 }}
      >
        <Icon />
      </motion.button>
      <span className={styles.tooltip}>{item.label}</span>
    </div>
  );
}

/* ── Separator ───────────────────────────────────────────────── */
function DockSeparator() {
  return <div className={styles.separator} aria-hidden />;
}

/* ── Floating Dock container ──────────────────────────────────── */
export default function FloatingDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className={styles.dockContainer} role="navigation" aria-label="Quick navigation">
      <motion.div
        className={styles.dock}
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
      >
        {DOCK_ITEMS.map((item, i) => (
          <span key={item.id}>
            {/* Separator before social links */}
            {i === 6 && <DockSeparator />}
            <DockIcon item={item} mouseX={mouseX} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
