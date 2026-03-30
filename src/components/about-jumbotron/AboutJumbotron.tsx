import React from 'react';
import { useAuthorImage } from 'hooks';
import { StyledGatsbyImage } from '../gatsby-image/StyledGatsbyImage';
import { ButtonLink } from '../button-link';
import {
  Container,
  ImageWrapper,
  TextContentWrapper,
  StyledParagraph,
} from './styles';

export const AboutJumbotron = (): JSX.Element => {
  const { gatsbyImageData } = useAuthorImage();

  return (
    <Container>
      <ImageWrapper>
        <StyledGatsbyImage image={gatsbyImageData} alt="author-profile-image" />
      </ImageWrapper>
      <TextContentWrapper>
        <StyledParagraph>
          Hey — I'm Ajeet, a Software Engineer with commercial experience
          building and maintaining production systems. I write about
          <em>
            {' '}
            modern software development, side projects, and things I find
            interesting along the way
          </em>
          . If something here saved you time, a coffee is always welcome 😊
        </StyledParagraph>
        <ButtonLink
          to="https://ko-fi.com/ajeetchaulagain"
          text="Buy me a Coffee"
          variant="contained"
          color="primary"
          size="small"
          iconName="Coffee"
        />
      </TextContentWrapper>
    </Container>
  );
};
