// Create and export the react component

import React from 'react';
import MasterLayout from '../components/layout/MasterLayout';
import IntroSection from '../components/IntroSection';
import ContentLayout from '../components/ContentLayout';
import { Link, PageProps } from 'gatsby';
import { FaArrowLeft } from 'react-icons/fa';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as projectStyles from './project-template.module.scss';
import { graphql } from 'gatsby';

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

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
    };
    body: string;
    timeToRead: string;
  };
};

const ProjectTemplate: React.FC<PageProps<DataProps, unknown>> = (props) => {
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
          <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
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
