import React from 'react';
import { useAuthorImage } from 'hooks';
import { StyledGatsbyImage } from 'components/gatsby-image/StyledGatsbyImage';
import { ButtonLink } from 'components/button-link';
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
          Hi, I am Ajeet, a pragmatic software engineer based in Melbourne,
          Australia. I write an article about
          <em> modern software development and my side projects</em>. If this
          site has helped you somehow to learn, I would be grateful if you
          consider supporting me.
        </StyledParagraph>
        <ButtonLink
          to="https://ko-fi.com/ajeetchaulagain"
          text="Buy me a Coffee"
          variant="contained"
          color="primary"
          size="medium"
          iconName="Coffee"
        />
      </TextContentWrapper>
    </Container>
  );
};
