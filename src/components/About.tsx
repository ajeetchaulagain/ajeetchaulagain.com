import React from 'react';
import * as aboutStyles from './about.module.scss';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useAuthorImage } from './utilities/use-author-image';

const About = (): JSX.Element => {
  const { ...GatsbyImageSharpFixed } = useAuthorImage();

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
            fixed={GatsbyImageSharpFixed}
            className={aboutStyles.aboutImage}
          />
        </div>
      </div>

      <h2>Working Expertise</h2>
      <ul>
        <li>
          Web application development with{' '}
          <em>React, Node, Express, MongoDB, Gatsby, and GraphQL.</em>
        </li>
        <li>
          Web Application Development with <em>JAM Stack (GatsbyJS)</em>
        </li>
        <li>Native Android application development (in Java)</li>
        <li>
          Familiarity with implementing concept of{' '}
          <em>Progressive Web App (PWA)</em>
          in a site.
        </li>
        <li>
          Working knowledge of tools associated with{' '}
          <em>incorporating CI/CD pipeline in a project.</em>
        </li>
      </ul>

      <h3>My current set of toolbox and technologies:</h3>
      <p>
        Reactjs, Node.js, Express, MongoDB, GatsbyJS, GraphQL, HTML5 & CSS3,
        Javascript Docker, Webpack, Babel, Git, Github, npm, postman, Visual
        Studio Code
      </p>

      <h3>Need a developer for your next project? </h3>
      <p>
        I do full stack web application development using <em>MERN stack</em>{' '}
        and <em>JAM Stack.</em>
        You can view some of my
        <Link to="/projects"> projects and its case study.</Link>
      </p>
      <p>
        Have you got project in your mind?
        <Link to="/contact">Lets work together</Link> on a project.
      </p>

      <h2>About this Website</h2>
      <p>
        I designed and developed this personal website as a{' '}
        <em>place to showcase my work</em> and share{' '}
        <Link to="/blog">articles</Link> about modern software development. I
        designed this website in JAM stack using GatsbyJS. If you want to know
        more about this project, you can{' '}
        <Link to="/projects">check the case study </Link> of how I designed and
        developed this website from scratch using <em>React/Gatsby.</em>
      </p>
      <p>
        I hope my articles will somehow help the beginner to start their career
        in software development and programming. Please don't forget to
        subscirbe me for latest articles.
      </p>
    </div>
  );
};

export default About;
