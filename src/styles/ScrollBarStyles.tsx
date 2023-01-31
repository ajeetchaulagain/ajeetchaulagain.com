import { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ScrollBarStyles = css`
  body {
    ::-webkit-scrollbar {
      width: 0.7rem;
    }
    ::-webkit-scrollbar-track {
      background: #ebebeb;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.brandPrimary};
      border-radius: 100vw;
    }
  }

  pre[class*='language-'] {
    ::-webkit-scrollbar {
      height: 8px;
      ${breakpoint('xs', 'md')`
        height:4px;
    `};
    }

    ::-webkit-scrollbar-track {
      border-radius: ${({ theme }) => theme.borderRadius.base};
      background-color: ${({ theme }) =>
        theme.name == 'lightTheme' ? '#b3b3b3' : '#2c2c2c'};
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 100vw;
      background-color: ${({ theme }) =>
        theme.name == 'lightTheme' ? '#dbdbdb' : '#4a4a4a'};
    }
  }
`;
