import React from "react"
import aboutStyles from "./about.module.scss"
import { useStaticQuery , Link } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(
    graphql`
      query AboutPageAuthorImage {
        file(relativePath: { eq: "images/about-ajeet.jpg" }) {
          childImageSharp {
            fluid(webpQuality: 100, toFormat: WEBP) {
              ...GatsbyImageSharpFluid
            }
            id
          }
        }
      }
    `
  )

  return (
    <div className={aboutStyles.wrapper}>
      <h1>About</h1>
      <div className={aboutStyles.imageWrapper}>
        <div>
          <p>
            Hello. I'm Ajeet Chaulagain, a <em>full stack developer</em> currently living
            in Melbourne, Australia and originally from Kathmandu, Nepal. I have
            got a serious passion for programming and developing software
            products that will have great value to the end-user.
          </p>
          
          <h2>Key Working Expertise</h2>
          <ol>
            <li>Web application development with React, Node, Express, MongoDB, Gatsby, and GraphQL.</li>
            <li>Native Android application development (in Java)</li>
            <li>Working knowledge of tools associated with incorporating CI/CD pipeline in a project.</li>
          </ol>
            <br/>
          <p>
          My current focus is on full-stack development with MERN stack by incorporating industry-standard tools
           and technologies. See <Link to="/resume">resume</Link> for my full list of skillset and knowledge.
          </p>
          <p>Need a developer for your next project? <Link to="/contact">Let's talk.</Link></p>
        </div>
        <Img
          fluid={data.file.childImageSharp.fluid}
          className={aboutStyles.aboutImage}
        />
      </div>
      <h2>About this website</h2>
      <p>
      I designed and developed this personal website as a <em>place to showcase my work</em> and share articles about software development in the process of learning. You can check the case 
      study of how I designed and developed this website from scratch using <em>React/Gatsby</em> <Link to="/about">here</Link> 
      </p>
      <p>
      I hope my articles will somehow help the beginner to start their career in software development and programming.
      </p>
    </div>
  )
}

export default About
