import React from 'react';
import MasterLayout from '../components/MasterLayout';
import IntroSection from '../components/IntroSection';
import ContentLayout from '../components/ContentLayout';
import About from '../components/About';
import NewsLetter from '../components/NewsLetter';

const AboutPage = () => {
  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <About />
        <NewsLetter />
      </ContentLayout>
    </MasterLayout>
  );
};

export default AboutPage;
