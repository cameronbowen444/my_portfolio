import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { AvatarCanvas } from './canvas';
import { Link } from 'react-router-dom';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {AiOutlineDownload} from 'react-icons/ai';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { HashLink } from 'react-router-hash-link'

const Hero = () => {


  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute z-[1] inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm<span className='text-[#6badf8]'>  <br />Cameron</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I specialize in frontend development, <br className='sm:block hidden' />
            backed by a strong full-stack foundation.
          </p>
          <div className='flex gap-4 mt-10 items-center'>
            <Link 
              to='/files/resume.pdf'
              download
              target='_blank'
              className='group text-white w-fit px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-800 to-cyan-800 cursor-pointer border-2 py-5'
              >
                <span><AiOutlineDownload size={25} className='mr-1' /></span>
                Resume
            </Link>
            <HashLink 
              to={"#contact"}
              duration={500} 
              className='group text-white w-fit px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-800 to-blue-800 cursor-pointer border-2 py-5'
              >
                Contact
                <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                </span>
            </HashLink>
          </div>
        </div>
      </div>
      <div className='absolute md:left-[400px] top-[-20px] inset-0 h-screen z-[0] sm:left-[100px]'>
        <AvatarCanvas />
      </div>

      <div className='absolute z-[2] xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;