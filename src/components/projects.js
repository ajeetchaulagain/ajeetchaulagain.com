import React from "react"
import projectStyles from "./projects.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"

const Projects = () => {
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

  console.log("object data", data)

  return (
    <div className={projectStyles.projects}>
      {data.allMdx.edges.map(edge => {
        return (
          <div className={projectStyles.project}>
            <Link to={`/projects/${edge.node.fields.slug}`}>
              <a>{edge.node.frontmatter.title}</a>
            </Link>
            <p>{edge.node.excerpt}</p>
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
            <br />
            <p className={projectStyles.smallParagraph}>
              <strong>Time to Read: </strong> {edge.node.timeToRead}min.
            </p>
          </div>
        )
      })}
    </div>
  )
}
export default Projects
