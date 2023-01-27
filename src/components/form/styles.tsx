import styled from 'styled-components';
import { mb, px, py, ml } from 'styled-components-spacing';

export const Input = styled.input`
  border: 2px solid
    ${({ theme }) =>
      theme.name === 'lightTheme'
        ? theme.colors.primaryBorder
        : theme.colors.oldSilver50};
  ${mb(5)};
  ${px(4)}
  ${py(4)}
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) =>
    theme.name === 'lightTheme'
      ? theme.colors.primaryBackground
      : theme.colors.quaternaryBackground};

  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.secondaryBorder};
  }
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.colors.primaryText};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  ${mb(3)};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.primaryBorder};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.primaryText};
  border: 2px solid
    ${({ theme }) =>
      theme.name === 'lightTheme'
        ? theme.colors.primaryBorder
        : theme.colors.oldSilver50};
  background-color: ${({ theme }) =>
    theme.name === 'lightTheme'
      ? theme.colors.primaryBackground
      : theme.colors.quaternaryBackground};
  ${mb(5)};
  ${px(4)};
  ${py(4)};
  min-height: 200px;
  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.secondaryBorder};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  border: none !important;
  ${px(4)}
  ${py(3)}
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
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
