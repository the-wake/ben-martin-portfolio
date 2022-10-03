import React, { useState } from 'react';
import { send } from 'emailjs-com';

function Contact() {

  const [formInfo, setFormInfo] = useState({
    from_name: '',
    to_name: 'Ben Martin',
    reply_to: '',
    message: '',
  });

  const [acknowledge, setAcknowledge] = useState('');

  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      'service_r7ew2c9',
      'template_6c538r9',
      formInfo,
      'fOcbg67KvHVwFpNlj'
    );

    toggleAcknowledge();

    setFormInfo(
      {
        from_name: '',
        to_name: 'Ben Martin',
        reply_to: '',
        message: '',
      }
    );
  };

  const toggleAcknowledge = () => {
    setAcknowledge('Your message has been submitted. Thank you!');
    setInterval(() => {
      setAcknowledge('');
    }, 5000);
  };

  return (
    <div className="content-header">
      <h1>Get In Touch</h1>
      <div id="contact-blurb">
        <p>Thanks for reaching out! Feel free to leave your name, email address, and a breif description of your project or question. Or, if you prefer, you can contact me via <a href="mailto:bmartin2009@gmail.com?subject = Inquiry">email</a> or <a href="https://www.linkedin.com/in/ben-martin-26266443/" target="_blank" rel="noreferrer">LinkedIn</a>.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group form-group-narrow">
          <label>Name</label>
          <input name="from_name" className="form-control" id="name-field" value={formInfo.from_name} onChange={handleChange} placeholder="Name" required />
        </div>
        <div className="form-group form-group-narrow">
          <label>Email Address</label>
          <input name="reply_to" className="form-control" id="email-field" aria-describedby="emailHelp" value={formInfo.reply_to} onChange={handleChange} placeholder="Enter email" required />
          <small id="emailHelp" className="form-text text-muted">I will never share your email address.</small>
        </div>
        <div className="form-group">
          <textarea name="message" className="form-control" id="message-field" value={formInfo.message} onChange={handleChange} placeholder="What can I help you with?"></textarea>
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
      <p>
        {acknowledge}
      </p>
    </div>
  );
};

export default Contact;
