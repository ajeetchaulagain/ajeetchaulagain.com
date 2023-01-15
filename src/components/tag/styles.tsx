import styled, { css } from 'styled-components';
import { TagSize, TagType } from './Tag';
import { px, py } from 'styled-components-spacing';

export const Container = styled.span<{ type?: TagType; size?: TagSize }>`
  font-family: ${({ theme }) => theme.fonts.body};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  display: inline-block;

  ${({ type, theme }) => {
    switch (type) {
      case 'light':
        return css`
          background-color: ${theme.colors.quaternaryBackground};
          color: ${theme.colors.primaryText};
        `;
      case 'dark':
        return css`
          background-color: ${theme.colors.primaryText}; // TODO: Revisit here
          color: ${theme.colors.secondaryText};
        `;
    }
  }}

  ${({ size, theme }) => {
    if (size === 'medium') {
      return css`
        ${px(2)};
        ${py(1)};
        font-size: ${theme.fontSizes.small};
      `;
    }
    if (size === 'small') {
      return css`
        ${px(2)};
        ${py(1)};
        font-size: ${theme.fontSizes.small};
      `;
    }
    return css`
      ${px(2)};
      font-size: ${theme.fontSizes.xsmall};
    `;
  }}
`;
