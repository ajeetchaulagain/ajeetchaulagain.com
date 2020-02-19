import React from "react"

const ContactForm = () => {

  return (
    <form method="post" action="https://getform.io/f/72e8bdf4-8f90-40f5-9a5c-62c9f7a4bd70">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Name
    <input type="text" name="name" />
  </label>
  <label>
    Message
    <input type="text" name="message" />
  </label>
  <button type="submit">Send</button>
  <input type="reset" value="Clear" />
</form>
  )
}


export default ContactForm