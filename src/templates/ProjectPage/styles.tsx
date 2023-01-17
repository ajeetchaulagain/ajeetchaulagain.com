import { ButtonLink } from 'components';
import styled from 'styled-components';
import { mt } from 'styled-components-spacing';

export const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButtonLink = styled(ButtonLink)`
  ${mt(7)};
`;
