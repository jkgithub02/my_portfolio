'use client'
import Projects from "@/components/Projects"
import React from "react"
import {motion} from 'framer-motion'
import { slideInLeft, slideInRight } from "../utils/animations"

const ProjectsPage = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <motion.h2 {...slideInLeft} transition={{delay:0.3}} className="text-4xl font-bold mb-2 text-center">
        My Projects
      </motion.h2>
      <motion.p {...slideInRight} transition={{delay:0.3}} className="text-lg text-secondary text-center">
        Here are some of my recent projects, feel free to take a look!
      </motion.p>
      <Projects />
    </div>

  )
}

export default ProjectsPage