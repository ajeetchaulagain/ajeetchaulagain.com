import React from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import { mt, mb } from 'styled-components-spacing';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${mt(3)};
  ${mb(6)};
`;

type CodeBlockProps = {
  code: string;
};

export const CodeBlock = ({ code }: CodeBlockProps) => {
  const highlighted = Prism.highlight(
    code,
    Prism.languages.typescript,
    'typescript'
  );

  return (
    <Wrapper className="gatsby-highlight">
      <pre className="language-typescript">
        <code
          className="language-typescript"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
    </Wrapper>
  );
};
