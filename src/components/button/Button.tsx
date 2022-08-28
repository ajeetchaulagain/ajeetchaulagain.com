import styled from 'styled-components';
import { Link } from 'gatsby';
import { px, py } from 'styled-components-spacing';

export const BaseButtonLink = styled(Link)`
  ${px(3)};
  ${py(2)};
  border-radius: ${(props) => props.theme.borderRadius.base};
`;

export const PrimaryButtonLink = styled(BaseButtonLink)`
  background-color: ${(props) => props.theme.colors.purple};

  color: ${(props) =>
    props.theme.colors
      .light} !important; //Revisit later once content layout is refactored

  font-weight: ${(props) => props.theme.fontWeights[3]} !important;
  text-decoration: none !important;
  :hover {
    background-color: #47205f; // Revisit later
  }
`;

export const SecondaryButtonLink = styled(BaseButtonLink)`
  border: 1px solid black;
  color: red;
`;
