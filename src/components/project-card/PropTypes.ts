import { ButtonProps } from '../button-link/PropTypes';
import { HeadingProps } from '../heading/Heading';

export type ProjectCardProps = {
  title: string;
  description?: string;
  actions?: ButtonProps[];
  headingProps?: HeadingProps;
};
