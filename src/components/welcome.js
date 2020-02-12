import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import img from "../images/ajeet.jpeg"

import welcomeStyles from "./welcome.module.scss"

const Welcome = () => {
  return (
    <section className={welcomeStyles.welcomeSection}>
      <div className={welcomeStyles.welcomeContent}>
        <div>
          <img src={img} className={welcomeStyles.image} />
        </div>
        <h1 className={welcomeStyles.heading}>
          <span style={{ fontWeight: "100" }}>Hello.I'm</span>Ajeet Chaulagain
        </h1>
        <p className={welcomeStyles.paragraph}>
          Software Engineer. Recent IT Graduate
        </p>
        <a href="#" className={welcomeStyles.welcomeButton}>
          More about me
        </a>
      </div>
    </section>

    // <section className={welcomeStyles.welcomeSection}>
    //   <div className={welcomeStyles.welcomeContent}>
    //       <div>
    //             <img src={img} className={welcomeStyles.image}/>
    //       </div>
    //       <h1 className={welcomeStyles.heading}><span style={{fontWeight:"300"}}>Hello.I'm </span>
    //        Ajeet Chaulagain</h1>

    //       <p className={welcomeStyles.paragraph}>Full Stack Software Engineer</p>

    //       <a href="#" className={welcomeStyles.button}>More about me</a>
    //     </div>
    //   </section>
  )
}

export default Welcome
