import React from 'react';
import styled from 'styled-components';
import { mb } from 'styled-components-spacing';
import { BlogPostCardProps } from '..//blog-post-card/PropTypes';
import { BlogPostCard } from '../blog-post-card/BlogPostCard';

type BlogPostCardListProps = {
  blogs: BlogPostCardProps[];
};

const BlogPostCardWrapper = styled.div``;

const Container = styled.div`
  ${BlogPostCardWrapper}:not(:last-child) {
    ${mb(5)};
  }
`;

export const BlogPostCardList = ({ blogs }: BlogPostCardListProps) => {
  return (
    <Container>
      {blogs &&
        blogs.map((blog) => {
          return (
            <BlogPostCardWrapper>
              <BlogPostCard {...blog} />
            </BlogPostCardWrapper>
          );
        })}
    </Container>
  );
};
