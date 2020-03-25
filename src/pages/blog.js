import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import ContentLayout from "../components/content-layout"
import Blog from "../components/blog"
import { indexHeadingStyle, indexSubHeadingStyle } from "."

const BlogPage = () => {
  const searchBoxStyle = {
    width: "100%",
    padding: "1rem",
    borderRadius: "5px",
    fontSize: "1rem",
    marginBottom: "3rem",
    fontFamily: "Roboto",
    fontWeight: "500",
    letterSpacing: "1px",
    border: "1px solid rgb(230, 228, 228)",
  }

  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <h1 style={indexHeadingStyle}>Articles & Tutorials</h1>
        <p style={indexSubHeadingStyle}>
          Tutorials on software develpment, how-to guides and more.
        </p>
        <input
          type="text"
          placeholder="Type here to filter articles"
          style={searchBoxStyle}
        />
        <Blog />
      </ContentLayout>
    </MasterLayout>
  )
}
export default BlogPage
