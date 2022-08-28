import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export const StyledGatsbyImage = styled(GatsbyImage)`
  & > picture > img {
    opacity: 1 !important; // Fixes for opacity injection issue in gatbsy-plugin-image
  }
`;
