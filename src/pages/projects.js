import React from "react"
import Projects from "../components/projects"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"

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
        <h1>List of all Projects</h1>
        <p>
          Here are the list of projects I have done. Checkout the detail about
          the project where I share my learning process to complete the project.
        </p>
        <Projects />
      </ContentLayout>
    </MasterLayout>
  )
}

export default ProjectsPage
