import React from "react"
import Welcome from "../components/welcome"
import Projects from "../components/projects"
import Blog from "../components/blog"
import MasterLayout from "../components/master-layout"
import ContentLayout from "../components/content-layout"
import { Link } from "gatsby"

const IndexPage = ({ location }) => {
  const headingStyle = {
    marginBottom: "0rem",
  }

  const subHeadingStyle = {
    marginBottom: "3rem",
    lineHeight: "1",
    // fontFamily:"Lora",
    // fontStyle:"italic",
  }

  // const wordCap = {
  //   fontSize: "5rem",
  // }

  return (
    <MasterLayout>
      <Welcome />
      <ContentLayout>
        <h1 style={headingStyle}>Projects</h1>
        <p style={subHeadingStyle}>Projects with case study</p>
        <Projects />
        <Link to="/projects" className="box-button">
          View All Projects
        </Link>
      </ContentLayout>

      <ContentLayout>
        <h1 style={headingStyle}>From my blog</h1>
        <p style={subHeadingStyle}>See the recent on my article list</p>
        <Blog />
        <Link to="/blog" className="box-button">
          View all Articles
        </Link>
      </ContentLayout>
    </MasterLayout>
  )
}

export default IndexPage
