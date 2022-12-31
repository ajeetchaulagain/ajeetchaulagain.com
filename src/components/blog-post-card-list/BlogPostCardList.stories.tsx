import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BlogPostCardList } from './BlogPostCardList';
import { BlogPostCardProps } from '../blog-post-card/PropTypes';

export default {
  component: BlogPostCardList,
  title: 'Components/BlogPostCardList',
} as ComponentMeta<typeof BlogPostCardList>;

const Template: ComponentStory<typeof BlogPostCardList> = (args) => (
  <BlogPostCardList {...args} />
);

const sampleBlogPostCardData: BlogPostCardProps = {
  title: 'How to setup a theming with styled components',
  publishDate: 'January 01, 2023',
  timeToRead: '3 min read',
  tags: ['react', 'gatsby'],
  gatsbyImageProps: {
    alt: 'altText',
    image: {
      layout: 'constrained',
      backgroundColor: '#f86818',
      images: {
        fallback: {
          src: 'https://picsum.photos/200',
          srcSet:
            'https://picsum.photos/200 64w,\nhttps://picsum.photos/200 128w,\nhttps://picsum.photos/200 256w',
          sizes: '(min-width: 256px) 256px, 100vw',
        },
      },
      width: 256,
      height: 256,
    },
  },
  blogPostRelativeUrl: '/blog',
};

export const Default = Template.bind({});
Default.args = {
  blogs: [
    sampleBlogPostCardData,
    sampleBlogPostCardData,
    sampleBlogPostCardData,
  ],
};
