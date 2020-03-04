// Create and export the react component

import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"

import { MDXRenderer } from "gatsby-plugin-mdx"

import { graphql } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`
const ProjectTemplate = props => {

  let featuredImgFluid = props.data.mdx.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <MasterLayout>
      <IntroSection>Project Case Study</IntroSection>
      <ContentLayout>
        <h1>{props.data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </ContentLayout>
    </MasterLayout>
  )
}

export default ProjectTemplate
