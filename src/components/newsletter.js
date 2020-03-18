import React from "react"
import { FaBook } from "react-icons/fa"

import coffeImage from "../images/cuplogo-sm.png"

import newsLetterStyles from "./newsletter.module.scss"
import { indexHeadingStyle } from "../pages"

const NewsLetter = () => {
  return (
    <div className={newsLetterStyles.wrapper}>
      <h1 style={indexHeadingStyle}> Subscribe Me</h1>
      <p>I write articles on software development and programming. Subscribe to my article</p>
      <form>
        <div>
          <input type="email" placeholder="YOUR EMAIL" />
          <input type="submit" value="SUBSCRIBE" />
        </div>
      </form>
      <hr />
      <h1 style={indexHeadingStyle}>Support Me</h1>
      <p>If you like what I do, please support me by buying coffee</p>
      <div className={newsLetterStyles.buymecoffeeWrapper}>
        <a href="https://ko-fi.com/ajeetchaulagain">
          {" "}
          <img src={coffeImage} />
          Buy me a coffee{" "}
        </a>
      </div>
    </div>
  )
}

export default NewsLetter
