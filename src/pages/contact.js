import React from "react"
import MasterLayout from "../components/master-layout"
import IntroSection from "../components/intro-section"
import { FaSmile } from "react-icons/fa"
import ContentLayout from "../components/content-layout"
import ContactForm from "../components/contact-form"

const ContactPage = () => {
  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <h1>Contact Me</h1>
        <p>
          Feel free to say a friendly hello to me via chaulagainajeet@gmail.com or 
          by using the contact form available below.  </p>
        <ContactForm />
        <h2>On Social Media</h2>
      </ContentLayout>
    </MasterLayout>
  )
}

export default ContactPage
