import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as jumbotronStyles from './about-jumbotron.module.scss';
import { useAuthorImage } from '../utilities/use-author-image';
import BuyMeCoffeeButton from '../utilities/buy-me-coffee-button';

export const AboutJumbotronBlog = (): JSX.Element => {
  const { gatsbyImageData } = useAuthorImage();

  return (
    <div className={jumbotronStyles.wrapper}>
      <div className={jumbotronStyles.imageWrapper}>
        <GatsbyImage image={gatsbyImageData} alt="author-profile-image" />
      </div>
      <div className={jumbotronStyles.contentWrapper}>
        <p>
          Hi, I am Ajeet, a pragmatic software engineer based in Melbourne,
          Australia. I write an article about
          <em> modern software development and my side projects</em> to help the
          beginner start their career in software engineering. If my site has
          helped you somehow to learn, I would be grateful if you consider
          supporting me.
        </p>
        <div className={jumbotronStyles.supportSection}>
          <BuyMeCoffeeButton />
        </div>
      </div>
    </div>
  );
};
