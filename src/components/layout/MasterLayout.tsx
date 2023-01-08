import React, { ReactNode } from 'react';
import { Header, Footer } from '../header-footer';
import { GlobalStyle } from '../../styles/GlobalStyles';
import { Theme } from 'components/theme/Theme';

type MasterLayoutProps = {
  children?: ReactNode;
};

export const MasterLayout = ({ children }: MasterLayoutProps) => {
  return (
    <Theme>
      <GlobalStyle />
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </Theme>
  );
};

export default MasterLayout;
