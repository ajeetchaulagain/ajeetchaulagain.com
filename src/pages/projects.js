import React from "react"
import Projects from "../components/projects"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"
import { indexHeadingStyle, indexSubHeadingStyle } from "."

// Goal: Link to blog posts

// 1. Fetch the slug for posts
// 2. Use slug to generate a link to the post page
// 3. Test your work!

const ProjectsPage = () => {
  // console.log(data);
  return (
    <MasterLayout>
      <IntroSection>Some of the featured projects of mine</IntroSection>
      <ContentLayout>
        <h1 style={indexHeadingStyle}>Projects</h1>
        <p style={indexSubHeadingStyle}>List of all projects with case study</p>
        <Projects />
      </ContentLayout>
    </MasterLayout>
  )
}

export default ProjectsPage
