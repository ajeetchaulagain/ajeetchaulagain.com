// Create and export the react component

import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"

import { MDXRenderer } from "gatsby-plugin-mdx"

import projectStyles from "./project-template.module.scss"

import { graphql } from "gatsby"
const ExternalLink = props => {
  if (props.href.includes("yourwebsite.com") || props.href[0] === "/") {
    return <a href={props.href}>{props.children}</a>
  }
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}

const components = {
  a: ExternalLink,
}

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
      <IntroSection />
      <ContentLayout>
        <h1>{props.data.mdx.frontmatter.title}</h1>
        <div className={projectStyles.projectMdxWrapper}>
          <MDXRenderer components={components}>
            {props.data.mdx.body}
          </MDXRenderer>
        </div>
      </ContentLayout>
    </MasterLayout>
  )
}

export default ProjectTemplate
