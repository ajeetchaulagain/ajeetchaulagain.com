import styled from 'styled-components';
import { Link } from 'gatsby';
import { px, py } from 'styled-components-spacing';

export const BaseButtonLink = styled(Link)`
  border: ${(props) => props.theme.borders.thin};
  ${px(3)};
  ${py(2)};
  border-radius: ${(props) => props.theme.borderRadius.base};
`;

export const PrimaryButtonLink = styled(BaseButtonLink)``;

export const SecondaryButtonLink = styled(BaseButtonLink)``;
