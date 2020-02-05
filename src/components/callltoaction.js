import React from "react"
import { Link } from "gatsby"

import actionStyles from "./action.module.scss"

const Action = props => {
  return (
    <div className={actionStyles.wrapper}>
      <h2>{props.title}</h2>
      <p>
        {props.desc}
        <a href={props.url}>Contact Me</a>
      </p>
    </div>
  )
}

export default Action
