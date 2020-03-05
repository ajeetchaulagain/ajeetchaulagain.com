// Create and export the react component

import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"

import blogTemplateStyles from "./blog-template.module.scss"

import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
// import featured from "../images/ajeet.jpeg"

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDocker } from "react-icons/fa"

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
  const blogTitle = {
    fontSize: "2.2rem",
    fontWeight: "700",
    fontFamily: "Roboto",
    lineHeight: "1.2",
  }
  return (
    <MasterLayout>
      <IntroSection>
        <b>Blog Article</b>
      </IntroSection>
      <ContentLayout>
        <header className={blogTemplateStyles.postHeader}>
          <div className={blogTemplateStyles.headerContent}>
            <h1 style={blogTitle}>{props.data.mdx.frontmatter.title}</h1>
            <div className={blogTemplateStyles.postMeta}>
              <span>
                Published on: <time>{props.data.mdx.frontmatter.date}</time> /
                By: Ajeet Chaulagain
              </span>
              <ul className={blogTemplateStyles.tagList}>
                {props.data.mdx.frontmatter.tags.map(tag => {
                  return <li>{tag}</li>
                })}
              </ul>
            </div>
          </div>
          <div className={blogTemplateStyles.featuredIcons}>
            <FaDocker />
          </div>
        </header>

        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </ContentLayout>
    </MasterLayout>
  )
}

export default BlogTemplate
