import React from "react"
import MasterLayout from "../components/master-layout"
import ContentLayout from "../components/content-layout"
import IntroSection from "../components/intro-section"
import EmailList from "../components/email-list-form"
import newsLetterStyles from "../components/newsletterpage.module.scss"
import { FaBookReader, FaLongArrowAltLeft } from "react-icons/fa"
import { Link } from "gatsby"

const NewsLetterPage = () => {
  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <div className={newsLetterStyles.wrapper}>
          <h1>
            Subscribe to Newsletter <FaBookReader />
          </h1>
          <p>
            I write content on modern software development. Signup my newsletter
            to get the update when any new stufs comes out!
          </p>
          <EmailList />
          <p className={newsLetterStyles.note}>
            <em>Privacy notice:</em> Your personal information is not shared to
            anyone. You can unsubscribe at any time with single click
          </p>
        </div>

        <Link to="/">Go back to Home</Link>
      </ContentLayout>
    </MasterLayout>
  )
}

export default NewsLetterPage
