import React from "react"

import contentLayoutStyles from "./content-layout.module.scss"
import { MDXProvider } from "@mdx-js/react"

import ContactForm from "./contact-form"
import Img from "gatsby-image"

const shortCodes = { ContactForm, Img }

const ContentLayout = props => {
  return (
    <MDXProvider components={shortCodes}>
      <section className={contentLayoutStyles.contentSection}>
        <div
          className={contentLayoutStyles.content}
          style={{ backgroundColor: props.bgcolor, color: props.color, minHeight:props.minHeight }}
        >
          {props.children}
        </div>
      </section>
    </MDXProvider>
  )
}

export default ContentLayout
