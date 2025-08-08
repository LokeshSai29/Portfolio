import { HERO } from "../constants";
import cc from "../assets/bg2.png";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const heroRef = useRef(null);

  // Track Hero visibility
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      // Show button only when the Hero section is partially visible
      setShowButton(rect.top < window.innerHeight && rect.bottom > 200);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleDownload = () => {
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 2000);
  };

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-wrap items-center pl-2 pr-2 md:pl-10 md:pr-2"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="w-full md:w-1/2"
      >
        <p className="mt-11 p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-2 p-2 text-xl">{HERO.wel}</p>

        <motion.div
          className="my-1 p-1 text-4xl font-bold md:text-5xl lg:text-[7rem] tracking-tight flex flex-wrap"
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

        {/* HERO.desc + Spotify aligned */}
        <div className="flex items-center flex-wrap gap-4 p-2">
          <p className="text-xl">{HERO.description}</p>
         <iframe
  src="https://open.spotify.com/embed/track/6FahmzZYKH0zb2f9hrVsvw?utm_source=generator&theme=1"
  height="82"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
  className="w-full md:w-1/2 border border-gray-700 shadow-lg rounded-xl"
/>

        </div>

        {/* Resume Button (scrolls with Hero) */}
        {showButton && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={resume}
            download="Lokesh_sai_resume.pdf"
            onClick={handleDownload}
            className="ml-2 mt-4 mb-2 inline-flex items-center gap-3 px-4 py-2 bg-transparent text-white font-medium rounded-2xl shadow-md border border-stone-50/30"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              cursor: "pointer",
            }}
          >
            <i
              className={`fa-solid ${
                isDownloaded
                  ? "fa-circle-check fa-lg text-green-600 rounded-full"
                  : "fa-download"
              }`}
            ></i>
            <span>{isDownloaded ? "Downloaded!" : "Download Resume"}</span>
          </motion.a>
        )}
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full md:w-1/2 lg:p-4\\8 mt-2"
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
