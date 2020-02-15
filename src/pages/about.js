import React from "react"
import MasterLayout from "../components/master-layout"
import Projects from "../components/projects"
import IntroSection from "../components/intro-section"


const AboutPage = () => {
  return (
    <MasterLayout>
      <IntroSection>
          Get to know more about me
      </IntroSection>
      <Projects/>
      
    </MasterLayout>
  )
}

export default AboutPage
