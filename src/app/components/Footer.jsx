"use client";
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  ArrowUp,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <h3 onClick={scrollToTop}>WeMoren</h3>
          <p>Frontend Developer</p>
        </div>

        {/* Navigation */}
        <div className="footer-nav">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Social icons */}
        <div className="footer-actions">
          <div className="footer-socials">
            <a
              href="https://github.com/WeMoren"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/WeMoren"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://twitter.com/WeMoren"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://youtube.com/@wemoren_dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube />
            </a>
          </div>

          <a href="/wemoren-portfolio.pdf" download className="cv-download">
            <Download size={16} /> Resume
          </a>
        </div>
      </div>

      {/* Utility row */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} WeMoren. All rights reserved.</p>

        <button className="back-to-top" onClick={scrollToTop}>
          <ArrowUp />
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;
