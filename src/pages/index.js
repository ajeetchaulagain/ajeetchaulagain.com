import React from "react"
import Welcome from "../components/welcome"
import Projects from "../components/projects"
import MasterLayout from "../components/master-layout"
import ContentLayout from "../components/content-layout"

const IndexPage = () => {
  return (
    <MasterLayout>
      <Welcome />
      <ContentLayout>
        <h1>Some of my Projects</h1>
        <p>
          Some of the featured project of mine. I have wrote the article on
          architecture of the project.{" "}
        </p>
        <Projects />
      </ContentLayout>
    </MasterLayout>
  )
}

export default IndexPage
