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

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.primaryBorder};
  ${mb(5)};
  ${px(4)}
  ${py(4)}
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.secondaryBorder};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  line-height: 1.5;
  border: none !important;
  ${px(4)}
  ${py(3)}
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.buttonColors.primary.text};
  background-color: ${({ theme }) => theme.buttonColors.primary.background};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  border-radius: 3px;
  width: 150px;
  &:hover {
    cursor: pointer;
    filter: contrast(120%);
  }

  svg {
    ${ml(2)}
  }
`;
