import React, { useState } from 'react';
import { FaTelegramPlane, FaHeart } from 'react-icons/fa';
import { Paragraph } from '../paragraph/Paragraph';
import {
  Container,
  StyledHeading,
  FormSection,
  ImageWrapper,
  StyledForm,
  SuccessContentWrapper,
} from './styles';

import { Button, Input } from '../form/styles';
import { HeadingProps } from '../heading/Heading';
import { StyledGatsbyImage } from 'components/gatsby-image/StyledGatsbyImage';
import { useCelebrationImage, useBooksImage } from 'hooks';

type NewsLetterProps = {
  headingProps?: HeadingProps;
};

export const NewsLetter = ({
  headingProps = {
    type: 'serif',
    level: 'h2',
    size: 'xlarge',
  },
}: NewsLetterProps): JSX.Element => {
  const [status, setStatus] = useState<string>();
  const [email, setEmail] = useState<string>('');

  const { gatsbyImageData: booksGatsbyImageData } = useBooksImage();
  const { gatsbyImageData: celebrationGatsbyImageData } = useCelebrationImage();

  const FORM_URL = `https://app.convertkit.com/forms/3908991/subscriptions`;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const { target } = event;
    const data = new FormData(target as HTMLFormElement);
    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          accept: 'application/json',
        },
      });
      setEmail('');
      const json = await response.json();
      if (json.status === 'success') {
        setStatus('SUCCESS');
        return;
      }
    } catch (err) {
      setStatus('ERROR');
      console.log(err);
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value } = event.target;
    setEmail(value);
    setStatus(undefined);
  };

  return (
    <Container>
      <StyledHeading {...headingProps}>Newsletter</StyledHeading>
      <Paragraph>
        Signup my newsletter to get update when any new stuffs comes out!
      </Paragraph>
      <FormSection>
        {status === 'SUCCESS' ? (
          <>
            <ImageWrapper status={status}>
              <StyledGatsbyImage
                image={celebrationGatsbyImageData}
                alt="A celebration image"
              />
            </ImageWrapper>
            <SuccessContentWrapper>
              <StyledHeading size="small" type="sans-serif" level="h3">
                Woo-hoo! Thanks for signing up <FaHeart color="#FF3D00" />
              </StyledHeading>
              <Paragraph>
                Now, please check your email to confirm your subscription.
              </Paragraph>
            </SuccessContentWrapper>
          </>
        ) : (
          <>
            <ImageWrapper>
              <StyledGatsbyImage
                image={booksGatsbyImageData}
                alt="A books image"
              />
            </ImageWrapper>
            <StyledForm action={FORM_URL} method="post" onSubmit={handleSubmit}>
              {status === 'ERROR' && (
                <Paragraph>
                  Oops, Something went wrong! please try again
                </Paragraph>
              )}
              <Input
                type="email"
                aria-label="Your email"
                name="email_address"
                placeholder="Your email address"
                onChange={handleInputChange}
                value={email}
                required
              />

              <Button type="submit">
                Subscribe <FaTelegramPlane />
              </Button>
            </StyledForm>
          </>
        )}
      </FormSection>
    </Container>
  );
};
