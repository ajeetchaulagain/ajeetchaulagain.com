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

import { Button, Input } from 'components/form/styles';

export const NewsLetter = (): JSX.Element => {
  const [status, setStatus] = useState<string>();
  const [email, setEmail] = useState<string>('');

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
      console.log('response1', response);
      setStatus('SUCCESS');
      setEmail('');
      const json = await response.json();
      if (json.status === 'success') {
        console.log('response2', response);
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
      <StyledHeading level="h2">Newsletter</StyledHeading>
      <Paragraph>
        Signup my newsletter to get update when any new stuffs comes out!
      </Paragraph>
      <FormSection>
        {status === 'SUCCESS' ? (
          <>
            <ImageWrapper status={status}>
              <img src="/celebration.png" />
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
              <img src="/books.png" />
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
