import React from "react"
import welcomeStyles from "./welcome.module.scss"

const PlainWelcome = (props) => {
    return (

    <section className={welcomeStyles.welcomeSection}>
      <div className={welcomeStyles.welcomeContent}>
      <h1 className={welcomeStyles.heading}>{props.children}</h1>
      </div>
    </section>
    )
}

export default PlainWelcome