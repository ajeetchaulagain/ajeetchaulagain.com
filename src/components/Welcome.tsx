import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as welcomeStyles from './welcome.module.scss';
import { useAuthorImage } from './utilities/use-author-image';
import { FaTelegramPlane } from 'react-icons/fa';
import SocialMediaIcons from './utilities/social-media-icons';

const Welcome = (): JSX.Element => {
  const { ...GatsbyImageSharpFixed } = useAuthorImage();

  return (
    <section className={welcomeStyles.welcomeSection}>
      <div className={welcomeStyles.welcomeContent}>
        <div className={welcomeStyles.aboutIntro}>
          <h1 className={welcomeStyles.heading}>
            <span style={{ fontWeight: 100 }}>Hello.I'm </span>Ajeet Chaulagain
          </h1>
          <p className={welcomeStyles.paragraph}>
            I am pragmatic software engineer, passionate and proficient building
            applications that are scalable, maintainable and well architected
            with beautifully crafted code{' '}
          </p>
          <div className={welcomeStyles.calltoactionWrapper}>
            <Link to="/about" className={welcomeStyles.welcomeButton}>
              More about me →
            </Link>
            {false && (
              <Link
                to="/projects"
                className={welcomeStyles.welcomeButton}
                style={{
                  backgroundColor: '#baa1ca',
                  color: '#000',
                  border: 'none',
                }}
              >
                View My Work
              </Link>
            )}
          </div>

          {/* Here goes the social media icons */}
          <SocialMediaIcons />
        </div>

        <div className={welcomeStyles.subscription}>
          <div className={welcomeStyles.imageHolder}>
            <span>
              <Img
                fixed={GatsbyImageSharpFixed}
                className={welcomeStyles.image}
              />
            </span>
            <h2>Newsletter</h2>
            <p>
              I write articles on modern software development. Signup my
              newsletter to get the update when it comes out.
            </p>

            <Link to="/newsletter" className={welcomeStyles.subscribeButton}>
              Subscribe &nbsp;
              <FaTelegramPlane />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
