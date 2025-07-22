'use client'
import React from 'react'
import { FaCode, FaSchool } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { cardHover, fadeIn, fadeInDown, fadeInUp, pageTransition } from '../utils/animations'

const AboutPage = () => {
    const techStack = [
    { name: 'Java', color: 'bg-red-500', textColor: 'text-white' },
    { name: 'TypeScript', color: 'bg-blue-600', textColor: 'text-white' },
    { name: 'JavaScript', color: 'bg-yellow-400', textColor: 'text-black' },
    { name: 'Python', color: 'bg-green-500', textColor: 'text-white' },
    { name: 'React', color: 'bg-cyan-400', textColor: 'text-white' },
    { name: 'Next.js', color: 'bg-black', textColor: 'text-white' },
    { name: 'Tailwind CSS', color: 'bg-teal-500', textColor: 'text-white' },
    { name: 'C', color: 'bg-blue-700', textColor: 'text-white' },
    { name: 'C++', color: 'bg-blue-800', textColor: 'text-white' },
    { name: 'HTML', color: 'bg-orange-500', textColor: 'text-white' },
    { name: 'CSS', color: 'bg-blue-500', textColor: 'text-white' },
    { name: 'PHP', color: 'bg-purple-600', textColor: 'text-white' },
    { name: 'FastAPI', color: 'bg-green-600', textColor: 'text-white' },
    { name: 'SQL', color: 'bg-blue-900', textColor: 'text-white' },
    { name: 'Lean', color: 'bg-gray-700', textColor: 'text-white' },
  ]
  return (
    <motion.div {...pageTransition} className='container max-w-7xl mx-auto py-12'>
      <motion.h1 {...fadeInDown} transition={{ delay: 0.5 }} className='text-4xl font-bold text-center'>About Me</motion.h1>

      {/* Bio Section */}
      <section className='mb-10'>
        <motion.p {...fadeInUp} transition={{ delay: 0.7 }} className='text-lg text-secondary max-w-3xl mx-auto text-center'>I am currently in my final year studying computer science. My interests lie in machine learning, data analytics and AI. I love experimenting with how AI can be used to innovate or provide solutions to real life problems.</motion.p>
      </section>

      {/* Skills Section */}
      <section className='mb-10'>
        <motion.h2 {...fadeIn} transition={{ delay: 0.9 }} className='section-title'>Skills</motion.h2>
        <motion.div {...fadeIn} transition={{ delay: 1.0 }}>
          <motion.div {...cardHover} transition={{ delay: 0.1 }} className="bg-indigo-200 dark:bg-black/50 p-6 rounded-lg shadow-md">
            <div className='bg-white  dark:bg-black/50 p-6 rounded-lg shadow-md'>
              <FaCode className='h-8 w-8 text-primary mb-4' />
              <h3 className='text-xl font-semibold mb-4'>Technologies & Languages</h3>
              <div className='flex flex-wrap gap-2'>
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className={`${tech.color} ${tech.textColor} px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
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
              <p className="text-secondary">Weighted Average Marks: 80.8% (First Class)</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>



  )
}

export default AboutPage