import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProjectCard } from './ProjectCard';

export default {
  component: ProjectCard,
  title: 'Components/ProjectCard',
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (args) => (
  <ProjectCard {...args} />
);

export const WithTextActionButton = Template.bind({});
WithTextActionButton.args = {
  title: 'React Clean Code Pattern',
  description:
    'A light-weight react project that demonstrated the clean, reusable, and maintainable way of managing state in react app',
  actions: [
    {
      text: 'Source',
      to: '',
      variant: 'text',
      color: 'primary',
      size: 'medium',
      iconName: 'Github',
    },
    {
      text: 'Demo',
      to: '',
      variant: 'text',
      color: 'primary',
      size: 'medium',
      iconName: 'ExternalLink',
    },
  ],
};

export const WithContainedActionButton = Template.bind({});
WithContainedActionButton.args = {
  title: 'React Clean Code Pattern',
  description:
    'A light-weight react project that demonstrated the clean, reusable, and maintainable way of managing state in react app',
  actions: [
    {
      text: 'Source',
      to: '',
      variant: 'contained',
      color: 'primary',
      size: 'small',
      iconName: 'Github',
    },
    {
      text: 'Demo',
      to: '',
      variant: 'contained',
      color: 'primary',
      size: 'small',
      iconName: 'ExternalLink',
    },
  ],
};

export const WithOutlinedActionButton = Template.bind({});
WithOutlinedActionButton.args = {
  title: 'React Clean Code Pattern',
  description:
    'A light-weight react project that demonstrated the clean, reusable, and maintainable way of managing state in react app',
  actions: [
    {
      text: 'Source',
      to: '',
      variant: 'outlined',
      color: 'primary',
      size: 'small',
      iconName: 'Github',
    },
    {
      text: 'Demo',
      to: '',
      variant: 'contained',
      color: 'primary',
      size: 'small',
      iconName: 'ExternalLink',
    },
  ],
};
