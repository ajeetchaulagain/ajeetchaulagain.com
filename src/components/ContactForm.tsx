import React from 'react';
import * as contactLayoutStyles from './contact-layout.module.scss';
const ContactForm = () => {
  return (
    <div className={contactLayoutStyles.contactFormWrap}>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <div className={contactLayoutStyles.formRow}>
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className={contactLayoutStyles.formRow}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Your Name" />
        </div>
        <div className={contactLayoutStyles.formRow}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="Your Message" />
        </div>
        <div className={contactLayoutStyles.formRow}>
          <button type="submit" className="box-button solid">
            Send
          </button>
          {/* <input type="reset" value="Clear" class="box-button" /> */}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
