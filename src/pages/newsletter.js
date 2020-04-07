import React from "react"
import MasterLayout from "../components/master-layout"
import ContentLayout from "../components/content-layout"
import IntroSection from "../components/intro-section"
import { Link } from "gatsby"
import NewsLetter from "../components/newsletter"

const NewsLetterPage = () => {
  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <div>
          <NewsLetter/>
        </div>
        <br/>
        <p><Link to="/">Go back to Home</Link></p>
      </ContentLayout>
    </MasterLayout>
  )
}

export default NewsLetterPage
