import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const certifications = [
  {
    title: "Salesforce Certified Platform Developer I",
    image: "/certifications/sdp.png",
    link: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=T8p1u2eXNF/UezjcpdgXFw10JTsfM+G4FYwdxaB2iEYY0AgjXwuy2mrajLPcZdH0",
  },
  {
    title: "Oracle Cloud Certified AI Foundations Associate",
    image: "/certifications/oaf.png",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4EF668AC162D032A04CBDEED067B86E4E3A6343A5CCA34DCF1E866D21DB84D43",
  },
  {
    title: "Automation Anywhere Certified Essentials RPA Professional - 2023",
    image: "/certifications/aapra.png",
    link: "https://certificates.automationanywhere.com/3385875e-7893-4816-bea5-42f6632491e6#acc.gqDcZXiz",
  },
  {
    title: "Salesforce Ai Associate",
    image: "/certifications/saa.png",
    link: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=T8p1u2eXNF/UezjcpdgXFw10JTsfM+G4FYwdxaB2iEYY0AgjXwuy2mrajLPcZdH0",
  },
  {
    title: "Red Hat Certified Enterprise Application Developer",
    image: "/certifications/red.png",
    link: "https://rhtapps.redhat.com/verify?certId=240-185-785",
  },
  {
    title: "Essentials Automation Professional Certification",
    image: "/certifications/eap.png",
    link: "https://certificates.automationanywhere.com/82c3fb18-b71f-4d97-b35e-2b6c333effc6#acc.CnmgW9z5",
  },
  {
    title: "GitHub Foundations",
    image: "/certifications/git.png",
    link: "https://www.credly.com/badges/b1863e06-568f-4259-9eb9-f9b8d7d42eef/print",
  },

  // Duplicate for infinite scroll effect
  {
    title: "Salesforce Certified Platform Developer I",
    image: "/certifications/sdp.png",
    link: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=T8p1u2eXNF/UezjcpdgXFw10JTsfM+G4FYwdxaB2iEYY0AgjXwuy2mrajLPcZdH0",
  },
  {
    title: "Oracle Cloud Certified AI Foundations Associate",
    image: "/certifications/oaf.png",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4EF668AC162D032A04CBDEED067B86E4E3A6343A5CCA34DCF1E866D21DB84D43",
  },
  {
    title: "Automation Anywhere Certified Essentials RPA Professional - 2023",
    image: "/certifications/aapra.png",
    link: "https://certificates.automationanywhere.com/3385875e-7893-4816-bea5-42f6632491e6#acc.gqDcZXiz",
  },
  {
    title: "Salesforce Ai Associate",
    image: "/certifications/saa.png",
    link: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=T8p1u2eXNF/UezjcpdgXFw10JTsfM+G4FYwdxaB2iEYY0AgjXwuy2mrajLPcZdH0",
  },
  {
    title: "Red Hat Certified Enterprise Application Developer",
    image: "/certifications/red.png",
    link: "https://rhtapps.redhat.com/verify?certId=240-185-785",
  },
  {
    title: "Essentials Automation Professional Certification",
    image: "/certifications/eap.png",
    link: "https://certificates.automationanywhere.com/82c3fb18-b71f-4d97-b35e-2b6c333effc6#acc.CnmgW9z5",
  },
  {
    title: "GitHub Foundations",
    image: "/certifications/git.png",
    link: "https://www.credly.com/badges/b1863e06-568f-4259-9eb9-f9b8d7d42eef/print",
  },
];

const CertificationCarousel = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      controls.stop(); // Pause animation on hover
    } else {
      controls.start({
        x: "-50%",
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      });
    }
  }, [isHovered, controls]);

  return (
    <div className="w-full overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-base sm:text-lg md:text-xl font-medium text-white mb-5"
      >
        ★ You can click on any of the certificates below to view their official
        verification page and explore more details about each credential
      </motion.p>

      <motion.div
        className="flex gap-8 w-max"
        animate={controls}
      >
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="min-w-[180px] sm:min-w-[220px] md:min-w-[260px] lg:min-w-[300px] xl:min-w-[320px] bg-[#00000022] rounded-2xl border border-white/20 p-4 m-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[240px] object-contain mb-3 rounded-lg"
              />
              <p className="text-sm sm:text-base md:text-lg font-semibold text-center text-white">
                {cert.title}
              </p>
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CertificationCarousel;
