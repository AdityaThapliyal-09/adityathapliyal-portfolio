"use client";

import { useRef } from "react";
import styles from "./TextHoverEffect.module.css";

interface Props {
  text: string;
  className?: string;
}

/**
 * Aceternity-style text hover effect.
 * Outlined text that reveals an aurora gradient fill under the cursor
 * using a radial CSS mask anchored to mouse position.
 */
export default function TextHoverEffect({ text, className = "" }: Props) {
  const wrapRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--tx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--ty", `${e.clientY - rect.top}px`);
  };

  return (
    <span
      ref={wrapRef}
      className={`${styles.wrap} ${className}`}
      onMouseMove={handleMouseMove}
      aria-hidden="true"
    >
      {/* Layer 1 — outlined base */}
      <span className={styles.outlined}>{text}</span>
      {/* Layer 2 — gradient reveal, masked to cursor position */}
      <span className={styles.reveal}>{text}</span>
    </span>
  );
}
