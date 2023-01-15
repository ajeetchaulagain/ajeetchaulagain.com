import React from 'react';
import { GlobalContextProvider } from './src/contexts/GlobalContextProvider';

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
