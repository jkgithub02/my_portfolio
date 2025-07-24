'use client'
import React, { use, useEffect, useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp,  scaleIn, slideInLeft, slideInRight } from '@/app/utils/animations'
import { getImagePath } from '@/app/utils/imagePath'


const Hero = () => {

    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const word = "I\'m Jason"

    useEffect(() => {
        const timeout = setTimeout(()=>{
            if(!isDeleting){
                if(currentText.length < word.length){
                    setCurrentText(word.slice(0, currentText.length +1));

                }else{
                    setTimeout(()=> setIsDeleting(true), 1500);
                }
            }else{
                if(currentText.length >0){
                    setCurrentText(currentText.slice(0, -1));
                }else{
                    setIsDeleting(false);
                }
            }
        }, isDeleting ? 50 :100)
        return ()=> clearTimeout(timeout)
    }, [isDeleting, currentText, word])
    return (
        <div className='py-28 container max-w-7xl mx-auto px-4'>
            <div className="max-w-3xl mx-auto text-center">
                <motion.div {...scaleIn} transition={{delay:0.2}} className='flex flex-col items-center mb-4'>
                    <Image src={getImagePath('/pfp2.JPG')} alt='profile image' width= {100} height ={100}
                    className= 'rounded-full mb-4 w-40 h-40 object-cover ring-2 ring-primary'/>
                </motion.div>

                <motion.h1 {...fadeInUp} transition={{delay:0.3}} className="text-5xl md:text-6xl font-bold mb-6">Hi there, <span className='text-primary'>{currentText}</span><span className="animate-pulse">|</span></motion.h1>
                <motion.p {...fadeInUp} transition={{delay:0.4}}className='text-4xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8'>Final Year Computer Science Student with AI <br/>
                @ University of Nottingham Malaysia</motion.p>
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