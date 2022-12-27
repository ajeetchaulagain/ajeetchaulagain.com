import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProjectList } from './ProjectList';
import { ProjectCardProps } from 'components/project-card/PropTypes';

export default {
  component: ProjectList,
  title: 'Components/ProjectList',
} as ComponentMeta<typeof ProjectList>;

const Template: ComponentStory<typeof ProjectList> = (args) => (
  <ProjectList {...args} />
);

export const Default = Template.bind({});

const sampleProjectCardData: ProjectCardProps = {
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
Default.args = {
  projects: [
    sampleProjectCardData,
    sampleProjectCardData,
    sampleProjectCardData,
    sampleProjectCardData,
  ],
};
