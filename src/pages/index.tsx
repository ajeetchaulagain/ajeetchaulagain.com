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
} from 'components';
import { useBlogPostList, useProjectList } from 'hooks';
import {
  BlogPostCardDecorator,
  ProjectCardDecorator,
} from 'markdown-decorators';

const IndexPage = () => {
  const blogPostList = useBlogPostList();
  const projectList = useProjectList();

  const projects = projectList.map((project) => ProjectCardDecorator(project));
  const blogs = blogPostList.map((blogPost) => BlogPostCardDecorator(blogPost));

  return (
    <MasterLayout>
      <SEO />
      <LandingPageHero />
      <ContentRenderer>
        <Heading level="h2">
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
        <Heading level="h2">Projects</Heading>
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
