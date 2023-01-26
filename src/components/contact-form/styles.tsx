import styled from 'styled-components';
import { Button as FormButton } from '../form/styles';
import { mb } from 'styled-components-spacing';

export const Container = styled.div`
  ${mb(6)}
`;

export const Button = styled(FormButton)`
  width: 90px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
`;
