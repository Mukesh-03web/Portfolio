import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    emailjs
      .send(
        "service_caj4ww6",      
        "template_3ons6pb",       
        {
          title: "Portfolio Contact",
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        },
        "3JsZ3eX08pKFZlzA_"       
      )
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.div
      className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="contact-card"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Contact</h2>

        <p className="contact-desc">
          Have a project in mind or just want to connect?  
          Feel free to reach out.
        </p>

        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="4"
            required
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        <div className="contact-links">
          <a href="mailto:mukeshzaddy03@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}