import React from "react"

import contentLayoutStyles from "./content-layout.module.scss"
import { MDXProvider } from "@mdx-js/react"

import ContactForm from "./contact-form"

const shortCodes = { ContactForm }

const ContentLayout = props => {
  return (
    <MDXProvider components={shortCodes}>
      <section className={contentLayoutStyles.contentSection}>
        <div className={contentLayoutStyles.content}>{props.children}</div>
      </section>
    </MDXProvider>
  )
}

export default ContentLayout
