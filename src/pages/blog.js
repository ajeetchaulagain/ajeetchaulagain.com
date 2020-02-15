import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import MasterLayout from "../components/master-layout"
import Projects from "../components/projects"
import IntroSection from "../components/intro-section"

const BlogPage = () => {
  return (
    <MasterLayout>
      <IntroSection>
          Checkout my blog content
      </IntroSection>
      <Projects/>
    
    </MasterLayout>
  )
}

export default BlogPage
