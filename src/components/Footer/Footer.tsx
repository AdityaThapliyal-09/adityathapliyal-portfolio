"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        
        {/* Top Section: Logo & Links */}
        <div className={styles.topSection}>
          <button className={styles.logo} onClick={scrollToTop} aria-label="Scroll to top">
            <span className={styles.logoIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="white"/>
                <path d="M12 5L5 19H8L12 11L16 19H19L12 5Z" fill="black"/>
              </svg>
            </span>
            <span className={styles.logoText}>Aditya Thapliyal</span>
          </button>

          <nav className={styles.links} aria-label="Footer navigation">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={styles.link}
                id={`footer-nav-${label.toLowerCase()}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom Section: Copyright & Socials */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Aditya Thapliyal. All rights reserved.
          </p>
          
          <div className={styles.socials}>
            <a
              href="https://github.com/AdityaThapliyal-09"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-thapliyal"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:adityathapliyal52@gmail.com"
              className={styles.social}
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
