import React from "react"
import Projects from "../components/projects"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"

const ContactPage = () => {
  return (
    <MasterLayout>
      <IntroSection>
          Say a friendly hello to me :) 
      </IntroSection>
      <Projects/>
    
    </MasterLayout>
  )
}

export default ContactPage
