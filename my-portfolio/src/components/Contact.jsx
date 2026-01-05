import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form'

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { contact } from '../assets';



const Contact = () => {
  const [loading, setLoading] = useState("")
  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <div className='lg:flex-row flex-col-reverse flex justify-between gap-0 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className=' bg-black-100 p-8 rounded-2xl mx-auto w-[100%]' 
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form 
          onSubmit={onSubmit}
          action='https://formsubmit.co/1e71deedbcbb120dc908c8f9eeef861b'
          method="POST"
          className='mt-12 flex flex-col gap-8'
        >
          {/* NAME */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name: </span>
            <input 
              type="text" 
              placeholder='Enter your full name'
              {
                ...register("name", {
                  required: true,
                  maxLength: 100,
                })
              }
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {
            errors.name && (
              <p className='text-[red]'>
                {errors.name.type === 'required' && "This field is required."}
                {errors.name.type === 'maxLength' && "Max length is 100 characters."}
              </p>
            )
          }

          {/* EMAIL */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type="email" 
              placeholder='Enter your email'
              {
                ...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })
              }
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {
            errors.email && (
              <p className=' text-[red]'>
                {errors.email.type === 'required' && "This field is required."}
                {errors.email.type === 'pattern' && "Invalid email address."}
              </p>
            )
          }
          {/* MESSAGE */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows="7"
              type="text" 
              placeholder='Enter your message'
              {
                ...register("message", {
                  required: true,
                  maxLength: 2000,
                })
              }
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {
            errors.message && (
              <p className='text-[red]'>
                {errors.message.type === 'required' && "This field is required."}
                {errors.message.type === 'maxLength' && "Max length is 2000 characters."}
              </p>
            )
          }
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white shadow-md shadow-primary rounded-xl'
          >
            { loading ? 'Sending...' : "Send"}
          </button>
        </form>
      </motion.div> 
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className={` lg:inline-block relative top-[200px] hidden`}
      >
        
        <img src={contact} alt="portfolio" />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");