import React from "react"
import blogStyles from "./blog.module.scss"


const Blog = () => {
  return (
    <div className={blogStyles.blogWrapper}>
      <article className={blogStyles.blogItem}>
        <figure>
          <img src= "./images/ajeet.jpg" />
        </figure>

        <div className = {blogStyles.content}>
          <h2><a>This is a Title></a></h2>
          <div className={blogStyles.metaData}>
            <date>Published on 2014/12/12</date>
            <span>Read Time: <strong>2min.</strong></span>
            <ul>
              <li> Nodejs</li>
              <li>React JS</li>
              <li>Gatsby</li>
            </ul>
          </div>

          <p> This is the excerpt of a blog post</p>
          <a>Read More Button</a>
        </div>
      </article>  
    </div>
  )
}

export default Blog
