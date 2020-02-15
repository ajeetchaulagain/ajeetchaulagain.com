import React from "react"
import Welcome from "../components/welcome"
import Projects from "../components/projects"
import Blogs from "../components/blogs"
import MasterLayout from "../components/master-layout"


const IndexPage = () => {
  return (
    <MasterLayout>
      <Welcome/>
      <Projects />
      <Blogs />
    </MasterLayout>
  )
}

export default IndexPage
