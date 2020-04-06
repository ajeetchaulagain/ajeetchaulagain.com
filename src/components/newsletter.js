import React from "react"
import { FaBook } from "react-icons/fa"

import coffeImage from "../images/cuplogo-sm.png"

import newsLetterStyles from "./newsletter.module.scss"
import { indexHeadingStyle } from "../pages"
import EmailList from "./email-list-form"

const NewsLetter = () => {
  return (
    <div className={newsLetterStyles.wrapper}>
      <div className={newsLetterStyles.subscribeWrapper}>
      <h1 style={indexHeadingStyle}>Newsletter</h1>
      <p>Tutorials . How-to-guides . Freebies . and more</p>
      <p>
        Signup my newsletter to get update when any new stuffs comes out!
      </p>
        <EmailList/>
      </div>
      
    </div>
  )
}

export default NewsLetter
