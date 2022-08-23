import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { FaInfoCircle } from 'react-icons/fa';

import * as quickInfoStyle from './quick-info.module.scss';

type QuickInfoType = {
  name?: string;
  url: string;
  children?: ReactNode;
};

export const QuickInfo = (props: QuickInfoType) => {
  return (
    <div className={quickInfoStyle.quickInfo}>
      <div>
        <FaInfoCircle />
      </div>
      <p>
        <Link to={props.url}>{props.name}</Link> {props.children}
      </p>
    </div>
  );
};
