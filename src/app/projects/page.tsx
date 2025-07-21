import Projects from "@/components/Projects"
import React from "react"

const ProjectsPage = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h2 className="text-4xl font-bold mb-2 text-center">
        My Projects
      </h2>
      <p className="text-lg text-secondary text-center">
        Here are some of my recent projects, feel free to take a look!
      </p>
      <Projects />
    </div>

  )
}

export default ProjectsPage