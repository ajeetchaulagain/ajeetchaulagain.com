import React from "react"

import Header from "./header"
import Footer from "../components/footer"
import Welcome from "../components/welcome"
import Projects from "../components/projects"
import Blogs from "../components/blogs"


import layoutStyles from "./layout.module.scss"

const Layout = () => {
  return (
    
    <div className="main">
        <Header /> 
        <Welcome/>
        <Projects/>
        <Blogs />
        <Footer />
    </div>
  )
}

export default Layout
