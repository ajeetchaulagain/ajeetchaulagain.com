import React from 'react';
import {
  MasterLayout,
  SEO,
  ContentRenderer,
  HeroBlank,
  Link,
} from 'components';

const FormSubmissionSuccess = () => {
  return (
    <MasterLayout>
      <SEO title="Thankyou for contacting me" />
      <HeroBlank />
      <ContentRenderer>
        <div>
          <h1>Thankyou for getting in touch!</h1>
          <p>
            Hi there. I appreciate you contacting me. I will get back in touch
            with you soon!
          </p>
          <p>Have a great day!</p>
          <Link to="/">Back to Site</Link>
        </div>
      </ContentRenderer>
    </MasterLayout>
  );
};

export default FormSubmissionSuccess;
