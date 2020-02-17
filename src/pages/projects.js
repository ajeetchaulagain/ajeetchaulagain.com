import React from "react"
import Projects from "../components/projects"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"

import { Link, graphql, useStaticQuery } from "gatsby"

// Goal: Link to blog posts

// 1. Fetch the slug for posts
// 2. Use slug to generate a link to the post page
// 3. Test your work!



const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields{
                slug
            }
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
        <h1>List of all Projects</h1>
        
        <ol>
        {data.allMarkdownRemark.edges.map((edge)=>{
              return(
                <Link to ={`/projects/${edge.node.fields.slug}`}>
                  <li key={edge.node.frontmatter.title}>
                    <h2>{edge.node.frontmatter.title}</h2>
                  </li>
                </Link>
              )
        })}
        </ol>
        <Projects />
      </ContentLayout>
    </MasterLayout>
  )
}

export default Portfolio
