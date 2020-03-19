import React from "react"
import projectStyles from "./projects.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FaAngleRight } from "react-icons/fa"

const Projects = () => {
  
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fields: { contentType: { eq: "projects" } } }) {
        edges {
          node {
            frontmatter {
              title
              technologies
              featuredImage {
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
    <div className={projectStyles.projects}>
      {data.allMdx.edges.map(edge => {
        return (
          <div className={projectStyles.project}>
            <div className={projectStyles.projectItem}>
              <figure>
                <div className={projectStyles.projectMeta}>
                  <ul>
                    {edge.node.frontmatter.technologies.map(technology => {
                      return <li>{technology}</li>
                    })}
                  </ul>
                </div>
                <Img
                  fluid={
                    edge.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
            
                  alt="project"
                />
                <figcaption>
                  <Link
                    to={`/projects/${edge.node.fields.slug}`}
                    className="box-button solid"
                  >
                    Case Study
                    <i>
                      <FaAngleRight />
                    </i>
                  </Link>
                </figcaption>
              </figure>
              <div className={projectStyles.projectContent}>
                <Link to={`/projects/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                </Link>
                <p className={projectStyles.smallParagraph}>
                  {edge.node.timeToRead} min read
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Projects
