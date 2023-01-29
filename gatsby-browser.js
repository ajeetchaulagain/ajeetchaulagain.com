import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import React from 'react';
import { GlobalContextProvider } from './src/contexts/GlobalContextProvider';

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
