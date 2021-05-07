import React from 'react';
import './contact.css';
import {data} from './data';
import Item from './Item';
import Fade from 'react-reveal/Fade';




const Contact = () => {
  return (
    <div className="contact" id="contact">
      <Fade bottom>
        <div className="section-title">
          <h1 className="title">contact</h1>
          <div className="underline"></div>
        </div>
      </Fade>

      <div className="contact-container">
        <Fade bottom>
          {
            data.map((contact, index) => {
              return <Item key={index} {...contact} />
            })
          }
        </Fade>
      </div>

    </div>
  )
}

export default Contact;