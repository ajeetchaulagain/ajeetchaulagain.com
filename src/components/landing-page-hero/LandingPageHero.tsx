import React from 'react';
import styled from 'styled-components';
import { mt } from 'styled-components-spacing';
import { FaTelegramPlane } from 'react-icons/fa';

import * as welcomeStyles from './landing-page-hero.module.scss';
import { useAuthorImage } from '../../hooks/use-author-image';
import { SocialMediaIcons } from '../utilities/social-media-icons';
import { BaseButtonLink } from 'components/button/Button';
import { StyledGatsbyImage } from 'components/gatsby-image/StyledGatsbyImage';

const AboutMeButton = styled(BaseButtonLink)`
  border: ${(props) => props.theme.borders.thin};
  &:hover {
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.purple};
  }
`;

const SubscribeButton = styled(BaseButtonLink)`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.darkGrey};
  display: block;
  ${mt(4)}
  display: inline-block;
  border: ${(props) => props.theme.borders.none};
  &:hover {
    color: ${(props) => props.theme.colors.purple};
  }
  @media only screen and (max-width: 599px) {
    display: none;
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
            with beautifully crafted code
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
              <StyledGatsbyImage
                image={gatsbyImageData}
                loading="eager"
                className={welcomeStyles.image}
                alt="author-profile-image"
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
