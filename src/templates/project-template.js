// Create and export the react component

import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"

import { MDXRenderer } from "gatsby-plugin-mdx"

import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`
const ProjectTemplate = props => {
  return (
    <MasterLayout>
      <IntroSection/>
      <ContentLayout>
        <h1>{props.data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </ContentLayout>
    </MasterLayout>
  )
}

export default ProjectTemplate
