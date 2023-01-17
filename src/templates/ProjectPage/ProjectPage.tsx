import React from 'react';
import { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import {
  MasterLayout,
  ContentRenderer,
  HeroBlank,
  SEO,
  MarkdownRenderer,
  Heading,
  Tag,
} from 'components';
import { ProjectHeaderContainer, StyledButtonLink } from './styles';
import { DateAndTimeComponent, TagsWrapper } from '../styles';

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        technologies
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
      technologies: string[];
    };
    body: string;
    timeToRead: string;
  };
};

const ProjectTemplate: React.FC<PageProps<DataProps, unknown>> = (props) => {
  const {
    frontmatter: { title, description, technologies },
    body,
  } = props.data.mdx;
  return (
    <MasterLayout>
      <SEO title={title} description={description} />
      <HeroBlank />
      <ContentRenderer>
        <ProjectHeaderContainer>
          <Heading size="xlarge">{props.data.mdx.frontmatter.title}</Heading>
          <DateAndTimeComponent>March 2020</DateAndTimeComponent>

          <TagsWrapper>
            {technologies.map((technology, index) => {
              return <Tag key={index}>{technology}</Tag>;
            })}
          </TagsWrapper>
        </ProjectHeaderContainer>

        <MarkdownRenderer>{body}</MarkdownRenderer>
        <StyledButtonLink
          to="/projects"
          text="← Back to project list"
          variant="text"
          color="primary"
          size="large"
        />
      </ContentRenderer>
    </MasterLayout>
  );
};

export default ProjectTemplate;
