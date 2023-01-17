import styled from 'styled-components';
import { p, my, mb } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { StyledGatsbyImage } from '../gatsby-image/StyledGatsbyImage';
import { Paragraph } from '../paragraph/Paragraph';

export const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${p(5)};
  ${my(9)}
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius.base};

  ${breakpoint('xs', 'md')`
     flex-direction:column;
  `};
`;
export const ImageWrapper = styled.div`
  width: 15%;
  ${StyledGatsbyImage} {
    & > picture > img {
      border-radius: 100%;
    }
  }
  ${breakpoint('xs', 'md')`
     margin:0 auto;
     ${mb(4)};
     width:120px;
  `};
`;
export const TextContentWrapper = styled.div`
  width: 80%;
  ${breakpoint('xs', 'md')`
     text-align:center;
     width:100%;
  `};
`;
