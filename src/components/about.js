import React from "react"
import aboutStyles from "./about.module.scss"
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(
    graphql`
      query AboutPageAuthorImage {
        file(relativePath: { eq: "images/ajeet.png" }) {
          childImageSharp {
            fixed(webpQuality: 100, width:120) {
              ...GatsbyImageSharpFixed_withWebp
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
      <div className={aboutStyles.flexWrapper}>
        <p>
          Hello. I'm Ajeet Chaulagain, a <em>full stack developer</em> currently
          living in Melbourne, Australia and originally from Kathmandu, Nepal. I
          have got a serious passion for programming and developing software
          products that will have great value to the end-user.
        </p>
        <div className={aboutStyles.imageWrapper}>
          <Img
            fixed={data.file.childImageSharp.fixed}
            className={aboutStyles.aboutImage}
          />
        </div>
      </div>

      <h2>Working Expertise</h2>
      <ul>
        <li>
          Web application development with{" "}
          <em>React, Node, Express, MongoDB, Gatsby, and GraphQL.</em>
        </li>
        <li>Native Android application development (in Java)</li>
        <li>
          Working knowledge of tools associated with{" "}
          <em>incorporating CI/CD pipeline in a project.</em>
        </li>
      </ul>
      <br />
      <p>
        My current focus is on full-stack development with MERN stack by
        incorporating industry-standard tools and technologies. See{" "}
        <Link to="/resume">resume</Link> for my full list of skillset and
        knowledge.
      </p>
      <p>
        <h3>Need a developer for your next project? </h3>I would be more than
        happy to do your project. <Link to="/contact">Say a hello to me</Link>
      </p>

      <h2>About this Website</h2>
      <p>
        I designed and developed this personal website as a{" "}
        <em>place to showcase my work</em> and share{" "}
        <Link to="articles">articles</Link> about software development in the
        process of learning. You can check the case study of how I designed and
        developed this website from scratch using <em>React/Gatsby</em>{" "}
        <Link to="/about">here</Link>
      </p>
      <p>
        I hope my articles will somehow help the beginner to start their career
        in software development and programming. Please don't forget to
        subscirbe me for latest articles
      </p>
    </div>
  )
}

export default About
