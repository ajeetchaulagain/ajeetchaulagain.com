import React from 'react';
import { Input, TextArea, Label } from '../form/styles';
import { Container, StyledForm, FormRow, Button } from './styles';

export const ContactForm = () => {
  return (
    <Container>
      <StyledForm
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <FormRow>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" />
        </FormRow>
        <FormRow>
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" />
        </FormRow>
        <FormRow>
          <Label htmlFor="message">Message</Label>
          <TextArea name="message" id="message" />
        </FormRow>
        <FormRow>
          <Button type="submit" className="box-button solid">
            Send
          </Button>
        </FormRow>
      </StyledForm>
    </Container>
  );
};
