import React from 'react';
import MasterLayout from '../components/MasterLayout';
import IntroSection from '../components/IntroSection';
import { FaSmile } from 'react-icons/fa';
import ContentLayout from '../components/ContentLayout';
import ContactForm from '../components/ContactForm';
import SocialMediaIcons from '../components/utilities/social-media-icons';

const ContactPage = () => {
  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <h1>Contact Me</h1>
        <p>
          Feel free to say a friendly hello to me via{' '}
          <a href="mailto:chaulagainajeet@gmail.com">
            chaulagainajeet@gmail.com
          </a>{' '}
          or by using the contact form available below.{' '}
        </p>
        <ContactForm />
        <h2>Follow me on:</h2>
        <SocialMediaIcons />
      </ContentLayout>
    </MasterLayout>
  );
};

export default ContactPage;
