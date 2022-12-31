import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import { mb, ml } from 'styled-components-spacing';
import { ButtonProps } from './PropTypes';
import { Icon } from 'components/icon/Icon';
import {
  BaseButtonStyles,
  getStylesForButtonSize,
  getStylesForButtonColorAndVariant,
} from './styles';

export const BaseButtonLink = ({ text, iconName, ...rest }: ButtonProps) => {
  return (
    <GatsbyLink {...rest}>
      {text} {iconName && <Icon iconName={iconName} />}
    </GatsbyLink>
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
