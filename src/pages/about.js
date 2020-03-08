import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"
import { Link } from "gatsby"

import { MDXRenderer } from "gatsby-plugin-mdx"


const AboutPage = () => {
  return (
    <MasterLayout>

      <IntroSection>Thankyou for stepping by to know me</IntroSection>

      <ContentLayout>
        <div>
        <h1>About Me</h1>
        <p>
          Hi everyone. Welcome to my site. In this page, I wil be talking about my site and some intro of me. Hi everyone. Welcome to my site. In this page, I wil be talking about my site and some intro of me. Hi everyone.Also I would be talking about the key concepts of material design
        </p>
        
        </div>
        
      </ContentLayout>
    </MasterLayout>
  )
}

export default AboutPage
