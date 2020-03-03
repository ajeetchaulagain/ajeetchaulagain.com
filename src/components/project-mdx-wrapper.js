import React from "react"

import mdxWrapperStyles from "./mdx-wrapper.module.scss"

export default MDXWrapper = props => {
  return <div className={mdxWrapperStyles.wrapper}>{props.children}</div>
}
