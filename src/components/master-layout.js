import React from "react"

import Header from "./Header"
import Footer from "./footer"


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
