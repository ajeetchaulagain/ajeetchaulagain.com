import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"
import Blogs from "../components/blogs"

const BlogPage = () => {
  return (
    <MasterLayout>
      <IntroSection>Checkout my blog content</IntroSection>
      <ContentLayout>
        <Blogs />
      </ContentLayout>
    </MasterLayout>
  )
}

export default BlogPage
