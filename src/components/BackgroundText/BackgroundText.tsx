"use client";

import { useEffect, useState } from "react";
import styles from "./BackgroundText.module.css";

export default function BackgroundText() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div 
      className={styles.wrapper}
      style={{
        "--tx": `${mousePos.x}px`,
        "--ty": `${mousePos.y}px`
      } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className={styles.outlined}>ADITYA</div>
      <div className={styles.reveal}>ADITYA</div>
    </div>
  );
}
