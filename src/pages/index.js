import React from "react"
import Welcome from "../components/welcome"
import Projects from "../components/projects"
import Blog from "../components/blog"
import MasterLayout from "../components/master-layout"
import ContentLayout from "../components/content-layout"
import { Link } from "gatsby"
import { FaBook } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"

import Newsletter from "../components/newsletter"

export const indexHeadingStyle = {
  marginBottom: ".3rem",
  fontWeight: "900",
  // color: "rgba(92, 37, 127, 1)",
}

export const indexSubHeadingStyle = {
  marginBottom: "1.5rem",
  lineHeight: "1.5",
}

export const contentBoxButton = {
  textDecoration: "none",
  color: "#fff",
  fontWeight: "400",
  textTransform: "uppercase",
  fontSize: "1rem",
}

export const subscribeSectionStyle = {
  textAlign: "center",
  backgroundColor: "grey",
}

const IndexPage = () => {
  return (
    <MasterLayout>
      <Welcome />
      <ContentLayout>
        <h1 style={indexHeadingStyle}>
          {" "}
          <FaBook /> From my blog{" "}
        </h1>
        <p style={indexSubHeadingStyle}>See the recent on my article list</p>
        <Blog />
        <Link to="/blog" className="box-button" style={contentBoxButton}>
          View all Articles
        </Link>
      </ContentLayout>
      <ContentLayout bgcolor="white">
        <h1 style={indexHeadingStyle}>Projects</h1>
        <p style={indexSubHeadingStyle}>
          Checkout some of my projects with case study
        </p>
        <Projects />
        <Link to="/projects" className="box-button" style={contentBoxButton}>
          View All Projects
        </Link>
      </ContentLayout>

      <ContentLayout bgcolor="#fff">
        <Newsletter />
      </ContentLayout>
    </MasterLayout>
  )
}

export default IndexPage
