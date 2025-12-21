"use client";
import React from "react";
import { useState, useEffect } from "react";
const page = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus(data.error || "Something went wrong!");
      }
    } catch (err) {
      setStatus("Server error. Tryy again later!");
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    const handleKeys = (e) => {
      const key = e.key.toLowerCase();

      if (document.activeElement.tagName === "INPUT" && e.key !== "enter")
        return;

      if (key === "enter") {
        setLoading(true);
      }
    };

    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  });

  return (
    <div>
      <main className="contact-container">
        <section className="contact-wrapper">
          <h1>Contact Me</h1>
          <p>
            Want to collaborate, hire me, or just reach out? Send a message —
            I’ll reply as soon as I can.
          </p>

          <form action="" className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              id=""
              placeholder="Your Message..."
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </section>
      </main>
    </div>
  );
};

export default page;
