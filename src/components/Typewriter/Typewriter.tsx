"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;    // Initial delay before typing starts (ms)
  speed?: number;    // Typing speed per character (ms)
  cursor?: boolean;  // Whether to show the blinking cursor
  hideCursorOnComplete?: boolean; // Hides cursor after typing finishes
}

export default function Typewriter({
  text,
  className = "",
  delay = 0,
  speed = 50,
  cursor = true,
  hideCursorOnComplete = false,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, currentIndex + 1));
      currentIndex++;
      
      if (currentIndex >= text.length) {
        clearInterval(intervalId);
        setIsFinished(true);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [hasStarted, text, speed]);

  const showCursor = cursor && !(hideCursorOnComplete && isFinished);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          style={{
            display: "inline-block",
            verticalAlign: "baseline",
            marginLeft: "0.1em",
            width: "0.08em",
            height: "0.9em",
            backgroundColor: "currentColor",
          }}
        />
      )}
    </span>
  );
}
