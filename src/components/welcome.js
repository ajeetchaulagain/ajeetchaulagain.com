import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import welcomeStyles from "./welcome.module.scss"

import Particles from "react-particles-js"

import { useAuthorImage } from "./utilities/use-author-image"
import { FaTelegram, FaArrowCircleRight, FaToolbox } from 'react-icons/fa'


import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaCoffee,
  FaTelegramPlane
} from "react-icons/fa"


const particlesParam = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
}

const Welcome = () => {
  const { ...GatsbyImageSharpFixed } = useAuthorImage()

  return (
    <section className={welcomeStyles.welcomeSection}>
      <Particles
        className={welcomeStyles.particles}
        params={particlesParam}
      />
      <div className={welcomeStyles.welcomeContent}>
            <div className={welcomeStyles.aboutIntro}>
                  
                <h1 className={welcomeStyles.heading}>
                  <span style={{ fontWeight: "100" }}>Hello.I'm </span>Ajeet Chaulagain
                </h1>
                <p className={welcomeStyles.paragraph}>I am full stack developer passionate towards building 
                applications that are scalable and maintainable with beautifully crafted code </p>
                <div className={welcomeStyles.calltoactionWrapper}>
                <Link to="/about" className={welcomeStyles.welcomeButton}>
                  More about me &nbsp; <FaArrowCircleRight/>
                </Link>
                <Link to="/about" className={welcomeStyles.welcomeButton} style={{backgroundColor:"#d4ab52", color:"#fff"}}>
                  View My Work &nbsp; <FaToolbox/>
                </Link>
                </div>

                <div>
          <ul className={welcomeStyles.socialMediaLists}>
            <li>
              <a
                href="https://www.facebook.com/chaulagain.ajeet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook/>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ajeetsweb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ajeet-chaulagain/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ajeetchaulagain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/chaulagainajeet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
            <a
              href="https://ko-fi.com/ajeetchaulagain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCoffee />
            </a>
          </li>
          </ul>
  </div>
            </div>

            <div className={welcomeStyles.subscription}>
              <div className={welcomeStyles.imageHolder}>
              <span>
                <Img
                  fixed={GatsbyImageSharpFixed}
                  className={welcomeStyles.image}
                />
              </span>
              <h2>Newsletter</h2>
              <p>I write articles on modern software development. Signup my newsletter to get the update when it comes out.</p>
              
              <Link to="/newsletter" className={welcomeStyles.subscribeButton}>Subscribe &nbsp;<FaTelegramPlane/></Link>
            </div>
            </div>
        
      </div>
    </section>
  )
}

export default Welcome
