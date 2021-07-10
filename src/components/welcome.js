import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import * as welcomeStyles from './welcome.module.scss';

import Particles from 'react-particles-js';

import { useAuthorImage } from './utilities/use-author-image';
import { FaArrowCircleRight, FaToolbox, FaTelegramPlane } from 'react-icons/fa';
import SocialMediaIcons from './utilities/social-media-icons';

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
      value: '#ffffff',
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: 'img/github.svg',
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
      color: '#ffffff',
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: false,
        mode: 'push',
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
};

const Welcome = () => {
  const { ...GatsbyImageSharpFixed } = useAuthorImage();

  return (
    <section className={welcomeStyles.welcomeSection}>
      <Particles className={welcomeStyles.particles} params={particlesParam} />
      <div className={welcomeStyles.welcomeContent}>
        <div className={welcomeStyles.aboutIntro}>
          <h1 className={welcomeStyles.heading}>
            <span style={{ fontWeight: '100' }}>Hello.I'm </span>Ajeet
            Chaulagain
          </h1>
          <p className={welcomeStyles.paragraph}>
            I am pragmatic software engineer, passionate and proficient building
            applications that are scalable, maintainable and well architected
            with beautifully crafted code{' '}
          </p>
          <div className={welcomeStyles.calltoactionWrapper}>
            <Link to="/about" className={welcomeStyles.welcomeButton}>
              More about me →
            </Link>
            {false && (
              <Link
                to="/projects"
                className={welcomeStyles.welcomeButton}
                style={{
                  backgroundColor: '#baa1ca',
                  color: '#000',
                  border: 'none',
                }}
              >
                View My Work
              </Link>
            )}
          </div>

          {/* Here goes the social media icons */}
          <SocialMediaIcons />
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
            <p>
              I write articles on modern software development. Signup my
              newsletter to get the update when it comes out.
            </p>

            <Link to="/newsletter" className={welcomeStyles.subscribeButton}>
              Subscribe &nbsp;
              <FaTelegramPlane />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
