import React from "react"
import blogStyles from "./blog.module.scss"


const Blog = () => {

  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
            }
            excerpt
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div className={blogStyles.blogWrapper}>
      <article className={blogStyles.blogItem}>
        <figure>
          <img src= "./images/ajeet.jpg" />
        </figure>

        <div className = {blogStyles.content}>
          <h2><a href="#">This is a Title</a></h2>
          <div className={blogStyles.metaData}>
            <date>Published on 2014/12/12</date>
            <span>Read Time: <strong>2min.</strong></span>
            <ul>
              <li> Nodejs</li>
              <li>React JS</li>
              <li>Gatsby</li>
            </ul>
          </div>
          <p> This is the excerpt of a blog post Laborum sit elit exercitation reprehenderit aute sint cillum labore nostrud. Officia qui incididunt elit irure enim sunt ex qui sunt. Ad excepteur irure adipisicing exercitation ex. Anim cupidatat esse aute laboris est. Reprehenderit mollit laborum cillum irure laborum ad excepteur minim. Ullamco exercitation ea nisi velit pariatur laborum nulla fugiat. </p>
          <a href="#">Read More</a>
        </div>
      </article>  
      <article className={blogStyles.blogItem}>
        <figure>
          <img src= "./images/ajeet.jpg" />
        </figure>

        <div className = {blogStyles.content}>
          <h2><a href="#">This is a Title</a></h2>
          <div className={blogStyles.metaData}>
            <date>Published on 2014/12/12</date>
            <span>Read Time: <strong>2min.</strong></span>
            <ul>
              <li> Nodejs</li>
              <li>React JS</li>
              <li>Gatsby</li>
            </ul>
          </div>
          <p> This is the excerpt of a blog post Laborum sit elit exercitation reprehenderit aute sint cillum labore nostrud. Officia qui incididunt elit irure enim sunt ex qui sunt. Ad excepteur irure adipisicing exercitation ex. Anim cupidatat esse aute laboris est. Reprehenderit mollit laborum cillum irure laborum ad excepteur minim. Ullamco exercitation ea nisi velit pariatur laborum nulla fugiat. </p>
          <a href="#">Read More</a>
        </div>
      </article>  
      <article className={blogStyles.blogItem}>
        <figure>
          <img src= "./images/ajeet.jpg" />
        </figure>

        <div className = {blogStyles.content}>
          <h2><a href="#">This is a Title</a></h2>
          <div className={blogStyles.metaData}>
            <date>Published on 2014/12/12</date>
            <span>Read Time: <strong>2min.</strong></span>
            <ul>
              <li> Nodejs</li>
              <li>React JS</li>
              <li>Gatsby</li>
            </ul>
          </div>
          <p> This is the excerpt of a blog post Laborum sit elit exercitation reprehenderit aute sint cillum labore nostrud. Officia qui incididunt elit irure enim sunt ex qui sunt. Ad excepteur irure adipisicing exercitation ex. Anim cupidatat esse aute laboris est. Reprehenderit mollit laborum cillum irure laborum ad excepteur minim. Ullamco exercitation ea nisi velit pariatur laborum nulla fugiat. </p>
          <a href="#">Read More</a>
        </div>
      </article>  
    </div>
  )
}

export default Blog
