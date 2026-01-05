import React from 'react';
// import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import {motion} from 'framer-motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Top Skills
        </p>
        <h2 className={styles.sectionHeadText}>
          Technologies.
        </h2>
        <p className='my-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I have only listed my top skills, if you would like to see all skills, please view my resume.
        </p>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-2'>
        {
          technologies.map((technology) => (
            <div className='w-28 h-28 m-3 p-5 bg-tertiary rounded-lg flex flex-col justify-center items-center' key={technology.name}>
              <img src={technology.icon} alt="technology" />
              <h5>{technology.name}</h5>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");