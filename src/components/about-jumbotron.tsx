import React from 'react';
import Img from 'gatsby-image';
import * as jumbotronStyles from './about-jumbotron.module.scss';
import { useAuthorImage } from './utilities/use-author-image';
import BuyMeCoffeeButton from './utilities/buy-me-coffee-button';

const AboutJumbotronBlog = (): JSX.Element => {
  const { ...GatsbyImageSharpFixed } = useAuthorImage();

  return (
    <div className={jumbotronStyles.wrapper}>
      <div className={jumbotronStyles.imageWrapper}>
        <Img fixed={GatsbyImageSharpFixed} />
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

export default AboutJumbotronBlog;
