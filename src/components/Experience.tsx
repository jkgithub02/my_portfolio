import React from 'react'
import { experiences } from '@/content/experience'

const Experience = () => {
  return (
    <section className='py-20 container mx-auto max-w-7xl px-4'>
      <h2 className='section-title'>My Experience</h2>

      <div className='grid grid-cols-1'>
        {/* TODO: Update Experience structure */}
        {
          experiences.map((exp) => (
            <article key={exp.position} className='bg-white dark:bg-black/30 rounded-lg shadow-md p-10 mb-5'>
              <h2 className='text-xl font-extrabold mb-2'>
                {exp.position} <span className='text-sm font-semibold'>{exp.start} - {exp.end} {exp.year}</span>
              </h2>

              <h3 className='text-2xl font-semibold mb-2'>
                {exp.company}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 text-lg mb-4 list-disc list-inside space-y-1">
                {exp.description.map((item, index) =>(
                  <li key={index}>{item}</li>
                ))}
              </ul>

              

            </article>
          ))}


      </div>
    </section>
  )
}

export default Experience 