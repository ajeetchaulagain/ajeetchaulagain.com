import React from "react"

import projectStyles from "./projects.module.scss"
import Project from "./project"

const Projects = () => {
  return (
    
        <div className={projectStyles.projects}>
          <Project />
          <Project />
          <Project/>
          <Project />
          
          <a href="#" className={projectStyles.boxButton}>
            View More Projects
          </a>
        </div>

  )
}

export default Projects
