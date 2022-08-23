import React, { ReactNode } from 'react';
import * as introStyles from './intro-section.module.scss';

type IntroSectionProps = {
  children?: ReactNode;
};

export const IntroSection = (props: IntroSectionProps) => {
  return (
    <section className={introStyles.introSection}>
      <div className={introStyles.introContent}>
        <h1 className={introStyles.headingLight}>{props.children}</h1>
      </div>
    </section>
  );
};
