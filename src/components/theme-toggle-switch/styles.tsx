import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Ball = styled.span`
  background-color: ${({ theme }) => theme.colors.toggleBall};
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
  background-color: ${({ theme }) => theme.colors.toggleBackground};
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

export const Tooltip = styled.span`
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.brandPrimary};
  color: ${({ theme }) => theme.colors.primaryBackground};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  white-space: nowrap;
  padding: 3px 8px;
  border-radius: 4px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s ease;

  ${breakpoint('xs', 'lg')`
    display: none;
  `}
`;

export const Container = styled.div`
  position: relative;

  &:hover ${Tooltip} {
    opacity: 1;
  }

  ${Input}:checked + ${Label} ${Ball} {
    transform: translateX(24px);
  }
`;
