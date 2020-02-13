import React from "react"

import projectStyles from "./projects.module.scss"
import Project from "./project"

const Projects = () => {
  return (
    <section className={projectStyles.projectSection}>
      <div className={projectStyles.projectContent}>
        <h1>Some of my Projects</h1>
        <p>
          Here are some of my recent projects. I love to share all the process I
          went while doing the project
        </p>
        <div className={projectStyles.projects}>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <a href="#" className={projectStyles.boxButton}>
            View More Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
