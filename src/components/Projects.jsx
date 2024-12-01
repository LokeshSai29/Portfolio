import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Check on mount and add event listener for resize
    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <section className="pt-20 pl-4 pr-4" id="projects">
      {/* Projects heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl font-mono"
      >
        Projects
      </motion.h2>

      {/* Projects grids */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl"
          >
            <motion.img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="mb-2 text-4xl">
                {project.id}. {project.name}
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={!isMobile ? { opacity: 1 } : {}}
              animate={isMobile ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 flex flex-col items-center justify-center text-white ${
                isMobile ? "opacity-100" : "opacity-0"
              } backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 hover:cursor-pointer`}
            >
              <h3 className="mb-2 text-xl">{project.name}</h3>
              <p className="mb-12 p-4">{project.description}</p>

              {/* Button for GitHub */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-4 py-2 text-black hover:bg-gray-300"
              >
                <div className="flex items-center">
                  <span>View on GitHub</span>
                  <MdArrowOutward />
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
