import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"
import About from "../components/about"

import { Link, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

const AboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        file(relativePath: { eq: "images/about-ajeet.jpg" }) {
          childImageSharp {
            fixed(webpQuality: 100, toFormat: WEBP, width: 200) {
              ...GatsbyImageSharpFixed
            }
            id
          }
        }
      }
    `
  )

  return (
    <MasterLayout>
      <IntroSection>Thankyou for stepping by to know me</IntroSection>

      <ContentLayout>
        <About />
      </ContentLayout>
    </MasterLayout>
  )
}

export default AboutPage
