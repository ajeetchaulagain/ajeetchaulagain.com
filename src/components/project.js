import React from "react"
import projectStyles from "./projects.module.scss"

const Project = () => {
  return (
    <div className={projectStyles.project}>
      <a href="">XML Keyword Search System</a>
      <p>
        Simple Java based xml keyword system that utilizes technologies sucha as
        Java XML, Java FX and more.
      </p>
      <div className={projectStyles.projectMeta}>
        <ul>
          <li>Technologies</li>
          <li>NodeJS</li>
          <li>React</li>
          <li>Gatsby</li>
          <li>Contentful</li>
          <li>Javascript</li>
          <li>Babel</li>∂<li>WebPack</li>
        </ul>
      </div>
    </div>
  )
}

export default Project
