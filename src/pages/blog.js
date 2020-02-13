import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import PlainWelcome from "../components/plainWelcome"
import Projects from "../components/projects"

const BlogPage = () => {
  return (
    <Layout>
      <PlainWelcome>
          Blog Page
      </PlainWelcome>
      <Projects/>
    
    </Layout>
  )
}

export default BlogPage
