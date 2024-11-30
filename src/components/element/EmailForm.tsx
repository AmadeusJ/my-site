import React, { useState } from "react";
import AeroCard from "../Aero/AeroCard";
import styles from "./EmailForm.module.scss";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSend = () => {
    if (!email || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // Simulate email sending
    setTimeout(() => {
      setStatus("sent");
    }, 1500);
  };

  return (
    <div className={styles.emailForm}>
      <AeroCard>
        <div className={styles.form}>
          <h2>Contact Me</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className={styles.submitButton} onClick={handleSend}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </div>
          {status === "sent" && <p className={styles.successMessage}>Message sent successfully!</p>}
          {status === "error" && <p className={styles.errorMessage}>Please fill out all fields.</p>}
        </div>
      </AeroCard>
    </div>
  );
}