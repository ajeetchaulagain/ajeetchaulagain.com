import React from "react"
import Img from "gatsby-image"

import jumbotronStyles from "./about-jumbotron.module.scss"

import { useAuthorImage } from "./utilities/use-author-image"

import coffeImage from "../images/cuplogo-sm.png"

import BuyMeCoffeeButton from "./utilities/buy-me-coffee-button"

const AboutJumbotronBlog = () => {
  const { ...GatsbyImageSharpFixed } = useAuthorImage()

  return (
    <div className={jumbotronStyles.wrapper}>
      <div className={jumbotronStyles.imageWrapper}>
        <Img fixed={GatsbyImageSharpFixed} />
      </div>
      <div className={jumbotronStyles.contentWrapper}>
        <p>
        I am Ajeet Chaulagain, a full stack developer based in Melbourne, Australia.
        I write an article about <em>modern software development and my side projects</em> to 
        help the beginner start their career in software engineering. If my site has 
        helped you somehow to learn, I would be grateful if you consider supporting me. 
        </p>
        <div className={jumbotronStyles.supportSection}>
          <BuyMeCoffeeButton/> &nbsp;
          <BuyMeCoffeeButton/>
        </div>
      </div>
    </div>
  )
}

export default AboutJumbotronBlog
