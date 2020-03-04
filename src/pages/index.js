import React from "react"
import Welcome from "../components/welcome"
import Projects from "../components/projects"
import Blog from "../components/blog"
import MasterLayout from "../components/master-layout"
import ContentLayout from "../components/content-layout"
import { Link } from "gatsby"

const IndexPage = ({ location }) => {
  return (
    <MasterLayout>
      <Welcome />
      <ContentLayout>
        <h1>Open Source and Private Projects</h1>
        <p>
          Some of the featured project of mine. I have wrote the article on
          architecture of the project.
        </p>
        <Projects />
        <Link to="/projects" className="box-button">
          View More Projects
        </Link>
      </ContentLayout>

      <ContentLayout>
        <h1>From my blog</h1>
        <p>
          Some of the featured project of mine. I have wrote the article on
          architecture of the project.
        </p>
        <Blog />
        <Link to="/blog" className="box-button">
          View all Articles
        </Link>
      </ContentLayout>
    </MasterLayout>
  )
}

export default IndexPage
