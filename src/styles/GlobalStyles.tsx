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
