import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Success: Your message has been sent!");
        e.target.reset();
      } else {
        setStatus("Error: Failed to send.");
      }
    } catch (error) {
      setStatus("Error: Server not running.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-container">
        {/* የግራ በኩል ፅሁፎች (የጠፉብሽ) */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            message me.
          </p>
          <div className="contact-info">
            <div className="info-item">📧 kirstibeza@gmail.com</div>
            <div className="info-item">📞 +251 977179086</div>
            <div className="info-item">📍 Addis Ababa, Ethiopia</div>
          </div>
        </div>

        {/* የቀኝ በኩል ፎርም */}
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label>Write your message here</label>
          <textarea name="message" placeholder="Enter your message" required />

          <button type="submit">Submit Now</button>
          {status && <p className="status-msg">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
