import React from 'react';
import Welcome from '../components/Welcome';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import MasterLayout from '../components/MasterLayout';
import ContentLayout from '../components/ContentLayout';
import { Link } from 'gatsby';
import { FaBook } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

import Newsletter from '../components/NewsLetter';

export const indexHeadingStyle = {
  marginBottom: '.3rem',
  fontWeight: '800',
  // color: "rgba(92, 37, 127, 1)",
  color: '#5294d5',
};

export const indexSubHeadingStyle = {
  marginBottom: '1.5rem',
  lineHeight: '1.5',
};

export const contentBoxButton = {
  fontWeight: '400',
  fontSize: '1rem',
};

export const subscribeSectionStyle = {
  textAlign: 'center',
  backgroundColor: 'grey',
};

const IndexPage = () => {
  return (
    <MasterLayout>
      <Welcome />
      <ContentLayout>
        <h1 style={indexHeadingStyle}>
          <FaBook /> From my blog{' '}
        </h1>
        <p style={indexSubHeadingStyle}>See the recent on my article list</p>
        <Blog />
        <Link to="/blog" className="box-button" style={contentBoxButton}>
          View all Articles →
        </Link>
      </ContentLayout>
      <ContentLayout bgcolor="white">
        <h1 style={indexHeadingStyle}>Projects</h1>
        <p style={indexSubHeadingStyle}>
          Checkout some of my projects with case study
        </p>
        <Projects />
        <Link to="/projects" className="box-button" style={contentBoxButton}>
          View All Projects →
        </Link>
      </ContentLayout>

      <ContentLayout bgcolor="#fff">
        <Newsletter />
      </ContentLayout>
    </MasterLayout>
  );
};

export default IndexPage;
