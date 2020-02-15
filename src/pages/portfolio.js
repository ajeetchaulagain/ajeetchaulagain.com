import React from "react"
import Projects from "../components/projects"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"

import { Link, graphql, useStaticQuery } from "gatsby"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            excerpt
            html
          }
        }
      }
    }
  `)

  console.log(data);



  return (
    <MasterLayout>
      <IntroSection>Some of the featured projects of mine</IntroSection>
      <ContentLayout>
        <h1>Projects: List of all Projects</h1>
        <ol>
        {data.allMarkdownRemark.edges.map((edge)=>{
              return(
                <li>
                  <h1>{edge.node.frontmatter.title}</h1>
                </li>
              )
        })}
        </ol>

        <Projects />
      </ContentLayout>
    </MasterLayout>
  )
}

export default Portfolio
