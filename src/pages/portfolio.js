import React from "react"
import Projects from "../components/projects"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"



const Portfolio = () => {
  return (
    <MasterLayout>
      <IntroSection>
          Some of the featured projects of mine
      </IntroSection>

      <ContentLayout>
        <h1>Projects: List of all Projects</h1>
        <Projects/>        
      </ContentLayout>
    </MasterLayout>
  )
}

export default Portfolio
