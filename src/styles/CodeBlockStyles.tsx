import { css } from 'styled-components';

export const CodeBlockStyles = css`
  .gatsby-highlight-code-line {
    background-color: rgb(89, 89, 89);
    background-color: red;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 3px solid #fff;
  }

  .gatsby-highlight pre[class*='language-'] {
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  /**
   * If you already use line highlighting
   */

  /* Adjust the position of the line numbers */
  .gatsby-highlight pre[class*='language-'].line-numbers {
    padding-left: 2.8em;
  }

  /**
   * If you only want to use line numbering
   */

  .gatsby-highlight {
    -webkit-font-smoothing: subpixel-antialiased;
    font-size: 0.9rem;
    background-color: #212529;
    border-radius: 0.2rem;
    margin: 0rem 0 2rem;
    padding: 0.5rem;
    padding-left: 1rem;
    overflow: auto;
  }

  .gatsby-highlight pre[class*='language-'].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }

  // Line highlighting for inline - custom code

  em code {
    font-size: 1rem;
    color: #333 !important;
    font-weight: 400;
    background-color: rgb(240, 240, 240) !important;
    border: 1px solid rgb(193, 193, 193) !important;
    padding: 0.1rem 0.3rem !important;
    display: inline-block !important;
    border-radius: 1px !important;
    font-family: monospace !important;
  }

  // Code for shell prompt
  .command-line-prompt > span:before {
    color: #999;
    content: ' ';
    display: block;
    padding-right: 0.8em;
  }

  /* Prompt for all users */
  .command-line-prompt > span[data-user]:before {
    content: '[' attr(data-user) '@' attr(data-host) '] $';
  }

  /* Prompt for root */
  .command-line-prompt > span[data-user='root']:before {
    content: '[' attr(data-user) '@' attr(data-host) '] #';
  }

  .command-line-prompt > span[data-prompt]:before {
    content: attr(data-prompt);
  }

  // Gatsby-remark-code-titles css
  .gatsby-code-title {
    margin-bottom: -0.6rem;
    padding: 0.2rem 1em 0.8rem;
    font-family: inherit;
    background-color: #000000;
    color: white;
    font-weight: 700;
    z-index: 0;

    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }
`;
