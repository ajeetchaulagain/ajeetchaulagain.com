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
      
              <div className={projectStyles.projectItem}>
                  <div className={projectStyles.contentWrapper}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>Here goes the project excerpt,Here goes the project excerpt</p>
                  </div>
                  <ul className = {projectStyles.toolsWrapper}>
                     
                    <li>React.js</li>
                    <li>Nodejs</li>
                    <li>Gatsbyjs</li>
                  </ul>
            
                <Link to={`/projects/${edge.node.fields.slug}`}>
                  View Case Study
                </Link>
              </div>
    
        )
      })}
    </div>
  )
}
export default Projects
