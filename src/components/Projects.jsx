import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };

    // Initial check and adding event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="pt-20 px-4" id="projects">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl font-mono"
      >
        Projects
      </motion.h2>

      {/* Grid container */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            className="group relative overflow-hidden rounded-3xl shadow-lg"
          >
            {/* Project image */}
            <motion.img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
            />

            {/* Overlay with project name */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
              <h3 className="text-2xl font-bold">{project.name}</h3>
            </div>

            {/* Hidden content on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={!isMobile ? { opacity: 1 } : {}}
              animate={isMobile ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 flex flex-col items-center justify-center text-white px-6 py-4 backdrop-blur-md ${
                isMobile ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500 group-hover:opacity-100 cursor-pointer`}
            >
              <h3 className="mb-4 text-xl font-semibold">{project.name}</h3>
              <p className="mb-6 text-center">{project.description}</p>

              {/* GitHub button */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-2xl bg-white px-4 py-2 text-black hover:bg-gray-300 transition-colors"
              >
                <span className="mr-2">View on GitHub</span>
                <MdArrowOutward />
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
