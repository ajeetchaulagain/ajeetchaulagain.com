import React from "react"

import Header from "./Header"
import Welcome from "./welcome"
import Footer from "./footer"

const Layout = (props) => {
  return (
    <div className="main">
      <Header/>
        {props.children}
      <Footer/>
    </div>
  )
}

export default Layout
