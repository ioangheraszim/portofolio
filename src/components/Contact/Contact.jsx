import React from 'react'
import "./Contact.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import mail from "/src/assets/images/mail.jpg"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Contact() {
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
            <p>Email: <span>ioangheraszim@gmail.com</span></p>
          </div>
          <div>
          <p className='find-me'>Find me on</p>
          <div className='social-icons'>
            <a target='blank_' className='github' href="https://github.com/ioangheraszim"><FontAwesomeIcon icon={faGithub}/></a>
            <a target='blank_' className='linkedin' href="https://www.linkedin.com/in/ioan-gheraszim/"><FontAwesomeIcon icon={faLinkedin}/></a>
          </div>
          </div>
        </div>

        <form className='contact-form'>
          <div className='input-wrapper'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='name'/>
          </div>
          <div className='input-wrapper'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='email'/>
          </div>
          <div className='input-wrapper'>
            <label htmlFor="">Subject</label>
            <input type="text" placeholder='subject'/>
          </div>
          <div className='input-wrapper'>
            <label htmlFor="">Your Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button>Send Message <span className='arrow'><FontAwesomeIcon icon={faArrowRight}/></span></button>
        </form>
      </div>
    </section>
  )
}

export default Contact