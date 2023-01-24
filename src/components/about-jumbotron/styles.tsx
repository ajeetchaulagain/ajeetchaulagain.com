import styled from 'styled-components';
import { p, mb, mt, py, px } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { StyledGatsbyImage } from '../gatsby-image/StyledGatsbyImage';
import { Paragraph } from '../paragraph/Paragraph';

export const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.lineHeights.bodyCondensed};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${py(4)};
  ${px(4)};
  ${mt(9)};
  ${mb(8)}
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
