import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiBootstrap, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
  { name: "React Native", icon: <FaReact />, color: "#61DAFB" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
  { name: "Express.js", icon: <SiExpress />, color: "#AAAAAA" },
];
export default function Skills() {
  return (
    <motion.div
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="skills-card"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>What I Do</h2>
        <p className="skills-desc">
          I build responsive, interactive web and mobile applications using
          modern JavaScript technologies.
        </p>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.div
                key={skill.name}
                className="skill-item"
                whileHover={{ y: -6 }}
              >
                <div
                  className="skill-icon"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span>{skill.name}</span>
              </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}