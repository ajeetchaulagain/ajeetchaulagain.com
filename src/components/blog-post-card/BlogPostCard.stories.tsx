import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BlogPostCard } from './BlogPostCard';

export default {
  component: BlogPostCard,
  title: 'Components/BlogPostCard',
} as ComponentMeta<typeof BlogPostCard>;

const Template: ComponentStory<typeof BlogPostCard> = (args) => (
  <BlogPostCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
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
};
