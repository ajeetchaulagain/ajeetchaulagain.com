import React from "react"

import blogStyles from "./blogs.module.scss"
import Blog from "./blog"

const Blogs = () => {
  return (
    <section className={blogStyles.blogSection}>
      <div className={blogStyles.blogContent}>
        <h1> From my blog</h1>
        <p>
          Here are some of my recent projects. I love to share all the process I
          went while doing the project
        </p>
        <div class={blogStyles.blogs}>
          <Blog />
          <Blog />
          <Blog />
        </div>
        <a href="#" className={blogStyles.boxButton}>
          View More Projects
        </a>
      </div>
    </section>
  )
}

export default Blogs
