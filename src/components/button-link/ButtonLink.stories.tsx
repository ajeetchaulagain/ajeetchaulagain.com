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
