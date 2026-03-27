import React from 'react';
import styled from 'styled-components';
import { mb, mt } from 'styled-components-spacing';

type VideoPlayerProps = {
  src: string;
  caption?: string;
};

const Figure = styled.figure`
  ${mb(5)};
`;

const Video = styled.video`
  max-width: 100%;
  height: auto;
  display: block;
`;

const Caption = styled.figcaption`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: left;
  ${mt(2)};
`;

export const VideoPlayer = ({ src, caption }: VideoPlayerProps) => {
  return (
    <Figure>
      <Video src={src} controls muted playsInline />
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  );
};
