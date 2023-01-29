import { css } from 'styled-components';
import { py, px } from 'styled-components-spacing';
import { ButtonColor, ButtonVariant } from './PropTypes';

export const getStylesForButtonSize = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        ${px(3)}
        ${py(2)}
        font-size:${({ theme }) => theme.fontSizes.xsmall};
      `;
    case 'medium':
      return css`
        ${px(4)}
        ${py(2)}
        font-size:${({ theme }) => theme.fontSizes.small};
      `;
    case 'large':
      return css`
        ${px(4)}
        ${py(3)};
        font-size: ${({ theme }) => theme.fontSizes.medium};
      `;
  }
};

export const BaseButtonStyles = css`
  display: inline-block;
  line-height: 1.5;
  &:hover {
    cursor: pointer;
    filter: contrast(120%);
  }

  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights[6]};
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
        border-radius: ${({ theme }) => theme.borderRadius.base || '10px'};
      `;

    case 'text':
      return css`
        border-radius: none;
        border-bottom: ${({ theme }) =>
          `${theme.borders.thin} ${theme.buttonColors[color].background}`};
        color: ${({ theme }) => theme.buttonColors[color].background};
        padding: 0 !important; // TODO: Revisit here later
        :hover {
          text-decoration: none;
          border-bottom-color: transparent;
        }
      `;

    case 'outlined':
      return css`
        border: ${({ theme }) =>
          `${theme.borders.thin} ${theme.buttonColors[color].background}`};
        color: ${({ theme }) => theme.buttonColors[color].background};
        border-radius: ${({ theme }) => theme.borderRadius.base || '10px'};
      `;
  }
};
