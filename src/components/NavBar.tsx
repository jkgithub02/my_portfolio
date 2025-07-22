'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/app/context/ThemeContext';
import { motion } from 'framer-motion';
import { fadeInDown, slideInRight } from '@/app/utils/animations';

const NavBar = () => {

    const { theme, toggleTheme } = useTheme();
    const [isMobileMenu, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenu)
    }

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    
    const words = [
        'Welcome',      // English
        '欢迎',         // Chinese
        'Selamat Datang', // Malay/Indonesian
        'Bienvenido',   // Spanish
        '환영합니다',    // Korean
         'ようこそ',      // Japanese
        'Bienvenue',    // French
        'Willkommen',   // German
    ];

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // typing...
                if (currentText.length < currentWord.length) {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                } else {
                    // finished typing, wait then start deleting
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                // deleting..
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    // finished deleting, move to next word
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 50 : 100); //deletes at a faster speed

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words]);

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/experience", label: "Experience" },
        { href: "/contact", label: "Contact" },
    ]
    return (
        <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
            <div className="container max-w-7xl mx-auto px-4">
                {/* Desktop Menu */}
                <motion.div {...fadeInDown} transition={{ delay: 0.3 }} className='flex items-center justify-between h-16'>
                    <Link href='/' className='text-2xl font-extrabold text-primary'>
                        {currentText}
                        <span className="animate-pulse">|</span>
                    </Link>
                    {/* options */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {
                            menuItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`hover:text-primary transition-colors 
                                font-medium ${isActive ? 'font-semibold text-primary' : ''}`}>
                                        {item.label}
                                    </Link>)
                            }
                            )
                        }
                        <button onClick={toggleTheme} className='p-2 rounded-lg hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-800 
                    transition-colors cursor-pointer'>
                            {
                                theme === "Dark" ? (
                                    <SunIcon className='w-5 h-5' />

                                ) : (
                                    <MoonIcon className='w-5 h-5' />
                                )
                            }
                        </button>
                    </div>
                    {/* Mobile Menu */}
                    <button
                        onClick={toggleMobileMenu}
                        className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 *
                    transition-colors cursor-pointer'>
                        {
                            isMobileMenu ? (
                                <XMarkIcon className='w-6 h-6' />) : (<Bars3Icon className='w-6 h-6' />
                            )
                        }
                    </button>
                </motion.div>
                {/* mobile menu items */}
                {
                    isMobileMenu && (
                        <div className='md:hidden'>
                            <motion.div {...slideInRight} transition={{ delay: 0.3 }} className='py-4 space-y-4'>
                                {menuItems.map((item, index) => (
                                    <div key={index} onClick={toggleMobileMenu}>
                                        <Link href={item.href} className='block py-2 hover:text-primary transition-colors'>
                                            {item.label}
                                        </Link>
                                    </div>
                                ))
                                }
                                <div>
                                    <button onClick={toggleTheme} className='flex items-center py-2 hover:text-primary transition-colors'>
                                        {
                                            theme === "Dark" ? (
                                                <><SunIcon className='w-5 h-5 mr-2' />Light Mode</>

                                            ) : (
                                                <><MoonIcon className='w-5 h-5 mr-2' />Dark Mode</>
                                            )
                                        }
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                    )
                }
            </div>
        </nav>
    )
}

export default NavBar