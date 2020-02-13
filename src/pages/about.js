import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Projects from "../components/projects"

import PlainWelcome from "../components/plainWelcome"


const AboutPage = () => {
  return (
    <Layout>
      <PlainWelcome>
          About Me
      </PlainWelcome>
      <Projects/>
      
    </Layout>
  )
}

export default AboutPage
