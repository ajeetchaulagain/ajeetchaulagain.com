import React from "react"

import contentLayoutStyles from "./content-layout.module.scss"

const ContentLayout = (props) => {
    return (
    <section className={contentLayoutStyles.contentSection}>
      <div className={contentLayoutStyles.content}>
            {props.children}
      </div>
    </section>
    )
}

export default ContentLayout
