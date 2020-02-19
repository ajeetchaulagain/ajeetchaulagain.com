import React from "react"

import Header from "./Header"
import Footer from "./footer"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import "./utilities/sticky-header.js"

const MasterLayout = ({ children }) => {
  return (
    <div className="main">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MasterLayout
