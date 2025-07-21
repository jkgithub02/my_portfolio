'use client'
import Experience from '@/components/Experience'
import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition } from '../utils/animations'

const ExperiencePage = () => {
  return (
   <motion.div {...pageTransition}>
    <Experience/>
   </motion.div>
    
  )
}

export default ExperiencePage