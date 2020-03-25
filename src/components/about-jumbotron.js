import React from "react"
import Img from "gatsby-image"

import jumbotronStyles from "./about-jumbotron.module.scss"

import { useAuthorImage } from "./utilities/use-author-image"

const AboutJumbotronBlog = () => {
  const { ...GatsbyImageSharpFixed } = useAuthorImage()

  return (
    <div className={jumbotronStyles.wrapper}>
      <div className={jumbotronStyles.imageWrapper}>
        <Img fixed={GatsbyImageSharpFixed} />
      </div>
      <div className={jumbotronStyles.contentWrapper}>
        <p>
          I am Ajeet Chaulagain, a full stack developer based on Melbourne,
          Australia. I write about the{" "}
          <em>software development and about my side projects</em> to inspire begineer
          start their career in software engineering. If my site has helped you
          somehow, It would be grateful if you consider supporting me.
        </p>
      </div>
    </div>
  )
}

export default AboutJumbotronBlog
