import { css } from 'styled-components';

export const BaseStyles = css`
  * {
    box-sizing: border-box;
  }

  .main {
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
    -webkit-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }

  em {
    font-weight: 600;
    font-style: inherit;
  }
`;
