import { css } from 'styled-components';
import { py, px } from 'styled-components-spacing';
import { ButtonColor, ButtonVariant } from './PropTypes';

export const getStylesForButtonSize = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        ${px(2)}
        ${py(1)}
        font-size:${(props) => props.theme.fontSizes.xsmall};
      `;
    case 'medium':
      return css`
        ${px(4)}
        ${py(2)}
        font-size:${(props) => props.theme.fontSizes.small};
      `;
    case 'large':
      return css`
        ${px(4)}
        ${py(3)};
        font-size: ${(props) => props.theme.fontSizes.medium};
      `;
  }
};

export const BaseButtonStyles = css`
  display: inline-block;
  line-height: 1.5;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    filter: contrast(120%);
  }

  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights[6]};
  border-radius: ${(props) => props.theme.borderRadius.base || '10px'};
`;

export const getStylesForButtonColorAndVariant = (
  variant: ButtonVariant,
  color: ButtonColor
) => {
  switch (variant) {
    case 'contained':
      return css`
        background-color: ${({ theme }) =>
          theme.buttonColors[color].background};
        color: ${({ theme }) => theme.buttonColors[color].text};
      `;

    case 'text':
      return css`
        color: ${({ theme }) => theme.buttonColors[color].background};
        padding: 0 !important; // TODO: Revisit here later
      `;

    case 'outlined':
      return css`
        border: ${({ theme }) =>
          `${theme.borders.thin} ${theme.buttonColors[color].background}`};
        color: ${({ theme }) => theme.buttonColors[color].background};
      `;
  }
};
