import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { mb } from 'styled-components-spacing';
import { Heading } from '../heading/Heading';
import { GlobalStateContext } from 'contexts/GlobalContextProvider';

const CommentContainer = styled.div`
  ${mb(6)};
`;

export const Comments = () => {
  const { theme } = useContext(GlobalStateContext);

  useEffect(() => {
    const utteranceTheme =
      theme === 'darkTheme' ? 'github-dark' : 'github-light';
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('src', 'https://utteranc.es/client.js');
    scriptElement.setAttribute('crossorigin', 'anonymous');
    scriptElement.setAttribute('repo', 'ajeetchaulagain/ajeetchaulagain.com');
    scriptElement.setAttribute('issue-term', 'title');
    scriptElement.setAttribute('theme', utteranceTheme);
    scriptElement.async = true;

    const comments = document.getElementById('utterance-comment-box');
    if (comments) comments.appendChild(scriptElement);

    return () => {
      const comments = document.getElementById('utterance-comment-box');
      if (comments) comments.innerHTML = '';
    };
  }, [theme]);

  return (
    <CommentContainer>
      <Heading type="serif" level="h3">
        Comments
      </Heading>
      <div id="utterance-comment-box" />
    </CommentContainer>
  );
};
