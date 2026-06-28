"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.navInner}`}>
          {/* Logo */}
          <a href="#" className={styles.logo} onClick={() => handleNavClick("#")}>
            <span className={styles.logoCode}>&lt;</span>
            <span className={styles.logoName}>AT</span>
            <span className={styles.logoCode} style={{ marginLeft: "-2px" }}>/&gt;</span>
          </a>

          {/* Desktop Links */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  className={`${styles.navLink} ${activeSection === link.href.replace("#", "") ? styles.active : ""}`}
                  onClick={() => handleNavClick(link.href)}
                  id={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className={styles.navRight}>
            <a
              href="mailto:adityathapliyal52@gmail.com"
              className="btn btn-primary"
              id="nav-hire-btn"
            >
              Hire Me
            </a>
            {/* Mobile hamburger */}
            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              id="nav-mobile-toggle"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.overlayVisible : ""}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.drawerOpen : ""}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                className={`${styles.mobileLink} ${activeSection === link.href.replace("#", "") ? styles.active : ""}`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <a
          href="mailto:adityathapliyal52@gmail.com"
          className={`btn btn-primary ${styles.mobileCta}`}
          onClick={() => setMobileOpen(false)}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
