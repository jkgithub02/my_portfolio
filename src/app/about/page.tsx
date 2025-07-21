'use client'
import React from 'react'
import { FaCode, FaSchool } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { cardHover, fadeIn, fadeInDown, fadeInUp, pageTransition } from '../utils/animations'

const AboutPage = () => {
  return (
    <motion.div {...pageTransition} className='container max-w-7xl mx-auto py-12'>
      <motion.h1 {...fadeInDown} transition={{ delay: 0.5 }} className='text-4xl font-bold text-center'>About Me</motion.h1>

      {/* Bio Section */}
      <section className='mb-10'>
        <motion.p {...fadeInUp} transition={{ delay: 0.7 }} className='text-lg text-secondary max-w-3xl mx-auto text-center'>Some things about me</motion.p>
      </section>

      {/* Skills Section */}
      <section className='mb-10'>
        <motion.h2 {...fadeIn} transition={{ delay: 0.9 }} className='section-title'>Skills</motion.h2>
        <motion.div {...fadeIn} transition={{ delay: 1.0 }}>
          <motion.div {...cardHover} transition={{ delay: 0.1 }} className="bg-indigo-200 dark:bg-black/50 p-6 rounded-lg shadow-md">
            <div className='bg-white  dark:bg-black/50 p-6 rounded-lg shadow-md'>
              <FaCode className='h-8 w-8 text-primary mb-4' />
              <h3>TODO: ADD IMAGES AND TECH STACK BADGES</h3>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className='mb-10'>
        <motion.h2 {...fadeIn} transition={{ delay: 0.9 }} className='section-title'>Education</motion.h2>
        <motion.div {...fadeIn} transition={{ delay: 1.0 }}>
          <motion.div {...cardHover} transition={{ delay: 0.1 }} className="bg-indigo-200 dark:border-0 dark:bg-black/50 p-6 rounded-lg shadow-md">
            <div className='bg-white  dark:bg-black/50 p-6 rounded-lg shadow-md'>
              <FaSchool className='h-8 w-8 text-primary mb-4' />
              <h3 className='text-xl font-semibold mb-2'>BSC. (Hons) Computer Science with Artificial Intelligence</h3>
              <p className="text-primary mb-2">University of Nottingham Malaysia | 2023 - Present</p>
              <p className="text-secondary">Weighted CGPA blablabla</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>



  )
}

export default AboutPage