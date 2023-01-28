import styled from 'styled-components';
import { mb, px, py, ml } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import { Heading } from '../heading/Heading';

export const Container = styled.div``;

export const StyledHeading = styled(Heading)`
  display: flex;
  align-items: center;
  svg {
    ${ml(2)};
  }
`;

export const ImageWrapper = styled.div<{ status?: string }>`
  width: ${({ status }) => (status === 'SUCCESS' ? '18%' : '25%')};
  img {
    width: 100%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  width: 68%;
  flex-direction: column;
`;

export const SuccessContentWrapper = styled.div`
  width: 76%;
`;

export const FormSection = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  ${px(5)}
  ${py(7)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${breakpoint('xs', 'md')`
    flex-direction:column;
    ${ImageWrapper}{
      ${mb(5)};
    };
    ${StyledForm}{
      width:100%;
    }
    ${SuccessContentWrapper}{
      width:100%;
    }
  `}
  ${breakpoint('xs', 'lg')`
    ${px(4)}
    ${py(5)};
  `}
`;
