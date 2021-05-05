import React from 'react'
import './contact.css'
import {data} from './data'
import Item from './Item'



const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="section-title">
        <h1 className="title">contact</h1>
        <div className="underline"></div>
      </div>

      <div className="contact-container">
        {
          data.map((contact, index) => {
            return <Item key={index} {...contact} />
          })
        }
      </div>

    </div>
  )
}

export default Contact;