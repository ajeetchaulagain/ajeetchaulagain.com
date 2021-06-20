import React from "react"
import * as blogStyles from "./blog.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fields: { contentType: { eq: "posts" } } }, limit: 6) {
        edges {
          node {
            frontmatter {
              title
              tags
              date(formatString: "MMMM DD, YYYY")
              author
              thumbnail {
                childImageSharp {
                  fluid(quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
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
          <Link to={`/blog/${edge.node.fields.slug}`}>
            <article className={blogStyles.blogItem}>
              <figure>
                <Img
                  fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid}
                  alt="blog-thumbnail"
                  className={blogStyles.image}
                />
              </figure>

              <div className={blogStyles.content}>
                <h2>{edge.node.frontmatter.title}</h2>
                <div className={blogStyles.metaData}>
                  <span><date>{edge.node.frontmatter.date}</date>&nbsp;/&nbsp;{edge.node.timeToRead} min read</span>
                  <ul>
                    {edge.node.frontmatter.tags.map(tag => {
                      return <li>{tag}</li>
                    })}
                  </ul>
                </div>
              </div>
            </article>
          </Link>
        )
      })}
    </div>
  )
}

export default Blog
