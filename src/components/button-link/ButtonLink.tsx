import React from 'react';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { py, px } from 'styled-components-spacing';
import { colors, fontWeights } from '../layout/MasterLayout';

export type ButtonProps = {
  text: string;
  to: string;
  type: 'primary' | 'secondary' | 'plain';
  size: 'small' | 'medium' | 'large';
  color: 'light' | 'dark' | 'grey';
};

const getStylesForButtonSize = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        ${px(2)}
        ${py(1)}
        font-size:0.9rem;
        font-weight: 500;
      `;
    case 'medium':
      return css`
        ${px(3)}
        ${py(2)}
        font-size:1rem;
      `;
    case 'large':
      return css`
        ${px(3)}
        ${py(2)}
        font-size:1.1rem;
      `;
  }
};

const BaseButtonStyles = css`
  text-decoration: none !important;
  &:hover {
    cursor: pointer;
  }
`;

const getStylesForButtonType = (type: string, color: string) => {
  return css`
    background-color: ${(props) =>
      props.theme.buttonColors[type][color].background || 'red'};
    color: ${(props) => props.theme.buttonColors[type][color].text} !important;
    font-weight: ${fontWeights[3]} !important;
    border-radius: ${(props) => props.theme.borderRadius.base};
    border: ${(props) => props.theme.buttonColors[type][color].border};
  `;
};

export const ButtonLink = ({ text, ...rest }: ButtonProps) => {
  return <GatsbyLink {...rest}>{text}</GatsbyLink>;
};

export const StyledButtonLink = styled(ButtonLink)`
  ${BaseButtonStyles};
  
  ${({ type, color }) => {
    return getStylesForButtonType(type, color);
  }}};

  ${({ size }) => {
    return getStylesForButtonSize(size);
  }}};
`;
