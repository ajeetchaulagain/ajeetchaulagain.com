import React, { ReactNode } from 'react';
import breakpoint from 'styled-components-breakpoint';
import styled, { DefaultTheme } from 'styled-components';
import { Header, Footer } from '../header-footer';
import { GlobalStyle } from '../../styles/GlobalStyles';
import { Theme } from '../theme/Theme';
import { Content } from './ContentWrapper';

type MasterLayoutProps = {
  children?: ReactNode;
};

const Container = styled.div`
  ${Content} {
    ${breakpoint('xs', 'xl')`
      border-bottom: 1px solid ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.cardBorder};
  `};
  }
`;

export const MasterLayout = ({ children }: MasterLayoutProps) => {
  return (
    <Theme>
      <Container>
        <GlobalStyle />
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </Container>
    </Theme>
  );
};

export default MasterLayout;
