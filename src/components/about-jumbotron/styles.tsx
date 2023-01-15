import styled from 'styled-components';
import { p, my } from 'styled-components-spacing';
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
`;
export const ImageWrapper = styled.div`
  width: 15%;
  ${StyledGatsbyImage} {
    & > picture > img {
      border-radius: 100%;
    }
  }
`;
export const TextContentWrapper = styled.div`
  width: 80%;
`;
