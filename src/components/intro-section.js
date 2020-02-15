import React from "react"
import introStyles from "./intro-section.module.scss"

const IntroSection = props => {
  return (
    <section className={introStyles.introSection}>
      <div className={introStyles.introContent}>
        <h1 className={introStyles.headingLight}>{props.children}</h1>
      </div>
    </section>
  )
}

export default IntroSection
