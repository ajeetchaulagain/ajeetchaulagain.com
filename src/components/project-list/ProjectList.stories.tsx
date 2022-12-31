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

export const WithOutlinedAndContainedActions = Template.bind({});

const sampleProjectCardData: ProjectCardProps = {
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
WithOutlinedAndContainedActions.args = {
  projects: [
    sampleProjectCardData,
    sampleProjectCardData,
    sampleProjectCardData,
    sampleProjectCardData,
  ],
};
