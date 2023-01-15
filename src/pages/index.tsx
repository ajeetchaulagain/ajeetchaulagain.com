import React from 'react';
import { FaBook } from 'react-icons/fa';
import {
  LandingPageHero,
  ProjectList,
  MasterLayout,
  NewsLetter,
  SEO,
  ContentRenderer,
  ButtonLink,
  Heading,
  Paragraph,
  BlogPostCardList,
  HeadingProps,
} from 'components';
import { useBlogPostList, useProjectList } from 'hooks';
import {
  BlogPostCardDecorator,
  ProjectCardDecorator,
} from 'markdown-decorators';

export type BlogPostCardDecoratorOptions = {
  headingProps?: HeadingProps;
};

export type ProjectCardDecoratorOptions = {
  headingProps?: HeadingProps;
};

const blogPostCardDecoratorOptions: BlogPostCardDecoratorOptions = {
  headingProps: {
    level: 'h3',
    size: 'small',
    type: 'sans-serif',
  },
};

const projectCardDecoratorOptions: ProjectCardDecoratorOptions = {
  headingProps: {
    level: 'h3',
    size: 'small',
    type: 'sans-serif',
  },
};

const IndexPage = () => {
  const blogPostList = useBlogPostList();
  const projectList = useProjectList();

  const projects = projectList.map((project) =>
    ProjectCardDecorator(project, projectCardDecoratorOptions)
  );
  const blogs = blogPostList.map((blogPost) =>
    BlogPostCardDecorator(blogPost, blogPostCardDecoratorOptions)
  );

  return (
    <MasterLayout>
      <SEO />
      <LandingPageHero />
      <ContentRenderer>
        <Heading level="h2" size="xlarge">
          <FaBook /> From my blog
        </Heading>
        <Paragraph>See the recent on my article list</Paragraph>
        <BlogPostCardList blogs={blogs} />
        <ButtonLink
          to="/blog"
          text="View All Articles →"
          variant="contained"
          color="primary"
          size="large"
        />
      </ContentRenderer>
      <ContentRenderer>
        <Heading level="h2" size="xlarge">
          Projects
        </Heading>
        <Paragraph>Checkout some of my projects</Paragraph>
        <ProjectList projects={projects} />
        <ButtonLink
          to="/projects"
          text="View All Projects →"
          variant="contained"
          color="primary"
          size="large"
        />
      </ContentRenderer>

      <ContentRenderer>
        <NewsLetter />
      </ContentRenderer>
    </MasterLayout>
  );
};

export default IndexPage;
