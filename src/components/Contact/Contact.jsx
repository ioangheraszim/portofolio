import React, { useRef } from 'react'
import "./Contact.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import mail from "/src/assets/images/mail.jpg"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs, { sendForm } from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0o1m0he', 'template_n3vbbib', form.current, 'jGpGVWx0UZ16lsjkJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section className='container contact' id="contact">
      <h2 className='section-title'>Contact</h2>
      <div className='contact-wrapper'>
        <div className='contact-card'>
          <div className='contact-image'>
            <img src={mail} alt="" /> 
          </div>
          <h2>Ioan Gheraszim</h2>
          <div className='contact-text'>
            <p>Phone: <span>+44 7448280319</span></p>
            <p>Email: <a href="mailto:">ioangheraszim@gmail.com</a></p>
          </div>
          <div>
          <p className='find-me'>Find me on</p>
          <div className='social-icons'>
            <a target='blank_' className='github' href="https://github.com/ioangheraszim"><FontAwesomeIcon icon={faGithub}/></a>
            <a target='blank_' className='linkedin' href="https://www.linkedin.com/in/ioan-gheraszim/"><FontAwesomeIcon icon={faLinkedin}/></a>
          </div>
          </div>
        </div>
        <form onSubmit={sendEmail} ref={form} className='contact-form'>
          <div className='input-wrapper'>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Enter your name here...' name="user_name" />
          </div>
          <div className='input-wrapper'>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='Enter your email here...' name="user_email" />
          </div>
          <div className='input-wrapper'>
            <label htmlFor="subject">Subject</label>
            <input type="text" placeholder='Email subject...' name="subject" />
          </div>
          <div className='input-wrapper'>
            <label htmlFor="message">Your Message</label>
            <textarea name="message" placeholder='Enter message here...' cols="30" rows="10"></textarea>
          </div>
          <button type="submit">Send Message <span className='arrow'><FontAwesomeIcon icon={faArrowRight} /></span></button>
        </form>
      </div>
    </section>
  )
}

export default Contact