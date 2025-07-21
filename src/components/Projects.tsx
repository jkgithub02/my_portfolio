'use client'
import { projects } from '@/content/projects'
import Image from 'next/image'
import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { motion} from 'framer-motion'
import { cardHover, fadeInDown } from '@/app/utils/animations'

const Projects = () => {
    return (
        <section className='py-20 container max-w-7xl mx-auto px-4'>
            <motion.div {...fadeInDown} transition={{delay:1.0}}className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    projects.map((project) => (
                        <motion.div {...cardHover} transition={{delay:0.1}} className="bg-indigo-200 dark:bg-black/50 p-6 rounded-lg shadow-md">
                            <article key={project.title} className='bg-white dark:bg-black/30 rounded-lg shadow-md p-6'>
                                <div className='relative aspect-video mb4 rounded-lg overflow-hidden'>
                                    <Image src={project.image} alt={project.title} fill
                                        className='object-cover' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'></Image>
                                </div>

                                <h3 className='text-xl font-semibold mb-2'>
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.technologies.map((tech) => (
                                        <span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>{tech}</span>
                                    ))}
                                </div>

                                <div className='flex gap-4 mt-4 pt-2'>
                                    <Link href={project.githubLink} target='_blank' className='flex items-center gap-2 text-secondary hover:text-primary transition-colors'>
                                        <FaGithub className='w-5 h-5' /><span>Code</span>
                                    </Link>
                                </div>

                                <div className='flex gap-4 mt-4 pt-2'>
                                    <Link href={project.githubLink} target='_blank' className='flex items-center gap-2 text-secondary hover:text-primary transition-colors'>
                                        <FaExternalLinkAlt className='w-5 h-5' /><span>Live Demo</span>
                                    </Link>
                                </div>
                            </article>
                        </motion.div>
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Projects