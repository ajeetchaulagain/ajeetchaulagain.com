import React from "react"
import Projects from "../components/projects"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"

const Portfolio = () => {
  return (
    <MasterLayout>
      <IntroSection>
          Some of the featured projects of mine
      </IntroSection>
      <Projects/>
    </MasterLayout>
  )
}

export default Portfolio
