import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from './Tag';

export default {
  component: Tag,
  title: 'Components/Tag',
  Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'light',
  children: 'Default light',
};

export const Dark = Template.bind({});
Dark.args = {
  type: 'dark',
  children: 'Dark',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Dark',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Dark',
};
