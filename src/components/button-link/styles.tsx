import { css } from 'styled-components';
import { py, px } from 'styled-components-spacing';

export const getStylesForButtonSize = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        ${px(2)}
        ${py(2)}
        font-size:${(props) => props.theme.fontSizes.xsmall};
      `;
    case 'medium':
      return css`
        ${px(3)}
        ${py(2)}
        font-size:${(props) => props.theme.fontSizes.small};
      `;
    case 'large':
      return css`
        ${px(3)}
        ${py(2)}
        font-size:${(props) => props.theme.fontSizes.medium};
      `;
  }
};

export const BaseButtonStyles = css`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const getStylesForButtonType = (type: string, color: string) => {
  return css`
    background-color: ${(props) =>
      props.theme.buttonColors[type][color].background || 'red'};
    color: ${(props) => props.theme.buttonColors[type][color].text};
    font-weight: ${(props) => props.theme.fontWeights[2]};
    border-radius: ${(props) => props.theme.borderRadius.base || '10px'};
    border: ${(props) => props.theme.buttonColors[type][color].border};
    font-family: ${(props) => props.theme.fonts.body};
    font-weight: ${(props) => props.theme.fontWeights[4]};
    line-height: 0;
  `;
};
