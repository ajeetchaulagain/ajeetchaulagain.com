// Create and export the react component

import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"

import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                presentationWidth
                presentationHeight
            }
          }
        }
      }
      body
    }
  }
`
const BlogTemplate = props => {

  
 

  return (
    <MasterLayout>
      <IntroSection>
        <b>Get Insight of a project {props.pageContext.slug}</b>
      </IntroSection>
      <ContentLayout>
        <h1>{props.data.mdx.frontmatter.title}</h1>
         
      
        
        <MDXRenderer>
        
        {props.data.mdx.body}</MDXRenderer>
      </ContentLayout>
    </MasterLayout>
  )
}

export default BlogTemplate
