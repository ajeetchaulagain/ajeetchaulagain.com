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

  /* Clear sticky header + mobile TOC bar when jumping to anchored headings */
  h2[id],
  h3[id] {
    scroll-margin-top: 7rem; /* mobile: ~4rem header + ~3rem TOC bar */

    @media (min-width: 1380px) {
      scroll-margin-top: 5rem; /* desktop: header only, no inline TOC */
    }
  }
`;
