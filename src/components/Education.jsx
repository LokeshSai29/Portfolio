import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

const Education = () => {
  return (
    <section className="py-8 text-white px-4" id="education">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl tracking-tighter font-mono mb-8"
      >
        My Education
      </motion.h2>
      <div className="relative hidden md:flex flex-col items-center w-full overflow-x-hidden">
        <div className="absolute w-1 bg-gray-500 h-full left-1/2 transform -translate-x-1/2 "></div> {/* Spacing for line */}
        {EDUCATION.map((education, index) => (
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: index * 0.3 }}
            key={index}
            className={`mb-8 w-full flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
          >
            <div className="relative w-10/12 md:w-5/12 p-3 border border-stone-50/30 rounded-lg shadow-lg mx-4 md:mx-10 pr-7">
              <h3 className="text-lg font-semibold">{education.degree}</h3>
              <p className="text-md text-gray-300">{education.institution}</p>
              <p className="text-sm text-gray-400">{education.duration}</p>
              <p className="mt-2 text-gray-200">{education.description}</p>
            </div>
            <FaCircle className="absolute left-1/2 transform -translate-x-1/2 text-blue-500 text-sm" />
          </motion.div>
        ))}
      </div>
      <div className="md:hidden flex flex-col items-center">
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 w-11/12 p-4  border border-stone-50/30 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="text-md text-gray-300">{education.institution}</p>
            <p className="text-sm text-gray-400">{education.duration}</p>
            <p className="mt-2 text-gray-200">{education.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
