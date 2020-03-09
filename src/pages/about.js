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
          <h1>About Me</h1>
           <p>
           <em>
           Hello. I'm Ajeet Chaulagain, a full stack developer currently living in Melbourne, Australia and 
           originally from Kathmandu, Nepal. I have got a passion for programming and
            developing software products that will have great value to the end-user.
          </em>
          </p> 
      </ContentLayout>
    </MasterLayout>
  )
}

export default AboutPage
