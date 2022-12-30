import styled, { css } from 'styled-components';
import { TagSize, TagType } from './Tag';
import { px, py } from 'styled-components-spacing';

export const Container = styled.span<{ type?: TagType; size?: TagSize }>`
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 0;
  border-radius: ${({ theme }) => theme.borderRadius.base};

  ${({ type, theme }) => {
    switch (type) {
      case 'light':
        return css`
          background-color: ${theme.colors.light};
          color: ${theme.colors.darkGrey};
        `;
      case 'dark':
        return css`
          background-color: ${theme.colors.darkGrey};
          color: ${theme.colors.light};
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
    return css`
      ${px(2)};
      font-size: ${theme.fontSizes.xmall};
    `;
  }}
`;
