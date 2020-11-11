import React, { Component } from 'react'
import Instagram from  '../images/instagram.jpg'
import Twitter from '../images/twitter.png'
import Facebook from '../images/facebook.webp'
import Navbar from  '../components/Navbar'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div><span className="socialtitle">SOCIAL MEDIA</span></div>
          <div className='social'>
            <img src={Instagram} alt='instagram'  height='18%' width='18%'/>
            <img src={Facebook} alt='facebook' height='100%' width='18%'/>
            <img src={Twitter}alt='twitter'  height='18%' width='18%'/>
          </div>
            <div><span className='email-title'>EMAIL 13FOX AUDIO</span></div>
          <div className="contact-form">
            <form
              action="https://formspree.io/chefbg555@gmail.com"
              method="POST"
            >
              <div className="landing-contact-wrapper-from-input">
                <div className="form-input">
                  <label htmlFor="your-email">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="contact-name" 
                      autoComplete="off"
                      placeholder=""
                    />
                </div>
                <div className="form-input">
                  <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="text"
                      name="contact-email"
                      autoComplete="off"
                      placeholder=""
                    />
                </div>
                    <div className="form-input">
                      <textarea
                        id="contact-message"
                        name="contact-message"
                        cols="45"
                        rows="10"
                        >
                        </textarea>
                      </div>
                    </div>
                    <div className="landing-contact-buttons">
                      <button type="submit">Send</button>
                      <input type="reset" />
                    </div>
            </form>
          </div>
        <Navbar/>
      </div>
    )
  }
}
