import Link from 'next/link'
import React from 'react'
import { FaGithub , FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-white dark:bg-black/30 border-t border-gray-300 dark:border-black/10'>
            <div className="container max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href='/' className='text-xl font-bold text-primary'>Jason Kong</Link>
                        <p className='text-sm text-secondary mt-2'>{new Date().getFullYear()}</p>
                    </div>

                    <div className="flex space-x-4">
                        <Link href='https://github.com/jkgithub02' className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                            <FaGithub />
                        </Link>
                        <Link href='https://www.linkedin.com/in/jason-kong-zy/' className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                            <FaLinkedin />
                        </Link>
                        <Link href='/' className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer