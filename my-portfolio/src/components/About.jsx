import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { portfolio } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75 )}
        className="w-full green-pink-gradient p-[1px] rounded=[20px] shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          // get rid of bg-teritiary if decide to go with green colors 
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img 
            src={icon} 
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>
          Introduction - Brief Story
        </p>
        <h2 className={styles.sectionHeadText}>
          About Me
        </h2>
      </motion.div>
      <div className="md:flex items-center justify-around gap-2 sm:flex-row">
        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <img src={portfolio} alt="portfolio" className="max-w-[260px] " />
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text=[15px] max-w-3xl leading-[30px]"
        >
          For the past four years, I’ve devoted myself to web development and developed a strong passion for building modern, high-quality applications. I currently focus on frontend technologies, with a solid background in full-stack development gained through Coding Dojo’s three-stack program, which covered MERN, Java Spring, and Python (Flask & Django). I later decided to pursue my bachelor’s degree at California State University, Northridge, where my understanding of core programming concepts and software engineering principles was further solidified. Today, I primarily work with React and modern frontend technologies such as the Next.js framework, which I use to design and develop client websites as a freelance developer.
          
        </motion.p>
      </div>
    

      <div className="mt-20 flex flex-wrap gap-10 justify-center ">
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");