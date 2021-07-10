import React from 'react';
import MasterLayout from '../components/master-layout';
import IntroSection from '../components/intro-section';
import ContentLayout from '../components/content-layout';
import About from '../components/about';
import NewsLetter from '../components/newsletter';

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
