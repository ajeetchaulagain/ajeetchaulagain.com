import React from "react"
import projectStyles from "./projects.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import img from "../images/ajeet.jpeg"

import {
  FaAngleRight,
} from "react-icons/fa"



const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: {fields: {contentType: {eq: "projects"}}} limit: 4){
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

  console.log("object data", data)

  return (
    
    <div className={projectStyles.projects}>
      {data.allMdx.edges.map(edge => {
        return (
          <div className={projectStyles.project}>
            <figure>
              <div className={projectStyles.projectMeta}>
                <ul>
                  <li>NodeJS</li>
                  <li>React</li>
                  <li>Gatsby</li>
                  <li>Contentful</li>
                  <li>Javascript</li>
                  <li>Babel</li>
                  <li>WebPack</li>
                </ul>
              </div>
              <img src={img} alt="profile" />
              <figcaption>
                <Link to={`/projects/${edge.node.fields.slug}`} className="box-button solid">
                  Case Study <i><FaAngleRight/></i>
                </Link>
              </figcaption>
            </figure>
            <div className={projectStyles.projectContent}>
              <h3>
                <Link to={`/projects/${edge.node.fields.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h3>
              <p className={projectStyles.smallParagraph}>
                <strong>Time to Read:</strong> {edge.node.timeToRead}min.
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Projects
