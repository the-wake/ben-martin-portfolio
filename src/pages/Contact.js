import React from 'react';

function Contact() {
  return (
    <div className="content-header">
      <h1>Get In Touch</h1>
      <div id="contact-blurb">
        <p>Thanks for reaching out! Feel free to leave your name, email address, and a breif description of your project or question. Or, if you prefer, you can contact me via <a href="mailto:bmartin2009@gmail.com?subject = Inquiry">email</a> or <a href="https://www.linkedin.com/in/ben-martin-26266443/" target="_blank">LinkedIn</a>.</p>
      </div>
      <form>
        <div className="form-group form-group-narrow">
          <label for="name">Name</label>
          <input type="name" className="form-control" id="name-field" placeholder="Name" required/>
        </div>
        <div className="form-group form-group-narrow">
          <label for="email-field">Email Address</label>
          <input type="email" className="form-control" id="email-field" aria-describedby="emailHelp" placeholder="Enter email" required/>
            <small id="emailHelp" className="form-text text-muted">I will never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          {/* <label for="project-desc"></label> */}
          <textarea className="form-control" id="message-field" placeholder="What can I help you with?"></textarea>
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
