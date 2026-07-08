import React from 'react';
import {
  ContentRenderer,
  MasterLayout,
  NewsLetter,
  SEO,
  HeroBlank,
  ButtonLink
} from 'components';

const NewsLetterPage = () => {
  return (
    <MasterLayout>
      <SEO title="Newsletter" description="Subscribe to my newsletter" />
      <HeroBlank />
      <ContentRenderer>
        <div>
          <NewsLetter />
        </div>
        <br />
        <p>
          <ButtonLink
            to="/"
            text="← Back to home"
            variant="text"
            color="primary"
            size="large"
          />
        </p>
      </ContentRenderer>
    </MasterLayout>
  );
};

export default NewsLetterPage;
