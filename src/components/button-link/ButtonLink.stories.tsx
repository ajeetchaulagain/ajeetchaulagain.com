import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonLink } from './ButtonLink';

export default {
  component: ButtonLink,
  title: 'Components/ButtonLink',
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => (
  <ButtonLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'View more',
  to: '/test',
  iconName: 'ExternalLink',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  text: 'View more',
  to: '/test',
  type: 'primary',
  color: 'dark',
  iconName: 'ExternalLink',
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  text: 'View more',
  to: '/test',
  type: 'primary',
  color: 'light',
  iconName: 'ExternalLink',
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  text: 'View more',
  to: '/test',
  type: 'secondary',
  color: 'dark',
  iconName: 'ExternalLink',
};

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
  text: 'View more',
  to: '/test',
  type: 'secondary',
  color: 'light',
  iconName: 'ExternalLink',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  text: 'View more',
  to: '/test',
  size: 'small',
  iconName: 'ExternalLink',
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  text: 'View more',
  to: '/test',
  size: 'medium',
  iconName: 'ExternalLink',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  text: 'View more',
  to: '/test',
  size: 'large',
  iconName: 'ExternalLink',
};
