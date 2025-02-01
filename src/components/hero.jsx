import { HERO } from "../constants";
import cc from "../assets/bg2.png";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";
import { useState } from "react";

const Hero = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  // Animation Variants for HERO.name
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between letters
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleDownload = () => {
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 2000); // Revert back to the download icon after 2 seconds
  };

  return (
    <section className="flex min-h-screen flex-wrap items-center pl-2 pr-2 md:pl-10 md:pr-2 ">

      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="w-full md:w-1/2"
      >
        <p className="my-5 p-3.5 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">{HERO.wel}</p>

        {/* HERO.name animated text */}
        <motion.div
          className="my-1 p-1 text-4xl font-bold md:text-5xl lg:text-[7rem] tracking-tight flex"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {HERO.name.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
        {/* Resume Download Button */}
        <div className="mb-5">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={resume}
            download="Lokesh_sai_resume.pdf"
            onClick={handleDownload}
            className="inline-flex items-center gap-3 px-4 py-2 
          bg-transparent text-white font-medium rounded-2xl shadow-md border border-stone-50/30 
        transition-all duration-300"
            style={{
              backdropFilter: "blur(10px)", // Adds blur effect
              WebkitBackdropFilter: "blur(10px)", // Cross-browser compatibility
              cursor: "pointer",
            }}
          >
            <i
              className={`fa-solid ${
                isDownloaded ? "fa-solid fa-circle-check fa-lg text-green-600 rounded-full" : "fa-download"
              }`}
            ></i>
            <span>{isDownloaded ? "Downloaded!" : "Download Resume"}</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full md:w-1/2 lg:p-4\8"
      >
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={cc}
            width={520}
            height={450}
            alt="Lokesh Sai"
            className="rounded-3xl border border-stone-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
