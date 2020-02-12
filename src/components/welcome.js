import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import img from "../images/ajeet.jpeg"


const Welcome = () => {

  return (
    <section className="welcome-section flex-container">
      <div className="welcome-content">
          <div className="image-holder">
                <img src={img}/>
          </div>
          <h1><span style={{fontWeight:"300"}}>Hello.I'm </span>
        Ajeet Chaulagain</h1>
          <p>Full Stack Software Engineer living in Melbourne</p>
          
          <a href="#" className="btn">More about me</a>
        </div>
      </section>
  )
}

export default Welcome