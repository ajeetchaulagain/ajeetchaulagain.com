// Create and export the react component

import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"
import blogTemplateStyles from "./blog-template.module.scss"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  FaDocker,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa"
import { DiscussionEmbed } from "disqus-react"

import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        author
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

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: "props.data.mdx.frontmatter.title" },
  }

  return (
    <MasterLayout>
      <IntroSection>
        <b>Blog Article</b>
      </IntroSection>
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
              <FaDocker />
            </div>
          </header>

          <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        </div>
        <ul className={blogTemplateStyles.socialShare}>
          <li>Share On: &nbsp;</li>
          <li>
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitterSquare />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebookSquare />
            </a>
          </li>
        </ul>
      </ContentLayout>
    </MasterLayout>
  )
}

export default BlogTemplate
