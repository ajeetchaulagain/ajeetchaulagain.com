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
const Blog = props => {
  return (
    <MasterLayout>
      <IntroSection>
        <b>Get Insight of a project</b>
      </IntroSection>
      <ContentLayout>
        <h1>{props.data.mdx.frontmatter.title}</h1>
        
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        

      </ContentLayout>
    </MasterLayout>
  )
}

export default BlogPage
