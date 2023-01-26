import styled from 'styled-components';
import { p, my } from 'styled-components-spacing';
import { Paragraph } from '../paragraph/Paragraph';
import { mb, mr } from 'styled-components-spacing';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  ${p(4)};
  ${my(5)};

  a {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.brandPrimary};
    text-decoration: underline;
    font-weight: ${({ theme }) => theme.fontWeights[6]};
    :hover {
      text-decoration: none;
    }
  }
`;

export const StyledParagraph = styled(Paragraph)`
  ${mb(0)};
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights[4]};
`;

export const IconWrapper = styled.div`
  font-size: 3rem;
  display: flex;
  color: ${({ theme }) => theme.colors.brandPrimary};
  svg {
    display: inline-block;
    ${mr(4)};
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;
