"use client";

import { useState } from "react";
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
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call for form
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

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

          {/* Contact Form */}
          <motion.div {...fadeUp(0.2)}>
            <form
              className={`glass-card ${styles.form}`}
              onSubmit={handleSubmit}
              id="contact-form"
            >
              <h3 className={styles.formTitle}>Send a Message</h3>

              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.label}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.label}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  className={`${styles.input} ${styles.textarea}`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`btn btn-primary ${styles.submitBtn}`}
                id="contact-submit-btn"
              >
                {status === "loading" ? (
                  <>
                    <span className={styles.spinner} /> Sending…
                  </>
                ) : status === "success" ? (
                  "✓ Message Sent!"
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className={styles.successMsg}>
                  Thanks! I&apos;ll get back to you shortly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
