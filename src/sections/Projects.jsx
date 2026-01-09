import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Sybo.ai",
    description:
      "A conversational AI platform focused on emotional well-being with real-time avatar interaction.",
    tech: ["React Native"],
    live: "https://sybo.ai",
    github: "",
    featured: true,
  },
  {
    title: "Fit Pass",
    description:
      "A fitness membership platform to manage passes, users, and subscriptions.",
    tech: ["React.js","Bootstrap", "Node.js"],
    github: "https://github.com/Mukesh-03web/Fit-Pass",
    status: "In development",
  },
  {
    title: "AKB Webpage",
    description:
      "A modern business website built with responsive UI and clean design.",
    tech: ["React.js"],
    github: "https://github.com/Mukesh-03web/School_project",
    status: "In development",
  },
];

export default function Projects() {
  return (
    <motion.div
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Projects</h2>
      <p className="section-desc">
        A selection of projects showcasing real-world applications and
        problem-solving.
      </p>

      {/* Featured */}
      <div className="featured-project">
        <ProjectCard project={projects[0]} featured />
      </div>

      {/* Others */}
      <div className="projects-grid">
        {projects.slice(1).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <motion.div
      className={`project-card ${featured ? "featured" : ""}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-header">
        <h3>{project.title}</h3>
        {project.status && (
          <span className="project-status">{project.status}</span>
        )}
      </div>

      <p className="project-desc">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank">
            <FaGithub />
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank">
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </motion.div>
  );
}
