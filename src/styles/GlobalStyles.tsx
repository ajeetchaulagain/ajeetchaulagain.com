import { createGlobalStyle } from 'styled-components';
import { CSSReset } from './CSSReset';
import { BaseStyles } from './BaseStyles';
import { MarkdownTableStyles } from './MarkdownTableStyles';
import { CodeBlockStyles } from './CodeBlockStyles';

export const GlobalStyle = createGlobalStyle`
${CSSReset};
${BaseStyles};
${MarkdownTableStyles};
${CodeBlockStyles};
`;

// const PrimaryButtonStyles = css`
//   ${(props) => {
//     return `

//     `;
//   }}
// `;

// background-color: ${theme.colors.purple} !important;
// color: ${theme.colors.light} !important;
// text-decoration: none !important;
// font-weight: ${theme.fontWeights[3]} !important;
// &:hover {
//   cursor: pointer;
// }
