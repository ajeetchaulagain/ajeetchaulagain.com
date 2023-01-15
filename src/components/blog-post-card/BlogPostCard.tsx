import { StyledGatsbyImage } from '../gatsby-image/StyledGatsbyImage';
import { Tag } from '../tag/Tag';
import Link from '../link/Link';

import React from 'react';
import { BlogPostCardProps } from './PropTypes';
import {
  Container,
  StyledHeading,
  ImageWrapper,
  TextContentWrapper,
  DateAndTimeComponent,
  TagsWrapper,
} from './styles';

export const BlogPostCard = ({
  title,
  gatsbyImageProps,
  publishDate,
  timeToRead,
  tags,
  blogPostRelativeUrl,
  headingProps = {
    level: 'h2',
    size: 'small',
    type: 'sans-serif',
  },
}: BlogPostCardProps) => {
  return (
    <Link to={blogPostRelativeUrl}>
      <Container>
        <ImageWrapper>
          {gatsbyImageProps && <StyledGatsbyImage {...gatsbyImageProps} />}
        </ImageWrapper>
        <TextContentWrapper>
          <StyledHeading {...headingProps}>{title}</StyledHeading>
          <DateAndTimeComponent>
            {publishDate} / {timeToRead} min read
          </DateAndTimeComponent>
          {tags && tags.length && (
            <TagsWrapper>
              {tags.map((tag, index) => (
                <Tag key={index} size="small">
                  {tag}
                </Tag>
              ))}
            </TagsWrapper>
          )}
        </TextContentWrapper>
      </Container>
    </Link>
  );
};
