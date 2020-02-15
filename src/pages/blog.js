import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"

const BlogPage = () => {
  return (
    <MasterLayout>
      <IntroSection>
          Checkout my blog content
      </IntroSection>
      <ContentLayout>
          <h1>Blog Page is under construction. Sorry for the inconvenience. Thanks</h1>
      </ContentLayout>
    
    </MasterLayout>
  )
}

export default BlogPage
