import React from "react"
import * as projectStyles from "./projects.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  FaArrowRight,
  FaLongArrowAltRight,
  FaArrowCircleRight,
} from "react-icons/fa"
import dockerImg from "../images/thumbnails/docker.png"
import reactImg from "../images/thumbnails/react-js.png"
import nodeImg from "../images/thumbnails/node-js.png"
import expressImg from "../images/thumbnails/express-js.png"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fields: { contentType: { eq: "projects" } } }
        limit: 6
      ) {
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
          <div className={projectStyles.projectItem} >
            <div className={projectStyles.contentWrapper}>
              <h2>{edge.node.frontmatter.title}</h2>
              
              <ul className={projectStyles.toolsWrapper}>
                {edge.node.frontmatter.technologies.map(technology => {
                  return <li>{technology}</li>
                })}
              </ul>
            </div>
            {true && (
              <div className={projectStyles.linksWrapper}>
                <Link to={`/projects/${edge.node.fields.slug}`}>
                  View Case Study → {" "}
            
                </Link>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
export default Projects
