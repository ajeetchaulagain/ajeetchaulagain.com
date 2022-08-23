import React, { ReactNode } from 'react';
import * as contentLayoutStyles from './content-layout.module.scss';
import { MDXProvider } from '@mdx-js/react';
import ContactForm from '../ContactForm';
import { GatsbyImage } from 'gatsby-plugin-image';

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
