import React, { ReactNode } from 'react';
import { Header } from '../header';
import Footer from '../footer/Footer';
import { GlobalStyle } from '../../styles/GlobalStyles';
import { Theme } from 'components/theme/Theme';

type MasterLayoutProps = {
  children?: ReactNode;
};

export const MasterLayout = ({ children }: MasterLayoutProps) => {
  return (
    <Theme>
      <GlobalStyle />
      <div className="main">
        <Header />
        {children}
        <Footer />
      </div>
    </Theme>
  );
};

export default MasterLayout;
