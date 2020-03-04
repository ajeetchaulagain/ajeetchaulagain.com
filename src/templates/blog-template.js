// Create and export the react component

import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"

import blogTemplateStyles from "./blog-template.module.scss"


import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        date
      }
      body
    }
  }
`
const BlogTemplate = props => {
  return (
    <MasterLayout>
      <IntroSection>
        <b>Blog Article</b>
      </IntroSection>
      <ContentLayout>
        <h1>{props.data.mdx.frontmatter.title}</h1>
        <div className={blogTemplateStyles.postMeta}>
        <time>{props.data.mdx.frontmatter.date}</time>
        <ul className={blogTemplateStyles.tagList}>
          {props.data.mdx.frontmatter.tags.map(tag => {
            return <li>{tag}</li>
          })}
        </ul>
        </div>

        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </ContentLayout>
    </MasterLayout>
  )
}

export default BlogTemplate
