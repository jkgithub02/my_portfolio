'use client'
import React from 'react'
import { experiences } from '@/content/experience'
import {motion} from 'framer-motion'
import { cardHoverSmall, fadeInDown, fadeInUp } from '@/app/utils/animations'

const Experience = () => {
  return (
    <section className='py-20 container mx-auto max-w-7xl px-4'>
      <motion.h2 {...fadeInDown} transition={{delay:0.5}} className='section-title'>My Experience</motion.h2>

      <motion.div {...fadeInUp} transition={{delay: 0.8}} className='grid grid-cols-1 gap-6'>
        {/* TODO: Update Experience structure */}
        {
          experiences.map((exp) => (
            <motion.div {...cardHoverSmall} transition={{delay:0.1}}  key={exp.position} className="bg-indigo-200 dark:border-0 dark:bg-black/50 p-6 rounded-lg shadow-md">
              <article className='bg-white dark:border-0 dark:bg-black/30 rounded-lg shadow-md p-10'>
                <h2 className='text-xl font-extrabold mb-2'>
                  {exp.position} <span className='text-sm font-semibold'>| {exp.start} - {exp.end} {exp.year}</span>
                </h2>

                <h3 className='text-2xl font-semibold mb-2 text-primary'>
                  {exp.company}
                </h3>
                <ul className="text-gray-600 dark:text-gray-300 text-lg mb-4 list-disc list-inside space-y-1">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>



              </article>
            </motion.div>
          ))}


      </motion.div>
    </section>
  )
}

export default Experience 