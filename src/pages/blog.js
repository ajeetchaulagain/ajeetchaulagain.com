import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"
import Blog from "../components/blog"

const BlogPage = () => {
  return (
    <MasterLayout>
      <IntroSection>Checkout my blog content</IntroSection>
      <ContentLayout>
        <Blog />
      </ContentLayout>
    </MasterLayout>
  )
}

export default BlogPage
