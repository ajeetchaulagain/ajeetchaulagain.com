import React from 'react';
import * as quickInfoStyle from './quick-info.module.scss';
import { Link } from 'gatsby';
import { FaInfoCircle } from 'react-icons/fa';

type QuickInfoType = {
  name?: string;
  url: string;
  children?: React.ElementType;
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
