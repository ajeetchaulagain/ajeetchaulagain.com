import React from "react"
import blogStyles from "./blog.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

import { useAuthorImage } from "./utilities/use-author-image"

const Blog = () => {
  const { ...GatsbyImageSharpFixed } = useAuthorImage()

  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fields: { contentType: { eq: "posts" } } }) {
        edges {
          node {
            frontmatter {
              title
              tags
              date (formatString: "MMMM DD, YYYY")
              author
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
      {data.allMdx.edges.map(edge => {
        return (

          <article className={blogStyles.blogItem}>
            <figure>
              <Img
                fixed={GatsbyImageSharpFixed}
                alt="blog-thumbnail"
                className={blogStyles.image}
              />
            </figure>

            <div className={blogStyles.content}>
              <h2>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <div className={blogStyles.metaData}>
                <date>
                  <strong>Published on: </strong>{edge.node.frontmatter.date}
                </date>
                <span>
                  <strong> &nbsp; / &nbsp; {edge.node.timeToRead} min read </strong> <strong> &nbsp; / &nbsp; By: {edge.node.frontmatter.author}</strong>
                </span>
                <ul>
                  {edge.node.frontmatter.tags.map(tag => {
                    return <li>{tag}</li>
                  })}
                
                </ul>
              </div>
            </div>
          </article>
        )
      })}
    </div>
    
  )
}

export default Blog
