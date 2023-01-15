import { ButtonProps } from 'components/button-link/PropTypes';
import { HeadingProps } from 'components/heading/Heading';

export type ProjectCardProps = {
  title: string;
  description?: string;
  actions?: ButtonProps[];
  headingProps?: HeadingProps;
};
