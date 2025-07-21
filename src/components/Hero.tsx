'use client'
import React from 'react'
import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp,  scaleIn, slideInLeft, slideInRight } from '@/app/utils/animations'

const Hero = () => {
    return (
        <div className='py-28 container max-w-7xl mx-auto px-4'>
            <div className="max-w-3xl mx-auto text-center">
                <motion.div {...scaleIn} transition={{delay:0.2}} className='flex flex-col items-center mb-4'>
                    <Image src="/profile.JPG" alt='profile image' width= {100} height ={100}
                    className= 'rounded-full mb-4 w-40 h-40 object-cover ring-2 ring-primary'/>
                </motion.div>

                <motion.h1 {...fadeInUp} transition={{delay:0.3}} className="text-5xl md:text-6xl font-bold mb-6">Hi there, I'm <span className='text-primary'>Jason</span></motion.h1>
                <motion.p {...fadeInUp} transition={{delay:0.4}}className='text-4xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8'>Final Year</motion.p>
                <motion.div {...slideInLeft} transition={{delay:0.7}} className="flex justify-center space-x-4 mb-8">
                    <Link href='https://github.com/jkgithub02' className='text-4xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                        <FaGithub/>
                    </Link>
                    <Link href='https://www.linkedin.com/in/jason-kong-zy/' className='text-4xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                        <FaLinkedin/>
                    </Link>
                    <Link href='/' className='text-4xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                        <FaInstagram/>
                    </Link>
                </motion.div>

                <motion.div {...slideInRight} transition={{delay:0.7}} className='flex flex-col md:flex-row justify-center gap-4'>
                    <Link href='/projects' className='bg-primary inline-block w-full text-white md:w-auto px-8 py-3 rounded-lg hover:bg-primary/90'>
                        View My Projects
                    </Link>

                    <Link href='/contact' className='bg-gray-500 inline-block w-full text-white hover:text-gray-800 md:w-auto px-8 py-3 rounded-lg
                     hover:bg-gray-300 transition-colors'>
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero