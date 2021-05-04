import React from 'react';
import './testimonials.css';
import Testomonial from './Testimonial';
import {data} from './data';


const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="section-title">
        <h1 className="title">Testimonials</h1>
        <div className="underline"></div>
      </div>

      <div className="testimonials-container">
        {
          data.map((person, index) => {
            return <Testomonial key={index} {...person} />
          })
        }
      </div>
    </div>
  )
}

export default Testimonials;