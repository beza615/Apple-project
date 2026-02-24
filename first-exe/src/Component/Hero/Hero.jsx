import React from "react";
import "./Hero.css";
import Image from "../../assets/Image/photo.jpg";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-image-wrapper">
        <img src={Image} alt="Beza Adefris" />
      </div>

      <div className="hero-text">
        <h1>
          <span>I'm Beza Adefris,</span> Frontend Web Developer.
        </h1>
        <p>Software Engineering Student | Building digital experiences.</p>
      </div>

      <div className="hero-btns">
        <a href="#contact" className="btn-fill">
          Get In Touch
        </a>
        <a href="/resume.pdf" target="_blank" className="btn-outline">
          View Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
