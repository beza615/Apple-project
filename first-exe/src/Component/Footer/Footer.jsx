import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTelegram, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Beza Adefris</h2>
          <p>
            Designing and building professional web experiences with a focus on
            clean code and user-centric design.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="https://t.me/fenuzy" target="_blank" rel="noreferrer">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>&copy; 2026 Beza Adefris. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
