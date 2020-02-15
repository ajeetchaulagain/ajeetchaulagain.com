import React from "react"

import Header from "./Header"
import Footer from "./footer"

const MasterLayout = props => {
  return (
    <div className="main">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default MasterLayout
