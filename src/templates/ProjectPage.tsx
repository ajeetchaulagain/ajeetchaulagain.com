import React from 'react';
import { Link, PageProps } from 'gatsby';
import { FaArrowLeft } from 'react-icons/fa';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as projectStyles from './project-template.module.scss';
import { graphql } from 'gatsby';
import { MasterLayout, ContentRenderer, HeroBlank, SEO } from 'components';

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      body
    }
  }
`;

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      description: string;
    };
    body: string;
    timeToRead: string;
  };
};

const ProjectTemplate: React.FC<PageProps<DataProps, unknown>> = (props) => {
  const { title, description } = props.data.mdx.frontmatter;
  return (
    <MasterLayout>
      <SEO title={title} description={description} />
      <HeroBlank />
      <ContentRenderer>
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
      </ContentRenderer>
    </MasterLayout>
  );
};

export default ProjectTemplate;
