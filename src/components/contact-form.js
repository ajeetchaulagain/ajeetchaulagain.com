import React from "react"
import contactLayoutStyles from "./contact-layout.module.scss"
const ContactForm = () => {
  return (
    <div className={contactLayoutStyles.contactFormWrap}>
      <form
        method="post"
        action="https://getform.io/f/72e8bdf4-8f90-40f5-9a5c-62c9f7a4bd70"
      >
        <div className={contactLayoutStyles.contactRow}>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className={contactLayoutStyles.contactRow}>
          <label for="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Your Name" />
        </div>
        <div className={contactLayoutStyles.contactRow}>
          <label for="message">Message</label>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Your Message"
          />
        </div>
        <div className={contactLayoutStyles.contactRow}>
          <button type="submit" class="box-button solid">
            Send
          </button>
          <input type="reset" value="Clear" class="box-button" />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
