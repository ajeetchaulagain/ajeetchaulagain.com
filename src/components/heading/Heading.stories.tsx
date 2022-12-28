import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './Heading';

export default {
  component: Heading,
  title: 'Components/Heading',
  argTypes: {
    type: {
      options: ['serif', 'sans-serif'],
      control: { type: 'select' },
      defaultValue: 'serif',
    },
    size: {
      options: ['small', 'medium', 'large', 'xlarge'],
      control: { type: 'select' },
      defaultValue: 'xlarge',
    },
    level: {
      options: ['h1', 'h2', 'h3'],
      control: { type: 'select' },
      defaultValue: 'h1',
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: `Heading Title`,
};

export const Level1Heading = Template.bind({});
Level1Heading.args = {
  children: `Heading Title`,
  level: 'h1',
};

export const Level2Heading = Template.bind({});
Level2Heading.args = {
  children: `Heading Title`,
  level: 'h2',
};

export const Level3Heading = Template.bind({});
Level3Heading.args = {
  children: `Heading Title`,
  level: 'h3',
};

export const SansSerifHeading = Template.bind({});
SansSerifHeading.args = {
  children: `Heading Title`,
  type: 'sans-serif',
};

export const SmallHeading = Template.bind({});
SmallHeading.args = {
  children: `Heading Title`,
  size: 'small',
};

export const MediumHeading = Template.bind({});
MediumHeading.args = {
  children: `Heading Title`,
  size: 'medium',
};

export const LargeHeading = Template.bind({});
LargeHeading.args = {
  children: `Heading Title`,
  size: 'large',
};
