import React, { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { ContactForm } from '../contact-form/ContactForm';
import * as contentLayoutStyles from './content-layout.module.scss';

const shortCodes = { ContactForm, GatsbyImage };

type ContentLayoutProps = {
  bgcolor?: string;
  minHeight?: string;
  color?: string;
  children?: ReactNode;
};

export const ContentLayout = (props: ContentLayoutProps): JSX.Element => {
  return (
    <MDXProvider components={shortCodes}>
      <section className={contentLayoutStyles.contentSection}>
        <div
          className={contentLayoutStyles.content}
          style={{
            backgroundColor: props.bgcolor,
            color: props.color,
            minHeight: props.minHeight,
          }}
        >
          {props.children}
        </div>
      </section>
    </MDXProvider>
  );
};

export default ContentLayout;
