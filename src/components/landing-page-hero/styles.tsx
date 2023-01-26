import styled, { css } from 'styled-components';
import { mb, px, pt, pb, mt } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { Heading } from '../heading/Heading';
import { Paragraph } from '../paragraph/Paragraph';
import { StyledGatsbyImage } from '../gatsby-image/StyledGatsbyImage';

export const Container = styled.section`
  width: 100%;
  background: url('pattern-3.jpg') repeat fixed center;
  background-size: 1000px;
`;

export const GradientOverlay = styled.div`
  ${({ theme }) =>
    theme.name === 'lightTheme' &&
    css`
      background: linear-gradient(
        77deg,
        ${theme.colors.heroGradientStop1} 9%,
        ${theme.colors.heroGradientStop2} 100%
      );
    `};

  ${({ theme }) =>
    theme.name === 'darkTheme' &&
    css`
      background: linear-gradient(
        77deg,
        ${theme.colors.heroGradientStop1} 9%,
        ${theme.colors.heroGradientStop2} 100%
      );
    `};
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  ${pt(8)};
  ${pb(6)};
  ${px(4)};
  ${breakpoint('lg')`
     flex-direction:row-reverse;
     justify-content:space-between;
     align-items:flex-start;
     margin:0 auto;
  `};

  ${breakpoint('xl')`
    ${pb(6)};
    padding-bottom:9rem;
  `};

  ${breakpoint('xxl')`
    width: 70rem;
  `};
`;

export const StyledHeading = styled(Heading)`
  && {
    color: ${({ theme }) =>
      theme.name === 'lightTheme'
        ? theme.colors.secondaryText
        : theme.colors.primaryText};
    ${breakpoint('lg')`
      font-size: 3.5rem;
    `};
  }
  ${mb(2)};
`;

export const StyledParagraph = styled(Paragraph)`
  && {
    color: ${({ theme }) =>
      theme.name === 'lightTheme'
        ? theme.colors.secondaryText
        : theme.colors.primaryText};
  }
`;

export const AboutImage = styled(StyledGatsbyImage)`
  width: 20%;
  & > picture > img {
    border-radius: 100%;
  }
`;

export const AboutWrapper = styled.div`
  text-align: center;

  ${breakpoint('xs', 'lg')`
    ${mt(6)}
  `}
  ${breakpoint('lg')`
    width: 70%;
    text-align: left;
  `};
`;

export const SocialMediaLinksWrapper = styled.div`
  ${mt(6)}
`;
