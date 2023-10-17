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
          Introduction - Frontend Dev Story
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
          For The last 2 years I have given my life to software development. I left my career in real estate from working with a top selling real estate team to become a software developer. Starting at a bootcamp "Coding Bojo" learning full stack developement for Java, Python and MERN. I graduated and started building my own projects using the resourse from coding dojo, google and stack overflow. Recentely, I found myself deciding to specialize, relearn and perfect front end developement through <strong>Codecademy</strong>. I now currently use youtube as an aditional source to learn through open source projects where I feel I've been able to enhance my frontend skills. 
          {/* With the last 2 and a half years of my life learning full stack web development I'm excited to begin my journey and passion specializing as a frontend developer. I find myself deep in javascript. Even though I have learned all about the frontend, backend, database and interacting with all of these main components, I spend 75% of my time in love with frontend development. */}
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