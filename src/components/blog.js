import React from "react"
import blogStyles from "./blogs.module.scss"

const Blog = () => {
  return (
    <div className={blogStyles.blog}>
      <a href="#">How to Setup a CI/CD pipeline for MERN stack development</a>
      <p>
        In this article, I will explain how to setup a MERN stack development
        with the CI/CD pipeline
      </p>
    </div>
  )
}

export default Blog
