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

export const Default = Template.bind({});
Default.args = {
  title: 'React Clean Code Pattern',
  description:
    'A light-weight react project that demonstrated the clean, reusable, and maintainable way of managing state in react app',
  actions: [
    {
      text: 'Source',
      to: '',
      type: 'secondary',
      color: 'dark',
      size: 'small',
      iconName: 'Github',
    },
    {
      text: 'Demo',
      to: '',
      type: 'primary',
      color: 'dark',
      size: 'small',
      iconName: 'ExternalLink',
    },
  ],
};
