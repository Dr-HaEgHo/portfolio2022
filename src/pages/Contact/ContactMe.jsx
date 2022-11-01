import React, { useRef } from 'react'
import "./contactme.css"
import emailjs from '@emailjs/browser';
import { contactConfig } from '../../content_option';
import { Icon } from '@iconify/react';
// import { SMTPClient } from 'emailjs';



const ContactMe = () => {
    
    const form = useRef()
    
    
    const handleSendMessage = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            contactConfig.YOUR_SERVICE_ID,
            contactConfig.YOUR_TEMPLATE_ID,
            form.current,
            contactConfig.YOUR_PUBLIC_KEY
        )
        .then((result) => {
            console.log(result.text);
            e.target.reset()
            }, (error) => {
        console.log(error.text);
            });
        }



  return (
      <div className='contact' id='contact' >
          <div className="container">
              <div className="ct">
                  <div className="contact-me">
                      <div className="ct-header"><h1>Contact Me</h1><hr /></div>
                      <div className="ct-form">
                          <div className="ct-links">
                              <h3>Send Me a Message</h3>
                              <p> { contactConfig.description }</p>
                              <p> <Icon icon="ic:baseline-email" /> { contactConfig.YOUR_EMAIL }</p>
                              <p> <Icon icon="bxs:phone" /> { contactConfig.YOUR_FONE }</p>
                          </div>
                          <form ref={form} onSubmit={handleSendMessage}>
                              <div className='ct-form-tops'>
                                  <input type="text" name='user_name' placeholder='Your Name'/>
                                  <input type="email" name='user_email' placeholder='Email' />
                              </div>
                              <textarea name="message" rows="10" placeholder='Your message' ></textarea>
                              <div className="ct-send-message">
                                  <button type='submit' >Send Message</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ContactMe;