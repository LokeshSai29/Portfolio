import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Divider = () => (
  <div className="mt-4 mb-6 border-t-2 border-stone-600 w-12/12 mx-auto"></div>
);


const Workexp = () => {
  return (
    <section className="pt-20 lg:px-15" id="work">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl lg:text-4xl tracking-tighter font-mono"
      >
        {" "}
        Work Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-8 p-10 "
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            key={index}
            className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
          >
            <h3 className="text-2xl font-semibold">{experience.title}</h3>
            <p className="text-xl">{experience.company}</p>
            <p className="text-sm text-stone-300">{experience.duration}</p>
            <p className="mt-2 text-base">{experience.description}</p>
          </motion.div>
        ))}

        {/* Add animations for each section */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded-xl border border-stone-50/30 bg-white/10 p-4 lg:px-16"
        >
          <h2 className="text-2xl font-thin">
            Although I am a fresher, I have gained valuable skills and practical
            knowledge through academic projects, internships, and
            certifications.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="rounded-xl border border-stone-50/30 bg-white/10 p-4 lg:px-16"
        >
          <h2 className="text-2xl font-semibold">Academic Projects</h2>
          <p className="mt-2 text-base">
            - Developed a web-based platform for managing student group projects
            using Spring Boot and ReactJS, incorporating role-based access
            control and task tracking.
            <br />
            - Designed and implemented an online art gallery using Python and
            MongoDB, providing a platform for users to view, categorize, and
            purchase artwork, while ensuring efficient data storage and
            retrieval for high performance .<br />- Created a Maven-based web
            application for an E-Approval System, showcasing expertise in Java,
            Hibernate, and database management.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="rounded-xl border border-stone-50/30 bg-white/10 p-4 lg:px-16"
        >
          <h2 className="text-2xl font-semibold">Virtual Internships</h2>

          {/* Salesforce Developer Virtual Internship */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Salesforce Developer Virtual Internship
            </h3>
            <p className="text-l">Salesforce</p>
            <p className="text-sm text-stone-300">
              8 weeks (Nov 2023 – Jan 2024)
            </p>
            <p className="mt-2 text-base">
              In this internship, I worked on building and customizing
              Salesforce applications, using the Salesforce Lightning platform
              to enhance user interface components, and automating business
              processes with Salesforce Flow and Apex. I collaborated with a
              team of developers to create solutions for real-world business
              challenges.
            </p>
          </div>
          <Divider />

          {/* Data Engineering Virtual Internship */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Data Engineering Virtual Internship
            </h3>
            <p className="text-l">AWS Academy (Eduskills)</p>
            <p className="text-sm text-stone-300">
              10 weeks (July 2024 – Sept 2024)
            </p>
            <p className="mt-2 text-base">
              During this internship, I worked on designing data pipelines and
              managing large-scale data storage solutions on AWS. I gained
              hands-on experience with tools like Amazon S3, AWS Lambda, and
              Redshift. I also worked on data transformations and analysis,
              implementing data warehousing concepts and providing insights to
              improve business operations.
            </p>
          </div>
          <Divider />

          {/* Cyber Security With Kali Linux */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Cyber Security With Kali Linux
            </h3>
            <p className="text-l">IBM SkillsBuild Platform (Edunet)</p>
            <p className="text-sm text-stone-300">
              6 weeks (May 15, 2024 – June 25, 2024)
            </p>
            <p className="mt-2 text-base">
              This internship focused on ethical hacking and penetration testing
              using Kali Linux. I learned to identify and exploit
              vulnerabilities, implement network security measures, and protect
              systems from cyber-attacks. Hands-on labs covered topics such as
              network reconnaissance, vulnerability scanning, and creating
              secure environments.
            </p>
          </div>
          <Divider />

          {/* Cybersecurity Virtual Internship */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Cybersecurity Virtual Internship
            </h3>
            <p className="text-l">Palo Alto Networks (Eduskills)</p>
            <p className="text-sm text-stone-300">
              10 weeks (April 2024 – June 2024)
            </p>
            <p className="mt-2 text-base">
              During this internship, I focused on implementing security
              measures for cloud-based infrastructures and network devices. I
              gained practical experience in using Palo Alto Networks tools for
              threat prevention, firewall configurations, and creating security
              policies to mitigate cyber threats. The internship also involved
              practical labs on securing enterprise networks and understanding
              advanced persistent threats (APTs).
            </p>
          </div>
        </motion.div>

       
      </motion.div>
    </section>
  );
}

export default Workexp
