"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiPhone, FiMapPin } from "react-icons/fi";
import styles from "./Contact.module.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1, delay, ease: [0.25, 1, 0.5, 1] as const },
});

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: "adityathapliyal52@gmail.com",
    href: "mailto:adityathapliyal52@gmail.com",
    id: "contact-email-link",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "AdityaThapliyal-09",
    href: "https://github.com/AdityaThapliyal-09",
    id: "contact-github-link",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "aditya-thapliyal",
    href: "https://www.linkedin.com/in/aditya-thapliyal",
    id: "contact-linkedin-link",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 6395613242",
    href: "tel:+916395613242",
    id: "contact-phone-link",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Dehradun, Uttarakhand, India",
    href: "#",
    id: "contact-location",
  },
];


export default function Contact() {
  const mailtoHref = `mailto:adityathapliyal52@gmail.com?subject=${encodeURIComponent(
    "Opportunity from Your Portfolio"
  )}&body=${encodeURIComponent(
    "Hi Aditya,\n\nI saw your portfolio and I'm interested in connecting.\n\n"
  )}`;

  return (
    <section className={`section ${styles.contactSection}`} id="contact">
      <div className="container">
        <motion.div {...fadeUp(0)} className="section-heading">
          <span className="label">Get in Touch</span>
          <h2>
            Let&apos;s Build Something.
          </h2>
          <p>Whether you have an opportunity, a project idea, or just want to say hi.</p>
        </motion.div>

        <div className={styles.grid}>
          {/* Contact Info */}
          <motion.div {...fadeUp(0.1)} className={styles.infoCol}>
            <div className={`glass-card ${styles.infoCard}`}>
              <h3 className={styles.infoTitle}>Find me on</h3>
              <div className={styles.contactLinks}>
                {contactLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={styles.contactLink}
                    id={link.id}
                  >
                    <div className={styles.linkIconWrap}>
                      <link.icon size={18} />
                    </div>
                    <div>
                      <p className={styles.linkLabel}>{link.label}</p>
                      <p className={styles.linkValue}>{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className={`glass-card ${styles.availCard}`}>
              <div className={styles.availHeader}>
                <span className="status-dot" />
                <span className={styles.availTitle}>Available for Opportunities</span>
              </div>
              <p className={styles.availText}>
                5th Semester BCA student looking for opportunities in full-stack AI/ML development or product roles. Open to remote and on-site positions globally.
              </p>
            </div>
          </motion.div>

          {/* Contact "Form" -> Mailto Link */}
          <motion.div {...fadeUp(0.2)}>
            <a
              href={mailtoHref}
              className={`glass-card ${styles.form}`}
              id="contact-mailto-link"
            >
              <h3 className={styles.formTitle}>Send a Message</h3>
              <p className={styles.formPrompt}>
                Have an opportunity or a project in mind? Click here to open your email client and send a message directly.
              </p>

              <div className={styles.mailtoButton}>
                <FiSend size={18} />
                Open Email Client
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
