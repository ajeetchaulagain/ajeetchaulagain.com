import styled from 'styled-components';
import { p, mb, px, py, ml } from 'styled-components-spacing';
import { Heading } from '../heading/Heading';

export const Container = styled.div``;

export const StyledHeading = styled(Heading)`
  ${mb(2)};
  display: flex;
  align-items: center;
  svg {
    ${ml(2)};
  }
`;

export const FormSection = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  ${px(6)}
  ${py(7)};
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const SuccessContentWrapper = styled.div`
  width: 76%;
`;


