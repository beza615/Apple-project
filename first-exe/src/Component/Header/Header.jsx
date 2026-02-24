import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/Image/image.png";
import {
  FaBars,
  FaTimes,
  FaTelegram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="portdev">
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      <div className="mobile-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>

      <nav
        className={isMobile ? "home active" : "home"}
        onClick={() => setIsMobile(false)}
      >
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="portbutton">
        <button className="connect-btn" onClick={toggleModal}>
          Connect With Me
        </button>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Connect with Beza</h3>
            <div className="modal-links">
              {/* Telegram Link Fixed */}
              <a href="https://t.me/fenuzy" target="_blank" rel="noreferrer">
                <FaTelegram /> Telegram
              </a>

              {/* Email Link Fixed */}
              <a href="mailto:kirstibeza@gmail.com">
                <FaEnvelope /> Email
              </a>

              {/* Phone Link Fixed */}
              <a href="tel:+251977179086">
                <FaPhone /> Call Me (+251977179086)
              </a>
            </div>
            <button className="close-btn" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
