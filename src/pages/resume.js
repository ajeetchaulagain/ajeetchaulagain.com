import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"
import Resume from "../components/resume"

const ResumePage = () => {
  return (
    <MasterLayout>
      <IntroSection>My Resume</IntroSection>
      <ContentLayout>
        <h1>Resume</h1>
        <Resume />
      </ContentLayout>
    </MasterLayout>
  )
}

export default ResumePage
