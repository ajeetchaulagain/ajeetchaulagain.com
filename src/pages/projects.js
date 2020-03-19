import React from "react"
import Projects from "../components/projects"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"
import { indexHeadingStyle, indexSubHeadingStyle } from "."

const ProjectsPage = () => {
  // console.log(data);
  return (
    <MasterLayout>
      <IntroSection>Some of mine projects</IntroSection>
      <ContentLayout>
        <h1 style={indexHeadingStyle}>Projects</h1>
        <p style={indexSubHeadingStyle}>List of all projects with case study</p>
        <Projects />
      </ContentLayout>
    </MasterLayout>
  )
}

export default ProjectsPage
