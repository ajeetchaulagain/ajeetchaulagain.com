import React from "react"
import Header from "./header"

import Footer from "../components/footer"

import "../styles/index.scss"
import "../styles/override.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header /> 
        <div className = {layoutStyles.contentMain}>
          {props.children}
        </div>
        
      </div>

      <Footer />
    </div>
  )
}

export default Layout
