import React from "react"
import * as quickInfoStyle from "./quick-info.module.scss"
import { Link } from "gatsby"

import { FaInfoCircle } from "react-icons/fa"

export const QuickInfo = props => {
  return (
    <div className={quickInfoStyle.quickInfo}>
      <div>
        <FaInfoCircle />
      </div>
      <p>
        <Link to={props.url}>{props.name}</Link> {props.children}
      </p>
    </div>
  )
}
