import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <section className="pt-20 px-4" id="projects">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl font-mono"
      >
        Projects
      </motion.h2>

      {/* Grid Container */}
      <div
        className={`grid gap-4 ${
          isMobile
            ? "grid-cols-1 md:grid-cols-2" // Mobile: Simple Grid
            : "grid-cols-3 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[220px] pl-5 pr-5" // Desktop: Bento Grid
        }`}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            className={`group relative overflow-hidden rounded-3xl ${
              !isMobile &&
              (index % 8 === 0
                ? "lg:col-span-2 lg:row-span-2" // Big block
                : index % 5 === 0
                ? "lg:col-span-1 lg:row-span-2" // Tall block
                : index % 3 === 0
                ? "lg:col-span-2 lg:row-span-1" // Wide block
                : "")
            }`}
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Project Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-2">
              <h3 className="text-xl md:text-2xl font-bold">
                {project.id}. {project.name}
              </h3>
            </div>

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={!isMobile ? { opacity: 1 } : {}}
              animate={isMobile ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 flex flex-col items-center justify-center text-white p-4 backdrop-blur-lg ${
                isMobile ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500 group-hover:opacity-100 cursor-pointer`}
            >
              <h3 className="mb-3 text-xl">{project.name}</h3>
              <p className="mb-8 text-center">{project.description}</p>

              {/* GitHub Button */}
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
