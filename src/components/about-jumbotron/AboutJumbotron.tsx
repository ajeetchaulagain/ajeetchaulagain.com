import React from 'react';

import { useAuthorImage } from '../../hooks/useAuthorImage';
import * as jumbotronStyles from './about-jumbotron.module.scss';
import { PrimaryButtonLink } from 'components/button/Button';
import coffeImage from '../../images/cuplogo-sm.png';
import styled from 'styled-components';
import { StyledGatsbyImage } from 'components/gatsby-image/StyledGatsbyImage';

const StyledImg = styled.img`
  height: auto;
  width: 20px;
  margin-right: 0.2rem;
`;

export const AboutJumbotronBlog = (): JSX.Element => {
  const { gatsbyImageData } = useAuthorImage();

  return (
    <div className={jumbotronStyles.wrapper}>
      <div className={jumbotronStyles.imageWrapper}>
        <StyledGatsbyImage image={gatsbyImageData} alt="author-profile-image" />
      </div>
      <div className={jumbotronStyles.contentWrapper}>
        <p>
          Hi, I am Ajeet, a pragmatic software engineer based in Melbourne,
          Australia. I write an article about
          <em> modern software development and my side projects</em>. If this
          site has helped you somehow to learn, I would be grateful if you
          consider supporting me.
        </p>
        <PrimaryButtonLink to="https://ko-fi.com/ajeetchaulagain">
          <StyledImg src={coffeImage} /> Buy Me a Coffee
        </PrimaryButtonLink>
      </div>
    </div>
  );
};
