import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Welcome from "../components/welcome"
import Projects from "../components/projects"
import Blogs from "../components/blogs"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Welcome/>
      <Projects />
      <Blogs />
    </Layout>
  )
}

export default IndexPage
