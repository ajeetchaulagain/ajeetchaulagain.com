import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FaTelegramPlane } from 'react-icons/fa';

import * as welcomeStyles from './landing-page-hero.module.scss';
import { useAuthorImage } from '../../hooks/use-author-image';
import { SocialMediaIcons } from '../utilities/social-media-icons';
import { BaseButtonLink } from 'components/button/Button';
import styled from 'styled-components';
import { mt } from 'styled-components-spacing';

const AboutMeButton = styled(BaseButtonLink)`
  &:hover {
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.purple};
  }
`;

const SubscribeButton = styled(BaseButtonLink)`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.darkGrey};
  ${mt(4)}
  display: inline-block;
  border: ${(props) => props.theme.borders.none};
  &:hover {
    color: ${(props) => props.theme.colors.purple};
  }
`;

export const LandingPageHero = (): JSX.Element => {
  const { gatsbyImageData } = useAuthorImage();

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
            <AboutMeButton to="/about">MORE ABOUT ME →</AboutMeButton>
          </div>

          {/* Here goes the social media icons */}
          <SocialMediaIcons />
        </div>

        <div className={welcomeStyles.subscription}>
          <div className={welcomeStyles.imageHolder}>
            <span>
              <GatsbyImage
                image={gatsbyImageData}
                loading="eager"
                className={welcomeStyles.image}
                alt="author-profile-image"
                style={{ opacity: 1 }}
              />
            </span>
            <h2>Newsletter</h2>
            <p>
              I write articles on modern software development. Signup my
              newsletter to get the update when it comes out.
            </p>

            <SubscribeButton to="/newsletter">
              Subscribe &nbsp;
              <FaTelegramPlane />
            </SubscribeButton>
          </div>
        </div>
      </div>
    </section>
  );
};
