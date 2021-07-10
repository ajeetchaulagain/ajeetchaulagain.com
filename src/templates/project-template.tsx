// Create and export the react component

import React from 'react';
import MasterLayout from '../components/MasterLayout';
import IntroSection from '../components/IntroSection';
import ContentLayout from '../components/ContentLayout';
import { Link } from 'gatsby';
import { FaArrowLeft } from 'react-icons/fa';

import { MDXRenderer } from 'gatsby-plugin-mdx';

import * as projectStyles from './project-template.module.scss';

import { graphql } from 'gatsby';
const ExternalLink = (props) => {
  if (props.href.includes('yourwebsite.com') || props.href[0] === '/') {
    return <a href={props.href}>{props.children}</a>;
  }
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};

const components = {
  a: ExternalLink,
};

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`;
const ProjectTemplate = (props) => {
  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <div className={projectStyles.header}>
          <span className={projectStyles.title}>Case Study</span>

          <h1>{props.data.mdx.frontmatter.title}</h1>
          <span className={projectStyles.date}>March 2020</span>
          {/* <a className={projectStyles.externalLinkButton}>View on Github</a> */}
        </div>

        <div className={projectStyles.projectMdxWrapper}>
          <MDXRenderer components={components}>
            {props.data.mdx.body}
          </MDXRenderer>
        </div>
        <div className={projectStyles.backButton}>
          <Link to="/projects">
            <i>
              <FaArrowLeft />
            </i>
            Back to Project List
          </Link>
        </div>
      </ContentLayout>
    </MasterLayout>
  );
};

export default ProjectTemplate;
