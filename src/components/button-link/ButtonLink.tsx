import React from 'react';
import styled from 'styled-components';
import { mb, ml } from 'styled-components-spacing';
import { ButtonProps } from './PropTypes';
import { Icon } from '../icon/Icon';
import {
  BaseButtonStyles,
  getStylesForButtonSize,
  getStylesForButtonColorAndVariant,
} from './styles';
import { Link } from '../link/Link';

export const BaseButtonLink = ({ text, iconName, ...rest }: ButtonProps) => {
  return (
    <Link {...rest}>
      {text} {iconName && <Icon iconName={iconName} />}
    </Link>
  );
};

export const ButtonLink = styled(BaseButtonLink)`
  ${BaseButtonStyles};

  ${({ variant, color }) => {
    return getStylesForButtonColorAndVariant(variant, color);
  }};

  ${({ size }) => {
    return getStylesForButtonSize(size);
  }};

  svg {
    vertical-align: middle;
    ${ml(1)};
    ${mb(1)};
  }
`;

ButtonLink.defaultProps = {
  variant: 'text',
  color: 'primary',
  size: 'large',
};
