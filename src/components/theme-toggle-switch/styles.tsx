import styled from 'styled-components';

export const Ball = styled.span`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
  :checked {
    ${Ball} {
      transform: translateX(24px);
    }
  }
`;

export const Label = styled.label`
  background-color: ${({ theme }) => theme.colors.oldSilver50};
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  ${Input}:checked + ${Label} ${Ball} {
    transform: translateX(24px);
  }
`;
