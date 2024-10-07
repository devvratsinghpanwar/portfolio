import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Magnetic from "../common/Magnetic";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
       <Magnetic>
      <div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
       
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
        
      </div>
      </Magnetic>
    </Tilt> 
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`styles.sectionSubText text-white`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I'm a skilled and passionate developer with a keen interest in
        machine learning, competitive programming, and DevOps engineering.
        Constantly exploring new technologies, I thrive on solving complex
        problems and building innovative solutions. Let's connect and create
        something amazing together!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (

            <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      
    </>
  );
};

export default SectionWrapper(About, "about");
