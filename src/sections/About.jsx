import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function About() {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
   
        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/mukesh-image.jpeg" alt="Mukesh profile" />
        </motion.div>

        
        <div className="about-text">
          <motion.h2
            initial={{ letterSpacing: "0.05em" }}
            whileInView={{ letterSpacing: "-0.02em" }}
            transition={{ duration: 0.6 }}
            >
            ABOUT ME
            </motion.h2>

          <p>
            I’m Mukesh, a software developer who enjoys building clean,
            responsive, and interactive web applications. I focus on
            writing maintainable code and creating smooth user experiences.
          </p>

          <p>
            I enjoy working with modern frontend technologies and turning
            ideas into functional, polished products.
          </p>

          <div className="about-meta">
            <span>
              <strong>Location :</strong> Ariyalur
            </span>
            <span>
              <strong>Availability :</strong> Open to work
            </span>
          </div>
        </div>
      </motion.div>

      
      <motion.div
        className="about-socials-bottom"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/Mukesh-03web"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/MukeshSrinivasan"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </motion.div>
    </motion.div>
  );
}
