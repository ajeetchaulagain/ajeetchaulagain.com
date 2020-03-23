// Create and export the react component

import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"
import blogTemplateStyles from "./blog-template.module.scss"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa"

import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        author
        thumbnail {
          childImageSharp{
            fluid (quality: 30){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      timeToRead
      body
    }
  }
`

const BlogTemplate = props => {
  const blogTitle = {
    lineHeight: "1.2",
  }



  return (
    <MasterLayout>
      <IntroSection/>
      <ContentLayout>
        <div className={blogTemplateStyles.postWrapper}>
          <header className={blogTemplateStyles.postHeader}>
            <div className={blogTemplateStyles.headerContent}>
              <h1 style={blogTitle}>{props.data.mdx.frontmatter.title}</h1>
              <div className={blogTemplateStyles.postMeta}>
                <span>
                  <time>{props.data.mdx.frontmatter.date}</time>
                  &nbsp; / &nbsp;
                  {props.data.mdx.timeToRead} min read &nbsp;/&nbsp; By{" "}
                  {props.data.mdx.frontmatter.author}
                </span>
                <ul className={blogTemplateStyles.tagList}>
                  {props.data.mdx.frontmatter.tags.map(tag => {
                    return <li>{tag}</li>
                  })}
                </ul>
              </div>
            </div>
            <div className={blogTemplateStyles.featuredIcons}>
              <Img
                fluid={props.data.mdx.frontmatter.thumbnail.childImageSharp.fluid}
                alt="blog-thumbnail"
              />
              </div>
          </header>
          <div className={blogTemplateStyles.mdxWrapper}>
            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
          </div>
        </div>
        
      </ContentLayout>
    </MasterLayout>
  )
}

export default BlogTemplate
