import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { contact } from '../assets';

// TMQ1IBMyyD-_bVfM3
// template_1vm6yfr
// service_pnvfs2v

const Contact = () => {
  const formRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs.send(
      'service_pnvfs2v', 
      'template_1vm6yfr',
      {
        from_name: name,
        to_name: 'Cameron',
        from_email: email,
        to_email: 'cameronbowen555@gmail.com',
        message: message,
      },
      'TMQ1IBMyyD-_bVfM3'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        setName("")
        setEmail("")
        setMessage("")
      }, (error) => {
        setLoading(false);
        console(error);
        alert('Something went wrong.')
      })
  };

  return (
    <div className='lg:flex-row flex-col-reverse flex justify-between gap-0 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className=' bg-black-100 p-8 rounded-2xl mx-auto w-[100%]' 
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/* NAME */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text" 
              name='name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
              minLength={3}
            />
          </label>

          {/* EMAIL */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type="email" 
              name='email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
              pattern='/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/'
            />
          </label>

          {/* MESSAGE */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows="7"
              type="text" 
              name='message' 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="What's your message?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
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
        className='lg:relative lg:top-[200px] '
      >
        
        <img src={contact} alt="portfolio" />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");