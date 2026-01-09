import { motion } from "framer-motion";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="navbar-wrapper"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <nav className="navbar">
        <button onClick={() => scrollTo("about")}>About</button>
        <button onClick={() => scrollTo("skill")}>Skills</button>
        <button onClick={() => scrollTo("projects")}>Projects</button>
        <button onClick={() => scrollTo("contact")}>Contact</button>
      </nav>
    </motion.div>
  );
}
