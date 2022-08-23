import React from 'react';
import EmailList from './EmailListForm';

import * as newsLetterStyles from './newsletter.module.scss';

export const NewsLetter = (): JSX.Element => {
  return (
    <div className={newsLetterStyles.wrapper}>
      <h2>Newsletter</h2>
      <p>Tutorials . How-to-guides . Freebies . and more</p>
      <p>Signup my newsletter to get update when any new stuffs comes out!</p>
      <EmailList />
    </div>
  );
};
