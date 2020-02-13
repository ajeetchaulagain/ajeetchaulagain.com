import React from "react"
import Layout from "../components/layout"
import PlainWelcome from "../components/plainWelcome"
import Projects from "../components/projects"

const ContactPage = () => {
  return (
    <Layout>
      <PlainWelcome>
          Contact
      </PlainWelcome>
      <Projects/>
    
    </Layout>
  )
}

export default ContactPage
