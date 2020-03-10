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
              <Img fixed={GatsbyImageSharpFixed} alt="blog-thumbnail" />
            </figure>

            <div className={blogStyles.content}>
              <h2>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <div className={blogStyles.metaData}>
                <date>
                  <strong>Published on: </strong>2014/12/12{" "}
                </date>
                <span>
                  <strong> | Read Time: </strong> 2min | <strong>By: </strong>{" "}
                  Ajeet Chaulagain
                </span>
                <ul>
                  <li> Nodejs</li>
                  <li>React JS</li>
                  <li>Gatsby</li>
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
