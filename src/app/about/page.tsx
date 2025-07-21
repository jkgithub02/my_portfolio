import React from 'react'
import { FaCode, FaSchool } from 'react-icons/fa'
const AboutPage = () => {
  return (
    <div className='container max-w-7xl mx-auto py-12'>
      <h1 className='text-4xl font-bold text-center'>About Me</h1>

      {/* Bio Section */}
      <section className='mb-10'>
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>Some things about me</p>
      </section>

      {/* Skills Section */}
      <section className='mb-10'>
        <h2 className='section-title'>Skills</h2>
        <div className="bg-indigo-200 dark:bg-black/50 p-6 rounded-lg shadow-md">
          <div className='bg-white  dark:bg-black/50 p-6 rounded-lg shadow-md'>
            <FaCode className='h-8 w-8 text-primary mb-4' />
            <h3>TODO: ADD IMAGES AND TECH STACK BADGES</h3>
          </div>
        </div>

      </section>

      {/* Education Section */}
      <section className='mb-10'>
        <h2 className='section-title'>Education</h2>
        <div className="bg-indigo-200 dark:border-0 dark:bg-black/50 p-6 rounded-lg shadow-md">
          <div className='bg-white  dark:bg-black/50 p-6 rounded-lg shadow-md'>
            <FaSchool className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>BSC. (Hons) Computer Science with Artificial Intelligence</h3>
            <p className="text-primary mb-2">University of Nottingham Malaysia | 2023 - Present</p>
            <p className="text-secondary">Weighted CGPA blablabla</p>
          </div>
        </div>

      </section>
    </div>



  )
}

export default AboutPage