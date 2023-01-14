import styled, { css } from 'styled-components';
import { mb, px } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { Heading } from 'components/heading/Heading';
import { Paragraph } from 'components/paragraph/Paragraph';
import { StyledGatsbyImage } from 'components/gatsby-image/StyledGatsbyImage';

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
  padding-top: 12rem;
  padding-bottom: 4rem;
  ${px(4)};

  ${breakpoint('sm')`
    padding-top: 9rem;
    padding-bottom: 4rem;
  `}
  ${breakpoint('lg')`
     flex-direction:row-reverse;
     justify-content:space-between;
     align-items:flex-start;
     margin:0 auto;
     padding-top: 8rem;
  `};

  ${breakpoint('xl')`
     flex-direction:row-reverse;
     justify-content:space-between;
     align-items:flex-start;
     margin:0 auto;
     padding-bottom: 9rem;
  `};

  ${breakpoint('xl')`
    width: 62rem;
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
    margin-top:2rem;
  `}
  ${breakpoint('lg')`
    width: 70%;
    text-align: left;
  `};
`;
