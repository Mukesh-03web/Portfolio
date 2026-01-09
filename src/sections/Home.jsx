import { motion } from "framer-motion";

const name = "MUKESH S";

export default function Home() {
  return (
    <section className="home">
                
              <motion.div
            className="gradient-blob"
            animate={{ opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

      <div className="home-content">
        <motion.h1 className="Name">
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          I’m a Software Developer who builds reliable, efficient, and user-focused applications.
        </motion.p>

        <div className="cta-buttons">
          <motion.button
            className="btn secondary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About Me
          </motion.button>

          <motion.button
            className="btn primary"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260 }}
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </motion.button>
        </div>
      </div>

      
      <div className="ambient-shapes">
        <motion.span
          className="line"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="line"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="dot"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
