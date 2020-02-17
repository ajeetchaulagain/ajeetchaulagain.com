// Create and export the react component

import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"

import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
const Project = props => {
  return (
    <MasterLayout>
      <IntroSection>
        <b>Get Insight of a project</b>
      </IntroSection>
      <ContentLayout>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </ContentLayout>
    </MasterLayout>
  )
}

export default Project
