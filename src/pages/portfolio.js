import React from "react"
import Layout from "../components/layout"
import PlainWelcome from "../components/plainWelcome"
import Projects from "../components/projects"

const Portfolio = () => {
  return (
    <Layout>
      <PlainWelcome>
          My portfolio
      </PlainWelcome>
      <Projects/>
      
    </Layout>
  )
}

export default Portfolio
