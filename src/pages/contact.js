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
          Say a friendly hello to me either throug social media or the contact
          form available below.
        </p>
        <p>Contact me, if you have got project in mind</p>

        <ContactForm />
      </ContentLayout>
    </MasterLayout>
  )
}

export default ContactPage
